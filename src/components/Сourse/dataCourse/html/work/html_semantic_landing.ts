export const html_semantic_landing_1 = {
  id: "html_semantic_landing_1",
  module: "HTML",
  title: "Первое знакомство с семантическими тегами",
  topic: "Семантические теги",
  topicId: "html_semantics",
  sectionId: "html_sem_1",
  description:
    "Создайте HTML-страницу с базовой структурой, в которой применяются теги `<header>`, `<main>` и `<footer>` для выделения основных блоков страницы.",
  steps: [
    "Создайте HTML-файл, например `semantic-basic.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри тега `<body>` добавьте три основных блока:",
    "- `header` — с заголовком `<h1>`, например 'Добро пожаловать'.",
    "- `main` — с абзацем `<p>`, описывающим, что это основная часть.",
    "- `footer` — с текстом, например '© 2025 Все права защищены'.",
    "Откройте файл в браузере и проверьте, что структура читаемая и логичная.",
  ],
  difficulty: 1,
  resources: ["https://html5css.ru/html/html5_semantic_elements.php"],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Семантика в HTML</title>
  </head>
  <body>
    <header>
      <h1>Добро пожаловать</h1>
    </header>
    <main>
      <p>Это основное содержимое страницы.</p>
    </main>
    <footer>
      <p>© 2025 Все права защищены</p>
    </footer>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Семантика в HTML</title>
  </head>
  <body>
    <header>
      <h1>Добро пожаловать</h1>
    </header>
    <main>
      <p>Это основное содержимое страницы.</p>
    </main>
    <footer>
      <p>© 2025 Все права защищены</p>
    </footer>
  </body>
</html>`,
};

export const html_semantic_landing_2 = {
  id: "html_semantic_landing_2",
  module: "HTML",
  title: "Создание простого семантического макета",
  topic: "Семантические теги",
  topicId: "html_semantics",
  sectionId: "html_sem_2",

  description:
    "Создайте HTML-страницу с семантической разметкой, включающей `header`, `main`, `section`, `article` и `footer`. Наполните каждый блок простым текстом.",
  steps: [
    "Создайте HTML-файл, например `semantic-layout.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри тега `<body>` создайте следующие семантические блоки:",
    "- `header` — с заголовком `<h1>`, например 'Сайт о путешествиях'.",
    "- `main` — основной контейнер для контента.",
    "- Внутри `main` создайте `section` с заголовком `<h2>` и текстом.",
    "- Также внутри `main` добавьте `article` с заголовком `<h2>` и абзацем.",
    "- Внизу добавьте `footer` с информацией 'Контакты: travel@example.com'.",
    "Проверьте, чтобы все блоки корректно отображались и структура была логичной.",
  ],
  difficulty: 2,
  resources: ["https://html5css.ru/html/html5_semantic_elements.php"],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Сайт о путешествиях</title>
  </head>
  <body>
    <header>
      <h1>Сайт о путешествиях</h1>
    </header>
    <main>
      <section>
        <h2>Популярные направления</h2>
        <p>Франция, Япония, Исландия — идеальные места для путешествий.</p>
      </section>
      <article>
        <h2>Советы путешественникам</h2>
        <p>Всегда проверяйте документы и брони перед поездкой.</p>
      </article>
    </main>
    <footer>
      <p>Контакты: travel@example.com</p>
    </footer>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Сайт о путешествиях</title>
  </head>
  <body>
    <header>
      <h1>Сайт о путешествиях</h1>
    </header>
    <main>
      <section>
        <h2>Популярные направления</h2>
        <p>Франция, Япония, Исландия — идеальные места для путешествий.</p>
      </section>
      <article>
        <h2>Советы путешественникам</h2>
        <p>Всегда проверяйте документы и брони перед поездкой.</p>
      </article>
    </main>
    <footer>
      <p>Контакты: travel@example.com</p>
    </footer>
  </body>
</html>`,
};

export const html_semantic_landing_3 = {
  id: "html_semantic_landing_3",
  module: "HTML",
  title: "Семантическая разметка страницы",
  topic: "Семантические теги",
  topicId: "html_semantics",
  sectionId: "html_sem_2",
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
  difficulty: 3,
  resources: ["https://html5css.ru/html/html5_semantic_elements.php"],
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

export const html_semantic_landing_4 = {
  id: "html_semantic_landing_4",
  module: "HTML",
  title: "Семантическая структура с разделителями",
  topic: "Семантические теги",
  topicId: "html_semantics",
  sectionId: "html_sem_1",
  description:
    "Создайте HTML-страницу с расширенной семантической разметкой, применяя теги `<header>`, `<main>`, `<section>`, `<footer>` и разделители `<hr>`, `<br>` для логического и визуального оформления содержимого.",
  steps: [
    "Создайте файл `semantic-structure.html` с базовой структурой HTML.",
    "Внутри тега `<body>` добавьте следующие семантические блоки:",
    "- `header` — с заголовком `<h1>`, например 'Добро пожаловать на сайт'.",
    "- `main` — основной раздел страницы, внутри которого:",
    "  - создайте `section` с заголовком `<h2>` и абзацем `<p>` о цели сайта;",
    "  - добавьте горизонтальную линию `<hr>` после раздела;",
    "  - добавьте `section` с адресной информацией, используя переносы строк `<br>`.",
    "- `footer` — с копирайтом и контактной информацией.",
    "Откройте страницу в браузере и убедитесь, что структура логичная и визуально разделена.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/header",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/main",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/section",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/footer",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Семантическая структура</title>
  </head>
  <body>
    <header>
      <h1>Добро пожаловать на сайт</h1>
    </header>
    <main>
      <section>
        <h2>О сайте</h2>
        <p>Этот сайт посвящён обучению HTML и лучшим практикам вёрстки.</p>
      </section>

      <hr />

      <section>
        <h2>Контактная информация</h2>
        <p>
          Адрес: ул. Образцовая, д. 7<br />
          Город: Москва<br />
          Телефон: +7 (495) 000-00-00
        </p>
      </section>
    </main>
    <footer>
      <p>© 2025 Учебный портал</p>
    </footer>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Семантическая структура</title>
  </head>
  <body>
    <header>
      <h1>Добро пожаловать на сайт</h1>
    </header>
    <main>
      <section>
        <h2>О сайте</h2>
        <p>Этот сайт посвящён обучению HTML и лучшим практикам вёрстки.</p>
      </section>

      <hr />

      <section>
        <h2>Контактная информация</h2>
        <p>
          Адрес: ул. Образцовая, д. 7<br />
          Город: Москва<br />
          Телефон: +7 (495) 000-00-00
        </p>
      </section>
    </main>
    <footer>
      <p>© 2025 Учебный портал</p>
    </footer>
  </body>
</html>`,
};
