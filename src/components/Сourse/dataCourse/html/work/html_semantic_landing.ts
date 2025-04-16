export const html_semantic_landing_1 = {
  id: "html_semantic_landing_1",
  module: "HTML",
  title: "Семантическая разметка страницы",
  topic: "Семантические теги",
  topicId: "html_semantics",
  description:
    "Создайте HTML-документ с использованием основных семантических тегов: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`.",
  steps: [
    "Создайте новый HTML-файл, например `semantic.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` добавьте следующие блоки с использованием семантических тегов:",
    "- `header` — заголовок сайта с названием (например, в теге `<h1>`).",
    "- `nav` — навигационное меню с тремя ссылками (`<a>`).",
    "- `main` — основной контент страницы.",
    "- Внутри `main` создайте `article` с заголовком и текстом.",
    "- Также в `main` добавьте `section` с подзаголовком и списком (`<ul>`).",
    "- Добавьте `aside` с дополнительной информацией (например, цитатой или ссылкой).",
    "- Внизу страницы добавьте `footer` с копирайтом.",
    "Откройте файл в браузере и убедитесь, что структура отображается корректно.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Glossary/Semantics",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Семантическая страница</title>
  </head>
  <body>
    <header>
      <h1>Мой блог</h1>
    </header>
    <nav>
      <a href="#">Главная</a>
      <a href="#">Обо мне</a>
      <a href="#">Контакты</a>
    </nav>
    <main>
      <article>
        <h2>Первая статья</h2>
        <p>Это содержимое статьи о веб-разработке.</p>
      </article>
      <section>
        <h3>Полезные ссылки</h3>
        <ul>
          <li><a href="#">MDN Web Docs</a></li>
          <li><a href="#">HTML5 Guide</a></li>
        </ul>
      </section>
      <aside>
        <p><em>Цитата дня:</em> "Код — это поэзия."</p>
      </aside>
    </main>
    <footer>
      <p>&copy; 2025 Мой блог</p>
    </footer>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Семантическая страница</title>
  </head>
  <body>
    <header>
      <h1>Мой блог</h1>
    </header>
    <nav>
      <a href="#">Главная</a>
      <a href="#">Обо мне</a>
      <a href="#">Контакты</a>
    </nav>
    <main>
      <article>
        <h2>Первая статья</h2>
        <p>Это содержимое статьи о веб-разработке.</p>
      </article>
      <section>
        <h3>Полезные ссылки</h3>
        <ul>
          <li><a href="#">MDN Web Docs</a></li>
          <li><a href="#">HTML5 Guide</a></li>
        </ul>
      </section>
      <aside>
        <p><em>Цитата дня:</em> "Код — это поэзия."</p>
      </aside>
    </main>
    <footer>
      <p>&copy; 2025 Мой блог</p>
    </footer>
  </body>
</html>`,
};
