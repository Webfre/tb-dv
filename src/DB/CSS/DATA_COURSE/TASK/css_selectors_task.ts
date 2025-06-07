// цвета в css
export const css_selectors_task_1 = {
  id: "css_selectors_task_1",
  module: "CSS",
  title: "Применение HEX, RGB, HSL цветов",
  topic: "Цвета в CSS",
  topicId: "css_selectors",
  sectionId: "css_selectors1",
  description:
    "Создайте HTML-документ с заголовками и абзацами, оформленными с использованием различных цветовых форматов (HEX, RGB, HSL).",
  steps: [
    "Создайте HTML-документ с тегами `<h1>`, `<h2>` и несколькими абзацами `<p>`",
    "Для заголовка `<h1>` задайте цвет в формате HEX (например, `#3498db`)",
    "Для заголовка `<h2>` задайте цвет в формате RGB (например, `rgb(46, 204, 113)`)",
    "Для одного из абзацев `<p>` используйте цвет в формате HSL (например, `hsl(120, 60%, 70%)`)",
    "Добавьте стили в CSS-файл или в `<style>` внутри страницы",
    "Проверьте, что все элементы отображаются с правильными цветами",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Цвета в CSS</title>
</head>
<body>
  <h1>Заголовок HEX цвета</h1>
  <h2>Заголовок RGB цвета</h2>
  <p>Абзац HSL цвета</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Цвета в CSS</title>
  <style>
    h1 {
      color: #3498db; /* HEX формат */
    }

    h2 {
      color: rgb(46, 204, 113); /* RGB формат */
    }

    p {
      color: hsl(120, 60%, 70%); /* HSL формат */
    }
  </style>
</head>
<body>
  <h1>Заголовок HEX цвета</h1>
  <h2>Заголовок RGB цвета</h2>
  <p>Абзац HSL цвета</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры цветовых форматов */

h1 {
  color: #3498db; /* HEX формат */
}

h2 {
  color: rgb(46, 204, 113); /* RGB формат */
}

p {
  color: hsl(120, 60%, 70%); /* HSL формат */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/color_value",
    "https://html5book.ru/css-color/",
    "https://css-tricks.com/hsl-hsla-is-great-for-programmatic-color-control/",
  ],
};
export const css_selectors_task_2 = {
  id: "css_selectors_task_2",
  module: "CSS",
  title: "Прозрачность с RGBA и HSLA",
  topic: "Цвета в CSS",
  topicId: "css_selectors",
  sectionId: "css_selectors1",
  description:
    "Создайте HTML-документ с блоками текста, применив прозрачные цвета с использованием RGBA и HSLA.",
  steps: [
    "Создайте HTML-документ с несколькими блоками `<div>`",
    "Задайте одному из блоков цвет фона с использованием RGBA (например, `rgba(255, 0, 0, 0.5)`) для полупрозрачного красного фона",
    "Для другого блока используйте HSLA (например, `hsla(200, 100%, 50%, 0.3)`) для полупрозрачного голубого фона",
    "Пропишите стили в CSS-файле или в `<style>` внутри страницы",
    "Проверьте, как прозрачность влияет на наложение элементов",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Прозрачные цвета в CSS</title>
</head>
<body>
  <div class="rgba-block">RGBA Color</div>
  <div class="hsla-block">HSLA Color</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Прозрачные цвета в CSS</title>
  <style>
    body {
      gap: 20px;
      padding: 20px;
    }

    .rgba-block {
      width: 200px;
      height: 150px;
      background-color: rgba(255, 0, 0, 0.5);
      color: white;
    }

    .hsla-block {
      width: 200px;
      height: 150px;
      background-color: hsla(200, 100%, 50%, 0.3);
      color: #333;
    }
  </style>
</head>
<body>
  <div class="rgba-block">RGBA Color</div>
  <div class="hsla-block">HSLA Color</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры использования RGBA и HSLA */
    body {
      gap: 20px;
      padding: 20px;
    }

    .rgba-block {
      width: 200px;
      height: 150px;
      background-color: rgba(255, 0, 0, 0.5);
      color: white;
    }

    .hsla-block {
      width: 200px;
      height: 150px;
      background-color: hsla(200, 100%, 50%, 0.3);
      color: #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/color_value/rgba",
    "https://developer.mozilla.org/ru/docs/Web/CSS/color_value/hsla",
    "https://html5book.ru/css-color/",
  ],
};
export const css_text_styling_task_1 = {
  id: "css_text_styling_task_1",
  module: "CSS",
  title: "Цвет текста",
  topic: "Цвета в CSS",
  topicId: "css_selectors",
  description: "Создайте HTML-документ с текстом, оформленным в разные цвета.",
  steps: [
    "Создайте HTML-документ с тремя абзацами `<p>`",
    "Задайте каждому абзацу уникальный класс",
    "Используйте CSS для задания цветов текста: красный, зелёный, синий",
    "Проверьте, что каждый абзац отображается в заданном цвете",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Цвет текста</title>
</head>
<body>
  <p class="red">Этот текст красный.</p>
  <p class="green">Этот текст зелёный.</p>
  <p class="blue">Этот текст синий.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Цвет текста</title>
  <style>
    .red {
      color: red;
    }
    .green {
      color: green;
    }
    .blue {
      color: blue;
    }
  </style>
</head>
<body>
  <p class="red">Этот текст красный.</p>
  <p class="green">Этот текст зелёный.</p>
  <p class="blue">Этот текст синий.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры задания цвета текста */
    .red {
      color: red;
    }
    .green {
      color: green;
    }
    .blue {
      color: blue;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/color",
    "https://html5book.ru/cvet-v-css/",
  ],
};

// Шрифты и текст
export const css_selectors_task_3 = {
  id: "css_selectors_task_3",
  module: "CSS",
  title: "Шрифты и стилизация текста",
  topic: "Шрифты и текст",
  topicId: "css_selectors",
  sectionId: "css_selectors2",
  description:
    "Создайте HTML-документ с текстом, оформленным с разными шрифтами, межстрочными интервалами и выравниванием.",
  steps: [
    "Создайте HTML-документ с заголовком `<h1>`, подзаголовком `<h2>` и несколькими абзацами `<p>`",
    "Для заголовка `<h1>` задайте шрифт Arial, размер 28px и выравнивание по центру",
    "Для подзаголовка `<h2>` используйте шрифт Georgia и межстрочный интервал 1.5",
    "Для абзацев `<p>` добавьте отступы между символами 0.2em и выравнивание текста по ширине (`justify`)",
    "Проверьте, что все стили корректно применяются",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Стилизация текста в CSS</title>
</head>
<body>
  <h1>Заголовок уровня 1</h1>
  <h2>Заголовок уровня 2</h2>
  <p>Это пример абзаца текста. Здесь используется межбуквенный интервал, выравнивание по ширине и шрифт Segoe UI.</p>
  <p>Попробуйте добавить больше текста, чтобы увидеть, как работает выравнивание и отступы между буквами.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Стилизация текста в CSS</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
      font-size: 28px;
      text-align: center;
    }

    h2 {
      font-family: Georgia, serif;
      font-size: 22px;
      line-height: 1.5;
    }

    p {
      font-family: "Segoe UI", Tahoma, sans-serif;
      letter-spacing: 0.2em;
      text-align: justify;
    }
  </style>
</head>
<body>
  <h1>Заголовок уровня 1</h1>
  <h2>Заголовок уровня 2</h2>
  <p>Это пример абзаца текста. Здесь используется межбуквенный интервал, выравнивание по ширине и шрифт Segoe UI.</p>
  <p>Попробуйте добавить больше текста, чтобы увидеть, как работает выравнивание и отступы между буквами.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры стилизации текста */

h1 {
  font-family: Arial, sans-serif;
  font-size: 28px;
  text-align: center;
}

h2 {
  font-family: Georgia, serif;
  font-size: 22px;
  line-height: 1.5;
}

p {
  font-family: "Segoe UI", Tahoma, sans-serif;
  letter-spacing: 0.2em;
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
export const css_selectors_task_4 = {
  id: "css_selectors_task_4",
  module: "CSS",
  title: "Работа с шрифтами и текстом",
  topic: "Шрифты и текст",
  topicId: "css_selectors",
  sectionId: "css_selectors2",
  description:
    "Создайте HTML-документ, в котором будут продемонстрированы различные шрифты, межстрочные интервалы, расстояния между буквами и выравнивание текста.",
  steps: [
    "Создайте HTML-документ с тремя заголовками `<h1>`, `<h2>`, `<h3>` и тремя абзацами `<p>`.",
    "Для заголовка `<h1>` примените шрифт `Arial`, размер `28px` и выравнивание по центру.",
    "Для заголовка `<h2>` используйте шрифт `Georgia`, размер `24px` и выравнивание по левому краю.",
    "Для заголовка `<h3>` задайте шрифт `Courier New`, размер `20px` и выравнивание по правому краю.",
    "Для первого абзаца `<p>` добавьте шрифт `Tahoma`, увеличенный межстрочный интервал `1.8` и отступы между символами `0.1em`.",
    "Для второго абзаца `<p>` примените шрифт `Verdana`, межстрочный интервал `1.5` и выравнивание текста по ширине (`justify`).",
    "Для третьего абзаца `<p>` используйте шрифт `Times New Roman`, увеличенный размер `18px` и выделите его жирным шрифтом.",
    "Проверьте, что все стили отображаются корректно.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Работа с шрифтами и текстом</title>
</head>
<body>
  <h1>Заголовок с Arial</h1>
  <h2>Заголовок с Georgia</h2>
  <h3>Заголовок с Courier New</h3>

  <p class="tahoma">
    Это пример текста с шрифтом Tahoma, увеличенным межстрочным интервалом (1.8) и отступами между символами.
  </p>

  <p class="verdana">
    Этот абзац оформлен шрифтом Verdana. Выравнивание выполнено по ширине, что позволяет тексту ровно располагаться в блоке.
  </p>

  <p class="times">
    Это пример текста с шрифтом Times New Roman, увеличенным размером (18px) и жирным выделением.
  </p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Работа с шрифтами и текстом</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
      font-size: 28px;
      text-align: center;
    }

    h2 {
      font-family: Georgia, serif;
      font-size: 24px;
      text-align: left;
    }

    h3 {
      font-family: "Courier New", monospace;
      font-size: 20px;
      text-align: right;
    }

    p.tahoma {
      font-family: Tahoma, sans-serif;
      line-height: 1.8;
      letter-spacing: 0.1em;
    }

    p.verdana {
      font-family: Verdana, sans-serif;
      line-height: 1.5;
      text-align: justify;
    }

    p.times {
      font-family: "Times New Roman", serif;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Заголовок с Arial</h1>
  <h2>Заголовок с Georgia</h2>
  <h3>Заголовок с Courier New</h3>

  <p class="tahoma">
    Это пример текста с шрифтом Tahoma, увеличенным межстрочным интервалом (1.8) и отступами между символами.
  </p>

  <p class="verdana">
    Этот абзац оформлен шрифтом Verdana. Выравнивание выполнено по ширине, что позволяет тексту ровно располагаться в блоке.
  </p>

  <p class="times">
    Это пример текста с шрифтом Times New Roman, увеличенным размером (18px) и жирным выделением.
  </p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
  /* Стили для заголовков */
    h1 {
      font-family: Arial, sans-serif;
      font-size: 28px;
      text-align: center;
    }

    h2 {
      font-family: Georgia, serif;
      font-size: 24px;
      text-align: left;
    }

    h3 {
      font-family: "Courier New", monospace;
      font-size: 20px;
      text-align: right;
    }

    /* Стили для абзацев */
    p.tahoma {
      font-family: Tahoma, sans-serif;
      line-height: 1.8;
      letter-spacing: 0.1em;
    }

    p.verdana {
      font-family: Verdana, sans-serif;
      line-height: 1.5;
      text-align: justify;
    }

    p.times {
      font-family: "Times New Roman", serif;
      font-size: 18px;
      font-weight: bold;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/font-family",
    "https://developer.mozilla.org/ru/docs/Web/CSS/line-height",
    "https://developer.mozilla.org/ru/docs/Web/CSS/letter-spacing",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-align",
  ],
};

export const css_text_styling_task_2 = {
  id: "css_text_styling_task_2",
  module: "CSS",
  title: "Жирный и курсивный текст",
  topic: "Шрифты и текст",
  topicId: "css_text_styling",
  description: "Оформите текст с помощью стилей font-weight и font-style.",
  steps: [
    "Создайте HTML-документ с двумя абзацами `<p>`",
    "Для первого абзаца используйте жирное начертание (`font-weight: bold`)",
    "Для второго абзаца примените курсив (`font-style: italic`)",
    "Проверьте, что стили применены корректно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Жирный и курсивный текст</title>
</head>
<body>
  <p class="bold">Этот текст жирный.</p>
  <p class="italic">Этот текст курсивный.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Жирный и курсивный текст</title>
  <style>
    .bold {
      font-weight: bold;
    }
    .italic {
      font-style: italic;
    }
  </style>
</head>
<body>
  <p class="bold">Этот текст жирный.</p>
  <p class="italic">Этот текст курсивный.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры задания стилей текста */
    .bold {
      font-weight: bold;
    }
    .italic {
      font-style: italic;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/font-weight",
    "https://developer.mozilla.org/ru/docs/Web/CSS/font-style",
  ],
};
export const css_text_styling_task_3 = {
  id: "css_text_styling_task_3",
  module: "CSS",
  title: "Тень текста",
  topic: "Шрифты и текст",
  topicId: "css_text_styling",
  sectionId: "css_text_styling1",
  description: "Добавьте тексту тень с помощью свойства text-shadow.",
  steps: [
    "Создайте HTML-документ с одним абзацем `<p>`",
    "Примените к тексту стиль тени (`text-shadow`)",
    "Используйте значения для горизонтального, вертикального смещения и размытия",
    "Проверьте, что тень отображается корректно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Тень текста</title>
</head>
<body>
  <p class="text-shadow">Этот текст имеет тень.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Тень текста</title>
  <style>
    .text-shadow {
      text-shadow: 2px 2px 5px gray;
    }
  </style>
</head>
<body>
  <p class="text-shadow">Этот текст имеет тень.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Пример тени текста */
 .text-shadow {
      text-shadow: 2px 2px 5px gray;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-shadow",
    "https://html5book.ru/css-text-shadow/",
  ],
};
export const css_text_styling_task_4 = {
  id: "css_text_styling_task_4",
  module: "CSS",
  title: "Стилизация списков",
  topic: "Шрифты и текст",
  topicId: "css_text_styling",
  sectionId: "css_text_styling2",
  description: "Создайте список с кастомными стилями элементов списка.",
  steps: [
    "Создайте HTML-документ с нумерованным и ненумерованным списком",
    "Задайте для ненумерованного списка кастомный маркер (`list-style-type`)",
    "Примените стиль для нумерованного списка с использованием CSS-свойства `list-style-type`",
    "Измените цвет и отступы у элементов списка",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Стилизация списков</title>
</head>
<body>
  <ul>
    <li>Первый элемент списка</li>
    <li>Второй элемент списка</li>
    <li>Третий элемент списка</li>
  </ul>

  <ol>
    <li>Пункт номер один</li>
    <li>Пункт номер два</li>
    <li>Пункт номер три</li>
  </ol>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Стилизация списков</title>
  <style>
    ul {
      list-style-type: square;
      color: blue;
    }

    ol {
      list-style-type: upper-roman;
      margin-left: 20px;
      color: green;
    }
  </style>
</head>
<body>
  <ul>
    <li>Первый элемент списка</li>
    <li>Второй элемент списка</li>
    <li>Третий элемент списка</li>
  </ul>

  <ol>
    <li>Пункт номер один</li>
    <li>Пункт номер два</li>
    <li>Пункт номер три</li>
  </ol>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Пример стилизации списков */
    ul {
      list-style-type: square;
      color: blue;
    }

    ol {
      list-style-type: upper-roman;
      margin-left: 20px;
      color: green;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type",
    "https://html5book.ru/spiski-v-html/",
  ],
};
export const css_text_styling_task_5 = {
  id: "css_text_styling_task_5",
  module: "CSS",
  title: "Тени для текста",
  topic: "Шрифты и текст",
  topicId: "css_text_styling",
  description: "Примените тени к тексту, используя различные стили теней.",
  steps: [
    "Создайте HTML-документ с заголовком (`<h1>`) и абзацем (`<p>`) ",
    "Для заголовка примените класс с простой тенью",
    "Для абзаца примените тень с размытием и смещением",
    "Попробуйте изменить цвет тени и ее прозрачность",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Тени для текста</title>
</head>
<body>
  <h1>Заголовок с тенью</h1>
  <p>Абзац с размытой и полупрозрачной тенью.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Тени для текста</title>
  <style>
    h1 {
      text-shadow: 2px 2px 5px gray;
    }

    p {
      text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <h1>Заголовок с тенью</h1>
  <p>Абзац с размытой и полупрозрачной тенью.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры теней для текста */
    h1 {
      text-shadow: 2px 2px 5px gray;
    }

    p {
      text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-shadow",
    "https://html5book.ru/css-text-shadow/",
  ],
};
export const css_text_styling_task_6 = {
  id: "css_text_styling_task_6",
  module: "CSS",
  title: "Оформление заголовков",
  topic: "Шрифты и текст",
  topicId: "css_text_styling",
  sectionId: "css_text_styling2",
  description:
    "Создайте HTML-документ с заголовками разного уровня (`<h1>` — `<h6>`) и стилизуйте их в CSS.",
  steps: [
    "Создайте HTML-документ с заголовками от `<h1>` до `<h6>`",
    "Примените к ним стили: цвет, отступы, выравнивание текста",
    "Для каждого уровня заголовка используйте разные шрифты и размер текста",
    "Задайте эффект при наведении (`hover`)",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Оформление заголовков</title>
</head>
<body>
  <h1>Заголовок H1</h1>
  <h2>Заголовок H2</h2>
  <h3>Заголовок H3</h3>
  <h4>Заголовок H4</h4>
  <h5>Заголовок H5</h5>
  <h6>Заголовок H6</h6>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Оформление заголовков</title>
  <style>
    h1 {
      font-size: 2.5em;
      color: #4CAF50;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 2.2em;
      color: #2196F3;
    }

    h3 {
      font-size: 2em;
      color: #FF5722;
    }

    h4 {
      font-size: 1.8em;
      color: #9C27B0;
    }

    h5 {
      font-size: 1.6em;
      color: #607D8B;
    }

    h6 {
      font-size: 1.4em;
      color: #795548;
    }

    h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover {
      color: #000000;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Заголовок H1</h1>
  <h2>Заголовок H2</h2>
  <h3>Заголовок H3</h3>
  <h4>Заголовок H4</h4>
  <h5>Заголовок H5</h5>
  <h6>Заголовок H6</h6>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры стилизации заголовков */
    h1 {
      font-size: 2.5em;
      color: #4CAF50;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 2.2em;
      color: #2196F3;
    }

    h3 {
      font-size: 2em;
      color: #FF5722;
    }

    h4 {
      font-size: 1.8em;
      color: #9C27B0;
    }

    h5 {
      font-size: 1.6em;
      color: #607D8B;
    }

    h6 {
      font-size: 1.4em;
      color: #795548;
    }

    h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover {
      color: #000000;
      cursor: pointer;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/font-size",
    "https://developer.mozilla.org/ru/docs/Web/CSS/color",
    "https://html5book.ru/css-hover/",
  ],
};
export const css_text_styling_task_7 = {
  id: "css_text_styling_task_7",
  module: "CSS",
  title: "Верстка статьи с форматированием",
  topic: "Шрифты и текст",
  topicId: "css_text_styling",
  sectionId: "css_text_styling3",
  description:
    "Сверстайте статью с использованием различных уровней заголовков, абзацев и списков. Добавьте стилизацию для удобства чтения.",
  steps: [
    "Создайте HTML-документ с заголовком `<h1>` и подзаголовками `<h2>`",
    "Разделите текст на логические абзацы",
    "Добавьте ненумерованный список для перечисления элементов",
    "Добавьте нумерованный список для шагов или этапов",
    "Примените CSS для задания отступов, цвета текста и межстрочного интервала",
    "Задайте стили для заголовков: цвет, выравнивание, шрифт",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Статья о веб-разработке</title>
</head>
<body>
  <h1>Основы веб-разработки</h1>

  <h2>Что такое HTML?</h2>
  <p>HTML — это язык разметки гипертекста, используемый для создания структуры веб-страниц. Он определяет содержание и расположение элементов на странице.</p>

  <h2>Основные теги HTML:</h2>
  <ul>
    <li>Теги заголовков: &lt;h1&gt; - &lt;h6&gt;</li>
    <li>Тег абзаца: &lt;p&gt;</li>
    <li>Тег списка: &lt;ul&gt;, &lt;ol&gt;</li>
    <li>Тег изображения: &lt;img&gt;</li>
  </ul>

  <h2>Этапы создания веб-страницы:</h2>
  <ol>
    <li>Создание структуры HTML.</li>
    <li>Стилизация с помощью CSS.</li>
    <li>Добавление интерактивности через JavaScript.</li>
    <li>Публикация на хостинге.</li>
  </ol>

  <p>Используя эти этапы, можно создать полноценную страницу, отображающуюся в браузере.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Статья о веб-разработке</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      color: #333;
    }

    h1 {
      font-size: 2.5em;
      color: #4CAF50;
      margin-bottom: 10px;
      text-align: center;
    }

    h2 {
      font-size: 1.8em;
      color: #2196F3;
      margin-top: 20px;
      border-bottom: 2px solid #2196F3;
      padding-bottom: 5px;
    }

    ul {
      list-style-type: square;
      margin-left: 20px;
      color: #555;
    }

    ol {
      margin-left: 20px;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>Основы веб-разработки</h1>
  <h2>Что такое HTML?</h2>
  <p>HTML — это язык разметки гипертекста, используемый для создания структуры веб-страниц. Он определяет содержание и расположение элементов на странице.</p>
  <h2>Основные теги HTML:</h2>
  <ul>
    <li>Теги заголовков: &lt;h1&gt; - &lt;h6&gt;</li>
    <li>Тег абзаца: &lt;p&gt;</li>
    <li>Тег списка: &lt;ul&gt;, &lt;ol&gt;</li>
    <li>Тег изображения: &lt;img&gt;</li>
  </ul>
  <h2>Этапы создания веб-страницы:</h2>
  <ol>
    <li>Создание структуры HTML.</li>
    <li>Стилизация с помощью CSS.</li>
    <li>Добавление интерактивности через JavaScript.</li>
    <li>Публикация на хостинге.</li>
  </ol>
  <p>Используя эти этапы, можно создать полноценную страницу, отображающуюся в браузере.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры стилизации статьи */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      color: #333;
    }

    h1 {
      font-size: 2.5em;
      color: #4CAF50;
      margin-bottom: 10px;
      text-align: center;
    }

    h2 {
      font-size: 1.8em;
      color: #2196F3;
      margin-top: 20px;
      border-bottom: 2px solid #2196F3;
      padding-bottom: 5px;
    }

    p {
      margin-bottom: 15px;
    }

    ul {
      list-style-type: square;
      margin-left: 20px;
      color: #555;
    }

    ol {
      margin-left: 20px;
      color: #555;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element",
    "https://developer.mozilla.org/ru/docs/Web/CSS",
  ],
};

// Размеры в CSS
export const css_selectors_task_5 = {
  id: "css_selectors_task_5",
  module: "CSS",
  title: "Управление размерами элементов",
  topic: "Размеры в CSS",
  topicId: "css_selectors",
  sectionId: "css_selectors3",
  description:
    "Создайте HTML-документ с блоками, которые будут адаптивными, используя свойства width, height, max-width, min-width.",
  steps: [
    "Создайте HTML-документ с двумя блоками `<div>`",
    "Для первого блока задайте ширину в пикселях (`300px`) и высоту (`150px`)",
    "Для второго блока укажите ширину в процентах (`50%`) от родительского контейнера",
    "Пропишите для второго блока `max-width: 600px` и `min-width: 150px`",
    "Проверьте, как блоки ведут себя при изменении ширины окна браузера",
    "Добавьте стили в CSS-файле или в `<style>` внутри страницы",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Управление размерами в CSS</title>
</head>
<body>
  <div class="fixed-size">Фиксированный размер</div>
  <div class="adaptive-size">Адаптивный размер</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Управление размерами в CSS</title>
  <style>
    .fixed-size {
      width: 300px;
      height: 150px;
      background-color: #3498db;
      color: white;
      text-align: center;
      line-height: 150px;
    }

    .adaptive-size {
      width: 50%;
      max-width: 600px;
      min-width: 150px;
      height: 150px;
      background-color: #2ecc71;
      color: white;
      text-align: center;
      line-height: 150px;
    }
  </style>
</head>
<body>
  <div class="fixed-size">Фиксированный размер</div>
  <div class="adaptive-size">Адаптивный размер</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Стили для первого блока (фиксированного размера) */
    .fixed-size {
      width: 300px;
      height: 150px;
      background-color: #3498db;
      color: white;
      text-align: center;
      line-height: 150px;
    }

    /* Стили для второго блока (адаптивного размера) */
    .adaptive-size {
      width: 50%;
      max-width: 600px;
      min-width: 150px;
      height: 150px;
      background-color: #2ecc71;
      color: white;
      text-align: center;
      line-height: 150px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://html5book.ru/css-width-height/",
  ],
};
export const css_selectors_task_6 = {
  id: "css_selectors_task_6",
  module: "CSS",
  title: "Контейнер с адаптивными размерами",
  topic: "Размеры в CSS",
  topicId: "css_selectors",
  sectionId: "css_selectors3",
  description:
    "Создайте HTML-документ с контейнером, внутри которого находится изображение и текст. Контейнер должен изменять размеры в зависимости от ширины экрана.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и внутри него поместите изображение `<img>` и абзац текста `<p>`",
    "Задайте контейнеру ширину в процентах (`80%`) и ограничьте её максимальной шириной `600px`",
    "Для изображения используйте ширину `100%`, чтобы оно подстраивалось под размер контейнера",
    "Для абзаца `<p>` добавьте выравнивание текста по центру",
    "Проверьте, как контейнер и изображение изменяют свои размеры при изменении ширины окна браузера",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивный контейнер с изображением</title>
</head>
<body>
  <div class="container">
    <img src="https://kochevnik.digital/wp-content/uploads/2024/02/plyazh-melasti-bali-819x1024.jpg" alt="Пример изображения">
    <p>Это пример адаптивного контейнера. Изображение подстраивается под ширину контейнера, а текст выровнен по центру.</p>
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
  <title>Адаптивный контейнер с изображением</title>
  <style>
    .container {
      width: 80%;
      max-width: 600px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
    }

    .container img {
      width: 100%;
      height: auto;
    }

    .container p {
      text-align: center;
      color: #333;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="https://kochevnik.digital/wp-content/uploads/2024/02/plyazh-melasti-bali-819x1024.jpg" alt="Пример изображения">
    <p>Это пример адаптивного контейнера. Изображение подстраивается под ширину контейнера, а текст выровнен по центру.</p>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Стили для контейнера */
    .container {
      width: 80%;
      max-width: 600px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
    }

    /* Стили для изображения */
    .container img {
      width: 100%;
      height: auto;
    }

    /* Стили для текста */
    .container p {
      text-align: center;
      color: #333;
      font-size: 16px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/height",
    "https://html5book.ru/css-width-height/",
  ],
};
export const css_sizes_task_1 = {
  id: "css_sizes_task_1",
  module: "CSS",
  title: "Фиксированные размеры блоков",
  topic: "Размеры в CSS",
  topicId: "css_sizes",
  description:
    "Создайте HTML-документ с двумя блоками фиксированной ширины и высоты.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте каждому блоку фиксированные размеры: ширина — 200px, высота — 150px",
    "Примените фоновые цвета: первый блок — синий, второй — зелёный",
    "Добавьте отступы между блоками",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Фиксированные размеры блоков</title>
</head>
<body>
  <div class="box blue"></div>
  <div class="box green"></div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фиксированные размеры блоков</title>
  <style>
    .box {
      width: 200px;
      height: 150px;
      margin-bottom: 10px;
    }

    .blue {
      background-color: blue;
    }

    .green {
      background-color: green;
    }
  </style>
</head>
<body>
  <div class="box blue"></div>
  <div class="box green"></div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Фиксированные размеры блоков */
    .box {
      width: 200px;
      height: 150px;
      margin-bottom: 10px;
    }

    .blue {
      background-color: blue;
    }

    .green {
      background-color: green;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/height",
  ],
};
export const css_sizes_task_2 = {
  id: "css_sizes_task_2",
  module: "CSS",
  title: "Процентные размеры блоков",
  topic: "Размеры в CSS",
  topicId: "css_sizes",
  description:
    "Создайте HTML-документ с блоками, занимающими 50% ширины страницы.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте каждому блоку ширину в процентах: 50%",
    "Примените разные фоновые цвета",
    "Проверьте, что они корректно масштабируются при изменении размера окна",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Процентные размеры блоков</title>
</head>
<body>
  <div class="container">
    <div class="box red"></div>
    <div class="box orange"></div>
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
  <title>Процентные размеры блоков</title>
  <style>
    .container {
      display: flex;
      gap: 10px;
    }
    .box {
      width: 50%;
      height: 100px;
    }
    .red {
      background-color: red;
    }
    .orange {
      background-color: orange;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box red"></div>
    <div class="box orange"></div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Процентные размеры блоков */
    .container {
      display: flex;
      gap: 10px;
    }
    .box {
      width: 50%;
      height: 100px;
    }
    .red {
      background-color: red;
    }
    .orange {
      background-color: orange;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/height",
  ],
};
export const css_sizes_task_3 = {
  id: "css_sizes_task_3",
  module: "CSS",
  title: "Эластичные размеры блоков",
  topic: "Размеры в CSS",
  topicId: "css_sizes",
  sectionId: "css_sizes2",
  description:
    "Создайте HTML-документ с блоками, размеры которых изменяются в зависимости от ширины и высоты окна браузера.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте первому блоку ширину 50vw и высоту 20vh",
    "Задайте второму блоку ширину 30vw и высоту 40vh",
    "Примените разные фоновые цвета",
    "Проверьте, что блоки масштабируются при изменении размера окна",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Эластичные размеры блоков</title>
</head>
<body>
  <div class="container">
    <div class="block-1"></div>
    <div class="block-2"></div>
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
  <title>Эластичные размеры блоков</title>
  <style>
    .container {
      display: flex;
      gap: 15px;
    }

    .block-1 {
      width: 50vw;
      height: 20vh;
      background-color: lightblue;
    }

    .block-2 {
      width: 30vw;
      height: 40vh;
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="block-1"></div>
    <div class="block-2"></div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Эластичные размеры блоков */
    .container {
      display: flex;
      gap: 15px;
    }

    .block-1 {
      width: 50vw;
      height: 20vh;
      background-color: lightblue;
    }

    .block-2 {
      width: 30vw;
      height: 40vh;
      background-color: lightgreen;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/length",
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/height",
  ],
};
export const css_sizes_task_4 = {
  id: "css_sizes_task_4",
  module: "CSS",
  title: "Минимальные и максимальные размеры блоков",
  topic: "Размеры в CSS",
  topicId: "css_sizes",
  sectionId: "css_sizes2",
  description:
    "Создайте HTML-документ с блоками, имеющими минимальные и максимальные размеры.",
  steps: [
    "Создайте HTML-документ с тремя `<div>`",
    "Задайте первому блоку min-width: 200px и max-width: 400px",
    "Задайте второму блоку min-height: 100px и max-height: 300px",
    "Задайте третьему блоку одновременно min-width и max-height",
    "Проверьте, как блоки ведут себя при изменении размера окна",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Минимальные и максимальные размеры блоков</title>
</head>
<body>
  <div class="container">
    <div class="block-1"></div>
    <div class="block-2"></div>
    <div class="block-3"></div>
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
  <title>Минимальные и максимальные размеры блоков</title>
  <style>
    .container {
      display: flex;
      gap: 15px;
    }

    .block-1 {
      min-width: 200px;
      max-width: 400px;
      height: 100px;
      background-color: lightcoral;
    }

    .block-2 {
      width: 100px;
      min-height: 100px;
      max-height: 300px;
      background-color: lightseagreen;
    }

    .block-3 {
      min-width: 150px;
      max-height: 200px;
      background-color: lightskyblue;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="block-1"></div>
    <div class="block-2"></div>
    <div class="block-3"></div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Минимальные и максимальные размеры блоков */
    .container {
      display: flex;
      gap: 15px;
    }

    .block-1 {
      min-width: 200px;
      max-width: 400px;
      height: 100px;
      background-color: lightcoral;
    }

    .block-2 {
      width: 100px;
      min-height: 100px;
      max-height: 300px;
      background-color: lightseagreen;
    }

    .block-3 {
      min-width: 150px;
      max-height: 200px;
      background-color: lightskyblue;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/min-width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-height",
  ],
};
export const css_sizes_task_5 = {
  id: "css_sizes_task_5",
  module: "CSS",
  title: "Адаптивный блок без медиа-запросов",
  topic: "Размеры в CSS",
  topicId: "css_sizes",
  sectionId: "css_sizes3",
  description:
    "Создайте адаптивный HTML-документ с блоком, который изменяет размеры в зависимости от ширины окна без использования медиа-запросов.",
  steps: [
    "Создайте HTML-документ с одним `<div>`",
    "Задайте блоку начальные размеры: ширина 50vw, высота 20vh",
    "Задайте фон блоку и добавьте границу",
    "Пропишите стили так, чтобы при изменении размера окна блок плавно менял размеры",
    "Добавьте эффекты перехода при изменении размеров",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивный блок без медиа-запросов</title>
</head>
<body>
  <div class="adaptive-block"></div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Адаптивный блок без медиа-запросов</title>
  <style>
    .adaptive-block {
      width: 50vw;
      height: 20vh;
      background-color: lightblue;
      border: 2px solid #333;
      transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
    }

    /* Эффект при изменении размеров окна */
    body:has(.adaptive-block:hover) .adaptive-block {
      background-color: lightgreen;
      width: 60vw;
      height: 25vh;
    }
  </style>
</head>
<body>
  <div class="adaptive-block"></div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Адаптивный блок без медиа-запросов */
    .adaptive-block {
      width: 50vw;
      height: 20vh;
      background-color: lightblue;
      border: 2px solid #333;
      transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
    }

    /* Эффект при изменении размеров окна */
    body:has(.adaptive-block:hover) .adaptive-block {
      background-color: lightgreen;
      width: 60vw;
      height: 25vh;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/length",
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://developer.mozilla.org/ru/docs/Web/CSS/vw",
    "https://developer.mozilla.org/ru/docs/Web/CSS/vh",
  ],
};
// Декорации текста в CSS

export const css_selectors_task_7 = {
  id: "css_selectors_task_7",
  module: "CSS",
  title: "Работа с подчёркиванием",
  topic: "Декорации текста в CSS",
  topicId: "css_selectors",
  sectionId: "css_selectors4",
  description:
    "Создайте HTML-документ с различными видами текстовых декораций: подчёркивание, зачёркивание, надчёркивание.",
  steps: [
    "Создайте HTML-документ с несколькими абзацами `<p>`",
    "Для первого абзаца используйте подчёркивание текста (`underline`)",
    "Для второго абзаца примените зачёркивание текста (`line-through`)",
    "Для третьего абзаца добавьте надчёркивание текста (`overline`)",
    "Для четвёртого абзаца используйте двойное подчёркивание и измените цвет линии на красный",
    "Пропишите стили в CSS-файле или в `<style>` внутри страницы",
    "Проверьте, что все стили корректно применяются",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Декорации текста в CSS</title>
</head>
<body>
  <p class="underline">Этот текст с подчёркиванием (underline).</p>
  <p class="line-through">Этот текст с зачёркиванием (line-through).</p>
  <p class="overline">Этот текст с надчёркиванием (overline).</p>
  <p class="double-underline">Этот текст с двойным подчёркиванием и красной линией.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декорации текста в CSS</title>
  <style>
    p.underline {
      text-decoration: underline;
    }

    p.line-through {
      text-decoration: line-through;
    }

    p.overline {
      text-decoration: overline;
    }

    p.double-underline {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="underline">Этот текст с подчёркиванием (underline).</p>
  <p class="line-through">Этот текст с зачёркиванием (line-through).</p>
  <p class="overline">Этот текст с надчёркиванием (overline).</p>
  <p class="double-underline">Этот текст с двойным подчёркиванием и красной линией.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры декорации текста */

.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}

.double-underline {
  text-decoration: underline;
  text-decoration-style: double;
  text-decoration-color: red;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration",
    "https://html5book.ru/css-text-decoration/",
    "https://css-tricks.com/almanac/properties/t/text-decoration/",
  ],
};
export const css_selectors_task_8 = {
  id: "css_selectors_task_8",
  module: "CSS",
  title: "Декорации текста и стили подчеркивания",
  topic: "Декорации текста в CSS",
  topicId: "css_selectors",
  sectionId: "css_selectors4",
  description:
    "Создайте HTML-документ с различными видами текстовых декораций: подчёркивание, зачёркивание и надчёркивание. Также примените разные стили линий и цвета подчеркивания.",
  steps: [
    "Создайте HTML-документ с пятью абзацами `<p>`",
    "Для первого абзаца используйте стиль `text-decoration: underline` с цветом `red`",
    "Для второго абзаца примените стиль `text-decoration: line-through` с цветом `blue`",
    "Для третьего абзаца добавьте стиль `text-decoration: overline` с цветом `green`",
    "Для четвёртого абзаца примените стиль `text-decoration: underline` с пунктирной линией (`dashed`) и цветом `orange`",
    "Для пятого абзаца используйте стиль `text-decoration: underline` с волнистой линией (`wavy`) и цветом `purple`",
    "Пропишите стили в CSS-файле или в `<style>` внутри страницы",
    "Проверьте, что все стили отображаются корректно",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Декорации текста в CSS</title>
</head>
<body>
  <p class="underline">Подчёркивание с красной линией.</p>
  <p class="line-through">Зачёркивание с синей линией.</p>
  <p class="overline">Надчёркивание с зелёной линией.</p>
  <p class="dashed">Пунктирное подчёркивание (dashed) с оранжевой линией.</p>
  <p class="wavy">Волнистое подчёркивание (wavy) с фиолетовой линией.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декорации текста в CSS</title>
  <style>
    p.underline {
      text-decoration: underline;
      text-decoration-color: red;
    }

    p.line-through {
      text-decoration: line-through;
      text-decoration-color: blue;
    }

    p.overline {
      text-decoration: overline;
      text-decoration-color: green;
    }

    p.dashed {
      text-decoration: underline;
      text-decoration-style: dashed;
      text-decoration-color: orange;
    }

    p.wavy {
      text-decoration: underline;
      text-decoration-style: wavy;
      text-decoration-color: purple;
    }
  </style>
</head>
<body>
  <p class="underline">Подчёркивание с красной линией.</p>
  <p class="line-through">Зачёркивание с синей линией.</p>
  <p class="overline">Надчёркивание с зелёной линией.</p>
  <p class="dashed">Пунктирное подчёркивание (dashed) с оранжевой линией.</p>
  <p class="wavy">Волнистое подчёркивание (wavy) с фиолетовой линией.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры декорации текста с разными стилями */
    p.underline {
      text-decoration: underline;
      text-decoration-color: red;
    }

    p.line-through {
      text-decoration: line-through;
      text-decoration-color: blue;
    }

    p.overline {
      text-decoration: overline;
      text-decoration-color: green;
    }

    p.dashed {
      text-decoration: underline;
      text-decoration-style: dashed;
      text-decoration-color: orange;
    }

    p.wavy {
      text-decoration: underline;
      text-decoration-style: wavy;
      text-decoration-color: purple;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration",
    "https://html5book.ru/css-text-decoration/",
    "https://css-tricks.com/almanac/properties/t/text-decoration/",
  ],
};
export const css_text_decoration_task_1 = {
  id: "css_text_decoration_task_1",
  module: "CSS",
  title: "Подчёркивание и зачёркивание текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Создайте HTML-документ с текстом, оформленным с помощью подчёркивания и зачёркивания.",
  steps: [
    "Создайте HTML-документ с двумя абзацами (`<p>`)",
    "Для первого абзаца примените подчёркивание текста (`text-decoration: underline`)",
    "Для второго абзаца используйте зачёркивание текста (`text-decoration: line-through`)",
    "Проверьте, что стили отображаются корректно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Декорации текста: Подчёркивание и зачёркивание</title>
</head>
<body>
  <p class="underline">Этот текст с подчёркиванием.</p>
  <p class="line-through">Этот текст с зачёркиванием.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декорации текста: Подчёркивание и зачёркивание</title>
  <style>
    .underline {
      text-decoration: underline;
    }

    .line-through {
      text-decoration: line-through;
    }
  </style>
</head>
<body>
  <p class="underline">Этот текст с подчёркиванием.</p>
  <p class="line-through">Этот текст с зачёркиванием.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры декорации текста */
    .underline {
      text-decoration: underline;
    }

    .line-through {
      text-decoration: line-through;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration",
    "https://html5book.ru/css-text-decoration/",
  ],
};
export const css_text_decoration_task_2 = {
  id: "css_text_decoration_task_2",
  module: "CSS",
  title: "Надчёркивание и двойное подчёркивание текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Добавьте к тексту надчёркивание и двойное подчёркивание с разным цветом линии.",
  steps: [
    "Создайте HTML-документ с двумя абзацами (`<p>`)",
    "Для первого абзаца примените надчёркивание текста (`text-decoration: overline`)",
    "Для второго абзаца используйте двойное подчёркивание (`text-decoration-style: double`)",
    "Задайте цвет линии для двойного подчёркивания (например, красный)",
    "Проверьте корректность отображения",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Надчёркивание и двойное подчёркивание</title>
</head>
<body>
  <p class="overline">Этот текст с надчёркиванием.</p>
  <p class="double-underline">Этот текст с двойным подчёркиванием и красной линией.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Надчёркивание и двойное подчёркивание</title>
  <style>
    .overline {
      text-decoration: overline;
    }

    .double-underline {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="overline">Этот текст с надчёркиванием.</p>
  <p class="double-underline">Этот текст с двойным подчёркиванием и красной линией.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Надчёркивание и двойное подчёркивание */
    .overline {
      text-decoration: overline;
    }

    .double-underline {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: red;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-style",
    "https://html5book.ru/css-text-decoration/",
  ],
};
export const css_text_decoration_task_3 = {
  id: "css_text_decoration_task_3",
  module: "CSS",
  title: "Изменение толщины декорации текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Создайте HTML-документ с текстом, оформленным с изменённой толщиной линий декорации.",
  steps: [
    "Создайте HTML-документ с двумя абзацами (`<p>`)",
    "Для первого абзаца примените подчёркивание с толщиной 3px",
    "Для второго абзаца используйте зачёркивание с толщиной 4px",
    "Задайте разные цвета линий для подчёркивания и зачёркивания",
    "Проверьте, что стили применяются корректно",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Толщина декорации текста</title>
</head>
<body>
  <p class="thick-underline">Этот текст с подчёркиванием толщиной 3px.</p>
  <p class="thick-line-through">Этот текст с зачёркиванием толщиной 4px.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Толщина декорации текста</title>
  <style>
    .thick-underline {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-decoration-color: blue;
    }

    .thick-line-through {
      text-decoration: line-through;
      text-decoration-thickness: 4px;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="thick-underline">Этот текст с подчёркиванием толщиной 3px.</p>
  <p class="thick-line-through">Этот текст с зачёркиванием толщиной 4px.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Изменение толщины декорации текста */
    .thick-underline {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-decoration-color: blue;
    }

    .thick-line-through {
      text-decoration: line-through;
      text-decoration-thickness: 4px;
      text-decoration-color: red;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-thickness",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-color",
  ],
};
export const css_text_decoration_task_4 = {
  id: "css_text_decoration_task_4",
  module: "CSS",
  title: "Комбинированное оформление текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Создайте HTML-документ с абзацем, в котором одновременно применяются подчёркивание, зачёркивание и надчёркивание.",
  steps: [
    "Создайте HTML-документ с одним абзацем (`<p>`)",
    "Примените к нему одновременно подчёркивание, зачёркивание и надчёркивание",
    "Используйте разные стили для каждого типа декорации",
    "Настройте цвет и толщину для каждой линии",
    "Проверьте, что все стили применяются корректно",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Комбинированное оформление текста</title>
</head>
<body>
  <p class="combined-decoration">Этот текст одновременно подчёркнут, зачёркнут и надчёркнут.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Комбинированное оформление текста</title>
  <style>
    .combined-decoration {
      text-decoration-line: underline overline line-through;
      text-decoration-thickness: 2px;
      text-decoration-color: #007ACC;
      text-decoration-style: solid;
    }
  </style>
</head>
<body>
  <p class="combined-decoration">Этот текст одновременно подчёркнут, зачёркнут и надчёркнут.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Комбинированное оформление текста */
    .combined-decoration {
      text-decoration-line: underline overline line-through;
      text-decoration-thickness: 2px;
      text-decoration-color: #007ACC;
      text-decoration-style: solid;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-line",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-thickness",
  ],
};
export const css_text_decoration_task_5 = {
  id: "css_text_decoration_task_5",
  module: "CSS",
  title: "Полное оформление абзаца с анимацией декорации",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  sectionId: "css_text_decoration3",
  description:
    "Создайте HTML-документ с абзацем, который содержит все виды декорации текста: подчёркивание, надчёркивание и зачёркивание. Добавьте анимацию при наведении на текст.",
  steps: [
    "Создайте HTML-документ с одним абзацем (`<p>`)",
    "Примените к абзацу одновременно подчёркивание, надчёркивание и зачёркивание",
    "Настройте стили линий: цвет, толщину и стиль (например, волнистая линия)",
    "Добавьте CSS-анимацию при наведении: плавное изменение цвета линий и толщины",
    "Проверьте, что при наведении эффект срабатывает плавно",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Полное оформление абзаца с анимацией декорации</title>
</head>
<body>
  <p class="fancy-text">
    Этот текст одновременно подчёркнут, надчёркнут и зачёркнут. При наведении линии меняют цвет и становятся толще.
  </p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Полное оформление абзаца с анимацией декорации</title>
  <style>
    .fancy-text {
      text-decoration-line: underline overline line-through;
      text-decoration-color: #007ACC;
      text-decoration-thickness: 2px;
      text-decoration-style: wavy;
      transition: text-decoration-color 0.3s ease, text-decoration-thickness 0.3s ease;
    }

    .fancy-text:hover {
      text-decoration-color: #ff6347;
      text-decoration-thickness: 4px;
    }
  </style>
</head>
<body>
  <p class="fancy-text">
    Этот текст одновременно подчёркнут, надчёркнут и зачёркнут. При наведении линии меняют цвет и становятся толще.
  </p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Полное оформление абзаца с анимацией декорации */
    .fancy-text {
      text-decoration-line: underline overline line-through;
      text-decoration-color: #007ACC;
      text-decoration-thickness: 2px;
      text-decoration-style: wavy;
      transition: text-decoration-color 0.3s ease, text-decoration-thickness 0.3s ease;
    }

    .fancy-text:hover {
      text-decoration-color: #ff6347;
      text-decoration-thickness: 4px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-line",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-style",
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
  ],
};
