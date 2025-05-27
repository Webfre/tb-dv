export const css_pseudoElement_task_1 = {
  id: "css_pseudoElement_task_1",
  module: "CSS",
  title: "Добавление иконок перед элементами списка (before)",
  topic: "Псевдоэлементы",
  topicId: "css_pseudoElement",
  sectionId: "css_pseudoElement1",
  description:
    "Создайте HTML-документ со списком (`<ul>`), в котором перед каждым элементом отображается иконка с помощью псевдоэлемента `::before`.",
  steps: [
    "Создайте HTML-документ со списком (`<ul>`) и несколькими элементами (`<li>`)",
    "Настройте стилизацию списка",
    "Добавьте псевдоэлемент `::before` для каждого элемента списка",
    "Настройте иконку в псевдоэлементе с помощью Unicode",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Иконки перед элементами списка</title>
  <style>
    /* Стили для списка */
    ul {
      list-style-type: none;
      padding: 0;
      width: 300px;
    }

    /* Стили для элементов списка */
    li {
      padding: 10px;
      margin-bottom: 5px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      position: relative;
    }

    /* Добавление иконки перед элементом */
    li::before {
      content: "\\2714"; /* Unicode для галочки */
      color: #007acc;
      margin-right: 10px;
    }
  </style>
</head>
<body>

  <ul>
    <li>Элемент списка 1</li>
    <li>Элемент списка 2</li>
    <li>Элемент списка 3</li>
    <li>Элемент списка 4</li>
  </ul>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Иконки перед элементами списка</title>
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      width: 300px;
    }

    li {
      padding: 10px;
      margin-bottom: 5px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      position: relative;
    }

    li::before {
      content: "\\2714";
      color: #007acc;
      margin-right: 10px;
    }
  </style>
</head>
<body>

  <ul>
    <li>Элемент списка 1</li>
    <li>Элемент списка 2</li>
    <li>Элемент списка 3</li>
    <li>Элемент списка 4</li>
  </ul>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Стили для списка */
    ul {
      list-style-type: none;
      padding: 0;
      width: 300px;
    }

    /* Стили для элементов списка */
    li {
      padding: 10px;
      margin-bottom: 5px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      position: relative;
    }

    /* Добавление иконки перед элементом */
    li::before {
      content: "\\2714"; /* Unicode для галочки */
      color: #007acc;
      margin-right: 10px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::before",
    "https://html5book.ru/css-psevdoyelementy/",
  ],
};
export const css_pseudoElement_task_2 = {
  id: "css_pseudoElement_task_2",
  module: "CSS",
  title: "Добавление декоративных линий после заголовков (after)",
  topic: "Псевдоэлементы",
  topicId: "css_pseudoElement",
  sectionId: "css_pseudoElement2",
  description:
    "Создайте HTML-документ с заголовками (`<h2>`), после которых появляется декоративная линия с помощью псевдоэлемента `::after`.",
  steps: [
    "Создайте HTML-документ с несколькими заголовками (`<h2>`)",
    "Настройте стилизацию заголовков",
    "Добавьте псевдоэлемент `::after` для каждого заголовка",
    "Настройте декоративную линию после заголовка",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декоративные линии после заголовков</title>
  <style>
    /* Стили для заголовков */
    h2 {
      font-size: 24px;
      margin-bottom: 15px;
      position: relative;
      padding-bottom: 5px;
      color: #333;
    }

    /* Псевдоэлемент ::after для декоративной линии */
    h2::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 50px;
      height: 3px;
      background-color: #007acc;
    }
  </style>
</head>
<body>

  <h2>Заголовок 1</h2>
  <h2>Заголовок 2</h2>
  <h2>Заголовок 3</h2>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декоративные линии после заголовков</title>
  <style>
    h2 {
      font-size: 24px;
      margin-bottom: 15px;
      position: relative;
      padding-bottom: 5px;
      color: #333;
    }

    h2::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 50px;
      height: 3px;
      background-color: #007acc;
    }
  </style>
</head>
<body>

  <h2>Заголовок 1</h2>
  <h2>Заголовок 2</h2>
  <h2>Заголовок 3</h2>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стили для заголовков */
h2 {
  font-size: 24px;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 5px;
  color: #333;
}

