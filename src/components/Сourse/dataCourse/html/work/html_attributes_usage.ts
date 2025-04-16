export const html_attributes_usage_1 = {
  id: "html_attributes_usage_1",
  module: "HTML",
  title: "Применение глобальных атрибутов",
  topic: "Глобальные атрибуты: id, class, style",
  topicId: "html_attributes",
  description:
    "Создайте HTML-страницу, демонстрирующую использование глобальных атрибутов id, class и style.",
  steps: [
    "Создайте файл `attributes.html` с базовой структурой HTML",
    "В разделе <body> добавьте:",
    "  - Заголовок <h1> с id='main-title' и стилем (например, цвет текста)",
    "  - 3 параграфа <p>, каждому назначьте класс 'text'",
    "  - Одному из параграфов добавьте уникальный id и инлайновый стиль",
    "  - Создайте кнопку <button> с классом 'btn' и стилем для фона",
    "  - Добавьте <div> с двумя классами ('container' и 'border')",
    "Проверьте результат в браузере, убедитесь, что стили применяются",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Глобальные атрибуты</title>
</head>
<body>
  <h1 id="main-title" style="color: blue;">Демонстрация атрибутов</h1>
  
  <p class="text">Первый параграф с классом 'text'.</p>
  <p class="text" id="special-paragraph" style="font-weight: bold;">Второй параграф с id и стилем.</p>
  <p class="text">Третий параграф с классом 'text'.</p>
  
  <button class="btn" style="background-color: lightgreen;">Кнопка</button>
  
  <div class="container border" style="padding: 20px;">
    Контейнер с двумя классами и стилями
  </div>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Глобальные атрибуты</title>
</head>
<body>
  <h1 id="main-title" style="color: blue;">Демонстрация атрибутов</h1>
  
  <p class="text">Первый параграф с классом 'text'.</p>
  <p class="text" id="special-paragraph" style="font-weight: bold;">Второй параграф с id и стилем.</p>
  <p class="text">Третий параграф с классом 'text'.</p>
  
  <button class="btn" style="background-color: lightgreen;">Кнопка</button>
  
  <div class="container border" style="padding: 20px;">
    Контейнер с двумя классами и стилями
  </div>
</body>
</html>`,
  expectedResult: `
1. Заголовок с id и инлайновым стилем
2. Три параграфа с общим классом
3. Один параграф с уникальным id и стилем
4. Кнопка с классом и стилем
5. Div-контейнер с двумя классами
6. Все стили должны визуально отображаться
`,
  tips: [
    "id должен быть уникальным на странице",
    "class можно применять к нескольким элементам",
    "style имеет наивысший приоритет в CSS",
    "Разделяйте несколько классов пробелом",
  ],
};
export const html_attributes_usage_2 = {
  id: "html_attributes_usage_2",
  module: "HTML",
  title: "Работа со специфичными атрибутами элементов",
  topic: "Специфичные атрибуты: href, src, alt",
  topicId: "html_attributes",
  description:
    "Создайте HTML-страницу, демонстрирующую использование специфичных атрибутов href, src и alt в различных элементах.",
  steps: [
    "Создайте файл `specific_attrs.html` с базовой структурой HTML",
    "В разделе <body> добавьте:",
    "  - Ссылку <a> с href на внешний сайт (например, https://google.com)",
    "  - Изображение <img> с src (URL или относительный путь), alt и width",
    "  - Ссылку-изображение (оберните <img> в <a>)",
    "  - Элемент <iframe> с src (например, YouTube-видео)",
    "  - Ссылку с mailto: в href",
    "  - Ссылку с tel: в href",
    "Проверьте работоспособность всех атрибутов в браузере",
  ],
  difficulty: 2,
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
  
  <!-- iframe с src -->
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          width="560" 
          height="315" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
  
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
  
  <!-- iframe с src -->
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          width="560" 
          height="315" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
  
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

export const html_attributes_usage_3 = {
  id: "html_attributes_usage_3",
  module: "HTML",
  title: "Работа с data-*, булевыми и aria-* атрибутами",
  topic: "Атрибуты элементов",
  topicId: "html_attributes",
  description:
    "Создайте HTML-документ с кнопкой, у которой заданы атрибуты `data-*`, булевый атрибут и атрибуты доступности (`aria-*`).",
  steps: [
    "Создайте новый HTML-файл, например `attributes.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте кнопку с текстом 'Нажми меня'.",
    "Добавьте к кнопке следующие атрибуты:",
    '- `data-action="submit-form"` — пользовательский data-атрибут.',
    "- `disabled` — булевый атрибут, делающий кнопку неактивной.",
    '- `aria-label="Отправить форму"` — атрибут доступности, описывающий назначение кнопки.',
    "Сохраните и откройте файл в браузере, чтобы убедиться, что кнопка отображается и недоступна для нажатия.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Атрибуты HTML</title>
  </head>
  <body>
    <button 
      data-action="submit-form" 
      disabled 
      aria-label="Отправить форму">
      Нажми меня
    </button>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Атрибуты HTML</title>
  </head>
  <body>
    <button 
      data-action="submit-form" 
      disabled 
      aria-label="Отправить форму">
      Нажми меня
    </button>
  </body>
</html>`,
};
