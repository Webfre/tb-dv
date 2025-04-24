import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  newPassword: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Обязательно"),
});
