export const html_meta_basic_1 = {
  id: "html_meta_basic_1",
  module: "HTML",
  title: "Добавление метатегов в секцию <head>",
  topic: "HTML мета-информация",
  topicId: "html_meta_head",
  description:
    "Добавьте в HTML-документ метатеги, описывающие кодировку, адаптивность и описание страницы. Изучите назначение каждого из них.",
  steps: [
    "Создайте новый HTML-файл, например `meta.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри тега `<head>` добавьте следующие мета-теги:",
    '- `<meta charset="UTF-8">` — установка кодировки документа.',
    '- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — для адаптивности на мобильных устройствах.',
    '- `<meta name="description" content="Краткое описание содержимого страницы">` — для SEO и превью в поиске.',
    '- (необязательно) `<meta name="author">`, `<meta name="keywords">` — по желанию.',
    "Проверьте структуру документа и изучите, где и как используются эти метатеги.",
  ],
  difficulty: 1,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta",
    "https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Учебная страница с мета-тегами в HTML" />
    <meta name="author" content="Иван Иванов" />
    <meta name="keywords" content="HTML, мета, head, meta tags" />
    <title>Мета-теги в HTML</title>
  </head>
  <body>
    <h1>Проверка мета-тегов</h1>
    <p>Откройте DevTools → Elements → &lt;head&gt;, чтобы увидеть мета-информацию.</p>
  </body>
</html>`,
};

export const html_meta_basic_2 = {
  id: "html_meta_basic_2",
  module: "HTML",
  title: "Favicon, шрифты и стили в head",
  topic: "HTML мета-информация",
  topicId: "html_meta_head",
  description:
    "Добавьте в раздел `<head>` подключение favicon, шрифта с Google Fonts и CSS-файла. Изучите, как они влияют на отображение страницы.",
  steps: [
    "Создайте новый HTML-файл, например `head-links.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<head>` выполните следующее:",
    '- Подключите favicon с помощью `<link rel="icon" href="URL">`.',
    '- Подключите внешний шрифт с Google Fonts (например, Roboto или Open Sans) с помощью `<link href="..." rel="stylesheet">`.',
    '- Подключите внешний файл стилей, например `styles.css`, с помощью `<link rel="stylesheet" href="styles.css">`.',
    "- Добавьте небольшой блок `<style>` прямо в HTML для проверки — например, чтобы задать цвет фона.",
    "Проверьте favicon, отображение шрифта и применяемые стили на странице.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/link",
    "https://fonts.google.com",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Подключение ресурсов</title>

    <!-- Иконка сайта -->
    <link rel="icon" href="https://www.w3schools.com/favicon.ico" />

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

    <!-- Внешний CSS -->
    <link rel="stylesheet" href="styles.css" />

    <!-- Встроенный стиль -->
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>
    <h1>Проверка подключения ресурсов</h1>
    <p>Эта страница использует favicon, шрифт Roboto и базовые стили.</p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Подключение ресурсов</title>

    <!-- Иконка сайта -->
    <link rel="icon" href="https://www.w3schools.com/favicon.ico" />

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

    <!-- Внешний CSS -->
    <link rel="stylesheet" href="styles.css" />

    <!-- Встроенный стиль -->
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>
    <h1>Проверка подключения ресурсов</h1>
    <p>Эта страница использует favicon, шрифт Roboto и базовые стили.</p>
  </body>
</html>`,
};
