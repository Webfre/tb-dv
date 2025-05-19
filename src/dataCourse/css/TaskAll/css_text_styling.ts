export const css_text_styling_task_1 = {
  id: "css_text_styling_task_1",
  module: "CSS",
  title: "Цвет текста",
  topic: "Шрифты и текст",
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

/* Пример эффекта при наведении */
h1:hover, h2:hover, h3:hover {
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
