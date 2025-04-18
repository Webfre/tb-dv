export const html_text_formatting_test = {
  id: 15,
  name: "Форматирование и текстовые теги в HTML",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Какой тег используют для выделения **важного** текста с семантикой?",
      variants: ["<b>", "<em>", "<strong>"],
      correct: [2],
    },
    {
      id: 2,
      name: "Какой тег используется для **интонационного акцента** (ударения)?",
      variants: ["<em>", "<mark>", "<strong>"],
      correct: [0],
    },
    {
      id: 3,
      name: "Что делает тег <mark>?",
      variants: [
        "Выделяет текст жирным",
        "Подсвечивает текст, как маркер",
        "Добавляет подстрочный текст",
      ],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой тег применяют для **второстепенного, мелкого текста**?",
      variants: ["<sub>", "<small>", "<u>"],
      correct: [1],
    },
    {
      id: 5,
      name: "Какой тег отображает **текст ниже базовой линии**, например, в формулах?",
      variants: ["<sub>", "<sup>", "<small>"],
      correct: [0],
    },
    {
      id: 6,
      name: "Какой тег используется для отображения **степеней** (например, 10²)?",
      variants: ["<mark>", "<sub>", "<sup>"],
      correct: [2],
    },
    {
      id: 7,
      name: "Какой тег применяется для оформления **длинных цитат**?",
      variants: ["<cite>", "<q>", "<blockquote>"],
      correct: [2],
    },
    {
      id: 8,
      name: "Какой тег добавляет **короткую цитату внутри строки**?",
      variants: ["<q>", "<mark>", "<blockquote>"],
      correct: [0],
    },
    {
      id: 9,
      name: "Какой тег используют для указания **автора или источника**?",
      variants: ["<cite>", "<ref>", "<source>"],
      correct: [0],
    },
    {
      id: 10,
      name: "Что делает тег <hr>?",
      variants: [
        "Добавляет горизонтальную линию для разделения блоков",
        "Создает новую строку",
        "Добавляет комментарий",
      ],
      correct: [0],
    },
    {
      id: 11,
      name: "Когда целесообразно использовать <br>?",
      variants: [
        "Чтобы создать абзац",
        "Для принудительного переноса строки",
        "Чтобы отделить раздел горизонтальной чертой",
      ],
      correct: [1],
    },
    {
      id: 12,
      name: "Что **неправильно** использовать тег <br>?",
      variants: [
        "Для переноса строк в поэзии",
        "Для отступов между блоками",
        "В адресах",
      ],
      correct: [1],
    },
    {
      id: 13,
      name: "Какой тег **не** добавляет визуальные кавычки, но используется для источников?",
      variants: ["<q>", "<cite>", "<strong>"],
      correct: [1],
    },
    {
      id: 14,
      name: "Можно ли вложить <cite> внутрь <blockquote>?",
      variants: [
        "Нет, это синтаксическая ошибка",
        "Да, это правильная практика",
        "Да, но только с атрибутом href",
      ],
      correct: [1],
    },
    {
      id: 15,
      name: "Какой тег **лучше использовать** для вывода числа с подстрочной подписью (например, H₂O)?",
      variants: ["<sup>", "<mark>", "<sub>"],
      correct: [2],
    },
  ],
};
