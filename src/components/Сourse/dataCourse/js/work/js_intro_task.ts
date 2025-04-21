export const js_intro_task_1 = {
  id: "js_intro_task_1",
  module: "JavaScript",
  title: "Подключение JavaScript и вывод в консоль",
  topic: "Основы JavaScript",
  topicId: "js_intro",
  description:
    "Создайте HTML-документ, подключите внешний JavaScript-файл и выведите в консоль сообщение 'Привет, мир!!!'.",
  steps: [
    "Создайте файл `index.html` с базовой HTML-разметкой.",
    "Создайте файл `script.js` в той же папке.",
    "В файле `script.js` добавьте команду `console.log('Привет, мир!!!');`.",
    "Подключите `script.js` к HTML через тег `<script src=script.js></script>` перед закрывающим `</body>`.",
    "Откройте HTML-файл в браузере и проверьте вывод в консоли (F12 → Вкладка Console).",
  ],
  difficulty: 1,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Первый скрипт</title>
</head>
<body>
  <h1>Проверка JavaScript</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js
  console.log('Привет, мир!!!');
  `,
};

export const js_intro_task_2 = {
  id: "js_intro_task_2",
  module: "JavaScript",
  title: "Объявление переменных: let, const и var",
  topic: "Основы JavaScript",
  topicId: "js_intro",
  description:
    "Создайте переменные с помощью `let`, `const` и `var`, присвойте им значения, измените их и посмотрите, как они себя ведут. Это поможет понять ключевые отличия между способами объявления переменных в JavaScript.",
  steps: [
    "Создайте файл `index.html` с базовой структурой HTML.",
    "Создайте файл `script.js` и подключите его к HTML через `<script src='script.js'></script>` перед `</body>`.",
    "1. Объявите переменную с помощью `let` и присвойте ей строку. Измените значение и выведите оба раза через `console.log()`.",
    "2. Объявите переменную с помощью `const` и присвойте ей число. Попробуйте изменить значение и проверьте, что произойдёт (будет ошибка).",
    "3. Объявите переменную с помощью `var`, присвойте ей строку. Выведите её значение до и после присваивания (до объявления).",
    "4. Посмотрите на поведение каждой переменной в консоли, чтобы понять разницу между `let`, `const` и `var` (область видимости, возможность переопределения, всплытие).",
  ],
  difficulty: 2,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>let, const и var</title>
</head>
<body>
  <h1>Исследуем переменные</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

// let: можно изменить значение
let name = "Анна";
console.log("Имя:", name);
name = "Мария";
console.log("Новое имя:", name);

// const: нельзя изменить после объявления
const year = 2000;
console.log("Год рождения:", year);
// year = 2001; // Раскомментируйте для проверки ошибки

// var: всплывает (hoisting)
console.log("Сообщение до объявления:", message); // undefined
var message = "Привет от var";
console.log("Сообщение после:", message);
`,
  resources: [
    "https://learn.javascript.ru/variables",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var",
  ],
};
