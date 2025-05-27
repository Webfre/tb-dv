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
