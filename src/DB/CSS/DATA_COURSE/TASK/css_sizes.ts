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
