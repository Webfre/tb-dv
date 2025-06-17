export const scss_intro_test = {
  id: 350,
  name: "Введение и настройка SCSS",
  category: "SCSS",
  ques: [
    {
      id: 1,
      name: "Что означает аббревиатура SCSS?",
      variants: ["Super CSS", "Sassy CSS", "Simple CSS"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какая директива используется для подключения partial-файлов?",
      variants: ["@include", "@import", "@use"],
      correct: [1],
    },
    {
      id: 3,
      name: "Как правильно объявить переменную в SCSS?",
      variants: [
        "var primary-color = #3498db;",
        "$primary-color = #3498db;",
        "$primary-color: #3498db;",
      ],
      correct: [2],
    },
    {
      id: 4,
      name: "Какая команда устанавливает Dart Sass через npm?",
      variants: [
        "npm install -g sass",
        "npm install sass-cli",
        "npm sass install -g",
      ],
      correct: [0],
    },
    {
      id: 5,
      name: "Как запустить компиляцию в режиме наблюдения (watch)?",
      variants: [
        "sass src/styles/main.scss dist/styles/main.css",
        "sass --watch src/scss/main.scss:dist/css/main.css",
        "sass watch src/scss dist/css",
      ],
      correct: [1],
    },
    {
      id: 6,
      name: "Какие файлы считаются partial в SCSS?",
      variants: [
        "Файлы без подчёркивания",
        "Файлы с расширением .css",
        "Файлы с именем, начинающимся с _",
      ],
      correct: [2],
    },
    {
      id: 7,
      name: "В каком порядке следует подключать partials в файле main.scss?",
      variants: [
        "Сначала components, затем variables",
        "Сначала variables, потом mixins, затем base, layout и components",
        "Порядок не важен",
      ],
      correct: [1],
    },
    {
      id: 8,
      name: "Какая команда выводит версию установленного Sass?",
      variants: ["sass --version", "sass -v", "sass version"],
      correct: [0],
    },
    {
      id: 9,
      name: "Что даёт вложенность селекторов в SCSS?",
      variants: [
        "Позволяет писать селекторы без пробелов",
        "Позволяет вкладывать селекторы внутрь других селекторов",
        "Позволяет писать два селектора через запятую",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Что будет результатом компиляции файла main.scss с @import 'variables' и @import 'buttons'?",
      variants: [
        "Создадутся два отдельных CSS-файла",
        "Будет скомпилирован единый CSS-файл с объединённым содержимым partials",
        "Файл не скомпилируется из-за импортов",
      ],
      correct: [1],
    },
  ],
};
