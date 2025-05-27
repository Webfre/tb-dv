export const css_methodologies_task_1 = {
  id: "css_methodologies_task_1",
  module: "CSS",
  title: "Верстка карточек по BEM",
  topic: "Что такое CSS-методологии",
  topicId: "css_methodologies",
  sectionId: "css_methodologies_2",
  description:
    "Создайте простой HTML-документ с карточками, оформленными по методологии BEM. Добавьте стили для блока, элемента и модификатора.",
  steps: [
    "Создайте HTML-документ с тремя карточками `<div>`.",
    "Для каждой карточки задайте класс блока `card`.",
    "Внутри карточки добавьте заголовок `<h2>` с классом элемента `card__title` и текстовый блок `<p>` с классом `card__text`.",
    "Для одной из карточек добавьте модификатор `card--highlighted`, который изменит её фон.",
    "Проверьте, что стили применились корректно.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>CSS Методологии - BEM</title>
</head>
<body>
  <div class="card">
    <h2 class="card__title">Обычная карточка</h2>
    <p class="card__text">Это простой пример блока BEM.</p>
  </div>

  <div class="card card--highlighted">
    <h2 class="card__title">Выделенная карточка</h2>
    <p class="card__text">Эта карточка имеет модификатор.</p>
  </div>

  <div class="card">
    <h2 class="card__title">Ещё одна карточка</h2>
    <p class="card__text">BEM упрощает структурирование стилей.</p>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Методологии - BEM</title>
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .card__title {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .card__text {
      font-size: 14px;
      color: #555;
    }

    .card--highlighted {
      background-color: #f0f8ff;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2 class="card__title">Обычная карточка</h2>
    <p class="card__text">Это простой пример блока BEM.</p>
  </div>

  <div class="card card--highlighted">
    <h2 class="card__title">Выделенная карточка</h2>
    <p class="card__text">Эта карточка имеет модификатор.</p>
  </div>

  <div class="card">
    <h2 class="card__title">Ещё одна карточка</h2>
    <p class="card__text">BEM упрощает структурирование стилей.</p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Базовый блок */
    .card {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    /* Элементы внутри блока */
    .card__title {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .card__text {
      font-size: 14px;
      color: #555;
    }

    /* Модификатор для выделенной карточки */
    .card--highlighted {
      background-color: #f0f8ff;
    }
  `.trim(),
  resources: [
    "https://ru.bem.info/methodology/",
    "https://css-tricks.com/bem-101/",
    "https://htmlacademy.ru/blog/css/bem-cheatsheet",
  ],
};
export const css_methodologies_task_2 = {
  id: "css_methodologies_task_2",
  module: "CSS",
  title: "Навигационное меню в BEM-структуре",
  topic: "Методология BEM: блок, элемент, модификатор",
  topicId: "css_methodologies",
  sectionId: "css_methodologies_2",
  description:
    "Создайте навигационное меню с элементами, оформленными по методологии BEM. Добавьте стили для блока, элементов и модификаторов (активный пункт меню).",
  steps: [
    "Создайте HTML-документ с навигационным меню `<nav>`.",
    "Внутри меню создайте список `<ul>` с несколькими пунктами `<li>`. Каждый пункт должен иметь ссылку `<a>`.",
    "Примените к меню BEM-структуру: блок `nav`, элементы `nav__item` для пунктов и `nav__link` для ссылок.",
    "Добавьте модификатор `nav__item--active` для одного из пунктов, чтобы выделить его цветом.",
    "Проверьте, что стили применяются корректно и выделенный пункт отличается от других.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Навигационное меню BEM</title>
</head>
<body>

  <nav class="nav">
    <ul>
      <li class="nav__item nav__item--active">
        <a href="#" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">О нас</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Услуги</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Контакты</a>
      </li>
    </ul>
  </nav>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Навигационное меню BEM</title>
  <style>
    .nav {
      background-color: #f8f9fa;
      padding: 10px;
      border-radius: 5px;
    }

    .nav__item {
      display: inline-block;
      margin-right: 15px;
    }

    .nav__link {
      text-decoration: none;
      color: #007bff;
      font-size: 16px;
    }

    .nav__item--active .nav__link {
      color: #0056b3;
      font-weight: bold;
      border-bottom: 2px solid #0056b3;
    }
  </style>
</head>
<body>

  <nav class="nav">
    <ul>
      <li class="nav__item nav__item--active">
        <a href="#" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">О нас</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Услуги</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Контакты</a>
      </li>
    </ul>
  </nav>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
<style>
    /* Блок меню */
    .nav {
      background-color: #f8f9fa;
      padding: 10px;
      border-radius: 5px;
    }

    /* Элементы меню */
    .nav__item {
      display: inline-block;
      margin-right: 15px;
    }

    .nav__link {
      text-decoration: none;
      color: #007bff;
      font-size: 16px;
    }

    /* Модификатор для активного элемента */
    .nav__item--active .nav__link {
      color: #0056b3;
      font-weight: bold;
      border-bottom: 2px solid #0056b3;
    }
  `.trim(),
  resources: [
    "https://ru.bem.info/methodology/",
    "https://css-tricks.com/bem-101/",
    "https://htmlacademy.ru/blog/css/bem-cheatsheet",
  ],
};
