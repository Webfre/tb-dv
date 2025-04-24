import * as yup from "yup";

export const schema = yup.object().shape({
  lastName: yup.string().required("Фамилия обязательна"),
  firstName: yup.string().required("Имя обязательно"),
  middleName: yup.string().required("Отчество обязательно"),
  email: yup.string().email("Некорректный email").required("Email обязателен"),
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
  telegram: yup
    .string()
    .url("Введите корректную ссылку на Telegram")
    .notRequired(),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
});
