export const html_intro_task_1 = {
  id: "html_intro_task_1",
  module: "HTML",
  title: "Создание HTML-документа Hello, World!",
  topic: "Введение в HTML",
  topicId: "html_intro",
  description:
    "Создайте минимальный HTML-документ, который выводит сообщение 'Hello, World!' на страницу.",
  steps: [
    "Создайте новый файл с расширением `.html`, например `index.html`.",
    "Добавьте обязательную структуру документа: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.",
    "Внутри `<head>` укажите заголовок страницы через тег `<title>`.",
    "Внутри `<body>` выведите сообщение 'Hello, World!' с помощью тега `<h1>`.",
    "Проверьте, как страница отображается в браузере (можно открыть двойным кликом по файлу).",
  ],
  difficulty: 1,
  resources: ["https://coursme.com/html/vvedenie_v_html/lesson/hello_world"],
  solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Hello Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html>
  <head>
    <title>Hello Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
};

export const html_intro_task_2 = {
  id: "html_intro_task_2",
  module: "HTML",
  title: "Персональная страница",
  topic: "Введение в HTML",
  topicId: "html_intro",
  description:
    "Создайте простую HTML-страницу, которая отображает информацию о себе, используя заголовки и абзацы.",
  steps: [
    "Создайте HTML-документ с базовой структурой: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.",
    'Внутри `<head>` укажите `<meta charset="UTF-8">` и задайте заголовок страницы через `<title>`.',
    "В `<body>` выведите свою информацию с использованием тегов:",
    "- `<h1>` — ФИО",
    "- `<h2>` — Дата рождения",
    "- `<h3>` — Возраст",
    "- `<p>` — Список достижений в свободной форме (минимум 3 пункта)",
    "Добавьте комментарии в код, объясняющие назначение каждого блока.",
  ],
  difficulty: 1,
  solution: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Обо мне</title>
  </head>
  <body>
    <h1>Иван Иванов</h1>
    <h2>01.01.2000</h2>
    <h3>24 года</h3>
    <p>
      - Выпускник университета<br />
      - Участник хакатонов<br />
      - Изучаю Frontend-разработку
    </p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Обо мне</title>
  </head>
  <body>
    <h1>Иван Иванов</h1>
    <h2>01.01.2000</h2>
    <h3>24 года</h3>
    <p>
      - Выпускник университета<br />
      - Участник хакатонов<br />
      - Изучаю Frontend-разработку
    </p>
  </body>
</html>`,
};
