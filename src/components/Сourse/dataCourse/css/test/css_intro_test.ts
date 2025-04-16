export const css_intro_test = {
  id: 16,
  name: "Введение в CSS",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Что означает аббревиатура CSS?",
      variants: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
      ],
      correct: [1],
    },
    {
      id: 2,
      name: "Какой HTML-тег используется для подключения внешнего CSS-файла?",
      variants: ["<script>", "<style>", "<link>"],
      correct: [2],
    },
    {
      id: 3,
      name: "Какой символ используется для обозначения комментария в CSS?",
      variants: ["//", "/* */", "#"],
      correct: [1],
    },
    {
      id: 4,
      name: "Как правильно записать CSS-правило для изменения цвета текста на красный?",
      variants: [
        "p {color: red;}",
        "p {text-color: red;}",
        "p {font-color: red;}",
      ],
      correct: [0],
    },
    {
      id: 5,
      name: "Какой из этих способов подключения CSS имеет наивысший приоритет?",
      variants: [
        "Внешний CSS-файл",
        "Встроенные стили в <style>",
        "Инлайн-стили в атрибуте style",
      ],
      correct: [2],
    },
    {
      id: 6,
      name: "Какая часть CSS-правила указывает на элемент, к которому применяются стили?",
      variants: ["Селектор", "Свойство", "Значение"],
      correct: [0],
    },
    {
      id: 7,
      name: "Какой синтаксис правильный для группировки селекторов?",
      variants: [
        "h1, h2, h3 {color: blue;}",
        "h1 h2 h3 {color: blue;}",
        "h1; h2; h3; {color: blue;}",
      ],
      correct: [0],
    },
    {
      id: 8,
      name: "Какой атрибут HTML используется для встроенных стилей элемента?",
      variants: ["css", "class", "style"],
      correct: [2],
    },
    {
      id: 9,
      name: "Где в HTML-документе рекомендуется размещать тег <style>?",
      variants: [
        "В теле документа <body>",
        "В заголовке <head>",
        "В любом месте документа",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Что из перечисленного НЕ является преимуществом CSS?",
      variants: [
        "Разделение содержания и оформления",
        "Возможность анимации элементов",
        "Выполнение сложных математических вычислений",
      ],
      correct: [2],
    },
  ],
};
