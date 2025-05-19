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
  <title>Границы и скругления</title>
  <style>
    /* Обычная рамка с скруглением 5px */
    .solid-border {
      width: 300px;
      height: 100px;
      border: 2px solid #333;
      border-radius: 5px;
      margin-bottom: 10px;
      background-color: lightblue;
    }

    /* Пунктирная рамка с скруглением 15px */
    .dashed-border {
      width: 300px;
      height: 100px;
      border: 2px dashed #333;
      border-radius: 15px;
      margin-bottom: 10px;
      background-color: lightgreen;
    }

    /* Двойная рамка с скруглением 25px */
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
  <title>Фоновые изображения и градиенты</title>
  <style>
    /* Фоновое изображение */
    .background-image {
      width: 400px;
      height: 200px;
      background-image: url('https://via.placeholder.com/400x200');
      background-size: cover;
      background-position: center;
      margin-bottom: 15px;
    }

    /* Цветовой градиент */
    .background-gradient {
      width: 400px;
      height: 200px;
      background: linear-gradient(45deg, lightblue, lightgreen);
      margin-bottom: 15px;
    }

    /* Комбинация градиента и изображения */
    .background-mixed {
      width: 400px;
      height: 200px;
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://via.placeholder.com/400x200');
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
      background-image: url('https://via.placeholder.com/400x200');
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
        url('https://via.placeholder.com/400x200');
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
  background-image: url('https://via.placeholder.com/400x200');
  background-size: cover;
  background-position: center;
}

/* Цветовой градиент */
.background-gradient {
  width: 400px;
  height: 200px;
  background: linear-gradient(45deg, lightblue, lightgreen);
}

/* Градиент поверх фонового изображения */
.background-mixed {
  width: 400px;
  height: 200px;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://via.placeholder.com/400x200');
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
  <title>Скругленные блоки с рамкой</title>
  <style>
    /* Основной стиль для скругленных блоков */
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
  <title>Круглые блоки с градиентной рамкой</title>
  <style>
    /* Градиентные круги */
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
  <title>Многоуровневое перекрытие с градиентными рамками</title>
  <style>
    /* Контейнер для слоев */
    .layer-container {
      position: relative;
      width: 400px;
      height: 250px;
      margin-bottom: 20px;
    }

    /* Первый слой */
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

    /* Второй слой */
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

    /* Третий слой */
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
