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
    '- Заголовок `<h1>` с `id="top"` и произвольным текстом.',
    "- Несколько абзацев `<p>` с общим классом `text`.",
    "- Один из абзацев должен иметь уникальный `id`, например `contact`.",
    '- Добавьте ссылку `<a>`, которая ведёт к элементу с id `contact` (используя якорную ссылку `href="#contact"`).',
    '- Также добавьте ссылку для возврата наверх — `href="#top"`.',
    "Проверьте, что при нажатии по ссылкам страница прокручивается к нужному элементу.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/id",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/a#%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4_%D0%BA_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%83_%D0%BD%D0%B0_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Глобальные атрибуты</title>
  </head>
  <body>
    <h1 id="top">Добро пожаловать</h1>

    <p class="text">Это первый абзац с общим классом.</p>
    <p class="text">Это второй абзац с тем же классом.</p>
    <p class="text" id="contact">Контактная информация находится здесь.</p>

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

    <a href="#contact">Перейти к контактам</a><br />
    <a href="#top">Вернуться наверх</a>
  </body>
</html>`,
  expectedResult: `
1. У заголовка <h1> есть уникальный id="top"
2. У абзацев общий класс class="text"
3. Один абзац имеет id="contact"
4. Ссылки позволяют переходить по якорям вверх и вниз по странице
`,
  tips: [
    "Атрибут id должен быть уникальным на странице",
    'Чтобы ссылка вела на элемент, используйте href="#id"',
    "Несколько элементов могут иметь один и тот же class",
  ],
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
    "  - Ссылку <a> с href на внешний сайт (например, https://google.com)",
    "  - Изображение <img> с src (URL или относительный путь), alt и width",
    "  - Ссылку-изображение (оберните <img> в <a>)",
    "  - Ссылку с mailto: в href",
    "  - Ссылку с tel: в href",
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
  
  <!-- Ссылка с href -->
  <p><a href="https://google.com" target="_blank">Перейти в Google (откроется в новой вкладке)</a></p>
  
  <!-- Изображение с src и alt -->
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&s" 
       alt="Пример изображения" 
       width="300">
  
  <!-- Ссылка-изображение -->
  <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU" alt="Лого Википедии" width="200">
  </a>
  
  <!-- Ссылки с mailto и tel -->
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
  
  <!-- Ссылка с href -->
  <p><a href="https://google.com" target="_blank">Перейти в Google (откроется в новой вкладке)</a></p>
  
  <!-- Изображение с src и alt -->
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&s" 
       alt="Пример изображения" 
       width="300">
  
  <!-- Ссылка-изображение -->
  <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDNOC9ZIPHiMjY5oAPpZzQ_sYOtNsbdsTaF5gXh8RIB9UmTVovHN66dAy1MfiFZH1xfs&usqp=CAU" alt="Лого Википедии" width="200">
  </a>

  <!-- Ссылки с mailto и tel -->
  <p>
    <a href="mailto:example@email.com">Написать письмо</a> | 
    <a href="tel:+71234567890">Позвонить нам</a>
  </p>
</body>
</html>`,
  expectedResult: `
1. Рабочая внешняя ссылка с target="_blank"
2. Изображение с альтернативным текстом
3. Кликабельное изображение-ссылка
4. Встроенное видео через iframe
5. Ссылка для отправки email
6. Ссылка для звонка по телефону
`,
  commonMistakes: [
    "Забыть указать alt для изображений",
    "Использовать абсолютные пути вместо относительных",
    "Не указывать протокол (http/https) во внешних ссылках",
    "Путать src и href у разных элементов",
  ],
  validationTips: [
    "Проверьте все ссылки - они должны открываться",
    "Убедитесь, что изображения отображаются",
    "Проверьте альтернативный текст при отключенных изображениях",
    "Тестируйте на разных устройствах (проверьте tel:)",
  ],
};
