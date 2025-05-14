import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useLoginMutation } from "../../api/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { schema } from "./schema";
import BtnCustom from "../../ui/BtnCustom";
import PasswordField from "../../ui/PasswordField";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      setIsLoading(true);

      const result = await login(data).unwrap();
      localStorage.setItem("token", result.token);
      localStorage.setItem("isAccessKey", String(result.isAccessKey));

      toast.success(
        `Добро пожаловать, ${result.lastName} ${result.firstName} ${result.middleName}, в Frontarium!`
      );

      navigate("/");
    } catch (error: any) {
      toast.error("Ошибка входа, неверный пароль или email");
    } finally {
      setIsLoading(false);
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
        <Paper sx={{ p: 4, borderRadius: 4, position: "relative" }}>
          {isLoading && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <CircularProgress />
            </Box>
          )}

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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                  }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PasswordField
                  {...field}
                  label="Пароль"
                  error={!!errors.password}
                  helperText={errors.password?.message as string}
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
              disabled={isLoading}
            />

            <BtnCustom
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              text="Регистрация"
              onClick={() => navigate("/register")}
              disabled={isLoading}
            />

            <Box display="flex" mt={2}>
              <BtnCustom
                fullWidth
                variant="text"
                sx={{ mt: 1 }}
                text="Сбросить пароль"
                onClick={() => navigate("/reset-password")}
                disabled={isLoading}
              />

              <BtnCustom
                fullWidth
                text="На главную"
                variant="text"
                sx={{ mt: 1 }}
                onClick={() => navigate("/")}
                disabled={isLoading}
              />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
