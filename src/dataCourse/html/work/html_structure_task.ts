export const html_structure_task_1 = {
  id: "html_structure_task_1",
  module: "HTML",
  title: "Базовая структура HTML-документа",
  topic: "Элементы <html>, <head> и <body>",
  topicId: "html_structure",
  sectionId: "html_structure_1",
  description:
    "Создайте минимальный HTML-документ с правильной структурой, включая обязательные элементы <html>, <head> и <body>.",
  steps: [
    "Создайте файл `structure.html`",
    "Добавьте декларацию <!DOCTYPE html> в начало файла",
    "Создайте элемент <html> с указанием языка (русский)",
    "Внутри <html> создайте раздел <head> с:",
    "  - Мета-тегом кодировки UTF-8",
    "  - Тегом <title> с названием 'Моя страница'",
    "  - Мета-тегом viewport для адаптивности",
    "После <head> создайте раздел <body> с:",
    "  - Заголовком <h1> 'Привет, мир!'",
    "  - Параграфом <p> с кратким описанием страницы",
    "Проверьте валидность структуры в браузере",
  ],
  difficulty: 1,
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/html"],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Моя страница</title>
</head>
<body>
  <h1>Привет, мир!</h1>
  <p>Это моя первая HTML-страница с правильной структурой.</p>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Моя страница</title>
</head>
<body>
  <h1>Привет, мир!</h1>
  <p>Это моя первая HTML-страница с правильной структурой.</p>
</body>
</html>`,
  expectedResult: `
1. Документ должен начинаться с <!DOCTYPE html>
2. Обязательное наличие <html>, <head> и <body>
3. В <head> должны быть meta charset и title
4. В <body> должен быть хотя бы один заголовок и параграф
5. Язык документа должен быть указан как русский
`,
};

export const html_structure_task_2 = {
  id: "html_structure_task_2",
  module: "HTML",
  title: "Обязательная директива <!DOCTYPE>",
  topic: "Структура HTML-документа",
  topicId: "html_structure",
  sectionId: "html_structure_2",

  description:
    "Создайте HTML-документ с корректной директивой `<!DOCTYPE>` в начале. Эта строка сообщает браузеру, что используется HTML5, и позволяет отобразить страницу в стандартизированном режиме.",
  steps: [
    "Создайте новый файл, например `doctype_example.html`.",
    "Добавьте первой строкой документа директиву `<!DOCTYPE html>`.",
    "Создайте базовую HTML-структуру: `<html>`, `<head>`, `<body>`.",
    "В `<head>` укажите заголовок страницы с помощью `<title>` — например, 'DOCTYPE в HTML'.",
    "В `<body>` добавьте заголовок `<h1>` с текстом 'Что такое DOCTYPE?' и абзац с кратким пояснением.",
    "Откройте документ в браузере и убедитесь, что страница отображается корректно.",
  ],
  difficulty: 1,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Quirks_Mode_and_Standards_Mode",
    "https://html.spec.whatwg.org/multipage/syntax.html#the-doctype",
  ],

  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>DOCTYPE в HTML</title>
  </head>
  <body>
    <h1>Что такое DOCTYPE?</h1>
    <p>Это директива, которая сообщает браузеру, что документ написан по стандарту HTML5.</p>
  </body>
</html>`,

  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>DOCTYPE в HTML</title>
  </head>
  <body>
    <h1>Что такое DOCTYPE?</h1>
    <p>Это директива, которая сообщает браузеру, что документ написан по стандарту HTML5.</p>
  </body>
</html>`,
};

export const html_structure_task_3 = {
  id: "html_structure_task_3",
  module: "HTML",
  title: "Базовые элементы HTML: html, head и body",
  topic: "Структура HTML-документа",
  topicId: "html_structure",
  sectionId: "html_structure_3",

  description:
    "Создайте HTML-документ с базовой структурой, в которой присутствуют элементы `<html>`, `<head>` и `<body>`. Внутри добавьте заголовок страницы, заголовок на странице и короткий абзац.",
  steps: [
    "Создайте файл, например `structure.html`.",
    "Добавьте обязательную строку `<!DOCTYPE html>` в начале документа.",
    "Создайте корневой тег `<html>` с атрибутом `lang='ru'`.",
    "Внутри `<head>` добавьте тег `<title>` с названием страницы 'Моя первая страница'.",
    "Внутри `<body>` добавьте:",
    "- Заголовок первого уровня (`<h1>`) с приветствием.",
    "- Абзац (`<p>`) с коротким описанием, зачем нужна структура HTML.",
    "Проверьте в браузере: заголовок страницы должен отображаться во вкладке, а контент — на странице.",
  ],
  difficulty: 1,
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/html"],

  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Привет, HTML!</h1>
    <p>Этот документ демонстрирует базовую структуру HTML со всеми основными элементами.</p>
  </body>
</html>`,

  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Привет, HTML!</h1>
    <p>Этот документ демонстрирует базовую структуру HTML со всеми основными элементами.</p>
  </body>
</html>`,
};
