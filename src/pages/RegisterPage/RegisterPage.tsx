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
import { IFormData } from "./FormData.types";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BtnCustom from "../../ui/BtnCustom";
import PhoneInput from "../../ui/PhoneInput";
import PasswordField from "../../ui/PasswordField";
import { useRegisterUserMutation } from "../../api/authApi";

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

      const cleanedPhone = data.phone.replace(/\s/g, "");

      const result = await registerUser({
        ...data,
        phone: cleanedPhone,
      }).unwrap();

      localStorage.setItem("token", result.token);

      toast.success(
        `Добро пожаловать, ${result.lastName} ${result.firstName} ${result.middleName}, в Frontarium!`
      );

      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || "Ошибка регистрации");
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
              <CircularProgress />
            </Box>
          )}

          <Typography variant="h5" gutterBottom align="center">
            Регистрация
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            {[
              { name: "lastName", label: "Фамилия" },
              { name: "firstName", label: "Имя" },
              { name: "middleName", label: "Отчество" },
              { name: "email", label: "Email" },
              { name: "telegram", label: "Ссылка на Telegram (необязательно)" },
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
                    error={!!errors[name as keyof IFormData]}
                    helperText={
                      errors[name as keyof IFormData]?.message as string
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                      },
                    }}
                  />
                )}
              />
            ))}

            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  label="Телефон (+7 или 8)"
                  error={!!errors.phone}
                  helperText={errors.phone?.message as string}
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
              text="Зарегистрироваться"
              sx={{ mt: 2 }}
            />
          </Box>

          <Box display="flex" mt={2}>
            <BtnCustom
              fullWidth
              text="Уже есть аккаунт? Войти"
              variant="text"
              sx={{ mt: 1 }}
              onClick={() => navigate("/login")}
            />

            <BtnCustom
              fullWidth
              text="Продолжить без регистрации"
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
