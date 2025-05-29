// Оси и направление: flex-direction, justify-content, align-items
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
export const flex_task_1 = {
  id: "flex_task_1",
  module: "CSS",
  title: "Основные направления осей (flex-direction)",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flex",
  description:
    "Создайте HTML-документ с контейнером Flex, в котором элементы располагаются горизонтально и вертикально.",
  steps: [
    "Создайте контейнер `<div>` с несколькими элементами внутри",
    "Настройте направление оси (`flex-direction`) на горизонтальное (`row`)",
    "Создайте второй контейнер с вертикальным направлением (`column`)",
    "Проверьте, как элементы располагаются в зависимости от направления",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Основные направления осей (flex-direction)</title>
</head>
<body>

  <h2>Горизонтальное направление (row):</h2>
  <div class="flex-row">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>Вертикальное направление (column):</h2>
  <div class="flex-column">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
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
  <title>Основные направления осей (flex-direction)</title>
  <style>
    .flex-row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-bottom: 20px;
    }

    .flex-column {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
    }
  </style>
</head>
<body>

  <h2>Горизонтальное направление (row):</h2>
  <div class="flex-row">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>Вертикальное направление (column):</h2>
  <div class="flex-column">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Горизонтальное направление элементов */
.flex-row {
  display: flex;
  flex-direction: row; /* Элементы располагаются в строку */
  gap: 10px;           /* Отступы между элементами */
  margin-bottom: 20px;
}

/* Вертикальное направление элементов */
.flex-column {
  display: flex;
  flex-direction: column; /* Элементы располагаются в колонку */
  gap: 10px;              /* Отступы между элементами */
}

/* Базовый стиль элементов */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_2 = {
  id: "flex_task_2",
  module: "CSS",
  title: "Выравнивание элементов по главной оси (justify-content)",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flex",
  description:
    "Создайте HTML-документ с контейнером Flex, в котором элементы выровнены по главной оси с разными значениями свойства `justify-content`.",
  steps: [
    "Создайте контейнер `<div>` с несколькими элементами внутри",
    "Настройте выравнивание элементов по главной оси (`justify-content`)",
    "Реализуйте 5 вариантов выравнивания: flex-start, center, flex-end, space-between, space-around",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Выравнивание по главной оси (justify-content)</title>
</head>
<body>

  <h2>flex-start (по левому краю):</h2>
  <div class="flex-container justify-start">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>center (по центру):</h2>
  <div class="flex-container justify-center">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>flex-end (по правому краю):</h2>
  <div class="flex-container justify-end">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>space-between (равномерно, по краям):</h2>
  <div class="flex-container justify-between">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>space-around (равномерно, с отступами):</h2>
  <div class="flex-container justify-around">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
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
  <title>Выравнивание по главной оси (justify-content)</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #ccc;
    }

    .justify-start {
      justify-content: flex-start;
    }

    .justify-center {
      justify-content: center;
    }

    .justify-end {
      justify-content: flex-end;
    }

    .justify-between {
      justify-content: space-between;
    }

    .justify-around {
      justify-content: space-around;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
    }
  </style>
</head>
<body>

  <h2>flex-start (по левому краю):</h2>
  <div class="flex-container justify-start">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>center (по центру):</h2>
  <div class="flex-container justify-center">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>flex-end (по правому краю):</h2>
  <div class="flex-container justify-end">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>space-between (равномерно, по краям):</h2>
  <div class="flex-container justify-between">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>space-around (равномерно, с отступами):</h2>
  <div class="flex-container justify-around">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Общий стиль для Flex-контейнера */
.flex-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ccc;
}

/* Варианты выравнивания по главной оси */
.justify-start {
  justify-content: flex-start; /* Выравнивание по левому краю */
}

.justify-center {
  justify-content: center; /* Центрирование */
}

.justify-end {
  justify-content: flex-end; /* Выравнивание по правому краю */
}

.justify-between {
  justify-content: space-between; /* Равномерное распределение по краям */
}

.justify-around {
  justify-content: space-around; /* Равномерное распределение с отступами */
}

/* Стили для элементов */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_3 = {
  id: "flex_task_3",
  module: "CSS",
  title: "Выравнивание по поперечной оси (align-items)",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flex",
  description:
    "Создайте HTML-документ с контейнером Flex, в котором элементы выровнены по вертикальной оси с разными значениями свойства `align-items`.",
  steps: [
    "Создайте контейнер `<div>` с несколькими элементами внутри",
    "Настройте выравнивание элементов по поперечной оси (`align-items`)",
    "Реализуйте 5 вариантов выравнивания: flex-start, center, flex-end, stretch, baseline",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Выравнивание по поперечной оси (align-items)</title>
</head>
<body>

  <h2>flex-start (по верхнему краю):</h2>
  <div class="flex-container align-start">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>center (по центру):</h2>
  <div class="flex-container align-center">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>flex-end (по нижнему краю):</h2>
  <div class="flex-container align-end">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>stretch (растягивание на всю высоту):</h2>
  <div class="flex-container align-stretch">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>baseline (по базовой линии текста):</h2>
  <div class="flex-container align-baseline">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item large">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
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
  <title>Выравнивание по поперечной оси (align-items)</title>
  <style>
    /* Общий стиль для контейнеров */
    .flex-container {
      display: flex;
      gap: 10px;
      height: 150px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 20px;
    }

    /* Варианты выравнивания по поперечной оси */
    .align-start {
      align-items: flex-start;
    }

    .align-center {
      align-items: center;
    }

    .align-end {
      align-items: flex-end;
    }

    .align-stretch {
      align-items: stretch;
    }

    .align-baseline {
      align-items: baseline;
    }

    /* Базовый стиль для элементов */
    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
    }

    /* Дополнительный стиль для baseline */
    .flex-item.large {
      font-size: 24px;
    }
  </style>
</head>
<body>
<h2>flex-start (по верхнему краю):</h2>
<div class="flex-container align-start">
  <div class="flex-item">Элемент 1</div>
  <div class="flex-item">Элемент 2</div>
  <div class="flex-item">Элемент 3</div>
</div>

<h2>center (по центру):</h2>
<div class="flex-container align-center">
  <div class="flex-item">Элемент 1</div>
  <div class="flex-item">Элемент 2</div>
  <div class="flex-item">Элемент 3</div>
</div>

<h2>flex-end (по нижнему краю):</h2>
<div class="flex-container align-end">
  <div class="flex-item">Элемент 1</div>
  <div class="flex-item">Элемент 2</div>
  <div class="flex-item">Элемент 3</div>
</div>

<h2>stretch (растягивание на всю высоту):</h2>
<div class="flex-container align-stretch">
  <div class="flex-item">Элемент 1</div>
  <div class="flex-item">Элемент 2</div>
  <div class="flex-item">Элемент 3</div>
</div>

<h2>baseline (по базовой линии текста):</h2>
<div class="flex-container align-baseline">
  <div class="flex-item">Элемент 1</div>
  <div class="flex-item large">Элемент 2</div>
  <div class="flex-item">Элемент 3</div>
</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Общий стиль для Flex-контейнера */
    .flex-container {
      display: flex;
      gap: 10px;
      height: 150px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 20px;
    }

    /* Варианты выравнивания по поперечной оси */
    .align-start {
      align-items: flex-start;
    }

    .align-center {
      align-items: center;
    }

    .align-end {
      align-items: flex-end;
    }

    .align-stretch {
      align-items: stretch;
    }

    .align-baseline {
      align-items: baseline;
    }

    /* Базовый стиль для элементов */
    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
    }

    /* Дополнительный стиль для baseline */
    .flex-item.large {
      font-size: 24px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/align-items",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_4 = {
  id: "flex_task_4",
  module: "CSS",
  title: "Перенос элементов в несколько строк (flex-wrap)",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flex",
  description:
    "Создайте HTML-документ с контейнером Flex, в котором элементы переносятся на новую строку, если не умещаются в одну.",
  steps: [
    "Создайте контейнер `<div>` с несколькими элементами внутри",
    "Настройте перенос элементов с помощью свойства `flex-wrap`",
    "Реализуйте 3 варианта: nowrap, wrap, wrap-reverse",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Перенос элементов (flex-wrap)</title>
</head>
<body>

  <h2>nowrap (в одну строку, без переноса):</h2>
  <div class="flex-container nowrap">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
  </div>

  <h2>wrap (перенос на следующую строку):</h2>
  <div class="flex-container wrap">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
  </div>

  <h2>wrap-reverse (перенос в обратном порядке):</h2>
  <div class="flex-container wrap-reverse">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
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
  <title>Перенос элементов (flex-wrap)</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 20px;
      width: 100%;
      box-sizing: border-box;
    }

    .nowrap {
      flex-wrap: nowrap;
    }

    .wrap {
      flex-wrap: wrap;
    }

    .wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      width: 150px;
      text-align: center;
      flex-grow: 1;
    }
  </style>
</head>
<body>

  <h2>nowrap (в одну строку, без переноса):</h2>
  <div class="flex-container nowrap">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
  </div>

  <h2>wrap (перенос на следующую строку):</h2>
  <div class="flex-container wrap">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
  </div>

  <h2>wrap-reverse (перенос в обратном порядке):</h2>
  <div class="flex-container wrap-reverse">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Общий стиль для Flex-контейнера */
.flex-container {
  display: flex;
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box; /* Учитываем отступы в ширине */
}

/* Варианты переноса строк */
.nowrap {
  flex-wrap: nowrap; /* Без переноса */
}

.wrap {
  flex-wrap: wrap; /* Перенос на новую строку */
}

.wrap-reverse {
  flex-wrap: wrap-reverse; /* Перенос в обратном порядке */
}

/* Стили для элементов */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  width: 150px;
  text-align: center;
  flex-grow: 1;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_5 = {
  id: "flex_task_5",
  module: "CSS",
  title:
    "Управление размерами элементов с мини-задачами (flex-grow, flex-shrink, flex-basis)",
  topic: "Оси и направление: flex-direction, justify-content, align-items",
  topicId: "css_flex",
  description:
    "Создайте HTML-документ с контейнером Flex, в котором элементы изменяют свои размеры в зависимости от доступного пространства. Реализуйте подзадачи на flex-grow, flex-shrink, flex-basis.",
  steps: [
    "Создайте контейнер `<div>` с несколькими элементами внутри",
    "Настройте увеличение элементов при наличии пространства (`flex-grow`)",
    "Настройте сжатие элементов при нехватке пространства (`flex-shrink`)",
    "Настройте фиксированную базовую ширину элементов (`flex-basis`)",
    "Комбинируйте все три свойства в одном макете",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Управление размерами элементов (flex-grow, flex-shrink, flex-basis)</title>
</head>
<body>

  <h2>1 Увеличение элементов (flex-grow):</h2>
  <div class="flex-container">
    <div class="flex-item flex-grow">Элемент 1 (grow: 1)</div>
    <div class="flex-item flex-grow-2">Элемент 2 (grow: 2)</div>
    <div class="flex-item flex-grow">Элемент 3 (grow: 1)</div>
  </div>

  <h2>2 Сжатие элементов (flex-shrink):</h2>
  <div class="flex-container">
    <div class="flex-item flex-shrink">Элемент 1 (shrink: 2)</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>3 Фиксированная ширина элементов (flex-basis):</h2>
  <div class="flex-container">
    <div class="flex-item flex-basis">Элемент 1 (basis: 150px)</div>
    <div class="flex-item flex-basis">Элемент 2 (basis: 150px)</div>
    <div class="flex-item flex-basis">Элемент 3 (basis: 150px)</div>
  </div>

  <h2>4 Комбинация всех свойств:</h2>
  <div class="flex-container">
    <div class="flex-item flex-mixed">Элемент 1 (grow + shrink + basis)</div>
    <div class="flex-item flex-grow">Элемент 2 (grow)</div>
    <div class="flex-item flex-shrink">Элемент 3 (shrink)</div>
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
  <title>Управление размерами элементов (flex-grow, flex-shrink, flex-basis)</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 20px;
      width: 100%;
      box-sizing: border-box;
    }
    .flex-grow {
      flex-grow: 1;
    }
    .flex-grow-2 {
      flex-grow: 2;
    }
    .flex-shrink {
      flex-shrink: 2;
    }
    .flex-basis {
      flex-basis: 150px;
    }
    .flex-mixed {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 200px;
    }
    .flex-item {
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
    }
  </style>
</head>
<body>

  <h2>1 Увеличение элементов (flex-grow):</h2>
  <div class="flex-container">
    <div class="flex-item flex-grow">Элемент 1 (grow: 1)</div>
    <div class="flex-item flex-grow-2">Элемент 2 (grow: 2)</div>
    <div class="flex-item flex-grow">Элемент 3 (grow: 1)</div>
  </div>

  <h2>2 Сжатие элементов (flex-shrink):</h2>
  <div class="flex-container">
    <div class="flex-item flex-shrink">Элемент 1 (shrink: 2)</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>3 Фиксированная ширина элементов (flex-basis):</h2>
  <div class="flex-container">
    <div class="flex-item flex-basis">Элемент 1 (basis: 150px)</div>
    <div class="flex-item flex-basis">Элемент 2 (basis: 150px)</div>
    <div class="flex-item flex-basis">Элемент 3 (basis: 150px)</div>
  </div>

  <h2>4 Комбинация всех свойств:</h2>
  <div class="flex-container">
    <div class="flex-item flex-mixed">Элемент 1 (grow + shrink + basis)</div>
    <div class="flex-item flex-grow">Элемент 2 (grow)</div>
    <div class="flex-item flex-shrink">Элемент 3 (shrink)</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Общий стиль для Flex-контейнера */
   .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 20px;
      width: 100%;
      box-sizing: border-box;
    }
    .flex-grow {
      flex-grow: 1;
    }
    .flex-grow-2 {
      flex-grow: 2;
    }
    .flex-shrink {
      flex-shrink: 2;
    }
    .flex-basis {
      flex-basis: 150px;
    }
    .flex-mixed {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 200px;
    }
    .flex-item {
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis",
  ],
};

