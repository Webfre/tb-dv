// Media queries — медиазапросы и точки перехода
export const css_responsive_task_1 = {
  id: "css_responsive_task_1",
  module: "CSS",
  title: "Медиазапросы для адаптивного меню",
  topic: "Media queries — медиазапросы и точки перехода",
  topicId: "css_responsive",
  sectionId: "css_responsive_2",
  description:
    "Создайте адаптивное меню навигации, которое меняет свою структуру на разных размерах экрана с помощью медиазапросов.",
  steps: [
    "Создайте HTML-структуру меню с элементами навигации.",
    "Стилизуйте меню в горизонтальный ряд на больших экранах.",
    "Используйте медиазапросы, чтобы на экранах меньше 768px меню стало вертикальным.",
    "Добавьте стили для улучшения читаемости на мобильных устройствах.",
    "Сделайте меню адаптивным и удобным для всех типов экранов.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивное меню с медиазапросами</title>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#">Главная</a></li>
      <li><a href="#">О нас</a></li>
      <li><a href="#">Услуги</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </nav>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Адаптивное меню с медиазапросами</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    nav {
      background-color: #333;
      color: white;
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      flex: 1;
      text-align: center;
      padding: 15px;
      border-right: 1px solid #555;
    }

    li:last-child {
      border-right: none;
    }

    li a {
      color: white;
      text-decoration: none;
      display: block;
    }

    @media (max-width: 768px) {
      ul {
        flex-direction: column;
      }

      li {
        border-bottom: 1px solid #555;
        border-right: none;
      }
    }
  </style>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#">Главная</a></li>
      <li><a href="#">О нас</a></li>
      <li><a href="#">Услуги</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </nav>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    nav {
      background-color: #333;
      color: white;
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      flex: 1;
      text-align: center;
      padding: 15px;
      border-right: 1px solid #555;
    }

    li:last-child {
      border-right: none;
    }

    li a {
      color: white;
      text-decoration: none;
      display: block;
    }

    @media (max-width: 768px) {
      ul {
        flex-direction: column;
      }

      li {
        border-bottom: 1px solid #555;
        border-right: none;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries",
    "https://html5book.ru/css3-mediazaprosy/",
    "https://css-tricks.com/css-media-queries/",
  ],
};
export const css_responsive_task_2 = {
  id: "css_responsive_task_2",
  module: "CSS",
  title: "Адаптивная сетка карточек с медиазапросами",
  topic: "Media queries — медиазапросы и точки перехода",
  topicId: "css_responsive",
  sectionId: "css_responsive_2",
  description:
    "Создайте адаптивную сетку из карточек товаров, которая будет перестраиваться в зависимости от ширины экрана.",
  steps: [
    "Создайте HTML-структуру с контейнером для карточек.",
    "Стилизуйте карточки для отображения в 3 колонки на больших экранах.",
    "Используйте медиазапросы, чтобы на средних экранах было 2 колонки.",
    "На мобильных экранах сделайте карточки в одну колонку.",
    "Добавьте стили для улучшенной читаемости и навигации.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивная сетка карточек</title>
</head>
<body>

  <div class="container">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 1">
      <div class="card-content">
        <h3>Товар 1</h3>
        <p>Описание товара 1</p>
        <p class="price">15€</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 2">
      <div class="card-content">
        <h3>Товар 2</h3>
        <p>Описание товара 2</p>
        <p class="price">25€</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 3">
      <div class="card-content">
        <h3>Товар 3</h3>
        <p>Описание товара 3</p>
        <p class="price">18€</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 4">
      <div class="card-content">
        <h3>Товар 4</h3>
        <p>Описание товара 4</p>
        <p class="price">30€</p>
      </div>
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
  <title>Адаптивная сетка карточек</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 20px;
    }

    .card {
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    .card-content {
      padding: 15px;
    }

    .card-content h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card-content p {
      margin-bottom: 5px;
      color: #555;
    }

    .card-content .price {
      font-weight: bold;
      color: #1976d2;
    }

    @media (max-width: 1024px) {
      .container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 1">
      <div class="card-content">
        <h3>Товар 1</h3>
        <p>Описание товара 1</p>
        <p class="price">15€</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 2">
      <div class="card-content">
        <h3>Товар 2</h3>
        <p>Описание товара 2</p>
        <p class="price">25€</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 3">
      <div class="card-content">
        <h3>Товар 3</h3>
        <p>Описание товара 3</p>
        <p class="price">18€</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Product 4">
      <div class="card-content">
        <h3>Товар 4</h3>
        <p>Описание товара 4</p>
        <p class="price">30€</p>
      </div>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 20px;
    }

    .card {
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    .card-content {
      padding: 15px;
    }

    .card-content h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .card-content p {
      margin-bottom: 5px;
      color: #555;
    }

    .card-content .price {
      font-weight: bold;
      color: #1976d2;
    }

    @media (max-width: 1024px) {
      .container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries",
    "https://css-tricks.com/responsive-grid-layouts-css-grid/",
    "https://html5book.ru/css3-mediazaprosy/",
  ],
};
export const css_media_queries_task_1 = {
  id: "css_media_queries_task_1",
  module: "CSS",
  title: "Медиазапрос для адаптивного меню",
  topic: "Media queries — медиазапросы и точки перехода",
  topicId: "css_media_queries",
  description:
    "Добавь медиазапрос, чтобы при ширине экрана меньше 600px навигация показывалась вертикально, а не горизонтально.",
  steps: [
    "Создай <nav> с 4 пунктами внутри.",
    "Сделай для nav display: flex и горизонтальное расположение (row) по умолчанию.",
    "Добавь медиазапрос @media (max-width: 600px), чтобы direction стал column.",
    "Задай стили для пунктов: паддинги, фон, border-radius.",
    "Проверь работу через DevTools — меню меняет вид при уменьшении ширины.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивное меню с медиазапросом</title>
</head>
<body>
  <nav>
    <a href="#">Главная</a>
    <a href="#">Каталог</a>
    <a href="#">О нас</a>
    <a href="#">Контакты</a>
  </nav>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Адаптивное меню с медиазапросом</title>
  <style>
   nav {
      display: flex;
      gap: 16px;
      background: #2356a9;
      padding: 10px 28px;
      border-radius: 8px;
      max-width: 430px;
      margin: 38px auto;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      background: #3976e5;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 500;
      transition: background 0.2s;
    }
    nav a:hover {
      background: #1e488c;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        gap: 10px;
        padding: 12px 10px;
      }
      nav a {
        font-size: 17px;
      }
    }
  </style>
</head>
<body>
  <nav>
    <a href="#">Главная</a>
    <a href="#">Каталог</a>
    <a href="#">О нас</a>
    <a href="#">Контакты</a>
  </nav>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    nav {
      display: flex;
      gap: 16px;
      background: #2356a9;
      padding: 10px 28px;
      border-radius: 8px;
      max-width: 430px;
      margin: 38px auto;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      background: #3976e5;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 500;
      transition: background 0.2s;
    }
    nav a:hover {
      background: #1e488c;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        gap: 10px;
        padding: 12px 10px;
      }
      nav a {
        font-size: 17px;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/@media",
    "https://css-tricks.com/css-media-queries/",
  ],
};
export const css_media_queries_task_2 = {
  id: "css_media_queries_task_2",
  module: "CSS",
  title: "Изменение количества колонок через медиазапросы",
  topic: "Media queries — медиазапросы и точки перехода",
  topicId: "css_media_queries",
  description:
    "Реализуй сетку из 3 карточек в ряд на десктопе, 2 — на планшете (до 900px), и одну — на мобильном (до 600px).",
  steps: [
    "Создай .cards с display: grid и тремя .card внутри.",
    "Сделай по умолчанию grid-template-columns: repeat(3, 1fr).",
    "Сделай медиазапрос @media (max-width: 900px) — 2 колонки.",
    "Сделай медиазапрос @media (max-width: 600px) — 1 колонка.",
    "Добавь стили карточкам: тень, радиус, отступы.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивная сетка карточек</title>
</head>
<body>
  <div class="cards">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Адаптивная сетка карточек</title>
  <style>
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
      max-width: 900px;
      margin: 42px auto 0;
      padding: 0 16px;
    }
    .card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 8px #1b253a22;
      padding: 28px;
      font-size: 19px;
      font-weight: 500;
      text-align: center;
      min-height: 110px;
    }
    @media (max-width: 900px) {
      .cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .cards {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="cards">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
   .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
      max-width: 900px;
      margin: 42px auto 0;
      padding: 0 16px;
    }
    .card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 8px #1b253a22;
      padding: 28px;
      font-size: 19px;
      font-weight: 500;
      text-align: center;
      min-height: 110px;
    }
    @media (max-width: 900px) {
      .cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .cards {
        grid-template-columns: 1fr;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns",
    "https://css-tricks.com/snippets/css/complete-guide-grid/",
  ],
};
export const css_media_queries_task_3 = {
  id: "css_media_queries_task_3",
  module: "CSS",
  title: "Собственный breakpoint и скрытие блока",
  topic: "Media queries — медиазапросы и точки перехода",
  topicId: "css_media_queries",
  description:
    "Сделай блок-уведомление, который показывается только на экранах шире 850px, а на мобильных и планшетах скрыт.",
  steps: [
    "Создай div с классом .alert и текстом уведомления.",
    "Сделай для .alert background, padding и border-radius.",
    "Добавь медиазапрос @media (max-width: 850px), чтобы display был none.",
    "Проверь поведение при ресайзе окна.",
    "Можно добавить иконку, если хочешь.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Breakpoint и скрытие блока</title>
</head>
<body>
  <div class="alert">Внимание! Это уведомление видно только на больших экранах (&gt;850px).</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Breakpoint и скрытие блока</title>
  <style>
      .alert {
      background: #fbe8ad;
      color: #473800;
      font-size: 18px;
      border-radius: 10px;
      padding: 20px 32px;
      box-shadow: 0 2px 8px #ffdb0077;
      margin: 30px auto;
      max-width: 520px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
    .alert::before {
      content: "⚠️";
      font-size: 23px;
    }
    @media (max-width: 850px) {
      .alert {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="alert">Внимание! Это уведомление видно только на больших экранах (&gt;850px).</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
      .alert {
      background: #fbe8ad;
      color: #473800;
      font-size: 18px;
      border-radius: 10px;
      padding: 20px 32px;
      box-shadow: 0 2px 8px #ffdb0077;
      margin: 30px auto;
      max-width: 520px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
    .alert::before {
      content: "⚠️";
      font-size: 23px;
    }
    @media (max-width: 850px) {
      .alert {
        display: none;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries/Using_media_queries",
    "https://css-tricks.com/how-to-use-css-media-queries/",
  ],
};
// Отзывчивые размеры: %, vw, clamp() — без медиазапросов
export const css_responsive_task_3 = {
  id: "css_responsive_task_3",
  module: "CSS",
  title: "Отзывчивый блок с использованием vw, vh и clamp",
  topic: "Отзывчивые размеры: %, vw, clamp() — без медиазапросов",
  topicId: "css_responsive",
  sectionId: "css_responsive_3",
  description:
    "Создайте отзывчивый блок с использованием относительных единиц vw, vh и clamp() для адаптации к разным экранам без медиазапросов.",
  steps: [
    "Создайте HTML-структуру с основным контейнером.",
    "Используйте относительные единицы vw и vh для адаптации размеров блока.",
    "Примените clamp() для управления размерами шрифта.",
    "Стилизуйте блок, чтобы он выглядел аккуратно на разных экранах.",
    "Проверьте, как блок изменяет размер при изменении ширины окна браузера.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Отзывчивый блок с vw, vh и clamp()</title>
</head>
<body>

  <div class="responsive-card">
    <h2>Отзывчивый блок</h2>
    <p>Размеры адаптируются под экран без медиазапросов</p>
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
  <title>Отзывчивый блок с vw, vh и clamp()</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .responsive-card {
      width: 50vw;
      height: 30vh;
      background-color: #4CAF50;
      color: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .responsive-card h2 {
      font-size: clamp(18px, 2.5vw, 36px);
      margin-bottom: 10px;
    }

    .responsive-card p {
      font-size: clamp(14px, 1.5vw, 24px);
      margin: 0;
    }
  </style>
</head>
<body>

  <div class="responsive-card">
    <h2>Отзывчивый блок</h2>
    <p>Размеры адаптируются под экран без медиазапросов</p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .responsive-card {
      width: 50vw; /* Занимает половину ширины экрана */
      height: 30vh; /* Занимает 30% от высоты экрана */
      background-color: #4CAF50;
      color: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .responsive-card h2 {
      font-size: clamp(18px, 2.5vw, 36px); /* Размер шрифта изменяется от 18px до 36px в зависимости от ширины экрана */
      margin-bottom: 10px;
    }

    .responsive-card p {
      font-size: clamp(14px, 1.5vw, 24px); /* Размер текста тоже адаптивный */
      margin: 0;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/clamp",
    "https://developer.mozilla.org/ru/docs/Web/CSS/length",
    "https://css-tricks.com/a-complete-guide-to-css-units/",
  ],
};
export const css_responsive_task_4 = {
  id: "css_responsive_task_4",
  module: "CSS",
  title: "Адаптивная карточка профиля с отзывчивыми размерами",
  topic: "Отзывчивые размеры: %, vw, clamp() — без медиазапросов",
  topicId: "css_responsive",
  sectionId: "css_responsive_3",
  description:
    "Создайте адаптивную карточку профиля с использованием отзывчивых размеров. Карточка должна масштабироваться в зависимости от ширины экрана без использования медиазапросов.",
  steps: [
    "Создайте HTML-структуру с карточкой профиля.",
    "Используйте относительные единицы vw и vh для адаптации размеров блока.",
    "Примените clamp() для управления размерами шрифта и отступов.",
    "Добавьте заголовок, описание и кнопку в карточку.",
    "Стилизуйте карточку, чтобы она выглядела аккуратно на всех экранах.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивная карточка профиля</title>
</head>
<body>

  <div class="profile-card">
    <div class="profile-header">Александр Иванов</div>
    <div class="profile-content">
      <p>Frontend Developer с опытом в создании адаптивных интерфейсов и современных веб-приложений.</p>
      <button class="profile-button">Связаться</button>
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
  <title>Адаптивная карточка профиля</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .profile-card {
      width: clamp(300px, 40vw, 500px);
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .profile-header {
      background-color: #4CAF50;
      width: 100%;
      padding: clamp(20px, 5vw, 40px);
      color: white;
      font-size: clamp(20px, 2.5vw, 32px);
    }

    .profile-content {
      padding: clamp(15px, 3vw, 25px);
    }

    .profile-content p {
      font-size: clamp(14px, 1.8vw, 20px);
      margin-bottom: 20px;
    }

    .profile-button {
      background-color: #4CAF50;
      color: white;
      padding: clamp(10px, 2vw, 15px) clamp(15px, 3vw, 20px);
      border: none;
      border-radius: 5px;
      font-size: clamp(14px, 1.5vw, 18px);
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .profile-button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <div class="profile-card">
    <div class="profile-header">Александр Иванов</div>
    <div class="profile-content">
      <p>Frontend Developer с опытом в создании адаптивных интерфейсов и современных веб-приложений.</p>
      <button class="profile-button">Связаться</button>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .profile-card {
      width: clamp(300px, 40vw, 500px);
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .profile-header {
      background-color: #4CAF50;
      width: 100%;
      padding: clamp(20px, 5vw, 40px);
      color: white;
      font-size: clamp(20px, 2.5vw, 32px);
    }

    .profile-content {
      padding: clamp(15px, 3vw, 25px);
    }

    .profile-content p {
      font-size: clamp(14px, 1.8vw, 20px);
      margin-bottom: 20px;
    }

    .profile-button {
      background-color: #4CAF50;
      color: white;
      padding: clamp(10px, 2vw, 15px) clamp(15px, 3vw, 20px);
      border: none;
      border-radius: 5px;
      font-size: clamp(14px, 1.5vw, 18px);
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .profile-button:hover {
      background-color: #45a049;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/clamp",
    "https://developer.mozilla.org/ru/docs/Web/CSS/length",
    "https://css-tricks.com/a-complete-guide-to-css-units/",
  ],
};

export const css_media_queries_task_4 = {
  id: "css_media_queries_task_4",
  module: "CSS",
  title: "Ширина блока в процентах",
  topic: "Отзывчивые размеры: %, vw, clamp() — без медиазапросов",
  topicId: "css_media_queries",
  description:
    "Сделай, чтобы карточка всегда занимала 80% ширины окна, центрируй её по горизонтали. При изменении ширины окна карточка автоматически меняет размер.",
  steps: [
    'Создай <div class="responsive-card"> с произвольным текстом.',
    "Пропиши для .responsive-card ширину 80% и max-width 500px.",
    "Центрируй карточку с помощью margin: 0 auto.",
    "Добавь паддинг и фон, сделай border-radius.",
    "Проверь, как карточка адаптируется при разных размерах окна.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Отзывчивая карточка</title>
</head>
<body>
  <div class="responsive-card">
    Эта карточка всегда занимает 80% ширины окна, но не больше 500px.<br>Потяни за угол браузера!
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Отзывчивая карточка</title>
  <style>
   body {
      background: #f6f6f8;
      font-family: Arial, sans-serif;
    }
    .responsive-card {
      width: 80%;
      max-width: 500px;
      margin: 60px auto;
      background: #438bce;
      color: #fff;
      border-radius: 14px;
      padding: 36px 24px;
      font-size: 20px;
      box-shadow: 0 2px 10px #16446a20;
      text-align: center;
      transition: width 0.2s;
    }
  </style>
</head>
<body>
  <div class="responsive-card">
    Эта карточка всегда занимает 80% ширины окна, но не больше 500px.<br>Потяни за угол браузера!
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      background: #f6f6f8;
      font-family: Arial, sans-serif;
    }
    .responsive-card {
      width: 80%;
      max-width: 500px;
      margin: 60px auto;
      background: #438bce;
      color: #fff;
      border-radius: 14px;
      padding: 36px 24px;
      font-size: 20px;
      box-shadow: 0 2px 10px #16446a20;
      text-align: center;
      transition: width 0.2s;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
  ],
};
export const css_media_queries_task_5 = {
  id: "css_media_queries_task_5",
  module: "CSS",
  title: "Динамический размер текста через vw",
  topic: "Отзывчивые размеры: %, vw, clamp() — без медиазапросов",
  topicId: "css_media_queries",
  description:
    "Используй единицы vw, чтобы размер заголовка плавно менялся от 20px до 60px в зависимости от ширины окна. Не используй медиазапросы.",
  steps: [
    'Создай <h1 class="fluid-title"> с любым текстом.',
    "Задай font-size: 8vw, чтобы размер зависел от ширины окна.",
    "Ограничь минимальный и максимальный размер с помощью clamp(): clamp(20px, 8vw, 60px).",
    "Добавь центрирование, цвет и margin.",
    "Проверь, как заголовок адаптируется при разных размерах окна.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Отзывчивый заголовок</title>
</head>
<body>
  <h1 class="fluid-title">Отзывчивый заголовок без медиазапросов</h1>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Отзывчивый заголовок</title>
  <style>
    .fluid-title {
      font-size: clamp(20px, 8vw, 60px);
      color: #236b95;
      text-align: center;
      margin: 70px auto 32px;
      font-weight: 700;
      letter-spacing: 1px;
      transition: font-size 0.2s;
    }
  </style>
</head>
<body>
  <h1 class="fluid-title">Отзывчивый заголовок без медиазапросов</h1>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.fluid-title {
  font-size: clamp(20px, 8vw, 60px);
  color: #236b95;
  text-align: center;
  margin: 70px auto 32px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: font-size 0.2s;
}
  `.trim(),
  resources: [
    "https://css-tricks.com/viewport-sized-typography/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/clamp",
  ],
};
export const css_media_queries_task_6 = {
  id: "css_media_queries_task_6",
  module: "CSS",
  title: "Clamp для отступов и текста без медиазапросов",
  topic: "Отзывчивые размеры: %, vw, clamp() — без медиазапросов",
  topicId: "css_media_queries",
  description:
    "Сделай адаптивный баннер, где padding и размер текста подстраиваются с помощью clamp(). Не используй медиазапросы.",
  steps: [
    'Создай <div class="adaptive-banner"> с любым коротким текстом.',
    "Используй clamp для padding: padding: clamp(12px, 5vw, 42px).",
    "Используй clamp для font-size: font-size: clamp(18px, 4vw, 34px).",
    "Добавь цветной фон, border-radius и центрирование текста.",
    "Проверь отзывчивость при разных размерах окна.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Адаптивный баннер с clamp()</title>
</head>
<body>
  <div class="adaptive-banner">
    Этот баннер полностью отзывчивый: и текст, и отступы масштабируются через clamp()!
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Адаптивный баннер с clamp()</title>
  <style>
    body {
      background: #f6faff;
      font-family: Arial, sans-serif;
    }
    .adaptive-banner {
      background: linear-gradient(90deg, #33bb8e 30%, #1987c6 100%);
      color: #fff;
      border-radius: 18px;
      text-align: center;
      margin: 60px auto 0;
      padding: clamp(12px, 5vw, 42px);
      font-size: clamp(18px, 4vw, 34px);
      font-weight: 600;
      max-width: 640px;
      box-shadow: 0 4px 18px #1784c635;
      transition: padding 0.2s, font-size 0.2s;
    }
  </style>
</head>
<body>
  <div class="adaptive-banner">
    Этот баннер полностью отзывчивый: и текст, и отступы масштабируются через clamp()!
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      background: #f6faff;
      font-family: Arial, sans-serif;
    }
    .adaptive-banner {
      background: linear-gradient(90deg, #33bb8e 30%, #1987c6 100%);
      color: #fff;
      border-radius: 18px;
      text-align: center;
      margin: 60px auto 0;
      padding: clamp(12px, 5vw, 42px);
      font-size: clamp(18px, 4vw, 34px);
      font-weight: 600;
      max-width: 640px;
      box-shadow: 0 4px 18px #1784c635;
      transition: padding 0.2s, font-size 0.2s;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/clamp",
    "https://css-tricks.com/using-calc-to-create-responsive-designs/",
  ],
};
