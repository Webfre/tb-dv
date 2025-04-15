export const html_structure_task_1 = {
  id: "html_structure_task_1",
  module: "HTML",
  title: "Создание HTML-документа 'Моя первая страница'",
  topic: "Структура HTML-документа",
  topicId: "html_structure",
  description:
    "Создайте HTML-документ с полной структурой, включающий мета-информацию, заголовок страницы и контент с несколькими уровнями заголовков.",
  steps: [
    "Создайте новый файл с расширением `.html`, например `my_page.html`.",
    "Добавьте обязательную структуру документа: `<!DOCTYPE html>`, `<html>` с указанием языка.",
    "В разделе `<head>` добавьте:",
    "  - Мета-тег кодировки UTF-8",
    "  - Мета-тег для адаптивного отображения на мобильных устройствах",
    "  - Заголовок страницы 'Моя первая страница'",
    "В разделе `<body>` создайте:",
    "  - Главный заголовок `<h1>` с текстом 'Добро пожаловать!'",
    "  - Подзаголовок `<h2>` с текстом 'Обо мне'",
    "  - Абзац `<p>` с краткой информацией о себе",
    "  - Подзаголовок `<h2>` с текстом 'Мои увлечения'",
    "  - Маркированный список `<ul>` с 3-4 увлечениями",
    "Проверьте отображение страницы в браузере.",
  ],
  difficulty: 2,
  resources: [],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Добро пожаловать!</h1>
    <h2>Обо мне</h2>
    <p>Меня зовут Алексей, я изучаю веб-разработку.</p>
    <h2>Мои увлечения</h2>
    <ul>
      <li>Программирование</li>
      <li>Фотография</li>
      <li>Путешествия</li>
    </ul>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Добро пожаловать!</h1>
    <h2>Обо мне</h2>
    <p>Меня зовут Алексей, я изучаю веб-разработку.</p>
    <h2>Мои увлечения</h2>
    <ul>
      <li>Программирование</li>
      <li>Фотография</li>
      <li>Путешествия</li>
    </ul>
  </body>
</html>`,
};

export const html_structure_task_2 = {
  id: "html_structure_task_2",
  module: "HTML",
  title: "Создание HTML-страницы 'Мой блог' с семантической разметкой",
  topic: "Структура HTML-документа",
  topicId: "html_structure",
  description:
    "Создайте HTML-документ для блога, используя семантические теги (`<header>`, `<main>`, `<article>`, `<footer>`) и добавьте комментарии для разметки структуры.",
  steps: [
    "Создайте файл `blog.html` с базовой структурой (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).",
    "Укажите язык страницы (русский) и добавьте мета-теги для кодировки и адаптивности.",
    "В `<body>` используйте семантические теги:",
    "  - `<header>` с заголовком `<h1>` ('Мой блог') и кратким описанием в `<p>`.",
    "  - `<main>` с двумя `<article>` (каждая статья должна содержать `<h2>`, `<p>` и дату публикации в `<time>`).",
    "  - `<footer>` с контактной информацией (например, '© 2024 Мой блог').",
    "Добавьте HTML-комментарии (`<!-- -->`) перед каждой секцией, поясняющие её назначение.",
    "Проверьте, правильно ли отображается страница в браузере.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element#основные_элементы",
    "https://coursme.com/html/semantic-html",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой блог</title>
</head>
<body>
  <!-- Шапка сайта -->
  <header>
    <h1>Мой блог</h1>
    <p>Здесь я делюсь своими мыслями и идеями.</p>
  </header>

  <!-- Основное содержимое -->
  <main>
    <!-- Первая статья -->
    <article>
      <h2>Мой первый пост</h2>
      <time datetime="2024-01-15">15 января 2024</time>
      <p>Сегодня я начал изучать HTML. Это очень интересно!</p>
    </article>

    <!-- Вторая статья -->
    <article>
      <h2>Советы по верстке</h2>
      <time datetime="2024-01-20">20 января 2024</time>
      <p>Всегда проверяйте валидность кода с помощью W3C Validator.</p>
    </article>
  </main>

  <!-- Подвал сайта -->
  <footer>
    <p>© 2024 Мой блог. Контакты: blog@example.com</p>
  </footer>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой блог</title>
</head>
<body>
  <!-- Шапка сайта -->
  <header>
    <h1>Мой блог</h1>
    <p>Здесь я делюсь своими мыслями и идеями.</p>
  </header>

  <!-- Основное содержимое -->
  <main>
    <!-- Первая статья -->
    <article>
      <h2>Мой первый пост</h2>
      <time datetime="2024-01-15">15 января 2024</time>
      <p>Сегодня я начал изучать HTML. Это очень интересно!</p>
    </article>

    <!-- Вторая статья -->
    <article>
      <h2>Советы по верстке</h2>
      <time datetime="2024-01-20">20 января 2024</time>
      <p>Всегда проверяйте валидность кода с помощью W3C Validator.</p>
    </article>
  </main>

  <!-- Подвал сайта -->
  <footer>
    <p>© 2024 Мой блог. Контакты: blog@example.com</p>
  </footer>
</body>
</html>`,
};
