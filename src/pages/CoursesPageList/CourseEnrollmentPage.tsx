import React, { useMemo } from "react";
import {
  Typography,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseList } from "../../DB";
import { toast } from "react-toastify";
import { useEnrollCourseMutation } from "../../api/authApi";
import * as yup from "yup";
import PhoneInput from "../../ui/PhoneInput";
import BtnCustom from "../../ui/BtnCustom";

interface EnrollmentForm {
  fullName: string;
  email: string;
  phone: string;
  courseId: number;
}

interface CourseEnrollmentPageProps {
  courseId: number;
  onClose: () => void;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Поле ФИО обязательно"),
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
  courseId: yup.number().required("Выберите курс"),
});

const CourseEnrollmentPage: React.FC<CourseEnrollmentPageProps> = ({
  courseId,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EnrollmentForm>({
    resolver: yupResolver(schema),
  });

  const [enrollCourse, { isLoading }] = useEnrollCourseMutation();

  useMemo(() => {
    if (courseId) {
      setValue("courseId", Number(courseId));
    }
  }, [courseId, setValue]);

  const onSubmit = async (data: EnrollmentForm) => {
    try {
      const courseTitle = courseList.find(
        (course) => course.id === data.courseId
      )?.title;

      if (!courseTitle) {
        toast.error("Курс не найден");
        onClose();
        return;
      }

      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        title: courseTitle,
      };

      const response = await enrollCourse(payload).unwrap();
      toast.success(response.message);
      toast.info(
        <div style={{ lineHeight: "1.5" }}>
          <div
            style={{ fontWeight: "bold", fontSize: "1.1em", color: "#1976d2" }}
          >
            Frontarium
          </div>
          В ближайшее время с вами свяжется наш консультант по обучению.
        </div>,
        {
          autoClose: false,
          closeOnClick: true,
        }
      );

      onClose();
    } catch (error) {
      toast.error("Произошла ошибка при записи на курс");
    }
  };

  return (
    <Box>
      <Typography mb={3} fontWeight="bold" variant="h4">
        Записаться <br /> на консультацию
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="courseId"
              control={control}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                  }}
                >
                  <Select
                    {...field}
                    variant="outlined"
                    required
                    sx={{
                      borderRadius: "24px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "24px",
                      },
                    }}
                    error={!!errors.courseId}
                  >
                    {courseList.map((course) => (
                      <MenuItem key={course.id} value={course.id}>
                        {course.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.courseId && (
                    <Typography variant="body2" color="error">
                      {errors.courseId.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ФИО"
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{
                    sx: {
                      borderRadius: "24px",
                    },
                  }}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
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
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  InputProps={{
                    sx: {
                      borderRadius: "24px",
                    },
                  }}
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

          <Grid item xs={12}>
            <BtnCustom
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              text={isLoading ? "Записываем..." : "Записаться"}
              sx={{ p: 2, borderRadius: "24px", fontSize: "16px" }}
              disabled={isLoading}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CourseEnrollmentPage;