// Обёртка и порядок: flex-wrap, order
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

export const flex_task_6 = {
  id: "flex_task_6",
  module: "CSS",
  title: "Основы flex-wrap",
  topic: "Обёртка и порядок: flex-wrap, order",
  sectionId: "css_flexbox_task_3",

  description:
    "Создайте Flex-контейнер, в котором элементы переносятся на новую строку при недостатке места.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Настройте `flex-wrap` на значение `wrap`",
    "Проверьте, как элементы переносятся при изменении ширины контейнера",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Основы flex-wrap</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
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
  <title>Основы flex-wrap</title>
  <style>
    .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      width: 250px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Основной Flex-контейнер */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* Стили для элементов */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  width: 250px;
  text-align: center;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_7 = {
  id: "flex_task_7",
  module: "CSS",
  title: "Обратный перенос элементов (wrap-reverse)",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flex",
  sectionId: "css_flex2",
  description:
    "Создайте Flex-контейнер, в котором элементы переносятся на новую строку в обратном порядке с использованием wrap-reverse.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Настройте перенос элементов с помощью свойства `flex-wrap: wrap-reverse`",

    "Проверьте, как элементы располагаются снизу вверх при переносе",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Обратный перенос элементов (wrap-reverse)</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
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
  <title>Обратный перенос элементов (wrap-reverse)</title>
  <style>
    .flex-container {
      display: flex;
      flex-wrap: wrap-reverse;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      min-height: 200px;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      width: 150px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
    <div class="flex-item">Элемент 6</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse; /* Обратный перенос */
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  min-height: 200px;
}

/* Элементы внутри Flex */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  width: 150px;
  text-align: center;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_8 = {
  id: "flex_task_8",
  module: "CSS",
  title: "Управление порядком элементов (order)",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flex",
  sectionId: "css_flex3",
  description:
    "Создайте Flex-контейнер, в котором порядок отображения элементов управляется с помощью свойства `order`.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Настройте порядок отображения с использованием свойства `order`",
    "Измените значения order для изменения порядка элементов",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Управление порядком элементов (order)</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item first">Элемент 1 (order: 2)</div>
    <div class="flex-item second">Элемент 2 (order: 1)</div>
    <div class="flex-item third">Элемент 3 (order: 3)</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
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
  <title>Управление порядком элементов (order)</title>
  <style>
    .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      width: 250px;
      text-align: center;
    }

    .first {
      order: 2;
    }

    .second {
      order: 1;
    }

    .third {
      order: 3;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item first">Элемент 1 (order: 2)</div>
    <div class="flex-item second">Элемент 2 (order: 1)</div>
    <div class="flex-item third">Элемент 3 (order: 3)</div>
    <div class="flex-item">Элемент 4</div>
    <div class="flex-item">Элемент 5</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* Стили для элементов */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  width: 250px;
  text-align: center;
}

/* Управление порядком */
.first {
  order: 2; /* Этот элемент перемещён на второе место */
}

.second {
  order: 1; /* Этот элемент перемещён на первое место */
}

.third {
  order: 3; /* Этот элемент перемещён на третье место */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/order",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_9 = {
  id: "flex_task_9",
  module: "CSS",
  title: "Смешанный контейнер с wrap и order",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flex",
  sectionId: "css_flex4",
  description:
    "Создайте Flex-контейнер с обёрткой элементов (`wrap`) и управлением порядком отображения с использованием `order`. Реализуйте разделение на основные и второстепенные элементы.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Настройте перенос элементов на следующую строку с помощью свойства `flex-wrap: wrap`",
    "Используйте `order`, чтобы основные элементы шли первыми",
    "Стилизуйте основные и второстепенные элементы по-разному",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Смешанный контейнер с wrap и order</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item main-item">Основной 1</div>
    <div class="flex-item secondary-item">Второстепенный 1</div>
    <div class="flex-item main-item">Основной 2</div>
    <div class="flex-item secondary-item">Второстепенный 2</div>
    <div class="flex-item main-item">Основной 3</div>
    <div class="flex-item secondary-item">Второстепенный 3</div>
    <div class="flex-item main-item">Основной 4</div>
    <div class="flex-item secondary-item">Второстепенный 4</div>
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
  <title>Смешанный контейнер с wrap и order</title>
  <style>
    .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-item {
      padding: 10px;
      border: 1px solid #007acc;
      width: 200px;
      text-align: center;
    }

    .main-item {
      background-color: #c8e6c9;
      order: 1;
    }

    .secondary-item {
      background-color: #ffccbc;
      order: 2;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item main-item">Основной 1</div>
    <div class="flex-item secondary-item">Второстепенный 1</div>
    <div class="flex-item main-item">Основной 2</div>
    <div class="flex-item secondary-item">Второстепенный 2</div>
    <div class="flex-item main-item">Основной 3</div>
    <div class="flex-item secondary-item">Второстепенный 3</div>
    <div class="flex-item main-item">Основной 4</div>
    <div class="flex-item secondary-item">Второстепенный 4</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
.flex-container {
  display: flex;
  flex-wrap: wrap; /* Перенос элементов */
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* Стили для элементов */
.flex-item {
  padding: 10px;
  border: 1px solid #007acc;
  width: 200px;
  text-align: center;
}

/* Основные элементы */
.main-item {
  background-color: #c8e6c9;
  order: 1; /* Основные элементы идут первыми */
}

/* Второстепенные элементы */
.secondary-item {
  background-color: #ffccbc;
  order: 2; /* Второстепенные элементы идут после */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://developer.mozilla.org/ru/docs/Web/CSS/order",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_10 = {
  id: "flex_task_10",
  module: "CSS",
  title: "Сложное управление порядком с обертками и избранным",
  topic: "Обёртка и порядок: flex-wrap, order",
  topicId: "css_flex",
  sectionId: "css_flex5",
  description:
    "Создайте Flex-контейнер с вложенными обертками, изменением порядка элементов и двумя отдельными группами: Основной список и Список избранного.",
  steps: [
    "Создайте два Flex-контейнера: Основной список и Список избранного",
    "Настройте несколько классов с разными значениями `order` для изменения порядка элементов",
    "Добавьте обертки внутри Flex-контейнера с разными цветами",
    "Реализуйте отображение 'Избранных' элементов в отдельном контейнере",
    "Поменяйте порядок элементов с помощью классов, чтобы имитировать 'перетаскивание'",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сложное управление порядком с избранным</title>
</head>
<body>

  <h2>Основной список:</h2>
  <div class="flex-container">
    <div class="sub-container">
      <div class="flex-item order-3">Элемент 3 (order: 3)</div>
      <div class="flex-item order-1">Элемент 1 (order: 1)</div>
      <div class="flex-item order-5">Элемент 5 (order: 5)</div>
      <div class="flex-item order-2">Элемент 2 (order: 2)</div>
      <div class="flex-item order-4">Элемент 4 (order: 4)</div>
    </div>

    <div class="sub-container">
      <div class="flex-item order-2">Элемент 6 (order: 2)</div>
      <div class="flex-item order-4">Элемент 8 (order: 4)</div>
      <div class="flex-item order-3">Элемент 7 (order: 3)</div>
      <div class="flex-item order-1">Элемент 9 (order: 1)</div>
      <div class="flex-item order-5">Элемент 10 (order: 5)</div>
    </div>
  </div>

  <h2>Избранные элементы:</h2>
  <div class="flex-container">
    <div class="sub-container">
      <div class="flex-item favorite-item order-1">Избранное 1 (order: 1)</div>
      <div class="flex-item favorite-item order-2">Избранное 2 (order: 2)</div>
      <div class="flex-item favorite-item order-3">Избранное 3 (order: 3)</div>
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
  <title>Сложное управление порядком с избранным</title>
  <style>
    /* Основной Flex-контейнер */
    .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Вложенный контейнер */
    .sub-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      background-color: #e0f7fa;
      border: 1px solid #007acc;
      padding: 5px;
      margin-bottom: 15px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Элементы списка */
    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      width: 250px;
      text-align: center;
    }

    /* Избранные элементы */
    .favorite-item {
      background-color: #ffe082;
      border-color: #ffa000;
    }

    /* Порядок элементов */
    .order-1 {
      order: 1;
    }

    .order-2 {
      order: 2;
    }

    .order-3 {
      order: 3;
    }

    .order-4 {
      order: 4;
    }

    .order-5 {
      order: 5;
    }
  </style>
</head>
<body>

  <h2>Основной список:</h2>
  <div class="flex-container">
    <div class="sub-container">
      <div class="flex-item order-3">Элемент 3 (order: 3)</div>
      <div class="flex-item order-1">Элемент 1 (order: 1)</div>
      <div class="flex-item order-5">Элемент 5 (order: 5)</div>
      <div class="flex-item order-2">Элемент 2 (order: 2)</div>
      <div class="flex-item order-4">Элемент 4 (order: 4)</div>
    </div>

    <div class="sub-container">
      <div class="flex-item order-2">Элемент 6 (order: 2)</div>
      <div class="flex-item order-4">Элемент 8 (order: 4)</div>
      <div class="flex-item order-3">Элемент 7 (order: 3)</div>
      <div class="flex-item order-1">Элемент 9 (order: 1)</div>
      <div class="flex-item order-5">Элемент 10 (order: 5)</div>
    </div>
  </div>

  <h2>Избранные элементы:</h2>
  <div class="flex-container">
    <div class="sub-container">
      <div class="flex-item favorite-item order-1">Избранное 1 (order: 1)</div>
      <div class="flex-item favorite-item order-2">Избранное 2 (order: 2)</div>
      <div class="flex-item favorite-item order-3">Избранное 3 (order: 3)</div>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Основной Flex-контейнер */
    .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Вложенный контейнер */
    .sub-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      background-color: #e0f7fa;
      border: 1px solid #007acc;
      padding: 5px;
      margin-bottom: 15px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Элементы списка */
    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      width: 250px;
      text-align: center;
    }

    /* Избранные элементы */
    .favorite-item {
      background-color: #ffe082;
      border-color: #ffa000;
    }

    /* Порядок элементов */
    .order-1 {
      order: 1;
    }

    .order-2 {
      order: 2;
    }

    .order-3 {
      order: 3;
    }

    .order-4 {
      order: 4;
    }

    .order-5 {
      order: 5;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/order",
    "https://html5book.ru/css3-flexbox/",
  ],
};

// Размеры: flex-grow, flex-shrink, flex-basis
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
export const flex_task_11 = {
  id: "flex_task_11",
  module: "CSS",
  title: "Базовое использование flex-grow",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  description:
    "Создайте Flex-контейнер, в котором элементы увеличиваются по ширине при изменении размера контейнера.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Добавьте к элементам свойство `flex-grow: 1`",
    "Проверьте, как элементы пропорционально увеличиваются при расширении контейнера",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Базовое использование flex-grow</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
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
  <title>Базовое использование flex-grow</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
      flex-grow: 1;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
.flex-container {
  display: flex;
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* Элементы увеличиваются при расширении контейнера */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  text-align: center;
  flex-grow: 1; /* Все элементы растягиваются равномерно */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_12 = {
  id: "flex_task_12",
  module: "CSS",
  title: "Пропорциональное увеличение с разными коэффициентами (flex-grow)",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flex",
  description:
    "Создайте Flex-контейнер, в котором элементы увеличиваются по ширине при изменении размера контейнера в зависимости от коэффициента flex-grow.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Добавьте к элементам свойство `flex-grow` с разными коэффициентами",
    "Проверьте, как элементы увеличиваются относительно друг друга при расширении контейнера",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Пропорциональное увеличение с разными коэффициентами (flex-grow)</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item grow-1">Элемент 1 (flex-grow: 1)</div>
    <div class="flex-item grow-2">Элемент 2 (flex-grow: 2)</div>
    <div class="flex-item grow-3">Элемент 3 (flex-grow: 3)</div>
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
  <title>Пропорциональное увеличение с разными коэффициентами (flex-grow)</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
    }

    .grow-1 {
      flex-grow: 1;
    }

    .grow-2 {
      flex-grow: 2;
    }

    .grow-3 {
      flex-grow: 3;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item grow-1">Элемент 1 (flex-grow: 1)</div>
    <div class="flex-item grow-2">Элемент 2 (flex-grow: 2)</div>
    <div class="flex-item grow-3">Элемент 3 (flex-grow: 3)</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
.flex-container {
  display: flex;
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* Элементы увеличиваются по-разному */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  text-align: center;
}

/* Настройка коэффициентов */
.grow-1 {
  flex-grow: 1; /* 1 часть */
}

.grow-2 {
  flex-grow: 2; /* 2 части */
}

.grow-3 {
  flex-grow: 3; /* 3 части */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_13 = {
  id: "flex_task_13",
  module: "CSS",
  title: "Сжатие с приоритетом (flex-shrink + min-width)",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flex",
  sectionId: "css_flex3",
  description:
    "Создайте Flex-контейнер, в котором элементы сжимаются по приоритетам при уменьшении контейнера. Важные элементы сжимаются меньше, второстепенные больше.",
  steps: [
    "Создайте Flex-контейнер `<div>` с несколькими элементами",
    "Добавьте к элементам свойство `flex-shrink` с разными коэффициентами",
    "Задайте минимальную ширину для элементов",
    "Проверьте, как элементы сжимаются при изменении ширины окна",
    "Элементы должны оставаться фиксированного размера при достижении `min-width`",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивное сжатие с приоритетом (flex-shrink + min-width)</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item priority-high">Важный элемент</div>
    <div class="flex-item priority-medium">Средний элемент</div>
    <div class="flex-item priority-low">Второстепенный элемент</div>
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
  <title>Адаптивное сжатие с приоритетом (flex-shrink + min-width)</title>
  <style>
  .flex-container {
    display: flex;
    gap: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  /* Элементы внутри Flex */
  .flex-item {
    background-color: lightblue;
    padding: 10px;
    border: 1px solid #007acc;
    text-align: center;
  }

  /* Настройка коэффициентов сжатия и минимальной ширины */
  .priority-high {
    flex-shrink: 1; /* Сжимается меньше всех */
    min-width: 150px;
    width: 500px;
  }

  .priority-medium {
    flex-shrink: 2; /* Средний приоритет */
    min-width: 100px;
    width: 500px;
  }

  .priority-low {
    flex-shrink: 3; /* Сжимается сильнее всех */
    min-width: 70px;
    width: 500px;
  }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item priority-high">Важный элемент</div>
    <div class="flex-item priority-medium">Средний элемент</div>
    <div class="flex-item priority-low">Второстепенный элемент</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
.flex-container {
  display: flex;
  gap: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

/* Элементы внутри Flex */
.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  text-align: center;
}

/* Настройка коэффициентов сжатия и минимальной ширины */
.priority-high {
  flex-shrink: 1; /* Сжимается меньше всех */
  min-width: 150px;
  width: 500px;
}

.priority-medium {
  flex-shrink: 2; /* Средний приоритет */
  min-width: 100px;
  width: 500px;
}

.priority-low {
  flex-shrink: 3; /* Сжимается сильнее всех */
  min-width: 70px;
  width: 500px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_14 = {
  id: "flex_task_14",
  module: "CSS",
  title: "Комбинация flex-grow, flex-shrink и flex-basis в разных секциях",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flex",
  sectionId: "css_flex4",
  description:
    "Создайте Flex-контейнер с 5 секциями, которые по-разному реагируют на изменения ширины контейнера.",
  steps: [
    "Создайте Flex-контейнер `<div>` с 5 секциями",
    "Настройте разные свойства для каждой секции: flex-grow, flex-shrink, flex-basis",
    "Проверьте, как каждая секция ведет себя при изменении ширины окна",
    "Растягивающаяся секция должна занимать максимальное место, сжимающаяся — минимальное",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Комбинация flex-grow, flex-shrink и flex-basis в разных секциях</title>
</head>
<body>

  <div class="flex-container">
    <div class="flex-grow">Растяжение</div>
    <div class="flex-shrink">Сжатие</div>
    <div class="flex-fixed">Фиксированная ширина</div>
    <div class="flex-min">Минимальная ширина</div>
    <div class="flex-max">Максимальная ширина</div>
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
  <title>Комбинация flex-grow, flex-shrink и flex-basis в разных секциях</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-grow {
      background-color: #c8e6c9;
      flex-grow: 3;
      flex-shrink: 0;
      flex-basis: 200px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-shrink {
      background-color: #ffccbc;
      flex-grow: 0;
      flex-shrink: 2;
      flex-basis: 200px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-fixed {
      background-color: #b3e5fc;
      flex-grow: 0;
      flex-shrink: 0;
      width: 250px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-min {
      background-color: #d1c4e9;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 100px;
      min-width: 100px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-max {
      background-color: #ffe082;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 200px;
      max-width: 400px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-grow">Растяжение</div>
    <div class="flex-shrink">Сжатие</div>
    <div class="flex-fixed">Фиксированная ширина</div>
    <div class="flex-min">Минимальная ширина</div>
    <div class="flex-max">Максимальная ширина</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнер на всю ширину экрана */
   .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .flex-grow {
      background-color: #c8e6c9;
      flex-grow: 3;
      flex-shrink: 0;
      flex-basis: 200px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-shrink {
      background-color: #ffccbc;
      flex-grow: 0;
      flex-shrink: 2;
      flex-basis: 200px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-fixed {
      background-color: #b3e5fc;
      flex-grow: 0;
      flex-shrink: 0;
      width: 250px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-min {
      background-color: #d1c4e9;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 100px;
      min-width: 100px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .flex-max {
      background-color: #ffe082;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 200px;
      max-width: 400px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis",
  ],
};
export const flex_task_15 = {
  id: "flex_task_15",
  module: "CSS",
  title: "Адаптивное изменение размеров секций с приоритетами и переключением",
  topic: "Размеры: flex-grow, flex-shrink, flex-basis",
  topicId: "css_flex",
  sectionId: "css_flex5",
  description:
    "Создайте Flex-контейнер с двумя группами секций. Реализуйте переключение приоритетов, перераспределение при изменении экрана и медиа-запросы.",
  steps: [
    "Создайте Flex-контейнер `<div>` с двумя группами секций: Основные и Второстепенные",
    "Добавьте классы приоритета для управления сжатием",
    "Реализуйте адаптивное поведение через медиа-запросы",
    "При уменьшении экрана, второстепенные элементы уменьшаются первыми",
    "Добавьте ховер-эффект для визуального улучшения",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивное изменение размеров секций с приоритетами</title>
</head>
<body>

  <h2>Основные секции:</h2>
  <div class="flex-container">
    <div class="main-section priority-1">Главная 1</div>
    <div class="main-section priority-2">Главная 2</div>
    <div class="main-section priority-3">Главная 3</div>
  </div>

  <h2>Второстепенные секции:</h2>
  <div class="flex-container">
    <div class="secondary-section priority-2">Второстепенная 1</div>
    <div class="secondary-section priority-1">Второстепенная 2</div>
    <div class="secondary-section priority-3">Второстепенная 3</div>
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
  <title>Адаптивное изменение размеров секций с приоритетами</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      flex-wrap: wrap;
    }

    .main-section {
      background-color: #c8e6c9;
      flex-grow: 2;
      flex-shrink: 1;
      flex-basis: 250px;
      min-width: 150px;
      max-width: 600px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }

    .secondary-section {
      background-color: #ffccbc;
      flex-grow: 1;
      flex-shrink: 3;
      flex-basis: 200px;
      min-width: 100px;
      max-width: 400px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="main-section priority-1">Главная 1</div>
    <div class="main-section priority-2">Главная 2</div>
    <div class="main-section priority-3">Главная 3</div>
  </div>

  <div class="flex-container">
    <div class="secondary-section priority-2">Второстепенная 1</div>
    <div class="secondary-section priority-1">Второстепенная 2</div>
    <div class="secondary-section priority-3">Второстепенная 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flex-контейнеры на всю ширину экрана */
   .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      flex-wrap: wrap;
    }

    /* Основные секции */
    .main-section {
      background-color: #c8e6c9;
      flex-grow: 2;
      flex-shrink: 1;
      flex-basis: 250px;
      min-width: 150px;
      max-width: 600px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
      transition: all 0.3s ease;
    }

    /* Второстепенные секции */
    .secondary-section {
      background-color: #ffccbc;
      flex-grow: 1;
      flex-shrink: 3;
      flex-basis: 200px;
      min-width: 100px;
      max-width: 400px;
      text-align: center;
      padding: 20px;
      border: 1px solid #007acc;
      transition: all 0.3s ease;
    }

    /* Приоритеты */
    .priority-1 {
      order: 1;
    }

    .priority-2 {
      order: 2;
    }

    .priority-3 {
      order: 3;
    }

    /* Ховер эффект */
    .main-section:hover,
    .secondary-section:hover {
      transform: scale(1.05);
      background-color: #bbdefb;
    }

    /* Адаптивное поведение */
    @media (max-width: 800px) {
      .main-section {
        flex-basis: 200px;
      }
      .secondary-section {
        flex-basis: 150px;
      }
    }

    @media (max-width: 500px) {
      .main-section {
        flex-basis: 150px;
        min-width: 100px;
      }
      .secondary-section {
        flex-basis: 100px;
        min-width: 80px;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis",
  ],
};

// Сравнение Flexbox с float и inline-block
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
export const flex_task_16 = {
  id: "flex_task_16",
  module: "CSS",
  title: "Сравнение Flexbox и Float",
  topic: "Сравнение Flexbox с float и inline-block",
  topicId: "css_flex",
  sectionId: "css_flex_vs_float_1",
  description:
    "Создайте два макета: один с использованием Flexbox, другой с использованием float. Проверьте, как они ведут себя при изменении ширины окна.",
  steps: [
    "Создайте Flex-контейнер с тремя элементами",
    "Создайте Float-контейнер с аналогичными элементами",
    "Настройте стили так, чтобы оба контейнера выглядели одинаково",
    "Проверьте, как ведут себя контейнеры при изменении ширины окна",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сравнение Flexbox и Float</title>
</head>
<body>

  <h2>Flexbox Макет:</h2>
  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>Float Макет:</h2>
  <div class="float-container">
    <div class="float-item">Элемент 1</div>
    <div class="float-item">Элемент 2</div>
    <div class="float-item">Элемент 3</div>
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
  <title>Сравнение Flexbox и Float</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
      flex-grow: 1;
    }

    .float-container {
      background-color: #f9f9f9;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }

    .float-item {
      background-color: lightgreen;
      padding: 10px;
      border: 1px solid #007acc;
      width: 30%;
      float: left;
      margin-right: 2%;
      text-align: center;
    }

    .float-item:last-child {
      margin-right: 0;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <div class="float-container">
    <div class="float-item">Элемент 1</div>
    <div class="float-item">Элемент 2</div>
    <div class="float-item">Элемент 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flexbox контейнер */
.flex-container {
  display: flex;
  gap: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  text-align: center;
  flex-grow: 1;
}

/* Float контейнер */
.float-container {
  background-color: #f9f9f9;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.float-item {
  background-color: lightgreen;
  padding: 10px;
  border: 1px solid #007acc;
  width: 30%;
  float: left;
  margin-right: 2%;
  text-align: center;
}

.float-item:last-child {
  margin-right: 0;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://html5book.ru/css-float/",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_17 = {
  id: "flex_task_17",
  module: "CSS",
  title: "Сравнение Flexbox и Inline-block",
  topic: "Сравнение Flexbox с float и inline-block",
  topicId: "css_flex",
  sectionId: "css_flex_vs_inline_block",
  description:
    "Создайте два макета: один с использованием Flexbox, другой с использованием inline-block. Проверьте, как они ведут себя при изменении ширины окна.",
  steps: [
    "Создайте Flex-контейнер с тремя элементами",
    "Создайте Inline-block контейнер с аналогичными элементами",
    "Настройте стили так, чтобы оба контейнера выглядели одинаково",
    "Проверьте, как ведут себя контейнеры при изменении ширины окна",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сравнение Flexbox и Inline-block</title>
</head>
<body>

  <h2>Flexbox Макет:</h2>
  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>Inline-block Макет:</h2>
  <div class="inline-block-container">
    <div class="inline-block-item">Элемент 1</div>
    <div class="inline-block-item">Элемент 2</div>
    <div class="inline-block-item">Элемент 3</div>
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
  <title>Сравнение Flexbox и Inline-block</title>
  <style>
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f9f9f9;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .flex-item {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
      flex-grow: 1;
    }

    .inline-block-container {
      background-color: #f9f9f9;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .inline-block-item {
      background-color: lightgreen;
      padding: 10px;
      border: 1px solid #007acc;
      text-align: center;
      display: inline-block;
      width: 31%;
      margin-right: 1%;
      vertical-align: top;
    }

    .inline-block-item:last-child {
      margin-right: 0;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <div class="inline-block-container">
    <div class="inline-block-item">Элемент 1</div>
    <div class="inline-block-item">Элемент 2</div>
    <div class="inline-block-item">Элемент 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flexbox контейнер */
.flex-container {
  display: flex;
  gap: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.flex-item {
  background-color: lightblue;
  padding: 10px;
  border: 1px solid #007acc;
  text-align: center;
  flex-grow: 1;
}

/* Inline-block контейнер */
.inline-block-container {
  background-color: #f9f9f9;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.inline-block-item {
  background-color: lightgreen;
  padding: 10px;
  border: 1px solid #007acc;
  text-align: center;
  display: inline-block;
  width: 31%;
  margin-right: 1%;
  vertical-align: top;
}

.inline-block-item:last-child {
  margin-right: 0;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/inline-block",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://html5book.ru/css-inline-block/",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const flex_task_18 = {
  id: "flex_task_18",
  module: "CSS",
  title: "Микс Flexbox, Float и Inline-block с адаптивным поведением",
  topic: "Сравнение Flexbox с float и inline-block",
  topicId: "css_flex",
  sectionId: "css_flex_vs_mixed",
  description:
    "Создайте сложный макет с использованием Flexbox, Float и Inline-block. Реализуйте основную область контента, боковую панель и шапку с футером.",
  steps: [
    "Создайте Flex-контейнер для шапки и футера",
    "Используйте Float для боковой панели",
    "В основной секции разместите карточки с использованием inline-block",
    "Проверьте, как ведут себя элементы при изменении ширины экрана",
    "Добавьте стили для адаптивного отображения",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Микс Flexbox, Float и Inline-block</title>
</head>
<body>

  <header class="header">
    <div>Логотип</div>
    <div>Навигация</div>
  </header>

  <div class="container">
    <div class="content">
      <h2>Основная область контента:</h2>
      <div class="card">Карточка 1</div>
      <div class="card">Карточка 2</div>
      <div class="card">Карточка 3</div>
      <div class="card">Карточка 4</div>
      <div class="card">Карточка 5</div>
      <div class="card">Карточка 6</div>
    </div>

    <aside class="sidebar">
      <h3>Боковая панель</h3>
      <p>Это содержимое боковой панели. Оно закреплено справа с помощью float.</p>
    </aside>
  </div>

  <footer class="footer">
    <div>© 2025 Мой сайт</div>
    <div>Контакты</div>
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
  <title>Микс Flexbox, Float и Inline-block</title>
  <style>
     /* Шапка и футер (Flexbox) */
    .header, .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #c8e6c9;
      padding: 15px;
      margin-bottom: 10px;
      border: 1px solid #007acc;
    }

    /* Основной контейнер с float */
    .container {
      width: 100%;
      overflow: hidden;
    }

    /* Боковая панель (float) */
    .sidebar {
      float: right;
      width: 25%;
      background-color: #ffccbc;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #007acc;
      height: 100%;
    }

    /* Основная секция с inline-block */
    .content {
      margin-right: 25%;
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #007acc;
      box-sizing: border-box;
    }

    .card {
      display: inline-block;
      width: 31%;
      margin-bottom: 10px;
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      vertical-align: top;
      text-align: center;
      margin-right: 1%;
    }

    .card:nth-child(3n) {
      margin-right: 0;
    }

    /* Адаптивность */
    @media (max-width: 800px) {
      .sidebar {
        width: 100%;
        float: none;
        margin-bottom: 20px;
      }
      .content {
        margin-right: 0;
      }
    }

    @media (max-width: 500px) {
      .card {
        width: 100%;
        margin-right: 0;
      }
    }
  </style>
</head>
<body>

  <header class="header">
    <div>Логотип</div>
    <div>Навигация</div>
  </header>

  <div class="container">
    <div class="content">
      <h2>Основная область контента:</h2>
      <div class="card">Карточка 1</div>
      <div class="card">Карточка 2</div>
      <div class="card">Карточка 3</div>
      <div class="card">Карточка 4</div>
      <div class="card">Карточка 5</div>
      <div class="card">Карточка 6</div>
    </div>

    <aside class="sidebar">
      <h3>Боковая панель</h3>
      <p>Это содержимое боковой панели. Оно закреплено справа с помощью float.</p>
    </aside>
  </div>

  <footer class="footer">
    <div>© 2025 Мой сайт</div>
    <div>Контакты</div>
  </footer>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Flexbox для шапки и футера */
 /* Шапка и футер (Flexbox) */
    .header, .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #c8e6c9;
      padding: 15px;
      margin-bottom: 10px;
      border: 1px solid #007acc;
    }

    /* Основной контейнер с float */
    .container {
      width: 100%;
      overflow: hidden;
    }

    /* Боковая панель (float) */
    .sidebar {
      float: right;
      width: 25%;
      background-color: #ffccbc;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #007acc;
      height: 100%;
    }

    /* Основная секция с inline-block */
    .content {
      margin-right: 25%;
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #007acc;
      box-sizing: border-box;
    }

    .card {
      display: inline-block;
      width: 31%;
      margin-bottom: 10px;
      background-color: lightblue;
      padding: 10px;
      border: 1px solid #007acc;
      vertical-align: top;
      text-align: center;
      margin-right: 1%;
    }

    .card:nth-child(3n) {
      margin-right: 0;
    }

    /* Адаптивность */
    @media (max-width: 800px) {
      .sidebar {
        width: 100%;
        float: none;
        margin-bottom: 20px;
      }
      .content {
        margin-right: 0;
      }
    }

    @media (max-width: 500px) {
      .card {
        width: 100%;
        margin-right: 0;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://developer.mozilla.org/ru/docs/Web/CSS/inline-block",
  ],
};
export const flex_task_19 = {
  id: "flex_task_19",
  module: "CSS",
  title: "Адаптивный лендинг с Flexbox",
  topic: "Закрепление Flexbox",
  topicId: "css_flex",
  sectionId: "css_flex_landing",
  description:
    "Создайте адаптивный лендинг с фиксированным хедером, секциями и формой обратной связи, используя только Flexbox.",
  steps: [
    "Закрепить хедер вверху страницы",
    "Создать секцию с текстом и изображением (flex-direction: row)",
    "Добавить горизонтально прокручиваемые карточки товаров",
    "Создать вертикальный список товаров (flex-direction: column)",
    "Реализовать форму с валидацией через CSS (без JS)",
    "Сделать адаптивность для мобильных устройств",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивный лендинг на Flexbox</title>
</head>
<body>
  <header>
    <div class="logo">FlexShop</div>
    <nav>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Товары</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section class="hero">
      <div class="hero-text">
        <h1>Добро пожаловать в наш магазин</h1>
        <p>Мы предлагаем лучшие товары по самым выгодным ценам. Наш ассортимент постоянно обновляется, чтобы удовлетворить потребности даже самых взыскательных клиентов.</p>
      </div>
      <div class="hero-image">
        Акция недели!
      </div>
    </section>
    
    <section class="horizontal-products">
      <h2 class="section-title">Популярные товары</h2>
      <div class="products-scroll">
        <div class="product-card">
          <div class="product-image" style="background: #e74c3c;">
            Хит продаж
          </div>
          <h3 class="product-title">Смартфон Premium X</h3>
          <p class="product-description">Мощный флагман с тройной камерой и AMOLED-экраном. Идеальный выбор для требовательных пользователей.</p>
          <div class="product-rating">★★★★★</div>
          <div class="product-price">45 990 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #3498db;">
            Новинка
          </div>
          <h3 class="product-title">Ноутбук Ultra Slim</h3>
          <p class="product-description">Ультратонкий и легкий ноутбук с процессором последнего поколения и автономностью до 12 часов.</p>
          <div class="product-rating">★★★★☆</div>
          <div class="product-price">67 490 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #2ecc71;">
            Выбор покупателей
          </div>
          <h3 class="product-title">Наушники Pro Sound</h3>
          <p class="product-description">Беспроводные наушники с активным шумоподавлением и чистым звуком. До 30 часов работы.</p>
          <div class="product-rating">★★★★★</div>
          <div class="product-price">12 990 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #9b59b6;">
            Спецпредложение
          </div>
          <h3 class="product-title">Умные часы V2</h3>
          <p class="product-description">Мониторинг здоровья, уведомления, водонепроницаемость. Совместимость с iOS и Android.</p>
          <div class="product-rating">★★★☆☆</div>
          <div class="product-price">8 490 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #f39c12;">
            Распродажа
          </div>
          <h3 class="product-title">Фитнес-браслет Active</h3>
          <p class="product-description">Трекер активности с пульсометром и мониторингом сна. До 7 дней работы без подзарядки.</p>
          <div class="product-rating">★★★★☆</div>
          <div class="product-price">3 990 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="vertical-products">
      <h2 class="section-title">Рекомендуемые товары</h2>
      <div class="vertical-products-container">
        <div class="vertical-product-card">
          <div class="vertical-product-image" style="background: #1abc9c;">
            ТОП-10
          </div>
          <div class="vertical-product-content">
            <span class="product-tag">Бестселлер</span>
            <h3 class="vertical-product-title">Электросамокат Turbo</h3>
            <p class="product-description">Мощный электросамокат с запасом хода до 40 км. Максимальная скорость 25 км/ч. Подходит для взрослых.</p>
            <div class="vertical-product-meta">
              <div class="product-price">24 990 ₽</div>
              <div class="product-rating">★★★★★</div>
            </div>
          </div>
        </div>
        
        <div class="vertical-product-card">
          <div class="vertical-product-image" style="background: #e67e22;">
            Новинка
          </div>
          <div class="vertical-product-content">
            <h3 class="vertical-product-title">Игровая консоль NextGen</h3>
            <p class="product-description">Мощная игровая консоль с 4K HDR и SSD-накопителем. В комплекте 2 беспроводных контроллера.</p>
            <div class="vertical-product-meta">
              <div class="product-price">39 990 ₽</div>
              <div class="product-rating">★★★★☆</div>
            </div>
          </div>
        </div>
        
        <div class="vertical-product-card">
          <div class="vertical-product-image" style="background: #34495e;">
            Эксклюзив
          </div>
          <div class="vertical-product-content">
            <span class="product-tag">Ограниченная серия</span>
            <h3 class="vertical-product-title">Фотоаппарат Pro Shot</h3>
            <p class="product-description">Зеркальная камера с матрицей 24 Мп и 4K-видео. В комплекте объектив 18-55 мм.</p>
            <div class="vertical-product-meta">
              <div class="product-price">54 990 ₽</div>
              <div class="product-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="contact-form">
      <h2 class="section-title">Обратная связь</h2>
      <div class="form-group">
        <label for="name" class="form-label">ФИО:</label>
        <input type="text" id="name" class="form-control" required placeholder="Иванов Иван Иванович">
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" class="form-control" required placeholder="example@mail.com">
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Телефон:</label>
        <input type="tel" id="phone" class="form-control" required placeholder="+7 (999) 123-45-67">
      </div>
      <div class="form-group">
        <label class="form-label">Пол:</label>
        <div style="display: flex; gap: 1rem;">
          <div class="checkbox-group">
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Мужской</label>
          </div>
          <div class="checkbox-group">
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Женский</label>
          </div>
        </div>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="agree-checkbox">
        <label for="agree-checkbox">Я согласен на обработку персональных данных</label>
      </div>
      <button class="submit-btn">Отправить заявку</button>
    </section>
  </main>
</body>
</html>
  `.trim(),
  show: `
 <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Адаптивный лендинг на Flexbox</title>
  <style>
    /* Сброс стилей и базовые настройки */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f5f5f5;
    }
    
    /* Фиксированный хедер */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #2c3e50;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #3498db;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 1.5rem;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
    }
    
    nav a:hover {
      color: #3498db;
    }
    
    /* Основной контент */
    main {
      margin-top: 70px;
      padding: 2rem;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Секция с текстом и изображением */
    .hero {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, #3498db, #2c3e50);
      border-radius: 8px;
      color: white;
    }
    
    .hero-text {
      flex: 1;
    }
    
    .hero-text h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .hero-image {
      flex: 1;
      min-width: 300px;
      height: 300px;
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      border: 2px dashed rgba(255,255,255,0.3);
    }
    
    /* Горизонтальные карточки */
    .horizontal-products {
      margin: 2rem 0;
    }
    
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #2c3e50;
      position: relative;
      padding-bottom: 0.5rem;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 3px;
      background: #3498db;
    }
    
    .products-scroll {
      display: flex;
      overflow-x: auto;
      gap: 1.5rem;
      padding: 1rem 0;
      scrollbar-width: thin;
    }
    
    .product-card {
      min-width: 280px;
      background: #fff;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
    
    .product-image {
      height: 180px;
      border-radius: 8px;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      font-size: 1.2rem;
    }
    
    .product-title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
    
    .product-description {
      color: #7f8c8d;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      flex-grow: 1;
    }
    
    .product-price {
      font-size: 1.3rem;
      font-weight: bold;
      color: #27ae60;
      margin-bottom: 1rem;
    }
    
    .product-rating {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: #f39c12;
    }
    
    .product-actions {
      display: flex;
      gap: 0.5rem;
    }
    
    .btn {
      padding: 0.6rem 1rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      flex-grow: 1;
      text-align: center;
      text-decoration: none;
    }
    
    .btn-primary {
      background: #3498db;
      color: white;
    }
    
    .btn-primary:hover {
      background: #2980b9;
    }
    
    .btn-outline {
      background: transparent;
      border: 1px solid #3498db;
      color: #3498db;
    }
    
    .btn-outline:hover {
      background: #3498db;
      color: white;
    }
    
    /* Вертикальные карточки */
    .vertical-products {
      margin: 3rem 0;
    }
    
    .vertical-products-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .vertical-product-card {
      display: flex;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    
    .vertical-product-card:hover {
      transform: translateY(-3px);
    }
    
    .vertical-product-image {
      width: 200px;
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
    }
    
    .vertical-product-content {
      padding: 1.5rem;
      flex-grow: 1;
    }
    
    .vertical-product-title {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
    
    .vertical-product-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
    
    .product-tag {
      display: inline-block;
      padding: 0.3rem 0.6rem;
      background: #e74c3c;
      color: white;
      border-radius: 4px;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
    
    /* Форма обратной связи */
    .contact-form {
      max-width: 600px;
      margin: 3rem auto;
      padding: 2rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .form-label {
      font-weight: 500;
      color: #2c3e50;
    }
    
    .form-control {
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border 0.3s;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #3498db;
    }
    
    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .submit-btn {
      padding: 1rem;
      background: #2c3e50;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
      font-weight: bold;
      margin-top: 1rem;
    }
    
    .submit-btn:disabled {
      background: #95a5a6;
      cursor: not-allowed;
    }
    
    /* Чекбокс для активации кнопки */
    #agree-checkbox:checked ~ .submit-btn {
      background: #27ae60;
    }
    
    /* Адаптивность */
    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
      }
      
      nav ul {
        gap: 1rem;
      }
      
      .vertical-product-card {
        flex-direction: column;
      }
      
      .vertical-product-image {
        width: 100%;
        height: 120px;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">FlexShop</div>
    <nav>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Товары</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section class="hero">
      <div class="hero-text">
        <h1>Добро пожаловать в наш магазин</h1>
        <p>Мы предлагаем лучшие товары по самым выгодным ценам. Наш ассортимент постоянно обновляется, чтобы удовлетворить потребности даже самых взыскательных клиентов.</p>
      </div>
      <div class="hero-image">
        Акция недели!
      </div>
    </section>
    
    <section class="horizontal-products">
      <h2 class="section-title">Популярные товары</h2>
      <div class="products-scroll">
        <div class="product-card">
          <div class="product-image" style="background: #e74c3c;">
            Хит продаж
          </div>
          <h3 class="product-title">Смартфон Premium X</h3>
          <p class="product-description">Мощный флагман с тройной камерой и AMOLED-экраном. Идеальный выбор для требовательных пользователей.</p>
          <div class="product-rating">★★★★★</div>
          <div class="product-price">45 990 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #3498db;">
            Новинка
          </div>
          <h3 class="product-title">Ноутбук Ultra Slim</h3>
          <p class="product-description">Ультратонкий и легкий ноутбук с процессором последнего поколения и автономностью до 12 часов.</p>
          <div class="product-rating">★★★★☆</div>
          <div class="product-price">67 490 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #2ecc71;">
            Выбор покупателей
          </div>
          <h3 class="product-title">Наушники Pro Sound</h3>
          <p class="product-description">Беспроводные наушники с активным шумоподавлением и чистым звуком. До 30 часов работы.</p>
          <div class="product-rating">★★★★★</div>
          <div class="product-price">12 990 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #9b59b6;">
            Спецпредложение
          </div>
          <h3 class="product-title">Умные часы V2</h3>
          <p class="product-description">Мониторинг здоровья, уведомления, водонепроницаемость. Совместимость с iOS и Android.</p>
          <div class="product-rating">★★★☆☆</div>
          <div class="product-price">8 490 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
        
        <div class="product-card">
          <div class="product-image" style="background: #f39c12;">
            Распродажа
          </div>
          <h3 class="product-title">Фитнес-браслет Active</h3>
          <p class="product-description">Трекер активности с пульсометром и мониторингом сна. До 7 дней работы без подзарядки.</p>
          <div class="product-rating">★★★★☆</div>
          <div class="product-price">3 990 ₽</div>
          <div class="product-actions">
            <button class="btn btn-primary">Купить</button>
            <button class="btn btn-outline">Подробнее</button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="vertical-products">
      <h2 class="section-title">Рекомендуемые товары</h2>
      <div class="vertical-products-container">
        <div class="vertical-product-card">
          <div class="vertical-product-image" style="background: #1abc9c;">
            ТОП-10
          </div>
          <div class="vertical-product-content">
            <span class="product-tag">Бестселлер</span>
            <h3 class="vertical-product-title">Электросамокат Turbo</h3>
            <p class="product-description">Мощный электросамокат с запасом хода до 40 км. Максимальная скорость 25 км/ч. Подходит для взрослых.</p>
            <div class="vertical-product-meta">
              <div class="product-price">24 990 ₽</div>
              <div class="product-rating">★★★★★</div>
            </div>
          </div>
        </div>
        
        <div class="vertical-product-card">
          <div class="vertical-product-image" style="background: #e67e22;">
            Новинка
          </div>
          <div class="vertical-product-content">
            <h3 class="vertical-product-title">Игровая консоль NextGen</h3>
            <p class="product-description">Мощная игровая консоль с 4K HDR и SSD-накопителем. В комплекте 2 беспроводных контроллера.</p>
            <div class="vertical-product-meta">
              <div class="product-price">39 990 ₽</div>
              <div class="product-rating">★★★★☆</div>
            </div>
          </div>
        </div>
        
        <div class="vertical-product-card">
          <div class="vertical-product-image" style="background: #34495e;">
            Эксклюзив
          </div>
          <div class="vertical-product-content">
            <span class="product-tag">Ограниченная серия</span>
            <h3 class="vertical-product-title">Фотоаппарат Pro Shot</h3>
            <p class="product-description">Зеркальная камера с матрицей 24 Мп и 4K-видео. В комплекте объектив 18-55 мм.</p>
            <div class="vertical-product-meta">
              <div class="product-price">54 990 ₽</div>
              <div class="product-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="contact-form">
      <h2 class="section-title">Обратная связь</h2>
      <div class="form-group">
        <label for="name" class="form-label">ФИО:</label>
        <input type="text" id="name" class="form-control" required placeholder="Иванов Иван Иванович">
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" class="form-control" required placeholder="example@mail.com">
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Телефон:</label>
        <input type="tel" id="phone" class="form-control" required placeholder="+7 (999) 123-45-67">
      </div>
      <div class="form-group">
        <label class="form-label">Пол:</label>
        <div style="display: flex; gap: 1rem;">
          <div class="checkbox-group">
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Мужской</label>
          </div>
          <div class="checkbox-group">
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Женский</label>
          </div>
        </div>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="agree-checkbox">
        <label for="agree-checkbox">Я согласен на обработку персональных данных</label>
      </div>
      <button class="submit-btn">Отправить заявку</button>
    </section>
  </main>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Сброс стилей и базовые настройки */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f5f5f5;
    }
    
    /* Фиксированный хедер */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #2c3e50;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #3498db;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 1.5rem;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
    }
    
    nav a:hover {
      color: #3498db;
    }
    
    /* Основной контент */
    main {
      margin-top: 70px;
      padding: 2rem;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Секция с текстом и изображением */
    .hero {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, #3498db, #2c3e50);
      border-radius: 8px;
      color: white;
    }
    
    .hero-text {
      flex: 1;
    }
    
    .hero-text h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .hero-image {
      flex: 1;
      min-width: 300px;
      height: 300px;
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      border: 2px dashed rgba(255,255,255,0.3);
    }
    
    /* Горизонтальные карточки */
    .horizontal-products {
      margin: 2rem 0;
    }
    
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #2c3e50;
      position: relative;
      padding-bottom: 0.5rem;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 3px;
      background: #3498db;
    }
    
    .products-scroll {
      display: flex;
      overflow-x: auto;
      gap: 1.5rem;
      padding: 1rem 0;
      scrollbar-width: thin;
    }
    
    .product-card {
      min-width: 280px;
      background: #fff;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
    
    .product-image {
      height: 180px;
      border-radius: 8px;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      font-size: 1.2rem;
    }
    
    .product-title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
    
    .product-description {
      color: #7f8c8d;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      flex-grow: 1;
    }
    
    .product-price {
      font-size: 1.3rem;
      font-weight: bold;
      color: #27ae60;
      margin-bottom: 1rem;
    }
    
    .product-rating {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: #f39c12;
    }
    
    .product-actions {
      display: flex;
      gap: 0.5rem;
    }
    
    .btn {
      padding: 0.6rem 1rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      flex-grow: 1;
      text-align: center;
      text-decoration: none;
    }
    
    .btn-primary {
      background: #3498db;
      color: white;
    }
    
    .btn-primary:hover {
      background: #2980b9;
    }
    
    .btn-outline {
      background: transparent;
      border: 1px solid #3498db;
      color: #3498db;
    }
    
    .btn-outline:hover {
      background: #3498db;
      color: white;
    }
    
    /* Вертикальные карточки */
    .vertical-products {
      margin: 3rem 0;
    }
    
    .vertical-products-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .vertical-product-card {
      display: flex;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    
    .vertical-product-card:hover {
      transform: translateY(-3px);
    }
    
    .vertical-product-image {
      width: 200px;
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
    }
    
    .vertical-product-content {
      padding: 1.5rem;
      flex-grow: 1;
    }
    
    .vertical-product-title {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
    
    .vertical-product-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
    
    .product-tag {
      display: inline-block;
      padding: 0.3rem 0.6rem;
      background: #e74c3c;
      color: white;
      border-radius: 4px;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
    
    /* Форма обратной связи */
    .contact-form {
      max-width: 600px;
      margin: 3rem auto;
      padding: 2rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .form-label {
      font-weight: 500;
      color: #2c3e50;
    }
    
    .form-control {
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border 0.3s;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #3498db;
    }
    
    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .submit-btn {
      padding: 1rem;
      background: #2c3e50;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
      font-weight: bold;
      margin-top: 1rem;
    }
    
    .submit-btn:disabled {
      background: #95a5a6;
      cursor: not-allowed;
    }
    
    /* Чекбокс для активации кнопки */
    #agree-checkbox:checked ~ .submit-btn {
      background: #27ae60;
    }
    
    /* Адаптивность */
    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
      }
      
      nav ul {
        gap: 1rem;
      }
      
      .vertical-product-card {
        flex-direction: column;
      }
      
      .vertical-product-image {
        width: 100%;
        height: 120px;
      }
    }
    `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/overflow",
  ],
};
