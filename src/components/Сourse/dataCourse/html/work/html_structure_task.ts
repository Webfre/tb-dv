export const html_structure_task_1 = {
  id: "html_structure_task_1",
  module: "HTML",
  title: "Базовая структура HTML-документа",
  topic: "Элементы <html>, <head> и <body>",
  topicId: "html_structure",
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
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/html",
    "https://html5book.ru/osnovy-html/#structure",
  ],
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
  title: "Создание HTML-документа 'Моя первая страница'",
  topic: "Структура HTML-документа",
  topicId: "html_structure",
  description:
    "Создайте HTML-документ с полной структурой, включающий мета-информацию, заголовок страницы и контент с несколькими уровнями заголовков.",
  steps: [
    "Создайте новый файл с расширением `.html`, например `my_page.html`.",
    "Добавьте обязательную структуру документа: `<!DOCTYPE html>`, `<html>` с указанием языка.",
    "В разделе `<head>` добавьте:",
    "  - Мета-тег кодировки UTF-8",
    "  - Мета-тег для адаптивного отображения на мобильных устройствах",
    "  - Заголовок страницы 'Моя первая страница'",
    "В разделе `<body>` создайте:",
    "  - Главный заголовок `<h1>` с текстом 'Добро пожаловать!'",
    "  - Подзаголовок `<h2>` с текстом 'Обо мне'",
    "  - Абзац `<p>` с краткой информацией о себе",
    "  - Подзаголовок `<h2>` с текстом 'Мои увлечения'",
    "  - Маркированный список `<ul>` с 3-4 увлечениями",
    "Проверьте отображение страницы в браузере.",
  ],
  difficulty: 2,
  resources: [],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Добро пожаловать!</h1>
    <h2>Обо мне</h2>
    <p>Меня зовут Алексей, я изучаю веб-разработку.</p>
    <h2>Мои увлечения</h2>
    <ul>
      <li>Программирование</li>
      <li>Фотография</li>
      <li>Путешествия</li>
    </ul>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Добро пожаловать!</h1>
    <h2>Обо мне</h2>
    <p>Меня зовут Алексей, я изучаю веб-разработку.</p>
    <h2>Мои увлечения</h2>
    <ul>
      <li>Программирование</li>
      <li>Фотография</li>
      <li>Путешествия</li>
    </ul>
  </body>
</html>`,
};
