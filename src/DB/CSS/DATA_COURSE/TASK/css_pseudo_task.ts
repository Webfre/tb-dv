// Псевдоклассы
export const css_pseudo_task_1 = {
  id: "css_pseudo_task_1",
  module: "CSS",
  title: "Псевдоклассы для списков",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo1",
  description:
    "Создайте HTML-документ со списком из пяти элементов и примените к ним псевдоклассы: :first-child, :last-child и :nth-child.",
  steps: [
    "Создайте HTML-документ с ненумерованным списком `<ul>` из пяти элементов `<li>`.",
    "Используйте псевдокласс `:first-child` для стилизации первого элемента.",
    "Используйте псевдокласс `:last-child` для стилизации последнего элемента.",
    "Используйте псевдокласс `:nth-child(2n)` для стилизации каждого чётного элемента.",
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
  <title>Псевдоклассы для списков</title>
</head>
<body>
  <ul>
    <li>Первый элемент</li>
    <li>Второй элемент</li>
    <li>Третий элемент</li>
    <li>Четвёртый элемент</li>
    <li>Пятый элемент</li>
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
  <title>Псевдоклассы для списков</title>
  <style>
    li:first-child {
      color: green;
      font-weight: bold;
    }

    li:last-child {
      color: red;
      font-weight: bold;
    }

    li:nth-child(2n) {
      background-color: #f0f8ff;
    }
  </style>
</head>
<body>

  <ul>
    <li>Первый элемент</li>
    <li>Второй элемент</li>
    <li>Третий элемент</li>
    <li>Четвёртый элемент</li>
    <li>Пятый элемент</li>
  </ul>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стилизация первого элемента списка */
li:first-child {
  color: green;
  font-weight: bold;
}

/* Стилизация последнего элемента списка */
li:last-child {
  color: red;
  font-weight: bold;
}

/* Стилизация всех чётных элементов списка */
li:nth-child(2n) {
  background-color: #f0f8ff;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:first-child",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:last-child",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child",
    "https://html5book.ru/css-pseudo-classes/",
  ],
};
export const css_pseudo_task_3 = {
  id: "css_pseudo_task_3",
  module: "CSS",
  title: "Форма с валидацией и псевдоклассами",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo1",
  description:
    "Создайте HTML-форму с полями ввода и примените псевдоклассы для стилизации: :focus, :empty, :checked, :disabled.",
  steps: [
    "Создайте HTML-форму с полями ввода: 'Имя', 'Email' и чекбокс 'Согласен с условиями'.",
    "Примените псевдокласс `:focus` для выделения поля при фокусе.",
    "Используйте `:placeholder-shown` вместо `:empty` — он поддерживается шире.",
    "Примените `:checked` для стилизации метки при выборе чекбокса.",
    "Сделайте кнопку типа submit`, чтобы  отправлялась форма.",
    "Сделайте кнопку визуально неактивной до установки чекбокса с помощью `:checked ~ button`.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Форма с псевдоклассами</title>
</head>
<body>
  <form>
    <input type="text" placeholder="Введите ваше имя">
    <input type="email" placeholder="Введите ваш email">

    <input type="checkbox" id="agree">
    <label for="agree">Согласен с условиями</label>

    <button type="submit">Отправить</button>
  </form>
</body>
</html>
  `.trim(),
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Форма с псевдоклассами</title>
  <style>
    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    form {
    width: 400px;
    }

    input:focus {
      border-color: #3498db;
      outline: none;
    }

    input:placeholder-shown {
      background-color: #f0f0f0;
    }

    label {
      display: block;
      margin: 10px 0;
    }

    input[type="checkbox"]:checked + label {
      color: green;
      font-weight: bold;
    }

    button {
      padding: 10px 20px;
      background-color: #ccc;
      color: #999;
      border: none;
      border-radius: 4px;
      cursor: not-allowed;
    }

    input[type="checkbox"]:checked ~ button {
      background-color: #2ecc71;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <form>
    <input type="text" placeholder="Введите ваше имя">
    <input type="email" placeholder="Введите ваш email">

    <input type="checkbox" id="agree">
    <label for="agree">Согласен с условиями</label>

    <button type="button">Отправить</button>
  </form>
</body>
</html>`.trim(),
  codeExampleCSS: `
    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input:focus {
      border-color: #3498db;
      outline: none;
    }
    form {
    width: 400px;
    }

    input:placeholder-shown {
      background-color: #f0f0f0;
    }

    label {
      display: block;
      margin: 10px 0;
    }

    input[type="checkbox"]:checked + label {
      color: green;
      font-weight: bold;
    }

    button {
      padding: 10px 20px;
      background-color: #ccc;
      color: #999;
      border: none;
      border-radius: 4px;
      cursor: not-allowed;
    }

    input[type="checkbox"]:checked ~ button {
      background-color: #2ecc71;
      color: white;
      cursor: pointer;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:focus",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:placeholder-shown",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:checked",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/button",
  ],
};
export const css_pseudo_task_4 = {
  id: "css_pseudo_task_4",
  module: "CSS",
  title: "Кнопки с псевдоклассами",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo1",
  description:
    "Создайте 3 кнопки и примените к каждой разные псевдоклассы: :hover, :active, :focus. Каждая кнопка должна вести себя по-разному при взаимодействии пользователя.",
  steps: [
    "Создайте 3 кнопки с текстом: 'Наведи', 'Нажми', 'Фокус'.",
    "Для первой используйте псевдокласс `:hover`, изменяя цвет и фон при наведении.",
    "Для второй примените `:active`, изменяя стили во время нажатия.",
    "Для третьей примените `:focus`, добавляя обводку или эффект при фокусе (например, при переходе по Tab).",
    "Настройте стили по умолчанию, чтобы поведение было наглядным.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Псевдоклассы на кнопках</title>
</head>
<body>
  <button class="btn hover-btn">Наведи</button>
  <button class="btn active-btn">Нажми</button>
  <button class="btn focus-btn">Фокус</button>
</body>
</html>
  `.trim(),
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Псевдоклассы на кнопках</title>
  <style>
    .btn {
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .hover-btn {
      background-color: #eee;
      color: #333;
    }

    .hover-btn:hover {
      background-color: #3498db;
      color: white;
    }

    .active-btn {
      background-color: #f39c12;
      color: white;
    }

    .active-btn:active {
      background-color: #e67e22;
      transform: scale(0.95);
    }

    .focus-btn {
      background-color: #2ecc71;
      color: white;
    }

    .focus-btn:focus {
      outline: 3px solid #27ae60;
      box-shadow: 0 0 5px #27ae60;
    }
  </style>
</head>
<body>
  <button class="btn hover-btn">Наведи</button>
  <button class="btn active-btn">Нажми</button>
  <button class="btn focus-btn">Фокус</button>
</body>
</html>`.trim(),

  codeExampleCSS: `
    .btn {
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .hover-btn {
      background-color: #eee;
      color: #333;
    }

    .hover-btn:hover {
      background-color: #3498db;
      color: white;
    }

    .active-btn {
      background-color: #f39c12;
      color: white;
    }

    .active-btn:active {
      background-color: #e67e22;
      transform: scale(0.95);
    }

    .focus-btn {
      background-color: #2ecc71;
      color: white;
    }

    .focus-btn:focus {
      outline: 3px solid #27ae60;
      box-shadow: 0 0 5px #27ae60;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:hover",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:active",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:focus",
  ],
};
export const css_pseudo_taskAll_1 = {
  id: "css_pseudo_taskAll_1",
  module: "CSS",
  title: "Подсветка четных и нечетных строк в таблице (nth-child)",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo1",
  description:
    "Создайте HTML-документ с таблицей (`<table>`), в которой четные строки подсвечиваются одним цветом, а нечетные — другим.",
  steps: [
    "Создайте HTML-документ с таблицей (`<table>`) и несколькими строками (`<tr>`)",
    "Настройте стилизацию четных строк с помощью псевдокласса `nth-child`",
    "Настройте стилизацию нечетных строк с другим цветом",
    "Добавьте стили для ячеек и рамок",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Подсветка четных и нечетных строк</title>
</head>
<body>

  <table>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Возраст</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Иван</td>
        <td>Иванов</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Петр</td>
        <td>Петров</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Сергей</td>
        <td>Сергеев</td>
        <td>28</td>
      </tr>
      <tr>
        <td>Алексей</td>
        <td>Алексеев</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Подсветка четных и нечетных строк</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:nth-child(odd) {
      background-color: #e6f7ff;
    }
  </style>
</head>
<body>

  <table>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Возраст</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Иван</td>
        <td>Иванов</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Петр</td>
        <td>Петров</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Сергей</td>
        <td>Сергеев</td>
        <td>28</td>
      </tr>
      <tr>
        <td>Алексей</td>
        <td>Алексеев</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Таблица с подсветкой строк */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

/* Четные строки */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Нечетные строки */
tr:nth-child(odd) {
  background-color: #e6f7ff;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child",
    "https://html5book.ru/css-nth-child/",
  ],
};
export const css_pseudo_taskAll_2 = {
  id: "css_pseudo_task_2",
  module: "CSS",
  title: "Выделение первого и последнего элемента списка",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo2",
  description:
    "Создайте HTML-документ со списком (`<ul>`), в котором первый и последний элементы выделяются цветом.",
  steps: [
    "Создайте HTML-документ со списком (`<ul>`) и несколькими элементами (`<li>`)",
    "Настройте стилизацию для первого элемента списка (`first-child`)",
    "Настройте стилизацию для последнего элемента списка (`last-child`)",
    "Проверьте, как отображаются стили при добавлении новых элементов",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Выделение первого и последнего элемента списка</title>
</head>
<body>

  <ul>
    <li>Первый элемент</li>
    <li>Элемент списка 2</li>
    <li>Элемент списка 3</li>
    <li>Последний элемент</li>
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
  <title>Выделение первого и последнего элемента списка</title>
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      width: 200px;
    }

    li {
      padding: 10px;
      margin-bottom: 5px;
      background-color: #f1f1f1;
      border: 1px solid #ccc;
    }

    li:first-child {
      background-color: #007acc;
      color: white;
    }

    li:last-child {
      background-color: #28a745;
      color: white;
    }
  </style>
</head>
<body>

  <ul>
    <li>Первый элемент</li>
    <li>Элемент списка 2</li>
    <li>Элемент списка 3</li>
    <li>Последний элемент</li>
  </ul>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стилизация списка */
ul {
  list-style-type: none;
  padding: 0;
  width: 200px;
}

li {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
}

/* Первый элемент списка */
li:first-child {
  background-color: #007acc;
  color: white;
}

/* Последний элемент списка */
li:last-child {
  background-color: #28a745;
  color: white;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:first-child",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:last-child",
    "https://html5book.ru/css-nth-child/",
  ],
};
export const css_pseudo_taskAll_3 = {
  id: "css_pseudo_taskAll_3",
  module: "CSS",
  title: "Подсветка полей ввода при фокусе (focus)",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo3",
  description:
    "Создайте HTML-документ с формой, в которой поля ввода меняют цвет обводки при фокусе.",
  steps: [
    "Создайте HTML-документ с формой (`<form>`) и несколькими полями ввода (`<input>`)",
    "Настройте стилизацию полей ввода с базовым цветом рамки",
    "При фокусе (`:focus`) меняйте цвет рамки и фона",
    "Добавьте плавный переход для смены состояния",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Подсветка полей ввода при фокусе</title>
</head>
<body>

  <form>
    <input type="text" placeholder="Введите ваше имя" />
    <input type="email" placeholder="Введите ваш email" />
    <input type="password" placeholder="Введите ваш пароль" />
    <button type="submit">Отправить</button>
  </form>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Подсветка полей ввода при фокусе</title>
  <style>
    form {
      width: 300px;
      margin: 20px auto;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 2px solid #ccc;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    input:focus {
      border-color: #007acc;
      background-color: #e6f7ff;
      outline: none;
    }

    button {
      padding: 10px 20px;
      border: none;
      background-color: #007acc;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #005f99;
    }
  </style>
</head>
<body>

  <form>
    <input type="text" placeholder="Введите ваше имя" />
    <input type="email" placeholder="Введите ваш email" />
    <input type="password" placeholder="Введите ваш пароль" />
    <button type="button">Отправить</button>
  </form>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стили для формы */
form {
  width: 300px;
  margin: 20px auto;
}

/* Стили для полей ввода */
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

/* Изменение стиля при фокусе */
input:focus {
  border-color: #007acc;
  background-color: #e6f7ff;
  outline: none;
}

/* Стили для кнопки отправки */
button {
  padding: 10px 20px;
  border: none;
  background-color: #007acc;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #005f99;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:focus",
    "https://html5book.ru/hover-focus-active/",
  ],
};
export const css_pseudo_taskAll_4 = {
  id: "css_pseudo_taskAll_4",
  module: "CSS",
  title: "Стилизация заблокированных полей (disabled)",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo4",
  description:
    "Создайте HTML-документ с формой, в которой заблокированные поля ввода имеют специальную стилизацию.",
  steps: [
    "Создайте HTML-документ с формой (`<form>`) и несколькими полями ввода (`<input>`)",
    "Одно из полей должно быть заблокировано (`disabled`)",
    "Настройте стилизацию заблокированного поля с помощью псевдокласса `:disabled`",
    "Добавьте стилизацию для заблокированной кнопки",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Стилизация заблокированных полей (disabled)</title>
</head>
<body>

  <form>
    <input type="text" placeholder="Ваше имя" />
    <input type="email" placeholder="Ваш email" />
    <input type="password" placeholder="Ваш пароль" disabled />
    <button type="submit" disabled>Заблокировано</button>
  </form>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Стилизация заблокированных полей (disabled)</title>
  <style>
    form {
      width: 300px;
      margin: 20px auto;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 2px solid #ccc;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    input:disabled {
      background-color: #f5f5f5;
      border-color: #999;
      color: #666;
      cursor: not-allowed;
    }

    button {
      padding: 10px 20px;
      border: none;
      background-color: #007acc;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #005f99;
    }

    button:disabled {
      background-color: #999;
      cursor: not-allowed;
    }
  </style>
</head>
<body>

  <form>
    <input type="text" placeholder="Ваше имя" />
    <input type="email" placeholder="Ваш email" />
    <input type="password" placeholder="Ваш пароль" disabled />
    <button type="submit" disabled>Заблокировано</button>
  </form>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стили для формы */
    form {
      width: 300px;
      margin: 20px auto;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 2px solid #ccc;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    input:disabled {
      background-color: #f5f5f5;
      border-color: #999;
      color: #666;
      cursor: not-allowed;
    }

    button {
      padding: 10px 20px;
      border: none;
      background-color: #007acc;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #005f99;
    }

    button:disabled {
      background-color: #999;
      cursor: not-allowed;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:disabled",
    "https://html5book.ru/hover-focus-active/",
  ],
};
export const css_pseudo_taskAll_5 = {
  id: "css_pseudo_taskAll_5",
  module: "CSS",
  title: "Стилизация чекбоксов и радиокнопок при выборе (checked)",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo5",
  description:
    "Создайте HTML-документ с чекбоксами и радиокнопками, которые меняют стиль при выборе (`checked`).",
  steps: [
    "Создайте HTML-документ с чекбоксами (`<input type='checkbox'>`) и радиокнопками (`<input type='radio'>`)",
    "Настройте стилизацию для состояния по умолчанию",
    "Настройте стилизацию для состояния `:checked`",
    "Добавьте плавный переход при изменении состояния",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Стилизация чекбоксов и радиокнопок (checked)</title>
</head>
<body>

  <div class="form-group">
    <input type="checkbox" id="checkbox1">
    <label for="checkbox1">Я принимаю условия соглашения</label>
  </div>

  <div class="form-group">
    <input type="checkbox" id="checkbox2">
    <label for="checkbox2">Подписаться на рассылку новостей</label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio1" name="gender">
    <label for="radio1">Мужчина</label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio2" name="gender">
    <label for="radio2">Женщина</label>
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
  <title>Стилизация чекбоксов и радиокнопок (checked)</title>
  <style>
    .form-group {
      margin-bottom: 15px;
    }

    input[type="checkbox"],
    input[type="radio"] {
      margin-right: 10px;
      transform: scale(1.2);
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      accent-color: #007acc;
    }

    input[type="radio"]:checked {
      accent-color: #28a745;
    }

    label {
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <div class="form-group">
    <input type="checkbox" id="checkbox1">
    <label for="checkbox1">Я принимаю условия соглашения</label>
  </div>

  <div class="form-group">
    <input type="checkbox" id="checkbox2">
    <label for="checkbox2">Подписаться на рассылку новостей</label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio1" name="gender">
    <label for="radio1">Мужчина</label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio2" name="gender">
    <label for="radio2">Женщина</label>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стили для чекбоксов и радиокнопок */
   .form-group {
      margin-bottom: 15px;
    }

    input[type="checkbox"],
    input[type="radio"] {
      margin-right: 10px;
      transform: scale(1.2);
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      accent-color: #007acc;
    }

    input[type="radio"]:checked {
      accent-color: #28a745;
    }

    label {
      cursor: pointer;
      font-size: 16px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:checked",
    "https://html5book.ru/hover-focus-active/",
  ],
};
export const css_pseudo_taskAll_6 = {
  id: "css_pseudo_taskAll_6",
  module: "CSS",
  title: "Форма с исключениями для валидации (not)",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo6",
  description:
    "Создайте форму, в которой все поля ввода подсвечиваются при ошибке, кроме одного, которое исключено из проверки.",
  steps: [
    "Создайте HTML-документ с формой (`<form>`) и несколькими полями ввода (`<input>`)",
    "Настройте стилизацию для всех полей ввода, которые не прошли валидацию",
    "Добавьте псевдокласс `:not` для исключения одного из полей из общей стилизации",
    "Добавьте проверку валидации: пустое значение - ошибка",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  <title>Форма с исключениями (not)</title>
</head>
<body>

  <form>
    <input id="user-id" type="text" placeholder="ID (не проверяется)" />
    <input type="text" placeholder="Имя" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Пароль" required />
    <button type="submit">Отправить</button>
  </form>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Форма с исключениями (not)</title>
  <style>
    form {
      width: 300px;
      margin: 20px auto;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 2px solid #ccc;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    button {
      padding: 10px 20px;
      border: none;
      background-color: #007acc;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #005f99;
    }

    input:invalid:not(#user-id) {
      border-color: red;
      background-color: #ffe6e6;
    }

    #user-id {
      border-color: #28a745;
      background-color: #e6ffe6;
    }
  </style>
</head>
<body>

  <form>
    <input id="user-id" type="text" placeholder="ID (не проверяется)" />
    <input type="text" placeholder="Имя" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Пароль" required />
    <button type="button">Отправить</button>
  </form>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
      form {
      width: 300px;
      margin: 20px auto;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 2px solid #ccc;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    button {
      padding: 10px 20px;
      border: none;
      background-color: #007acc;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #005f99;
    }

    input:invalid:not(#user-id) {
      border-color: red;
      background-color: #ffe6e6;
    }

    #user-id {
      border-color: #28a745;
      background-color: #e6ffe6;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:not",
    "https://html5book.ru/css-not-selector/",
  ],
};

// Псевдоэлементы
export const css_pseudo_task_8 = {
  id: "css_pseudo_task_8",
  module: "CSS",
  title: "Список с пунктами и значками",
  topic: "Псевдоэлементы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo2",
  description:
    "Создайте HTML-документ с пунктами списка. Используйте псевдоэлемент ::before для добавления значка перед каждым элементом.",
  steps: [
    "Создайте HTML-документ с элементами списка `<ul>` и несколькими `<li>`.",
    "Примените псевдоэлемент `::before` к каждому элементу списка.",
    "Добавьте символ '•' перед каждым элементом списка.",
    "Стилизуйте символ: задайте ему цвет и отступ.",
    "Проверьте, что стили корректно отображаются.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Список с пунктами и значками</title>
</head>
<body>

  <ul>
    <li>Прочитать книгу</li>
    <li>Посмотреть курс по CSS</li>
    <li>Сделать домашнее задание</li>
    <li>Подготовиться к тесту</li>
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
  <title>Список с пунктами и значками</title>
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      width: 250px;
      margin: 20px auto;
    }

    li {
      padding: 8px 0;
      border-bottom: 1px solid #ccc;
      color: #2c3e50;
      font-size: 16px;
    }

    li::before {
      content: "• ";
      color: #2980b9;
      margin-right: 5px;
    }
  </style>
</head>
<body>

  <ul>
    <li>Прочитать книгу</li>
    <li>Посмотреть курс по CSS</li>
    <li>Сделать домашнее задание</li>
    <li>Подготовиться к тесту</li>
  </ul>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  /* Убираем стандартные стили списка */
    ul {
      list-style-type: none;
      padding: 0;
      width: 250px;
      margin: 20px auto;
    }

    /* Стили для пунктов списка */
    li {
      padding: 8px 0;
      border-bottom: 1px solid #ccc;
      color: #2c3e50;
      font-size: 16px;
    }

    /* Псевдоэлемент перед каждым пунктом */
    li::before {
      content: "• ";
      color: #2980b9;
      margin-right: 5px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::before",
    "https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type",
    "https://html5book.ru/css-pseudo-elements/",
  ],
};
export const css_pseudo_task_5 = {
  id: "css_pseudo_task_5",
  module: "CSS",
  title: "Оформление карточек товаров с псевдоэлементами",
  topic: "Псевдоэлементы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo2",
  description:
    "Создайте HTML-документ с карточками товаров. Используйте псевдоэлементы ::before и ::after для добавления элементов перед заголовком и после описания.",
  steps: [
    "Создайте HTML-документ с тремя карточками товаров.",
    "Каждая карточка должна содержать заголовок `<h2>`, описание `<p>` и кнопку `<button>`.",
    "Используйте псевдоэлемент `::before` для добавления иконки '🔥' перед заголовком.",
    "Примените псевдоэлемент `::after` для добавления текста 'Бесплатная доставка' после описания.",
    "Стилизуйте карточки для лучшего отображения.",
    "Проверьте, что стили корректно отображаются.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Карточки товаров с псевдоэлементами</title>

</head>
<body>

  <div class="card">
    <h2>Смартфон</h2>
    <p>Мощный смартфон с отличной камерой.</p>
    <button>Купить</button>
  </div>

  <div class="card">
    <h2>Ноутбук</h2>
    <p>Высокопроизводительный ноутбук для работы и игр.</p>
    <button>Купить</button>
  </div>

  <div class="card">
    <h2>Наушники</h2>
    <p>Беспроводные наушники с шумоподавлением.</p>
    <button>Купить</button>
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
  <title>Карточки товаров с псевдоэлементами</title>
  <style>
    .card {
      width: 250px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 20px auto;
      padding: 15px;
      text-align: center;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #2c3e50;
      position: relative;
    }

    h2::before {
      content: "🔥 ";
      color: red;
      margin-right: 5px;
    }

    p {
      font-size: 14px;
      color: #7f8c8d;
      margin-bottom: 10px;
      position: relative;
    }

    p::after {
      content: "Бесплатная доставка";
      display: block;
      margin-top: 5px;
      color: #27ae60;
      font-weight: bold;
    }

    button {
      padding: 10px 15px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2>Смартфон</h2>
    <p>Мощный смартфон с отличной камерой.</p>
    <button>Купить</button>
  </div>

  <div class="card">
    <h2>Ноутбук</h2>
    <p>Высокопроизводительный ноутбук для работы и игр.</p>
    <button>Купить</button>
  </div>

  <div class="card">
    <h2>Наушники</h2>
    <p>Беспроводные наушники с шумоподавлением.</p>
    <button>Купить</button>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Основной стиль для карточек */
    .card {
      width: 250px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 20px auto;
      padding: 15px;
      text-align: center;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #2c3e50;
      position: relative;
    }

    /* Псевдоэлемент перед заголовком */
    h2::before {
      content: "🔥 ";
      color: red;
      margin-right: 5px;
    }

    p {
      font-size: 14px;
      color: #7f8c8d;
      margin-bottom: 10px;
      position: relative;
    }

    /* Псевдоэлемент после описания */
    p::after {
      content: "Бесплатная доставка";
      display: block;
      margin-top: 5px;
      color: #27ae60;
      font-weight: bold;
    }

    button {
      padding: 10px 15px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::before",
    "https://developer.mozilla.org/ru/docs/Web/CSS/::after",
    "https://html5book.ru/css-pseudo-elements/",
  ],
};
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
    <link rel="stylesheet" href="styles.css">
  <title>Иконки перед элементами списка</title>
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
    <link rel="stylesheet" href="styles.css">
  <title>Декоративные линии после заголовков</title>
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
    <link rel="stylesheet" href="styles.css">
  <title>Стилизация первой строки (first-line)</title>
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
    <link rel="stylesheet" href="styles.css">
  <title>Декоративные кавычки для цитат</title>
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
// Состояния элементов
export const css_pseudo_task_6 = {
  id: "css_pseudo_task_6",
  module: "CSS",
  title: "Стилизованная кнопка с эффектом наведения",
  topic: "Состояния элементов",
  topicId: "css_pseudo",
  sectionId: "css_pseudo3",
  description:
    "Создайте HTML-документ с кнопкой. Реализуйте эффекты наведения (hover) и нажатия (active) с изменением стилей.",
  steps: [
    "Создайте HTML-документ и добавьте кнопку `<button>`.",
    "Примените базовые стили для кнопки: цвет, размер и границы.",
    "Добавьте эффект наведения (`hover`), при котором цвет кнопки меняется.",
    "Реализуйте эффект нажатия (`active`), при котором кнопка становится чуть меньше.",
    "Проверьте, что стили корректно отображаются при взаимодействии.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Стилизованная кнопка с эффектом наведения</title>
</head>
<body>

  <button>Нажми меня</button>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Стилизованная кнопка с эффектом наведения</title>
  <style>
    button {
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color:rgb(240, 12, 12);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    button:hover {
      background-color: #2980b9;
    }

    button:active {
      transform: scale(0.95);
    }
  </style>
</head>
<body>

  <button>Нажми меня</button>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    /* Основной стиль для кнопки */
    button {
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color:rgb(240, 12, 12);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    /* Эффект наведения */
    button:hover {
      background-color: #2980b9;
    }

    /* Эффект нажатия */
    button:active {
      transform: scale(0.95);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:hover",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:active",
    "https://html5book.ru/css-hover-focus-active/",
  ],
};
export const css_pseudo_task_7 = {
  id: "css_pseudo_task_7",
  module: "CSS",
  title: "Карточка товара с эффектами наведения и нажатия",
  topic: "Состояния элементов",
  topicId: "css_pseudo",
  sectionId: "css_pseudo3",
  description:
    "Создайте HTML-документ с карточкой товара. Реализуйте эффекты наведения (hover), нажатия (active) и фокуса на ссылку внутри карточки.",
  steps: [
    "Создайте HTML-документ с блоком `<div>`, представляющим карточку товара.",
    "Внутри карточки добавьте заголовок, описание и ссылку на товар.",
    "Примените стили к карточке: рамку, тень и отступы.",
    "Реализуйте эффект наведения (`hover`) — увеличение карточки.",
    "Добавьте эффект нажатия (`active`) — затемнение карточки.",
    "Примените стиль фокуса (`focus`) для ссылки — цвет должен изменяться при нажатии.",
    "Проверьте, что все эффекты отображаются корректно.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Карточка товара с эффектами наведения и нажатия</title>
</head>
<body>

  <div class="card">
    <h3>Беспроводные наушники</h3>
    <p>Отличное качество звука, удобство использования и стильный дизайн.</p>
    <a href="#">Подробнее о товаре</a>
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
  <title>Карточка товара с эффектами наведения и нажатия</title>
  <style>
    .card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 15px;
      background-color: #ffffff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, background-color 0.2s;
    }

    .card:hover {
      transform: scale(1.05);
    }

    .card:active {
      background-color: #f0f0f0;
    }

    .card h3 {
      margin: 0 0 10px 0;
      font-size: 18px;
    }

    .card a {
      color: #3498db;
      text-decoration: none;
    }

    .card a:focus {
      color: #2c3e50;
      outline: none;
    }
  </style>
</head>
<body>

  <div class="card">
    <h3>Беспроводные наушники</h3>
    <p>Отличное качество звука, удобство использования и стильный дизайн.</p>
    <a href="#">Подробнее о товаре</a>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  /* Основной стиль карточки */
    .card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 15px;
      background-color: #ffffff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, background-color 0.2s;
    }

    /* Эффект наведения: увеличение */
    .card:hover {
      transform: scale(1.05);
    }

    /* Эффект нажатия: затемнение */
    .card:active {
      background-color: #f0f0f0;
    }

    /* Стили заголовка */
    .card h3 {
      margin: 0 0 10px 0;
      font-size: 18px;
    }

    /* Стили ссылки */
    .card a {
      color: #3498db;
      text-decoration: none;
    }

    /* Эффект фокуса на ссылке */
    .card a:focus {
      color: #2c3e50;
      outline: none;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:hover",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:focus",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:active",
  ],
};
