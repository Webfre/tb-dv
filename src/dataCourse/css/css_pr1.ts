export const css_pr1 = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ВебСтудия Профи — CSS оформление</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #333;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      background-color: #4caf50;
      color: white;
      padding: 15px 0;
    }

    .header__title {
      font-size: 1.5em;
      margin-bottom: 5px;
    }

    .header__subtitle {
      font-size: 1em;
    }

    .nav__list {
      list-style: none;
      display: flex;
      gap: 15px;
      margin-top: 10px;
    }

    .nav__link {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }

    .nav__link:hover {
      text-decoration: underline;
    }

    .section {
      padding: 40px 0;
    }

    .section__title {
      font-size: 1.8em;
      margin-bottom: 20px;
      border-bottom: 2px solid #ddd;
      padding-bottom: 10px;
    }

    .services__list {
      list-style: disc inside;
      padding-left: 20px;
    }

    .services__item {
      margin-bottom: 10px;
    }

    .portfolio__grid {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .portfolio__item {
      flex: 1 1 45%;
      background: white;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      border-radius: 8px;
    }

    .portfolio__item img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }

    address {
      font-style: normal;
      line-height: 1.8;
    }

    .footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 20px 0;
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="container">
      <h1 class="header__title">ВебСтудия Профи</h1>
      <p class="header__subtitle">Мы делаем сайты с 2010 года</p>
      <nav class="nav">
        <ul class="nav__list">
          <li><a href="#about" class="nav__link">О нас</a></li>
          <li><a href="#services" class="nav__link">Услуги</a></li>
          <li><a href="#portfolio" class="nav__link">Портфолио</a></li>
          <li><a href="#contacts" class="nav__link">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="main">
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section__title">О компании</h2>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Офис студии" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <p class="about__text">
          Мы работаем в сфере веб-разработки более 10 лет и реализовали более 150 проектов.
        </p>
      </div>
    </section>

    <section id="services" class="section services">
      <div class="container">
        <h2 class="section__title">Наши услуги</h2>
        <img src="https://lifehacker.ru/wp-content/uploads/2020/01/1119-white-flower-2_1579261223.jpg" alt="Услуги студии" style="width:100%; border-radius:8px; margin-bottom: 20px;">
        <ul class="services__list">
          <li class="services__item">Разработка сайтов</li>
          <li class="services__item">UI/UX дизайн</li>
          <li class="services__item">Техническая поддержка</li>
        </ul>
      </div>
    </section>

    <section id="portfolio" class="section portfolio">
      <div class="container">
        <h2 class="section__title">Портфолио</h2>
        <div class="portfolio__grid">
          <div class="portfolio__item">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" alt="Проект 1">
            <p>Сайт интернет-магазина</p>
          </div>
          <div class="portfolio__item">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Проект 2">
            <p>Корпоративный портал</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contacts" class="section contacts">
      <div class="container">
        <h2 class="section__title">Контакты</h2>
        <address>
          Москва, ул. Примерная, 123<br>
          Email: info@webprofi.ru<br>
          Телефон: +7 (495) 123-45-67
        </address>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2023 ВебСтудия Профи</p>
    </div>
  </footer>
</body>
</html>
`;
