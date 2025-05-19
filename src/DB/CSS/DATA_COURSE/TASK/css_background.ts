export const css_background_task_1 = {
  id: "css_background_task_1",
  module: "CSS",
  title: "Цвет фона для блока",
  topic: "Фоновые изображения и background",
  topicId: "css_background",
  description:
    "Добавьте фон выбранного цвета для отдельного блока с текстом с помощью свойства background-color.",
  steps: [
    "Создайте div с классом .colored-block.",
    "Добавьте текст внутри блока.",
    "Назначьте фоновый цвет, например #e3f4fc.",
    "Добавьте скругление углов и внутренний отступ.",
    "Проверьте, что фон применяется только к этому блоку.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фон блока</title>
  <style>
    .colored-block {
      background-color: #e3f4fc;
      border-radius: 10px;
      padding: 24px;
      font-size: 18px;
      width: 300px;
      margin: 40px auto;
      box-shadow: 0 2px 10px #0064a311;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="colored-block">
    Блок с фоновым цветом #e3f4fc.
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фон блока</title>
  <style>
    .colored-block {
      background-color: #e3f4fc;
      border-radius: 10px;
      padding: 24px;
      font-size: 18px;
      width: 300px;
      margin: 40px auto;
      box-shadow: 0 2px 10px #0064a311;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="colored-block">
    Блок с фоновым цветом #e3f4fc.
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
  .colored-block {
      background-color: #e3f4fc;
      border-radius: 10px;
      padding: 24px;
      font-size: 18px;
      width: 300px;
      margin: 40px auto;
      box-shadow: 0 2px 10px #0064a311;
      text-align: center;
    }
  `.trim(),
  resources: ["https://developer.mozilla.org/ru/docs/Web/CSS/background-color"],
};
export const css_background_task_2 = {
  id: "css_background_task_2",
  module: "CSS",
  title: "Фоновое изображение для блока",
  topic: "Фоновые изображения и background",
  topicId: "css_background",
  description:
    "Добавьте фоновое изображение для блока, чтобы оно полностью заполняло его размер, не повторялось и сохраняло пропорции.",
  steps: [
    "Создайте div с классом .bg-image-block.",
    "Используйте background-image для установки изображения (можно использовать https://images.unsplash.com/photo-1506744038136-46273834b3fb).",
    "Назначьте background-size: cover и background-repeat: no-repeat.",
    "Добавьте фиксированную высоту блоку (например, 220px) и закругление углов.",
    "Проверьте, что изображение растягивается на весь блок и не повторяется.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фоновое изображение блока</title>
  <style>
    .bg-image-block {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 14px;
      height: 220px;
      width: 370px;
      margin: 40px auto;
      box-shadow: 0 2px 10px #0003;
      display: flex;
      align-items: flex-end;
      color: #fff;
      padding: 18px 24px;
      font-size: 19px;
      font-weight: bold;
      text-shadow: 0 1px 6px #000a;
    }
  </style>
</head>
<body>
  <div class="bg-image-block">
    Блок с фоновым изображением
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фоновое изображение блока</title>
  <style>
      .bg-image-block {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 14px;
      height: 220px;
      width: 370px;
      margin: 40px auto;
      box-shadow: 0 2px 10px #0003;
      display: flex;
      align-items: flex-end;
      color: #fff;
      padding: 18px 24px;
      font-size: 19px;
      font-weight: bold;
      text-shadow: 0 1px 6px #000a;
    }
  </style>
</head>
<body>
  <div class="bg-image-block">
    Блок с фоновым изображением
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.bg-image-block {
    .bg-image-block {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 14px;
      height: 220px;
      width: 370px;
      margin: 40px auto;
      box-shadow: 0 2px 10px #0003;
      display: flex;
      align-items: flex-end;
      color: #fff;
      padding: 18px 24px;
      font-size: 19px;
      font-weight: bold;
      text-shadow: 0 1px 6px #000a;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-size",
  ],
};
export const css_background_task_3 = {
  id: "css_background_task_3",
  module: "CSS",
  title: "Градиентный фон для всей страницы",
  topic: "Фоновые изображения и background",
  topicId: "css_background",
  description:
    "Добавьте плавный градиентный фон для всей страницы с помощью background и градиентных функций.",
  steps: [
    "Примените градиент к тегу body с помощью background: linear-gradient.",
    "Выберите два или три цвета для плавного перехода.",
    "Убедитесь, что градиент занимает всю область страницы (height: 100vh).",
    "Добавьте текст на страницу и проверьте, что он хорошо читается.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Градиентный фон</title>
  <style>
    body {
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 50%, #5f2c82 100%);
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #222;
    }
    .gradient-content {
      background: rgba(255,255,255,0.82);
      padding: 38px 38px;
      border-radius: 16px;
      font-size: 22px;
      box-shadow: 0 2px 14px #223b500c;
      max-width: 380px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="gradient-content">
    Градиентный фон, который плавно занимает всю страницу.<br>
    Текст остаётся читаемым благодаря светлой подложке.
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Градиентный фон</title>
  <style>
    body {
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 50%, #5f2c82 100%);
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #222;
    }
    .gradient-content {
      background: rgba(255,255,255,0.82);
      padding: 38px 38px;
      border-radius: 16px;
      font-size: 22px;
      box-shadow: 0 2px 14px #223b500c;
      max-width: 380px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="gradient-content">
    Градиентный фон, который плавно занимает всю страницу.<br>
    Текст остаётся читаемым благодаря светлой подложке.
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
   body {
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 50%, #5f2c82 100%);
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #222;
    }
    .gradient-content {
      background: rgba(255,255,255,0.82);
      padding: 38px 38px;
      border-radius: 16px;
      font-size: 22px;
      box-shadow: 0 2px 14px #223b500c;
      max-width: 380px;
      text-align: center;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/gradient",
    "https://developer.mozilla.org/ru/docs/Web/CSS/linear-gradient",
  ],
};
export const css_background_task_4 = {
  id: "css_background_task_4",
  module: "CSS",
  title: "Сложный фон: изображение, градиент и overlay",
  topic: "Фоновые изображения и background",
  topicId: "css_background",
  description:
    "Создайте сложный многослойный фон: фоновое изображение, поверх него полупрозрачный цветной слой (overlay) и линейный градиент для эффекта затемнения.",
  steps: [
    "Создайте div с классом .complex-bg.",
    "Используйте background-image для задания сразу нескольких слоёв: градиент, overlay и изображение (через запятую).",
    "Первым слоем задайте линейный градиент (например, от прозрачного к полупрозрачному чёрному).",
    "Вторым слоем — цвет overlay с прозрачностью (например, rgba(32,76,160,0.4)).",
    "Последним слоем — изображение через url.",
    "Назначьте background-size: cover и background-blend-mode: overlay.",
    "Добавьте высоту, закругление, и убедитесь, что текст читается на фоне.",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сложный фон с градиентом и overlay</title>
  <style>
    .complex-bg {
      background-image: 
        linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7)),
        linear-gradient(to right, rgba(32,76,160,0.33), rgba(99,200,255,0.15)),
        url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-blend-mode: overlay;
      background-position: center;
      height: 280px;
      width: 430px;
      border-radius: 22px;
      margin: 50px auto;
      color: #fff;
      font-size: 23px;
      display: flex;
      align-items: flex-end;
      padding: 36px 34px;
      box-shadow: 0 6px 32px #00339944;
      text-shadow: 0 2px 8px #000a;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
  </style>
</head>
<body>
  <div class="complex-bg">
    Многослойный фон: градиент, overlay и изображение.<br>
    Текст всегда хорошо виден на фоне.
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сложный фон</title>
  <style>
     .complex-bg {
      background-image: 
        linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7)),
        linear-gradient(to right, rgba(32,76,160,0.33), rgba(99,200,255,0.15)),
        url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-blend-mode: overlay;
      background-position: center;
      height: 280px;
      width: 430px;
      border-radius: 22px;
      margin: 50px auto;
      color: #fff;
      font-size: 23px;
      display: flex;
      align-items: flex-end;
      padding: 36px 34px;
      box-shadow: 0 6px 32px #00339944;
      text-shadow: 0 2px 8px #000a;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
  </style>
</head>
<body>
  <div class="complex-bg">
    Многослойный фон: градиент, overlay и изображение.<br>
    Текст всегда хорошо виден на фоне.
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
   .complex-bg {
      background-image: 
        linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7)),
        linear-gradient(to right, rgba(32,76,160,0.33), rgba(99,200,255,0.15)),
        url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-blend-mode: overlay;
      background-position: center;
      height: 280px;
      width: 430px;
      border-radius: 22px;
      margin: 50px auto;
      color: #fff;
      font-size: 23px;
      display: flex;
      align-items: flex-end;
      padding: 36px 34px;
      box-shadow: 0 6px 32px #00339944;
      text-shadow: 0 2px 8px #000a;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background",
    "https://css-tricks.com/stacking-order-of-multiple-backgrounds/",
  ],
};
