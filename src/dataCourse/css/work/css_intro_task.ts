export const css_intro_task_1 = {
  id: "css_intro_task_1",
  module: "CSS",
  title: "Способы подключения CSS",
  topic: "Введение в CSS",
  topicId: "css_intro",
  sectionId: "css_intro2",
  description:
    "Создайте HTML-документ, демонстрирующий три способа подключения CSS: внешний файл, внутренние стили и инлайн-стили.",
  steps: [
    "Создайте файл `index.html` с базовой структурой HTML",
    "Подключите внешний CSS-файл `styles.css` через `<link>` в `<head>`",
    "Внутри файла `styles.css` задайте стили для `<body>` (фон, шрифт, цвет текста)",
    "Добавьте внутренние стили через тег `<style>` в `<head>`",
    "Задайте цвет заголовка `<h1>` — синий (`blue`)",
    "Для одного из абзацев `<p>` пропишите инлайн-стиль `color: red`",
    "Убедитесь, что все три способа работают одновременно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Способы подключения CSS</title>

  <!-- Внешний стиль -->
  <link rel="stylesheet" href="styles.css">

  <!-- Внутренние стили -->
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Три способа подключения CSS</h1>
  <p>Этот абзац оформлен через внешний CSS-файл</p>
  <p style="color: red;">Этот абзац оформлен инлайн-стилями</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Способы подключения CSS</title>
  <style>
    /* Стили из external.css */
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #333;
      margin: 0;
      padding: 20px;
    }
    p {
      color: #333;
      padding: 10px;
    }

    /* Внутренние стили */
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Три способа подключения CSS</h1>
  <p>Этот абзац оформлен через внешний CSS-файл</p>
  <p style="color: red;">Этот абзац оформлен инлайн-стилями</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Файл external.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  line-height: 1.6;
  padding: 20px;
}

p {
  color: #333;
  padding: 10px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS",
    "https://html5book.ru/osnovy-css/",
  ],
};
