import React, { useState } from "react";
import { Box, TextField, Typography, Container, Paper } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IFormData } from "./FormData.types";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { toast } from "react-toastify";
import BtnCustom from "../../ui/BtnCustom";
import PasswordField from "../../ui/PasswordField";
import styles from "./RegisterPage.module.scss";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { textField_input_sx } from "../../styles/global";
import CustomToast from "../../ui/CustomToast";
import Spinner from "../../ui/Spinner";

const RegisterPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const [registerUser] = useRegisterUserMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      setIsLoading(true);
      const result = await registerUser({
        ...data,
      }).unwrap();

      localStorage.setItem("token", result.token);

      toast(
        <CustomToast
          message={`${result.firstName}. Добро пожаловать во Frontarium!`}
          icon={<IoLogIn size={30} />}
        />
      );

      navigate("/");
    } catch (error: any) {
      toast(
        <CustomToast
          message={error?.data?.message || "Ошибка регистрации"}
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
        <Paper sx={{ p: 4, borderRadius: 4 }}>
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
            Регистрация
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            {[
              { name: "firstName", label: "Имя" },
              { name: "email", label: "Email" },
            ].map(({ name, label }) => (
              <Controller
                key={name}
                name={name as keyof IFormData}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={name === "password" ? "password" : "text"}
                    fullWidth
                    margin="normal"
                    label={label}
                    sx={textField_input_sx}
                    error={!!errors[name as keyof IFormData]}
                    helperText={
                      errors[name as keyof IFormData]?.message as string
                    }
                  />
                )}
              />
            ))}

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
              text="Зарегистрироваться"
              customColor="#846ee6"
              sx={{ mt: 2 }}
            />
          </Box>

          <Box display="flex" mt={2}>
            <BtnCustom
              fullWidth
              text="Уже есть аккаунт? Войти"
              customColor="#846ee6"
              variant="text"
              sx={{ mt: 1 }}
              onClick={() => navigate("/login")}
            />

            <BtnCustom
              fullWidth
              text="Продолжить без регистрации"
              customColor="#846ee6"
              variant="text"
              sx={{ mt: 1 }}
              onClick={() => navigate("/")}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;
