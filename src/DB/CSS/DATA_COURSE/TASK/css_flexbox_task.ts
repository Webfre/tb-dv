export const css_flexbox_task_1 = {
  id: "css_flexbox_task_1",
  module: "CSS",
  title: "Горизонтальное меню с Flexbox",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_2",
  description:
    "Создайте горизонтальное навигационное меню с помощью Flexbox. Пункты меню должны быть равномерно распределены по всей ширине.",
  steps: [
    "Создайте HTML-документ с тегом `<nav>`, внутри которого будет список `<ul>` с пунктами меню `<li>`. Каждый пункт должен быть обёрнут в ссылку `<a>`.",
    "Примените к `<ul>` Flexbox, чтобы пункты выровнялись по горизонтали.",
    "Используйте `justify-content: space-around` для равномерного распределения пунктов меню.",
    "Уберите стандартные маркеры списка с помощью `list-style: none`.",
    "Добавьте стили для ссылок `<a>`, чтобы они выглядели как кнопки.",
    "Проверьте, что все пункты меню расположены в одну строку и равномерно распределены.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Горизонтальное меню с Flexbox</title>
</head>
<body>

  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Главная</a></li>
      <li class="nav__item"><a href="#" class="nav__link">О нас</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Услуги</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
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
  <title>Горизонтальное меню с Flexbox</title>
  <style>
    .nav {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
    }

    .nav__list {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav__item {
      list-style: none;
    }

    .nav__link {
      text-decoration: none;
      color: #007bff;
      font-size: 16px;
    }

    .nav__link:hover {
      color: #0056b3;
      border-bottom: 2px solid #0056b3;
    }
  </style>
</head>
<body>

  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Главная</a></li>
      <li class="nav__item"><a href="#" class="nav__link">О нас</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Услуги</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
    </ul>
  </nav>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Основной блок меню */
    .nav {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
    }

    /* Список меню в Flexbox */
    .nav__list {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    /* Пункт меню */
    .nav__item {
      list-style: none;
    }

    /* Ссылка в меню */
    .nav__link {
      text-decoration: none;
      color: #007bff;
      font-size: 16px;
    }

    /* Ховер эффект */
    .nav__link:hover {
      color: #0056b3;
      border-bottom: 2px solid #0056b3;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction",
    "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content",
    "https://developer.mozilla.org/ru/docs/Web/CSS/align-items",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_task_2 = {
  id: "css_flexbox_task_2",
  module: "CSS",
  title: "Горизонтальный список товаров с Flexbox",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_2",
  description:
    "Создайте горизонтальный список товаров с описанием и ценой, расположенный в одну линию с помощью Flexbox. Элементы должны быть равномерно распределены по ширине экрана.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='product-list'>`.",
    "Внутри контейнера создайте 4 карточки товара `<div class='product-item'>`, в каждой из которых будет название товара и его цена.",
    "Примените Flexbox к контейнеру, чтобы карточки располагались в одну линию.",
    "Используйте `justify-content: space-between` для равномерного распределения карточек.",
    "Добавьте стили для каждого товара: рамку, отступы и фон.",
    "Проверьте, что карточки равномерно распределены и красиво отображаются на странице.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Список товаров с Flexbox</title>
</head>
<body>

  <div class="product-list">
    <div class="product-item">
      <div class="product-item__title">Ноутбук Lenovo</div>
      <div class="product-item__price">65 000 ₽</div>
    </div>
    <div class="product-item">
      <div class="product-item__title">Смартфон Samsung</div>
      <div class="product-item__price">35 000 ₽</div>
    </div>
    <div class="product-item">
      <div class="product-item__title">Планшет Apple</div>
      <div class="product-item__price">45 000 ₽</div>
    </div>
    <div class="product-item">
      <div class="product-item__title">Наушники Sony</div>
      <div class="product-item__price">8 000 ₽</div>
    </div>
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
  <title>Список товаров с Flexbox</title>
  <style>
    .product-list {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 5px;
    }

    .product-item {
      background-color: #ffffff;
      border: 1px solid #ddd;
      padding: 15px;
      width: 22%;
      text-align: center;
      border-radius: 5px;
    }

    .product-item__title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .product-item__price {
      font-size: 16px;
      color: #28a745;
    }
  </style>
</head>
<body>

  <div class="product-list">
    <div class="product-item">
      <div class="product-item__title">Ноутбук Lenovo</div>
      <div class="product-item__price">65 000 ₽</div>
    </div>
    <div class="product-item">
      <div class="product-item__title">Смартфон Samsung</div>
      <div class="product-item__price">35 000 ₽</div>
    </div>
    <div class="product-item">
      <div class="product-item__title">Планшет Apple</div>
      <div class="product-item__price">45 000 ₽</div>
    </div>
    <div class="product-item">
      <div class="product-item__title">Наушники Sony</div>
      <div class="product-item__price">8 000 ₽</div>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Основной контейнер с товарами */
    .product-list {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 5px;
    }

    /* Карточка товара */
    .product-item {
      background-color: #ffffff;
      border: 1px solid #ddd;
      padding: 15px;
      width: 22%;
      text-align: center;
      border-radius: 5px;
    }

    /* Название и цена товара */
    .product-item__title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .product-item__price {
      font-size: 16px;
      color: #28a745;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction",
    "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content",
    "https://developer.mozilla.org/ru/docs/Web/CSS/align-items",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_task_3 = {
  id: "css_flexbox_task_3",
  module: "CSS",
  title: "Колонки с помощью Flexbox",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_2",
  description:
    "Создайте HTML-документ с двумя колонками (контент слева, сайдбар справа), используя Flexbox. Колонки должны быть адаптивными и занимать по 70% и 30% ширины соответственно.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='layout'>`.",
    "Внутри контейнера создайте два блока: `<div class='main-content'>` для основного контента и `<div class='sidebar'>` для сайдбара.",
    "Используйте Flexbox для расположения колонок в ряд.",
    "Задайте основной колонке ширину `70%`, а сайдбару — `30%`.",
    "Добавьте стили для фона, отступов и границ колонок.",
    "Проверьте, что при изменении ширины окна браузера, колонки остаются на своих местах.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Колонки с Flexbox</title>
</head>
<body>

  <div class="layout">
    <div class="main-content">
      <h2>Основной контент</h2>
      <p>Это основной блок, который занимает 70% ширины контейнера. Здесь можно разместить статьи, новости или другие важные материалы.</p>
    </div>
    <div class="sidebar">
      <h2>Сайдбар</h2>
      <p>Это сайдбар, который занимает 30% ширины контейнера. Здесь можно разместить меню, ссылки или рекламу.</p>
    </div>
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
  <title>Колонки с Flexbox</title>
  <style>
    .layout {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 20px;
    }

    .main-content {
      width: 70%;
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 5px;
    }

    .sidebar {
      width: 30%;
      background-color: #e9ecef;
      padding: 15px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <div class="layout">
    <div class="main-content">
      <h2>Основной контент</h2>
      <p>Это основной блок, который занимает 70% ширины контейнера. Здесь можно разместить статьи, новости или другие важные материалы.</p>
    </div>
    <div class="sidebar">
      <h2>Сайдбар</h2>
      <p>Это сайдбар, который занимает 30% ширины контейнера. Здесь можно разместить меню, ссылки или рекламу.</p>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  /* Контейнер с колонками */
    .layout {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 20px;
    }

    /* Основной контент */
    .main-content {
      width: 70%;
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 5px;
    }

    /* Сайдбар */
    .sidebar {
      width: 30%;
      background-color: #e9ecef;
      padding: 15px;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_task_4 = {
  id: "css_flexbox_task_4",
  module: "CSS",
  title: "Обёртка элементов с помощью Flexbox",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_3",
  description:
    "Создайте HTML-документ с контейнером, в котором расположены элементы в ряд. Настройте их обёртку на новую строку при недостатке места.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте несколько блоков `<div class='box'>`.",
    "Используйте Flexbox для расположения блоков в одну линию.",
    "Добавьте свойство `flex-wrap: wrap` для контейнера, чтобы элементы переносились на новую строку, если места недостаточно.",
    "Проверьте, что при изменении ширины окна браузера, блоки оборачиваются на новую строку.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Обёртка Flexbox</title>
</head>
<body>

  <div class="container">
    <div class="box">Элемент 1</div>
    <div class="box">Элемент 2</div>
    <div class="box">Элемент 3</div>
    <div class="box">Элемент 4</div>
    <div class="box">Элемент 5</div>
    <div class="box">Элемент 6</div>
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
  <title>Обёртка Flexbox</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .box {
      width: 300px;
      height: 100px;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="box">Элемент 1</div>
    <div class="box">Элемент 2</div>
    <div class="box">Элемент 3</div>
    <div class="box">Элемент 4</div>
    <div class="box">Элемент 5</div>
    <div class="box">Элемент 6</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  /* Контейнер с Flexbox */
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    /* Элементы внутри контейнера */
    .box {
      width: 300px;
      height: 100px;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_task_5 = {
  id: "css_flexbox_task_5",
  module: "CSS",
  title: "Управление порядком отображения элементов",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_3",
  description:
    "Создайте HTML-документ с контейнером, внутри которого расположены элементы. Измените порядок отображения элементов с помощью свойства `order`.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте четыре блока `<div class='box'>` с текстом: 'Первый', 'Второй', 'Третий', 'Четвёртый'.",
    "Используйте Flexbox для расположения блоков в одну линию.",
    "Примените свойство `order` к элементам: второму элементу — значение `3`, третьему элементу — значение `1`, четвёртому элементу — значение `2`.",
    "Проверьте, что элементы отображаются в новом порядке без изменения HTML.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Порядок Flexbox</title>
</head>
<body>

  <div class="container">
    <div class="box first">Первый</div>
    <div class="box second">Второй</div>
    <div class="box third">Третий</div>
    <div class="box fourth">Четвёртый</div>
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
  <title>Порядок Flexbox</title>
  <style>
    .container {
      display: flex;
      gap: 10px;
    }

    .box {
      width: 300px;
      height: 100px;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .second {
      order: 3;
    }

    .third {
      order: 1;
    }

    .fourth {
      order: 2;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="box first">Первый</div>
    <div class="box second">Второй</div>
    <div class="box third">Третий</div>
    <div class="box fourth">Четвёртый</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  /* Контейнер с Flexbox */
    .container {
      display: flex;
      gap: 10px;
    }

    /* Элементы внутри контейнера */
    .box {
      width: 300px;
      height: 100px;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    /* Порядок отображения */
    .second {
      order: 3;
    }

    .third {
      order: 1;
    }

    .fourth {
      order: 2;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/order",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_task_6 = {
  id: "css_flexbox_task_6",
  module: "CSS",
  title: "Обёртка и порядок элементов в Flexbox",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_3",
  description:
    "Создайте HTML-документ с контейнером, внутри которого расположены элементы. Реализуйте обёртку элементов при уменьшении ширины окна и измените их порядок с помощью свойства `order`.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте восемь блоков `<div class='box'>`, пронумерованных от 1 до 8.",
    "Используйте Flexbox для расположения блоков в одну линию с возможностью обёртки при уменьшении ширины окна (`flex-wrap`).",
    "Примените свойство `order` к элементам, чтобы порядок изменялся на: 3 → 6 → 1 → 7 → 2 → 8 → 4 → 5.",
    "Проверьте, что при уменьшении ширины окна элементы переходят на следующую строку, сохраняя заданный порядок.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Обёртка и порядок Flexbox</title>
</head>
<body>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
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
  <title>Обёртка и порядок Flexbox</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .box {
      width: 300px;
      height: 300px;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    .box:nth-child(1) {
      order: 3;
    }

    .box:nth-child(2) {
      order: 6;
    }

    .box:nth-child(3) {
      order: 1;
    }

    .box:nth-child(4) {
      order: 7;
    }

    .box:nth-child(5) {
      order: 2;
    }

    .box:nth-child(6) {
      order: 8;
    }

    .box:nth-child(7) {
      order: 4;
    }

    .box:nth-child(8) {
      order: 5;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Контейнер с Flexbox */
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    /* Элементы внутри контейнера */
    .box {
      width: 300px;
      height: 300px;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    /* Порядок отображения элементов */
    .box:nth-child(1) {
      order: 3;
    }

    .box:nth-child(2) {
      order: 6;
    }

    .box:nth-child(3) {
      order: 1;
    }

    .box:nth-child(4) {
      order: 7;
    }

    .box:nth-child(5) {
      order: 2;
    }

    .box:nth-child(6) {
      order: 8;
    }

    .box:nth-child(7) {
      order: 4;
    }

    .box:nth-child(8) {
      order: 5;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/order",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_task_7 = {
  id: "css_flexbox_task_7",
  module: "CSS",
  title: "Основы размеров в Flexbox",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_4",
  description:
    "Создайте HTML-документ с контейнером, внутри которого расположены элементы разной ширины. Реализуйте поведение, при котором элементы автоматически изменяют свои размеры при изменении ширины окна браузера.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте три блока `<div class='box'>`, пронумерованных от 1 до 3.",
    "Примените к элементам Flexbox-свойства `flex-grow` и `flex-shrink`, чтобы они изменяли свои размеры при изменении окна браузера.",
    "Первому блоку задайте `flex-grow: 1`, второму — `flex-grow: 2`, третьему — `flex-grow: 1`.",
    "Проверьте, что при изменении ширины окна браузера элементы пропорционально меняют размеры.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Основы размеров в Flexbox</title>
</head>
<body>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
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
  <title>Основы размеров в Flexbox</title>
  <style>
    .container {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .box {
      background-color: #4CAF50;
      color: white;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    .box:nth-child(1) {
      flex-grow: 1;
    }

    .box:nth-child(2) {
      flex-grow: 2;
    }

    .box:nth-child(3) {
      flex-grow: 1;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Контейнер с Flexbox */
    .container {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    /* Элементы внутри контейнера */
    .box {
      background-color: #4CAF50;
      color: white;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    /* Задаём размеры через flex-grow */
    .box:nth-child(1) {
      flex-grow: 1;
    }

    .box:nth-child(2) {
      flex-grow: 2;
    }

    .box:nth-child(3) {
      flex-grow: 1;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://html5book.ru/css3-flexbox/",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_task_8 = {
  id: "css_flexbox_task_8",
  module: "CSS",
  title: "Управление размерами с flex-basis и flex-shrink",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_4",
  description:
    "Создайте HTML-документ с контейнером, внутри которого расположены блоки с фиксированными начальными размерами. Реализуйте поведение, при котором блоки сжимают свою ширину при недостатке места и расширяются при увеличении окна.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте четыре блока `<div class='box'>`, пронумерованных от 1 до 4.",
    "Каждому блоку задайте начальную ширину с помощью `flex-basis`: 200px, 150px, 250px и 100px.",
    "Примените свойство `flex-shrink`, чтобы блоки могли сжиматься при уменьшении ширины окна.",
    "Проверьте, как блоки изменяют свои размеры при изменении ширины окна браузера.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Flexbox: flex-basis и flex-shrink</title>
</head>
<body>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
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
  <title>Flexbox: flex-basis и flex-shrink</title>
  <style>
    .container {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .box {
      background-color: #4CAF50;
      color: white;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      flex-shrink: 1;
    }

    .box:nth-child(1) {
      flex-basis: 200px;
    }

    .box:nth-child(2) {
      flex-basis: 150px;
    }

    .box:nth-child(3) {
      flex-basis: 250px;
    }

    .box:nth-child(4) {
      flex-basis: 100px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Контейнер Flexbox с изменяемыми размерами */
.container {
  display: flex;
  width: 100%;
  gap: 10px;
}

/* Элементы Flexbox */
.box {
  background-color: #4CAF50;
  color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 5px;
  flex-shrink: 1;
}

/* Задаём размеры через flex-basis */
.box:nth-child(1) {
  flex-basis: 200px;
}

.box:nth-child(2) {
  flex-basis: 150px;
}

.box:nth-child(3) {
  flex-basis: 250px;
}

.box:nth-child(4) {
  flex-basis: 100px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_task_9 = {
  id: "css_flexbox_task_9",
  module: "CSS",
  title: "Гибкая сетка с фиксированными и гибкими колонками",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_4",
  description:
    "Создайте HTML-документ с гибкой сеткой из четырёх колонок. Центральные колонки должны занимать больше места, чем боковые. Боковые — фиксированной ширины, а центральные — гибкие.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте четыре блока `<div class='column'>`, каждый из которых будет представлять колонку.",
    "Для боковых колонок (`left`, `right`) задайте фиксированную ширину `150px`.",
    "Для центральных колонок (`center-left`, `center-right`) используйте свойства `flex-grow` и `flex-basis`, чтобы они занимали больше пространства.",
    "Проверьте, как блоки изменяют свои размеры при изменении ширины окна браузера.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Гибкая сетка с фиксированными и гибкими колонками</title>
</head>
<body>

  <div class="container">
    <div class="column left">Левая колонка</div>
    <div class="column center-left">Центр левая</div>
    <div class="column center-right">Центр правая</div>
    <div class="column right">Правая колонка</div>
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
  <title>Гибкая сетка с фиксированными и гибкими колонками</title>
  <style>
    .container {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .column.left,
    .column.right {
      background-color: #d1ecf1;
      color: #333;
      height: 150px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .column.center-left,
    .column.center-right {
      background-color: #b8daff;
      color: #333;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      flex-basis: 200px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="column left">Левая колонка</div>
    <div class="column center-left">Центр левая</div>
    <div class="column center-right">Центр правая</div>
    <div class="column right">Правая колонка</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Контейнер Flexbox */
    .container {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    /* Левая и правая фиксированные колонки */
    .column.left,
    .column.right {
      background-color: #d1ecf1;
      color: #333;
      height: 150px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Центральные колонки, которые растут */
    .column.center-left,
    .column.center-right {
      background-color: #b8daff;
      color: #333;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      flex-basis: 200px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_task_10 = {
  id: "css_flexbox_task_10",
  module: "CSS",
  title: "Сравнение Flexbox с Float",
  topic: "Сравнение Flexbox с float и inline-block",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_5",
  description:
    "Создайте HTML-документ с двумя колонками, одна из которых плавает слева, а другая — справа. Затем реализуйте то же самое с помощью Flexbox.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте два блока `<div class='column'>`: один для левой колонки, другой для правой.",
    "Используйте свойство `float` для реализации двух колонок: левая должна быть слева, правая — справа.",
    "Для сравнения, ниже создайте ещё один контейнер, но уже с Flexbox, чтобы увидеть разницу в коде и отображении.",
    "Проверьте, что оба варианта работают корректно и занимают нужные позиции.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Сравнение Flexbox с Float</title>
</head>
<body>

  <h2>Реализация через Float</h2>
  <div class="container-float">
    <div class="column left">Левая колонка</div>
    <div class="column right">Правая колонка</div>
  </div>

  <h2>Реализация через Flexbox</h2>
  <div class="container-flex">
    <div class="column">Левая колонка</div>
    <div class="column">Правая колонка</div>
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
  <title>Сравнение Flexbox с Float</title>
  <style>
    .container-float {
      width: 100%;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .container-float .column {
      width: 45%;
      height: 150px;
      background-color: #d1ecf1;
      color: #333;
    }

    .container-float .left {
      float: left;
    }

    .container-float .right {
      float: right;
    }

    .container-flex {
      display: flex;
      justify-content: space-between;
    }

    .container-flex .column {
      width: 45%;
      height: 150px;
      background-color: #b8daff;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>

  <h2>Реализация через Float</h2>
  <div class="container-float">
    <div class="column left">Левая колонка</div>
    <div class="column right">Правая колонка</div>
  </div>

  <h2>Реализация через Flexbox</h2>
  <div class="container-flex">
    <div class="column">Левая колонка</div>
    <div class="column">Правая колонка</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Реализация через float */
    .container-float {
      width: 100%;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .container-float .column {
      width: 45%;
      height: 150px;
      background-color: #d1ecf1;
      color: #333;
    }

    .container-float .left {
      float: left;
    }

    .container-float .right {
      float: right;
    }

    /* Реализация через Flexbox */
    .container-flex {
      display: flex;
      justify-content: space-between;
    }

    .container-flex .column {
      width: 45%;
      height: 150px;
      background-color: #b8daff;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_task_11 = {
  id: "css_flexbox_task_11",
  module: "CSS",
  title: "Сравнение Flexbox с Inline-block",
  topic: "Сравнение Flexbox с float и inline-block",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_5",
  description:
    "Создайте HTML-документ с тремя колонками, реализованными двумя способами: через `inline-block` и с использованием Flexbox.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='container'>`.",
    "Внутри контейнера создайте три блока `<div class='column'>`: один для левой колонки, другой для центральной и третий для правой.",
    "Первую реализацию выполните с использованием `inline-block`. Убедитесь, что они выстраиваются в ряд.",
    "Добавьте отступы между колонками, сохраняя их в одной строке.",
    "Для сравнения создайте ещё один контейнер с Flexbox и такими же колонками.",
    "Проверьте, что оба варианта работают корректно и занимают нужные позиции.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Сравнение Flexbox с Inline-block</title>
</head>
<body>

  <h2>Реализация через Inline-block</h2>
  <div class="container-inline-block">
    <div class="column">Левая колонка</div>
    <div class="column">Центральная колонка</div>
    <div class="column">Правая колонка</div>
  </div>

  <h2>Реализация через Flexbox</h2>
  <div class="container-flex">
    <div class="column">Левая колонка</div>
    <div class="column">Центральная колонка</div>
    <div class="column">Правая колонка</div>
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
  <title>Сравнение Flexbox с Inline-block</title>
  <style>
    .container-inline-block {
      font-size: 0; /* Убираем пробелы между inline-block */
    }

    .container-inline-block .column {
      display: inline-block;
      width: 32%;
      background-color: #d1ecf1;
      color: #333;
      font-size: 16px;
      text-align: center;
      vertical-align: top;
      margin-right: 1%;
    }

    .container-inline-block .column:last-child {
      margin-right: 0;
    }

    .container-flex {
      display: flex;
      justify-content: space-between;
    }

    .container-flex .column {
      width: 32%;
      height: 150px;
      background-color: #b8daff;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>

  <h2>Реализация через Inline-block</h2>
  <div class="container-inline-block">
    <div class="column">Левая колонка</div>
    <div class="column">Центральная колонка</div>
    <div class="column">Правая колонка</div>
  </div>

  <h2>Реализация через Flexbox</h2>
  <div class="container-flex">
    <div class="column">Левая колонка</div>
    <div class="column">Центральная колонка</div>
    <div class="column">Правая колонка</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Реализация через inline-block */
    .container-inline-block {
      font-size: 0; /* Убираем пробелы между inline-block */
    }

    .container-inline-block .column {
      display: inline-block;
      width: 32%;
      background-color: #d1ecf1;
      color: #333;
      font-size: 16px;
      text-align: center;
      vertical-align: top;
      margin-right: 1%;
    }

    .container-inline-block .column:last-child {
      margin-right: 0;
    }

    /* Реализация через Flexbox */
    .container-flex {
      display: flex;
      justify-content: space-between;
    }

    .container-flex .column {
      width: 32%;
      height: 150px;
      background-color: #b8daff;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/inline-block",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_task_12 = {
  id: "css_flexbox_task_12",
  module: "CSS",
  title: "Задача с Flexbox ",
  topic: "Закрепление Flexbox",
  topicId: "css_flexbox",
  sectionId: "css_flexbox_task_6",
  description:
    "Создайте сложную структуру страницы с использованием Flexbox, включающую шапку, навигацию, основной контент с сайдбаром, и подвал. Примените все изученные свойства Flexbox: оси, обёртка, порядок, размеры элементов.",
  steps: [
    "Создайте HTML-документ с основной структурой страницы: шапка (header), навигация (nav), основной контент (main), сайдбар (aside) и подвал (footer).",
    "Используйте Flexbox для построения макета. Шапка и подвал должны быть на всю ширину экрана.",
    "Основной контент и сайдбар должны быть расположены в одной строке с использованием Flexbox.",
    "Реализуйте обёртку элементов с помощью `flex-wrap` в случае, если ширина экрана уменьшается.",
    "Используйте `order`, чтобы менять порядок сайдбара и основного контента на мобильных устройствах.",
    "Настройте размеры элементов с помощью `flex-grow`, `flex-shrink`, `flex-basis` для гибкой адаптации.",
    "Проверьте, что при изменении ширины окна все элементы адаптируются правильно.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Flexbox Полная Страница</title>
</head>
<body>

  <header>
    <h1>Мой сайт на Flexbox</h1>
  </header>

  <nav>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакты</a>
  </nav>

  <div class="content-wrapper">
    <main>
      <h2>Основной контент</h2>
      <p>Здесь находится основной текст страницы. Flexbox позволяет легко и удобно распределять элементы по горизонтали и вертикали.</p>
      <p>При уменьшении ширины экрана элементы будут адаптироваться.</p>
    </main>

    <aside>
      <h2>Сайдбар</h2>
      <p>Сайдбар отображается справа на больших экранах и наверху на мобильных.</p>
    </aside>
  </div>

  <footer>
    <p>Все права защищены © 2025</p>
  </footer>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Полная Страница</title>
  <style>
    /* Основные стили */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    header {
      background-color: #4CAF50;
      color: white;
      text-align: center;
      padding: 15px;
      flex-shrink: 0;
    }

    nav {
      display: flex;
      justify-content: space-around;
      background-color: #333;
      color: white;
      padding: 10px 0;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
    }

    .content-wrapper {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
    }

    main {
      flex: 1;
      background-color: #f1f1f1;
      padding: 15px;
    }

    aside {
      flex: 0 0 300px;
      background-color: #ccc;
      padding: 15px;
      order: 1;
    }

    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
      flex-shrink: 0;
    }
  </style>
</head>
<body>
  <header>
    <h1>Мой сайт на Flexbox</h1>
  </header>
  <nav>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакты</a>
  </nav>
  <div class="content-wrapper">
    <main>
      <h2>Основной контент</h2>
      <p>Здесь находится основной текст страницы. Flexbox позволяет легко и удобно распределять элементы по горизонтали и вертикали.</p>
    </main>
    <aside>
      <h2>Сайдбар</h2>
      <p>Сайдбар отображается справа на больших экранах и наверху на мобильных.</p>
    </aside>
  </div>
  <footer>
    <p>Все права защищены © 2025</p>
  </footer>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Основные стили */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    /* Шапка */
    header {
      background-color: #4CAF50;
      color: white;
      text-align: center;
      padding: 15px;
      flex-shrink: 0;
    }

    /* Навигация */
    nav {
      display: flex;
      justify-content: space-around;
      background-color: #333;
      color: white;
      padding: 10px 0;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
    }

    /* Основной контент и сайдбар */
    .content-wrapper {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
    }

    main {
      flex: 1;
      background-color: #f1f1f1;
      padding: 15px;
    }

    aside {
      flex: 0 0 300px;
      background-color: #ccc;
      padding: 15px;
      order: 1;
    }

    /* Футер */
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
      flex-shrink: 0;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://html5book.ru/css-flexbox/",
  ],
};
