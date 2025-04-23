import React from "react";
import { Box, TextField, Typography, Container, Paper } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BtnCustom from "../ui/BtnCustom";
import { useResetPasswordMutation } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ResetForm {
  email: string;
  newPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  newPassword: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Обязательно"),
});

const ResetPasswordPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetForm>({
    resolver: yupResolver(schema),
  });

  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ResetForm> = async (data) => {
    try {
      await resetPassword(data).unwrap();
      toast.success("Пароль успешно изменён. Войдите в систему.");
      navigate("/login");
    } catch (error: any) {
      toast.error(error?.data?.message || "Ошибка при сбросе пароля");
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
            Сброс пароля
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}
                />
              )}
            />

            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  fullWidth
                  label="Новый пароль"
                  margin="normal"
                  error={!!errors.newPassword}
                  helperText={errors.newPassword?.message}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}
                />
              )}
            />

            <BtnCustom
              type="submit"
              variant="contained"
              fullWidth
              text="Сбросить пароль"
              sx={{ mt: 2 }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResetPasswordPage;
