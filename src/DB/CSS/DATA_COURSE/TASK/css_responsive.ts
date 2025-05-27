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
