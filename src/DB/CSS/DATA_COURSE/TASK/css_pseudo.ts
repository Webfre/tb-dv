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

    /* Подсветка четных строк */
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    /* Подсветка нечетных строк */
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
  <title>Подсветка полей ввода при фокусе</title>
  <style>
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
  </style>
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
    <button type="submit">Отправить</button>
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
  <title>Стилизация заблокированных полей (disabled)</title>
  <style>
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

    /* Стили для заблокированных полей */
    input:disabled {
      background-color: #f5f5f5;
      border-color: #999;
      color: #666;
      cursor: not-allowed;
    }

    /* Стили для кнопки */
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

    /* Заблокированная кнопка */
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

/* Стили для полей ввода */
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

/* Стили для заблокированных полей */
input:disabled {
  background-color: #f5f5f5;
  border-color: #999;
  color: #666;
  cursor: not-allowed;
}

/* Стили для кнопки */
button {
  padding: 10px 20px;
  border: none;
  background-color: #007acc;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Стили для заблокированной кнопки */
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
  <title>Стилизация чекбоксов и радиокнопок (checked)</title>
  <style>
    /* Стили для контейнера */
    .form-group {
      margin-bottom: 15px;
    }

    /* Стили для чекбоксов и радиокнопок */
    input[type="checkbox"],
    input[type="radio"] {
      margin-right: 10px;
      transform: scale(1.2);
      cursor: pointer;
    }

    /* Стилизация при выборе чекбокса */
    input[type="checkbox"]:checked {
      accent-color: #007acc;
    }

    /* Стилизация при выборе радиокнопки */
    input[type="radio"]:checked {
      accent-color: #28a745;
    }

    /* Стили для лейблов */
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
input[type="checkbox"],
input[type="radio"] {
  margin-right: 10px;
  transform: scale(1.2);
  cursor: pointer;
}

/* Стилизация при выборе чекбокса */
input[type="checkbox"]:checked {
  accent-color: #007acc;
}

/* Стилизация при выборе радиокнопки */
input[type="radio"]:checked {
  accent-color: #28a745;
}

/* Стили для лейблов */
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
  <title>Форма с исключениями (not)</title>
  <style>
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

    /* Поля с ошибкой (пустое значение), кроме ID */
    input:invalid:not(#user-id) {
      border-color: red;
      background-color: #ffe6e6;
    }

    /* Исключенное поле */
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
    <button type="submit">Отправить</button>
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
