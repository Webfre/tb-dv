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
  <title>Отступы: margin и padding</title>
  <style>
    /* Первый блок с отступами */
    .block-1 {
      margin: 20px;
      padding: 10px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    /* Второй блок с отступами */
    .block-2 {
      margin: 30px 15px;
      padding: 15px 5px;
      background-color: lightgreen;
      border: 2px solid #333;
    }

    /* Третий блок с отступами */
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
  <title>Использование box-sizing</title>
  <style>
    /* Первый блок: content-box (по умолчанию) */
    .content-box {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      margin-bottom: 15px;
      background-color: lightblue;
      box-sizing: content-box; /* Можно не указывать, это значение по умолчанию */
    }

    /* Второй блок: border-box */
    .border-box {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      background-color: lightgreen;
      box-sizing: border-box;
    }

    /* Информационный текст */
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
  <title>Карточки с margin, padding и box-sizing</title>
  <style>
    /* Стили для контейнера карточек */
    .card-container {
      display: inline-block;
      width: 100%;
    }

    /* Стили для карточек */
    .card {
      width: 300px;
      margin: 15px;
      padding: 20px;
      border: 2px solid #333;
      background-color: lightblue;
      box-sizing: border-box;
      float: left;
    }

    /* Заголовок карточки */
    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    /* Текст карточки */
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
.card {
  width: 300px;
  margin: 15px;
  padding: 20px;
  border: 2px solid #333;
  background-color: lightblue;
  box-sizing: border-box;
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
  <title>Margin Collapse в карточках</title>
  <style>
    /* Контейнер для карточек */
    .card-container {
      display: block;
      margin-bottom: 20px;
    }

    /* Карточки в ряду */
    .card {
      width: 200px;
      margin: 20px 0;
      padding: 15px;
      border: 2px solid #333;
      background-color: lightblue;
      float: left;
    }

    /* Очистка потока */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    /* Заголовок карточки */
    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    /* Текст в карточке */
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
}

.card {
  width: 200px;
  margin: 20px 0;
  padding: 15px;
  border: 2px solid #333;
  background-color: lightblue;
  float: left;
}

/* Очистка потока */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
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
  <title>Сетка карточек с margin collapse и border-box</title>
  <style>
    /* Контейнер для карточек */
    .card-container {
      width: 100%;
      overflow: hidden; /* Очищаем float */
      margin-bottom: 20px;
    }

    /* Карточки в сетке */
    .card {
      width: 220px;
      margin: 10px;
      padding: 15px;
      border: 2px solid #333;
      background-color: lightblue;
      box-sizing: border-box;
      float: left; /* Размещение в ряд */
    }

    /* Очистка float */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    /* Заголовок карточки */
    .card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    /* Текст в карточке */
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
.card {
  width: 220px;
  margin: 10px;
  padding: 15px;
  border: 2px solid #333;
  background-color: lightblue;
  box-sizing: border-box;
  float: left;
}

/* Очистка потока */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/float",
    "https://html5book.ru/css-float/",
  ],
};
