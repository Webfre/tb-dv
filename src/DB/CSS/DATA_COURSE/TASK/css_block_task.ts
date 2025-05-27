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
