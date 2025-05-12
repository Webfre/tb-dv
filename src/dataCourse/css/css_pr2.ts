export const css_pr2 = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CSS Практика 2 — Личный кабинет (финальная версия)</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: "Segoe UI", sans-serif;
      margin: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    header {
      background-color: #2c3e50;
      color: white;
      padding: 12px 20px;
      text-align: center;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 999;
      font-size: 14px;
    }
    header h1 {
      margin: 0;
      font-size: 20px;
    }
    header p {
      margin: 4px 0 0;
      font-size: 13px;
    }
    main {
      padding: 100px 20px 40px;
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
      margin-top: 40px;
    }
    .about {
      background: url("https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1300&q=80") center/cover no-repeat;
      color: white;
      padding: 100px 20px;
      text-align: center;
      border-radius: 10px;
      position: relative;
    }
    .about::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 10px;
    }
    .about * {
      position: relative;
      z-index: 1;
    }
    .about h2 {
      font-size: 32px;
      margin-bottom: 20px;
    }
    .about p {
      font-size: 18px;
      max-width: 700px;
      margin: 0 auto 30px;
    }
    .about button {
      padding: 12px 24px;
      font-size: 16px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .card-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
    }
    .card {
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 20px;
      width: calc(33.333% - 20px);
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    }
    .card img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    .card .price {
      font-weight: bold;
      color: #4caf50;
      margin: 8px 0;
    }
    .card .actions {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
    }
    .card button {
      padding: 8px 14px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .card .btn-buy {
      background-color: #4caf50;
      color: white;
    }
    .card .btn-more {
      background-color: #e0e0e0;
      color: #333;
    }
    .badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: crimson;
      color: white;
      font-size: 12px;
      padding: 3px 8px;
      border-radius: 8px;
    }
    .form-block {
      background-color: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
    }
    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      border-color: #4caf50;
      outline: none;
    }
    .form-inline {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .form-inline .form-group {
      flex: 1 1 45%;
    }
    .form-group input[type="checkbox"],
    .form-group input[type="radio"] {
      width: auto;
      margin-right: 8px;
    }
    .form-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }
    .form-actions button {
      background-color: #4caf50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    .form-actions button.secondary {
      background-color: #777;
    }
    .faq-block {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.05);
    }
    .faq-block h2 {
      margin-top: 0;
    }
    .faq-block details {
      margin-bottom: 10px;
    }
    @media (max-width: 768px) {
      .card { width: 100%; }
      .form-inline .form-group { flex: 1 1 100%; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Личный кабинет</h1>
    <p>Управление карточками, профилем и настройками</p>
  </header>

  <main>
    <section class="about">
      <h2>О нас</h2>
      <p>Мы — команда, создающая лучшие продукты для вашего комфорта и удобства. Уже более 10 лет работаем с клиентами по всему миру.</p>
      <button>Узнать больше</button>
    </section>

    <section>
      <h2>Карточки товаров</h2>
      <div class="card-list">
        <div class="card">
          <span class="badge">Скидка</span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLFC2G3DdQOX8ycWHU25HbrxV7byr3mP4iw&s" alt="Товар 1">
          <h3>Смарт-часы X100</h3>
          <p>Пульсометр, уведомления, водозащита — всё для активной жизни.</p>
          <p class="price">8 990 ₽</p>
          <div class="actions">
            <button class="btn-more">Подробнее</button>
            <button class="btn-buy">Купить</button>
          </div>
        </div>
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwdTux6Y3EZ2JpVjt1J0CLQurY0xsdKbJVQ&s" alt="Товар 2">
          <h3>Наушники BassBoost</h3>
          <p>Шумоподавление, 30 часов работы и мощный бас.</p>
          <p class="price">5 490 ₽</p>
          <div class="actions">
            <button class="btn-more">Подробнее</button>
            <button class="btn-buy">Купить</button>
          </div>
        </div>
        <div class="card">
          <img src="https://ir.ozone.ru/s3/multimedia-3/c1000/6370584363.jpg" alt="Товар 3">
          <h3>Фитнес-браслет Lite</h3>
          <p>Подсчёт шагов, мониторинг сна, до 10 дней без подзарядки.</p>
          <p class="price">2 990 ₽</p>
          <div class="actions">
            <button class="btn-more">Подробнее</button>
            <button class="btn-buy">Купить</button>
          </div>
        </div>
      </div>
    </section>

    <section class="form-block">
      <h2>Редактировать профиль</h2>
      <form>
        <div class="form-inline">
          <div class="form-group">
            <label for="name">Имя</label>
            <input type="text" id="name" placeholder="Введите ваше имя">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com">
          </div>
        </div>
        <div class="form-group">
          <label for="bio">О себе</label>
          <textarea id="bio" rows="4" placeholder="Краткая информация..."></textarea>
        </div>
        <div class="form-group">
          <label for="role">Выберите роль</label>
          <select id="role">
            <option>Пользователь</option>
            <option>Админ</option>
            <option disabled>Модератор (недоступно)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Предпочтение связи:</label>
          <label><input type="radio" name="contact" value="email" checked> Email</label>
          <label><input type="radio" name="contact" value="phone"> Телефон</label>
        </div>
        <div class="form-group">
          <label><input type="checkbox" checked> Подписаться на рассылку</label>
        </div>
        <div class="form-actions">
          <button type="button" class="secondary">Отмена</button>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </section>

    <section class="faq-block">
      <h2>Часто задаваемые вопросы</h2>
      <details>
        <summary>Как изменить пароль?</summary>
        <p>Откройте "Настройки" и выберите "Смена пароля".</p>
      </details>
      <details>
        <summary>Как удалить аккаунт?</summary>
        <p>Отправьте запрос через форму поддержки. Мы свяжемся с вами для подтверждения.</p>
      </details>
    </section>
  </main>

  <footer>
    &copy; 2025 Личный кабинет | Все права защищены
  </footer>
</body>
</html>

`;
