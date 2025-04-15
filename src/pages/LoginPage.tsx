import React from "react";
import { Box, TextField, Typography, Container, Paper } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BtnCustom from "../ui/BtnCustom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/api";

interface LoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  password: yup.string().required("Пароль обязателен"),
});

const LoginPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const result = await login(data).unwrap();
      localStorage.setItem("token", result.token);
      localStorage.setItem("isAccessKey", String(result.isAccessKey));

      toast.success(
        `Добро пожаловать, ${result.lastName} ${result.firstName} ${result.middleName}, в devcourse!`
      );

      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || "Ошибка входа");
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
            Войти в профиль
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  fullWidth
                  label="Пароль"
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />

            <BtnCustom
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              text="Войти"
              sx={{ mt: 2 }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
