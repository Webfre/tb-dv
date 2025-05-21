export const html_attributes_usage_1 = {
  id: "html_attributes_usage_1",
  module: "HTML",
  title: "Использование id, class и якорной ссылки",
  topic: "Глобальные атрибуты: id, class, style",
  topicId: "html_attributes",
  sectionId: "html_attr_1",
  description:
    "Создайте HTML-страницу, в которой применяются атрибуты `id` и `class`, а также реализована якорная ссылка на элемент внутри страницы.",
  steps: [
    "Создайте HTML-файл, например `attributes-simple.html`, с базовой структурой.",
    "Внутри `<body>` добавьте:",
    'Заголовок `<h1>` с `id="top"` и произвольным текстом.',
    "Несколько абзацев `<p>` с общим классом `text`.",
    "Один из абзацев должен иметь уникальный `id`, например `contact`.",
    'Добавьте ссылку `<a>`, которая ведёт к элементу с id `contact` (используя якорную ссылку `href="#contact"`).',
    'Также добавьте ссылку для возврата наверх — `href="#top"`.',
    "Проверьте, что при нажатии по ссылкам страница прокручивается к нужному элементу.",
    "Добавте тег <p> c описанием Lorem чтобы получился скролл страницы.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/id",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/a#%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4_%D0%BA_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%83_%D0%BD%D0%B0_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Глобальные атрибуты</title>
  </head>
  <body>
    <h1 id="top">Добро пожаловать</h1>

    <p class="text">Это первый абзац с общим классом.</p>
    <p class="text">Это второй абзац с тем же классом.</p>
    <p class="text" id="contact">Контактная информация находится здесь.</p>

    <!-Дополнительные абзацы Lorem Ipsum -->
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <a href="#contact">Перейти к контактам</a><br />
    <a href="#top">Вернуться наверх</a>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Глобальные атрибуты</title>
  </head>
  <body>
    <h1 id="top">Добро пожаловать</h1>

    <p class="text">Это первый абзац с общим классом.</p>
    <p class="text">Это второй абзац с тем же классом.</p>
    <p class="text" id="contact">Контактная информация находится здесь.</p>

    <!-Дополнительные абзацы Lorem Ipsum -->
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <a href="#contact">Перейти к контактам</a><br />
    <a href="#top">Вернуться наверх</a>
  </body>
</html>`,
};

export const html_attributes_usage_2 = {
  id: "html_attributes_usage_2",
  module: "HTML",
  title: "Работа со специфичными атрибутами элементов",
  topic: "Специфичные атрибуты: href, src, alt",
  topicId: "html_attributes",
  sectionId: "html_attr_2",
  description:
    "Создайте HTML-страницу, демонстрирующую использование специфичных атрибутов href, src и alt в различных элементах.",
  steps: [
    "Создайте файл `specific_attrs.html` с базовой структурой HTML",
    "В разделе <body> добавьте:",
    "  Ссылку <a> с href на внешний сайт (например, https://google.com)",
    "  Изображение <img> с src (URL или относительный путь), alt и width",
    "  Ссылку-изображение (оберните <img> в <a>)",
    "  Ссылку с mailto: в href",
    "  Ссылку с tel: в href",
    "Проверьте работоспособность всех атрибутов в браузере",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/a#атрибуты",
    "https://html5book.ru/html-attributes/",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Специфичные атрибуты</title>
</head>
<body>
  <h1>Демонстрация специфичных атрибутов</h1>
  
  <!-Ссылка с href -->
  <p><a href="https://google.com" target="_blank">Перейти в Google (откроется в новой вкладке)</a></p>
  
  <!-Изображение с src и alt -->
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&s" 
       alt="Пример изображения" 
       width="300">
  
  <!-Ссылка-изображение -->
  <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU" alt="Лого Википедии" width="200">
  </a>
  
  <!-Ссылки с mailto и tel -->
  <p>
    <a href="mailto:example@email.com">Написать письмо</a> | 
    <a href="tel:+71234567890">Позвонить нам</a>
  </p>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Специфичные атрибуты</title>
</head>
<body>
  <h1>Демонстрация специфичных атрибутов</h1>
  
  <!-Ссылка с href -->
  <p><a href="https://google.com" target="_blank">Перейти в Google (откроется в новой вкладке)</a></p>
  
  <!-Изображение с src и alt -->
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&s" 
       alt="Пример изображения" 
       width="300">
  
  <!-Ссылка-изображение -->
  <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU" alt="Лого Википедии" width="200">
  </a>

  <!-Ссылки с mailto и tel -->
  <p>
    <a href="mailto:example@email.com">Написать письмо</a> | 
    <a href="tel:+71234567890">Позвонить нам</a>
  </p>
</body>
</html>`,
};
export const html_attributes_usage_3 = {
  id: "html_attributes_usage_3",
  module: "HTML",
  title: "Расширенное использование глобальных атрибутов",
  topic: "Глобальные атрибуты: id, class, style, data-*",
  topicId: "html_attributes",
  sectionId: "html_attr_1",
  description:
    "Создайте HTML-страницу с продвинутым примером применения глобальных атрибутов `id`, `class`, `style` и `data-*`. Реализуйте навигацию по якорям и добавьте несколько секций с Lorem Ipsum для скролла.",
  steps: [
    "Создайте файл `attributes-advanced.html` с базовой HTML-структурой.",
    "Добавьте в `<body>` следующий блок:",
    "`<header>` с",
    '`id="top"` и классами `header section`;',
    "трибутом `style` для фона и отступов;",
    'внутри — `<h1>` с классом `title` и навигационное меню `<nav>` с `id="main-nav"` и классом `nav`.',
    "В меню `<nav>` разместите ссылки на якоря `#section1`, `#section2`, `#contact` и возврат наверх `#top`.",
    "Создайте две секции `<section>`:",
    'Первая с `id="section1"`, классом `content` и атрибутом `data-section="1"`.',
    'Вторая аналогично, но с `id="section2"` и `data-section="2"`.',
    'В каждой секции добавьте по 5 абзацев `<p class="text">Lorem Ipsum…` для прокрутки.',
    'Добавьте `<footer>` с `id="contact"`, классами `footer section` и `style` для границы сверху.',
    "В футере два абзаца с контактами.",
    "Проверьте работу якорных ссылок и визуальный порядок элементов (скролл, меню).",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/section",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Глобальные атрибуты: Расширенный пример</title>
</head>
<body>
  <header id="top" class="header section">
    <h1 class="title">Добро пожаловать на страницу атрибутов</h1>
    <nav id="main-nav" class="nav">
      <a href="#section1">Раздел 1</a> |
      <a href="#section2">Раздел 2</a> |
      <a href="#contact">Контакты</a> |
      <a href="#top">Наверх</a>
    </nav>
  </header>

  <section id="section1" class="content" data-section="1">
    <h2>Секция 1</h2>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </section>

  <section id="section2" class="content" data-section="2">
    <h2>Секция 2</h2>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </section>

  <footer id="contact" class="footer section" style="border-top: 1px solid #ccc; padding: 12px;">
    <h2>Контакты</h2>
    <p class="text">Email: example@example.com</p>
    <p class="text">Телефон: +7 123 456 78 90</p>
  </footer>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Глобальные атрибуты: Расширенный пример</title>
</head>
<body>
  <header id="top" class="header section">
    <h1 class="title">Добро пожаловать на страницу атрибутов</h1>
    <nav id="main-nav" class="nav">
      <a href="#section1">Раздел 1</a> |
      <a href="#section2">Раздел 2</a> |
      <a href="#contact">Контакты</a> |
      <a href="#top">Наверх</a>
    </nav>
  </header>

   <section id="section1" class="content" data-section="1">
    <h2>Секция 1</h2>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
     <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </section>


  <section id="section2" class="content" data-section="2">
    <h2>Секция 2</h2>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </section>

  <footer id="contact" class="footer section" style="border-top: 1px solid #ccc; padding: 12px;">
    <h2>Контакты</h2>
    <p class="text">Email: example@example.com</p>
    <p class="text">Телефон: +7 123 456 78 90</p>
  </footer>
</body>
</html>`,
};
