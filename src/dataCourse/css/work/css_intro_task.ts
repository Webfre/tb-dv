export const css_intro_task_1 = {
  id: "css_intro_task_1",
  module: "CSS",
  title: "Подключение стилей",
  topic: "Введение в CSS",
  topicId: "css_intro",
  description:
    "Создайте HTML-документ, демонстрирующий три способа подключения CSS: внешний файл, внутренние стили и инлайн-стили.",
  steps: [
    "Создайте файл `styles.html` с базовой структурой HTML",
    "Подключите внешний CSS-файл `external.css` через `<link>` в `<head>`",
    "Добавьте внутренние стили через тег `<style>` в `<head>`",
    "Используйте инлайн-стили через атрибут `style` для одного элемента",
    "В файле `external.css` задайте стили для body (фон, шрифт)",
    "Во внутренних стилях задайте оформление для заголовка h1",
    "Через инлайн-стили задайте цвет текста для одного абзаца",
    "Убедитесь, что все три способа работают одновременно",
  ],
  difficulty: 1,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Способы подключения CSS</title>
  <!-- Внешний стиль -->
  <link rel="stylesheet" href="external.css">
  <!-- Внутренний стиль -->
  <style>
    h1 {
      color: navy;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Три способа подключения CSS</h1>
  <p>Этот абзац оформлен через внешний CSS-файл</p>
  <p style="color: green; font-weight: bold;">Этот абзац оформлен инлайн-стилями</p>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Способы подключения CSS</title>
  <style>
    /* Стили из external.css */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      line-height: 1.6;
      padding: 20px;
    }
    p {
      color: #333;
      padding: 10px;
    }
    
    /* Внутренние стили */
    h1 {
      color: navy;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Три способа подключения CSS</h1>
  <p>Этот абзац оформлен через внешний CSS-файл</p>
  <p style="color: green; font-weight: bold;">Этот абзац оформлен инлайн-стилями</p>
</body>
</html>`,
  codeExampleCSS: `/* Файл external.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  line-height: 1.6;
  padding: 20px;
}

p {
  color: #333;
  padding: 10px;
}`,
};
