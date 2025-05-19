export const css_preprocessors_test = {
  id: 512,
  name: "CSS: Препроцессоры",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Какой символ используется для объявления переменной в SCSS?",
      variants: ["@", "$", "#"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какое расширение файла используется для SCSS?",
      variants: [".scss", ".sass", ".css"],
      correct: [0],
    },
    {
      id: 3,
      name: "Что делает @mixin в SCSS?",
      variants: [
        "Создаёт новую переменную",
        "Позволяет переиспользовать стили",
        "Добавляет новый селектор",
      ],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой синтаксис используется для включения миксина?",
      variants: ["@include", "@extend", "@import"],
      correct: [0],
    },
    {
      id: 5,
      name: "Какое преимущество у SCSS по сравнению с обычным CSS?",
      variants: [
        "Можно писать стили на TypeScript",
        "Поддержка вложенных селекторов и переменных",
        "Подключение JavaScript-функций напрямую",
      ],
      correct: [1],
    },
    {
      id: 6,
      name: "Как в SCSS импортировать другой файл с переменными?",
      variants: [
        "@import 'variables';",
        "@include 'variables';",
        "@require 'variables';",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Что делает @extend в SCSS?",
      variants: [
        "Подключает миксин",
        "Расширяет селектор стилями другого селектора",
        "Добавляет глобальные переменные",
      ],
      correct: [1],
    },
    {
      id: 8,
      name: "Какое значение переменной $main-color будет использоваться в примере?",
      variants: [
        "$main-color: #ff0000; .button { background: $main-color; }",
        "$main-color: #00ff00; .button { background: $main-color; }",
        "$main-color: #0000ff; .button { background: $main-color; }",
      ],
      correct: [0],
    },
    {
      id: 9,
      name: "Какой синтаксис позволяет задавать вложенность в SCSS?",
      variants: [
        "Использование вложенных фигурных скобок",
        "Через оператор '&'",
        "Через символ '>'",
      ],
      correct: [0],
    },
    {
      id: 10,
      name: "Какой из этих препроцессоров используется с Bootstrap 4?",
      variants: ["Less", "Stylus", "SCSS"],
      correct: [2],
    },
  ],
};
