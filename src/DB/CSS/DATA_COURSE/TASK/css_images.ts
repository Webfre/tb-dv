// Фоновые изображения и background
export const css_images_task_1 = {
  id: "css_images_task_1",
  module: "CSS",
  title: "Фоновое изображение с базовыми стилями",
  topic: "Фоновые изображения и background",
  topicId: "css_images",
  sectionId: "css_images_1",
  description:
    "Создайте секцию с фоновым изображением, которое занимает всю ширину и высоту секции. Изображение должно быть центрировано и не повторяться.",
  steps: [
    "Создайте HTML-структуру с секцией `<section>` и добавьте в неё заголовок.",
    "Задайте этой секции фоновое изображение через `background-image`.",
    "Используйте свойства `background-size: cover`, `background-position: center` и `background-repeat: no-repeat`.",
    "Задайте секции минимальную высоту в 300px.",
    "Стилизуйте заголовок, чтобы он был читаемым на фоне изображения.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Фоновое изображение с базовыми стилями</title>
</head>
<body>

  <section class="banner">
    Красивое фоновое изображение
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фоновое изображение с базовыми стилями</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .banner {
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
  </style>
</head>
<body>

  <section class="banner">
    Красивое фоновое изображение
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* Фоновое изображение */
    .banner {
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://html5book.ru/css-background/",
    "https://css-tricks.com/almanac/properties/b/background/",
  ],
};
export const css_images_task_2 = {
  id: "css_images_task_2",
  module: "CSS",
  title: "Фоновое изображение с затемнением и градиентом",
  topic: "Фоновые изображения и background",
  topicId: "css_images",
  sectionId: "css_images_1",
  description:
    "Создайте секцию с фоновым изображением, наложением полупрозрачного градиента и текстом по центру.",
  steps: [
    "Создайте HTML-структуру с секцией `<section>` и добавьте в неё заголовок и описание.",
    "Задайте секции фоновое изображение с помощью `background-image`.",
    "Добавьте затемнение с использованием `linear-gradient` перед изображением.",
    "Используйте `background-blend-mode: overlay` для наложения слоёв.",
    "Центрируйте текст внутри секции.",
    "Сделайте текст читабельным на фоне (цвет, размер шрифта).",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Фоновое изображение с затемнением и градиентом</title>
</head>
<body>

  <section class="banner">
    <div>
      <h1>Невероятные приключения ждут вас!</h1>
      <p>Присоединяйтесь к нам в захватывающем путешествии прямо сейчас.</p>
    </div>
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фоновое изображение с затемнением и градиентом</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .banner {
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 20px;
    }

    .banner h1 {
      margin-bottom: 10px;
      font-size: 36px;
    }

    .banner p {
      font-size: 18px;
    }
  </style>
</head>
<body>

  <section class="banner">
    <div>
      <h1>Невероятные приключения ждут вас!</h1>
      <p>Присоединяйтесь к нам в захватывающем путешествии прямо сейчас.</p>
    </div>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* Фон с градиентом и затемнением */
    .banner {
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 20px;
    }

    .banner h1 {
      margin-bottom: 10px;
      font-size: 36px;
    }

    .banner p {
      font-size: 18px;
    }
  `.trim(),
};
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
    <link rel="stylesheet" href="styles.css">
  <title>Фон блока</title>
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
    "Используйте background-image для установки изображения (можно использовать https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg).",
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
    <link rel="stylesheet" href="styles.css">
  <title>Градиентный фон</title>
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
    <link rel="stylesheet" href="styles.css">
  <title>Сложный фон с градиентом и overlay</title>
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
// <img> и background-image: в чём разница
export const css_images_task_3 = {
  id: "css_images_task_3",
  module: "CSS",
  title: "Разница между <img> и background-image",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_images",
  sectionId: "css_images_2",
  description:
    "Создайте два блока: в одном реализуйте изображение через `<img>`, в другом — через `background-image`. Управляйте их размерами и позиционированием.",
  steps: [
    "Создайте два контейнера с изображениями: один с использованием тега `<img>`, второй — с использованием `background-image`.",
    "Задайте изображению через `<img>` размеры с помощью `width` и `height`.",
    "Для изображения в `background-image` примените `background-size`, `background-position` и `background-repeat`.",
    "Продемонстрируйте разницу в поведении изображений при изменении размеров контейнера.",
    "Стилизуйте блоки для наглядности.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Разница между <img> и background-image</title>
</head>
<body>

  <div class="container">
    <div class="image-container">
      <h2>Изображение с тегом &lt;img&gt;</h2>
      <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Пример изображения">
    </div>
    <div class="background-container">
      Изображение через background-image
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
  <title>Разница между <img> и background-image</title>
    <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: flex;
      gap: 20px;
      margin: 20px;
    }

    /* Блок с <img> */
    .image-container {
      flex: 1;
      background-color: #e0e0e0;
      padding: 10px;
      text-align: center;
      border: 1px solid #ccc;
    }

    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    /* Блок с background-image */
    .background-container {
      flex: 1;
      height: 300px;
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="image-container">
      <h2>Изображение с тегом &lt;img&gt;</h2>
      <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Пример изображения">
    </div>
    <div class="background-container">
      Изображение через background-image
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
      display: flex;
      gap: 20px;
      margin: 20px;
    }

    /* Блок с <img> */
    .image-container {
      flex: 1;
      background-color: #e0e0e0;
      padding: 10px;
      text-align: center;
      border: 1px solid #ccc;
    }

    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    /* Блок с background-image */
    .background-container {
      flex: 1;
      height: 300px;
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border: 1px solid #ccc;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://html5book.ru/css-background/",
  ],
};
export const css_img_vs_bg_task_1 = {
  id: "css_img_vs_bg_task_1",
  module: "CSS",
  title: "Вставка картинки через тег <img>",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_img_vs_bg",
  description:
    "Вставьте картинку на страницу с помощью тега <img> и добавьте под ней подпись. Используйте реальную ссылку на изображение.",
  steps: [
    "Вставьте картинку с помощью <img src=...> внутри div.",
    "Добавьте подпись под изображением с помощью <figcaption> или отдельного блока.",
    "Установите фиксированную ширину для картинки (например, 300px).",
    "Проверьте, что изображение корректно отображается и можно применить к нему стили (рамку, скругление).",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Изображение</title>
</head>
<body>
  <div class="img-container">
    <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Природа">
    <div class="caption">Картинка вставлена через тег &lt;img&gt;</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Изображение через &lt;img&gt;</title>
  <style>
      .img-container {
      width: 320px;
      margin: 40px auto;
      text-align: center;
    }
    .img-container img {
      width: 300px;
      border-radius: 14px;
      border: 3px solid #a1c8ff;
      box-shadow: 0 2px 10px #1a55c122;
      display: block;
      margin: 0 auto 10px;
    }
    .caption {
      color: #346;
      font-size: 16px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="img-container">
    <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Природа">
    <div class="caption">Картинка вставлена через тег &lt;img&gt;</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
      .img-container {
      width: 320px;
      margin: 40px auto;
      text-align: center;
    }
    .img-container img {
      width: 300px;
      border-radius: 14px;
      border: 3px solid #a1c8ff;
      box-shadow: 0 2px 10px #1a55c122;
      display: block;
      margin: 0 auto 10px;
    }
    .caption {
      color: #346;
      font-size: 16px;
      font-style: italic;
    }
  `.trim(),
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/img"],
};
export const css_img_vs_bg_task_2 = {
  id: "css_img_vs_bg_task_2",
  module: "CSS",
  title: "Вставка картинки через background-image",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_img_vs_bg",
  description:
    "Используйте то же изображение, что и в прошлой задаче, но в качестве фонового для блока. Добавьте заголовок поверх картинки. Попробуйте растянуть или обрезать изображение под размеры блока.",
  steps: [
    "Создайте div с классом .bg-img-box.",
    "Установите background-image и задайте размеры (width, height).",
    "Используйте background-size: cover, background-position: center.",
    "Добавьте текстовый заголовок внутри блока, убедитесь, что он виден поверх картинки.",
    "Добавьте overlay (полупрозрачный фон) для лучшей читаемости текста.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Фоновое изображение через CSS</title>
</head>
<body>
  <div class="bg-img-box">
    <div class="overlay"></div>
    <div class="title">Картинка через background-image</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фоновое изображение через CSS</title>
  <style>
.bg-img-box {
  position: relative;
  width: 320px;
  height: 180px;
  background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(23, 56, 128, 0.33);
  z-index: 1;
}
.bg-img-box .title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 18px 22px;
  text-shadow: 0 2px 10px #000c;
  width: 100%;
}
  </style>
</head>
<body>
  <div class="bg-img-box">
    <div class="overlay"></div>
    <div class="title">Картинка через background-image</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.bg-img-box {
  position: relative;
  width: 320px;
  height: 180px;
  background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(23, 56, 128, 0.33);
  z-index: 1;
}
.bg-img-box .title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 18px 22px;
  text-shadow: 0 2px 10px #000c;
  width: 100%;
}
  `.trim(),
  resources: ["https://developer.mozilla.org/ru/docs/Web/CSS/background-image"],
};
export const css_img_vs_bg_task_3 = {
  id: "css_img_vs_bg_task_3",
  module: "CSS",
  title: "Сравнение адаптивности: <img> vs background-image",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_img_vs_bg",
  description:
    "Сравните, как изображение через <img> и через background-image ведёт себя при изменении размеров контейнера. Покажите плюсы и минусы каждого способа с точки зрения адаптивности.",
  steps: [
    "Создайте два блока: в первом используйте <img>, во втором background-image (то же изображение).",
    "Установите для обоих блоков одинаковую ширину 100% (максимум 340px) и фиксированную высоту 170px.",
    "Для <img> используйте object-fit: cover и width/height 100%.",
    "Для блока с background-image используйте background-size: cover и background-position: center.",
    "Поменяйте размер окна и сравните, как оба варианта подстраиваются под размер блока.",
    "Сделайте короткое текстовое описание (например, в отдельном <p>), чем отличаются подходы.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Сравнение <img> и background-image</title>
</head>
<body>
  <div class="wrapper">
    <div class="compare-block">
      <div class="label">&lt;img&gt; с object-fit: cover</div>
      <div class="img-wrap">
        <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Image by img">
      </div>
    </div>
    <div class="compare-block">
      <div class="label">background-image + background-size: cover</div>
      <div class="bgimg-wrap"></div>
    </div>
    <div class="description">
      <b>Сравнение:</b> 
      Тег <b>&lt;img&gt;</b> позволяет легко менять источник, удобно для SEO и accessibility, изображение участвует в потоке. 
      <b>background-image</b> — гибче в плане позиционирования, позволяет накладывать overlay/градиенты, но не участвует в потоке и не даёт доступ к alt. 
      Оба способа с cover делают картинку адаптивной, но их лучше выбирать по задаче: <b>&lt;img&gt;</b> — для контентных изображений, <b>background-image</b> — для декоративных.
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
  <title>Сравнение <img> и background-image</title>
  <style>
    .img-wrap, .bgimg-wrap {
      width: 100%;
      height: 170px;
      border-radius: 15px;
      overflow: hidden;
      background: #eef2f6;
      margin-bottom: 6px;
      position: relative;
    }
    .img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 15px;
    }
    .bgimg-wrap {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 15px;
    }
    .label {
      font-size: 15px;
      color: #416;
      margin-bottom: 3px;
    }
    .description {
      background: #f7faff;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 15px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="compare-block">
      <div class="label">&lt;img&gt; с object-fit: cover</div>
      <div class="img-wrap">
        <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Image by img">
      </div>
    </div>
    <div class="compare-block">
      <div class="label">background-image + background-size: cover</div>
      <div class="bgimg-wrap"></div>
    </div>
    <div class="description">
      <b>Сравнение:</b> 
      Тег <b>&lt;img&gt;</b> позволяет легко менять источник, удобно для SEO и accessibility, изображение участвует в потоке. 
      <b>background-image</b> — гибче в плане позиционирования, позволяет накладывать overlay/градиенты, но не участвует в потоке и не даёт доступ к alt. 
      Оба способа с cover делают картинку адаптивной, но их лучше выбирать по задаче: <b>&lt;img&gt;</b> — для контентных изображений, <b>background-image</b> — для декоративных.
    </div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .img-wrap, .bgimg-wrap {
      width: 100%;
      height: 170px;
      border-radius: 15px;
      overflow: hidden;
      background: #eef2f6;
      margin-bottom: 6px;
      position: relative;
    }
    .img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 15px;
    }
    .bgimg-wrap {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 15px;
    }
    .label {
      font-size: 15px;
      color: #416;
      margin-bottom: 3px;
    }
    .description {
      background: #f7faff;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 15px;
      color: #333;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://css-tricks.com/css-vs-img/",
  ],
};
// Адаптивные изображения: srcset, sizes, picture
export const css_images_task_4 = {
  id: "css_images_task_4",
  module: "CSS",
  title: "Адаптивные изображения с использованием srcset и sizes",
  topic: "Адаптивные изображения: srcset, sizes, picture",
  topicId: "css_images",
  sectionId: "css_images_3",
  description:
    "Создайте изображение, которое будет автоматически подстраиваться под ширину экрана с помощью атрибутов `srcset` и `sizes`.",
  steps: [
    "Добавьте тег `<img>` в HTML.",
    "Используйте атрибут `srcset`, чтобы указать разные размеры изображений.",
    "Добавьте атрибут `sizes`, чтобы браузер знал, какое изображение загружать в зависимости от ширины экрана.",
    "Проверьте, как изображение подстраивается при изменении ширины окна браузера.",
    "Стилизуйте изображение для наглядности.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивные изображения с srcset и sizes</title>
</head>
<body>

  <div class="container">
    <h2>Адаптивное изображение с srcset и sizes</h2>
  <img 
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80" 
  srcset="
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80 400w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80 800w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80 1200w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80 1600w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="Горы и озеро на закате — крупная адаптивная картинка">
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
  <title>Адаптивные изображения с srcset и sizes</title>
</head>
<body>

  <div class="container">
    <h2>Адаптивное изображение с srcset и sizes</h2>
   <img 
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80" 
  srcset="
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80 400w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80 800w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80 1200w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80 1600w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="Горы и озеро на закате — крупная адаптивная картинка">
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
    "https://web.dev/serve-responsive-images/",
    "https://html5book.ru/adaptivnye-izobrazheniya/",
  ],
};

export const css_img_vs_bg_task_4 = {
  id: "css_img_vs_bg_task_4",
  module: "CSS",
  title: "Использование srcset для ретины",
  topic: "Адаптивные изображения: srcset, sizes, picture",
  topicId: "css_img_vs_bg",
  description:
    "Покажи, как с помощью атрибута srcset можно подгрузить картинку повыше разрешением для экранов Retina, но без изменения размера на обычных экранах.",
  steps: [
    "Создай img с атрибутами src и srcset.",
    "В srcset укажи две версии изображения: обычную и 2x.",
    "Задай фиксированную ширину (например, 350px) для img через CSS.",
    "Проверь результат на разных устройствах (или через DevTools).",
    "Добавь короткий подпояснительный текст.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>srcset для retina</title>
</head>
<body>
  <img 
    class="img-retina"
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700"
    srcset="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700 1x, https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400 2x"
    alt="Горы и лес">
  <div class="caption">На Retina дисплеях будет загружено изображение 2x</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>srcset для retina</title>
  <style>
    .img-retina {
      width: 350px;
      border-radius: 12px;
      box-shadow: 0 2px 10px #2356a921;
      border: 2px solid #abd;
      display: block;
      margin: 36px auto 8px;
    }
    .caption {
      text-align: center;
      font-size: 15px;
      color: #337;
    }
  </style>
</head>
<body>
  <img 
    class="img-retina"
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700"
    srcset="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700 1x, https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400 2x"
    alt="Горы и лес">
  <div class="caption">На Retina дисплеях будет загружено изображение 2x</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .img-retina {
      width: 350px;
      border-radius: 12px;
      box-shadow: 0 2px 10px #2356a921;
      border: 2px solid #abd;
      display: block;
      margin: 36px auto 8px;
    }
    .caption {
      text-align: center;
      font-size: 15px;
      color: #337;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset",
    "https://web.dev/learn/images/responsive-images/",
  ],
};
