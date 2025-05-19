export const css_layout_task_1 = {
  id: "css_layout_task_1",
  module: "CSS",
  title: "Центрированный контейнер с ограниченной шириной",
  topic: "Контейнеры, центрирование и ограничение ширины",
  topicId: "css_layout",
  sectionId: "css_layout_1",
  description:
    "Создайте контейнер с ограниченной шириной, центрированный по горизонтали. Добавьте внутренние отступы и фон. Внутри контейнера разместите текст.",
  steps: [
    "Создайте контейнер `<div class='container'>`.",
    "Задайте ширину контейнера в 800px и центрирование с помощью `margin: 0 auto`.",
    "Добавьте внутренние отступы `padding: 20px`.",
    "Установите фон контейнера.",
    "Поместите текст внутрь контейнера.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Центрированный контейнер</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Центрированный контейнер</h2>
    <p>Это пример простого контейнера, центрированного по горизонтали. Контейнер имеет ограниченную ширину, внутренние отступы и фон.</p>
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
  <title>Центрированный контейнер</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Центрированный контейнер</h2>
    <p>Это пример простого контейнера, центрированного по горизонтали. Контейнер имеет ограниченную ширину, внутренние отступы и фон.</p>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f8f9fa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://css-tricks.com/the-css-box-model/",
    "https://html5book.ru/css-margin-auto/",
  ],
};
export const css_layout_task_2 = {
  id: "css_layout_task_2",
  module: "CSS",
  title: "Центрированный контейнер с максимальной шириной",
  topic: "Контейнеры, центрирование и ограничение ширины",
  topicId: "css_layout",
  sectionId: "css_layout_1",
  description:
    "Создайте контейнер, который центрируется по горизонтали и имеет ограничение по ширине. Также добавьте максимальную ширину и стилизацию фона.",
  steps: [
    "Создайте контейнер `<div class='container'>`.",
    "Задайте ширину контейнера 90% и центрирование с помощью `margin: 0 auto`.",
    "Добавьте ограничение по максимальной ширине `max-width: 1200px`.",
    "Настройте фон, внутренние отступы и стилизацию.",
    "Внутри контейнера разместите заголовок и абзац с текстом.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Контейнер с максимальной шириной</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background-color: #f8f9fa;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-bottom: 15px;
      color: #333;
    }

    p {
      color: #555;
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Центрированный контейнер с максимальной шириной</h2>
    <p>
      Этот контейнер занимает 90% от ширины экрана, но не превышает 1200 пикселей. 
      Он центрируется горизонтально и имеет внутренние отступы, стилизацию фона и тени.
      Такой подход часто используется для централизации основного контента в веб-приложениях.
    </p>
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
  <title>Контейнер с максимальной шириной</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background-color: #f8f9fa;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-bottom: 15px;
      color: #333;
    }

    p {
      color: #555;
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Центрированный контейнер с максимальной шириной</h2>
    <p>
      Этот контейнер занимает 90% от ширины экрана, но не превышает 1200 пикселей. 
      Он центрируется горизонтально и имеет внутренние отступы, стилизацию фона и тени.
      Такой подход часто используется для централизации основного контента в веб-приложениях.
    </p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f8f9fa;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 15px;
  color: #333;
}

p {
  color: #555;
  line-height: 1.6;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://css-tricks.com/the-css-box-model/",
    "https://html5book.ru/css-margin-auto/",
  ],
};
export const css_layout_task_3 = {
  id: "css_layout_task_3",
  module: "CSS",
  title: "Закреплённый header (sticky) и footer (fixed)",
  topic: "Закреплённый header и footer (sticky, fixed)",
  topicId: "css_layout",
  sectionId: "css_layout_2",
  description:
    "Создайте HTML-страницу с закреплённым header (прилипает при скролле) и фиксированным footer (всегда виден внизу страницы).",
  steps: [
    "Создайте HTML-документ с `<header>`, `<main>` и `<footer>`.",
    "Примените `position: sticky` к `<header>` и установите его сверху страницы.",
    "Примените `position: fixed` к `<footer>` и установите его снизу страницы.",
    "Добавьте стилизацию фона, текста и внутренние отступы.",
    "Заполните `<main>` большим количеством текста, чтобы была возможность скроллить.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Закреплённый Header и Footer</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    /* Закреплённый header */
    header {
      position: sticky;
      top: 0;
      background: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
      z-index: 1000;
    }

    /* Основной контент */
    main {
      padding: 20px;
      min-height: 100vh;
    }

    /* Фиксированный footer */
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #333;
      color: white;
      text-align: center;
      padding: 10px 0;
      z-index: 1000;
    }
  </style>
</head>
<body>

  <header>
    <h1>Закреплённый Header (Sticky)</h1>
  </header>

  <main>
    <p>
      Этот текст находится в основном блоке страницы. Прокручивайте страницу вниз, чтобы увидеть, как заголовок "прилипает" к верхней части окна.
    </p>
    <p style="height: 1500px;">Много текста для скролла...</p>
  </main>

  <footer>
    Фиксированный Footer (Fixed) — всегда внизу страницы
  </footer>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Закреплённый Header и Footer</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    header {
      position: sticky;
      top: 0;
      background: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
      z-index: 1000;
    }

    main {
      padding: 20px;
      min-height: 100vh;
    }

    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #333;
      color: white;
      text-align: center;
      padding: 10px 0;
      z-index: 1000;
    }
  </style>
