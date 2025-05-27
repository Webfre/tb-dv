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
export const css_selectors_task_7 = {
  id: "css_selectors_task_7",
  module: "CSS",
  title: "Декорации текста",
  topic: "Шрифты и текст",
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
  <title>Декорации текста в CSS</title>

  <style>
    /* Примеры декорации текста */
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

.underline {
  text-decoration: underline;
  text-decoration-color: red;
}

.line-through {
  text-decoration: line-through;
  text-decoration-color: blue;
}

.overline {
  text-decoration: overline;
  text-decoration-color: green;
}

.dashed {
  text-decoration: underline;
  text-decoration-style: dashed;
  text-decoration-color: orange;
}

.wavy {
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
