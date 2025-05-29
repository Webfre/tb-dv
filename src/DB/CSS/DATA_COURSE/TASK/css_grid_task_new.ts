// Объявление грида: display: grid
export const css_grid_task_new = {
  id: "css_grid_task_1",
  module: "CSS",
  title: "Базовая сетка с CSS Grid",
  topic: "Объявление грида: display: grid",
  topicId: "css_grid",
  sectionId: "css_grid_1",
  description:
    "Создайте простую сетку 2×2 с помощью CSS Grid. Элементы должны равномерно распределиться по ячейкам.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='grid'>` и 4 элементами внутри",
    "Примените к контейнеру `display: grid` для создания грид-сетки",
    "Задайте 2 колонки равной ширины с помощью `grid-template-columns: 1fr 1fr`",
    "Задайте 2 строки фиксированной высоты с помощью `grid-template-rows: 100px 100px`",
    "Добавьте отступы между элементами с помощью `gap: 10px`",
    "Стилизуйте элементы для наглядности (фон, отступы, текст)",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">-
  <title>Базовая сетка с CSS Grid</title>
</head>
<body>

  <div class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
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
  <title>Базовая сетка с CSS Grid</title>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100px 100px;
      gap: 10px;
      padding: 15px;
      background-color: #f8f9fa;
    }

    .grid-item {
      background-color: #cfe2ff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <div class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Грид-контейнер */
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100px 100px;
      gap: 10px;
      padding: 15px;
      background-color: #f8f9fa;
    }

    /* Элементы сетки */
    .grid-item {
      background-color: #cfe2ff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "https://html5book.ru/css-grid/",
  ],
};
export const grid_task_1 = {
  id: "grid_task_1",
  module: "CSS",
  title: "Простая сетка 2x2",
  topic: "Объявление грида: display: grid",
  topicId: "css_grid",
  sectionId: "css_grid1",
  description:
    "Создайте простую грид-сетку 2x2 с использованием display: grid.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите 2 колонки шириной 200px каждая",
    "Определите 2 строки высотой 150px каждая",
    "Добавьте 4 элемента для заполнения сетки",
    "Добавьте отступы между элементами (gap: 10px)",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сетка 2x2</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
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
  <title>Сетка 2x2</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 200px;
      grid-template-rows: 150px 150px;
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 20px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: 200px 200px;
      grid-template-rows: 150px 150px;
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 20px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows",
  ],
};
export const grid_task_2 = {
  id: "grid_task_2",
  module: "CSS",
  title: "Адаптивная сетка с auto-fill",
  topic: "Объявление грида: display: grid",
  topicId: "css_grid",
  sectionId: "css_grid1",
  description:
    "Создайте адаптивную сетку, в которой элементы автоматически заполняют пространство с использованием auto-fill.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с auto-fill",
    "Настройте минимальную ширину ячейки — 150px",
    "Проверьте, как элементы переносятся при изменении ширины окна",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивная сетка</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
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
  <title>Адаптивная сетка</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 100px;
      font-size: 18px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 100px;
      font-size: 18px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/repeat",
  ],
};
export const grid_task_3 = {
  id: "grid_task_3",
  module: "CSS",
  title: "Grid с явным позиционированием элементов",
  topic: "Объявление грида: display: grid",
  topicId: "css_grid",
  sectionId: "css_grid1",
  description:
    "Создайте грид-сетку 3x3, в которой элементы позиционируются в явных местах с использованием grid-column и grid-row.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите 3 колонки и 3 строки",
    "Позиционируйте первый элемент на всю ширину первой строки",
    "Позиционируйте второй элемент в центр сетки",
    "Позиционируйте третий элемент на две ячейки по горизонтали",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Позиционирование в Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item item-1">Заголовок на всю ширину</div>
  <div class="grid-item item-2">Центральный блок</div>
  <div class="grid-item item-3">Растянутый блок внизу</div>
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
  <title>Позиционирование в Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100px 100px 100px;
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #ff9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 20px;
    }

    /* Явное позиционирование */
    .item-1 {
      grid-column: 1 / 4;
    }

    .item-2 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .item-3 {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item item-1">Заголовок на всю ширину</div>
  <div class="grid-item item-2">Центральный блок</div>
  <div class="grid-item item-3">Растянутый блок внизу</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100px 100px 100px;
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #ff9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 20px;
    }

    /* Явное позиционирование */
    .item-1 {
      grid-column: 1 / 4;
    }

    .item-2 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .item-3 {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-column",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-row",
  ],
};
export const grid_task_4 = {
  id: "grid_task_4",
  module: "CSS",
  title: "Сетка с именованными областями (grid-template-areas)",
  topic: "Объявление грида: display: grid",
  topicId: "css_grid",
  sectionId: "css_grid1",
  description:
    "Создайте грид-сетку с именованными областями: header, sidebar, main и footer. Реализуйте расположение с помощью grid-template-areas.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, sidebar, main и footer",
    "Header должен занимать всю первую строку",
    "Sidebar должен находиться слева, занимая две строки",
    "Main должен занимать оставшееся место",
    "Footer должен быть внизу на всю ширину",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сетка с именованными областями</title>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content Area</div>
  <div class="footer">Footer</div>
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
  <title>Сетка с именованными областями</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 100px 1fr 100px;
      grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
      gap: 10px;
      padding: 10px;
      height: 500px;
      background-color: #f9f9f9;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .main {
      grid-area: main;
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .footer {
      grid-area: footer;
      background-color: #ff5722;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content Area</div>
  <div class="footer">Footer</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 100px 1fr 100px;
      grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
      gap: 10px;
      padding: 10px;
      height: 500px;
      background-color: #f9f9f9;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .main {
      grid-area: main;
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .footer {
      grid-area: footer;
      background-color: #ff5722;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
  ],
};
export const grid_task_5 = {
  id: "grid_task_5",
  module: "CSS",
  title: "Сетка с формой на Grid",
  topic: "Объявление грида: display: grid",
  topicId: "css_grid",
  sectionId: "css_grid1",
  description:
    "Создайте грид-сетку, в которой расположена форма с элементами ввода, боковой панелью и кнопкой отправки.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, sidebar, form и footer",
    "Header должен занимать всю ширину первой строки",
    "Sidebar должен находиться слева от формы",
    "Форма должна занимать основное пространство",
    "Footer должен быть внизу формы с кнопкой отправки",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Форма на Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="header">Регистрационная форма</div>

  <div class="sidebar">
    <h3>Информация</h3>
    <p>Заполните все поля формы. Поле "Телефон" является обязательным.</p>
  </div>

  <form class="form">
    <input type="text" placeholder="ФИО">
    <input type="email" placeholder="Email">
    <input type="tel" placeholder="Телефон">
    <button>Отправить заявку</button>
  </form>

  <div class="footer">Все права защищены © 2025</div>
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
  <title>Форма на Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 80px 1fr 80px;
      grid-template-areas: 
        "header header"
        "sidebar form"
        "footer footer";
      gap: 10px;
      padding: 10px;
      height: 500px;
      background-color: #f9f9f9;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }

    .form {
      grid-area: form;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
    }

    .footer {
      grid-area: footer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2196f3;
      color: white;
      border-radius: 5px;
    }

    button {
      padding: 10px;
      background-color: #007acc;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">Регистрационная форма</div>

  <div class="sidebar">
    <h3>Информация</h3>
    <p>Заполните все поля формы. Поле "Телефон" является обязательным.</p>
  </div>

  <form class="form">
    <input type="text" placeholder="ФИО">
    <input type="email" placeholder="Email">
    <input type="tel" placeholder="Телефон">
    <button>Отправить заявку</button>
  </form>

  <div class="footer">Все права защищены © 2025</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 80px 1fr 80px;
      grid-template-areas: 
        "header header"
        "sidebar form"
        "footer footer";
      gap: 10px;
      padding: 10px;
      height: 500px;
      background-color: #f9f9f9;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }

    .form {
      grid-area: form;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
    }

    .footer {
      grid-area: footer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2196f3;
      color: white;
      border-radius: 5px;
    }

    button {
      padding: 10px;
      background-color: #007acc;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
  ],
};
//Колонки и ряды: grid-template-columns, grid-template-rows
export const css_grid_task_2 = {
  id: "css_grid_task_2",
  module: "CSS",
  title: "Настройка колонок и рядов в Grid",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid_2",
  description:
    "Создайте сетку с тремя колонками разной ширины и двумя рядами фиксированной высоты.",
  steps: [
    "Создайте контейнер с display: grid",
    "Задайте три колонки: 100px, 1fr и 2fr",
    "Установите две строки высотой 80px и 120px",
    "Добавьте 6 элементов для заполнения сетки",
    "Используйте gap: 15px для отступов",
    "Добавьте фоновые цвета для наглядности",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">-
  <title>Колонки и ряды в Grid</title>
</head>
<body>
  <div class="grid">
    <div class="item">1 (100px)</div>
    <div class="item">2 (1fr)</div>
    <div class="item">3 (2fr)</div>
    <div class="item">4 (80px)</div>
    <div class="item">5</div>
    <div class="item">6 (120px)</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Колонки и ряды в Grid</title>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 100px 1fr 2fr;
      grid-template-rows: 80px 120px;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    .item {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="item">1 (100px)</div>
    <div class="item">2 (1fr)</div>
    <div class="item">3 (2fr)</div>
    <div class="item">4 (80px)</div>
    <div class="item">5</div>
    <div class="item">6 (120px)</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid {
      display: grid;
      grid-template-columns: 100px 1fr 2fr;
      grid-template-rows: 80px 120px;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    .item {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows",
    "https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-columns-rows",
  ],
};
export const css_grid_task_3 = {
  id: "css_grid_task_3",
  module: "CSS",
  title: "Сетка с разными размерами колонок и строк",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid_2",
  description:
    "Создайте сетку с четырьмя колонками разной ширины и тремя строками фиксированной и автоматической высоты.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='grid'>` и 12 элементами внутри.",
    "Примените к контейнеру `display: grid` для создания грид-сетки.",
    "Задайте 4 колонки с ширинами: `100px`, `2fr`, `1fr`, `150px`.",
    "Задайте 3 строки с высотами: `50px`, `100px` и `auto`.",
    "Добавьте отступы между элементами с помощью `gap: 15px`.",
    "Стилизуйте элементы для наглядности (фон, отступы, текст).",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Сетка с разными размерами колонок и строк</title>
</head>
<body>

  <div class="grid">
    <div class="grid-item">1 (100px)</div>
    <div class="grid-item">2 (2fr)</div>
    <div class="grid-item">3 (1fr)</div>
    <div class="grid-item">4 (150px)</div>
    <div class="grid-item">5 (50px)</div>
    <div class="grid-item">6 (100px)</div>
    <div class="grid-item">7 (auto)</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
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
  <title>Сетка с разными размерами колонок и строк</title>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 100px 2fr 1fr 150px;
      grid-template-rows: 50px 100px auto;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    .grid-item {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <div class="grid">
    <div class="grid-item">1 (100px)</div>
    <div class="grid-item">2 (2fr)</div>
    <div class="grid-item">3 (1fr)</div>
    <div class="grid-item">4 (150px)</div>
    <div class="grid-item">5 (50px)</div>
    <div class="grid-item">6 (100px)</div>
    <div class="grid-item">7 (auto)</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Сетка */
    .grid {
      display: grid;
      grid-template-columns: 100px 2fr 1fr 150px;
      grid-template-rows: 50px 100px auto;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    /* Элементы сетки */
    .grid-item {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows",
    "https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-columns-rows",
  ],
};
export const css_grid_task_4 = {
  id: "css_grid_task_4",
  module: "CSS",
  title: "Продвинутая сетка с Grid: разные размеры колонок и строк",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid_2",
  description:
    "Создайте сетку с использованием Grid, в которой будут колонки разной ширины и строки с фиксированной и адаптивной высотой. Научитесь управлять размещением элементов внутри сетки.",
  steps: [
    "Создайте контейнер с `display: grid`.",
    "Настройте колонки с размерами: 150px, 2fr, 1fr, 200px.",
    "Задайте три строки: первая фиксированной высоты 100px, вторая — 150px, третья — авто-высоты (auto).",
    "Добавьте 8 элементов внутри сетки.",
    "Используйте `gap: 15px` для отступов между элементами.",
    "Примените фоновые цвета и стили к элементам, чтобы было видно их размещение.",
    "Расположите элементы в следующем порядке (используя grid-row и grid-column):",
    "- Элемент 1: первая строка, первая колонка",
    "- Элемент 2: первая строка, вторая колонка (растягивается на 2 колонки)",
    "- Элемент 3: вторая строка, первая колонка",
    "- Элемент 4: вторая строка, вторая колонка",
    "- Элемент 5: вторая строка, третья колонка",
    "- Элемент 6: третья строка, на все 4 колонки",
    "- Элемент 7 и 8: в третьей строке рядом друг с другом (2 и 2 колонки)",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Продвинутая сетка с Grid</title>
</head>
<body>

  <div class="grid">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
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
  <title>Продвинутая сетка с Grid</title>
  <style>
    /* Грид-контейнер */
    .grid {
      display: grid;
      grid-template-columns: 150px 2fr 1fr 200px;
      grid-template-rows: 100px 150px auto;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    /* Элементы сетки */
    .item {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
      height: 100%;
    }

    /* Позиционирование элементов */
    .item-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .item-2 {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
    }

    .item-3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .item-4 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .item-5 {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    .item-6 {
      grid-column: 1 / 5;
      grid-row: 3 / 4;
    }

    .item-7 {
      grid-column: 1 / 3;
      grid-row: 4 / 5;
    }

    .item-8 {
      grid-column: 3 / 5;
      grid-row: 4 / 5;
    }

    .item-1 { grid-column: 1 / 2; grid-row: 1 / 2; }
    .item-2 { grid-column: 2 / 4; grid-row: 1 / 2; }
    .item-3 { grid-column: 1 / 2; grid-row: 2 / 3; }
    .item-4 { grid-column: 2 / 3; grid-row: 2 / 3; }
    .item-5 { grid-column: 3 / 4; grid-row: 2 / 3; }
    .item-6 { grid-column: 1 / 5; grid-row: 3 / 4; }
    .item-7 { grid-column: 1 / 3; grid-row: 4 / 5; }
    .item-8 { grid-column: 3 / 5; grid-row: 4 / 5; }
  </style>
</head>
<body>

  <div class="grid">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Грид-контейнер */
    .grid {
      display: grid;
      grid-template-columns: 150px 2fr 1fr 200px;
      grid-template-rows: 100px 150px auto;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    /* Элементы сетки */
    .item {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
      height: 100%;
    }

    /* Позиционирование элементов */
    .item-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .item-2 {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
    }

    .item-3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .item-4 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .item-5 {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    .item-6 {
      grid-column: 1 / 5;
      grid-row: 3 / 4;
    }

    .item-7 {
      grid-column: 1 / 3;
      grid-row: 4 / 5;
    }

    .item-8 {
      grid-column: 3 / 5;
      grid-row: 4 / 5;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
  ],
};

export const grid_task_6 = {
  id: "grid_task_6",
  module: "CSS",
  title: "Базовая сетка с фиксированными размерами",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid2",
  description: "Создайте сетку 3x2 с фиксированными размерами колонок и строк.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите 3 колонки по 200px",
    "Определите 2 строки по 150px",
    "Добавьте 6 элементов в сетку",
    "Добавьте отступы между элементами (gap)",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Базовая сетка 3x2</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
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
  <title>Базовая сетка 3x2</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 200px 200px;
      grid-template-rows: 150px 150px;
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: 200px 200px 200px;
      grid-template-rows: 150px 150px;
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows",
    "https://html5book.ru/css-grid-layout/",
  ],
};
export const grid_task_7 = {
  id: "grid_task_7",
  module: "CSS",
  title: "Адаптивная сетка с использованием repeat и fr",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid2",
  description:
    "Создайте адаптивную сетку, которая изменяет количество колонок в зависимости от ширины экрана.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с repeat() и значением 1fr",
    "Добавьте несколько элементов для заполнения сетки",
    "Добавьте отступы между элементами (gap: 10px)",
    "Проверьте, как меняется количество колонок при изменении ширины окна",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивная сетка с repeat и fr</title>
</head>
<body>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
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
  <title>Адаптивная сетка с repeat и fr</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      height: 150px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      height: 150px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/repeat",
    "https://developer.mozilla.org/ru/docs/Web/CSS/fr_unit",
  ],
};
export const grid_task_8 = {
  id: "grid_task_8",
  module: "CSS",
  title: "Сетка с авто-заполнением и динамической высотой строк",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid2",
  description:
    "Создайте сетку с автоматическим заполнением пространства, где строки подстраиваются по высоте к содержимому.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с repeat() и 1fr",
    "Настройте grid-auto-rows для автоматической высоты строк",
    "Добавьте несколько элементов с разным содержимым",
    "Добавьте отступы между элементами (gap: 10px)",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Динамическая высота строк в Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Короткий текст</div>
  <div class="grid-item">Длинный текст. Он занимает больше места, поэтому его высота больше.</div>
  <div class="grid-item">Ещё текст</div>
  <div class="grid-item">Ещё один блок с очень длинным содержимым, чтобы проверить адаптацию высоты!</div>
  <div class="grid-item">Маленький текст</div>
  <div class="grid-item">Текст средней длины</div>
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
  <title>Динамическая высота строк в Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: min-content;
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #ff5722;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      padding: 15px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Короткий текст</div>
  <div class="grid-item">Длинный текст. Он занимает больше места, поэтому его высота больше.</div>
  <div class="grid-item">Ещё текст</div>
  <div class="grid-item">Ещё один блок с очень длинным содержимым, чтобы проверить адаптацию высоты!</div>
  <div class="grid-item">Маленький текст</div>
  <div class="grid-item">Текст средней длины</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: min-content;
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #ff5722;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      padding: 15px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-rows",
    "https://developer.mozilla.org/ru/docs/Web/CSS/minmax",
  ],
};
export const grid_task_9 = {
  id: "grid_task_9",
  module: "CSS",
  title: "Карточки товаров в сетке с разными размерами ячеек",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid2",
  description:
    "Создайте сетку с карточками товаров, где некоторые элементы занимают больше места в сетке (две колонки или две строки).",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-columns с 4 колонками",
    "Некоторые элементы должны занимать больше места с помощью grid-column и grid-row",
    "Добавьте стилизацию для карточек",
    "Добавьте отступы между элементами (gap: 15px)",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Карточки товаров на Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item grid-item--wide">Карточка на 2 колонки</div>
  <div class="grid-item">Карточка 2</div>
  <div class="grid-item">Карточка 3</div>
  <div class="grid-item grid-item--tall">Карточка на 2 строки</div>
  <div class="grid-item">Карточка 5</div>
  <div class="grid-item">Карточка 6</div>
  <div class="grid-item grid-item--wide">Карточка на 2 колонки</div>
  <div class="grid-item">Карточка 8</div>
  <div class="grid-item">Карточка 9</div>
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
  <title>Карточки товаров на Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 200px;
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    /* Карточка на 2 колонки */
    .grid-item--wide {
      grid-column: span 2;
    }

    /* Карточка на 2 строки */
    .grid-item--tall {
      grid-row: span 2;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item grid-item--wide">Карточка на 2 колонки</div>
  <div class="grid-item">Карточка 2</div>
  <div class="grid-item">Карточка 3</div>
  <div class="grid-item grid-item--tall">Карточка на 2 строки</div>
  <div class="grid-item">Карточка 5</div>
  <div class="grid-item">Карточка 6</div>
  <div class="grid-item grid-item--wide">Карточка на 2 колонки</div>
  <div class="grid-item">Карточка 8</div>
  <div class="grid-item">Карточка 9</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
  padding: 20px;
  background-color: #f9f9f9;
}

.grid-item {
  background-color: #2196f3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 5px;
}

/* Карточка на 2 колонки */
.grid-item--wide {
  grid-column: span 2;
}

/* Карточка на 2 строки */
.grid-item--tall {
  grid-row: span 2;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-column",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-row",
    "https://html5book.ru/css-grid-layout/",
  ],
};
export const grid_task_10 = {
  id: "grid_task_10",
  module: "CSS",
  title: "Мини-дашборд на Grid с областями",
  topic: "Колонки и ряды: grid-template-columns, grid-template-rows",
  topicId: "css_grid",
  sectionId: "css_grid2",
  description:
    "Создайте мини-дашборд с использованием grid-template-areas, включающий header, sidebar, main, info и footer.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, sidebar, main, info и footer",
    "Sidebar должен находиться слева",
    "Main должен занимать основное пространство",
    "Info должен быть справа от Main",
    "Footer должен быть внизу на всю ширину",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Мини-дашборд на Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="header">Заголовок дашборда</div>

  <div class="sidebar">
    <a href="#">Пункт меню 1</a>
    <a href="#">Пункт меню 2</a>
    <a href="#">Пункт меню 3</a>
    <a href="#">Пункт меню 4</a>
  </div>

  <div class="main">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
    <div class="card">Карточка 4</div>
    <div class="card">Карточка 5</div>
  </div>

  <div class="info">Дополнительная информация</div>

  <div class="footer">Все права защищены © 2025</div>
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
  <title>Мини-дашборд на Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr 300px;
      grid-template-rows: 80px 1fr 60px;
      grid-template-areas: 
        "header header header"
        "sidebar main info"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      min-height: 100vh;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;
    }

    .sidebar a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: #388E3C;
      text-align: center;
    }

    .main {
      grid-area: main;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
      background-color: white;
      border-radius: 5px;
      padding: 10px;
    }

    .main .card {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      border-radius: 5px;
    }

    .info {
      grid-area: info;
      background-color: #FF9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">Заголовок дашборда</div>

  <div class="sidebar">
    <a href="#">Пункт меню 1</a>
    <a href="#">Пункт меню 2</a>
    <a href="#">Пункт меню 3</a>
    <a href="#">Пункт меню 4</a>
  </div>

  <div class="main">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
    <div class="card">Карточка 4</div>
    <div class="card">Карточка 5</div>
  </div>

  <div class="info">Дополнительная информация</div>

  <div class="footer">Все права защищены © 2025</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
      .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr 300px;
      grid-template-rows: 80px 1fr 60px;
      grid-template-areas: 
        "header header header"
        "sidebar main info"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      min-height: 100vh;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;
    }

    .sidebar a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: #388E3C;
      text-align: center;
    }

    .main {
      grid-area: main;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
      background-color: white;
      border-radius: 5px;
      padding: 10px;
    }

    .main .card {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      border-radius: 5px;
    }

    .info {
      grid-area: info;
      background-color: #FF9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
  ],
};

// Автоматическое размещение: auto-fit и auto-fill
export const css_grid_task_5 = {
  id: "css_grid_task_5",
  module: "CSS",
  title: "Автоматическое размещение с auto-fit",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid_3",
  description:
    "Создайте адаптивную сетку с использованием auto-fit и minmax, чтобы элементы автоматически подстраивались под ширину экрана.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='grid'>` и несколькими элементами внутри.",
    "Примените к контейнеру `display: grid` и настройте колонки с помощью `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`",
    "Добавьте отступы между элементами с помощью `gap: 10px`",
    "Стилизуйте элементы для наглядности (фон, отступы, текст)",
    "Проверьте, как элементы автоматически перестраиваются при изменении ширины окна.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Автоматическое размещение с auto-fit</title>
</head>
<body>

  <div class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
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
  <title>Автоматическое размещение с auto-fit</title>
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      padding: 15px;
      background-color: #f8f9fa;
    }

    .grid-item {
      background-color: #cfe2ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      font-weight: bold;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <div class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  <style>
    /* Грид-контейнер */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      padding: 15px;
      background-color: #f8f9fa;
    }

    /* Элементы сетки */
    .grid-item {
      background-color: #cfe2ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      font-weight: bold;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fit",
    "https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",
    "https://html5book.ru/css-grid/",
  ],
};
export const css_grid_task_6 = {
  id: "css_grid_task_6",
  module: "CSS",
  title: "Карточная сетка с auto-fill",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid_3",
  description:
    "Создайте адаптивную карточную сетку с использованием CSS Grid. Карточки должны автоматически размещаться в сетке, заполняя доступное пространство. При изменении ширины окна количество карточек в строке меняется автоматически.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='card-grid'>`.",
    "Добавьте внутрь контейнера несколько элементов `<div class='card'>`, которые будут представлять карточки.",
    "Используйте `display: grid` на контейнере и настройте колонки с помощью `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));`",
    "Добавьте отступы между карточками с помощью `gap: 15px`.",
    "Проверьте, как карточки автоматически заполняют пространство при изменении ширины окна.",
    "Добавьте стили к карточкам, чтобы отображался заголовок и описание.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивная карточная сетка с CSS Grid</title>
</head>
<body>

  <div class="card-grid">
    <div class="card">
      <div class="card-title">Карточка 1</div>
      <div class="card-description">Описание для первой карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 2</div>
      <div class="card-description">Описание для второй карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 3</div>
      <div class="card-description">Описание для третьей карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 4</div>
      <div class="card-description">Описание для четвертой карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 5</div>
      <div class="card-description">Описание для пятой карточки</div>
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
  <title>Адаптивная карточная сетка с CSS Grid</title>
  <style>
    /* Карточная сетка */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
      padding: 15px;
      background-color: #f8f9fa;
    }

    /* Карточка */
    .card {
      background-color: #d1e7dd;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      text-align: center;
    }

    /* Заголовок карточки */
    .card-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    /* Описание карточки */
    .card-description {
      font-size: 14px;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="card-grid">
    <div class="card">
      <div class="card-title">Карточка 1</div>
      <div class="card-description">Описание для первой карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 2</div>
      <div class="card-description">Описание для второй карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 3</div>
      <div class="card-description">Описание для третьей карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 4</div>
      <div class="card-description">Описание для четвертой карточки</div>
    </div>
    <div class="card">
      <div class="card-title">Карточка 5</div>
      <div class="card-description">Описание для пятой карточки</div>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Карточная сетка */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
      padding: 15px;
      background-color: #f8f9fa;
    }

    /* Карточка */
    .card {
      background-color: #d1e7dd;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      text-align: center;
    }

    /* Заголовок карточки */
    .card-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    /* Описание карточки */
    .card-description {
      font-size: 14px;
      color: #555;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fill",
    "https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",
    "https://html5book.ru/css-grid/",
  ],
};
export const css_grid_task_7 = {
  id: "css_grid_task_7",
  module: "CSS",
  title: "Карточки товаров с использованием Grid",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid_3",
  description:
    "Создайте адаптивную сетку с карточками товаров. В каждой карточке должны быть: изображение (фон), название, цена, количество товара и описание. Сетка должна автоматически подстраиваться под ширину экрана.",
  steps: [
    "Создайте HTML-документ с контейнером `<div class='product-grid'>`.",
    "Добавьте внутрь контейнера несколько элементов `<div class='product-card'>`, представляющих товар.",
    "Используйте `display: grid` на контейнере и настройте колонки с помощью `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`",
    "Добавьте отступы между карточками с помощью `gap: 20px`.",
    "Внутри каждой карточки создайте блоки для фона, названия, цены, количества и описания.",
    "Стилизуйте элементы, чтобы они выглядели как карточки товаров.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Карточки товаров с Grid</title>
</head>
<body>

  <div class="product-grid">
    <div class="product-card">
      <div class="product-image"></div>
      <div class="product-info">
        <div class="product-title">Товар 1</div>
        <div class="product-price">1200 ₽</div>
        <div class="product-quantity">В наличии: 5 шт.</div>
        <div class="product-description">Отличный товар по доступной цене.</div>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image"></div>
      <div class="product-info">
        <div class="product-title">Товар 2</div>
        <div class="product-price">1800 ₽</div>
        <div class="product-quantity">В наличии: 2 шт.</div>
        <div class="product-description">Качественный и надежный продукт.</div>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image"></div>
      <div class="product-info">
        <div class="product-title">Товар 3</div>
        <div class="product-price">950 ₽</div>
        <div class="product-quantity">В наличии: 10 шт.</div>
        <div class="product-description">Популярный товар среди наших клиентов.</div>
      </div>
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
  <title>Карточки товаров с Grid</title>
  <style>
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
      gap: 20px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    .product-card {
      background-color: #ffffff;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .product-image {
      background-color: #cfe2ff;
      height: 150px;
    }

    .product-info {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .product-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .product-price {
      font-size: 16px;
      color: #28a745;
    }

    .product-quantity {
      font-size: 14px;
      color: #6c757d;
    }

    .product-description {
      font-size: 13px;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="product-grid">
    <div class="product-card">
      <div class="product-image"></div>
      <div class="product-info">
        <div class="product-title">Товар 1</div>
        <div class="product-price">1200 ₽</div>
        <div class="product-quantity">В наличии: 5 шт.</div>
        <div class="product-description">Отличный товар по доступной цене.</div>
      </div>
    </div>
    <div class="product-card">
      <div class="product-image"></div>
      <div class="product-info">
        <div class="product-title">Товар 2</div>
        <div class="product-price">1800 ₽</div>
        <div class="product-quantity">В наличии: 2 шт.</div>
        <div class="product-description">Качественный и надежный продукт.</div>
      </div>
    </div>
    <div class="product-card">
      <div class="product-image"></div>
      <div class="product-info">
        <div class="product-title">Товар 3</div>
        <div class="product-price">950 ₽</div>
        <div class="product-quantity">В наличии: 10 шт.</div>
        <div class="product-description">Популярный товар среди наших клиентов.</div>
      </div>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Сетка продуктов */
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
      gap: 20px;
      padding: 20px;
      background-color: #f8f9fa;
    }

    /* Карточка товара */
    .product-card {
      background-color: #ffffff;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Фон (изображение) товара */
    .product-image {
      background-color: #cfe2ff;
      height: 150px;
    }

    /* Информация о товаре */
    .product-info {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .product-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .product-price {
      font-size: 16px;
      color: #28a745;
    }

    .product-quantity {
      font-size: 14px;
      color: #6c757d;
    }

    .product-description {
      font-size: 13px;
      color: #555;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fill",
    "https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",
    "https://html5book.ru/css-grid/",
  ],
};
export const grid_task_11 = {
  id: "grid_task_11",
  module: "CSS",
  title: "Простая адаптивная сетка с auto-fill",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid3",
  description:
    "Создайте простую адаптивную сетку с использованием auto-fill, чтобы элементы автоматически переносились при изменении ширины окна.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с auto-fill",
    "Настройте минимальную ширину ячейки — 150px",
    "Проверьте, как элементы переносятся при изменении ширины окна",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивная сетка с auto-fill</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
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
  <title>Адаптивная сетка с auto-fill</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      height: 100px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
      .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      height: 100px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/repeat",
    "https://developer.mozilla.org/ru/docs/Web/CSS/minmax",
  ],
};
export const grid_task_12 = {
  id: "grid_task_12",
  module: "CSS",
  title: "Адаптивная сетка с auto-fit и гибким заполнением",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid3",
  description:
    "Создайте адаптивную сетку с auto-fit, которая автоматически заполняет пространство в строках и переносит элементы при нехватке места.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с auto-fit",
    "Настройте минимальную ширину ячейки — 200px, максимальную — 1fr",
    "Добавьте отступы между элементами (gap: 15px)",
    "Проверьте, как меняется структура при изменении ширины экрана",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивная сетка с auto-fit</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
  <div class="grid-item">Элемент 7</div>
  <div class="grid-item">Элемент 8</div>
  <div class="grid-item">Элемент 9</div>
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
  <title>Адаптивная сетка с auto-fit</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      height: 150px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
  <div class="grid-item">Элемент 7</div>
  <div class="grid-item">Элемент 8</div>
  <div class="grid-item">Элемент 9</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      border-radius: 5px;
      height: 150px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fit",
    "https://developer.mozilla.org/ru/docs/Web/CSS/minmax",
  ],
};
export const grid_task_13 = {
  id: "grid_task_13",
  module: "CSS",
  title: "Гибридная сетка с использованием auto-fill и auto-fit",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid3",
  description:
    "Создайте сетку, в которой одна часть заполняется с auto-fill, а вторая — с auto-fit. Изучите разницу в поведении элементов при изменении ширины.",
  steps: [
    "Создайте контейнер с display: grid",
    "Добавьте две секции: одна с auto-fill, другая с auto-fit",
    "Настройте grid-template-columns для каждой секции",
    "Проверьте, как элементы ведут себя при изменении ширины экрана",
    "Добавьте отступы между элементами (gap: 15px)",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Гибридная сетка с auto-fill и auto-fit</title>
</head>
<body>

<div class="grid-wrapper">
  <div>
    <div class="grid-title">Секция с auto-fill (заполняет даже пустое пространство)</div>
    <div class="grid-container auto-fill">
      <div class="grid-item">Элемент 1</div>
      <div class="grid-item">Элемент 2</div>
      <div class="grid-item">Элемент 3</div>
      <div class="grid-item">Элемент 4</div>
    </div>
  </div>

  <div>
    <div class="grid-title">Секция с auto-fit (растягивает и подстраивает элементы)</div>
    <div class="grid-container auto-fit">
      <div class="grid-item">Элемент 1</div>
      <div class="grid-item">Элемент 2</div>
      <div class="grid-item">Элемент 3</div>
      <div class="grid-item">Элемент 4</div>
    </div>
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
  <title>Гибридная сетка с auto-fill и auto-fit</title>
  <style>
    .grid-wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 20px;
    }

    .grid-title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .grid-container {
      display: grid;
      gap: 15px;
      background-color: #f9f9f9;
    }

    .auto-fill {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .auto-fit {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .grid-item {
      background-color: #ff9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      height: 120px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-wrapper">
  <div>
    <div class="grid-title">Секция с auto-fill (заполняет даже пустое пространство)</div>
    <div class="grid-container auto-fill">
      <div class="grid-item">Элемент 1</div>
      <div class="grid-item">Элемент 2</div>
      <div class="grid-item">Элемент 3</div>
      <div class="grid-item">Элемент 4</div>
    </div>
  </div>

  <div>
    <div class="grid-title">Секция с auto-fit (растягивает и подстраивает элементы)</div>
    <div class="grid-container auto-fit">
      <div class="grid-item">Элемент 1</div>
      <div class="grid-item">Элемент 2</div>
      <div class="grid-item">Элемент 3</div>
      <div class="grid-item">Элемент 4</div>
    </div>
  </div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
     .grid-wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 20px;
    }

    .grid-title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .grid-container {
      display: grid;
      gap: 15px;
      background-color: #f9f9f9;
    }

    .auto-fill {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .auto-fit {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .grid-item {
      background-color: #ff9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      height: 120px;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fill",
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fit",
    "https://developer.mozilla.org/ru/docs/Web/CSS/minmax",
  ],
};
export const grid_task_14 = {
  id: "grid_task_14",
  module: "CSS",
  title: "Сетка с grid-auto-flow и авто-заполнением",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid3",
  description:
    "Создайте сетку, в которой элементы автоматически заполняют ряды, а при нехватке места переносятся в колонки.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с auto-fill",
    "Настройте grid-auto-flow: dense для уплотнения элементов",
    "Добавьте несколько элементов в сетку",
    "Проверьте, как элементы перетекают в колонки при нехватке места",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сетка с grid-auto-flow</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item wide">Элемент 2 (2 колонки)</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item tall">Элемент 4 (2 строки)</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
  <div class="grid-item wide">Элемент 7 (2 колонки)</div>
  <div class="grid-item">Элемент 8</div>
  <div class="grid-item">Элемент 9</div>
  <div class="grid-item tall">Элемент 10 (2 строки)</div>
  <div class="grid-item">Элемент 11</div>
  <div class="grid-item">Элемент 12</div>
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
  <title>Сетка с grid-auto-flow</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: dense;
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      height: 150px;
      border-radius: 5px;
    }

    /* Некоторые элементы растягиваются на 2 колонки */
    .grid-item.wide {
      grid-column: span 2;
    }

    /* Некоторые элементы растягиваются на 2 строки */
    .grid-item.tall {
      grid-row: span 2;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item wide">Элемент 2 (2 колонки)</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item tall">Элемент 4 (2 строки)</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
  <div class="grid-item wide">Элемент 7 (2 колонки)</div>
  <div class="grid-item">Элемент 8</div>
  <div class="grid-item">Элемент 9</div>
  <div class="grid-item tall">Элемент 10 (2 строки)</div>
  <div class="grid-item">Элемент 11</div>
  <div class="grid-item">Элемент 12</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: dense;
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    .grid-item {
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      height: 150px;
      border-radius: 5px;
    }

    /* Некоторые элементы растягиваются на 2 колонки */
    .grid-item.wide {
      grid-column: span 2;
    }

    /* Некоторые элементы растягиваются на 2 строки */
    .grid-item.tall {
      grid-row: span 2;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-flow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-column",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-row",
  ],
};
export const grid_task_15 = {
  id: "grid_task_15",
  module: "CSS",
  title: "Интерактивная галерея на Grid с auto-fill и auto-fit (без картинок)",
  topic: "Автоматическое размещение: auto-fit и auto-fill",
  topicId: "css_grid",
  sectionId: "css_grid3",
  description:
    "Создайте адаптивную галерею элементов, где элементы автоматически заполняют пространство при помощи auto-fill и auto-fit. Внутри элементов цветной фон вместо изображений.",
  steps: [
    "Создайте контейнер с display: grid",
    "Используйте grid-template-columns с auto-fill и minmax",
    "Настройте фоновый цвет для каждого элемента",
    "Добавьте стилизацию: бордюры, тени, hover-эффект",
    "Проверьте, как изменяется галерея при уменьшении ширины окна",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Интерактивная галерея на Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
  <div class="grid-item">Элемент 7</div>
  <div class="grid-item">Элемент 8</div>
  <div class="grid-item">Элемент 9</div>
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
  <title>Интерактивная галерея на Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }

    .grid-item {
      background-color: #4CAF50;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      font-size: 18px;
      color: white;
    }

    .grid-item:nth-child(2n) {
      background-color: #2196F3;
    }

    .grid-item:nth-child(3n) {
      background-color: #FF5722;
    }

    .grid-item:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">Элемент 1</div>
  <div class="grid-item">Элемент 2</div>
  <div class="grid-item">Элемент 3</div>
  <div class="grid-item">Элемент 4</div>
  <div class="grid-item">Элемент 5</div>
  <div class="grid-item">Элемент 6</div>
  <div class="grid-item">Элемент 7</div>
  <div class="grid-item">Элемент 8</div>
  <div class="grid-item">Элемент 9</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
    }

    .grid-item {
      background-color: #4CAF50;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      font-size: 18px;
      color: white;
    }

    .grid-item:nth-child(2n) {
      background-color: #2196F3;
    }

    .grid-item:nth-child(3n) {
      background-color: #FF5722;
    }

    .grid-item:hover {
      transform: scale(1.05);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fill",
    "https://developer.mozilla.org/ru/docs/Web/CSS/auto-fit",
    "https://developer.mozilla.org/ru/docs/Web/CSS/minmax",
  ],
};

// Grid-area и именованные области
export const css_grid_task_8 = {
  id: "css_grid_task_8",
  module: "CSS",
  title: "Основы именованных областей в Grid",
  topic: "Grid-area и именованные области",
  topicId: "css_grid",
  sectionId: "css_grid_4",
  description:
    "Создайте простую структуру страницы с использованием именованных областей Grid. Включите хедер, сайдбар и основной контент.",
  steps: [
    "Создайте контейнер `<div class='grid'>` и добавьте в него три элемента: хедер, сайдбар и основной контент.",
    "Примените к контейнеру `display: grid` и настройте сетку из двух строк и двух колонок.",
    "Задайте именованные области с помощью `grid-template-areas` для удобного управления позиционированием.",
    "Добавьте классам `.header`, `.sidebar` и `.content` соответствующие области через `grid-area`.",
    "Стилизуйте элементы для наглядности.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Основы Grid-area</title>
</head>
<body>

  <div class="grid">
    <div class="header">Хедер</div>
    <div class="sidebar">Сайдбар</div>
    <div class="content">Основной контент</div>
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
  <title>Основы Grid-area</title>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "header header"
        "sidebar content";
      gap: 10px;
      background-color: #f8f9fa;
      padding: 10px;
    }

    .header {
      grid-area: header;
      background-color: #cce5ff;
      text-align: center;
      padding: 15px;
      font-weight: bold;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #d4edda;
      padding: 15px;
    }

    .content {
      grid-area: content;
      background-color: #f8d7da;
      padding: 15px;
    }
  </style>
</head>
<body>

  <div class="grid">
    <div class="header">Хедер</div>
    <div class="sidebar">Сайдбар</div>
    <div class="content">Основной контент</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Контейнер Grid */
    .grid {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "header header"
        "sidebar content";
      gap: 10px;
      background-color: #f8f9fa;
      padding: 10px;
    }

    /* Именованные области */
    .header {
      grid-area: header;
      background-color: #cce5ff;
      text-align: center;
      padding: 15px;
      font-weight: bold;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #d4edda;
      padding: 15px;
    }

    .content {
      grid-area: content;
      background-color: #f8d7da;
      padding: 15px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
    "https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-areas",
    "https://html5book.ru/css-grid/",
  ],
};
export const css_grid_task_9 = {
  id: "css_grid_task_9",
  module: "CSS",
  title: "Расширенное использование Grid-area",
  topic: "Grid-area и именованные области",
  topicId: "css_grid",
  sectionId: "css_grid_4",
  description:
    "Создайте сложную страницу с использованием именованных областей Grid. Включите хедер, навигацию, основной контент, сайдбар и футер. Настройте сетку так, чтобы навигация и сайдбар занимали свои места независимо от основного контента.",
  steps: [
    "Создайте контейнер `<div class='grid'>` и добавьте в него элементы: хедер, навигацию, основной контент, сайдбар и футер.",
    "Примените к контейнеру `display: grid` и настройте сетку из трех строк и трех колонок.",
    "Задайте именованные области с помощью `grid-template-areas` для удобного управления позиционированием.",
    "Хедер должен растягиваться на всю ширину (3 колонки), навигация слева, сайдбар справа, основной контент по центру и футер снизу.",
    "Стилизуйте элементы для наглядности.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Расширенное использование Grid-area</title>
</head>
<body>

  <div class="grid">
    <div class="header">Хедер</div>
    <div class="nav">Навигация</div>
    <div class="content">Основной контент</div>
    <div class="sidebar">Сайдбар</div>
    <div class="footer">Футер</div>
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
  <title>Расширенное использование Grid-area</title>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header header"
        "nav content sidebar"
        "footer footer footer";
      gap: 10px;
      background-color: #f8f9fa;
      height: 100vh;
      padding: 10px;
    }

    .header {
      grid-area: header;
      background-color: #cce5ff;
      text-align: center;
      padding: 15px;
      font-weight: bold;
    }

    .nav {
      grid-area: nav;
      background-color: #d1ecf1;
      padding: 15px;
    }

    .content {
      grid-area: content;
      background-color: #d4edda;
      padding: 15px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #f8d7da;
      padding: 15px;
    }

    .footer {
      grid-area: footer;
      background-color: #c3e6cb;
      text-align: center;
      padding: 15px;
    }
  </style>
</head>
<body>

  <div class="grid">
    <div class="header">Хедер</div>
    <div class="nav">Навигация</div>
    <div class="content">Основной контент</div>
    <div class="sidebar">Сайдбар</div>
    <div class="footer">Футер</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Контейнер Grid */
    .grid {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header header"
        "nav content sidebar"
        "footer footer footer";
      gap: 10px;
      background-color: #f8f9fa;
      height: 100vh;
      padding: 10px;
    }

    /* Именованные области */
    .header {
      grid-area: header;
      background-color: #cce5ff;
      text-align: center;
      padding: 15px;
      font-weight: bold;
    }

    .nav {
      grid-area: nav;
      background-color: #d1ecf1;
      padding: 15px;
    }

    .content {
      grid-area: content;
      background-color: #d4edda;
      padding: 15px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #f8d7da;
      padding: 15px;
    }

    .footer {
      grid-area: footer;
      background-color: #c3e6cb;
      text-align: center;
      padding: 15px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
    "https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-areas",
    "https://html5book.ru/css-grid/",
  ],
};
export const grid_task_16 = {
  id: "grid_task_16",
  module: "CSS",
  title: "Простая сетка с именованными областями",
  topic: "Grid-area и именованные области",
  topicId: "css_grid",
  sectionId: "css_grid4",
  description:
    "Создайте простую сетку с четырьмя областями: header, sidebar, main и footer. Используйте grid-area для именования областей.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, sidebar, main и footer",
    "Header должен занимать всю ширину первой строки",
    "Sidebar должен находиться слева",
    "Main должен занимать оставшееся пространство",
    "Footer должен быть внизу на всю ширину",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Простая сетка с именованными областями</title>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>

</body>
</html>
  `.trim(),
  show: `
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Простая сетка с именованными областями</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 70px 1fr 70px;
      grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 500px;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .main {
      grid-area: main;
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 70px 1fr 70px;
      grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 500px;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .main {
      grid-area: main;
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
  ],
};
export const grid_task_17 = {
  id: "grid_task_17",
  module: "CSS",
  title: "Расширенная сетка с именованными областями и навигацией",
  topic: "Grid-area и именованные области",
  topicId: "css_grid",
  sectionId: "css_grid4",
  description:
    "Создайте расширенную сетку с Header, Navigation, Sidebar, Main и Footer, используя grid-area.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, navigation, sidebar, main и footer",
    "Header должен занимать всю ширину первой строки",
    "Navigation должен находиться слева, Sidebar — справа",
    "Main должен занимать центральную часть",
    "Footer должен быть внизу на всю ширину",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Расширенная сетка с именованными областями</title>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>
  
  <div class="navigation">
    <a href="#">Главная</a>
    <a href="#">Новости</a>
    <a href="#">Контакты</a>
    <a href="#">О нас</a>
  </div>

  <div class="main">Основной контент</div>
  <div class="sidebar">Боковая панель</div>
  <div class="footer">Footer</div>
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
  <title>Расширенная сетка с именованными областями</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 150px 1fr 200px;
      grid-template-rows: 70px 1fr 70px;
      grid-template-areas: 
        "header header header"
        "navigation main sidebar"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 600px;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .navigation {
      grid-area: navigation;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .navigation a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: #388E3C;
      text-align: center;
    }

    .main {
      grid-area: main;
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #FF9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>
  
  <div class="navigation">
    <a href="#">Главная</a>
    <a href="#">Новости</a>
    <a href="#">Контакты</a>
    <a href="#">О нас</a>
  </div>

  <div class="main">Основной контент</div>
  <div class="sidebar">Боковая панель</div>
  <div class="footer">Footer</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   .grid-container {
      display: grid;
      grid-template-columns: 150px 1fr 200px;
      grid-template-rows: 70px 1fr 70px;
      grid-template-areas: 
        "header header header"
        "navigation main sidebar"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 600px;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .navigation {
      grid-area: navigation;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .navigation a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: #388E3C;
      text-align: center;
    }

    .main {
      grid-area: main;
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #FF9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
  ],
};
export const grid_task_18 = {
  id: "grid_task_18",
  module: "CSS",
  title: "Сетка с секциями и дополнительными блоками на Grid",
  topic: "Grid-area и именованные области",
  topicId: "css_grid",
  sectionId: "css_grid4",
  description:
    "Создайте сетку с Header, Sidebar, Content, Additional Info и Footer, используя grid-area. Внутри Content — несколько секций на Grid.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, sidebar, content, info и footer",
    "Header должен занимать всю ширину",
    "Sidebar должен находиться слева",
    "Content — центральная часть с вложенными секциями",
    "Additional Info — справа, Footer — внизу",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сетка с секциями и дополнительными блоками</title>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>

  <div class="sidebar">
    <a href="#">Пункт меню 1</a>
    <a href="#">Пункт меню 2</a>
    <a href="#">Пункт меню 3</a>
    <a href="#">Пункт меню 4</a>
  </div>

  <div class="content">
    <div class="content-section">Секция 1</div>
    <div class="content-section">Секция 2</div>
    <div class="content-section">Секция 3</div>
    <div class="content-section">Секция 4</div>
  </div>

  <div class="info">Дополнительная информация</div>

  <div class="footer">Footer</div>
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
  <title>Сетка с секциями и дополнительными блоками</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr 250px;
      grid-template-rows: 80px 1fr 60px;
      grid-template-areas: 
        "header header header"
        "sidebar content info"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 600px;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .content {
      grid-area: content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .content-section {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 150px;
    }

    .info {
      grid-area: info;
      background-color: #FF9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">Header</div>

  <div class="sidebar">
    <a href="#">Пункт меню 1</a>
    <a href="#">Пункт меню 2</a>
    <a href="#">Пункт меню 3</a>
    <a href="#">Пункт меню 4</a>
  </div>

  <div class="content">
    <div class="content-section">Секция 1</div>
    <div class="content-section">Секция 2</div>
    <div class="content-section">Секция 3</div>
    <div class="content-section">Секция 4</div>
  </div>

  <div class="info">Дополнительная информация</div>

  <div class="footer">Footer</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr 250px;
      grid-template-rows: 80px 1fr 60px;
      grid-template-areas: 
        "header header header"
        "sidebar content info"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 600px;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .content {
      grid-area: content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .content-section {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 150px;
    }

    .info {
      grid-area: info;
      background-color: #FF9800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
  ],
};
export const grid_task_19 = {
  id: "grid_task_19",
  module: "CSS",
  title: "Полноценный дашборд на Grid с динамическими секциями",
  topic: "Grid-area и именованные области",
  topicId: "css_grid",
  sectionId: "css_grid4",
  description:
    "Создайте полноценный дашборд с Header, Sidebar, Content, Stats и Footer, используя grid-area. Карточки внутри Content должны быть в формате Grid.",
  steps: [
    "Создайте контейнер с display: grid",
    "Определите grid-template-areas для header, sidebar, content, stats и footer",
    "Header должен занимать всю ширину",
    "Sidebar должен находиться слева, Stats — справа",
    "Content — центральная часть с карточками",
    "Footer должен быть внизу на всю ширину",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Дашборд на Grid</title>
</head>
<body>

<div class="grid-container">
  <div class="header">
    <h2>Панель управления</h2>
    <div>Профиль | Настройки</div>
  </div>

  <div class="sidebar">
    <a href="#">Панель управления</a>
    <a href="#">Аналитика</a>
    <a href="#">Отчёты</a>
    <a href="#">Пользователи</a>
  </div>

  <div class="content">
    <div class="content-card">Карточка 1</div>
    <div class="content-card">Карточка 2</div>
    <div class="content-card">Карточка 3</div>
    <div class="content-card">Карточка 4</div>
    <div class="content-card">Карточка 5</div>
    <div class="content-card">Карточка 6</div>
  </div>

  <div class="stats">
    <h3>Метрики</h3>
    <p>Пользователи: 1023</p>
    <p>Продажи: 178</p>
    <p>Задачи: 45</p>
  </div>

  <div class="footer">© 2025 Все права защищены</div>
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
  <title>Дашборд на Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 220px 1fr 220px;
      grid-template-rows: 70px 1fr 60px;
      grid-template-areas: 
        "header header header"
        "sidebar content stats"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 100vh;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      padding: 0 20px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .sidebar a {
      color: white;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 3px;
      background-color: #388E3C;
      text-align: center;
    }

    .content {
      grid-area: content;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      background-color: white;
      border-radius: 5px;
      padding: 10px;
    }

    .content-card {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 120px;
      transition: transform 0.3s;
    }

    .content-card:hover {
      transform: scale(1.05);
    }

    .stats {
      grid-area: stats;
      background-color: #FF9800;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 15px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="header">
    <h2>Панель управления</h2>
    <div>Профиль | Настройки</div>
  </div>

  <div class="sidebar">
    <a href="#">Панель управления</a>
    <a href="#">Аналитика</a>
    <a href="#">Отчёты</a>
    <a href="#">Пользователи</a>
  </div>

  <div class="content">
    <div class="content-card">Карточка 1</div>
    <div class="content-card">Карточка 2</div>
    <div class="content-card">Карточка 3</div>
    <div class="content-card">Карточка 4</div>
    <div class="content-card">Карточка 5</div>
    <div class="content-card">Карточка 6</div>
  </div>

  <div class="stats">
    <h3>Метрики</h3>
    <p>Пользователи: 1023</p>
    <p>Продажи: 178</p>
    <p>Задачи: 45</p>
  </div>

  <div class="footer">© 2025 Все права защищены</div>
</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
      .grid-container {
      display: grid;
      grid-template-columns: 220px 1fr 220px;
      grid-template-rows: 70px 1fr 60px;
      grid-template-areas: 
        "header header header"
        "sidebar content stats"
        "footer footer footer";
      gap: 15px;
      padding: 20px;
      background-color: #f9f9f9;
      height: 100vh;
    }

    .header {
      grid-area: header;
      background-color: #007acc;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      padding: 0 20px;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #4CAF50;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .sidebar a {
      color: white;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 3px;
      background-color: #388E3C;
      text-align: center;
    }

    .content {
      grid-area: content;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      background-color: white;
      border-radius: 5px;
      padding: 10px;
    }

    .content-card {
      background-color: #2196f3;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 120px;
      transition: transform 0.3s;
    }

    .content-card:hover {
      transform: scale(1.05);
    }

    .stats {
      grid-area: stats;
      background-color: #FF9800;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 15px;
    }

    .footer {
      grid-area: footer;
      background-color: #607D8B;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas",
    "https://html5book.ru/css-grid-layout/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
  ],
};

// Сравнение Flex и Grid
export const css_grid_task_10 = {
  id: "css_grid_task_10",
  module: "CSS",
  title: "Сравнение Flexbox и Grid на примере",
  topic: "Сравнение Flex и Grid",
  topicId: "css_grid",
  sectionId: "css_grid_5",
  description:
    "Создайте две одинаковые раскладки: одну с использованием Flexbox, а другую с помощью Grid. Покажите, как разные подходы влияют на структуру кода и отображение элементов.",
  steps: [
    "Создайте два контейнера на странице: один для Flexbox, второй для Grid.",
    "В Flexbox разместите три элемента в одну строку с равным распределением пространства.",
    "В Grid реализуйте аналогичную структуру с использованием 3 колонок одинаковой ширины.",
    "Добавьте фоновые цвета и отступы для наглядности.",
    "Сравните простоту написания кода и отображение на странице.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Сравнение Flexbox и Grid</title>
</head>
<body>

  <h2>Flexbox Layout (одномерная сетка)</h2>
  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>Grid Layout (двумерная сетка)</h2>
  <div class="grid-container">
    <div class="grid-item">Элемент 1</div>
    <div class="grid-item">Элемент 2</div>
    <div class="grid-item">Элемент 3</div>
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
  <title>Сравнение Flexbox и Grid</title>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 20px;
    }

    .flex-item {
      background-color: #cce5ff;
      flex: 1;
      text-align: center;
      padding: 20px;
      font-weight: bold;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
    }

    .grid-item {
      background-color: #d4edda;
      text-align: center;
      padding: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h2>Flexbox Layout (одномерная сетка)</h2>
  <div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
  </div>

  <h2>Grid Layout (двумерная сетка)</h2>
  <div class="grid-container">
    <div class="grid-item">Элемент 1</div>
    <div class="grid-item">Элемент 2</div>
    <div class="grid-item">Элемент 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   /* Flexbox Layout */
    .flex-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 20px;
    }

    .flex-item {
      background-color: #cce5ff;
      flex: 1;
      text-align: center;
      padding: 20px;
      font-weight: bold;
    }

    /* Grid Layout */
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
    }

    .grid-item {
      background-color: #d4edda;
      text-align: center;
      padding: 20px;
      font-weight: bold;
    }
  `.trim(),
  resources: [
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout",
  ],
};
export const css_grid_task_11 = {
  id: "css_grid_task_11",
  module: "CSS",
  title: "Масштабная задача с Grid",
  topic: "Итоги и закрепление Grid",
  topicId: "css_grid",
  sectionId: "css_grid_5",
  description:
    "Создайте главную страницу интернет-магазина с использованием CSS Grid. Страница должна включать: шапку, навигацию, карточки товаров, основной блок с информацией о продукции, рекламный блок и подвал.",
  steps: [
    "Создайте HTML-структуру с основными секциями: Header, Nav, Main, Aside, Products, Footer.",
    "Используйте Grid для создания раскладки страницы.",
    "В Header добавьте название магазина и меню навигации.",
    "В Aside разместите блок с рекламой.",
    "В Main добавьте блок с информацией о продукции.",
    "В Products создайте карточки товаров с названием, ценой и описанием.",
    "В Footer добавьте контакты и информацию о копирайте.",
    "Стилизуйте элементы для наглядности.",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Интернет-магазин на Grid</title>
</head>
<body>

  <div class="container">
    <header>
      <h1>Интернет-магазин "Эко Продукты"</h1>
    </header>

    <aside>
      <h3>Акции и предложения</h3>
      <p>Скидка 20% на все продукты до конца месяца!</p>
      <p>Бесплатная доставка при заказе от 50€.</p>
    </aside>

    <main>
      <h2>Популярные товары</h2>
      <div class="products">
       <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Орехи миндаль</h3>
          <p>Натуральные и свежие орехи высшего качества.</p>
          <p class="price">10€ / кг</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Сухофрукты ассорти</h3>
          <p>Смесь из кураги, изюма, чернослива и инжира.</p>
          <p class="price">12€ / кг</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Фундук очищенный</h3>
          <p>Полезный перекус для всей семьи.</p>
          <p class="price">9€ / кг</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
      </div>
    </main>

    <footer>
      <p>© 2025 Интернет-магазин "Эко Продукты". Все права защищены.</p>
      <p>Контакты: +7 123 456 789 </p>
    </footer>
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
  <title>Интернет-магазин на Grid</title>
  <style>
    /* Основные стили */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header"
        "aside main"
        "footer footer";
      gap: 20px;
      height: 100vh;
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      grid-area: header;
      background-color: #4CAF50;
      color: white;
      text-align: center;
      padding: 15px;
      border-radius: 8px;
    }

    aside {
      grid-area: aside;
      background-color: #f0f0f0;
      padding: 15px;
      border-radius: 8px;
    }

    main {
      grid-area: main;
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      overflow-y: auto;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }

    .product-card {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .product-card h3 {
      margin-bottom: 5px;
    }

    .product-card .price {
      font-size: 18px;
      color: #4CAF50;
    }

    .product-card button {
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      margin-top: auto;
      text-align: center;
    }

    footer {
      grid-area: footer;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>Интернет-магазин "Эко Продукты"</h1>
    </header>

    <aside>
      <h3>Акции и предложения</h3>
      <p>Скидка 20% на все продукты до конца месяца!</p>
      <p>Бесплатная доставка при заказе от 50€.</p>
    </aside>

    <main>
      <h2>Популярные товары</h2>
      <div class="products">
        <div class="product-card">
          <h3>Орехи миндаль</h3>
          <p>Натуральные и свежие орехи высшего качества.</p>
          <p class="price">10€ / кг</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Сухофрукты ассорти</h3>
          <p>Смесь из кураги, изюма, чернослива и инжира.</p>
          <p class="price">12€ / кг</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Фундук очищенный</h3>
          <p>Полезный перекус для всей семьи.</p>
          <p class="price">9€ / кг</p>
          <button>Купить</button>
        </div>
        <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
         <div class="product-card">
          <h3>Мед натуральный</h3>
          <p>Собран с цветочных лугов, без добавок.</p>
          <p class="price">15€ / 500г</p>
          <button>Купить</button>
        </div>
      </div>
    </main>

    <footer>
      <p>© 2025 Интернет-магазин "Эко Продукты". Все права защищены.</p>
      <p>Контакты: +7 123 456 789</p>
    </footer>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
<style>
    /* Основные стили */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header"
        "aside main"
        "footer footer";
      gap: 20px;
      height: 100vh;
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      grid-area: header;
      background-color: #4CAF50;
      color: white;
      text-align: center;
      padding: 15px;
      border-radius: 8px;
    }

    aside {
      grid-area: aside;
      background-color: #f0f0f0;
      padding: 15px;
      border-radius: 8px;
    }

    main {
      grid-area: main;
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      overflow-y: auto;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }

    .product-card {
      background-color: #d1e7dd;
      border: 1px solid #badbcc;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .product-card h3 {
      margin-bottom: 5px;
    }

    .product-card .price {
      font-size: 18px;
      color: #4CAF50;
    }

    .product-card button {
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      margin-top: auto;
      text-align: center;
    }

    footer {
      grid-area: footer;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
      border-radius: 8px;
    }
  </style>
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "https://html5book.ru/css-grid/",
  ],
};
export const grid_task_20 = {
  id: "grid_task_20",
  module: "CSS",
  title: "Горизонтальное выравнивание: Flex и Grid",
  topic: "Сравнение Flex и Grid",
  topicId: "css_grid",
  sectionId: "css_grid5",
  description:
    "Создайте блок с тремя элементами. Реализуйте одинаковое горизонтальное выравнивание элементов двумя способами: с помощью Flexbox и с помощью Grid.",
  steps: [
    "Создайте контейнер .flex-container с display: flex",
    "Расположите 3 элемента по горизонтали, отступ между ними — 10px",
    "Создайте контейнер .grid-container с display: grid и 3 колонками",
    "Сделайте аналогичное горизонтальное расположение элементов через Grid",
    "Подпишите оба блока соответствующим заголовком",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Flex vs Grid: Выравнивание</title>
</head>
<body>
  <div class="container-title">Flexbox</div>
  <div class="flex-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container-title">Grid</div>
  <div class="grid-container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Flex vs Grid: Выравнивание</title>
  <style>
    .container-title {
      margin: 16px 0 4px;
      font-weight: bold;
    }
    .flex-container {
      display: flex;
      gap: 10px;
      margin-bottom: 16px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .item {
      background: #e1eaff;
      text-align: center;
      padding: 16px 0;
      border-radius: 5px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container-title">Flexbox</div>
  <div class="flex-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container-title">Grid</div>
  <div class="grid-container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .container-title {
      margin: 16px 0 4px;
      font-weight: bold;
    }
    .flex-container {
      display: flex;
      gap: 10px;
      margin-bottom: 16px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .item {
      background: #e1eaff;
      text-align: center;
      padding: 16px 0;
      border-radius: 5px;
      font-size: 18px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid",
  ],
};
export const grid_task_21 = {
  id: "grid_task_21",
  module: "CSS",
  title: "Адаптивный ряд: Flex vs Grid",
  topic: "Сравнение Flex и Grid",
  topicId: "css_grid",
  sectionId: "css_grid5",
  description:
    "Сделайте адаптивную строку с произвольным числом элементов. Реализуйте одинаковое поведение через Flexbox и через Grid: чтобы карточки автоматически переносились на новую строку при нехватке ширины.",
  steps: [
    "Создайте контейнер .flex-wrap-row с display: flex и flex-wrap: wrap",
    "Добавьте 6 элементов фиксированной ширины (например, 120px)",
    "Создайте аналогичный блок через .grid-wrap-row с display: grid и grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))",
    "Добавьте комментарии, когда проще использовать Flex, а когда Grid",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
  <link rel="stylesheet" href="styles.css">
<head>
  <meta charset="UTF-8">
  <title>Flex vs Grid: Адаптивность</title>
</head>
<body>
  <div class="row-title">Flex (flex-wrap)</div>
  <div class="flex-wrap-row">
    <div class="row-item">1</div>
    <div class="row-item">2</div>
    <div class="row-item">3</div>
    <div class="row-item">4</div>
    <div class="row-item">5</div>
    <div class="row-item">6</div>
  </div>
  <div class="row-title">Grid (auto-fit)</div>
  <div class="grid-wrap-row">
    <div class="row-item">A</div>
    <div class="row-item">B</div>
    <div class="row-item">C</div>
    <div class="row-item">D</div>
    <div class="row-item">E</div>
    <div class="row-item">F</div>
  </div>
</body>
</html>
  `.trim(),
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Flex vs Grid: Адаптивность</title>
  <style>
    .row-title {margin: 16px 0 4px;font-weight:bold;}
    .flex-wrap-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
    }
    .grid-wrap-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 10px;
    }
    .row-item {
      background: #d0ffe3;
      text-align: center;
      height: 60px;
      width: 120px;
      border-radius: 5px;
      line-height: 60px;
      font-size: 16px;
      flex-shrink: 0;
    }
  </style>
</head>
<body>
  <div class="row-title">Flex (flex-wrap)</div>
  <div class="flex-wrap-row">
    <div class="row-item">1</div>
    <div class="row-item">2</div>
    <div class="row-item">3</div>
    <div class="row-item">4</div>
    <div class="row-item">5</div>
    <div class="row-item">6</div>
  </div>
  <div class="row-title">Grid (auto-fit)</div>
  <div class="grid-wrap-row">
    <div class="row-item">A</div>
    <div class="row-item">B</div>
    <div class="row-item">C</div>
    <div class="row-item">D</div>
    <div class="row-item">E</div>
    <div class="row-item">F</div>
  </div>
</body>
</html>`,
  codeExampleCSS: `
    .row-title {margin: 16px 0 4px;font-weight:bold;}
    .flex-wrap-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
    }
    .grid-wrap-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 10px;
    }
    .row-item {
      background: #d0ffe3;
      text-align: center;
      height: 60px;
      width: 120px;
      border-radius: 5px;
      line-height: 60px;
      font-size: 16px;
      flex-shrink: 0;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
  ],
};
export const grid_task_22 = {
  id: "grid_task_22",
  module: "CSS",
  title: "Двумерная сетка: Grid vs Flex",
  topic: "Сравнение Flex и Grid",
  topicId: "css_grid",
  sectionId: "css_grid5",
  description:
    "Создайте двумерную сетку 3x3 (9 элементов) с одинаковыми размерами ячеек. Попробуйте реализовать такую сетку и на Flexbox, и на Grid. Сравните, где решение проще и читаемее.",
  steps: [
    "Создайте .grid-2d с display: grid (3x3)",
    "Создайте .flex-2d с display: flex и flex-wrap: wrap, фиксируйте размеры",
    "Сделайте 9 квадратных блоков",
    "Выделите разницу в сложности и удобстве",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>2D Grid vs Flex</title>
</head>
<body>
  <div class="title">Grid (3x3)</div>
  <div class="grid-2d">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
    <div class="block">7</div>
    <div class="block">8</div>
    <div class="block">9</div>
  </div>
  <div class="title">Flex (3x3, с фикс. размерами)</div>
  <div class="flex-2d">
    <div class="block">A</div>
    <div class="block">B</div>
    <div class="block">C</div>
    <div class="block">D</div>
    <div class="block">E</div>
    <div class="block">F</div>
    <div class="block">G</div>
    <div class="block">H</div>
    <div class="block">I</div>
  </div>
</body>
</html>
  `.trim(),
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>2D Grid vs Flex</title>
  <style>
    .title {margin: 16px 0 4px;font-weight:bold;}
    .grid-2d {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 8px;
      margin-bottom: 16px;
    }
    .flex-2d {
      display: flex;
      flex-wrap: wrap;
      width: 316px;
      gap: 8px;
    }
    .block {
      background: #ffd6d6;
      text-align: center;
      height: 100px;
      width: 100px;
      line-height: 100px;
      border-radius: 5px;
      font-size: 16px;
      margin-bottom: 0;
    }
  </style>
</head>
<body>
  <div class="title">Grid (3x3)</div>
  <div class="grid-2d">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
    <div class="block">7</div>
    <div class="block">8</div>
    <div class="block">9</div>
  </div>
  <div class="title">Flex (3x3, с фикс. размерами)</div>
  <div class="flex-2d">
    <div class="block">A</div>
    <div class="block">B</div>
    <div class="block">C</div>
    <div class="block">D</div>
    <div class="block">E</div>
    <div class="block">F</div>
    <div class="block">G</div>
    <div class="block">H</div>
    <div class="block">I</div>
  </div>
</body>
</html>`,
  codeExampleCSS: `
    .title {margin: 16px 0 4px;font-weight:bold;}
    .grid-2d {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 8px;
      margin-bottom: 16px;
    }
    .flex-2d {
      display: flex;
      flex-wrap: wrap;
      width: 316px;
      gap: 8px;
    }
    .block {
      background: #ffd6d6;
      text-align: center;
      height: 100px;
      width: 100px;
      line-height: 100px;
      border-radius: 5px;
      font-size: 16px;
      margin-bottom: 0;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
  ],
};
export const grid_task_23 = {
  id: "grid_task_23",
  module: "CSS",
  title: "Центрирование элементов: Flex и Grid",
  topic: "Сравнение Flex и Grid",
  topicId: "css_grid",
  sectionId: "css_grid5",
  description:
    "Реализуйте центрирование одного дочернего элемента внутри контейнера сначала через Flexbox, затем через Grid. Сравните, какой синтаксис проще и почему.",
  steps: [
    "Создайте .flex-center с display: flex, высота 200px",
    "Используйте justify-content и align-items для центрирования блока",
    "Создайте .grid-center с display: grid, высота 200px",
    "Используйте place-items: center для центрирования блока",
    "Поясните, почему синтаксис Grid проще/короче",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Центрирование: Flex vs Grid</title>
</head>
<body>
  <div class="title">Flex: Центрирование</div>
  <div class="flex-center">
    <div class="centered">Flex центр</div>
  </div>
  <div class="title">Grid: Центрирование</div>
  <div class="grid-center">
    <div class="centered">Grid центр</div>
  </div>
</body>
</html>
  `.trim(),
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Центрирование: Flex vs Grid</title>
  <style>
    .title {margin: 16px 0 4px;font-weight:bold;}
    .flex-center, .grid-center {
      height: 200px;
      background: #f6f6e6;
      margin-bottom: 16px;
      border-radius: 6px;
    }
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .grid-center {
      display: grid;
      place-items: center;
    }
    .centered {
      background: #c6f2ff;
      padding: 24px 40px;
      border-radius: 7px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="title">Flex: Центрирование</div>
  <div class="flex-center">
    <div class="centered">Flex центр</div>
  </div>
  <div class="title">Grid: Центрирование</div>
  <div class="grid-center">
    <div class="centered">Grid центр</div>
  </div>
</body>
</html>`,
  codeExampleCSS: `
     .title {margin: 16px 0 4px;font-weight:bold;}
    .flex-center, .grid-center {
      height: 200px;
      background: #f6f6e6;
      margin-bottom: 16px;
      border-radius: 6px;
    }
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .grid-center {
      display: grid;
      place-items: center;
    }
    .centered {
      background: #c6f2ff;
      padding: 24px 40px;
      border-radius: 7px;
      font-size: 18px;
    }
  `.trim(),
  resources: [
    "https://css-tricks.com/centering-css-complete-guide/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/place-items",
  ],
};
export const grid_task_24 = {
  id: "grid_task_24",
  module: "CSS",
  title: "Задача Grid",
  topic: "Итоги и закрепление Grid",
  topicId: "css_grid",
  description:
    "Полноценный одностраничный интернет-магазин с использованием всех возможностей CSS Grid: адаптивный макет, карточки товаров, формы, хедер и футер.",
  steps: [
    "Создайте два контейнера: .flex-center и .grid-center, оба высотой 200px и шириной 100%.",
    'Внутрь каждого контейнера поместите один дочерний элемент (например, <div class="centered">Центр</div>).',
    "Для .flex-center используйте display: flex, затем свойствами justify-content и align-items отцентрируйте элемент по горизонтали и вертикали.",
    "Для .grid-center используйте display: grid, затем свойством place-items: center выполните центрирование по обеим осям.",
    "Проверьте визуально, что оба блока отцентрированы одинаково.",
    "Сделайте короткое сравнение: какой способ проще и короче в синтаксисе, в чем преимущество Grid по сравнению с Flex для данной задачи.",
  ],
  difficulty: 5,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>TechStore - Интернет-магазин электроники</title>
</head>
<body>
  <!-- Хедер -->
  <header id="header">
    <div class="container">
      <div class="header-container">
        <div class="logo">TechStore</div>
        <nav class="nav-menu">
          <a href="#header">Главная</a>
          <a href="#catalog">Каталог</a>
          <a href="#special-offers">Акции</a>
          <a href="#order-form">Заказать</a>
        </nav>
        <div class="header-actions">
          <div class="cart-icon">🛒<span class="cart-count">0</span></div>
          <button class="btn-primary">Войти</button>
        </div>
      </div>
    </div>
  </header>

  <!-- Баннер -->
  <section class="banner">
    <div class="container">
      <h1>Лучшие технологии для вас</h1>
      <p>Широкий выбор электроники по доступным ценам с быстрой доставкой по всей России</p>
      <a href="#catalog" class="btn btn-primary">Смотреть каталог</a>
    </div>
  </section>

  <!-- Категории -->
  <section>
    <div class="container">
      <h2 class="section-title">Категории товаров</h2>
      <div class="categories">
        <div class="category">
          <div class="category-icon">📱</div>
          <h3>Смартфоны</h3>
          <p>Новейшие модели от ведущих производителей</p>
        </div>
        <div class="category">
          <div class="category-icon">💻</div>
          <h3>Ноутбуки</h3>
          <p>Для работы, учебы и развлечений</p>
        </div>
        <div class="category">
          <div class="category-icon">🎧</div>
          <h3>Аудио</h3>
          <p>Наушники, колонки и аксессуары</p>
        </div>
        <div class="category">
          <div class="category-icon">⌚</div>
          <h3>Гаджеты</h3>
          <p>Умные часы и фитнес-браслеты</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Каталог товаров -->
  <section id="catalog">
    <div class="container">
      <h2 class="section-title">Каталог товаров</h2>
      <div class="products-grid">
        <!-- Товар 1 -->
        <div class="product-card">
          <div class="product-image">Смартфон XYZ Pro</div>
          <div class="product-info">
            <div class="product-title">Смартфон XYZ Pro 128GB</div>
            <div class="product-price">34 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 2 -->
        <div class="product-card">
          <div class="product-image">Ноутбук ABC</div>
          <div class="product-info">
            <div class="product-title">Ноутбук ABC Ultra 15.6"</div>
            <div class="product-price">59 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 3 -->
        <div class="product-card">
          <div class="product-image">Наушники Sound+</div>
          <div class="product-info">
            <div class="product-title">Беспроводные наушники Sound+</div>
            <div class="product-price">8 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 4 -->
        <div class="product-card">
          <div class="product-image">Умные часы FitPro</div>
          <div class="product-info">
            <div class="product-title">Умные часы FitPro X1</div>
            <div class="product-price">12 490 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 5 -->
        <div class="product-card">
          <div class="product-image">Планшет TabMax</div>
          <div class="product-info">
            <div class="product-title">Планшет TabMax 10.1"</div>
            <div class="product-price">18 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 6 -->
        <div class="product-card">
          <div class="product-image">Колонка SoundBox</div>
          <div class="product-info">
            <div class="product-title">Bluetooth колонка SoundBox Mini</div>
            <div class="product-price">3 490 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 7 -->
        <div class="product-card">
          <div class="product-image">Фотоаппарат ClickPro</div>
          <div class="product-info">
            <div class="product-title">Фотоаппарат ClickPro X7</div>
            <div class="product-price">42 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 8 -->
        <div class="product-card">
          <div class="product-image">Игровая консоль GameX</div>
          <div class="product-info">
            <div class="product-title">Игровая консоль GameX Pro</div>
            <div class="product-price">39 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 9 -->
        <div class="product-card">
          <div class="product-image">Смарт-браслет FitBand</div>
          <div class="product-info">
            <div class="product-title">Смарт-браслет FitBand 5</div>
            <div class="product-price">3 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 10 -->
        <div class="product-card">
          <div class="product-image">Монитор ViewMax</div>
          <div class="product-info">
            <div class="product-title">Монитор ViewMax 27" 4K</div>
            <div class="product-price">28 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 11 -->
        <div class="product-card">
          <div class="product-image">Клавиатура MechKey</div>
          <div class="product-info">
            <div class="product-title">Механическая клавиатура MechKey RGB</div>
            <div class="product-price">7 490 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 12 -->
        <div class="product-card">
          <div class="product-image">Мышь GamerPro</div>
          <div class="product-info">
            <div class="product-title">Игровая мышь GamerPro X3</div>
            <div class="product-price">4 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 13 -->
        <div class="product-card">
          <div class="product-image">Роутер NetSpeed</div>
          <div class="product-info">
            <div class="product-title">Wi-Fi роутер NetSpeed AC1200</div>
            <div class="product-price">3 490 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 14 -->
        <div class="product-card">
          <div class="product-image">Внешний SSD</div>
          <div class="product-info">
            <div class="product-title">Внешний SSD 500GB SpeedDrive</div>
            <div class="product-price">8 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 15 -->
        <div class="product-card">
          <div class="product-image">Веб-камера CamPro</div>
          <div class="product-info">
            <div class="product-title">Веб-камера CamPro HD</div>
            <div class="product-price">2 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 16 -->
        <div class="product-card">
          <div class="product-image">Микрофон VoicePro</div>
          <div class="product-info">
            <div class="product-title">Микрофон VoicePro Studio</div>
            <div class="product-price">6 490 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 17 -->
        <div class="product-card">
          <div class="product-image">Графический планшет DrawTab</div>
          <div class="product-info">
            <div class="product-title">Графический планшет DrawTab 10"</div>
            <div class="product-price">12 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 18 -->
        <div class="product-card">
          <div class="product-image">Принтер PrintMaster</div>
          <div class="product-info">
            <div class="product-title">Цветной принтер PrintMaster Laser</div>
            <div class="product-price">15 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 19 -->
        <div class="product-card">
          <div class="product-image">Электронная книга ReadMax</div>
          <div class="product-info">
            <div class="product-title">Электронная книга ReadMax E-ink</div>
            <div class="product-price">9 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 20 -->
        <div class="product-card">
          <div class="product-image">Портативная зарядка PowerBank</div>
          <div class="product-info">
            <div class="product-title">Портативная зарядка PowerBank 20000mAh</div>
            <div class="product-price">2 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Специальные предложения -->
  <section id="special-offers" class="special-offers">
    <div class="container">
      <h2 class="section-title">Специальные предложения</h2>
      <div class="offers-grid">
        <div class="offer-card">
          <div class="offer-image">Смартфон XYZ Pro Max</div>
          <div class="offer-info">
            <h3 class="offer-title">Смартфон XYZ Pro Max 256GB</h3>
            <p class="offer-description">Флагманский смартфон с мощным процессором и камерой профессионального уровня</p>
            <div class="offer-price">
              <span class="old-price">54 990 ₽</span>
              <span class="new-price">49 990 ₽</span>
            </div>
            <button class="btn-primary">Купить сейчас</button>
          </div>
        </div>
        <div class="offer-card">
          <div class="offer-image">Ноутбук UltraBook</div>
          <div class="offer-info">
            <h3 class="offer-title">Ноутбук UltraBook Slim 14"</h3>
            <p class="offer-description">Ультратонкий и легкий ноутбук с мощной начинкой и длительным временем работы</p>
            <div class="offer-price">
              <span class="old-price">79 990 ₽</span>
              <span class="new-price">69 990 ₽</span>
            </div>
            <button class="btn-primary">Купить сейчас</button>
          </div>
        </div>
        <div class="offer-card">
          <div class="offer-image">Наушники AudioPro</div>
          <div class="offer-info">
            <h3 class="offer-title">Наушники AudioPro Noise Cancel</h3>
            <p class="offer-description">Беспроводные наушники с активным шумоподавлением и высоким качеством звука</p>
            <div class="offer-price">
              <span class="old-price">12 990 ₽</span>
              <span class="new-price">9 990 ₽</span>
            </div>
            <button class="btn-primary">Купить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Форма заказа -->
  <section id="order-form" class="order-form-section">
    <div class="container">
      <div class="order-form-container">
        <div class="form-info">
          <h2>Оформите заказ прямо сейчас</h2>
          <p>Заполните форму, и наш менеджер свяжется с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.</p>
          <div class="benefits">
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Быстрая доставка по всей России</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Гарантия на все товары</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Возможность оплаты при получении</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Бонусы за каждую покупку</div>
            </div>
          </div>
        </div>
        <div class="order-form">
          <form class="form-grid">
            <div class="form-group">
              <label for="name">Имя</label>
              <input type="text" id="name" placeholder="Введите ваше имя">
            </div>
            <div class="form-group">
              <label for="surname">Фамилия</label>
              <input type="text" id="surname" placeholder="Введите вашу фамилию">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Введите ваш email">
            </div>
            <div class="form-group">
              <label for="phone">Телефон</label>
              <input type="tel" id="phone" placeholder="Введите ваш телефон">
            </div>
            <div class="form-group full-width">
              <label for="address">Адрес доставки</label>
              <input type="text" id="address" placeholder="Введите адрес доставки">
            </div>
            <div class="form-group">
              <label for="city">Город</label>
              <input type="text" id="city" placeholder="Введите город">
            </div>
            <div class="form-group">
              <label for="zip">Индекс</label>
              <input type="text" id="zip" placeholder="Введите почтовый индекс">
            </div>
            <div class="form-group full-width">
              <label for="product">Товар</label>
              <select id="product">
                <option value="">Выберите товар</option>
                <option value="smartphone">Смартфон XYZ Pro 128GB</option>
                <option value="laptop">Ноутбук ABC Ultra 15.6"</option>
                <option value="headphones">Беспроводные наушники Sound+</option>
                <option value="watch">Умные часы FitPro X1</option>
                <option value="tablet">Планшет TabMax 10.1"</option>
              </select>
            </div>
            <div class="form-group full-width">
              <label for="comment">Комментарий к заказу</label>
              <textarea id="comment" placeholder="Введите комментарий к заказу"></textarea>
            </div>
            <div class="form-group full-width">
              <button type="submit" class="submit-btn">Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Футер -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>О компании</h3>
          <div class="footer-links">
            <a href="#">О нас</a>
            <a href="#">Наша команда</a>
            <a href="#">Вакансии</a>
            <a href="#">Новости</a>
            <a href="#">Блог</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Покупателям</h3>
          <div class="footer-links">
            <a href="#">Как сделать заказ</a>
            <a href="#">Способы оплаты</a>
            <a href="#">Доставка</a>
            <a href="#">Возврат товара</a>
            <a href="#">Вопросы и ответы</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Каталог</h3>
          <div class="footer-links">
            <a href="#">Смартфоны</a>
            <a href="#">Ноутбуки</a>
            <a href="#">Аудиотехника</a>
            <a href="#">Аксессуары</a>
            <a href="#">Гаджеты</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Контакты</h3>
          <div class="contact-info">
            <div class="contact-item">
              <div>📱</div>
              <div>+7 (800) 123-45-67</div>
            </div>
            <div class="contact-item">
              <div>✉️</div>
              <div>info@techstore.ru</div>
            </div>
            <div class="contact-item">
              <div>📍</div>
              <div>г. Москва, ул. Технологическая, 42</div>
            </div>
          </div>
          <h3 style="margin-top: 20px;">Мы в соцсетях</h3>
          <div class="social-links">
            <a href="#" class="social-link">VK</a>
            <a href="#" class="social-link">TG</a>
            <a href="#" class="social-link">YT</a>
            <a href="#" class="social-link">OK</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 TechStore. Все права защищены.</p>
      </div>
    </div>
  </footer>


</body>
</html>
  `.trim(),
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechStore - Интернет-магазин электроники</title>
  <style>
    /* Общие стили */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    section {
      padding: 60px 0;
    }

    h1, h2, h3 {
      margin-bottom: 20px;
      color: #2c3e50;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button, .btn {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      padding: 10px 15px;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background-color: #2980b9;
    }

    .section-title {
      text-align: center;
      font-size: 32px;
      margin-bottom: 40px;
    }

    /* Хедер */
    header {
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .header-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      padding: 15px 0;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #3498db;
    }

    .nav-menu {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 30px;
      justify-content: center;
    }

    .nav-menu a {
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-menu a:hover {
      color: #3498db;
    }

    .header-actions {
      display: grid;
      grid-template-columns: auto auto;
      gap: 15px;
    }

    .cart-icon {
      position: relative;
      font-size: 20px;
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #e74c3c;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Баннер */
    .banner {
      background: linear-gradient(135deg, #3498db, #2c3e50);
      color: white;
      text-align: center;
      padding: 80px 0;
    }

    .banner h1 {
      font-size: 48px;
      margin-bottom: 20px;
      color: white;
    }

    .banner p {
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto 30px;
    }

    /* Категории */
    .categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .category {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .category:hover {
      transform: translateY(-5px);
    }

    .category-icon {
      font-size: 40px;
      margin-bottom: 15px;
      color: #3498db;
    }

    /* Каталог товаров */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 25px;
    }

    .product-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      display: grid;
      grid-template-rows: 200px auto auto;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: #f1f2f6;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4b0be;
    }

    .product-info {
      padding: 15px;
    }

    .product-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .product-price {
      font-size: 18px;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .product-rating {
      color: #f39c12;
      margin-bottom: 10px;
    }

    .product-actions {
      padding: 0 15px 15px;
      display: grid;
      grid-template-columns: 1fr;
    }

    .add-to-cart {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .add-to-cart:hover {
      background-color: #2980b9;
    }

    /* Специальные предложения */
    .special-offers {
      background-color: #ecf0f1;
      padding: 60px 0;
    }

    .offers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .offer-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }

    .offer-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background-color: #f1f2f6;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4b0be;
    }

    .offer-info {
      padding: 20px;
    }

    .offer-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .offer-description {
      margin-bottom: 15px;
      color: #7f8c8d;
    }

    .offer-price {
      display: grid;
      grid-template-columns: auto auto;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
    }

    .old-price {
      text-decoration: line-through;
      color: #7f8c8d;
    }

    .new-price {
      font-size: 22px;
      font-weight: bold;
      color: #e74c3c;
    }

    /* Форма заказа */
    .order-form-section {
      background-color: #2c3e50;
      color: white;
      padding: 60px 0;
    }

    .order-form-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .form-info h2 {
      color: white;
      font-size: 32px;
      margin-bottom: 20px;
    }

    .form-info p {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 1.6;
    }

    .benefits {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      margin-top: 30px;
    }

    .benefit {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 15px;
      align-items: center;
    }

    .benefit-icon {
      background-color: #3498db;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .order-form {
      background-color: white;
      border-radius: 8px;
      padding: 30px;
      color: #333;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group.full-width {
      grid-column: span 2;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    .form-group textarea {
      height: 100px;
      resize: vertical;
    }

    .submit-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      width: 100%;
    }

    .submit-btn:hover {
      background-color: #2980b9;
    }

    /* Футер */
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 60px 0 30px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-column h3 {
      color: white;
      font-size: 18px;
      margin-bottom: 20px;
      position: relative;
    }

    .footer-column h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: #3498db;
    }

    .footer-links {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .footer-links a {
      color: #bdc3c7;
      transition: color 0.3s;
    }

    .footer-links a:hover {
      color: #3498db;
    }

    .contact-info {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .contact-item {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 10px;
      align-items: center;
      color: #bdc3c7;
    }

    .social-links {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 15px;
      justify-content: start;
    }

    .social-link {
      background-color: #34495e;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.3s;
    }

    .social-link:hover {
      background-color: #3498db;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 30px;
      border-top: 1px solid #34495e;
      color: #bdc3c7;
      font-size: 14px;
    }

    /* Адаптивность */
    @media (max-width: 768px) {
      .header-container {
        grid-template-columns: auto auto;
        grid-template-areas:
          "logo actions"
          "menu menu";
      }

      .logo {
        grid-area: logo;
      }

      .nav-menu {
        grid-area: menu;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 15px;
      }

      .header-actions {
        grid-area: actions;
      }

      .order-form-container {
        grid-template-columns: 1fr;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-group.full-width {
        grid-column: span 1;
      }
    }

    @media (max-width: 576px) {
      .nav-menu {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px 10px;
      }

      .banner h1 {
        font-size: 32px;
      }

      .section-title {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <!-- Хедер -->
  <header id="header">
    <div class="container">
      <div class="header-container">
        <div class="logo">TechStore</div>
        <nav class="nav-menu">
          <a href="#header">Главная</a>
          <a href="#catalog">Каталог</a>
          <a href="#special-offers">Акции</a>
          <a href="#order-form">Заказать</a>
        </nav>
        <div class="header-actions">
          <div class="cart-icon">🛒<span class="cart-count">0</span></div>
          <button class="btn-primary">Войти</button>
        </div>
      </div>
    </div>
  </header>

  <!-- Баннер -->
  <section class="banner">
    <div class="container">
      <h1>Лучшие технологии для вас</h1>
      <p>Широкий выбор электроники по доступным ценам с быстрой доставкой по всей России</p>
      <a href="#catalog" class="btn btn-primary">Смотреть каталог</a>
    </div>
  </section>

  <!-- Категории -->
  <section>
    <div class="container">
      <h2 class="section-title">Категории товаров</h2>
      <div class="categories">
        <div class="category">
          <div class="category-icon">📱</div>
          <h3>Смартфоны</h3>
          <p>Новейшие модели от ведущих производителей</p>
        </div>
        <div class="category">
          <div class="category-icon">💻</div>
          <h3>Ноутбуки</h3>
          <p>Для работы, учебы и развлечений</p>
        </div>
        <div class="category">
          <div class="category-icon">🎧</div>
          <h3>Аудио</h3>
          <p>Наушники, колонки и аксессуары</p>
        </div>
        <div class="category">
          <div class="category-icon">⌚</div>
          <h3>Гаджеты</h3>
          <p>Умные часы и фитнес-браслеты</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Каталог товаров -->
  <section id="catalog">
    <div class="container">
      <h2 class="section-title">Каталог товаров</h2>
      <div class="products-grid">
        <!-- Товар 1 -->
        <div class="product-card">
          <div class="product-image">Смартфон XYZ Pro</div>
          <div class="product-info">
            <div class="product-title">Смартфон XYZ Pro 128GB</div>
            <div class="product-price">34 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 2 -->
        <div class="product-card">
          <div class="product-image">Ноутбук ABC</div>
          <div class="product-info">
            <div class="product-title">Ноутбук ABC Ultra 15.6"</div>
            <div class="product-price">59 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 3 -->
        <div class="product-card">
          <div class="product-image">Наушники Sound+</div>
          <div class="product-info">
            <div class="product-title">Беспроводные наушники Sound+</div>
            <div class="product-price">8 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 4 -->
        <div class="product-card">
          <div class="product-image">Умные часы FitPro</div>
          <div class="product-info">
            <div class="product-title">Умные часы FitPro X1</div>
            <div class="product-price">12 490 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 5 -->
        <div class="product-card">
          <div class="product-image">Планшет TabMax</div>
          <div class="product-info">
            <div class="product-title">Планшет TabMax 10.1"</div>
            <div class="product-price">18 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 6 -->
        <div class="product-card">
          <div class="product-image">Колонка SoundBox</div>
          <div class="product-info">
            <div class="product-title">Bluetooth колонка SoundBox Mini</div>
            <div class="product-price">3 490 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 7 -->
        <div class="product-card">
          <div class="product-image">Фотоаппарат ClickPro</div>
          <div class="product-info">
            <div class="product-title">Фотоаппарат ClickPro X7</div>
            <div class="product-price">42 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 8 -->
        <div class="product-card">
          <div class="product-image">Игровая консоль GameX</div>
          <div class="product-info">
            <div class="product-title">Игровая консоль GameX Pro</div>
            <div class="product-price">39 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 9 -->
        <div class="product-card">
          <div class="product-image">Смарт-браслет FitBand</div>
          <div class="product-info">
            <div class="product-title">Смарт-браслет FitBand 5</div>
            <div class="product-price">3 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 10 -->
        <div class="product-card">
          <div class="product-image">Монитор ViewMax</div>
          <div class="product-info">
            <div class="product-title">Монитор ViewMax 27" 4K</div>
            <div class="product-price">28 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 11 -->
        <div class="product-card">
          <div class="product-image">Клавиатура MechKey</div>
          <div class="product-info">
            <div class="product-title">Механическая клавиатура MechKey RGB</div>
            <div class="product-price">7 490 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 12 -->
        <div class="product-card">
          <div class="product-image">Мышь GamerPro</div>
          <div class="product-info">
            <div class="product-title">Игровая мышь GamerPro X3</div>
            <div class="product-price">4 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 13 -->
        <div class="product-card">
          <div class="product-image">Роутер NetSpeed</div>
          <div class="product-info">
            <div class="product-title">Wi-Fi роутер NetSpeed AC1200</div>
            <div class="product-price">3 490 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 14 -->
        <div class="product-card">
          <div class="product-image">Внешний SSD</div>
          <div class="product-info">
            <div class="product-title">Внешний SSD 500GB SpeedDrive</div>
            <div class="product-price">8 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 15 -->
        <div class="product-card">
          <div class="product-image">Веб-камера CamPro</div>
          <div class="product-info">
            <div class="product-title">Веб-камера CamPro HD</div>
            <div class="product-price">2 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 16 -->
        <div class="product-card">
          <div class="product-image">Микрофон VoicePro</div>
          <div class="product-info">
            <div class="product-title">Микрофон VoicePro Studio</div>
            <div class="product-price">6 490 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 17 -->
        <div class="product-card">
          <div class="product-image">Графический планшет DrawTab</div>
          <div class="product-info">
            <div class="product-title">Графический планшет DrawTab 10"</div>
            <div class="product-price">12 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 18 -->
        <div class="product-card">
          <div class="product-image">Принтер PrintMaster</div>
          <div class="product-info">
            <div class="product-title">Цветной принтер PrintMaster Laser</div>
            <div class="product-price">15 990 ₽</div>
            <div class="product-rating">★★★★☆</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 19 -->
        <div class="product-card">
          <div class="product-image">Электронная книга ReadMax</div>
          <div class="product-info">
            <div class="product-title">Электронная книга ReadMax E-ink</div>
            <div class="product-price">9 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
        
        <!-- Товар 20 -->
        <div class="product-card">
          <div class="product-image">Портативная зарядка PowerBank</div>
          <div class="product-info">
            <div class="product-title">Портативная зарядка PowerBank 20000mAh</div>
            <div class="product-price">2 990 ₽</div>
            <div class="product-rating">★★★★★</div>
          </div>
          <div class="product-actions">
            <button class="add-to-cart">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Специальные предложения -->
  <section id="special-offers" class="special-offers">
    <div class="container">
      <h2 class="section-title">Специальные предложения</h2>
      <div class="offers-grid">
        <div class="offer-card">
          <div class="offer-image">Смартфон XYZ Pro Max</div>
          <div class="offer-info">
            <h3 class="offer-title">Смартфон XYZ Pro Max 256GB</h3>
            <p class="offer-description">Флагманский смартфон с мощным процессором и камерой профессионального уровня</p>
            <div class="offer-price">
              <span class="old-price">54 990 ₽</span>
              <span class="new-price">49 990 ₽</span>
            </div>
            <button class="btn-primary">Купить сейчас</button>
          </div>
        </div>
        <div class="offer-card">
          <div class="offer-image">Ноутбук UltraBook</div>
          <div class="offer-info">
            <h3 class="offer-title">Ноутбук UltraBook Slim 14"</h3>
            <p class="offer-description">Ультратонкий и легкий ноутбук с мощной начинкой и длительным временем работы</p>
            <div class="offer-price">
              <span class="old-price">79 990 ₽</span>
              <span class="new-price">69 990 ₽</span>
            </div>
            <button class="btn-primary">Купить сейчас</button>
          </div>
        </div>
        <div class="offer-card">
          <div class="offer-image">Наушники AudioPro</div>
          <div class="offer-info">
            <h3 class="offer-title">Наушники AudioPro Noise Cancel</h3>
            <p class="offer-description">Беспроводные наушники с активным шумоподавлением и высоким качеством звука</p>
            <div class="offer-price">
              <span class="old-price">12 990 ₽</span>
              <span class="new-price">9 990 ₽</span>
            </div>
            <button class="btn-primary">Купить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Форма заказа -->
  <section id="order-form" class="order-form-section">
    <div class="container">
      <div class="order-form-container">
        <div class="form-info">
          <h2>Оформите заказ прямо сейчас</h2>
          <p>Заполните форму, и наш менеджер свяжется с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.</p>
          <div class="benefits">
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Быстрая доставка по всей России</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Гарантия на все товары</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Возможность оплаты при получении</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">Бонусы за каждую покупку</div>
            </div>
          </div>
        </div>
        <div class="order-form">
          <form class="form-grid">
            <div class="form-group">
              <label for="name">Имя</label>
              <input type="text" id="name" placeholder="Введите ваше имя">
            </div>
            <div class="form-group">
              <label for="surname">Фамилия</label>
              <input type="text" id="surname" placeholder="Введите вашу фамилию">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Введите ваш email">
            </div>
            <div class="form-group">
              <label for="phone">Телефон</label>
              <input type="tel" id="phone" placeholder="Введите ваш телефон">
            </div>
            <div class="form-group full-width">
              <label for="address">Адрес доставки</label>
              <input type="text" id="address" placeholder="Введите адрес доставки">
            </div>
            <div class="form-group">
              <label for="city">Город</label>
              <input type="text" id="city" placeholder="Введите город">
            </div>
            <div class="form-group">
              <label for="zip">Индекс</label>
              <input type="text" id="zip" placeholder="Введите почтовый индекс">
            </div>
            <div class="form-group full-width">
              <label for="product">Товар</label>
              <select id="product">
                <option value="">Выберите товар</option>
                <option value="smartphone">Смартфон XYZ Pro 128GB</option>
                <option value="laptop">Ноутбук ABC Ultra 15.6"</option>
                <option value="headphones">Беспроводные наушники Sound+</option>
                <option value="watch">Умные часы FitPro X1</option>
                <option value="tablet">Планшет TabMax 10.1"</option>
              </select>
            </div>
            <div class="form-group full-width">
              <label for="comment">Комментарий к заказу</label>
              <textarea id="comment" placeholder="Введите комментарий к заказу"></textarea>
            </div>
            <div class="form-group full-width">
              <button type="button" class="submit-btn">Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Футер -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>О компании</h3>
          <div class="footer-links">
            <a href="#">О нас</a>
            <a href="#">Наша команда</a>
            <a href="#">Вакансии</a>
            <a href="#">Новости</a>
            <a href="#">Блог</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Покупателям</h3>
          <div class="footer-links">
            <a href="#">Как сделать заказ</a>
            <a href="#">Способы оплаты</a>
            <a href="#">Доставка</a>
            <a href="#">Возврат товара</a>
            <a href="#">Вопросы и ответы</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Каталог</h3>
          <div class="footer-links">
            <a href="#">Смартфоны</a>
            <a href="#">Ноутбуки</a>
            <a href="#">Аудиотехника</a>
            <a href="#">Аксессуары</a>
            <a href="#">Гаджеты</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Контакты</h3>
          <div class="contact-info">
            <div class="contact-item">
              <div>📱</div>
              <div>+7 (800) 123-45-67</div>
            </div>
            <div class="contact-item">
              <div>✉️</div>
              <div>info@techstore.ru</div>
            </div>
            <div class="contact-item">
              <div>📍</div>
              <div>г. Москва, ул. Технологическая, 42</div>
            </div>
          </div>
          <h3 style="margin-top: 20px;">Мы в соцсетях</h3>
          <div class="social-links">
            <a href="#" class="social-link">VK</a>
            <a href="#" class="social-link">TG</a>
            <a href="#" class="social-link">YT</a>
            <a href="#" class="social-link">OK</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 TechStore. Все права защищены.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,
  codeExampleCSS: `
   /* Общие стили */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    section {
      padding: 60px 0;
    }

    h1, h2, h3 {
      margin-bottom: 20px;
      color: #2c3e50;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button, .btn {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      padding: 10px 15px;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background-color: #2980b9;
    }

    .section-title {
      text-align: center;
      font-size: 32px;
      margin-bottom: 40px;
    }

    /* Хедер */
    header {
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .header-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      padding: 15px 0;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #3498db;
    }

    .nav-menu {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 30px;
      justify-content: center;
    }

    .nav-menu a {
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-menu a:hover {
      color: #3498db;
    }

    .header-actions {
      display: grid;
      grid-template-columns: auto auto;
      gap: 15px;
    }

    .cart-icon {
      position: relative;
      font-size: 20px;
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #e74c3c;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Баннер */
    .banner {
      background: linear-gradient(135deg, #3498db, #2c3e50);
      color: white;
      text-align: center;
      padding: 80px 0;
    }

    .banner h1 {
      font-size: 48px;
      margin-bottom: 20px;
      color: white;
    }

    .banner p {
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto 30px;
    }

    /* Категории */
    .categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .category {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .category:hover {
      transform: translateY(-5px);
    }

    .category-icon {
      font-size: 40px;
      margin-bottom: 15px;
      color: #3498db;
    }

    /* Каталог товаров */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 25px;
    }

    .product-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      display: grid;
      grid-template-rows: 200px auto auto;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: #f1f2f6;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4b0be;
    }

    .product-info {
      padding: 15px;
    }

    .product-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .product-price {
      font-size: 18px;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .product-rating {
      color: #f39c12;
      margin-bottom: 10px;
    }

    .product-actions {
      padding: 0 15px 15px;
      display: grid;
      grid-template-columns: 1fr;
    }

    .add-to-cart {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .add-to-cart:hover {
      background-color: #2980b9;
    }

    /* Специальные предложения */
    .special-offers {
      background-color: #ecf0f1;
      padding: 60px 0;
    }

    .offers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .offer-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }

    .offer-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background-color: #f1f2f6;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4b0be;
    }

    .offer-info {
      padding: 20px;
    }

    .offer-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .offer-description {
      margin-bottom: 15px;
      color: #7f8c8d;
    }

    .offer-price {
      display: grid;
      grid-template-columns: auto auto;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
    }

    .old-price {
      text-decoration: line-through;
      color: #7f8c8d;
    }

    .new-price {
      font-size: 22px;
      font-weight: bold;
      color: #e74c3c;
    }

    /* Форма заказа */
    .order-form-section {
      background-color: #2c3e50;
      color: white;
      padding: 60px 0;
    }

    .order-form-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .form-info h2 {
      color: white;
      font-size: 32px;
      margin-bottom: 20px;
    }

    .form-info p {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 1.6;
    }

    .benefits {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      margin-top: 30px;
    }

    .benefit {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 15px;
      align-items: center;
    }

    .benefit-icon {
      background-color: #3498db;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .order-form {
      background-color: white;
      border-radius: 8px;
      padding: 30px;
      color: #333;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group.full-width {
      grid-column: span 2;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    .form-group textarea {
      height: 100px;
      resize: vertical;
    }

    .submit-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      width: 100%;
    }

    .submit-btn:hover {
      background-color: #2980b9;
    }

    /* Футер */
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 60px 0 30px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-column h3 {
      color: white;
      font-size: 18px;
      margin-bottom: 20px;
      position: relative;
    }

    .footer-column h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: #3498db;
    }

    .footer-links {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .footer-links a {
      color: #bdc3c7;
      transition: color 0.3s;
    }

    .footer-links a:hover {
      color: #3498db;
    }

    .contact-info {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .contact-item {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 10px;
      align-items: center;
      color: #bdc3c7;
    }

    .social-links {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 15px;
      justify-content: start;
    }

    .social-link {
      background-color: #34495e;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.3s;
    }

    .social-link:hover {
      background-color: #3498db;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 30px;
      border-top: 1px solid #34495e;
      color: #bdc3c7;
      font-size: 14px;
    }

    /* Адаптивность */
    @media (max-width: 768px) {
      .header-container {
        grid-template-columns: auto auto;
        grid-template-areas:
          "logo actions"
          "menu menu";
      }

      .logo {
        grid-area: logo;
      }

      .nav-menu {
        grid-area: menu;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 15px;
      }

      .header-actions {
        grid-area: actions;
      }

      .order-form-container {
        grid-template-columns: 1fr;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-group.full-width {
        grid-column: span 1;
      }
    }

    @media (max-width: 576px) {
      .nav-menu {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px 10px;
      }

      .banner h1 {
        font-size: 32px;
      }

      .section-title {
        font-size: 24px;
      }
    }
  `.trim(),
  resources: [],
};
