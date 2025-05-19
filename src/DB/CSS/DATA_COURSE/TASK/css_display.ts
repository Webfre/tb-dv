export const css_display_task_1 = {
  id: "css_display_task_1",
  module: "CSS",
  title: "Типы отображения Block и Inline",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с элементами, которые имеют типы отображения block и inline.",
  steps: [
    "Создайте HTML-документ с двумя элементами: один в `<div>`, второй в `<span>`",
    "Задайте элементу `<div>` тип отображения `block`",
    "Задайте элементу `<span>` тип отображения `inline`",
    "Примените стили: цвет фона, отступы, границы",
    "Проверьте, как они отображаются на странице",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы отображения Block и Inline</title>
  <style>
    .block-element {
      display: block;
      background-color: lightblue;
      margin-bottom: 10px;
      border: 2px solid #333;
      padding: 10px;
    }

    .inline-element {
      display: inline;
      background-color: lightgreen;
      border: 2px solid #333;
      padding: 5px;
    }
  </style>
</head>
<body>
  <div class="block-element">Это блочный элемент (block)</div>
  <span class="inline-element">Это строчный элемент (inline)</span>
  <span class="inline-element">Ещё один строчный элемент (inline)</span>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы отображения Block и Inline</title>
  <style>
    .block-element {
      display: block;
      background-color: lightblue;
      margin-bottom: 10px;
      border: 2px solid #333;
      padding: 10px;
    }

    .inline-element {
      display: inline;
      background-color: lightgreen;
      border: 2px solid #333;
      padding: 5px;
    }
  </style>
</head>
<body>
  <div class="block-element">Это блочный элемент (block)</div>
  <span class="inline-element">Это строчный элемент (inline)</span>
  <span class="inline-element">Ещё один строчный элемент (inline)</span>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Типы отображения block и inline */
.block-element {
  display: block;
  background-color: lightblue;
  margin-bottom: 10px;
  border: 2px solid #333;
  padding: 10px;
}

.inline-element {
  display: inline;
  background-color: lightgreen;
  border: 2px solid #333;
  padding: 5px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/css-display/",
  ],
};
export const css_display_task_2 = {
  id: "css_display_task_2",
  module: "CSS",
  title: "Типы отображения Inline-block и None",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с элементами, которые имеют типы отображения inline-block и none.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте первому элементу тип отображения `inline-block`",
    "Задайте второму элементу тип отображения `none`",
    "Добавьте кнопку, при нажатии на которую скрытый элемент становится видимым (`display: block`)",
    "Проверьте, что элемент появляется и исчезает при клике",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Типы отображения Inline-block и None</title>
  <style>
    .inline-block-element {
      display: inline-block;
      background-color: lightcoral;
      border: 2px solid #333;
      padding: 10px;
      margin-right: 10px;
    }

    .hidden-element {
      display: none;
      background-color: lightgoldenrodyellow;
      border: 2px solid #333;
      padding: 10px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <div class="inline-block-element">Это inline-block элемент</div>
  <button onclick="toggleDisplay()">Показать/Скрыть элемент</button>

  <div class="hidden-element" id="hidden-block">Скрытый элемент</div>

  <script>
    function toggleDisplay() {
      const element = document.getElementById('hidden-block');
      if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  </script>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Типы отображения inline-block и none */
.inline-block-element {
  display: inline-block;
  background-color: lightcoral;
  border: 2px solid #333;
  padding: 10px;
  margin-right: 10px;
}

.hidden-element {
  display: none;
  background-color: lightgoldenrodyellow;
  border: 2px solid #333;
  padding: 10px;
  margin-top: 10px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/css-display/",
  ],
};
export const css_display_task_3 = {
  id: "css_display_task_3",
  module: "CSS",
  title: "Расположение блоков с использованием Inline-block",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ, в котором несколько блоков будут располагаться в одну линию с помощью inline-block.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>`, внутри которого три вложенных блока",
    "Задайте вложенным блокам тип отображения `inline-block`",
    "Настройте ширину, высоту, отступы и цвет фона для каждого блока",
    "Проверьте, что блоки располагаются в одну линию и имеют отступы между собой",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Расположение Inline-block</title>
  <style>
    .container {
      border: 1px solid #ccc;
      padding: 10px;
    }

    .block {
      display: inline-block;
      width: 150px;
      height: 100px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      border: 1px solid #333;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="block">Блок 1</div>
    <div class="block">Блок 2</div>
    <div class="block">Блок 3</div>
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
  <title>Расположение Inline-block</title>
  <style>
    .container {
      border: 1px solid #ccc;
      padding: 10px;
    }

    .block {
      display: inline-block;
      width: 150px;
      height: 100px;
      margin-right: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      border: 1px solid #333;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="block">Блок 1</div>
    <div class="block">Блок 2</div>
    <div class="block">Блок 3</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Расположение элементов в одну линию с помощью inline-block */
.container {
  border: 1px solid #ccc;
  padding: 10px;
}

.block {
  display: inline-block;
  width: 150px;
  height: 100px;
  margin-right: 10px;
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  border: 1px solid #333;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "https://html5book.ru/css-display/",
  ],
};

export const css_display_task_4 = {
  id: "css_display_task_4",
  module: "CSS",
  title: "Плавающие блоки с использованием Float",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с плавающими блоками, которые располагаются слева и справа с использованием float.",
  steps: [
    "Создайте HTML-документ с тремя блоками",
    "Задайте двум блокам тип отображения `float`: один слева, другой справа",
    "Настройте стили: ширину, высоту, цвет фона",
    "Между этими двумя блоками вставьте основной контент",
    "Проверьте, что блоки корректно плавают слева и справа",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Плавающие блоки Float</title>
  <style>
    .left-block {
      float: left;
      width: 150px;
      height: 200px;
      background-color: lightcoral;
      margin-right: 10px;
    }

    .right-block {
      float: right;
      width: 150px;
      height: 200px;
      background-color: lightgreen;
      margin-left: 10px;
    }

    .content {
      margin-left: 160px;
      margin-right: 160px;
      background-color: lightyellow;
      padding: 10px;
      height: 200px;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="clearfix">
    <div class="left-block">Слева</div>
    <div class="right-block">Справа</div>
    <div class="content">
      Основной контент страницы. Этот блок обтекается плавающими блоками.
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
  <title>Плавающие блоки Float</title>
  <style>
    .left-block {
      float: left;
      width: 150px;
      height: 200px;
      background-color: lightcoral;
      margin-right: 10px;
    }

    .right-block {
      float: right;
      width: 150px;
      height: 200px;
      background-color: lightgreen;
      margin-left: 10px;
    }

    .content {
      margin-left: 160px;
      margin-right: 160px;
      background-color: lightyellow;
      padding: 10px;
      height: 200px;
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="clearfix">
    <div class="left-block">Слева</div>
    <div class="right-block">Справа</div>
    <div class="content">
      Основной контент страницы. Этот блок обтекается плавающими блоками.
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Плавающие блоки с использованием Float */
.left-block {
  float: left;
  width: 150px;
  height: 200px;
  background-color: lightcoral;
  margin-right: 10px;
}

.right-block {
  float: right;
  width: 150px;
  height: 200px;
  background-color: lightgreen;
  margin-left: 10px;
}

.content {
  margin-left: 160px;
  margin-right: 160px;
  background-color: lightyellow;
  padding: 10px;
  height: 200px;
}

/* Clearfix для исправления обтекания */
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
export const css_display_task_5 = {
  id: "css_display_task_5",
  module: "CSS",
  title: "Создание макета с колонками",
  topic: "Типы отображения",
  topicId: "css_display",
  description:
    "Создайте HTML-документ с макетом из трёх колонок: левая панель навигации, основной контент и правая информационная панель. Используйте только float и inline-block.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>`",
    "Внутри контейнера создайте три блока: левая панель навигации, основной контент и правая панель информации",
    "Задайте левому блоку `float: left`, а правому — `float: right`",
    "Основной контент должен автоматически занимать оставшееся пространство",
    "Настройте стили: отступы, фон, границы",
    "Проверьте, что при изменении размеров окна макет остаётся стабильным",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Трёхколоночный макет без Flex и Grid</title>
  <style>
    /* Общий контейнер */
    .container {
      width: 100%;
      overflow: hidden;
      border: 1px solid #333;
      background-color: #f9f9f9;
    }

    /* Левая панель */
    .left-panel {
      float: left;
      width: 20%;
      background-color: lightblue;
      height: 400px;
      padding: 10px;
    }

    /* Правая панель */
    .right-panel {
      float: right;
      width: 20%;
      background-color: lightgreen;
      height: 400px;
      padding: 10px;
    }

    /* Основной контент */
    .main-content {
      margin-left: 20%;
      margin-right: 20%;
      background-color: lightyellow;
      height: 400px;
      padding: 10px;
    }

    /* Clearfix */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="container clearfix">
    <div class="left-panel">
      Левая панель навигации
    </div>
    <div class="main-content">
      Основной контент страницы. Здесь отображается основная информация.
    </div>
    <div class="right-panel">
      Правая информационная панель
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
  <title>Трёхколоночный макет без Flex и Grid</title>
  <style>
    /* Общий контейнер */
    .container {
      width: 100%;
      overflow: hidden;
      border: 1px solid #333;
      background-color: #f9f9f9;
    }

    /* Левая панель */
    .left-panel {
      float: left;
      width: 20%;
      background-color: lightblue;
      height: 400px;
      padding: 10px;
    }

    /* Правая панель */
    .right-panel {
      float: right;
      width: 20%;
      background-color: lightgreen;
      height: 400px;
      padding: 10px;
    }

    /* Основной контент */
    .main-content {
      margin-left: 20%;
      margin-right: 20%;
      background-color: lightyellow;
      height: 400px;
      padding: 10px;
    }

    /* Clearfix */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="container clearfix">
    <div class="left-panel">
      Левая панель навигации
    </div>
    <div class="main-content">
      Основной контент страницы. Здесь отображается основная информация.
    </div>
    <div class="right-panel">
      Правая информационная панель
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Макет из трёх колонок без Flex и Grid */
.container {
  width: 100%;
  overflow: hidden;
  border: 1px solid #333;
  background-color: #f9f9f9;
}

.left-panel {
  float: left;
  width: 20%;
  background-color: lightblue;
  height: 400px;
  padding: 10px;
}

.right-panel {
  float: right;
  width: 20%;
  background-color: lightgreen;
  height: 400px;
  padding: 10px;
}

.main-content {
  margin-left: 20%;
  margin-right: 20%;
  background-color: lightyellow;
  height: 400px;
  padding: 10px;
}

/* Clearfix для корректного обтекания */
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
