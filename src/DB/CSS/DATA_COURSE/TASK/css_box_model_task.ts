// Типы отображения

export const css_box_model_task_1 = {
  id: "css_box_model_task_1",
  module: "CSS",
  title: "Типы отображения элементов",
  topic: "Типы отображения",
  topicId: "css_box_model",
  sectionId: "css_box_model2",
  description:
    "Создайте HTML-документ с четырьмя элементами, каждый из которых демонстрирует тип отображения: block, inline, inline-block, none.",
  steps: [
    "Создайте HTML-документ с четырьмя `<div>` элементами.",
    "Примените к первому элементу тип отображения `block`. Задайте ему ширину `200px` и фон.",
    "Для второго элемента используйте тип отображения `inline` и добавьте текст.",
    "Для третьего элемента примените `inline-block`, задайте ему размеры и фон.",
    "Для четвёртого элемента установите `display: none` и убедитесь, что он не отображается на странице.",
    "Проверьте, что все стили отображаются корректно.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Типы отображения</title>
</head>
<body>
  <div class="block">Блочный элемент (block)</div>
  <div class="inline">Инлайновый элемент (inline)</div>
  <div class="inline-block">Инлайн-блочный (inline-block)</div>
  <div class="hidden">Этот элемент не виден (none)</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы отображения</title>
  <style>
     .block {
      display: block;
      width: 200px;
      background-color: #d1ecf1;
    }

    .inline {
      display: inline;
      background-color: #f8d7da;
    }

    .inline-block {
      display: inline-block;
      width: 150px;
      height: 50px;
      background-color: #d4edda;
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="block">Блочный элемент (block)</div>
  <div class="inline">Инлайновый элемент (inline)</div>
  <div class="inline-block">Инлайн-блочный (inline-block)</div>
  <div class="hidden">Этот элемент не виден (none)</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .block {
      display: block;
      width: 200px;
      background-color: #d1ecf1;
    }

    .inline {
      display: inline;
      background-color: #f8d7da;
    }

    .inline-block {
      display: inline-block;
      width: 150px;
      height: 50px;
      background-color: #d4edda;
    }

    .hidden {
      display: none;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/display/",
    "https://css-tricks.com/almanac/properties/d/display/",
  ],
};
export const css_box_model_task_2 = {
  id: "css_box_model_task_2",
  module: "CSS",
  title: "Отображение элементов в одной строке",
  topic: "Типы отображения",
  topicId: "css_box_model",
  sectionId: "css_box_model2",
  description:
    "Создайте HTML-документ с пятью элементами, каждый из которых демонстрирует тип отображения: block, inline, inline-block, none. Поймите, как они ведут себя на странице.",
  steps: [
    "Создайте HTML-документ с пятью `<div>` элементами.",
    "Примените к первому элементу тип отображения `block`. Задайте ему текст 'Блочный элемент (block)'.",
    "Для второго элемента используйте тип отображения `inline` и добавьте текст 'Инлайновый элемент (inline)'.",
    "Для третьего и четвертого элемента примените `inline-block`, добавьте текст 'Инлайн-блочный элемент (inline-block)'.",
    "Для пятого элемента установите `display: none`. Он не должен отображаться на странице.",
    "Проверьте, что элементы с типами `block`, `inline`, `inline-block` отображаются на странице корректно, а элемент с `display: none` отсутствует.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Типы отображения элементов</title>
</head>
<body>

  <div class="block">Блочный элемент (block)</div>

  <p>Текст перед инлайновым элементом 
    <div class="inline">Инлайновый элемент (inline)</div>
    текст после инлайнового элемента.
  </p>

  <div class="inline-block">Инлайн-блочный 1</div>
  <div class="inline-block">Инлайн-блочный 2</div>

  <div class="hidden">Этого элемента не видно (display: none)</div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы отображения элементов</title>
  <style>
    .block {
      display: block;
      background-color: #d1ecf1;
    }

    .inline {
      display: inline;
      background-color: #f8d7da;
    }

    .inline-block {
      display: inline-block;
      background-color: #d4edda;
      width: 100px;
      height: 30px;
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>

  <div class="block">Блочный элемент (block)</div>

  <p>Текст перед инлайновым элементом 
    <div class="inline">Инлайновый элемент (inline)</div>
    текст после инлайнового элемента.
  </p>

  <div class="inline-block">Инлайн-блочный 1</div>
  <div class="inline-block">Инлайн-блочный 2</div>

  <div class="hidden">Этого элемента не видно (display: none)</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Блочный элемент занимает всю ширину */
    .block {
      display: block;
      background-color: #d1ecf1;
    }

    /* Инлайновый элемент — находится в одной строке с текстом */
    .inline {
      display: inline;
      background-color: #f8d7da;
    }

    /* Инлайн-блочный элемент — в строке, но можно задавать ширину и высоту */
    .inline-block {
      display: inline-block;
      background-color: #d4edda;
      width: 100px;
      height: 30px;
    }

    /* Этот элемент не виден */
    .hidden {
      display: none;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/display/",
    "https://css-tricks.com/almanac/properties/d/display/",
  ],
};
export const css_box_model_task_3 = {
  id: "css_box_model_task_3",
  module: "CSS",
  title: "Список товаров с разными типами отображения",
  topic: "Типы отображения",
  topicId: "css_box_model",
  sectionId: "css_box_model2",
  description:
    "Создайте HTML-документ со списком товаров. Каждый товар должен иметь заголовок, описание и цену. Примените к элементам разные типы отображения: block, inline, inline-block, none.",
  steps: [
    "Создайте HTML-документ с четырьмя товарами.",
    "Для каждого товара используйте `<div>` с классом `product`.",
    "Внутри каждого товара добавьте заголовок с названием товара, описание и цену.",
    "Задайте заголовку отображение `block`, описанию — `inline`, а цене — `inline-block`.",
    "Для одного из товаров установите `display: none`, чтобы он не отображался на странице.",
    "Проверьте, что элементы отображаются корректно, и пропавший товар действительно не виден.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Список товаров</title>

</head>
<body>

  <div class="product">
    <div class="product-title">Телефон</div>
    <div class="product-description">Мощный смартфон с большим экраном. </div>
    <div class="product-price">Цена: 500$</div>
  </div>

  <div class="product">
    <div class="product-title">Ноутбук</div>
    <div class="product-description">Лёгкий и быстрый ноутбук для работы. </div>
    <div class="product-price">Цена: 800$</div>
  </div>

  <div class="product hidden">
    <div class="product-title">Планшет</div>
    <div class="product-description">Удобный планшет для чтения и просмотра видео. </div>
    <div class="product-price">Цена: 300$</div>
  </div>

  <div class="product">
    <div class="product-title">Наушники</div>
    <div class="product-description">Беспроводные наушники с шумоподавлением. </div>
    <div class="product-price">Цена: 150$</div>
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
  <title>Список товаров</title>
  <style>
    .product {
      background-color: #f1f1f1;
      margin-bottom: 10px;
    }

    .product-title {
      display: block;
      font-weight: bold;
      font-size: 18px;
    }

    .product-description {
      display: inline;
      color: #555;
    }

    .product-price {
      display: inline-block;
      font-size: 16px;
      color: green;
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>

  <div class="product">
    <div class="product-title">Телефон</div>
    <div class="product-description">Мощный смартфон с большим экраном. </div>
    <div class="product-price">Цена: 500$</div>
  </div>

  <div class="product">
    <div class="product-title">Ноутбук</div>
    <div class="product-description">Лёгкий и быстрый ноутбук для работы. </div>
    <div class="product-price">Цена: 800$</div>
  </div>

  <div class="product hidden">
    <div class="product-title">Планшет</div>
    <div class="product-description">Удобный планшет для чтения и просмотра видео. </div>
    <div class="product-price">Цена: 300$</div>
  </div>

  <div class="product">
    <div class="product-title">Наушники</div>
    <div class="product-description">Беспроводные наушники с шумоподавлением. </div>
    <div class="product-price">Цена: 150$</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Стили для товара */
    .product {
      background-color: #f1f1f1;
      margin-bottom: 10px;
    }

    /* Заголовок товара */
    .product-title {
      display: block;
      font-weight: bold;
      font-size: 18px;
    }

    /* Описание товара */
    .product-description {
      display: inline;
      color: #555;
    }

    /* Цена товара */
    .product-price {
      display: inline-block;
      font-size: 16px;
      color: green;
    }

    /* Скрытый товар */
    .hidden {
      display: none;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/display/",
    "https://css-tricks.com/almanac/properties/d/display/",
  ],
};
export const css_display_task_1 = {
  id: "css_display_task_1",
  module: "CSS",
  title: "Типы отображения Block и Inline",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с элементами, которые имеют типы отображения block и inline.",
  steps: [
    "Создайте HTML-документ с двумя элементами: один в `<div>`, второй в `<span>`",
    "Задайте элементу `<div>` тип отображения `block`",
    "Задайте элементу `<span>` тип отображения `inline`",
    "Примените стили: цвет фона, отступы, границы",
    "Проверьте, как они отображаются на странице",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Типы отображения Block и Inline</title>
</head>
<body>
  <div class="block-element">Это блочный элемент (block)</div>
  <span class="inline-element">Это строчный элемент (inline)</span>
  <span class="inline-element">Ещё один строчный элемент (inline)</span>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы отображения Block и Inline</title>
  <style>
    .block-element {
      display: block;
      background-color: lightblue;
      margin-bottom: 10px;
      border: 2px solid #333;
      padding: 10px;
    }

    .inline-element {
      display: inline;
      background-color: lightgreen;
      border: 2px solid #333;
      padding: 5px;
    }
  </style>
</head>
<body>
  <div class="block-element">Это блочный элемент (block)</div>
  <span class="inline-element">Это строчный элемент (inline)</span>
  <span class="inline-element">Ещё один строчный элемент (inline)</span>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Типы отображения block и inline */
    .block-element {
      display: block;
      background-color: lightblue;
      margin-bottom: 10px;
      border: 2px solid #333;
      padding: 10px;
    }

    .inline-element {
      display: inline;
      background-color: lightgreen;
      border: 2px solid #333;
      padding: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/css-display/",
  ],
};

export const css_display_task_3 = {
  id: "css_display_task_3",
  module: "CSS",
  title: "Расположение блоков с использованием Inline-block",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ, в котором несколько блоков будут располагаться в одну линию с помощью inline-block.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>`, внутри которого три вложенных блока",
    "Задайте вложенным блокам тип отображения `inline-block`",
    "Настройте ширину, высоту, отступы и цвет фона для каждого блока",
    "Проверьте, что блоки располагаются в одну линию и имеют отступы между собой",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Расположение Inline-block</title>
</head>
<body>

  <div class="container">
    <div class="block">Блок 1</div>
    <div class="block">Блок 2</div>
    <div class="block">Блок 3</div>
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
  <title>Расположение Inline-block</title>
  <style>
    .container {
      border: 1px solid #ccc;
      padding: 10px;
    }

    .block {
      display: inline-block;
      width: 150px;
      height: 100px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      border: 1px solid #333;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="block">Блок 1</div>
    <div class="block">Блок 2</div>
    <div class="block">Блок 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Расположение элементов в одну линию с помощью inline-block */
    .container {
      border: 1px solid #ccc;
      padding: 10px;
    }

    .block {
      display: inline-block;
      width: 150px;
      height: 100px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      border: 1px solid #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/css-display/",
  ],
};

export const css_display_task_4 = {
  id: "css_display_task_4",
  module: "CSS",
  title: "Плавающие блоки с использованием Float",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с плавающими блоками, которые располагаются слева и справа с использованием float.",
  steps: [
    "Создайте HTML-документ с тремя блоками",
    "Задайте двум блокам тип отображения `float`: один слева, другой справа",
    "Настройте стили: ширину, высоту, цвет фона",
    "Между этими двумя блоками вставьте основной контент",
    "Проверьте, что блоки корректно плавают слева и справа",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Плавающие блоки Float</title>
</head>
<body>

  <div class="clearfix">
    <div class="left-block">Слева</div>
    <div class="right-block">Справа</div>
    <div class="content">
      Основной контент страницы. Этот блок обтекается плавающими блоками.
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
  <title>Плавающие блоки Float</title>
  <style>
    .left-block {
      float: left;
      width: 150px;
      height: 200px;
      background-color: lightcoral;
      margin-right: 10px;
    }

    .right-block {
      float: right;
      width: 150px;
      height: 200px;
      background-color: lightgreen;
      margin-left: 10px;
    }

    .content {
      margin-left: 160px;
      margin-right: 160px;
      background-color: lightyellow;
      padding: 10px;
      height: 200px;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="clearfix">
    <div class="left-block">Слева</div>
    <div class="right-block">Справа</div>
    <div class="content">
      Основной контент страницы. Этот блок обтекается плавающими блоками.
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Плавающие блоки с использованием Float */
    .left-block {
      float: left;
      width: 150px;
      height: 200px;
      background-color: lightcoral;
      margin-right: 10px;
    }

    .right-block {
      float: right;
      width: 150px;
      height: 200px;
      background-color: lightgreen;
      margin-left: 10px;
    }

    .content {
      margin-left: 160px;
      margin-right: 160px;
      background-color: lightyellow;
      padding: 10px;
      height: 200px;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://html5book.ru/css-float/",
  ],
};
export const css_display_task_5 = {
  id: "css_display_task_5",
  module: "CSS",
  title: "Создание макета с колонками",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с макетом из трёх колонок: левая панель навигации, основной контент и правая информационная панель. Используйте только float и inline-block.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>`",
    "Внутри контейнера создайте три блока: левая панель навигации, основной контент и правая панель информации",
    "Задайте левому блоку `float: left`, а правому — `float: right`",
    "Основной контент должен автоматически занимать оставшееся пространство",
    "Настройте стили: отступы, фон, границы",
    "Проверьте, что при изменении размеров окна макет остаётся стабильным",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Трёхколоночный макет без Flex и Grid</title>
</head>
<body>

  <div class="container clearfix">
    <div class="left-panel">
      Левая панель навигации
    </div>
    <div class="main-content">
      Основной контент страницы. Здесь отображается основная информация.
    </div>
    <div class="right-panel">
      Правая информационная панель
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
  <title>Трёхколоночный макет без Flex и Grid</title>
  <style>
    /* Общий контейнер */
    .container {
      width: 100%;
      overflow: hidden;
      border: 1px solid #333;
      background-color: #f9f9f9;
    }

    /* Левая панель */
    .left-panel {
      float: left;
      width: 20%;
      background-color: lightblue;
      height: 400px;
      padding: 10px;
    }

    /* Правая панель */
    .right-panel {
      float: right;
      width: 20%;
      background-color: lightgreen;
      height: 400px;
      padding: 10px;
    }

    /* Основной контент */
    .main-content {
      margin-left: 20%;
      margin-right: 20%;
      background-color: lightyellow;
      height: 400px;
      padding: 10px;
    }

    /* Clearfix */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="container clearfix">
    <div class="left-panel">
      Левая панель навигации
    </div>
    <div class="main-content">
      Основной контент страницы. Здесь отображается основная информация.
    </div>
    <div class="right-panel">
      Правая информационная панель
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Макет из трёх колонок без Flex и Grid */
    .container {
      width: 100%;
      overflow: hidden;
      border: 1px solid #333;
      background-color: #f9f9f9;
    }

    /* Левая панель */
    .left-panel {
      float: left;
      width: 20%;
      background-color: lightblue;
      height: 400px;
      padding: 10px;
    }

    /* Правая панель */
    .right-panel {
      float: right;
      width: 20%;
      background-color: lightgreen;
      height: 400px;
      padding: 10px;
    }

    /* Основной контент */
    .main-content {
      margin-left: 20%;
      margin-right: 20%;
      background-color: lightyellow;
      height: 400px;
      padding: 10px;
    }

    /* Clearfix */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://html5book.ru/css-float/",
  ],
};

// Позиционирование элементов
export const css_box_model_task_7 = {
  id: "css_box_model_task_7",
  module: "CSS",
  title: "Типы позиционирования элементов",
  topic: "Позиционирование элементов",
  topicId: "css_box_model",
  sectionId: "css_box_model4",
  description:
    "Создайте HTML-документ с пятью блоками, каждый из которых демонстрирует разные типы позиционирования: static, relative, absolute, fixed, sticky. Добавьте текст для проверки скролла.",
  steps: [
    "Создайте HTML-документ с пятью `<div>` элементами.",
    "Для первого элемента примените `position: static`. Это значение по умолчанию.",
    "Для второго элемента используйте `position: relative`, сместите его вниз на 10px.",
    "Для третьего элемента примените `position: absolute` внутри контейнера.",
    "Для четвёртого элемента используйте `position: fixed` в правом нижнем углу.",
    "Для пятого элемента примените `position: sticky` с закреплением в верхней части страницы.",
    "Добавьте большой текст, чтобы можно было прокручивать страницу и проверить работу sticky и fixed.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Типы позиционирования</title>
</head>
<body>

  <div class="static">Static (по умолчанию)</div>
  <div class="relative">Relative (смещён вниз на 10px)</div>

  <div class="container">
    <div class="absolute">Absolute (внутри контейнера)</div>
  </div>

  <div class="sticky">Sticky (закрепляется при скролле)</div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
  </div>

  <div class="fixed">Fixed (правый нижний угол)</div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы позиционирования</title>
  <style>
    .static {
      background-color: #d1ecf1;
      height: 50px;
      width: 150px;
    }

    .relative {
      position: relative;
      top: 10px;
      background-color: #f8d7da;
      height: 50px;
      width: 150px;
    }

    .container {
      position: relative;
      height: 100px;
      background-color: #f1f1f1;
    }

    .absolute {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: #d4edda;
      height: 50px;
      width: 150px;
    }

    .fixed {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background-color: #fce9d1;
      height: 50px;
      width: 150px;
    }

    .sticky {
      position: sticky;
      top: 0;
      background-color: #cce5ff;
      height: 50px;
      width: 100%;
    }

    .content {
      margin-top: 20px;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <div class="static">Static (по умолчанию)</div>
  <div class="relative">Relative (смещён вниз на 10px)</div>

  <div class="container">
    <div class="absolute">Absolute (внутри контейнера)</div>
  </div>

  <div class="sticky">Sticky (закрепляется при скролле)</div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
  </div>

  <div class="fixed">Fixed (правый нижний угол)</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .static {
      background-color: #d1ecf1;
      height: 50px;
      width: 150px;
    }

    .relative {
      position: relative;
      top: 10px;
      background-color: #f8d7da;
      height: 50px;
      width: 150px;
    }

    .container {
      position: relative;
      height: 100px;
      background-color: #f1f1f1;
    }

    .absolute {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: #d4edda;
      height: 50px;
      width: 150px;
    }

    .fixed {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background-color: #fce9d1;
      height: 50px;
      width: 150px;
    }

    .sticky {
      position: sticky;
      top: 0;
      background-color: #cce5ff;
      height: 50px;
      width: 100%;
    }

    .content {
      margin-top: 20px;
      line-height: 1.5;
    }
  `.trim(),
};
export const css_box_model_task_8 = {
  id: "css_box_model_task_8",
  module: "CSS",
  title: "Карточки с фиксированным и абсолютным позиционированием",
  topic: "Позиционирование элементов",
  topicId: "css_box_model",
  sectionId: "css_box_model4",
  description:
    "Создайте HTML-документ с четырьмя карточками. Две из них должны быть закреплены на экране при прокрутке (fixed), а две — позиционированы абсолютно внутри контейнера (absolute).",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='parent'>` и четырьмя вложенными элементами `<div>`.",
    "Примените к контейнеру стиль `position: relative`.",
    "Для первых двух элементов используйте `position: absolute`. Задайте им смещения в верхний левый и правый углы контейнера.",
    "Для следующих двух элементов примените `position: fixed`. Зафиксируйте их в нижнем левом и правом углу экрана.",
    "Добавьте длинный текст, чтобы проверить, как fixed-элементы остаются на месте при скролле страницы.",
    "Добавте текст рыбы чтобы появился скролл.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Позиционирование карточек</title>
</head>
<body>
  <div class="parent">
    <div class="absolute-left">Absolute Left</div>
    <div class="absolute-right">Absolute Right</div>
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
  </div>

  <div class="fixed-left">Fixed Left</div>
  <div class="fixed-right">Fixed Right</div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Позиционирование карточек</title>
  <style>
    .parent {
      position: relative;
      width: 100%;
      height: 300px;
      background-color: #f1f1f1;
      margin-bottom: 20px;
    }

    .absolute-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 150px;
      height: 50px;
      background-color: #d1ecf1;
    }

    .absolute-right {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 150px;
      height: 50px;
      background-color: #f8d7da;
    }

    .fixed-left {
      position: fixed;
      bottom: 10px;
      left: 10px;
      width: 150px;
      height: 50px;
      background-color: #d4edda;
    }

    .fixed-right {
      position: fixed;
      bottom: 10px;
      right: 10px;
      width: 150px;
      height: 50px;
      background-color: #fce9d1;
    }
  </style>
</head>
<body>

  <div class="parent">
    <div class="absolute-left">Absolute Left</div>
    <div class="absolute-right">Absolute Right</div>
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
  </div>

  <div class="fixed-left">Fixed Left</div>
  <div class="fixed-right">Fixed Right</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .parent {
      position: relative;
      width: 100%;
      height: 300px;
      background-color: #f1f1f1;
      margin-bottom: 20px;
    }

    .absolute-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 150px;
      height: 50px;
      background-color: #d1ecf1;
    }

    .absolute-right {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 150px;
      height: 50px;
      background-color: #f8d7da;
    }

    .fixed-left {
      position: fixed;
      bottom: 10px;
      left: 10px;
      width: 150px;
      height: 50px;
      background-color: #d4edda;
    }

    .fixed-right {
      position: fixed;
      bottom: 10px;
      right: 10px;
      width: 150px;
      height: 50px;
      background-color: #fce9d1;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
    "https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/",
  ],
};

export const css_position_task_1 = {
  id: "css_position_task_1",
  module: "CSS",
  title: "Позиционирование с использованием position: relative",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ, в котором элемент смещается относительно своего нормального положения на странице с использованием position: relative.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте первому блоку `position: relative` и сместите его на 20px вправо и 10px вниз",
    "Второму блоку не задавайте позиционирование",
    "Настройте цвет фона, границы и отступы",
    "Проверьте, что смещение видно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Позиционирование Relative</title>
</head>
<body>

  <div class="relative-block">
    Я смещён на 20px вправо и на 10px вниз
  </div>

  <div class="normal-block">
    Я на своём обычном месте
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
  <title>Позиционирование Relative</title>
  <style>
    .relative-block {
      position: relative;
      left: 20px;
      top: 10px;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 15px;
    }

    .normal-block {
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="relative-block">
    Я смещён на 20px вправо и на 10px вниз
  </div>

  <div class="normal-block">
    Я на своём обычном месте
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Позиционирование с использованием position: relative */
    .relative-block {
      position: relative;
      left: 20px;
      top: 10px;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 15px;
    }

    .normal-block {
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_2 = {
  id: "css_position_task_2",
  module: "CSS",
  title: "Позиционирование с использованием z-index",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  sectionId: "css_box_model4",
  description:
    "Создайте HTML-документ, в котором два блока перекрываются. Настройте порядок отображения с использованием z-index.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте обоим блокам `position: absolute`",
    "Сместите их так, чтобы они пересекались",
    "Настройте `z-index` так, чтобы один блок перекрывал другой",
    "Проверьте, что порядок перекрытия изменяется при изменении `z-index`",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Позиционирование с использованием z-index</title>
</head>
<body>
  <div class="box-1">
    Слой 1
  </div>

  <div class="box-2">
    Слой 2 (на переднем плане)
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
  <title>Позиционирование с использованием z-index</title>
  <style>
    .box-1 {
      position: absolute;
      top: 50px;
      left: 50px;
      width: 150px;
      height: 150px;
      background-color: lightblue;
      z-index: 1;
    }

    .box-2 {
      position: absolute;
      top: 100px;
      left: 100px;
      width: 150px;
      height: 150px;
      background-color: lightcoral;
      z-index: 2;
    }
  </style>
</head>
<body>

  <div class="box-1">
    Слой 1
  </div>

  <div class="box-2">
    Слой 2 (на переднем плане)
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Позиционирование с использованием z-index */
.box-1 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 150px;
  height: 150px;
  background-color: lightblue;
  z-index: 1;
}

.box-2 {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 150px;
  height: 150px;
  background-color: lightcoral;
  z-index: 2;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_3 = {
  id: "css_position_task_3",
  module: "CSS",
  title: "Абсолютное позиционирование в контейнере",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ с контейнером, внутри которого расположены блоки с абсолютным позиционированием.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и тремя вложенными блоками",
    "Задайте контейнеру `position: relative`",
    "Вложенным блокам задайте `position: absolute`",
    "Настройте их положение: один в левом верхнем углу, другой в правом нижнем, третий по центру",
    "Проверьте, что при изменении размеров контейнера блоки остаются на своих местах",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Абсолютное позиционирование в контейнере</title>
</head>
<body>

  <div class="relative-container">
    <div class="top-left">Лево-верх</div>
    <div class="bottom-right">Право-низ</div>
    <div class="center">Центр</div>
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
  <title>Абсолютное позиционирование в контейнере</title>
  <style>
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
    }

    .top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>

  <div class="relative-container">
    <div class="top-left">Лево-верх</div>
    <div class="bottom-right">Право-низ</div>
    <div class="center">Центр</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
    }

    .top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_4 = {
  id: "css_position_task_4",
  module: "CSS",
  title: "Фиксированное позиционирование в шапке и подвале",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ со шапкой и подвалом, которые всегда остаются видимыми при прокрутке страницы.",
  steps: [
    "Создайте HTML-документ с двумя блоками: 'header' и 'footer'",
    "Задайте обоим блокам фиксированное позиционирование",
    "Шапка (`header`) — сверху страницы",
    "Подвал (`footer`) — снизу страницы",
    "Добавьте длинный контент, чтобы появилась вертикальная прокрутка",
    "Проверьте, что при прокрутке страницы они остаются на своих местах",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Фиксированное позиционирование шапки и подвала</title>
</head>
<body>

  <header>
    Фиксированная шапка
  </header>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что шапка и подвал остаются на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
  </div>

  <footer>
    Фиксированный подвал
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
  <title>Фиксированное позиционирование шапки и подвала</title>
  <style>
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #007acc;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    .content {
      margin-top: 70px;
      margin-bottom: 70px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  </style>
</head>
<body>

  <header>
    Фиксированная шапка
  </header>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что шапка и подвал остаются на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
  </div>

  <footer>
    Фиксированный подвал
  </footer>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Фиксированное позиционирование для header и footer */
  header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #007acc;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    .content {
      margin-top: 70px;
      margin-bottom: 70px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_5 = {
  id: "css_position_task_5",
  module: "CSS",
  title: "Плавающая панель навигации с прокруткой",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ с боковой панелью навигации, которая остаётся видимой при прокрутке страницы.",
  steps: [
    "Создайте HTML-документ с боковой панелью навигации и основным контентом",
    "Задайте панели навигации фиксированное позиционирование (`position: fixed`)",
    "Настройте стили: цвет фона, ширину, высоту",
    "Основной контент должен располагаться справа от панели",
    "Проверьте, что при прокрутке страницы панель остаётся на месте",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Плавающая панель навигации с прокруткой</title>
</head>
<body>

  <div class="sidebar">
    <h3>Навигация</h3>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакты</a>
    <a href="#">Часто задаваемые вопросы</a>
    <a href="#">Блог</a>
  </div>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что панель навигации остаётся на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
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
  <title>Плавающая панель навигации с прокруткой</title>
  <style>
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 220px;
      height: 100%;
      background-color: #333;
      color: white;
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
    }

    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
      font-size: 18px;
    }

    .sidebar a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    .content {
      margin-left: 240px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  </style>
</head>
<body>

  <div class="sidebar">
    <h3>Навигация</h3>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакты</a>
    <a href="#">Часто задаваемые вопросы</a>
    <a href="#">Блог</a>
  </div>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что панель навигации остаётся на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Плавающая панель навигации с прокруткой */
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 220px;
      height: 100%;
      background-color: #333;
      color: white;
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
    }

    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
      font-size: 18px;
    }

    .sidebar a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    .content {
      margin-left: 240px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};

// Смещение элементов
export const css_box_model_task_4 = {
  id: "css_box_model_task_4",
  module: "CSS",
  title: "Базовое смещение элементов",
  topic: "Смещение элементов",
  topicId: "css_box_model",
  sectionId: "css_box_model3",
  description:
    "Создайте HTML-документ с двумя элементами. Один должен быть смещён вправо и вниз, второй — влево и вверх. Примените свойства top, right, bottom, left и position: relative.",
  steps: [
    "Создайте HTML-документ с двумя `<div>` элементами.",
    "Для первого элемента примените `position: relative`, `top: 20px`, `right: 30px`.",
    "Для второго элемента примените `position: relative`, `bottom: 15px`, `left: 25px`.",
    "Задайте цвет фона для удобства визуализации.",
    "Проверьте, что элементы смещаются относительно своей изначальной позиции.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Смещение элементов</title>
</head>
<body>
  <div class="box-1">Вниз и вправо</div>
  <div class="box-2">Вверх и влево</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Смещение элементов</title>
  <style>
    .box-1 {
      position: relative;
      top: 20px;
      right: 30px;
      background-color: #d1ecf1;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }

    .box-2 {
      position: relative;
      bottom: 15px;
      left: 25px;
      background-color: #f8d7da;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  </style>
</head>
<body>

  <div class="box-1">Вниз и вправо</div>
  <div class="box-2">Вверх и влево</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры смещения элементов с помощью top, right, bottom, left */

    /* Первый элемент смещён вправо и вниз */
    .box-1 {
      position: relative;
      top: 20px;
      right: 30px;
      background-color: #d1ecf1;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }

    /* Второй элемент смещён влево и вверх */
    .box-2 {
      position: relative;
      bottom: 15px;
      left: 25px;
      background-color: #f8d7da;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/top",
    "https://developer.mozilla.org/ru/docs/Web/CSS/right",
    "https://developer.mozilla.org/ru/docs/Web/CSS/left",
    "https://developer.mozilla.org/ru/docs/Web/CSS/bottom",
  ],
};
export const css_box_model_task_5 = {
  id: "css_box_model_task_5",
  module: "CSS",
  title: "Смещение блоков в разные стороны",
  topic: "Смещение элементов",
  topicId: "css_box_model",
  sectionId: "css_box_model3",
  description:
    "Создайте HTML-документ с четырьмя блоками. Каждый блок должен быть смещён в разные стороны относительно своей позиции: вверх, вниз, влево и вправо. Поймите, как работает смещение top, right, bottom, left.",
  steps: [
    "Создайте HTML-документ с четырьмя `<div>` элементами.",
    "Примените к первому элементу класс `.move-down` и задайте ему `position: relative`, `top: 20px`.",
    "Для второго элемента используйте класс `.move-up` с `position: relative`, `bottom: 20px`.",
    "Для третьего элемента примените класс `.move-right` с `position: relative`, `left: 20px`.",
    "Для четвёртого элемента используйте класс `.move-left` с `position: relative`, `right: 20px`.",
    "Проверьте, что все элементы сместились в нужные стороны.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Смещение блоков</title>
</head>
<body>
  <div class="move-down">Вниз (top: 20px)</div>
  <div class="move-up">Вверх (bottom: 20px)</div>
  <div class="move-right">Вправо (left: 20px)</div>
  <div class="move-left">Влево (right: 20px)</div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Смещение блоков</title>
  <style>
    .move-down {
      position: relative;
      top: 20px;
      width: 150px;
      height: 50px;
      background-color: #d1ecf1;
    }

    .move-up {
      position: relative;
      bottom: 20px;
      width: 150px;
      height: 50px;
      background-color: #f8d7da;
    }

    .move-right {
      position: relative;
      left: 20px;
      width: 150px;
      height: 50px;
      background-color: #d4edda;
    }

    .move-left {
      position: relative;
      right: 20px;
      width: 150px;
      height: 50px;
      background-color: #fce9d1;
    }
  </style>
</head>
<body>

  <div class="move-down">Вниз (top: 20px)</div>
  <div class="move-up">Вверх (bottom: 20px)</div>
  <div class="move-right">Вправо (left: 20px)</div>
  <div class="move-left">Влево (right: 20px)</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Смещение вниз */
    .move-down {
      position: relative;
      top: 20px;
      width: 150px;
      height: 50px;
      background-color: #d1ecf1;
    }

    /* Смещение вверх */
    .move-up {
      position: relative;
      bottom: 20px;
      width: 150px;
      height: 50px;
      background-color: #f8d7da;
    }

    /* Смещение вправо */
    .move-right {
      position: relative;
      left: 20px;
      width: 150px;
      height: 50px;
      background-color: #d4edda;
    }

    /* Смещение влево */
    .move-left {
      position: relative;
      right: 20px;
      width: 150px;
      height: 50px;
      background-color: #fce9d1;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/top",
    "https://developer.mozilla.org/ru/docs/Web/CSS/left",
    "https://developer.mozilla.org/ru/docs/Web/CSS/right",
    "https://developer.mozilla.org/ru/docs/Web/CSS/bottom",
  ],
};
export const css_box_model_task_6 = {
  id: "css_box_model_task_6",
  module: "CSS",
  title: "Карточки с абсолютным смещением",
  topic: "Смещение элементов",
  topicId: "css_box_model",
  sectionId: "css_box_model3",
  description:
    "Создайте HTML-документ с четырьмя карточками, расположенными в разных углах контейнера. Примените position: absolute и свойства top, right, bottom, left.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и четырьмя вложенными элементами.",
    "Для контейнера установите позиционирование `position: relative` и задайте фиксированные размеры.",
    "Примените к вложенным элементам абсолютное позиционирование: `.top-left`, `.top-right`, `.bottom-left`, `.bottom-right`.",
    "Используйте свойства `top`, `right`, `bottom`, `left` для расположения элементов по углам.",
    "Проверьте, что все карточки корректно располагаются в своих позициях.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Карточки с абсолютным смещением</title>
</head>
<body>
  <div class="container">
    <div class="top-left">Сверху слева</div>
    <div class="top-right">Сверху справа</div>
    <div class="bottom-left">Снизу слева</div>
    <div class="bottom-right">Снизу справа</div>
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
  <title>Карточки с абсолютным смещением</title>
  <style>
    .container {
      position: relative;
      width: 400px;
      height: 200px;
      background-color: #f1f1f1;
    }

    .top-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 50px;
      background-color: #d1ecf1;
    }

    .top-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 50px;
      background-color: #f8d7da;
    }

    .bottom-left {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 50px;
      background-color: #d4edda;
    }

    .bottom-right {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100px;
      height: 50px;
      background-color: #fce9d1;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="top-left">Сверху слева</div>
    <div class="top-right">Сверху справа</div>
    <div class="bottom-left">Снизу слева</div>
    <div class="bottom-right">Снизу справа</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Контейнер, относительно которого располагаются элементы */
    .container {
      position: relative;
      width: 400px;
      height: 200px;
      background-color: #f1f1f1;
    }

    /* Левый верхний угол */
    .top-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 50px;
      background-color: #d1ecf1;
    }

    /* Правый верхний угол */
    .top-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 50px;
      background-color: #f8d7da;
    }

    /* Левый нижний угол */
    .bottom-left {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 50px;
      background-color: #d4edda;
    }

    /* Правый нижний угол */
    .bottom-right {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100px;
      height: 50px;
      background-color: #fce9d1;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/top",
    "https://developer.mozilla.org/ru/docs/Web/CSS/left",
    "https://developer.mozilla.org/ru/docs/Web/CSS/right",
    "https://developer.mozilla.org/ru/docs/Web/CSS/bottom",
  ],
};
export const css_offset_task_1 = {
  id: "css_offset_task_1",
  module: "CSS",
  title: "Смещение с использованием margin и padding",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ с элементами, которые смещены с помощью margin и padding.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте первому блоку внешние отступы (`margin`) и внутренние отступы (`padding`)",
    "Задайте второму блоку только внутренние отступы",
    "Настройте цвет фона, границы и отступы для обоих блоков",
    "Проверьте, как отображаются отступы на странице",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Смещение с использованием margin и padding</title>
</head>
<body>

  <div class="block-with-margin">
    Блок с внешними (margin) и внутренними (padding) отступами.
  </div>

  <div class="block-with-padding">
    Блок только с внутренними отступами (padding).
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
  <title>Смещение с использованием margin и padding</title>
  <style>
    .block-with-margin {
      margin: 20px;
      padding: 15px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    .block-with-padding {
      padding: 20px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="block-with-margin">
    Блок с внешними (margin) и внутренними (padding) отступами.
  </div>

  <div class="block-with-padding">
    Блок только с внутренними отступами (padding).
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Смещение с использованием margin и padding */
    .block-with-margin {
      margin: 20px;
      padding: 15px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    .block-with-padding {
      padding: 20px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
  ],
};
export const css_offset_task_2 = {
  id: "css_offset_task_2",
  module: "CSS",
  title: "Смещение с использованием margin auto и центрирование",
  topic: "Смещение элементов",
  topicId: "css_offset",
  sectionId: "css_offset1",
  description:
    "Создайте HTML-документ с блоком, который автоматически центрируется на странице с использованием margin: auto.",
  steps: [
    "Создайте HTML-документ с одним `<div>`",
    "Задайте блоку фиксированную ширину и высоту",
    "Настройте `margin: auto` для центрирования блока",
    "Примените цвет фона и границы",
    "Проверьте, что блок выровнен по центру страницы",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Центрирование с помощью margin auto</title>
</head>
<body>

  <div class="centered-block">
    Этот блок отцентрирован по горизонтали.
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
  <title>Центрирование с помощью margin auto</title>
  <style>
    .centered-block {
      width: 300px;
      height: 200px;
      margin: 50px auto;
      background-color: lightgreen;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="centered-block">
    Этот блок отцентрирован по горизонтали.
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Центрирование с использованием margin auto */
    .centered-block {
      width: 300px;
      height: 200px;
      margin: 50px auto;
      background-color: lightgreen;
      border: 2px solid #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/centering_block_elements",
  ],
};
export const css_offset_task_3 = {
  id: "css_offset_task_3",
  module: "CSS",
  title: "Абсолютное смещение элементов",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ, в котором элементы позиционируются с использованием position: absolute.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и тремя вложенными блоками",
    "Задайте контейнеру `position: relative`",
    "Настройте для вложенных блоков `position: absolute`",
    "Примените разные значения для `top`, `left`, `right` и `bottom`",
    "Проверьте, что блоки корректно отображаются относительно контейнера",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Абсолютное смещение элементов</title>
</head>
<body>

  <div class="relative-container">
    <div class="box-top-left">Слева сверху</div>
    <div class="box-bottom-right">Справа снизу</div>
    <div class="box-center">По центру</div>
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
  <title>Абсолютное смещение элементов</title>
  <style>
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .box-top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
    }

    .box-bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }

    .box-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>

  <div class="relative-container">
    <div class="box-top-left">Слева сверху</div>
    <div class="box-bottom-right">Справа снизу</div>
    <div class="box-center">По центру</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Абсолютное смещение элементов */
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .box-top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
    }

    .box-bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }

    .box-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_offset_task_4 = {
  id: "css_offset_task_4",
  module: "CSS",
  title: "Фиксированное смещение элементов",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ, в котором элемент остаётся зафиксированным при прокрутке страницы, используя position: fixed.",
  steps: [
    "Создайте HTML-документ с длинным контентом для появления вертикальной прокрутки",
    "Добавьте в документ элемент `<div>`, который будет фиксирован в левом нижнем углу",
    "Задайте ему стиль с использованием `position: fixed`",
    "Настройте цвет фона, ширину, высоту и внутренние отступы",
    "Проверьте, что элемент остаётся на месте при прокрутке страницы",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Фиксированное смещение элемента</title>
</head>
<body>

  <div class="content">
    <p>Прокручивай страницу вниз, чтобы увидеть фиксированный блок в левом нижнем углу.</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
  </div>

  <div class="fixed-block">
    Я всегда на месте!
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
  <title>Фиксированное смещение элемента</title>
  <style>
    /* Контейнер с большим контентом */
    .content {
      height: 1500px;
      background-color: #f3f3f3;
      padding: 20px;
    }

    /* Фиксированный блок в левом нижнем углу */
    .fixed-block {
      position: fixed;
      left: 20px;
      bottom: 20px;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      color: white;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    }
  </style>
</head>
<body>

  <div class="content">
    <p>Прокручивай страницу вниз, чтобы увидеть фиксированный блок в левом нижнем углу.</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
  </div>

  <div class="fixed-block">
    Я всегда на месте!
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Фиксированный блок в левом нижнем углу */
    .content {
      height: 1500px;
      background-color: #f3f3f3;
      padding: 20px;
    }

    /* Фиксированный блок в левом нижнем углу */
    .fixed-block {
      position: fixed;
      left: 20px;
      bottom: 20px;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      color: white;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_offset_task_5 = {
  id: "css_offset_task_5",
  module: "CSS",
  title: "Модальное окно с фиксированной позицией и затемнением фона",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ с модальным окном, которое появляется по клику на кнопку. Реализуйте открытие и закрытие окна только с помощью CSS.",
  steps: [
    "Создайте HTML-документ с кнопкой 'Открыть модальное окно'",
    "Реализуйте модальное окно с фиксированной позицией (`position: fixed`)",
    "Настройте его открытие и закрытие через чекбокс и CSS",
    "Добавьте затемнение фона при открытии окна",
    "Настройте кнопку закрытия окна",
  ],
  difficulty: 5,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Модальное окно без JavaScript</title>
</head>
<body>

  <label for="modal-toggle">Открыть модальное окно</label>
  <input type="checkbox" id="modal-toggle">

  <div class="overlay"></div>

  <div class="modal">
    <h3>Модальное окно</h3>
    <p>Это пример модального окна с фиксированной позицией, открываемого без JavaScript.</p>
    <label for="modal-toggle" class="close-btn">Закрыть</label>
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
  <title>Модальное окно без JavaScript</title>
  <style>
    /* Скрытый чекбокс */
    #modal-toggle {
      display: none;
    }

    /* Стили для кнопки */
    label {
      padding: 10px 20px;
      background-color: #007acc;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      margin-top: 50px;
      display: inline-block;
    }

    /* Затемнение фона */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      z-index: 10;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Модальное окно */
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 20;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Чекбокс активен — показать окно и фон */
    #modal-toggle:checked + .overlay,
    #modal-toggle:checked + .overlay + .modal {
      opacity: 1;
      visibility: visible;
    }

    /* Кнопка закрытия */
    .close-btn {
      display: inline-block;
      margin-top: 10px;
      color: #e74c3c;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <label for="modal-toggle">Открыть модальное окно</label>
  <input type="checkbox" id="modal-toggle">

  <div class="overlay"></div>

  <div class="modal">
    <h3>Модальное окно</h3>
    <p>Это пример модального окна с фиксированной позицией, открываемого без JavaScript.</p>
    <label for="modal-toggle" class="close-btn">Закрыть</label>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Модальное окно с фиксированной позицией без JavaScript */
    /* Скрытый чекбокс */
    #modal-toggle {
      display: none;
    }

    /* Стили для кнопки */
    label {
      padding: 10px 20px;
      background-color: #007acc;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      margin-top: 50px;
      display: inline-block;
    }

    /* Затемнение фона */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      z-index: 10;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Модальное окно */
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 20;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Чекбокс активен — показать окно и фон */
    #modal-toggle:checked + .overlay,
    #modal-toggle:checked + .overlay + .modal {
      opacity: 1;
      visibility: visible;
    }

    /* Кнопка закрытия */
    .close-btn {
      display: inline-block;
      margin-top: 10px;
      color: #e74c3c;
      cursor: pointer;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};

// Слои, прокрутка и прозрачность
export const css_box_model_task_9 = {
  id: "css_box_model_task_9",
  module: "CSS",
  title: "Слои и прозрачность элементов",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_box_model",
  sectionId: "css_box_model5",
  description:
    "Создайте HTML-документ с тремя перекрывающимися блоками. Управляйте их наложением с помощью z-index и изменяйте прозрачность с помощью opacity.",
  steps: [
    "Создайте HTML-документ с тремя `<div>` элементами.",
    "Для всех элементов примените `position: absolute` и разные координаты `top`, `left`.",
    "Назначьте им разные уровни `z-index`: самый нижний — 1, средний — 2, верхний — 3.",
    "Используйте `opacity` для изменения прозрачности элементов.",
    "Проверьте, как перекрываются блоки и меняется их видимость.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Слои и прозрачность</title>
</head>
<body>
  <div class="container">
    <div class="layer1">Слой 1 (z-index: 1)</div>
    <div class="layer2">Слой 2 (z-index: 2, opacity: 0.8)</div>
    <div class="layer3">Слой 3 (z-index: 3, opacity: 0.5)</div>
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
  <title>Слои и прозрачность</title>
  <style>
    .container {
      position: relative;
      width: 400px;
      height: 250px;
      background-color: #f9f9f9;
    }

    .layer1 {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      background-color: #d1ecf1;
      z-index: 1;
      opacity: 1;
    }

    .layer2 {
      position: absolute;
      top: 40px;
      left: 40px;
      width: 150px;
      height: 150px;
      background-color: #f8d7da;
      z-index: 2;
      opacity: 0.8;
    }

    .layer3 {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 150px;
      height: 150px;
      background-color: #d4edda;
      z-index: 3;
      opacity: 0.5;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="layer1">Слой 1 (z-index: 1)</div>
    <div class="layer2">Слой 2 (z-index: 2, opacity: 0.8)</div>
    <div class="layer3">Слой 3 (z-index: 3, opacity: 0.5)</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Контейнер для абсолютного позиционирования */
    .container {
      position: relative;
      width: 400px;
      height: 250px;
      background-color: #f9f9f9;
    }

    /* Первый слой */
    .layer1 {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      background-color: #d1ecf1;
      z-index: 1;
      opacity: 1;
    }

    /* Второй слой */
    .layer2 {
      position: absolute;
      top: 40px;
      left: 40px;
      width: 150px;
      height: 150px;
      background-color: #f8d7da;
      z-index: 2;
      opacity: 0.8;
    }

    /* Третий слой */
    .layer3 {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 150px;
      height: 150px;
      background-color: #d4edda;
      z-index: 3;
      opacity: 0.5;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://developer.mozilla.org/ru/docs/Web/CSS/opacity",
    "https://html5book.ru/css-z-index-overflow-opacity/",
    "https://css-tricks.com/almanac/properties/o/opacity/",
  ],
};
export const css_box_model_task_10 = {
  id: "css_box_model_task_10",
  module: "CSS",
  title: "Прокручиваемый контейнер",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_box_model",
  sectionId: "css_box_model5",
  description:
    "Создайте HTML-документ с прокручиваемым контейнером. Настройте overflow для управления видимостью при переполнении. Добавьте элементы для проверки горизонтальной и вертикальной прокрутки.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и добавьте в него несколько блоков с текстом.",
    "Примените к контейнеру стиль `overflow: auto` для активации прокрутки при переполнении.",
    "Задайте фиксированную высоту и ширину контейнера.",
    "Для каждого вложенного элемента задайте разные цвета, чтобы было легко различать.",
    "Добавьте длинные блоки текста и проверьте работу вертикальной и горизонтальной прокрутки.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Прокручиваемый контейнер</title>
</head>
<body>

  <div class="scroll-container">
    <div class="block1">
      Контент #1
    </div>
    <div class="block2">
      Контент #2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </div>
    <div class="block3">
      Контент #3
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
  <title>Прокручиваемый контейнер</title>
  <style>
    .scroll-container {
      width: 300px;
      height: 200px;
      overflow: auto;
      border: 2px solid #3498db;
      background-color: #f9f9f9;
    }

    .block1 {
      width: 350px;
      height: 100px;
      background-color: #d1ecf1;
      color: #333;
    }

    .block2 {
      width: 350px;
      height: 100px;
      background-color: #f8d7da;
      color: #333;
    }

    .block3 {
      width: 350px;
      height: 100px;
      background-color: #d4edda;
      color: #333;
    }
  </style>
</head>
<body>

  <div class="scroll-container">
    <div class="block1">
      Контент #1
    </div>
    <div class="block2">
      Контент #2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </div>
    <div class="block3">
      Контент #3
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Контейнер с overflow */
.scroll-container {
  width: 300px;
  height: 200px;
  overflow: auto;
  border: 2px solid #3498db;
  background-color: #f9f9f9;
}

/* Элементы внутри контейнера */
.block1 {
  width: 350px;
  height: 100px;
  background-color: #d1ecf1;
  color: #333;
}

.block2 {
  width: 350px;
  height: 100px;
  background-color: #f8d7da;
  color: #333;
}

.block3 {
  width: 350px;
  height: 100px;
  background-color: #d4edda;
  color: #333;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/overflow",
    "https://html5book.ru/css-overflow/",
    "https://css-tricks.com/almanac/properties/o/overflow/",
  ],
};
export const css_layers_task_1 = {
  id: "css_layers_task_1",
  module: "CSS",
  title: "Прозрачность элементов с использованием opacity",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers1",
  description:
    "Создайте HTML-документ, в котором элементы имеют разные уровни прозрачности, используя свойство opacity.",
  steps: [
    "Создайте HTML-документ с тремя блоками (`<div>`)",
    "Настройте для каждого блока разные значения `opacity`: `1`, `0.7`, `0.4`",
    "Настройте стили: цвет фона, границы, размеры",
    "Проверьте, как меняется видимость блоков",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Прозрачность элементов</title>
</head>
<body>

  <div class="full-opacity">
    Прозрачность 1.0
  </div>

  <div class="medium-opacity">
    Прозрачность 0.7
  </div>

  <div class="low-opacity">
    Прозрачность 0.4
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
  <title>Прозрачность элементов</title>
  <style>
    .full-opacity {
      opacity: 1;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    .medium-opacity {
      opacity: 0.7;
      width: 200px;
      height: 100px;
      background-color: lightgreen;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    .low-opacity {
      opacity: 0.4;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
      text-align: center;
      line-height: 100px;
    }
  </style>
</head>
<body>

  <div class="full-opacity">
    Прозрачность 1.0
  </div>

  <div class="medium-opacity">
    Прозрачность 0.7
  </div>

  <div class="low-opacity">
    Прозрачность 0.4
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Прозрачность элементов */
    .full-opacity {
      opacity: 1;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    .medium-opacity {
      opacity: 0.7;
      width: 200px;
      height: 100px;
      background-color: lightgreen;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    .low-opacity {
      opacity: 0.4;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
      text-align: center;
      line-height: 100px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/opacity",
    "https://html5book.ru/css-opacity/",
  ],
};
export const css_layers_task_2 = {
  id: "css_layers_task_2",
  module: "CSS",
  title: "Плавная прокрутка к якорям на странице",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers1",
  description:
    "Создайте HTML-документ с меню навигации, при клике на элементы которого происходит плавная прокрутка к соответствующим разделам на странице.",
  steps: [
    "Создайте HTML-документ с меню навигации и тремя разделами (`<section>`)",
    "Настройте плавную прокрутку с помощью CSS",
    'Свяжите элементы меню с якорями (`<a href="#section1">`)',
    "Настройте стили для меню и разделов",
    "Проверьте, что при нажатии на меню страница плавно прокручивается",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Плавная прокрутка к якорям</title>
</head>
<body>

  <nav>
    <a href="#section1">Раздел 1</a>
    <a href="#section2">Раздел 2</a>
    <a href="#section3">Раздел 3</a>
  </nav>

  <section id="section1">
    <h2>Раздел 1</h2>
    <p>Это содержимое первого раздела.</p>
  </section>

  <section id="section2">
    <h2>Раздел 2</h2>
    <p>Это содержимое второго раздела.</p>
  </section>

  <section id="section3">
    <h2>Раздел 3</h2>
    <p>Это содержимое третьего раздела.</p>
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Плавная прокрутка к якорям</title>
  <style>
    html {
      scroll-behavior: smooth;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background-color: #333;
      padding: 20px;
    }

    nav a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
    }

    nav a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    section {
      margin-left: 220px;
      padding: 40px;
      height: 600px;
      border-bottom: 1px solid #ccc;
    }

    section:nth-child(1) {
      background-color: lightblue;
    }

    section:nth-child(2) {
      background-color: lightgreen;
    }

    section:nth-child(3) {
      background-color: lightcoral;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#section1">Раздел 1</a>
    <a href="#section2">Раздел 2</a>
    <a href="#section3">Раздел 3</a>
  </nav>

  <section id="section1">
    <h2>Раздел 1</h2>
    <p>Это содержимое первого раздела.</p>
  </section>

  <section id="section2">
    <h2>Раздел 2</h2>
    <p>Это содержимое второго раздела.</p>
  </section>

  <section id="section3">
    <h2>Раздел 3</h2>
    <p>Это содержимое третьего раздела.</p>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Плавная прокрутка */
    html {
      scroll-behavior: smooth;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background-color: #333;
      padding: 20px;
    }

    nav a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
    }

    nav a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    section {
      margin-left: 220px;
      padding: 40px;
      height: 600px;
      border-bottom: 1px solid #ccc;
    }

    section:nth-child(1) {
      background-color: lightblue;
    }

    section:nth-child(2) {
      background-color: lightgreen;
    }

    section:nth-child(3) {
      background-color: lightcoral;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/scroll-behavior",
    "https://html5book.ru/anchors-and-links/",
  ],
};
export const css_layers_task_3 = {
  id: "css_layers_task_3",
  module: "CSS",
  title: "Эффект параллакса на фоне страницы",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers2",
  description:
    "Создайте HTML-документ с фоновым изображением, которое прокручивается медленнее, чем основной контент, создавая эффект параллакса.",
  steps: [
    "Создайте HTML-документ с несколькими секциями (`<section>`)",
    "Настройте фон для одной из секций с эффектом параллакса",
    "Используйте CSS-свойство `background-attachment: fixed` для создания эффекта",
    "Проверьте, что при прокрутке фон медленно смещается, а контент двигается быстрее",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Эффект параллакса на фоне</title>
</head>
<body>

  <section class="content">
    <h2>Обычный блок 1</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

  <section class="parallax">
    <h2>Параллакс эффект</h2>
    <p>Фоновое изображение двигается медленнее при прокрутке.</p>
  </section>

  <section class="content">
    <h2>Обычный блок 2</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Эффект параллакса на фоне</title>
  <style>
    section {
      height: 500px;
      padding: 20px;
      color: white;
      text-align: center;
    }

    .parallax {
      background-image: url('https://life-trip.ru/wp-content/uploads/2018/06/lanta-klong-nin.jpg');
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    .content {
      background-color: #007acc;
    }
  </style>
</head>
<body>

  <section class="content">
    <h2>Обычный блок 1</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

  <section class="parallax">
    <h2>Параллакс эффект</h2>
    <p>Фоновое изображение двигается медленнее при прокрутке.</p>
  </section>

  <section class="content">
    <h2>Обычный блок 2</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Параллакс эффект на фоне */
    section {
      height: 500px;
      padding: 20px;
      color: white;
      text-align: center;
    }

    .parallax {
      background-image: url('https://life-trip.ru/wp-content/uploads/2018/06/lanta-klong-nin.jpg');
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    .content {
      background-color: #007acc;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-attachment",
    "https://html5book.ru/parallax-css/",
  ],
};
export const css_layers_task_4 = {
  id: "css_layers_task_4",
  module: "CSS",
  title: "Прокрутка горизонтальных элементов",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers2",
  description:
    "Создайте HTML-документ с горизонтальной лентой элементов, которую можно прокручивать вправо и влево, только с использованием CSS.",
  steps: [
    "Создайте HTML-документ с контейнером и элементами внутри него",
    "Реализуйте горизонтальную прокрутку только на CSS",
    "Настройте стили для контейнера и элементов",
    "Проверьте, что элементы можно прокручивать вправо и влево",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Горизонтальная прокрутка на CSS</title>
</head>
<body>

  <div class="scroll-container">
    <div class="scroll-item">Элемент 1</div>
    <div class="scroll-item">Элемент 2</div>
    <div class="scroll-item">Элемент 3</div>
    <div class="scroll-item">Элемент 4</div>
    <div class="scroll-item">Элемент 5</div>
    <div class="scroll-item">Элемент 6</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
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
  <title>Горизонтальная прокрутка на CSS</title>
  <style>
    .scroll-container {
      display: inline-block;
      white-space: nowrap;
      border: 2px solid #333;
      overflow-x: scroll;
      width: 100%;
      height: 200px;
      scroll-behavior: smooth;
    }

    .scroll-item {
      display: inline-block;
      width: 250px;
      height: 150px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 150px;
      border: 1px solid #333;
    }

    .scroll-container::-webkit-scrollbar {
      height: 8px;
    }
    
    .scroll-container::-webkit-scrollbar-thumb {
      background-color: #007acc;
      border-radius: 4px;
    }
    
    .scroll-container::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  </style>
</head>
<body>

   <div class="scroll-container">
    <div class="scroll-item">Элемент 1</div>
    <div class="scroll-item">Элемент 2</div>
    <div class="scroll-item">Элемент 3</div>
    <div class="scroll-item">Элемент 4</div>
    <div class="scroll-item">Элемент 5</div>
    <div class="scroll-item">Элемент 6</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Горизонтальная прокрутка элементов без JS */
.scroll-container {
  display: inline-block;
  white-space: nowrap;
  border: 2px solid #333;
  overflow-x: scroll;
  width: 100%;
  height: 200px;
  scroll-behavior: smooth;
}

.scroll-item {
  display: inline-block;
  width: 250px;
  height: 150px;
  margin-right: 10px;
  background-color: lightblue;
  text-align: center;
  line-height: 150px;
  border: 1px solid #333;
}

/* Стилизация скроллбара */
.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #007acc;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/white-space",
    "https://html5book.ru/css-scrolling/",
  ],
};
export const css_layers_task_5 = {
  id: "css_layers_task_5",
  module: "CSS",
  title: "Многоуровневое перекрытие слоев с прозрачностью",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers3",
  description:
    "Создайте HTML-документ с несколькими слоями, которые накладываются друг на друга с эффектом полупрозрачности.",
  steps: [
    "Создайте HTML-документ с контейнером и тремя слоями внутри него",
    "Настройте каждый слой с разными уровнями прозрачности (`opacity`)",
    "Используйте `position: absolute` и `z-index` для управления наложением",
    "Настройте стили для контейнера и каждого слоя",
    "Проверьте, что слои накладываются друг на друга, сохраняя полупрозрачность",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Многоуровневое перекрытие слоев</title>
</head>
<body>

  <div class="layer-container">
    <div class="layer-1">
      <p>Слой 1 (lightblue, z-index: 1)</p>
    </div>
    <div class="layer-2">
      <p>Слой 2 (lightgreen, z-index: 2)</p>
    </div>
    <div class="layer-3">
      <p>Слой 3 (lightcoral, z-index: 3)</p>
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
  <title>Многоуровневое перекрытие слоев</title>
  <style>
    .layer-container {
      position: relative;
      width: 600px;
      height: 400px;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: lightblue;
      opacity: 0.8;
      z-index: 1;
    }

    .layer-2 {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 100%;
      height: 100%;
      background-color: lightgreen;
      opacity: 0.6;
      z-index: 2;
    }

    .layer-3 {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 100%;
      height: 100%;
      background-color: lightcoral;
      opacity: 0.4;
      z-index: 3;
    }

    .layer-1 p, .layer-2 p, .layer-3 p {
      margin: 20px;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="layer-container">
    <div class="layer-1">
      <p>Слой 1 (lightblue, z-index: 1)</p>
    </div>
    <div class="layer-2">
      <p>Слой 2 (lightgreen, z-index: 2)</p>
    </div>
    <div class="layer-3">
      <p>Слой 3 (lightcoral, z-index: 3)</p>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Многоуровневое перекрытие слоев */
 .layer-container {
      position: relative;
      width: 600px;
      height: 400px;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: lightblue;
      opacity: 0.8;
      z-index: 1;
    }

    .layer-2 {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 100%;
      height: 100%;
      background-color: lightgreen;
      opacity: 0.6;
      z-index: 2;
    }

    .layer-3 {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 100%;
      height: 100%;
      background-color: lightcoral;
      opacity: 0.4;
      z-index: 3;
    }

    .layer-1 p, .layer-2 p, .layer-3 p {
      margin: 20px;
      color: white;
      font-weight: bold;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://html5book.ru/css-position/",
  ],
};
