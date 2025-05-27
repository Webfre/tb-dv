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
