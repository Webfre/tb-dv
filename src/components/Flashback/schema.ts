import * as yup from "yup";

export const schema = yup.object().shape({
  modules: yup.array().min(1, "Выберите хотя бы один модуль"),
  sections: yup.array().min(1, "Выберите хотя бы один раздел"),
  count: yup.number().required("Выберите количество вопросов"),
});

export const steps = [
  "Повторяйте по 15–30 минут в день",
  "Сосредоточьтесь на темах, в которых были затруднения",
  "Делайте повторение через день или по принципу 1-3-7",
  "Используйте активное вспоминание — отвечайте на вопросы, а не просто перечитывайте",
];

export const FLASHBACK_SETTINGS_KEY = "flashbackSettings";
