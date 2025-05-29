export const css_selectors1 = {
  id: "css_selectors1",
  title: "Цвета.",
  content: `
  ## Цвета в CSS

  Цвет — одно из самых базовых и важных свойств в веб-дизайне. CSS поддерживает несколько форматов задания цвета.

  ###  Свойство \`color\`

  Свойство \`color\` используется для задания цвета **текста**. Оно принимает все основные цветовые форматы:

  \`\`\`css
  color: red;              /* По названию цвета */
  color: #ff0000;          /* HEX формат */
  color: rgb(255, 0, 0);   /* RGB формат */
  color: hsl(0, 100%, 50%);/* HSL формат */
  \`\`\`

  --- 

  ###  HEX-цвета

  Формат: \`#RRGGBB\` (или \`#RGB\`)

  - \`#ff0000\` — красный
  - \`#00ff00\` — зелёный
  - \`#0000ff\` — синий

  Это шестнадцатеричная запись цвета. Часто используется из-за краткости.

  --- 

  ###  RGB

  Формат: \`rgb(красный, зелёный, синий)\`

  Пример:
  \`\`\`css
  color: rgb(255, 0, 0); /* красный */
  \`\`\`

  Значения — от 0 до 255.

  --- 

  ###  RGBA

  То же, что и RGB, но добавляется альфа-канал (прозрачность).

  \`\`\`css
  background-color: rgba(0, 0, 255, 0.5); /* полупрозрачный синий */
  \`\`\`

  Альфа-значение — от 0 (полностью прозрачно) до 1 (полностью видно).

  --- 

  ###  HSL

  Формат: \`hsl(оттенок, насыщенность, яркость)\`

  \`\`\`css
  color: hsl(0, 100%, 50%);   /* красный */
  color: hsl(120, 100%, 50%); /* зелёный */
  color: hsl(240, 100%, 50%); /* синий */
  \`\`\`

  --- 

  ###  HSLA

  То же, что HSL, но с прозрачностью:

  \`\`\`css
  background-color: hsla(0, 100%, 50%, 0.3);
  \`\`\`

  --- 

  ### Какой формат выбирать?

  - HEX — кратко и понятно
  - RGB — удобно для динамики (JS)
  - HSL — удобно для настройки палитр (оттенки)
  - RGBA/HSLA — когда нужна прозрачность

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <p class="hex">HEX: #ff5733</p>
  <p class="rgb">RGB: rgb(60, 179, 113)</p>
  <p class="rgba">RGBA: полупрозрачный фон</p>
  <p class="hsl">HSL: hsl(200, 100%, 40%)</p>
  <p class="hsla">HSLA: hsla(340, 100%, 50%, 0.2)</p>
  <p class="text-example">Это пример использования <code>color</code> для текста.</p>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
   .hex {
      color: #ff5733;
    }

    .rgb {
      color: rgb(60, 179, 113);
    }

    .rgba {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .hsl {
      color: hsl(200, 100%, 40%);
    }

    .hsla {
      background-color: hsla(340, 100%, 50%, 0.2);
    }

    .text-example {
      color: red;
      font-size: 18px;
      margin-bottom: 10px;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/color_value",
    "https://html5book.ru/css-color/",
    "https://css-tricks.com/hsl-hsla-is-great-for-programmatic-color-control/",
  ],
};
export const css_selectors2 = {
  id: "css_selectors2",
  title: "Шрифты и текст.",
  content: `
  ## Стилизация текста в CSS

  Работа с текстом — один из важнейших аспектов веб-дизайна. Вот основные свойства, которые позволяют управлять его внешним видом.

  ---

  ###  font-family

  Определяет шрифт текста. Всегда указывай запасные варианты и тип семейства (sans-serif, serif, monospace):

  \`\`\`css
  font-family: "Roboto", Arial, sans-serif;
  \`\`\`

  ---

  ###  line-height

  Межстрочный интервал — влияет на читаемость текста. Может быть числом, процентом, единицей длины:

  \`\`\`css
  line-height: 1.5;
  \`\`\`

  ---

  ###  letter-spacing

  Управляет расстоянием между символами:

  \`\`\`css
  letter-spacing: 1px;
  \`\`\`

  ---

  ###  text-align

  Выравнивает текст по горизонтали:

  - \`left\` — по левому краю
  - \`right\` — по правому краю
  - \`center\` — по центру
  - \`justify\` — по ширине

  \`\`\`css
  text-align: justify;
  \`\`\`

  ---

  ### Дополнительно

  - \`font-size\`: размер шрифта
  - \`font-weight\`: насыщенность (например: 400, bold)
  - \`text-transform\`: преобразование регистра (uppercase, lowercase, capitalize)

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="text-block">
    <p>
      Это пример текста с настраиваемым шрифтом, межстрочным интервалом, расстоянием между буквами и выравниванием.
    </p>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
   .text-block {
      font-family: "Segoe UI", Tahoma, sans-serif;
      font-size: 18px;
      line-height: 1.6;
      letter-spacing: 0.5px;
      text-align: justify;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/font-family",
    "https://developer.mozilla.org/ru/docs/Web/CSS/line-height",
    "https://developer.mozilla.org/ru/docs/Web/CSS/letter-spacing",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-align",
  ],
};

export const css_selectors3 = {
  id: "css_selectors3",
  title: "Размеры.",
  content: `
  ## Размеры элементов в CSS

  Управление размерами позволяет задавать ширину и высоту элементов, а также их минимальные и максимальные границы.

  ---

  ###  width / height

  Задают **фиксированную ширину и высоту**:

  \`\`\`css
  width: 300px;
  height: 150px;
  \`\`\`

  Также можно использовать проценты, чтобы размеры были относительными:

  \`\`\`css
  width: 100%; /* занимает всю ширину родителя */
  \`\`\`

  ---

  ###  max-width / min-width

  Ограничивают размеры элемента при адаптивной верстке:

  \`\`\`css
  max-width: 600px; /* не больше 600px */
  min-width: 300px; /* не меньше 300px */
  \`\`\`

  Аналогично для высоты:

  \`\`\`css
  max-height: 400px;
  min-height: 200px;
  \`\`\`

  ---

  ###  Автоматическая высота

  Если не задана \`height\`, элемент подстраивается под содержимое. Это поведение по умолчанию для блочных элементов:

  \`\`\`css
  height: auto;
  \`\`\`

  ---

  ###  Размеры и padding

  Если используется \`box-sizing: content-box\`, то padding увеличивает итоговый размер элемента.

  Чтобы padding не влиял на ширину и высоту — применяй:

  \`\`\`css
  box-sizing: border-box;
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <p>Этот блок имеет гибкие размеры: max-width, min-width и padding. Он адаптируется под размер окна.</p>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .container {
      width: 90%;
      max-width: 600px;
      min-width: 300px;
      height: auto;
      padding: 20px;
      margin: 20px auto;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://html5book.ru/css-width-height/",
  ],
};
export const css_selectors4 = {
  id: "css_selectors4",
  title: "Декорации текста и управление подчеркиванием",
  content: `
  ## Декорации текста в CSS

  С помощью декораций можно добавлять линии к тексту, изменять их цвет и стиль, а также управлять их положением.

  ---

  ###  text-decoration

  Основное свойство, которое отвечает за декорации текста (подчёркивание, зачеркивание, надчёркивание):

  - \`underline\` — подчёркивание текста
  - \`overline\` — линия над текстом
  - \`line-through\` — зачёркивание текста
  - \`none\` — убрать все линии

  \`\`\`css
  .underline {
    text-decoration: underline;
  }

  .overline {
    text-decoration: overline;
  }

  .line-through {
    text-decoration: line-through;
  }

  .no-decoration {
    text-decoration: none;
  }
  \`\`\`

  ---

  ###  text-decoration-color

  Позволяет изменить цвет линии декорации:

  \`\`\`css
  .underline-colored {
    text-decoration: underline;
    text-decoration-color: crimson;
  }
  \`\`\`

  ---

  ###  text-decoration-style

  Определяет стиль линии:
  
  - \`solid\` — сплошная линия (по умолчанию)
  - \`dotted\` — точечная линия
  - \`dashed\` — пунктирная линия
  - \`wavy\` — волнистая линия

  \`\`\`css
  .underline-dotted {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  .underline-dashed {
    text-decoration: underline;
    text-decoration-style: dashed;
  }

  .underline-wavy {
    text-decoration: underline;
    text-decoration-style: wavy;
  }
  \`\`\`

  ---

  ###  text-decoration-thickness

  Позволяет изменять толщину линии:

  \`\`\`css
  .underline-thick {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  .underline-thin {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
  \`\`\`

  ---

  ###  Сочетания декораций

  Можно комбинировать разные декорации в одно свойство:

  \`\`\`css
  .multiple-decorations {
    text-decoration: underline overline;
    text-decoration-style: wavy;
    text-decoration-color: blue;
  }
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>CSS Декорации текста</title>
</head>
<body>
  <h1>CSS Декорации текста</h1>
  <p class="underline">Подчёркнутый текст</p>
  <p class="overline">Линия над текстом</p>
  <p class="line-through">Зачёркнутый текст</p>
  <p class="underline-colored">Цветное подчёркивание</p>
  <p class="underline-dotted">Точечное подчёркивание</p>
  <p class="underline-dashed">Пунктирное подчёркивание</p>
  <p class="underline-wavy">Волнистое подчёркивание</p>
  <p class="underline-thick">Толстое подчёркивание</p>
  <p class="underline-thin">Тонкое подчёркивание</p>
  <p class="multiple-decorations">Множественные декорации (подчёркивание и надчёркивание одновременно)</p>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.underline {
  text-decoration: underline;
}

.overline {
  text-decoration: overline;
}

.line-through {
  text-decoration: line-through;
}

.underline-colored {
  text-decoration: underline;
  text-decoration-color: crimson;
}

.underline-dotted {
  text-decoration: underline;
  text-decoration-style: dotted;
}

.underline-dashed {
  text-decoration: underline;
  text-decoration-style: dashed;
}

.underline-wavy {
  text-decoration: underline;
  text-decoration-style: wavy;
}

.underline-thick {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.underline-thin {
  text-decoration: underline;
  text-decoration-thickness: 1px;
}

.multiple-decorations {
  text-decoration: underline overline;
  text-decoration-style: wavy;
  text-decoration-color: blue;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration",
    "https://html5book.ru/css-text-decoration/",
    "https://css-tricks.com/almanac/properties/t/text-decoration/",
  ],
};
