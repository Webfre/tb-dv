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
    '- Добавьте элемент с `id`, на который ведёт якорная ссылка (например, `id="contacts"`).',
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
      <a href="about.html">Перейти на страницу About</a>
    </p>

    <p>
      Якорная ссылка:
      <a href="#contacts">Перейти к контактам</a>
    </p>

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
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Перейти на Example.com
      </a>
    </p>

    <p>
      Внутренняя ссылка:
      <a href="about.html">Перейти на страницу About</a>
    </p>

    <p>
      Якорная ссылка:
      <a href="#contacts">Перейти к контактам</a>
    </p>

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
export const html_links_creation_3 = {
  id: "html_links_creation_3",
  module: "HTML",
  title: "Расширенная работа со ссылками",
  topic: "Ссылки и изображения",
  topicId: "html_links_images",
  description:
    "Создайте HTML-страницу, содержащую несколько типов ссылок: обычные, якорные, изображение-ссылка и псевдоссылку. Добавьте комментарии к каждому типу.",
  steps: [
    "Создайте HTML-файл, например `advanced-links.html`.",
    "Добавьте базовую HTML-структуру с заголовком 'Типы ссылок'.",
    "Внутри `<body>` реализуйте следующее:",
    '- Обычную внешнюю ссылку с `target="_blank"` и `rel="noopener noreferrer"`.',
    "- Внутреннюю ссылку на файл `about.html` с пояснением через `title`.",
    '- Якорную ссылку `href="#bottom"` и элемент с `id="bottom"` внизу страницы.',
    "- Изображение, обёрнутое в ссылку (например, на https://example.com), с `alt` и `width`.",
    '- Псевдоссылку без перехода (`<a href="#">`) с `onclick`, которая вызывает `alert()`.',
    "- Для каждого вида ссылки добавьте HTML-комментарий с пояснением.",
    "Проверьте, как работают переходы, и убедитесь в правильности поведения псевдоссылки.",
  ],
  difficulty: 4,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/img",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Типы ссылок</title>
  </head>
  <body>
    <!-- Внешняя ссылка -->
    <p>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Перейти на внешний сайт
      </a>
    </p>

    <!-- Внутренняя ссылка -->
    <p>
      <a href="about.html" title="Переход на about.html">
        О нас
      </a>
    </p>

    <!-- Якорная ссылка -->
    <p>
      <a href="#bottom">Перейти в конец страницы</a>
    </p>

    <!-- Ссылка-изображение -->
    <p>
      <a href="https://example.com">
        <img 
          src="https://www.w3schools.com/html/pic_trulli.jpg" 
          alt="Пример изображения" 
          width="200"
        />
      </a>
    </p>

 

    <!-- Цель для якорной ссылки -->
    <h2 id="bottom">Конец страницы</h2>
    <p>Спасибо за внимание!</p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Типы ссылок</title>
  </head>
  <body>
    <p>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Перейти на внешний сайт
      </a>
    </p>

    <p>
      <a href="about.html" title="Переход на about.html">
        О нас
      </a>
    </p>

    <p>
      <a href="#bottom">Перейти в конец страницы</a>
    </p>

    <p>
      <a href="https://example.com">
        <img 
          src="https://www.w3schools.com/html/pic_trulli.jpg" 
          alt="Пример изображения" 
          width="200"
        />
      </a>
    </p>
    <h2 id="bottom">Конец страницы</h2>
    <p>Спасибо за внимание!</p>
  </body>
</html>`,
};
export const html_links_creation_4 = {
  id: "html_links_creation_4",
  module: "HTML",
  title: "Комплексная структура со ссылками",
  topic: "Ссылки и изображения",
  topicId: "html_links_images",
  description:
    "Создайте HTML-страницу с семантической структурой и разнообразными типами ссылок: внешняя, внутренняя, якорная, ссылка-изображение. Примените атрибуты `target`, `rel`, `title` и добавьте якорь на раздел.",
  steps: [
    "Создайте HTML-файл, например `links-full.html`.",
    "Добавьте базовую HTML-структуру и укажите `<title>`: 'Ссылки и структура'.",
    "Внутри `<body>` создайте разметку:",
    "- `header` с заголовком и логотипом (в виде изображения-ссылки).",
    "- `nav` с тремя ссылками: якорная на 'контакты', внутренняя (`about.html`), внешняя (например, MDN).",
    "- `main` с двумя разделами `section`: 'О нас' и 'Контакты'.",
    '- Вставьте якорь через `id="contacts"`.',
    "- В `footer` добавьте копирайт и ссылку на главную страницу.",
    "- Для каждой ссылки укажите соответствующие атрибуты: `target`, `rel`, `title`, где применимо.",
    "- Добавьте комментарии перед каждым типом ссылок.",
  ],
  difficulty: 5,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/img",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Ссылки и структура</title>
  </head>
  <body>
    <!-- Заголовок и логотип -->
    <header>
      <a href="index.html" title="На главную страницу">
        <img src="https://www.w3schools.com/html/logo.png" alt="Логотип" width="100" />
      </a>
      <h1>Учебный проект</h1>
    </header>

    <!-- Навигационное меню -->
    <nav>
      <a href="#contacts">Контакты</a>
      <a href="about.html" title="Подробнее о нас">О нас</a>
      <a href="https://developer.mozilla.org/ru/" target="_blank" rel="noopener noreferrer">
        MDN Web Docs
      </a>
    </nav>

    <main>
      <!-- Раздел О нас -->
      <section>
        <h2>О нас</h2>
        <p>Мы занимаемся обучением HTML, CSS и JavaScript с нуля.</p>
      </section>

      <!-- Раздел Контакты -->
      <section id="contacts">
        <h2>Контакты</h2>
        <p>Адрес: ул. Примерная, д. 1</p>
        <p>Email: info@example.com</p>
      </section>
    </main>

    <!-- Подвал сайта -->
    <footer>
      <p>© 2025 Учебный проект | <a href="index.html">Главная</a></p>
    </footer>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Ссылки и структура</title>
  </head>
  <body>
    <header>
      <a href="index.html" title="На главную страницу">
        <img src="https://www.w3schools.com/html/logo.png" alt="Логотип" width="100" />
      </a>
      <h1>Учебный проект</h1>
    </header>

    <nav>
      <a href="#contacts">Контакты</a>
      <a href="about.html" title="Подробнее о нас">О нас</a>
      <a href="https://developer.mozilla.org/ru/" target="_blank" rel="noopener noreferrer">
        MDN Web Docs
      </a>
    </nav>

    <main>
      <section>
        <h2>О нас</h2>
        <p>Мы занимаемся обучением HTML, CSS и JavaScript с нуля.</p>
      </section>

      <section id="contacts">
        <h2>Контакты</h2>
        <p>Адрес: ул. Примерная, д. 1</p>
        <p>Email: info@example.com</p>
      </section>
    </main>

    <footer>
      <p>© 2025 Учебный проект | <a href="index.html">Главная</a></p>
    </footer>
  </body>
</html>`,
};
