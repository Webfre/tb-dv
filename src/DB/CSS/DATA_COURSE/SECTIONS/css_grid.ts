export const css_grid_1 = {
  id: "css_grid_1",
  title: "Объявление грида: display: grid",
  content: `
  ## Что такое CSS Grid?

  CSS Grid — это современный способ создания **двумерных сеток**, то есть **и по строкам, и по колонкам**.  
  Это как таблица, но с полной свободой в размещении и размере блоков.

  В отличие от Flexbox, который работает по **одной оси** (в строку или в колонку), Grid сразу управляет **двумя осями одновременно**.

  ---

  ## Как включить Grid?

  Чтобы сделать блок grid-контейнером, нужно написать:

  \`\`\`css
  .container {
    display: grid;
  }
  \`\`\`

  После этого ты можешь задавать:
  - Сколько колонок и строк
  - Какого они размера
  - Где размещать элементы

  ---

  ## Как работает Grid?

  Grid делит контейнер на **ячейки**, а затем ты указываешь,  
  в каких колонках и строках должны находиться блоки.

  ---

  ## Простой пример

  Допустим, у нас есть 6 блоков, и мы хотим расположить их в виде сетки 3×2 (3 колонки, 2 строки):

  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 колонки одинаковой ширины */
    grid-template-rows: auto auto;      /* 2 строки по содержимому */
    gap: 10px;
  }
  \`\`\`

  Каждый дочерний элемент автоматически попадёт в ячейку сетки, слева направо, сверху вниз.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 10px;
      background: #f0f0f0;
      padding: 10px;
    }

    .item {
      background: #cce5ff;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
  background: #f0f0f0;
  padding: 10px;
}

.item {
  background: #cce5ff;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "https://html5book.ru/css-grid/",
  ],
};
export const css_grid_2 = {
  id: "css_grid_2",
  title: "Колонки и ряды: grid-template-columns, grid-template-rows",
  content: `
  ## Управление колонками и строками в CSS Grid

  Grid-сетка состоит из **колонок (столбцов)** и **рядов (строк)**. Чтобы указать их размеры, мы используем свойства:

  - \`grid-template-columns\` — задаёт количество и ширину **колонок**
  - \`grid-template-rows\` — задаёт количество и высоту **строк**

  ---

  ## grid-template-columns

  Это главное свойство, которое определяет, **сколько будет колонок** и **какого они размера**.

  Примеры:

  \`\`\`css
  grid-template-columns: 200px 1fr 2fr;
  \`\`\`

  - первая колонка — фиксированная (200px)
  - вторая — занимает 1 часть свободного пространства
  - третья — 2 части (в 2 раза шире второй)

   Можно использовать любые единицы: \`px\`, \`%\`, \`fr\`, \`auto\`, \`minmax()\`

  ---

  ## grid-template-rows

  Работает точно так же, но для **строк**:

  \`\`\`css
  grid-template-rows: auto 100px 1fr;
  \`\`\`

  - первая строка — по содержимому
  - вторая — фиксированная
  - третья — растягивается на всё оставшееся

  ---

  ## Единица измерения fr

  \`fr\` — это "fraction" (доля). Она делит всё свободное пространство между колонками или строками.

  Пример:

  \`\`\`css
  grid-template-columns: 1fr 1fr 1fr;
  \`\`\`

  Это три равные колонки (1/3 ширины каждая).

  ---

  ## Автоматические колонки

  Если ты не знаешь, сколько колонок точно нужно, можно использовать:

  \`\`\`css
  grid-template-columns: repeat(3, 1fr); /* 3 колонки по 1fr */
  \`\`\`

  Или адаптивно (будет позже): \`auto-fit\`, \`auto-fill\`

  ---

  ## Пример: 3 колонки с разной шириной и 2 строки

  \`\`\`css
  .grid {
    display: grid;
    grid-template-columns: 150px 1fr 2fr;
    grid-template-rows: auto 100px;
    gap: 10px;
  }
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 150px 1fr 2fr;
      grid-template-rows: auto 100px;
      gap: 10px;
      padding: 10px;
      background: #f0f0f0;
    }

    .item {
      background: #cce5ff;
      padding: 15px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.grid {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
  grid-template-rows: auto 100px;
  gap: 10px;
  padding: 10px;
  background: #f0f0f0;
}

.item {
  background: #cce5ff;
  padding: 15px;
  text-align: center;
  font-weight: bold;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "https://html5book.ru/css-grid/",
  ],
};
export const css_grid_3 = {
  id: "css_grid_3",
  title: "Автоматическое размещение: auto-fit и auto-fill",
  content: `
  ## Автоматическая адаптация колонок в CSS Grid

  Когда ты не знаешь, **сколько блоков будет на странице**, и хочешь, чтобы сетка **автоматически подстраивалась под ширину экрана**, пригодятся:

  - \`repeat()\`
  - \`minmax()\`
  - \`auto-fit\`
  - \`auto-fill\`

  Эти инструменты особенно полезны в **адаптивной вёрстке**.

  ---

  ## 1. repeat() — сокращение для колонок

  \`\`\`css
  grid-template-columns: repeat(3, 1fr); /* то же, что 1fr 1fr 1fr */
  \`\`\`

  ---

  ## 2. minmax(min, max)

  Позволяет задать колонке **минимальную и максимальную ширину**:

  \`\`\`css
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  \`\`\`

  Это значит: каждая колонка будет **не меньше 150px**, но **может растягиваться**, чтобы занять свободное место.

  ---

  ## 3. auto-fit vs auto-fill

  Оба работают с \`repeat()\`, но есть **важная разница**:

  ### auto-fill

  - Сетка старается **втиснуть как можно больше колонок**
  - Если места не хватает, появляются **пустые "невидимые" колонки**

  ### auto-fit

  - То же самое, но **пустые колонки схлопываются**
  - Элементы растягиваются на всё доступное пространство

  ---

  ## Пример:

  \`\`\`css
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  \`\`\`

  Это значит:
  - Минимум ширина колонки — 200px
  - Максимум — занимает всё свободное место
  - Количество колонок зависит от ширины экрана

  Эта запись делает **адаптивную сетку**, где количество колонок меняется автоматически.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      background: #f0f0f0;
      padding: 10px;
    }

    .item {
      background: #d4edda;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  background: #f0f0f0;
  padding: 10px;
}

.item {
  background: #d4edda;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/repeat",
    "https://developer.mozilla.org/ru/docs/Web/CSS/minmax",
    "https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",
  ],
};
export const css_grid_4 = {
  id: "css_grid_4",
  title: "Grid-area и именованные области",
  content: `
  ## Как управлять расположением элементов в сетке?

  Grid позволяет точно указывать, **в каких ячейках и на сколько** строк/колонок будет расположен элемент.  
  Есть 2 способа:

  1. Через явные линии сетки: \`grid-row\`, \`grid-column\`
  2. Через имена областей: \`grid-template-areas\` и \`grid-area\`

  ---

  ## Способ 1: Явное позиционирование

  Можно задать, с какой строки и по какую должен растянуться элемент:

  \`\`\`css
  .item {
    grid-column: 1 / 3; /* от 1 до 3 линии по горизонтали (занимает 2 колонки) */
    grid-row: 1 / 2;    /* от 1 до 2 линии по вертикали */
  }
  \`\`\`

  ---

  ## Способ 2: Именованные области (grid-template-areas)

  Это более понятный и **визуальный** способ описания структуры:

  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "header header"
      "sidebar content";
  }
  \`\`\`

  Каждый дочерний элемент получает имя:

  \`\`\`css
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .content { grid-area: content; }
  \`\`\`

   Имена должны совпадать с теми, что указаны в \`grid-template-areas\`

  ---

  ## Преимущество: читаемость

  Структура становится наглядной: можно "рисовать" макет прямо в CSS.

  ---

  ## Можно объединять ячейки

  Чтобы элемент занял несколько ячеек, просто повтори его имя:

  \`\`\`css
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "header header"
        "sidebar content";
      gap: 10px;
      background: #f0f0f0;
      padding: 10px;
    }

    .header {
      grid-area: header;
      background: #cce5ff;
    }

    .sidebar {
      grid-area: sidebar;
      background: #d4edda;
    }

    .content {
      grid-area: content;
      background: #f8d7da;
    }

    .grid > div {
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header header"
    "sidebar content";
  gap: 10px;
  background: #f0f0f0;
  padding: 10px;
}

.header {
  grid-area: header;
  background: #cce5ff;
}

.sidebar {
  grid-area: sidebar;
  background: #d4edda;
}

.content {
  grid-area: content;
  background: #f8d7da;
}

.grid > div {
  padding: 20px;
  text-align: center;
  font-weight: bold;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area",
    "https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-areas",
    "https://html5book.ru/css-grid/",
  ],
};
export const css_grid_5 = {
  id: "css_grid_5",
  title: "Сравнение Flex и Grid",
  content: `
  ## Flexbox vs Grid: в чём разница и что когда использовать

  Оба способа — Flex и Grid — отлично подходят для создания адаптивных интерфейсов.  
  Но у каждого есть **свои сильные стороны**.

  ---

  ## Основное отличие

  | Flexbox                 | Grid Layout                   |
  |-------------------------|-------------------------------|
  | Работает по **одной оси**     | Работает по **двум осям**         |
  | Элементы идут **в строку** или **в колонку** | Элементы размещаются **в ячейках сетки** |
  | Не нужно задавать размер всей сетки | Нужно заранее описать структуру (часто) |
  | Лучше для **контента**         | Лучше для **структуры макета**     |

  ---

  ## Когда использовать Flexbox?

  - Нужно просто выстроить элементы в строку или колонку
  - Не важна точная структура
  - Хочешь распределить отступы, выравнивание и порядок

  \`\`\`css
  display: flex;
  justify-content: space-between;
  align-items: center;
  \`\`\`

  ---

  ## Когда использовать Grid?

  - Нужна **табличная или карточная раскладка**
  - Элементы должны **располагаться и по строкам, и по колонкам**
  - Нужно точно управлять позиционированием

  \`\`\`css
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  \`\`\`

  ---

  ## Можно использовать оба вместе

  Это нормально — комбинировать:

  - Сначала сделать макет страницы через Grid
  - А внутри отдельных блоков (например, меню, карточки) использовать Flexbox

  ---

  ## Вывод

  | Характеристика              | Flexbox            | Grid               |
  |-----------------------------|--------------------|--------------------|
  | Оси                         | 1 (одномерный)     | 2 (двумерный)      |
  | Простая навигация / меню    | (да)               |  (избыточно)       |
  | Макет страницы              | (можно, но сложно) |  (да)              |
  | Выравнивание                | (да)               |  (да)              |
  | Поддержка браузерами        |   (широкая)        | (современные)      |
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-layout {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 20px;
      margin-bottom: 30px;
    }

    .flex-layout {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .box {
      background: #cce5ff;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h3>Grid Layout (двумерная сетка)</h3>
  <div class="grid-layout">
    <div class="box">Sidebar</div>
    <div class="box">Content</div>
  </div>

  <h3>Flex Layout (одномерная строка)</h3>
  <div class="flex-layout">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-bottom: 30px;
}

.flex-layout {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.box {
  background: #cce5ff;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}
  `.trim(),

  resources: [
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout",
  ],
};
