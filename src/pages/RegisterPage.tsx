import React from "react";
import { Box, TextField, Typography, Container, Paper } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRegisterUserMutation } from "../api/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BtnCustom from "../ui/BtnCustom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormData {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  password: string;
}

const schema = yup.object().shape({
  lastName: yup.string().required("Фамилия обязательна"),
  firstName: yup.string().required("Имя обязательно"),
  middleName: yup.string().required("Отчество обязательно"),
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, "Введите корректный номер телефона")
    .required("Телефон обязателен"),
  telegram: yup
    .string()
    .url("Введите корректную ссылку на Telegram")
    .notRequired(),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
});

const RegisterPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await registerUser(data).unwrap();
      localStorage.setItem("token", result.token);

      toast.success(
        `Добро пожаловать, ${result.lastName} ${result.firstName} ${result.middleName}, в devcourse!`
      );

      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || "Ошибка регистрации");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 4 }}>
          <Typography variant="h5" gutterBottom align="center">
            Регистрация
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            {[
              { name: "lastName", label: "Фамилия" },
              { name: "firstName", label: "Имя" },
              { name: "middleName", label: "Отчество" },
              { name: "email", label: "Email" },
              { name: "phone", label: "Телефон (+7...)" },
              { name: "telegram", label: "Ссылка на Telegram (необязательно)" },
              { name: "password", label: "Пароль" },
            ].map(({ name, label }) => (
              <Controller
                key={name}
                name={name as keyof FormData}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={name === "password" ? "password" : "text"}
                    fullWidth
                    margin="normal"
                    label={label}
                    error={!!errors[name as keyof FormData]}
                    helperText={
                      errors[name as keyof FormData]?.message as string
                    }
                  />
                )}
              />
            ))}

            <BtnCustom
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              text="Зарегистрироваться"
              sx={{ mt: 2 }}
            />
          </Box>

          <BtnCustom
            fullWidth
            text="Уже есть аккаунт? Войти"
            variant="text"
            sx={{ mt: 1 }}
            onClick={() => navigate("/login")}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;
