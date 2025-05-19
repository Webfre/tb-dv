export const css_layers_task_1 = {
  id: "css_layers_task_1",
  module: "CSS",
  title: "Прозрачность элементов с использованием opacity",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers1",
  description:
    "Создайте HTML-документ, в котором элементы имеют разные уровни прозрачности, используя свойство opacity.",
  steps: [
    "Создайте HTML-документ с тремя блоками (`<div>`)",
    "Настройте для каждого блока разные значения `opacity`: `1`, `0.7`, `0.4`",
    "Настройте стили: цвет фона, границы, размеры",
    "Проверьте, как меняется видимость блоков",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Прозрачность элементов</title>
  <style>
    /* Полностью непрозрачный блок */
    .full-opacity {
      opacity: 1;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    /* Полупрозрачный блок */
    .medium-opacity {
      opacity: 0.7;
      width: 200px;
      height: 100px;
      background-color: lightgreen;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    /* Почти прозрачный блок */
    .low-opacity {
      opacity: 0.4;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
      text-align: center;
      line-height: 100px;
    }
  </style>
</head>
<body>

  <div class="full-opacity">
    Прозрачность 1.0
  </div>

  <div class="medium-opacity">
    Прозрачность 0.7
  </div>

  <div class="low-opacity">
    Прозрачность 0.4
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
  <title>Прозрачность элементов</title>
  <style>
    .full-opacity {
      opacity: 1;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    .medium-opacity {
      opacity: 0.7;
      width: 200px;
      height: 100px;
      background-color: lightgreen;
      border: 2px solid #333;
      margin-bottom: 10px;
      text-align: center;
      line-height: 100px;
    }

    .low-opacity {
      opacity: 0.4;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
      text-align: center;
      line-height: 100px;
    }
  </style>
</head>
<body>

  <div class="full-opacity">
    Прозрачность 1.0
  </div>

  <div class="medium-opacity">
    Прозрачность 0.7
  </div>

  <div class="low-opacity">
    Прозрачность 0.4
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Прозрачность элементов */
.full-opacity {
  opacity: 1;
  width: 200px;
  height: 100px;
  background-color: lightblue;
  border: 2px solid #333;
  margin-bottom: 10px;
  text-align: center;
  line-height: 100px;
}

.medium-opacity {
  opacity: 0.7;
  width: 200px;
  height: 100px;
  background-color: lightgreen;
  border: 2px solid #333;
  margin-bottom: 10px;
  text-align: center;
  line-height: 100px;
}

.low-opacity {
  opacity: 0.4;
  width: 200px;
  height: 100px;
  background-color: lightcoral;
  border: 2px solid #333;
  text-align: center;
  line-height: 100px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/opacity",
    "https://html5book.ru/css-opacity/",
  ],
};
export const css_layers_task_2 = {
  id: "css_layers_task_2",
  module: "CSS",
  title: "Плавная прокрутка к якорям на странице",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers1",
  description:
    "Создайте HTML-документ с меню навигации, при клике на элементы которого происходит плавная прокрутка к соответствующим разделам на странице.",
  steps: [
    "Создайте HTML-документ с меню навигации и тремя разделами (`<section>`)",
    "Настройте плавную прокрутку с помощью CSS",
    'Свяжите элементы меню с якорями (`<a href="#section1">`)',
    "Настройте стили для меню и разделов",
    "Проверьте, что при нажатии на меню страница плавно прокручивается",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Плавная прокрутка к якорям</title>
  <style>
    /* Плавная прокрутка */
    html {
      scroll-behavior: smooth;
    }

    /* Стили для меню */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background-color: #333;
      padding: 20px;
    }

    nav a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
    }

    nav a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    /* Стили для секций */
    section {
      margin-left: 220px;
      padding: 40px;
      height: 600px;
      border-bottom: 1px solid #ccc;
    }

    section:nth-child(1) {
      background-color: lightblue;
    }

    section:nth-child(2) {
      background-color: lightgreen;
    }

    section:nth-child(3) {
      background-color: lightcoral;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#section1">Раздел 1</a>
    <a href="#section2">Раздел 2</a>
    <a href="#section3">Раздел 3</a>
  </nav>

  <section id="section1">
    <h2>Раздел 1</h2>
    <p>Это содержимое первого раздела.</p>
  </section>

  <section id="section2">
    <h2>Раздел 2</h2>
    <p>Это содержимое второго раздела.</p>
  </section>

  <section id="section3">
    <h2>Раздел 3</h2>
    <p>Это содержимое третьего раздела.</p>
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Плавная прокрутка к якорям</title>
  <style>
    html {
      scroll-behavior: smooth;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background-color: #333;
      padding: 20px;
    }

    nav a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
    }

    nav a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    section {
      margin-left: 220px;
      padding: 40px;
      height: 600px;
      border-bottom: 1px solid #ccc;
    }

    section:nth-child(1) {
      background-color: lightblue;
    }

    section:nth-child(2) {
      background-color: lightgreen;
    }

    section:nth-child(3) {
      background-color: lightcoral;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#section1">Раздел 1</a>
    <a href="#section2">Раздел 2</a>
    <a href="#section3">Раздел 3</a>
  </nav>

  <section id="section1">
    <h2>Раздел 1</h2>
    <p>Это содержимое первого раздела.</p>
  </section>

  <section id="section2">
    <h2>Раздел 2</h2>
    <p>Это содержимое второго раздела.</p>
  </section>

  <section id="section3">
    <h2>Раздел 3</h2>
    <p>Это содержимое третьего раздела.</p>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Плавная прокрутка */
html {
  scroll-behavior: smooth;
}

/* Стили для навигации */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  padding: 20px;
}

nav a {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
}

nav a:hover {
  background-color: #444;
  padding-left: 5px;
  transition: all 0.2s;
}

/* Стили для разделов */
section {
  margin-left: 220px;
  padding: 40px;
  height: 600px;
  border-bottom: 1px solid #ccc;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/scroll-behavior",
    "https://html5book.ru/anchors-and-links/",
  ],
};
export const css_layers_task_3 = {
  id: "css_layers_task_3",
  module: "CSS",
  title: "Эффект параллакса на фоне страницы",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers2",
  description:
    "Создайте HTML-документ с фоновым изображением, которое прокручивается медленнее, чем основной контент, создавая эффект параллакса.",
  steps: [
    "Создайте HTML-документ с несколькими секциями (`<section>`)",
    "Настройте фон для одной из секций с эффектом параллакса",
    "Используйте CSS-свойство `background-attachment: fixed` для создания эффекта",
    "Проверьте, что при прокрутке фон медленно смещается, а контент двигается быстрее",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Эффект параллакса на фоне</title>
  <style>
    /* Стили для секций */
    section {
      height: 500px;
      padding: 20px;
      color: white;
      text-align: center;
    }

    /* Параллакс-эффект */
    .parallax {
      background-image: url('https://via.placeholder.com/1200x800');
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    /* Секции с цветным фоном */
    .content {
      background-color: #007acc;
    }
  </style>
</head>
<body>

  <section class="content">
    <h2>Обычный блок 1</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

  <section class="parallax">
    <h2>Параллакс эффект</h2>
    <p>Фоновое изображение двигается медленнее при прокрутке.</p>
  </section>

  <section class="content">
    <h2>Обычный блок 2</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Эффект параллакса на фоне</title>
  <style>
    section {
      height: 500px;
      padding: 20px;
      color: white;
      text-align: center;
    }

    .parallax {
      background-image: url('https://via.placeholder.com/1200x800');
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    .content {
      background-color: #007acc;
    }
  </style>
</head>
<body>

  <section class="content">
    <h2>Обычный блок 1</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

  <section class="parallax">
    <h2>Параллакс эффект</h2>
    <p>Фоновое изображение двигается медленнее при прокрутке.</p>
  </section>

  <section class="content">
    <h2>Обычный блок 2</h2>
    <p>Здесь находится обычный статичный контент.</p>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Параллакс эффект на фоне */
.parallax {
  background-image: url('https://via.placeholder.com/1200x800');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.content {
  background-color: #007acc;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-attachment",
    "https://html5book.ru/parallax-css/",
  ],
};
export const css_layers_task_4 = {
  id: "css_layers_task_4",
  module: "CSS",
  title: "Прокрутка горизонтальных элементов",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers2",
  description:
    "Создайте HTML-документ с горизонтальной лентой элементов, которую можно прокручивать вправо и влево, только с использованием CSS.",
  steps: [
    "Создайте HTML-документ с контейнером и элементами внутри него",
    "Реализуйте горизонтальную прокрутку только на CSS",
    "Настройте стили для контейнера и элементов",
    "Проверьте, что элементы можно прокручивать вправо и влево",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Горизонтальная прокрутка на CSS</title>
  <style>
    /* Контейнер для горизонтальной прокрутки */
    .scroll-container {
      display: inline-block;
      white-space: nowrap;
      border: 2px solid #333;
      overflow-x: scroll;
      width: 100%;
      height: 200px;
      scroll-behavior: smooth;
    }

    /* Стили для элементов */
    .scroll-item {
      display: inline-block;
      width: 250px;
      height: 150px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 150px;
      border: 1px solid #333;
    }

    /* Скрываем стандартный скроллбар */
    .scroll-container::-webkit-scrollbar {
      height: 8px;
    }
    
    .scroll-container::-webkit-scrollbar-thumb {
      background-color: #007acc;
      border-radius: 4px;
    }
    
    .scroll-container::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  </style>
</head>
<body>

  <div class="scroll-container">
    <div class="scroll-item">Элемент 1</div>
    <div class="scroll-item">Элемент 2</div>
    <div class="scroll-item">Элемент 3</div>
    <div class="scroll-item">Элемент 4</div>
    <div class="scroll-item">Элемент 5</div>
    <div class="scroll-item">Элемент 6</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
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
  <title>Горизонтальная прокрутка на CSS</title>
  <style>
    .scroll-container {
      display: inline-block;
      white-space: nowrap;
      border: 2px solid #333;
      overflow-x: scroll;
      width: 100%;
      height: 200px;
      scroll-behavior: smooth;
    }

    .scroll-item {
      display: inline-block;
      width: 250px;
      height: 150px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 150px;
      border: 1px solid #333;
    }

    .scroll-container::-webkit-scrollbar {
      height: 8px;
    }
    
    .scroll-container::-webkit-scrollbar-thumb {
      background-color: #007acc;
      border-radius: 4px;
    }
    
    .scroll-container::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  </style>
</head>
<body>

   <div class="scroll-container">
    <div class="scroll-item">Элемент 1</div>
    <div class="scroll-item">Элемент 2</div>
    <div class="scroll-item">Элемент 3</div>
    <div class="scroll-item">Элемент 4</div>
    <div class="scroll-item">Элемент 5</div>
    <div class="scroll-item">Элемент 6</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
    <div class="scroll-item">Элемент 7</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Горизонтальная прокрутка элементов без JS */
.scroll-container {
  display: inline-block;
  white-space: nowrap;
  border: 2px solid #333;
  overflow-x: scroll;
  width: 100%;
  height: 200px;
  scroll-behavior: smooth;
}

.scroll-item {
  display: inline-block;
  width: 250px;
  height: 150px;
  margin-right: 10px;
  background-color: lightblue;
  text-align: center;
  line-height: 150px;
  border: 1px solid #333;
}

/* Стилизация скроллбара */
.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #007acc;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/white-space",
    "https://html5book.ru/css-scrolling/",
  ],
};
export const css_layers_task_5 = {
  id: "css_layers_task_5",
  module: "CSS",
  title: "Многоуровневое перекрытие слоев с прозрачностью",
  topic: "Слои, прокрутка и прозрачность",
  topicId: "css_layers",
  sectionId: "css_layers3",
  description:
    "Создайте HTML-документ с несколькими слоями, которые накладываются друг на друга с эффектом полупрозрачности.",
  steps: [
    "Создайте HTML-документ с контейнером и тремя слоями внутри него",
    "Настройте каждый слой с разными уровнями прозрачности (`opacity`)",
    "Используйте `position: absolute` и `z-index` для управления наложением",
    "Настройте стили для контейнера и каждого слоя",
    "Проверьте, что слои накладываются друг на друга, сохраняя полупрозрачность",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Многоуровневое перекрытие слоев</title>
  <style>
    /* Контейнер для слоев */
    .layer-container {
      position: relative;
      width: 600px;
      height: 400px;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    /* Первый слой */
    .layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: lightblue;
      opacity: 0.8;
      z-index: 1;
    }

    /* Второй слой */
    .layer-2 {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 100%;
      height: 100%;
      background-color: lightgreen;
      opacity: 0.6;
      z-index: 2;
    }

    /* Третий слой */
    .layer-3 {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 100%;
      height: 100%;
      background-color: lightcoral;
      opacity: 0.4;
      z-index: 3;
    }

    /* Текст в слоях */
    .layer-1 p, .layer-2 p, .layer-3 p {
      margin: 20px;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="layer-container">
    <div class="layer-1">
      <p>Слой 1 (lightblue, z-index: 1)</p>
    </div>
    <div class="layer-2">
      <p>Слой 2 (lightgreen, z-index: 2)</p>
    </div>
    <div class="layer-3">
      <p>Слой 3 (lightcoral, z-index: 3)</p>
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
  <title>Многоуровневое перекрытие слоев</title>
  <style>
    .layer-container {
      position: relative;
      width: 600px;
      height: 400px;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: lightblue;
      opacity: 0.8;
      z-index: 1;
    }

    .layer-2 {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 100%;
      height: 100%;
      background-color: lightgreen;
      opacity: 0.6;
      z-index: 2;
    }

    .layer-3 {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 100%;
      height: 100%;
      background-color: lightcoral;
      opacity: 0.4;
      z-index: 3;
    }

    .layer-1 p, .layer-2 p, .layer-3 p {
      margin: 20px;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="layer-container">
    <div class="layer-1">
      <p>Слой 1 (lightblue, z-index: 1)</p>
    </div>
    <div class="layer-2">
      <p>Слой 2 (lightgreen, z-index: 2)</p>
    </div>
    <div class="layer-3">
      <p>Слой 3 (lightcoral, z-index: 3)</p>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Многоуровневое перекрытие слоев */
.layer-container {
  position: relative;
  width: 600px;
  height: 400px;
  border: 2px solid #333;
}

.layer-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: lightblue;
  opacity: 0.8;
  z-index: 1;
}

.layer-2 {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  opacity: 0.6;
  z-index: 2;
}

.layer-3 {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 100%;
  height: 100%;
  background-color: lightcoral;
  opacity: 0.4;
  z-index: 3;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://html5book.ru/css-position/",
  ],
};
