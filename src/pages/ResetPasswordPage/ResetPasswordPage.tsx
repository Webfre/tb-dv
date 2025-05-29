import React from "react";
import { Box, TextField, Typography, Container, Paper } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useResetPasswordMutation } from "../../api/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import BtnCustom from "../../ui/BtnCustom";
import PasswordField from "../../ui/PasswordField";
import { textField_input_sx } from "../../styles/global";
import styles from "./ResetPasswordPage.module.scss";

interface ResetForm {
  email: string;
  newPassword: string;
}

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
    <Box className={styles.wrapper}>
      <Container maxWidth="sm" className={styles.container}>
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
                  sx={textField_input_sx}
                />
              )}
            />

            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PasswordField
                  {...field}
                  label="Новый пароль"
                  error={!!errors.newPassword}
                  helperText={errors.newPassword?.message as string}
                />
              )}
            />

            <BtnCustom
              type="submit"
              customColor="#846ee6"
              variant="contained"
              fullWidth
              text="Сбросить пароль"
              sx={{ mt: 2 }}
            />

            <Box display="flex" mt={2}>
              <BtnCustom
                fullWidth
                text="Продолжить без регистрации"
                customColor="#846ee6"
                variant="text"
                sx={{ mt: 1 }}
                onClick={() => navigate("/")}
              />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResetPasswordPage;
