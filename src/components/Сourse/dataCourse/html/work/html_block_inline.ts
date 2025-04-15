export const html_block_inline_1 = {
  id: "html_block_inline_1",
  module: "HTML",
  title: "Профиль пользователя: блочные vs строчные элементы",
  topic: "Элементы и теги",
  topicId: "html_elements",
  description:
    "Создайте HTML-документ, используя блочные (`<div>`, `<h1>`, `<p>`, `<ul>`) и строчные (`<span>`, `<a>`, `<strong>`) элементы для разметки профиля пользователя.",
  steps: [
    "Создайте файл `profile.html` с базовой структурой HTML.",
    "В `<body>` добавьте:",
    "  - Блочный контейнер `<div>` с классом `profile`.",
    "  - Заголовок `<h1>` с именем пользователя.",
    "  - Абзац `<p>` с описанием (выделите ключевые слова через `<strong>`).",
    "  - Список `<ul>` контактов (каждый пункт — ссылка `<a>`).",
    "  - Строчный элемент `<span>` с дополнительным стилем (например, цветом).",
    "Проверьте, как элементы ведут себя в браузере (блочные — переносятся на новую строку, строчные — нет).",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Block-level_elements",
    "https://html5book.ru/block-inline-elements/",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Профиль пользователя</title>
 
</head>
<body>
  <div>
    <h1>Анна Петрова</h1>
    <p>
      <strong>Frontend-разработчик</strong> с опытом работы 2 года. 
      Люблю работать с <span>JavaScript</span> и CSS.
    </p>
    <ul>
      <li><a href="https://github.com/anna">GitHub</a></li>
      <li><a href="mailto:anna@example.com">Email</a></li>
    </ul>
  </div>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Профиль пользователя</title>
 
</head>
<body>
  <div>
    <h1>Анна Петрова</h1>
    <p>
      <strong>Frontend-разработчик</strong> с опытом работы 2 года. 
      Люблю работать с <span>JavaScript</span> и CSS.
    </p>
    <ul>
      <li><a href="https://github.com/anna">GitHub</a></li>
      <li><a href="mailto:anna@example.com">Email</a></li>
    </ul>
  </div>
</body>
</html>`,
};
