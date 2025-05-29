export const css_box_model1 = {
  id: "css_box_model1",
  title: "Блочная модель (Box Model)",
  content: `
  ## Что такое блочная модель в CSS?

  Каждый элемент на странице рассматривается как прямоугольная коробка. Эта концепция называется **блочной моделью** (Box Model).

  Она состоит из четырёх слоёв:

  1. **Содержимое (content)** — текст, изображения и т.д.
  2. **Внутренние отступы (padding)** — пространство вокруг содержимого
  3. **Границы (border)** — рамка вокруг padding
  4. **Внешние отступы (margin)** — пространство между элементами

  ---

  ### Визуально:

  \`\`\`
  +-----------------------------+
  |          margin            |
  |  +---------------------+   |
  |  |      border         |   |
  |  |  +-------------+    |   |
  |  |  |   padding   |    |   |
  |  |  | +--------+  |    |   |
  |  |  | | content|  |    |   |
  |  |  | +--------+  |    |   |
  |  |  +-------------+    |   |
  |  +---------------------+   |
  +-----------------------------+
  \`\`\`

  ---

  ### Поведение размеров

  По умолчанию:

  \`\`\`css
  box-sizing: content-box;
  \`\`\`

  Это значит: **width/height применяются только к content**.

  Рекомендуется использовать:

  \`\`\`css
  box-sizing: border-box;
  \`\`\`

  Тогда размеры включают padding и border, что проще и предсказуемо.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="box">
    <p>Это элемент с блочной моделью: padding, border, margin</p>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
* {
  box-sizing: border-box;
}

.box {
  width: 300px;
  padding: 20px;
  margin: 30px auto;
  border: 5px solid #3498db;
  background-color: #ecf0f1;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/The_box_model",
    "https://html5book.ru/block-model/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
  ],
};
export const css_box_model2 = {
  id: "css_box_model2",
  title: "Типы отображения.",
  content: `
  ## Типы отображения элементов в CSS

  Поведение HTML-элементов зависит от их свойства \`display\`, которое определяет, **как элемент участвует в потоке документа**.

  Ниже — базовые типы отображения.

  ---

  ###  block

  - Элемент занимает всю доступную ширину родителя
  - Начинается с новой строки
  - Можно задавать width, height, margin, padding

  \`\`\`css
  display: block;
  \`\`\`

  Примеры: \`div\`, \`p\`, \`section\`

  ---

  ###  inline

  - Не начинается с новой строки
  - Ширина зависит от содержимого
  - **Нельзя** задать width и height
  - Только горизонтальные отступы (margin/padding)

  \`\`\`css
  display: inline;
  \`\`\`

  Примеры: \`span\`, \`a\`, \`strong\`

  ---

  ###  inline-block

  - Как inline — располагается в строке
  - Как block — можно задавать размеры, отступы

  \`\`\`css
  display: inline-block;
  \`\`\`

  Удобно для кнопок и небольших блоков в строке.

  ---

  ###  none

  - Элемент полностью скрывается
  - Не участвует в потоке, не занимает место

  \`\`\`css
  display: none;
  \`\`\`

  Используется для скрытия/показа элементов через JS или медиазапросы.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="block">Блочный элемент</div>
  <span class="inline">Инлайновый</span>
  <span class="inline">текст</span>
  <div class="inline-block">inline-block 1</div>
  <div class="inline-block">inline-block 2</div>
  <div class="hidden">Скрытый элемент</div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .block {
      display: block;
      width: 200px;
      background: #d1ecf1;
      margin-bottom: 10px;
    }

    .inline {
      display: inline;
      background: #f8d7da;
      padding: 5px;
    }

    .inline-block {
      display: inline-block;
      width: 150px;
      height: 40px;
      background: #d4edda;
      margin: 5px;
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
export const css_box_model3 = {
  id: "css_box_model3",
  title: "Смещение элементов.",
  content: `
  ## Свойства смещения: top, right, bottom, left

  Свойства \`top\`, \`right\`, \`bottom\`, \`left\` задают смещение элемента **относительно его родителя** или исходной позиции — в зависимости от \`position\`.

  Эти свойства работают только с элементами, у которых:

  \`\`\`css
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
  \`\`\`

  При \`position: static\` (по умолчанию) они игнорируются.

  ---

  ### Как работает смещение?

  ####  position: relative

  - Элемент остаётся на месте в потоке, **но визуально сдвигается**
  - Пространство под него всё ещё **резервируется**
  - Смещения задаются относительно его обычного положения

  \`\`\`css
  .box {
    position: relative;
    top: 20px;  /* вниз на 20px */
    left: 15px; /* вправо на 15px */
  }
  \`\`\`

  ####  position: absolute

  - Элемент **удаляется из потока**
  - Смещается относительно ближайшего родителя с \`position: relative\` (или \`<body>\`, если нет родителя)
  - **Не влияет** на расположение других элементов

  \`\`\`css
  .box {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  \`\`\`

  ####  position: fixed

  - Смещение происходит относительно **окна браузера**
  - Элемент остаётся на месте при прокрутке

  ####  position: sticky

  - Элемент ведёт себя как \`relative\`, пока не достигнет точки смещения, затем "прилипает"
  - Работает с \`top\`, \`left\`, \`right\`, \`bottom\`

  ---

  ### Дополнительно

  - Можно использовать любые единицы: \`px\`, \`em\`, \`%\`
  - Смещения могут быть отрицательными

  \`\`\`css
  top: -10px;  /* сдвинуть вверх */
  left: -20px; /* сдвинуть влево */
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="wrapper">
    <div class="relative">relative — сдвинут</div>
    <div class="absolute">absolute — в правом нижнем углу</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
   .wrapper {
      position: relative;
      width: 300px;
      height: 200px;
      background: #f9f9f9;
      border: 1px solid #ccc;
      margin-bottom: 30px;
    }

    .relative {
      position: relative;
      top: 15px;
      left: 20px;
      background: #cce5ff;
      padding: 10px;
    }

    .absolute {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: #f8d7da;
      padding: 10px;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/top",
    "https://developer.mozilla.org/ru/docs/Web/CSS/left",
    "https://html5book.ru/css-position/",
  ],
};
export const css_box_model4 = {
  id: "css_box_model4",
  title: "Позиционирование элементов.",
  content: `
  ## Позиционирование элементов в CSS

  Свойство \`position\` определяет, **как элемент размещается на странице** и можно ли его смещать с помощью \`top\`, \`right\`, \`bottom\`, \`left\`.

  ---

  ###  static (по умолчанию)

  - Элемент находится в нормальном потоке документа
  - Нельзя смещать с помощью top/right и т.д.
  - Это значение по умолчанию

  \`\`\`css
  position: static;
  \`\`\`

  ---

  ###  relative

  - Остаётся на своём месте в потоке
  - **Можно смещать**, но остальное содержимое не сдвигается
  - Часто используется как контекст для \`absolute\`

  \`\`\`css
  position: relative;
  top: 10px;
  left: 20px;
  \`\`\`

  ---

  ###  absolute

  - Элемент **удаляется из потока**
  - Позиционируется относительно ближайшего родителя с \`position: relative\` (или body, если не найдено)
  - Перекрывает другие элементы

  \`\`\`css
  position: absolute;
  top: 0;
  right: 0;
  \`\`\`

  ---

  ###  fixed

  - Позиционируется **относительно окна браузера**
  - Не двигается при прокрутке страницы

  \`\`\`css
  position: fixed;
  bottom: 10px;
  right: 10px;
  \`\`\`

  Используется, например, для кнопок "вверх", всплывающих блоков и т.п.

  ---

  ###  sticky

  - Сочетание relative и fixed
  - Ведёт себя как relative, **пока не "прилипнет"** к заданной позиции при прокрутке
  - Работает вместе с \`top\`, \`left\` и т.д.

  \`\`\`css
  position: sticky;
  top: 0;
  \`\`\`

  Применяется, например, для закреплённых заголовков таблиц.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="sticky-header">Закреплённый заголовок (sticky)</div>

  <div class="container">
    <p>Родитель с position: relative</p>
    <div class="absolute-box">Абсолютный элемент</div>
  </div>

  <div style="height: 1000px;">Скроллируемый контент</div>

  <div class="fixed-box">Фиксированный элемент</div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .container {
      position: relative;
      height: 200px;
      border: 2px solid #ccc;
      margin-bottom: 20px;
    }

    .absolute-box {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ffcccb;
      padding: 10px;
    }

    .fixed-box {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: #d4edda;
      padding: 10px;
    }

    .sticky-header {
      position: sticky;
      top: 0;
      background: #cce5ff;
      padding: 10px;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
    "https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/",
  ],
};
export const css_box_model5 = {
  id: "css_box_model5",
  title: "Слои, прокрутка и прозрачность.",
  content: `
  ## Управление слоями, прокруткой и прозрачностью

  CSS позволяет не только размещать элементы, но и управлять их **слоями**, **обрезкой** и **прозрачностью**.

  ---

  ###  z-index — порядок наложения

  - Управляет тем, какой элемент окажется **поверх** другого
  - Работает только с элементами, у которых задано \`position: relative/absolute/fixed/sticky\`

  \`\`\`css
  .front {
    z-index: 10;
  }

  .behind {
    z-index: 1;
  }
  \`\`\`

  Чем больше значение — тем выше слой.

  ---

  ###  overflow — поведение переполнения

  Управляет тем, **что делать с контентом**, выходящим за пределы блока:

  - \`visible\` (по умолчанию): содержимое выходит за границы
  - \`hidden\`: лишнее скрывается
  - \`scroll\`: всегда появляется полоса прокрутки
  - \`auto\`: полоса появляется при необходимости

  \`\`\`css
  .box {
    overflow: hidden;
  }
  \`\`\`

  Можно задавать отдельно по осям: \`overflow-x\`, \`overflow-y\`.

  ---

  ###  opacity — прозрачность элемента

  - Значение от \`0\` (полностью прозрачный) до \`1\` (полностью видимый)
  - Влияет на **весь элемент и его содержимое**

  \`\`\`css
  .transparent {
    opacity: 0.5;
  }
  \`\`\`

  Для прозрачности только фона — лучше использовать \`rgba()\` или \`hsla()\`.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="layer1">Нижний слой</div>
  <div class="layer2">Верхний слой (z-index + opacity)</div>

  <div class="scroll-box">
    <p>Это длинный текст внутри блока. Это длинный текст внутри блока. Это длинный текст внутри блока.</p>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
   .layer1, .layer2 {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 200px;
      height: 100px;
      padding: 10px;
    }

    .layer1 {
      background: #d1ecf1;
      z-index: 1;
    }

    .layer2 {
      background: #f8d7da;
      z-index: 10;
      opacity: 0.8;
    }

    .scroll-box {
      width: 200px;
      height: 100px;
      overflow: auto;
      border: 1px solid #ccc;
      margin-top: 150px;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://developer.mozilla.org/ru/docs/Web/CSS/overflow",
    "https://developer.mozilla.org/ru/docs/Web/CSS/opacity",
    "https://html5book.ru/css-z-index-overflow-opacity/",
  ],
};