</head>
<body>

  <header>
    <h1>Закреплённый Header (Sticky)</h1>
  </header>

  <main>
    <p>
      Этот текст находится в основном блоке страницы. Прокручивайте страницу вниз, чтобы увидеть, как заголовок "прилипает" к верхней части окна.
    </p>
    <p style="height: 1500px;">Много текста для скролла...</p>
  </main>

  <footer>
    Фиксированный Footer (Fixed) — всегда внизу страницы
  </footer>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
body {
  margin: 0;
  font-family: sans-serif;
}

/* Закреплённый header */
header {
  position: sticky;
  top: 0;
  background: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
  z-index: 1000;
}

/* Основной контент */
main {
  padding: 20px;
  min-height: 100vh;
}

/* Фиксированный footer */
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  z-index: 1000;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://css-tricks.com/position-sticky-2/",
    "https://html5book.ru/css-fixed-position/",
  ],
};
export const css_layout_task_4 = {
  id: "css_layout_task_4",
  module: "CSS",
  title: "Закреплённый header (sticky) и sidebar (fixed)",
  topic: "Закреплённый header и footer (sticky, fixed)",
  topicId: "css_layout",
  sectionId: "css_layout_2",
  description:
    "Создайте страницу с закреплённым header (прилипает при скролле) и фиксированным sidebar (всегда виден слева). Основной контент должен быть доступен для прокрутки.",
  steps: [
    "Создайте HTML-структуру с `<header>`, `<aside>` и `<main>`.",
    "Примените `position: sticky` к `<header>` и закрепите его сверху.",
    "Примените `position: fixed` к `<aside>` и разместите его слева.",
    "Добавьте стилизацию фона, текста и внутренние отступы.",
    "Заполните `<main>` большим количеством текста, чтобы была возможность скроллить.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Закреплённый Header и Sidebar</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    /* Закреплённый header */
    header {
      position: sticky;
      top: 0;
      background: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
      z-index: 1000;
    }

    /* Фиксированный sidebar */
    aside {
      position: fixed;
      top: 80px;
      left: 0;
      width: 200px;
      height: 100%;
      background: #333;
      color: white;
      padding: 20px;
    }

    /* Основной контент */
    main {
      margin-left: 220px;
      padding: 20px;
      min-height: 100vh;
      background: #f5f5f5;
    }
  </style>
</head>
<body>

  <header>
    <h1>Закреплённый Header (Sticky)</h1>
  </header>

  <aside>
    <h3>Навигация</h3>
    <ul>
      <li><a href="#" style="color: white;">Главная</a></li>
      <li><a href="#" style="color: white;">О нас</a></li>
      <li><a href="#" style="color: white;">Услуги</a></li>
      <li><a href="#" style="color: white;">Контакты</a></li>
    </ul>
  </aside>

  <main>
    <p>Этот текст находится в основном блоке страницы. Прокручивайте страницу вниз, чтобы увидеть, как заголовок "прилипает" к верхней части окна, а Sidebar остаётся на месте.</p>
    <p style="height: 1500px;">Много текста для скролла...</p>
  </main>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Закреплённый Header и Sidebar</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    header {
      position: sticky;
      top: 0;
      background: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
      z-index: 1000;
    }

    aside {
      position: fixed;
      top: 80px;
      left: 0;
      width: 200px;
      height: 100%;
      background: #333;
      color: white;
      padding: 20px;
    }

    main {
      margin-left: 220px;
      padding: 20px;
      min-height: 100vh;
      background: #f5f5f5;
    }
  </style>
</head>
<body>

  <header>
    <h1>Закреплённый Header (Sticky)</h1>
  </header>

  <aside>
    <h3>Навигация</h3>
    <ul>
      <li><a href="#" style="color: white;">Главная</a></li>
      <li><a href="#" style="color: white;">О нас</a></li>
      <li><a href="#" style="color: white;">Услуги</a></li>
      <li><a href="#" style="color: white;">Контакты</a></li>
    </ul>
  </aside>

  <main>
    <p>Этот текст находится в основном блоке страницы. Прокручивайте страницу вниз, чтобы увидеть, как заголовок "прилипает" к верхней части окна, а Sidebar остаётся на месте.</p>
    <p style="height: 1500px;">Много текста для скролла...</p>
  </main>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
body {
  margin: 0;
  font-family: sans-serif;
}

/* Закреплённый header */
header {
  position: sticky;
  top: 0;
  background: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
  z-index: 1000;
}

/* Фиксированный sidebar */
aside {
  position: fixed;
  top: 60px;
  left: 0;
  width: 200px;
  height: 100%;
  background: #333;
  color: white;
  padding: 20px;
}

/* Основной контент */
main {
  margin-left: 220px;
  padding: 20px;
  min-height: 100vh;
  background: #f5f5f5;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://css-tricks.com/position-sticky-2/",
    "https://html5book.ru/css-fixed-position/",
  ],
};
