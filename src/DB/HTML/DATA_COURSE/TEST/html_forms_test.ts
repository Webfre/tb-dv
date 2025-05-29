export const html_forms_test = {
  id: 206,
  name: "HTML формы",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Какой атрибут у элементов формы задаёт имя поля для отправки данных?",
      variants: ["id", "class", "name"],
      correct: [2],
    },
    {
      id: 2,
      name: "Какой атрибут у тега <form> отключает встроенную HTML5-валидацию?",
      variants: ["novalidate", "no-validate", "disable-validation"],
      correct: [0],
    },
    {
      id: 3,
      name: "Какой атрибут управления формой позволяет включить или отключить автозаполнение полей?",
      variants: ["autofill", "autocomplete", "auto"],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой атрибут делает поле формы обязательным?",
      variants: ["readonly", "required", "checked"],
      correct: [1],
    },
    {
      id: 5,
      name: "Что делает атрибут disabled у поля формы?",
      variants: [
        "Отключает поле и исключает из отправки",
        "Только делает поле для чтения",
        "Выделяет поле визуально",
      ],
      correct: [0],
    },
    {
      id: 6,
      name: "Какая разница между disabled и readonly?",
      variants: [
        "readonly нельзя изменить, но отправляется; disabled — не отправляется",
        "disabled используется только в JS",
        "disabled — только для кнопок, readonly — только для текстов",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Какой тег используется для многострочного текстового ввода?",
      variants: ["<input>", "<textarea>", "<label>"],
      correct: [1],
    },
    {
      id: 8,
      name: "Какой тип input используется для одиночного выбора из набора?",
      variants: ["checkbox", "radio", "select"],
      correct: [1],
    },
    {
      id: 9,
      name: "Как задать выпадающий список в форме?",
      variants: ["<dropdown>", "<select>", "<input type='list'>"],
      correct: [1],
    },
    {
      id: 10,
      name: "Какой тип input скрывает введённые символы?",
      variants: ["text", "hidden", "password"],
      correct: [2],
    },
    {
      id: 11,
      name: "Какой атрибут используется для проверки формата значения через RegExp?",
      variants: ["validate", "pattern", "regexp"],
      correct: [1],
    },
    {
      id: 12,
      name: "Что делает атрибут multiple в элементе <select>?",
      variants: [
        "Позволяет выбрать несколько значений",
        "Выбирает все значения по умолчанию",
        "Переходит к следующей форме",
      ],
      correct: [0],
    },
    {
      id: 13,
      name: "Для чего используется атрибут placeholder?",
      variants: [
        "Добавляет фоновое изображение в поле",
        "Показывает подсказку внутри поля",
        "Отправляет поле на сервер",
      ],
      correct: [1],
    },
    {
      id: 14,
      name: "Что делает type='reset' у кнопки?",
      variants: ["Очищает все поля формы", "Отправляет форму", "Удаляет форму"],
      correct: [0],
    },
    {
      id: 15,
      name: "Что делает встроенная валидация?",
      variants: [
        "Заменяет CSS стили",
        "Позволяет отправлять файлы",
        "Проверяет корректность введённых данных до отправки формы",
      ],
      correct: [2],
    },
  ],
};
