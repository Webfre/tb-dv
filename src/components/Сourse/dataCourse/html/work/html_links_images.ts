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
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/a"],
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
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Перейти на Example.com
      </a>
    </p>

    <p>
      Внутренняя ссылка:
      <a href="#" title="В реальном проекте: href='about.html'">
        Внутренняя ссылка
      </a>
    </p>

    <p>
      Якорная ссылка:
      <a href="#contacts">Перейти к контактам</a>
    </p>

    <hr />

    <h2 id="contacts">Контакты</h2>
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
      </p>
      <img 
    src="https://raw.githubusercontent.com/Codecademy/docs/main/media/text-link.gif" 
    alt="Демонстрация Внутренней ссылки" 
    width="400"
    <br/>
    <p>
      Внутренняя ссылка:
    </p>
      <img 
      src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/5c3e602a-8647-41f7-bb22-686374bf97ce/2022/05/31/62f3e842-0de9-467c-931a-c23c200b7e73/bae88efc-4749-441e-9c53-e3ddd145b9ae.gif" 
      alt="Демонстрация Внутренней ссылки" 
      width="400"
    />
    

    <p>
      Якорная ссылка:
    </p>

    <img 
      src="https://avatars.dzeninfra.ru/get-zen_doc/3446134/pub_5ef207e0211879584d8d54eb_5ef207e4936d2162063900e4/orig" 
      alt="Демонстрация якорной ссылки" 
      width="400"
    />

    <hr />

    <h2 id="contacts">Контакты</h2>
    <p>Почта: contact@example.com</p>
  </body>
</html>`,
};

export const html_links_creation_2 = {
  id: "html_links_creation_2",
  module: "HTML",
  title: "Добавление изображений с атрибутами и обсуждение форматов",
  topic: "Ссылки и изображения",
  topicId: "html_links_images",
  description:
    "Создайте HTML-документ с изображениями, используя тег `<img>` и его основные атрибуты: `src` и `alt`. Также разберитесь с форматами изображений и их особенностями.",
  steps: [
    "Создайте новый HTML-файл, например `images.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` выполните следующее:",
    "- Добавьте изображение с использованием тега `<img>`, указав абсолютный `src` (например, на изображение в интернете) и понятный `alt`.",
    "- Добавьте второе изображение, имитируя работу с локальным файлом (например, `images/logo.png`) и поясните, что оно может не отобразиться в предпросмотре.",
    "- Под изображениями добавьте краткое описание форматов `.jpg` и `.png` и рекомендации по их использованию.",
    "Проверьте, как отображается хотя бы одно изображение и корректно ли работает `alt`.",
  ],
  difficulty: 2,
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/img"],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Изображения в HTML</title>
  </head>
  <body>
    <h1>Работа с изображениями</h1>

    <p>Пример изображения из интернета:</p>
    <img 
      src="https://www.w3schools.com/html/img_chania.jpg" 
      alt="Пейзаж в Ханье" 
      width="300"
    />

    <p>Пример локального изображения:</p>
    <img 
      src="/img/html.jpg" 
      alt="Локальное изображение" 
      width="150"
    />

    <hr />

    <h2>Форматы изображений</h2>
    <ul>
      <li><strong>JPG (JPEG)</strong> — используется для фотографий и изображений с большим количеством цветов. Поддерживает сжатие с потерями.</li>
      <li><strong>PNG</strong> — хорошо подходит для изображений с прозрачностью и текстом. Сохраняет качество, но занимает больше места.</li>
    </ul>

    <p><strong>Рекомендация:</strong> выбирайте формат в зависимости от содержимого: JPG — для фото, PNG — для логотипов и схем.</p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Изображения в HTML</title>
  </head>
  <body>
    <h1>Работа с изображениями</h1>

    <p>Пример изображения из интернета:</p>
    <img 
      src="https://www.w3schools.com/html/img_chania.jpg" 
      alt="Пейзаж в Ханье" 
      width="300"
    />
    <p>Пример локального изображения:</p>
    <img 
      src="https://itproger.com/img/courses/1476977240.jpg" 
      alt="Локальное изображение (файл из public/img)" 
      width="150"
    />

    <hr />

    <h2>Форматы изображений</h2>
    <ul>
      <li><strong>JPG (JPEG)</strong> — используется для фотографий и изображений с большим количеством цветов. Поддерживает сжатие с потерями.</li>
      <li><strong>PNG</strong> — хорошо подходит для изображений с прозрачностью и текстом. Сохраняет качество, но занимает больше места.</li>
    </ul>

    <p><strong>Рекомендация:</strong> выбирайте формат в зависимости от содержимого: JPG — для фото, PNG — для логотипов и схем.</p>
  </body>
</html>`,
};
