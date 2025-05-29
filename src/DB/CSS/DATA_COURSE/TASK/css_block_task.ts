// Отступы: margin, padding, box-sizing

export const css_block_model_task_1 = {
  id: "css_block_model_task_1",
  module: "CSS",
  title: "Внешние и внутренние отступы",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_block_model",
  sectionId: "css_block_model1",
  description:
    "Создайте HTML-документ с одним блочным элементом. Настройте его с помощью margin и padding, чтобы увидеть, как изменяются его размеры и положение на странице.",
  steps: [
    "Создайте HTML-документ с одним `<div>` элементом.",
    "Задайте ему ширину `200px` и фон.",
    "Примените к нему внешний отступ `margin: 20px` и посмотрите, как он отдаляется от соседних элементов.",
    "Добавьте внутренний отступ `padding: 10px` и обратите внимание, как увеличивается пространство внутри блока.",
    "Проверьте, как изменения margin и padding влияют на отображение элемента.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Отступы в CSS</title>
</head>
<body>
  <div class="box">
    Это блок с внешними и внутренними отступами.
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
  <title>Отступы в CSS</title>
  <style>
    .box {
      width: 200px;
      height: 100px;
      margin: 20px;
      padding: 10px;
      background-color: #d1ecf1;
      border: 2px solid #3498db;
    }
  </style>
</head>
<body>

  <div class="box">
    Это блок с внешними и внутренними отступами.
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
 /* Блок с отступами */
    .box {
      width: 200px;
      height: 100px;
      margin: 20px;
      padding: 10px;
      background-color: #d1ecf1;
      border: 2px solid #3498db;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
    "https://html5book.ru/css-margin-padding/",
  ],
};
export const css_block_model_task_2 = {
  id: "css_block_model_task_2",
  module: "CSS",
  title: "Управление размерами с помощью box-sizing",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_block_model",
  sectionId: "css_block_model1",
  description:
    "Создайте HTML-документ с двумя блочными элементами. Настройте первый с помощью box-sizing: content-box, а второй — с box-sizing: border-box. Изучите разницу в размерах при одинаковых значениях width и padding.",
  steps: [
    "Создайте HTML-документ с двумя `<div>` элементами.",
    "Для первого элемента задайте `box-sizing: content-box` (по умолчанию).",
    "Для второго элемента примените `box-sizing: border-box`.",
    "Установите одинаковую ширину для обоих блоков: `300px`.",
    "Добавьте padding в 20px и границу в 2px для обоих элементов.",
    "Проверьте, как разница в `box-sizing` влияет на итоговый размер.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Box-sizing в CSS</title>
</head>
<body>
  <div class="content-box">
    <p>box-sizing: content-box (по умолчанию). Итоговая ширина больше 300px.</p>
  </div>
  <div class="border-box">
    <p>box-sizing: border-box. Итоговая ширина ровно 300px.</p>
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
  <title>Box-sizing в CSS</title>
  <style>
    .content-box {
      width: 300px;
      padding: 20px;
      border: 2px solid #3498db;
      margin-bottom: 10px;
      background-color: #d1ecf1;
      box-sizing: content-box;
    }

    .border-box {
      width: 300px;
      padding: 20px;
      border: 2px solid #f8d7da;
      background-color: #f8d7da;
      box-sizing: border-box;
    }
  </style>
</head>
<body>

  <div class="content-box">
    <p>box-sizing: content-box (по умолчанию). Итоговая ширина больше 300px.</p>
  </div>

  <div class="border-box">
    <p>box-sizing: border-box. Итоговая ширина ровно 300px.</p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Элемент по умолчанию (content-box) */
.content-box {
  width: 300px;
  padding: 20px;
  border: 2px solid #3498db;
  margin-bottom: 10px;
  background-color: #d1ecf1;
  box-sizing: content-box;
}

/* Элемент с border-box */
.border-box {
  width: 300px;
  padding: 20px;
  border: 2px solid #f8d7da;
  background-color: #f8d7da;
  box-sizing: border-box;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
    "https://html5book.ru/css-box-sizing/",
    "https://css-tricks.com/box-sizing/",
  ],
};
export const css_block_model_task_3 = {
  id: "css_block_model_task_3",
  module: "CSS",
  title: "Центрирование и комбинированные отступы",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_block_model",
  sectionId: "css_block_model1",
  description:
    "Создайте HTML-документ с двумя блочными элементами. Настройте один из них для центрирования по горизонтали, а другой — с разными отступами (margin) со всех сторон.",
  steps: [
    "Создайте HTML-документ с двумя `<div>` элементами.",
    "Для первого элемента примените горизонтальное центрирование с помощью `margin: 0 auto`.",
    "Задайте ему ширину `300px` и фон для наглядности.",
    "Для второго элемента установите разные отступы: сверху — 20px, справа — 40px, снизу — 30px, слева — 10px.",
    "Добавьте к нему ширину `200px` и фон.",
    "Проверьте, как элементы располагаются относительно страницы.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Центрирование и комбинированные отступы</title>
</head>
<body>
  <div class="centered-box">
    Блок, центрированный по горизонтали
  </div>
  <div class="spaced-box">
    Блок с разными отступами
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
  <title>Центрирование и комбинированные отступы</title>
  <style>
   .centered-box {
  width: 300px;
  height: 100px;
  background-color: #d1ecf1;
  margin: 0 auto;
  border: 2px solid #3498db;
}

/* Комбинированные отступы */
.spaced-box {
  width: 200px;
  height: 100px;
  background-color: #f8d7da;
  margin: 20px 40px 30px 10px;
  border: 2px solid #f5c6cb;
}
  </style>
</head>
<body>

  <div class="centered-box">
    Блок, центрированный по горизонтали
  </div>

  <div class="spaced-box">
    Блок с разными отступами
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Центрирование по горизонтали */
.centered-box {
  width: 300px;
  height: 100px;
  background-color: #d1ecf1;
  margin: 0 auto;
  border: 2px solid #3498db;
}

/* Комбинированные отступы */
.spaced-box {
  width: 200px;
  height: 100px;
  background-color: #f8d7da;
  margin: 20px 40px 30px 10px;
  border: 2px solid #f5c6cb;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://html5book.ru/css-margin-padding/",
  ],
};
export const css_spacing_task_1 = {
  id: "css_spacing_task_1",
  module: "CSS",
  title: "Настройка внешних и внутренних отступов (margin и padding)",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_spacing",
  description:
    "Создайте HTML-документ, в котором настроены внешние (`margin`) и внутренние (`padding`) отступы для нескольких блоков.",
  steps: [
    "Создайте HTML-документ с тремя блоками (`<div>`)",
    "Настройте для каждого блока разные значения `margin` и `padding`",
    "Настройте стили: цвет фона, границы, размеры",
    "Проверьте, как отображаются блоки с разными отступами",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Отступы: margin и padding</title>
</head>
<body>

  <div class="block-1">
    Внешние отступы: 20px, внутренние отступы: 10px
  </div>

  <div class="block-2">
    Внешние отступы: 30px сверху/снизу, 15px слева/справа<br>
    Внутренние отступы: 15px сверху/снизу, 5px слева/справа
  </div>

  <div class="block-3">
    Внешние отступы: авто слева и справа, 5px сверху/снизу<br>
    Внутренние отступы: 20px, фиксированная ширина 400px
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
  <title>Отступы: margin и padding</title>
  <style>
    .block-1 {
      margin: 20px;
      padding: 10px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    .block-2 {
      margin: 30px 15px;
      padding: 15px 5px;
      background-color: lightgreen;
      border: 2px solid #333;
    }

    .block-3 {
      margin: 5px auto;
      padding: 20px;
      width: 400px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="block-1">
    Внешние отступы: 20px, внутренние отступы: 10px
  </div>

  <div class="block-2">
    Внешние отступы: 30px сверху/снизу, 15px слева/справа<br>
    Внутренние отступы: 15px сверху/снизу, 5px слева/справа
  </div>

  <div class="block-3">
    Внешние отступы: авто слева и справа, 5px сверху/снизу<br>
    Внутренние отступы: 20px, фиксированная ширина 400px
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Внешние и внутренние отступы для блоков */
    .block-1 {
      margin: 20px;
      padding: 10px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    .block-2 {
      margin: 30px 15px;
      padding: 15px 5px;
      background-color: lightgreen;
      border: 2px solid #333;
    }

    .block-3 {
      margin: 5px auto;
      padding: 20px;
      width: 400px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
    "https://html5book.ru/css-margin-padding/",
  ],
};
export const css_spacing_task_2 = {
  id: "css_spacing_task_2",
  module: "CSS",
  title: "Использование box-sizing для управления размерами блоков",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_spacing",
  description:
    "Создайте HTML-документ с двумя блоками: один с обычным расчётом ширины, второй с применением `box-sizing: border-box`. Сравните их размеры.",
  steps: [
    "Создайте HTML-документ с двумя блоками (`<div>`)",
    "Настройте для первого блока стандартный расчёт размеров (`content-box`)",
    "Для второго блока примените `box-sizing: border-box`",
    "Настройте размеры, внутренние отступы и границы",
    "Проверьте, как отличается отображение",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Использование box-sizing</title>
</head>
<body>

  <div class="content-box">
    <p>content-box (по умолчанию):</p>
    <p>Ширина блока = ширина контента (300px) + padding (20px * 2) + border (5px * 2)</p>
    <p>Итоговая ширина: 350px</p>
  </div>

  <div class="border-box">
    <p>border-box:</p>
    <p>Ширина блока = 300px (включая padding и border)</p>
    <p>Итоговая ширина: 300px</p>
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
  <title>Использование box-sizing</title>
  <style>
    .content-box {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      margin-bottom: 15px;
      background-color: lightblue;
      box-sizing: content-box;
    }

    .border-box {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      background-color: lightgreen;
      box-sizing: border-box;
    }

    p {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
    }
  </style>
</head>
<body>

  <div class="content-box">
    <p>content-box (по умолчанию):</p>
    <p>Ширина блока = ширина контента (300px) + padding (20px * 2) + border (5px * 2)</p>
    <p>Итоговая ширина: 350px</p>
  </div>

  <div class="border-box">
    <p>border-box:</p>
    <p>Ширина блока = 300px (включая padding и border)</p>
    <p>Итоговая ширина: 300px</p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры box-sizing */
  .content-box {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      margin-bottom: 15px;
      background-color: lightblue;
      box-sizing: content-box;
    }

    .border-box {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      background-color: lightgreen;
      box-sizing: border-box;
    }

    p {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
    "https://html5book.ru/css-box-sizing/",
  ],
};
export const css_spacing_task_3 = {
  id: "css_spacing_task_3",
  module: "CSS",
  title: "Карточки с комбинированными отступами и box-sizing",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_spacing",
  description:
    "Создайте HTML-документ с карточками, которые используют внешние отступы (`margin`), внутренние отступы (`padding`) и корректный расчёт размеров с использованием `box-sizing`.",
  steps: [
    "Создайте HTML-документ с несколькими карточками (`<div>`)",
    "Настройте для каждой карточки: внешние отступы (margin), внутренние отступы (padding), обрамление (border)",
    "Примените `box-sizing: border-box`, чтобы итоговая ширина оставалась фиксированной",
    "Добавьте стилизацию: фон, заголовок и текст",
    "Проверьте, что карточки одинакового размера, даже с разными отступами",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Карточки с margin, padding и box-sizing</title>
</head>
<body>

  <div class="card-container">
    <div class="card">
      <h3>Карточка 1</h3>
      <p>Это первая карточка с использованием box-sizing: border-box.</p>
      <p>Все отступы, границы и ширина входят в общую ширину карточки.</p>
    </div>

    <div class="card">
      <h3>Карточка 2</h3>
      <p>Внешние отступы (margin) — 15px.</p>
      <p>Внутренние отступы (padding) — 20px.</p>
    </div>

    <div class="card">
      <h3>Карточка 3</h3>
      <p>Ширина не превышает 300px, несмотря на padding и border.</p>
      <p>Это достигается за счет box-sizing: border-box.</p>
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
  <title>Карточки с margin, padding и box-sizing</title>
  <style>
    .card-container {
      display: inline-block;
      width: 100%;
    }

    .card {
      width: 300px;
      margin: 15px;
      padding: 20px;
      border: 2px solid #333;
      background-color: lightblue;
      box-sizing: border-box;
      float: left;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <div class="card-container">
    <div class="card">
      <h3>Карточка 1</h3>
      <p>Это первая карточка с использованием box-sizing: border-box.</p>
      <p>Все отступы, границы и ширина входят в общую ширину карточки.</p>
    </div>

    <div class="card">
      <h3>Карточка 2</h3>
      <p>Внешние отступы (margin) — 15px.</p>
      <p>Внутренние отступы (padding) — 20px.</p>
    </div>

    <div class="card">
      <h3>Карточка 3</h3>
      <p>Ширина не превышает 300px, несмотря на padding и border.</p>
      <p>Это достигается за счет box-sizing: border-box.</p>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Карточки с margin, padding и box-sizing */
  .card-container {
      display: inline-block;
      width: 100%;
    }

    .card {
      width: 300px;
      margin: 15px;
      padding: 20px;
      border: 2px solid #333;
      background-color: lightblue;
      box-sizing: border-box;
      float: left;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
  ],
};
export const css_spacing_task_4 = {
  id: "css_spacing_task_4",
  module: "CSS",
  title: "Карточки в ряд с эффектом margin collapse",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_spacing",
  description:
    "Создайте HTML-документ с несколькими карточками, которые располагаются в ряд и демонстрируют эффект схлопывания отступов (`margin collapse`).",
  steps: [
    "Создайте HTML-документ с контейнером и несколькими карточками (`<div>`)",
    "Настройте внешние отступы (`margin`) таким образом, чтобы они схлопывались",
    "Настройте стили для карточек, добавьте фон, границы, внутренние отступы",
    "Проверьте, как отображаются карточки в ряду",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Margin Collapse в карточках</title>
</head>
<body>

  <div class="card-container clearfix">
    <div class="card">
      <h3>Карточка 1</h3>
      <p>Эффект margin collapse.</p>
      <p>Отступы схлопываются между элементами.</p>
    </div>

    <div class="card">
      <h3>Карточка 2</h3>
      <p>Внешний отступ: 20px сверху и снизу.</p>
      <p>Схлопывание видно при пересечении.</p>
    </div>

    <div class="card">
      <h3>Карточка 3</h3>
      <p>Для блоков в одном контейнере margin схлопывается.</p>
      <p>Это CSS-особенность при обычной модели отображения.</p>
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
  <title>Margin Collapse в карточках</title>
  <style>
    .card-container {
      display: block;
      margin-bottom: 20px;
    }

    .card {
      width: 200px;
      margin: 20px 0;
      padding: 15px;
      border: 2px solid #333;
      background-color: lightblue;
      float: left;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <div class="card-container clearfix">
    <div class="card">
      <h3>Карточка 1</h3>
      <p>Эффект margin collapse.</p>
      <p>Отступы схлопываются между элементами.</p>
    </div>

    <div class="card">
      <h3>Карточка 2</h3>
      <p>Внешний отступ: 20px сверху и снизу.</p>
      <p>Схлопывание видно при пересечении.</p>
    </div>

    <div class="card">
      <h3>Карточка 3</h3>
      <p>Для блоков в одном контейнере margin схлопывается.</p>
      <p>Это CSS-особенность при обычной модели отображения.</p>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Карточки в ряд с margin collapse */
    .card-container {
      display: block;
      margin-bottom: 20px;
    }

    .card {
      width: 200px;
      margin: 20px 0;
      padding: 15px;
      border: 2px solid #333;
      background-color: lightblue;
      float: left;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",
    "https://html5book.ru/css-margin-collapse/",
  ],
};
export const css_spacing_task_5 = {
  id: "css_spacing_task_5",
  module: "CSS",
  title: "Сетка карточек с margin collapse и border-box",
  topic: "Отступы: margin, padding, box-sizing",
  topicId: "css_spacing",
  sectionId: "css_spacing5",
  description:
    "Создайте HTML-документ с сеткой карточек, которые используют схлопывающиеся отступы (`margin collapse`) и корректный расчёт размеров через `box-sizing: border-box`.",
  steps: [
    "Создайте HTML-документ с контейнером и несколькими карточками (`<div>`)",
    "Настройте для карточек фиксированную ширину, отступы (`margin`) и рамки (`border`)",
    "Добавьте `box-sizing: border-box`, чтобы ширина включала отступы и границы",
    "Реализуйте сетку с помощью `float`, чтобы карточки автоматически переносились на новую строку",
    "Проверьте, что карточки выровнены корректно, а отступы не выходят за пределы",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Сетка карточек с margin collapse и border-box</title>
</head>
<body>

  <div class="card-container clearfix">
    <div class="card">
      <h3>Карточка 1</h3>
      <p>Используется float для выравнивания.</p>
      <p>Нет Flex или Grid.</p>
    </div>

    <div class="card">
      <h3>Карточка 2</h3>
      <p>Сетка строится с переносом на новую строку.</p>
    </div>

    <div class="card">
      <h3>Карточка 3</h3>
      <p>Ширина и отступы корректно рассчитываются.</p>
    </div>

    <div class="card">
      <h3>Карточка 4</h3>
      <p>Box-sizing: border-box помогает избежать переполнения.</p>
    </div>

    <div class="card">
      <h3>Карточка 5</h3>
      <p>Реализация полностью на CSS, без современных методов.</p>
    </div>

    <div class="card">
      <h3>Карточка 6</h3>
      <p>Очистка потока через clearfix.</p>
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
  <title>Сетка карточек с margin collapse и border-box</title>
  <style>
    .card-container {
      width: 100%;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .card {
      width: 220px;
      margin: 10px;
      padding: 15px;
      border: 2px solid #333;
      background-color: lightblue;
      box-sizing: border-box;
      float: left;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <div class="card-container clearfix">
    <div class="card">
      <h3>Карточка 1</h3>
      <p>Используется float для выравнивания.</p>
      <p>Нет Flex или Grid.</p>
    </div>

    <div class="card">
      <h3>Карточка 2</h3>
      <p>Сетка строится с переносом на новую строку.</p>
    </div>

    <div class="card">
      <h3>Карточка 3</h3>
      <p>Ширина и отступы корректно рассчитываются.</p>
    </div>

    <div class="card">
      <h3>Карточка 4</h3>
      <p>Box-sizing: border-box помогает избежать переполнения.</p>
    </div>

    <div class="card">
      <h3>Карточка 5</h3>
      <p>Реализация полностью на CSS, без современных методов.</p>
    </div>

    <div class="card">
      <h3>Карточка 6</h3>
      <p>Очистка потока через clearfix.</p>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Сетка карточек с float */
  .card-container {
      width: 100%;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .card {
      width: 220px;
      margin: 10px;
      padding: 15px;
      border: 2px solid #333;
      background-color: lightblue;
      box-sizing: border-box;
      float: left;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://html5book.ru/css-float/",
  ],
};

// Границы, фон, скругления
export const css_block_model_task_4 = {
  id: "css_block_model_task_4",
  module: "CSS",
  title: "Границы и фон у блока",
  topic: "Границы, фон, скругления",
  topicId: "css_block_model",
  sectionId: "css_block_model2",
  description:
    "Создайте HTML-документ с одним блочным элементом. Настройте его границы, фон и скруглённые углы.",
  steps: [
    "Создайте HTML-документ с одним `<div>` элементом.",
    "Задайте ему ширину `250px`, высоту `150px` и фон.",
    "Добавьте границу толщиной `2px`, стиль `dotted` и цвет.",
    "Сделайте углы блока скруглёнными на `10px`.",
    "Проверьте, как отображаются стили.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Границы и фон у блока</title>
</head>
<body>
  <div class="styled-box">
    Это блок с границей, фоном и скруглёнными углами.
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
  <title>Границы и фон у блока</title>
  <style>
    .styled-box {
      width: 250px;
      height: 150px;
      background-color: #d1ecf1;
      border: 2px dotted #3498db;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <div class="styled-box">
    Это блок с границей, фоном и скруглёнными углами.
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Блок с границей, фоном и скруглёнными углами */
    .styled-box {
      width: 250px;
      height: 150px;
      background-color: #d1ecf1;
      border: 2px dotted #3498db;
      border-radius: 10px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/border",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius",
    "https://html5book.ru/css-border/",
  ],
};
export const css_block_model_task_5 = {
  id: "css_block_model_task_5",
  module: "CSS",
  title: "Карточка с фоном, границей и скруглениями",
  topic: "Границы, фон, скругления",
  topicId: "css_block_model",
  sectionId: "css_block_model2",
  description:
    "Создайте HTML-документ с карточкой, в которой настроены разные стили для каждой из границ, фон одного цвета и скругления на одной из сторон.",
  steps: [
    "Создайте HTML-документ с одним `<div>` элементом.",
    "Задайте ему ширину `300px`, высоту `180px` и фон.",
    "Добавьте разные стили для каждой из границ: `solid`, `dotted`, `dashed`, `double`.",
    "Пропишите разный цвет для каждой из сторон границы.",
    "Сделайте скругление только у верхних углов блока на `15px`.",
    "Проверьте, как отображаются стили.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Карточка с фоном, границей и скруглениями</title>
</head>
<body>

  <div class="card">
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
  <title>Карточка с фоном, границей и скруглениями</title>
  <style>
    .card {
      width: 300px;
      height: 180px;
      background-color: #f0f8ff;
      border-top: 2px solid #3498db;
      border-right: 2px dotted #f39c12;
      border-bottom: 2px dashed #e74c3c;
      border-left: 2px double #2ecc71;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  </style>
</head>
<body>

  <div class="card">
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Карточка с границей, фоном и скруглёнными углами */
.card {
  width: 300px;
  height: 180px;
  background-color: #f0f8ff;
  border-top: 2px solid #3498db;
  border-right: 2px dotted #f39c12;
  border-bottom: 2px dashed #e74c3c;
  border-left: 2px double #2ecc71;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/border",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius",
    "https://html5book.ru/css-border/",
  ],
};
export const css_borders_task_1 = {
  id: "css_borders_task_1",
  module: "CSS",
  title: "Настройка границ (border) и скруглений (border-radius)",
  topic: "Границы, фон, скругления",
  topicId: "css_borders",
  sectionId: "css_borders1",
  description:
    "Создайте HTML-документ с несколькими блоками, у которых настроены разные виды границ (`border`) и скругления углов (`border-radius`).",
  steps: [
    "Создайте HTML-документ с тремя блоками (`<div>`)",
    "Настройте для первого блока обычную рамку (`solid`)",
    "Настройте для второго блока пунктирную рамку (`dashed`)",
    "Настройте для третьего блока двойную рамку (`double`)",
    "Добавьте скругление (`border-radius`) разной степени для каждого из блоков",
    "Проверьте, как отображаются блоки с разными стилями рамок и скругления",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Границы и скругления</title>
</head>
<body>

  <div class="solid-border">
    Обычная рамка (solid) с border-radius: 5px
  </div>

  <div class="dashed-border">
    Пунктирная рамка (dashed) с border-radius: 15px
  </div>

  <div class="double-border">
    Двойная рамка (double) с border-radius: 25px
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
  <title>Границы и скругления</title>
  <style>
    .solid-border {
      width: 300px;
      height: 100px;
      border: 2px solid #333;
      border-radius: 5px;
      margin-bottom: 10px;
      background-color: lightblue;
    }

    .dashed-border {
      width: 300px;
      height: 100px;
      border: 2px dashed #333;
      border-radius: 15px;
      margin-bottom: 10px;
      background-color: lightgreen;
    }

    .double-border {
      width: 300px;
      height: 100px;
      border: 4px double #333;
      border-radius: 25px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>

  <div class="solid-border">
    Обычная рамка (solid) с border-radius: 5px
  </div>

  <div class="dashed-border">
    Пунктирная рамка (dashed) с border-radius: 15px
  </div>

  <div class="double-border">
    Двойная рамка (double) с border-radius: 25px
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры различных типов границ и скруглений */
    .solid-border {
      width: 300px;
      height: 100px;
      border: 2px solid #333;
      border-radius: 5px;
      margin-bottom: 10px;
      background-color: lightblue;
    }

    .dashed-border {
      width: 300px;
      height: 100px;
      border: 2px dashed #333;
      border-radius: 15px;
      margin-bottom: 10px;
      background-color: lightgreen;
    }

    .double-border {
      width: 300px;
      height: 100px;
      border: 4px double #333;
      border-radius: 25px;
      background-color: lightcoral;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/border",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius",
    "https://html5book.ru/css-border/",
  ],
};
export const css_borders_task_2 = {
  id: "css_borders_task_2",
  module: "CSS",
  title: "Фоновые изображения и цветовые градиенты",
  topic: "Границы, фон, скругления",
  topicId: "css_borders",
  sectionId: "css_borders2",
  description:
    "Создайте HTML-документ с блоками, в которых настроены фоновые изображения, цветовые градиенты и их комбинации.",
  steps: [
    "Создайте HTML-документ с тремя блоками (`<div>`)",
    "Настройте для первого блока фоновое изображение",
    "Для второго блока — цветовой градиент",
    "Для третьего — комбинацию фонового изображения и градиента",
    "Проверьте, как отображаются стили",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Фоновые изображения и градиенты</title>
</head>
<body>

  <div class="background-image">
    Фоновое изображение
  </div>

  <div class="background-gradient">
    Цветовой градиент
  </div>

  <div class="background-mixed">
    Градиент поверх фонового изображения
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
  <title>Фоновые изображения и градиенты</title>
  <style>
    .background-image {
      width: 400px;
      height: 200px;
      background-image: url('https://life-trip.ru/wp-content/uploads/2018/06/lanta-klong-nin.jpg');
      background-size: cover;
      background-position: center;
      margin-bottom: 15px;
    }

    .background-gradient {
      width: 400px;
      height: 200px;
      background: linear-gradient(45deg, lightblue, lightgreen);
      margin-bottom: 15px;
    }

    .background-mixed {
      width: 400px;
      height: 200px;
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://life-trip.ru/wp-content/uploads/2018/06/lanta-klong-nin.jpg');
      background-size: cover;
      background-position: center;
    }
  </style>
</head>
<body>

  <div class="background-image">
    Фоновое изображение
  </div>

  <div class="background-gradient">
    Цветовой градиент
  </div>

  <div class="background-mixed">
    Градиент поверх фонового изображения
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Фоновое изображение */
    .background-image {
      width: 400px;
      height: 200px;
      background-image: url('https://life-trip.ru/wp-content/uploads/2018/06/lanta-klong-nin.jpg');
      background-size: cover;
      background-position: center;
      margin-bottom: 15px;
    }

    .background-gradient {
      width: 400px;
      height: 200px;
      background: linear-gradient(45deg, lightblue, lightgreen);
      margin-bottom: 15px;
    }

    .background-mixed {
      width: 400px;
      height: 200px;
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://life-trip.ru/wp-content/uploads/2018/06/lanta-klong-nin.jpg');
      background-size: cover;
      background-position: center;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://developer.mozilla.org/ru/docs/Web/CSS/linear-gradient",
    "https://html5book.ru/css-background/",
  ],
};
export const css_borders_task_3 = {
  id: "css_borders_task_3",
  module: "CSS",
  title: "Скругленные блоки с рамкой",
  topic: "Границы, фон, скругления",
  topicId: "css_borders",
  sectionId: "css_borders3",
  description:
    "Создайте HTML-документ с блоками, у которых настроены круглые рамки и скругленные углы.",
  steps: [
    "Создайте HTML-документ с тремя блоками (`<div>`)",
    "Настройте рамку (`border`) и скругление углов на 50% для каждого блока",
    "Задайте фоновый цвет для каждого блока",
    "Проверьте корректное отображение скругленных углов",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Скругленные блоки с рамкой</title>
</head>
<body>

  <div class="rounded-block">1</div>
  <div class="rounded-block">2</div>
  <div class="rounded-block">3</div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Скругленные блоки с рамкой</title>
  <style>
    .rounded-block {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #333;
      background-color: lightblue;
      display: inline-block;
      margin: 10px;
      text-align: center;
      line-height: 100px;
    }
  </style>
</head>
<body>

  <div class="rounded-block">1</div>
  <div class="rounded-block">2</div>
  <div class="rounded-block">3</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Скругленные блоки с рамкой */
    .rounded-block {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #333;
      background-color: lightblue;
      display: inline-block;
      margin: 10px;
      text-align: center;
      line-height: 100px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border",
    "https://html5book.ru/css-border-radius/",
  ],
};
export const css_borders_task_4 = {
  id: "css_borders_task_4",
  module: "CSS",
  title: "Круглые блоки с градиентной рамкой",
  topic: "Границы, фон, скругления",
  topicId: "css_borders",
  sectionId: "css_borders4",
  description:
    "Создайте HTML-документ с круглыми блоками, у которых рамка имеет градиентный цвет.",
  steps: [
    "Создайте HTML-документ с круглыми блоками (`<div>`)",
    "Настройте рамку с градиентом",
    "Добавьте текст в центр каждого блока",
    "Проверьте корректное отображение градиентной рамки",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Круглые блоки с градиентной рамкой</title>
</head>
<body>

  <div class="gradient-circle">A</div>
  <div class="gradient-circle">B</div>
  <div class="gradient-circle">C</div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Круглые блоки с градиентной рамкой</title>
  <style>
    .gradient-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 5px solid transparent;
      background-image: linear-gradient(45deg, lightblue, lightgreen);
      background-origin: border-box;
      background-clip: padding-box, border-box;
      display: inline-block;
      margin: 10px;
      text-align: center;
      line-height: 100px;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="gradient-circle">A</div>
  <div class="gradient-circle">B</div>
  <div class="gradient-circle">C</div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Круглые блоки с градиентной рамкой */
    .gradient-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 5px solid transparent;
      background-image: linear-gradient(45deg, lightblue, lightgreen);
      background-origin: border-box;
      background-clip: padding-box, border-box;
      display: inline-block;
      margin: 10px;
      text-align: center;
      line-height: 100px;
      color: white;
      font-weight: bold;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-image",
    "https://html5book.ru/css-gradient/",
  ],
};
export const css_borders_task_5 = {
  id: "css_borders_task_5",
  module: "CSS",
  title: "Многоуровневое перекрытие с градиентными рамками",
  topic: "Границы, фон, скругления",
  topicId: "css_borders",
  sectionId: "css_borders5",
  description:
    "Создайте HTML-документ с несколькими слоями, каждый из которых имеет градиентную рамку и полупрозрачный фон. Слои должны накладываться друг на друга с помощью z-index.",
  steps: [
    "Создайте HTML-документ с тремя слоями (`<div>`), которые перекрывают друг друга.",
    "Настройте рамки с градиентом для каждого из слоев.",
    "Задайте полупрозрачный фон с помощью `rgba` или `hsla`.",
    "Настройте `z-index` и `position`, чтобы слои перекрывались.",
    "Проверьте корректное отображение слоев с разными уровнями наложения.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Многоуровневое перекрытие с градиентными рамками</title>
</head>
<body>
  <div class="layer-container">
    <div class="layer-1">Слой 1</div>
    <div class="layer-2">Слой 2</div>
    <div class="layer-3">Слой 3</div>
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
  <title>Многоуровневое перекрытие с градиентными рамками</title>
  <style>
    .layer-container {
      position: relative;
      width: 400px;
      height: 250px;
      margin-bottom: 20px;
    }

    .layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 5px solid transparent;
      border-image: linear-gradient(45deg, lightblue, lightgreen);
      border-image-slice: 1;
      background-color: rgba(173, 216, 230, 0.5);
      z-index: 1;
    }

    .layer-2 {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 100%;
      height: 100%;
      border: 5px solid transparent;
      border-image: linear-gradient(45deg, lightgreen, lightcoral);
      border-image-slice: 1;
      background-color: rgba(144, 238, 144, 0.5);
      z-index: 2;
    }

    .layer-3 {
      position: absolute;
      top: 40px;
      left: 40px;
      width: 100%;
      height: 100%;
      border: 5px solid transparent;
      border-image: linear-gradient(45deg, lightcoral, lightblue);
      border-image-slice: 1;
      background-color: rgba(240, 128, 128, 0.5);
      z-index: 3;
    }
  </style>
</head>
<body>

  <div class="layer-container">
    <div class="layer-1">Слой 1</div>
    <div class="layer-2">Слой 2</div>
    <div class="layer-3">Слой 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Многоуровневое перекрытие с градиентными рамками */
   .layer-container {
      position: relative;
      width: 400px;
      height: 250px;
      margin-bottom: 20px;
    }

    .layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 5px solid transparent;
      border-image: linear-gradient(45deg, lightblue, lightgreen);
      border-image-slice: 1;
      background-color: rgba(173, 216, 230, 0.5);
      z-index: 1;
    }

    .layer-2 {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 100%;
      height: 100%;
      border: 5px solid transparent;
      border-image: linear-gradient(45deg, lightgreen, lightcoral);
      border-image-slice: 1;
      background-color: rgba(144, 238, 144, 0.5);
      z-index: 2;
    }

    .layer-3 {
      position: absolute;
      top: 40px;
      left: 40px;
      width: 100%;
      height: 100%;
      border: 5px solid transparent;
      border-image: linear-gradient(45deg, lightcoral, lightblue);
      border-image-slice: 1;
      background-color: rgba(240, 128, 128, 0.5);
      z-index: 3;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/border-image",
    "https://html5book.ru/css-gradient/",
  ],
};
