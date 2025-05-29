import React, { useState } from "react";
import { Box, TextField, Typography, Container, Paper } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { textField_input_sx } from "../../styles/global";
import { useLoginMutation } from "../../api/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { schema } from "./schema";
import BtnCustom from "../../ui/BtnCustom";
import PasswordField from "../../ui/PasswordField";
import styles from "./LoginPage.module.scss";
import CustomToast from "../../ui/CustomToast";
import Spinner from "../../ui/Spinner";

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

      toast(
        <CustomToast
          message={`Добро пожаловать во Frontarium!\n${result.lastName} ${result.firstName} ${result.middleName}`}
          icon={<IoLogIn size={30} />}
        />
      );

      navigate("/");
    } catch (error: any) {
      toast(
        <CustomToast
          message={"Ошибка входа, неверный пароль или email"}
          icon={<PiSmileyMeltingFill size={30} />}
        />
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className={styles.wrapper}>
      <Container maxWidth="sm" className={styles.container}>
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
              <Spinner />
            </Box>
          )}

          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            Войти <IoLogIn size={34} color="#846ee6" />
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
                  sx={textField_input_sx}
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
              customColor="#846ee6"
              text="Войти"
              sx={{ mt: 2 }}
              disabled={isLoading}
            />

            <BtnCustom
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              text="Регистрация"
              customColor="#846ee6"
              onClick={() => navigate("/register")}
              disabled={isLoading}
            />

            <Box display="flex" mt={2}>
              <BtnCustom
                fullWidth
                variant="text"
                customColor="#846ee6"
                sx={{ mt: 1 }}
                text="Сбросить пароль"
                onClick={() => navigate("/reset-password")}
                disabled={isLoading}
              />

              <BtnCustom
                fullWidth
                text="На главную"
                customColor="#846ee6"
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