/* Добавление декоративной линии после заголовка */
h2::after {
  content: "";
  position: absolute;   /* Абсолютное позиционирование */
  left: 0;              /* Начало слева */
  bottom: -5px;         /* Смещение ниже заголовка */
  width: 50px;          /* Ширина линии */
  height: 3px;          /* Высота линии */
  background-color: #007acc; /* Цвет линии */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::after",
    "https://html5book.ru/css-psevdoyelementy/",
  ],
};
export const css_pseudoElement_task_3 = {
  id: "css_pseudoElement_task_3",
  module: "CSS",
  title: "Стилизация первой буквы абзаца (first-letter)",
  topic: "Псевдоэлементы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo1",
  description:
    "Создайте HTML-документ с текстом, в котором первая буква абзаца выделяется с помощью псевдоэлемента `::first-letter`.",
  steps: [
    "Создайте HTML-документ с несколькими абзацами текста (`<p>`)",
    "Настройте стилизацию для первой буквы в каждом абзаце",
    "Измените цвет, размер шрифта и добавьте эффект жирного начертания",
    "Настройте дополнительное расстояние справа от первой буквы",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Стилизация первой буквы (first-letter)</title>
</head>
<body>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
  </p>
  
  <p>
    Curabitur ultricies felis sit amet vestibulum lacinia. Maecenas ut magna vel est elementum tempus sit amet in felis.
  </p>
  
  <p>
    Aliquam erat volutpat. Morbi consectetur varius neque, eu ultrices lectus convallis in.
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
  <title>Стилизация первой буквы (first-letter)</title>
  <style>
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 18px;
    }

    p::first-letter {
      font-size: 32px;
      font-weight: bold;
      color: #007acc;
      margin-right: 5px;
      float: left;
    }
  </style>
</head>
<body>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
  </p>
  
  <p>
    Curabitur ultricies felis sit amet vestibulum lacinia. Maecenas ut magna vel est elementum tempus sit amet in felis.
  </p>
  
  <p>
    Aliquam erat volutpat. Morbi consectetur varius neque, eu ultrices lectus convallis in.
  </p>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стили для абзацев */
p {
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: 18px;
}

/* Стилизация первой буквы абзаца */
p::first-letter {
  font-size: 32px;      /* Увеличенный размер */
  font-weight: bold;    /* Жирное начертание */
  color: #007acc;       /* Цвет текста */
  margin-right: 5px;    /* Отступ справа */
  float: left;          /* Обтекание текста */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::first-letter",
    "https://html5book.ru/css-psevdoyelementy/",
  ],
};
export const css_pseudoElement_task_4 = {
  id: "css_pseudoElement_task_4",
  module: "CSS",
  title: "Стилизация первой строки абзаца (first-line)",
  topic: "Псевдоэлементы",
  topicId: "css_pseudoElement",
  sectionId: "css_pseudoElement4",
  description:
    "Создайте HTML-документ с текстом, в котором первая строка каждого абзаца выделяется с помощью псевдоэлемента `::first-line`.",
  steps: [
    "Создайте HTML-документ с несколькими абзацами текста (`<p>`)",
    "Настройте стилизацию для первой строки в каждом абзаце",
    "Измените цвет, размер шрифта и стиль текста первой строки",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Стилизация первой строки (first-line)</title>
  <style>
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 18px;
    }

    p::first-line {
      font-size: 20px;
      font-weight: bold;
      color: #007acc;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
  </p>
  
  <p>
    Curabitur ultricies felis sit amet vestibulum lacinia. Maecenas ut magna vel est elementum tempus sit amet in felis.
  </p>
  
  <p>
    Aliquam erat volutpat. Morbi consectetur varius neque, eu ultrices lectus convallis in.
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
  <title>Стилизация первой строки (first-line)</title>
  <style>
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 18px;
    }

    p::first-line {
      font-size: 20px;
      font-weight: bold;
      color: #007acc;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
  </p>
  
  <p>
    Curabitur ultricies felis sit amet vestibulum lacinia. Maecenas ut magna vel est elementum tempus sit amet in felis.
  </p>
  
  <p>
    Aliquam erat volutpat. Morbi consectetur varius neque, eu ultrices lectus convallis in.
  </p>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
p {
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: 18px;
}

p::first-line {
  font-size: 20px;
  font-weight: bold;
  color: #007acc;
  text-transform: uppercase;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::first-line",
    "https://html5book.ru/css-psevdoyelementy/",
  ],
};
export const css_pseudoElement_task_5 = {
  id: "css_pseudoElement_task_5",
  module: "CSS",
  title: "Декоративные кавычки для цитат (before и after)",
  topic: "Псевдоэлементы",
  topicId: "css_pseudoElement",
  sectionId: "css_pseudoElement5",
  description:
    "Создайте HTML-документ с цитатами (`<blockquote>`), для которых с помощью псевдоэлементов `::before` и `::after` будут добавлены декоративные кавычки.",
  steps: [
    "Создайте HTML-документ с несколькими цитатами (`<blockquote>`)",
    "Настройте стилизацию для текста цитат",
    "С помощью псевдоэлементов `::before` и `::after` добавьте кавычки",
    "Настройте декоративный вид кавычек и текста",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декоративные кавычки для цитат</title>
  <style>
    /* Основной стиль для блока цитаты */
    blockquote {
      font-size: 20px;
      font-style: italic;
      color: #333;
      margin: 20px auto;
      padding: 15px 20px;
      border-left: 4px solid #007acc;
      background-color: #f9f9f9;
      position: relative;
    }

    /* Добавление кавычки перед цитатой */
    blockquote::before {
      content: "“"; /* Unicode кавычка открытия */
      font-size: 40px;
      color: #007acc;
      position: absolute;
      left: -20px;
      top: -10px;
    }

    /* Добавление кавычки после цитаты */
    blockquote::after {
      content: "”"; /* Unicode кавычка закрытия */
      font-size: 40px;
      color: #007acc;
      position: absolute;
      right: -20px;
      bottom: -10px;
    }
  </style>
</head>
<body>

  <blockquote>
    Дизайн — это не то, как объект выглядит или ощущается. Дизайн — это то, как он работает.
  </blockquote>

  <blockquote>
    Великие вещи в бизнесе никогда не делаются одним человеком. Они достигаются командой людей.
  </blockquote>

  <blockquote>
    Самое сложное — это начать действовать, все остальное зависит только от упорства.
  </blockquote>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декоративные кавычки для цитат</title>
  <style>
    blockquote {
      font-size: 20px;
      font-style: italic;
      color: #333;
      margin: 20px auto;
      padding: 15px 20px;
      border-left: 4px solid #007acc;
      background-color: #f9f9f9;
      position: relative;
    }

    blockquote::before {
      content: "“";
      font-size: 40px;
      color: #007acc;
      position: absolute;
      left: -20px;
      top: -10px;
    }

    blockquote::after {
      content: "”";
      font-size: 40px;
      color: #007acc;
      position: absolute;
      right: -20px;
      bottom: -10px;
    }
  </style>
</head>
<body>

  <blockquote>
    Дизайн — это не то, как объект выглядит или ощущается. Дизайн — это то, как он работает.
  </blockquote>

  <blockquote>
    Великие вещи в бизнесе никогда не делаются одним человеком. Они достигаются командой людей.
  </blockquote>

  <blockquote>
    Самое сложное — это начать действовать, все остальное зависит только от упорства.
  </blockquote>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Основной стиль для блока цитаты */
blockquote {
  font-size: 20px;
  font-style: italic;
  color: #333;
  margin: 20px auto;
  padding: 15px 20px;
  border-left: 4px solid #007acc;
  background-color: #f9f9f9;
  position: relative;
}

/* Псевдоэлемент ::before для открывающей кавычки */
blockquote::before {
  content: "“";              /* Unicode кавычка открытия */
  font-size: 40px;           /* Размер кавычки */
  color: #007acc;            /* Цвет кавычки */
  position: absolute;        /* Абсолютное позиционирование */
  left: -20px;               /* Смещение слева */
  top: -10px;                /* Смещение сверху */
}

/* Псевдоэлемент ::after для закрывающей кавычки */
blockquote::after {
  content: "”";              /* Unicode кавычка закрытия */
  font-size: 40px;           /* Размер кавычки */
  color: #007acc;            /* Цвет кавычки */
  position: absolute;        /* Абсолютное позиционирование */
  right: -20px;              /* Смещение справа */
  bottom: -10px;             /* Смещение снизу */
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::before",
    "https://developer.mozilla.org/ru/docs/Web/CSS/::after",
    "https://html5book.ru/css-psevdoyelementy/",
  ],
};
