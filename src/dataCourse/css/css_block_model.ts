export const css_block_model1 = {
  id: "css_block_model1",
  title: "Отступы: margin, padding, box-sizing",
  content: `
  ## Отступы в CSS

  Отступы позволяют управлять расстоянием между элементами (внешние) и внутри них (внутренние).

  ---

  ### 1. margin — внешний отступ

  Создаёт пространство **вокруг** элемента, отделяя его от других.

  \`\`\`css
  margin: 20px;            /* со всех сторон */
  margin: 10px 15px;       /* сверху/снизу — 10px, слева/справа — 15px */
  margin: 10px 15px 5px 0; /* сверху — 10px, справа — 15px, снизу — 5px, слева — 0 */
  \`\`\`

  Центрирование блока по горизонтали:

  \`\`\`css
  margin: 0 auto;
  \`\`\`

  ---

  ### 2. padding — внутренний отступ

  Добавляет пространство **внутри** элемента, между содержимым и его границей.

  \`\`\`css
  padding: 20px;            /* со всех сторон */
  padding: 10px 15px;       /* сверху/снизу — 10px, слева/справа — 15px */
  padding: 10px 15px 5px 0; /* сверху — 10px, справа — 15px, снизу — 5px, слева — 0 */
  \`\`\`

  ---

  ### 3. box-sizing — как рассчитываются размеры элемента

  По умолчанию в CSS ширина и высота элемента **не включают padding и border**.

  #### content-box (по умолчанию)

  \`width: 300px\` означает, что **только контент** будет 300px, а padding и border добавятся сверху:

  👉 итоговая ширина > 300px

  #### border-box (рекомендуется)

  \`width: 300px\` включает в себя padding и border. Это делает поведение более предсказуемым:

  👉 итоговая ширина = ровно 300px

  Рекомендуется устанавливать глобально:

  \`\`\`css
  * {
    box-sizing: border-box;
  }
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      box-sizing: border-box;
    }

    .box {
      width: 300px;
      padding: 20px;
      margin: 20px auto;
      background-color: #f0f0f0;
      border: 2px solid #ccc;
    }
  </style>
</head>
<body>
  <div class="box">
    <p>Этот блок имеет padding и margin. Благодаря box-sizing: border-box, его ширина не превышает 300px.</p>
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
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
    "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
    "https://html5book.ru/css-margin-padding/",
  ],
};
export const css_block_model2 = {
  id: "css_block_model2",
  title: "Границы, фон, скругления",
  content: `
  ## Границы, фон и скругления в CSS

  Эти свойства позволяют создавать визуально оформленные и структурированные блоки.

  ---

  ### 1. border — граница

  Граница элемента задаётся одной строкой или отдельными свойствами:

  \`\`\`css
  border: 2px solid #333;
  \`\`\`

  Также можно отдельно указать:

  - \`border-width\`
  - \`border-style\` (solid, dashed, dotted, none)
  - \`border-color\`

  Можно применять только к одной стороне:

  \`\`\`css
  border-top: 1px solid gray;
  border-left: none;
  \`\`\`

  ---

  ### 2. background — фон

  - \`background-color\`: цвет фона
  - \`background-image\`: изображение на фоне
  - \`background-repeat\`: повторять или нет (repeat, no-repeat)
  - \`background-position\`: позиция изображения
  - \`background-size\`: размер изображения (cover, contain)

  Пример:

  \`\`\`css
  background: url("bg.jpg") no-repeat center/cover;
  \`\`\`

  ---

  ### 3. border-radius — скругление углов

  Делает углы элемента округлыми:

  \`\`\`css
  border-radius: 10px;
  \`\`\`

  Можно задавать разные углы:

  \`\`\`css
  border-radius: 10px 0 10px 0;
  \`\`\`

  Для создания круга:

  \`\`\`css
  width: 100px;
  height: 100px;
  border-radius: 50%;
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 300px;
      padding: 20px;
      background-color: #f0f0f0;
      border: 2px dashed #888;
      border-radius: 12px;
      margin: 40px auto;
    }

    .circle {
      width: 100px;
      height: 100px;
      background-color: #4caf50;
      border-radius: 50%;
      margin: 20px auto;
    }
  </style>
</head>
<body>
  <div class="card">
    <p>Это блок с границей, фоном и скруглёнными углами.</p>
  </div>
  <div class="circle"></div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.card {
  background-color: #f0f0f0;
  border: 2px dashed #888;
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  margin: 40px auto;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: #4caf50;
  border-radius: 50%;
  margin: 20px auto;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/border",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius",
    "https://html5book.ru/css-border/",
  ],
};
