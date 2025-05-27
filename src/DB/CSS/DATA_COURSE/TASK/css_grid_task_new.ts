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
