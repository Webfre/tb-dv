export const html_links_creation_1 = {
  id: "html_links_creation_1",
  module: "HTML",
  title: "Создание ссылок с различными атрибутами",
  topic: "Ссылки и изображения",
  topicId: "html_links_images",
  description:
    "Создайте HTML-документ с несколькими ссылками, используя тег `<a>` и атрибуты `href`, `target`, `rel`.",
  steps: [
    "Создайте новый HTML-файл, например `links.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте следующие элементы:",
    '- Ссылку на внешний сайт (например, https://example.com), которая открывается в новой вкладке с атрибутами `target="_blank"` и `rel="noopener noreferrer"`.',
    "- Ссылку на другой HTML-файл в текущем проекте (например, `about.html`).",
    "- Якорную ссылку, которая ведёт к определённому разделу на той же странице.",
    "- Добавьте элемент с id, на который ведёт якорная ссылка.",
    "Проверьте в браузере корректность переходов по всем ссылкам.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/a",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Ссылки в HTML</title>
  </head>
  <body>
    <h1>Примеры ссылок</h1>

    <p>
      Внешняя ссылка: 
      <a href="" target="_blank" rel="noopener noreferrer">
        Перейти на Example.com
      </a>
    </p>

    <p>
      Внутренняя ссылка:
      <a href="#">О нас</a>
    </p>

    <p>
      Якорная ссылка:
      <a href="#">Перейти к контактам</a>
    </p>

    <hr />

    <h2 id="contact">Контакты</h2>
    <p>Почта: contact@example.com</p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Ссылки в HTML</title>
  </head>
  <body>
    <h1>Примеры ссылок</h1>

    <p>
      Внешняя ссылка: 
      <a href="" target="_blank" rel="noopener noreferrer">
        Перейти на Example.com
      </a>
    </p>

    <p>
      Внутренняя ссылка:
      <a href="">Внутренняя ссылка</a>
    </p>

    <p>
      Якорная ссылка:
      <a href="">Перейти к контактам</a>
    </p>

    <hr />

    <h2 >Контакты</h2>
    <p>Почта: contact@example.com</p>
  </body>
</html>`,
};
