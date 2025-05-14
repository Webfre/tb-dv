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
  <title>Псевдоклассы для списков</title>

  <style>
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
export const css_pseudo_task_2 = {
  id: "css_pseudo_task_2",
  module: "CSS",
  title: "Список задач с состояниями",
  topic: "Псевдоклассы",
  topicId: "css_pseudo",
  sectionId: "css_pseudo1",
  description:
    "Создайте список задач и примените псевдоклассы для выделения первой, каждой второй и последней задачи.",
  steps: [
    "Создайте HTML-документ со списком `<ul>` и несколькими элементами списка `<li>`.",
    "Используйте псевдокласс `:first-child` для стилизации первого элемента.",
    "Примените `:nth-child(2n)` для выделения каждой второй задачи жирным шрифтом.",
    "Для последнего элемента списка примените псевдокласс `:last-child` и подчеркните его.",
    "Проверьте, что стили отображаются корректно.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Список задач с состояниями</title>

  <style>
    /* Стили для списка */
    ul {
      list-style-type: none;
      padding: 0;
      width: 300px;
      margin: 20px auto;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    /* Первый элемент списка */
    li:first-child {
      background-color: #d1ecf1;
    }

    /* Каждый второй элемент */
    li:nth-child(2n) {
      font-weight: bold;
    }

    /* Последний элемент списка */
    li:last-child {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <ul>
    <li>Проверить почту</li>
    <li>Завершить проект по CSS</li>
    <li>Созвон с командой</li>
    <li>Подготовить отчёт</li>
    <li>Запланировать задачи на неделю</li>
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
  <title>Список задач с состояниями</title>
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      width: 300px;
      margin: 20px auto;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    li:first-child {
      background-color: #d1ecf1;
    }

    li:nth-child(2n) {
      font-weight: bold;
    }

    li:last-child {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <ul>
    <li>Проверить почту</li>
    <li>Завершить проект по CSS</li>
    <li>Созвон с командой</li>
    <li>Подготовить отчёт</li>
    <li>Запланировать задачи на неделю</li>
  </ul>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Первый элемент списка */
li:first-child {
  background-color: #d1ecf1;
}

/* Каждый второй элемент */
li:nth-child(2n) {
  font-weight: bold;
}

/* Последний элемент списка */
li:last-child {
  text-decoration: underline;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:first-child",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:last-child",
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
    "Используйте псевдокласс `:empty` для изменения стиля пустого поля ввода.",
    "Для чекбокса примените `:checked` — измените цвет текста, если он активирован.",
    "Визуально покажите, что кнопка неактивна, если чекбокс не установлен.",
    "Проверьте, как стили меняются при взаимодействии.",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Форма с валидацией и псевдоклассами</title>

  <style>
    /* Стили для полей ввода */
    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    /* Поле ввода в фокусе */
    input:focus {
      border-color: #3498db;
      outline: none;
    }

    /* Пустое поле ввода */
    input:empty {
      background-color: #f9f9f9;
    }

    /* Стили для чекбокса */
    label {
      display: block;
      margin-bottom: 10px;
    }

    input[type="checkbox"]:checked + label {
      color: green;
      font-weight: bold;
    }

    /* Кнопка, которая визуально выглядит неактивной */
    button {
      padding: 10px 20px;
      background-color: #ccc;
      color: #999;
      border: none;
      border-radius: 4px;
      cursor: not-allowed;
    }

    /* Визуально активная кнопка, если чекбокс установлен */
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

    <button>Отправить</button>
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
  <title>Форма с валидацией и псевдоклассами</title>
  <style>
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

    input:empty {
      background-color: #f9f9f9;
    }

    label {
      display: block;
      margin-bottom: 10px;
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

    <button>Отправить</button>
  </form>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Стили для формы */
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Поле ввода в фокусе */
input:focus {
  border-color: #3498db;
  outline: none;
}

/* Пустое поле ввода */
input:empty {
  background-color: #f9f9f9;
}

/* Чекбокс в активном состоянии */
input[type="checkbox"]:checked + label {
  color: green;
  font-weight: bold;
}

/* Визуально заблокированная кнопка */
button {
  padding: 10px 20px;
  background-color: #ccc;
  color: #999;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
}

/* Визуально активная кнопка при установленном чекбоксе */
input[type="checkbox"]:checked ~ button {
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:focus",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:empty",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:checked",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:disabled",
  ],
};
export const css_pseudo_task_4 = {
  id: "css_pseudo_task_4",
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
  <title>Список с пунктами и значками</title>

  <style>
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
/* Стили для списка */
ul {
  list-style-type: none;
  padding: 0;
}

/* Псевдоэлемент перед пунктом списка */
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
  <title>Карточки товаров с псевдоэлементами</title>

  <style>
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
/* Псевдоэлемент перед заголовком */
h2::before {
  content: "🔥 ";
  color: red;
  margin-right: 5px;
}

/* Псевдоэлемент после описания */
p::after {
  content: "Бесплатная доставка";
  display: block;
  margin-top: 5px;
  color: #27ae60;
  font-weight: bold;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/::before",
    "https://developer.mozilla.org/ru/docs/Web/CSS/::after",
    "https://html5book.ru/css-pseudo-elements/",
  ],
};
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
  <title>Стилизованная кнопка с эффектом наведения</title>

  <style>
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
  </style>
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
  background-color: rgb(240, 12, 12);
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
  <title>Карточка товара с эффектами наведения и нажатия</title>

  <style>
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
