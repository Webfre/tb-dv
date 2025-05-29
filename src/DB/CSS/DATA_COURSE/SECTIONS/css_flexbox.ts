export const css_flexbox_1 = {
  id: "css_flexbox_task_1",
  title: "Что такое Flex-контейнер и элементы",
  content: `
  ## Что такое Flexbox?

  Flexbox — это способ расположить элементы в ряд или в столбик, чтобы они **гибко** подстраивались под размер экрана и занимали нужное пространство.

  Он упрощает верстку, когда нужно:

  - разместить блоки в строку или колонку
  - выровнять элементы по центру или по краям
  - чтобы блоки сами "растягивались" или "сжимались"

  ---

  ## Как включить Flexbox?

  Нужно просто добавить у родительского элемента:

  \`\`\`css
  display: flex;
  \`\`\`

  После этого все **прямые дети** становятся flex-элементами, и их можно настраивать.

  ---

  ## Что такое flex-контейнер?

  Flex-контейнер — это блок, на котором написано \`display: flex\`. Он управляет расположением всех своих детей.

  Например:

  \`\`\`html
  <div class="flex-container">
    <div>Блок 1</div>
    <div>Блок 2</div>
    <div>Блок 3</div>
  </div>
  \`\`\`

  ---

  ## Что такое flex-элементы?

  Это те блоки, которые находятся внутри flex-контейнера. Они могут:

  - **стоять в ряд**
  - **переноситься на следующую строку**
  - **растягиваться, сжиматься**
  - **менять порядок**

  ---

  ## Как работает направление?

  По умолчанию блоки идут **в строку слева направо** (как текст):

  \`\`\`css
  display: flex; /* по умолчанию: row */
  \`\`\`

  Но можно поменять направление на вертикальное (в колонку):

  \`\`\`css
  flex-direction: column;
  \`\`\`

  ---

  ## Главная идея

  Flexbox — это как "управляемая коробка", где ты говоришь:

  > “Поставь все блоки в ряд, пусть они растягиваются, а этот — шире других, а этот — в центр.”

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
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
    .flex-container {
      display: flex;
      border: 2px solid #ccc;
      padding: 10px;
      gap: 10px;
    }

    .flex-item {
      background-color: #cce5ff;
      padding: 20px;
      text-align: center;
      flex: 1;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_2 = {
  id: "css_flexbox_task_2",
  title: "Оси и направление.",
  content: `
  ## Оси и выравнивание в Flexbox

  Когда ты используешь Flexbox, ты **управляешь расположением блоков** внутри контейнера. Они могут идти в строку или колонку, и ты выбираешь, **куда именно их поставить** и **как их выровнять**.

  Чтобы всё это работало, нужно понимать:
  - в каком направлении идут элементы
  - как выравнивать по **главной оси**
  - как выравнивать по **второстепенной оси**

  ---

  ##  flex-direction — в какую сторону идут блоки

  Это свойство задаёт **направление главной оси**:

  - \`row\` — элементы идут в **строку слева направо** (по умолчанию)
  - \`row-reverse\` — в строку, но **справа налево**
  - \`column\` — элементы идут в **колонку сверху вниз**
  - \`column-reverse\` — в колонку, но **снизу вверх**

  \`\`\`css
  display: flex;
  flex-direction: row;
  \`\`\`

  ---

  ##  justify-content — выравнивание по главной оси

  Это свойство **распределяет блоки вдоль направления движения** (главной оси).  
  Главная ось зависит от \`flex-direction\`.

  ### Если блоки в строку (row) → главная ось — горизонтальная  
  ### Если блоки в колонку (column) → главная ось — вертикальная

  Вот как работают значения:

  - \`flex-start\` — прижать все блоки к началу (слева или сверху)
  - \`flex-end\` — прижать к концу (справа или снизу)
  - \`center\` — выровнять блоки по центру
  - \`space-between\` — **равные отступы между** блоками, **без отступов по краям**
  - \`space-around\` — отступы по краям есть, но они **в 2 раза меньше**, чем между блоками
  - \`space-evenly\` — **все отступы равны**, и между блоками, и по краям

  Пример:

  \`\`\`css
  justify-content: space-between;
  \`\`\`

  Если блоки идут в строку, то они будут растянуты по горизонтали и **равномерно распределены**.

  ---

  ##  align-items — выравнивание по поперечной оси

  Это **вторая ось**, которая идёт **перпендикулярно главной**:

  - При \`flex-direction: row\` — вертикально
  - При \`flex-direction: column\` — горизонтально

  Значения:

  - \`stretch\` — растянуть элементы на всю доступную высоту/ширину (по умолчанию)
  - \`flex-start\` — прижать к началу поперечной оси
  - \`flex-end\` — прижать к концу поперечной оси
  - \`center\` — выровнять по центру поперечной оси

  Пример:

  \`\`\`css
  align-items: center;
  \`\`\`

  ---

  ##  Визуально

  Допустим, у тебя блоки идут в **строку**:

  - \`justify-content\` управляет **горизонтальным выравниванием** (вдоль строки)
  - \`align-items\` управляет **вертикальным выравниванием** (вдоль высоты контейнера)

  А если блоки в **колонку**, то всё наоборот:

  - \`justify-content\` теперь по **вертикали**
  - \`align-items\` — по **горизонтали**

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="flex-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 150px;
      background-color: #f0f0f0;
      padding: 10px;
    }

    .item {
      background-color: #d4edda;
      padding: 20px;
      width: 100px;
      text-align: center;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content",
    "https://developer.mozilla.org/ru/docs/Web/CSS/align-items",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_3 = {
  id: "css_flexbox_task_3",
  title: "Обёртка и порядок.",
  content: `
  ## Обёртка и порядок элементов в Flexbox

  Иногда элементов слишком много, и они **не помещаются в одну строку**. Или нужно **поменять порядок** блоков, не меняя HTML.  
  Для этого есть два полезных свойства: \`flex-wrap\` и \`order\`.

  ---

  ##  flex-wrap — перенос элементов на следующую строку

  По умолчанию все flex-элементы пытаются уместиться в **одной строке**, даже если им не хватает места.

  \`\`\`css
  flex-wrap: nowrap;  /* значение по умолчанию */
  \`\`\`

  Чтобы элементы **переносились**, нужно написать:

  \`\`\`css
  flex-wrap: wrap;
  \`\`\`

  Тогда, если места мало, элементы перейдут на новую строку (или колонку — если flex-direction: column).

  Дополнительно:
  - \`wrap-reverse\` — перенос в обратную сторону

  ---

  ##  order — изменение порядка элементов

  Позволяет **управлять порядком отображения блоков**, даже если в HTML они идут иначе.

  Пример:

  \`\`\`html
  <div class="item one">1</div>
  <div class="item two">2</div>
  <div class="item three">3</div>
  \`\`\`

  А в CSS:

  \`\`\`css
  .one { order: 3; }
  .two { order: 1; }
  .three { order: 2; }
  \`\`\`

  Результат: сначала отобразится блок 2, потом 3, потом 1.

   По умолчанию у всех элементов \`order: 0\`.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="flex-container">
    <div class="item first">1</div>
    <div class="item second">2</div>
    <div class="item third">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
 .flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f0f0f0;
      padding: 10px;
    }

    .item {
      background-color: #cce5ff;
      width: 150px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-weight: bold;
    }

    .first {
      order: 3;
    }

    .second {
      order: 1;
    }

    .third {
      order: 2;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",
    "https://developer.mozilla.org/ru/docs/Web/CSS/order",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_4 = {
  id: "css_flexbox_task_4",
  title: "Размеры: flex-grow, flex-shrink, flex-basis",
  content: `
  ## Управление размерами элементов в Flexbox

  Flexbox позволяет удобно **распределять свободное пространство** между элементами.  
  Для этого используются три свойства: \`flex-grow\`, \`flex-shrink\`, \`flex-basis\`.

  Их можно писать по отдельности или сокращённо с помощью свойства \`flex\`.

  ---

  ##  flex-grow — как сильно элемент может растягиваться

  - Значение по умолчанию: \`0\`
  - Если \`1\`, элемент **заполняет всё свободное место**
  - Если у нескольких элементов разное значение, то место делится пропорционально

  \`\`\`css
  .item {
    flex-grow: 1;
  }
  \`\`\`

  Элементы с \`flex-grow: 0\` не растягиваются вообще.

  ---

  ##  flex-shrink — как сильно элемент может сжиматься

  - Значение по умолчанию: \`1\`
  - Если \`0\` — элемент **не сжимается**, даже если не помещается
  - Если \`1\` и больше — элемент может уменьшаться

  \`\`\`css
  .item {
    flex-shrink: 0;
  }
  \`\`\`

  Это полезно, если ты не хочешь, чтобы элемент становился слишком маленьким.

  ---

  ##  flex-basis — базовый размер до распределения места

  - Задаёт **начальный размер** элемента перед тем, как применятся grow/shrink
  - Может быть в \`px\`, \`%\`, \`auto\`

  \`\`\`css
  .item {
    flex-basis: 200px;
  }
  \`\`\`

  Если указать \`flex-basis: auto\`, то используется размер контента (как по умолчанию).

  ---

  ## Сокращённая запись: flex

  Вместо трёх свойств можно использовать одно:

  \`\`\`css
  flex: grow shrink basis;
  \`\`\`

  Например:

  \`\`\`css
  flex: 1 1 150px;
  \`\`\`

  Это значит:  
  – элемент может расти (1)  
  – может сжиматься (1)  
  – изначально ширина — 150px

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="flex-container">
    <div class="item grow">Растёт (2)</div>
    <div class="item no-grow">Не растёт (0)</div>
    <div class="item">Обычный</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .flex-container {
      display: flex;
      gap: 10px;
      background-color: #f0f0f0;
      padding: 10px;
    }

    .item {
      background-color: #cce5ff;
      padding: 20px;
      text-align: center;
      flex-basis: 100px;
    }

    .grow {
      flex-grow: 2;
    }

    .no-grow {
      flex-grow: 0;
    }

    .shrink {
      flex-shrink: 1;
    }

    .no-shrink {
      flex-shrink: 0;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  ],
};
export const css_flexbox_5 = {
  id: "css_flexbox_task_5",
  title: "Сравнение Flexbox с float и inline-block",
  content: `
  ## Зачем вообще нужен Flexbox?

  До Flexbox мы использовали \`float\` и \`inline-block\`, чтобы выстраивать блоки в строку. Но у этих способов были **неудобства**, особенно когда нужно было сделать адаптивность или выравнивание по вертикали.

  Flexbox появился, чтобы сделать это **проще и удобнее**.

  ---

  ##  float

  \`float\` — это старый способ. Изначально он создавался не для вёрстки блоков, а чтобы текст обтекал изображения.

  Минусы:
  - Блоки "выпадают" из потока
  - Нужно вручную сбрасывать обтекание (\`clear: both\`)
  - Нельзя выровнять по центру или по вертикали

  Пример:

  \`\`\`css
  .left {
    float: left;
    width: 50%;
  }
  \`\`\`

  ---

  ##  inline-block

  \`inline-block\` — это когда блоки ведут себя как слова: стоят в строку, но остаются блочными.

  Минусы:
  - Между элементами появляются **пробелы**
  - Сложно выравнивать и распределять пространство

  Пример:

  \`\`\`css
  .item {
    display: inline-block;
    width: 45%;
  }
  \`\`\`

  ---

  ##  Flexbox

  Flexbox был создан специально для вёрстки блоков в интерфейсе.

  Преимущества:
  - Легко выравнивать по центру — и по горизонтали, и по вертикали
  - Можно управлять отступами, размерами, порядком
  - Работает в любой ориентации (в строку или в колонку)
  - Подходит для адаптивной вёрстки

  Пример:

  \`\`\`css
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  \`\`\`

  ---

  ## Итого

  | Метод         | Что это такое                       | Когда использовать        |
  |---------------|--------------------------------------|----------------------------|
  | \`float\`        | Обтекание, старый способ            | Только для картинок и текста |
  | \`inline-block\`| Блоки в строку, как слова           | Редко, если не нужен Flex   |
  | **Flexbox**   | Современная гибкая вёрстка          | Почти всегда               |

  Сегодня Flexbox — это **основа современной верстки**. Он заменяет оба старых метода.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h3>inline-block</h3>
  <div class="inline-block">
    <div class="item">A</div>
    <div class="item">B</div>
  </div>

  <h3>float</h3>
  <div class="float clearfix">
    <div class="item">A</div>
    <div class="item">B</div>
  </div>

  <h3>Flexbox</h3>
  <div class="flex">
    <div class="item">A</div>
    <div class="item">B</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .inline-block .item {
      display: inline-block;
      width: 45%;
      background: #cce5ff;
      margin: 5px;
      text-align: center;
    }

    .float .item {
      float: left;
      width: 45%;
      background: #f8d7da;
      margin: 5px;
      text-align: center;
    }

    .flex {
      display: flex;
      gap: 10px;
    }

    .flex .item {
      flex: 1;
      background: #d4edda;
      text-align: center;
      padding: 10px;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  `.trim(),

  resources: [
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/css3-flexbox/",
  ],
};
export const css_flexbox_6 = {
  id: "css_flexbox_task_6",
  title: "Итоги и закрепление темы Flexbox",
  content: `
  ## Что нужно запомнить о Flexbox

  Flexbox — это современный способ выстраивать элементы **в строку или в колонку**, при этом они:

  - могут автоматически **растягиваться или сжиматься**
  - легко **выравниваются по центру**
  - могут **переноситься** на новые строки
  - можно **изменять их порядок**

  Всё начинается с:

  \`\`\`css
  display: flex;
  \`\`\`

  ---

  ## Ключевые свойства Flex-контейнера

  | Свойство           | Что делает                                        |
  |--------------------|---------------------------------------------------|
  | \`flex-direction\`    | Направление: строка или колонка                   |
  | \`justify-content\`   | Выравнивание по главной оси (вдоль направления)  |
  | \`align-items\`       | Выравнивание по поперечной оси (перпендикулярно) |
  | \`flex-wrap\`         | Разрешить перенос элементов на следующую строку |

  ---

  ## Ключевые свойства Flex-элементов

  | Свойство        | Что делает                                       |
  |-----------------|--------------------------------------------------|
  | \`flex-grow\`     | Насколько элемент может **расширяться**         |
  | \`flex-shrink\`   | Насколько элемент может **сжиматься**           |
  | \`flex-basis\`    | Начальный размер элемента                      |
  | \`flex\`          | Сокращённая запись: \`grow shrink basis\`       |
  | \`order\`         | Изменяет порядок отображения (без изменения HTML) |

  ---

  ## Типовой пример

  \`\`\`css
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .item {
    flex: 1 1 200px;
  }
  \`\`\`

  ---

  ## Советы:

  - Не забывай про **gap** — это простой способ задать отступы между flex-элементами.
  - Используй **media queries** вместе с \`flex-wrap\` и \`flex-direction: column\` для адаптивности.
  - Flexbox отлично сочетается с **Grid** — используй оба подхода там, где они удобны.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="item">Блок 1</div>
    <div class="item">Блок 2</div>
    <div class="item">Блок 3</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      gap: 20px;
      padding: 20px;
      background: #f0f0f0;
    }

    .item {
      flex: 1 1 200px;
      background: #d4edda;
      text-align: center;
      padding: 30px;
      font-weight: bold;
    }
  `.trim(),

  resources: [
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://html5book.ru/css3-flexbox/",
  ],
};
