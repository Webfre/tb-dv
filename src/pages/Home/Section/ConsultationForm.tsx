import React from "react";
import { TextField, Grid, Box } from "@mui/material";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "../../../ui/PhoneInput";
import styles from "./ConsultationForm.module.scss";
import { textField_input_sx } from "../../../styles/global";
import { useEnrollCourseMutation } from "../../../api/authApi";
import CustomToast from "../../../ui/CustomToast";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Поле Имя обязательно"),
  email: yup
    .string()
    .email("Некорректный формат email")
    .required("Поле Почта обязательно"),
  phone: yup
    .string()
    .required("Телефон обязателен")
    .test("is-valid-phone", "Введите корректный номер", (value) => {
      if (!value) return false;
      const cleaned = value.replace(/\D/g, "");
      return (
        cleaned.length === 11 &&
        (cleaned.startsWith("8") || cleaned.startsWith("7"))
      );
    }),
});

interface ConsultationFormProps {
  reflink: React.RefObject<HTMLDivElement | null>;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ reflink }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: yupResolver(schema),
  });

  const [enrollCourse] = useEnrollCourseMutation();

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        title: "--Главная--",
      };

      await enrollCourse(payload).unwrap();

      toast(
        <CustomToast
          message={
            "В ближайшее время с вами свяжется наш консультант по обучению."
          }
          icon={<MarkEmailReadIcon sx={{ color: "white" }} />}
        />
      );

      reset();
    } catch (error) {
      toast.error("Произошла ошибка при отправке заявки");
    }
  };

  return (
    <Box ref={reflink} className={styles.containerForm}>
      <h2 className={styles.title}>Записаться на консультацию</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Имя"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  sx={textField_input_sx}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Почта"
                  sx={textField_input_sx}
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  label="Телефон (+7 или 8)"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </Grid>

          <div className={styles.mobileAuthButtons}>
            <button type="submit" className={styles.authButton}>
              Записаться
            </button>
          </div>
        </Grid>
      </form>
    </Box>
  );
};

export default ConsultationForm;
