export const css_container_task_1 = {
  id: "css_container_task_1",
  module: "CSS",
  title: "Центрированный контейнер с max-width",
  topic: "Контейнеры, центрирование и ограничение ширины",
  topicId: "css_container",
  description:
    "Научитесь создавать контейнер, который всегда центрируется на странице и ограничен максимальной шириной. Такой подход используется для основного содержимого сайта.",
  steps: [
    "Создайте элемент с классом .container.",
    "Примените к .container максимальную ширину 900px.",
    "Задайте автоматические внешние отступы слева и справа (margin-left: auto; margin-right: auto) для центрирования.",
    "Добавьте внутренний отступ (padding: 20px).",
    "Проверьте, чтобы контейнер оставался по центру при разной ширине экрана.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Центрированный контейнер</title>
  <style>
    body {
      background: #f5f6fa;
    }
    .container {
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 8px #0001;
      min-height: 180px;
    }
    .title {
      font-size: 28px;
      margin-bottom: 20px;
      color: #2c3e50;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="title">Центрированный контейнер</div>
    <p>
      Этот контейнер ограничен по ширине (max-width: 900px) и всегда находится по центру страницы.
      Попробуйте менять ширину окна браузера!
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
  <title>Центрированный контейнер</title>
  <style>
    body {
      background: #f5f6fa;
    }
    .container {
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 8px #0001;
      min-height: 180px;
    }
    .title {
      font-size: 28px;
      margin-bottom: 20px;
      color: #2c3e50;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="title">Центрированный контейнер</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #0001;
  min-height: 180px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
  ],
};
export const css_container_task_2 = {
  id: "css_container_task_2",
  module: "CSS",
  title: "Полное центрирование с ограничением ширины",
  topic: "Контейнеры, центрирование и ограничение ширины",
  topicId: "css_container",
  description:
    "Реализуйте контейнер, который всегда находится ровно по центру экрана (и по вертикали, и по горизонтали), ограничьте ширину контейнера. Используйте Flexbox для центрирования.",
  steps: [
    "Создайте внешний контейнер .fullscreen-bg с высотой 100vh и шириной 100vw.",
    "Внутри .fullscreen-bg создайте элемент .centered-box.",
    "Используйте display: flex, justify-content: center и align-items: center для центрирования содержимого по обеим осям.",
    "Задайте .centered-box max-width: 400px, ширину 100%, padding: 32px, и фон.",
    "Проверьте, чтобы блок всегда был точно в центре экрана, независимо от размеров окна.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Полное центрирование</title>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .fullscreen-bg {
      min-height: 100vh;
      min-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e8f0ff;
    }
    .centered-box {
      max-width: 400px;
      width: 100%;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 12px #5c8ef122;
      padding: 32px;
      text-align: center;
    }
    .title {
      font-size: 22px;
      margin-bottom: 18px;
      color: #1976d2;
    }
  </style>
</head>
<body>
  <div class="fullscreen-bg">
    <div class="centered-box">
      <div class="title">Центрирование по всему экрану</div>
      <p>
        Этот блок всегда по центру — и по горизонтали, и по вертикали, при любой ширине окна.
      </p>
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
  <title>Полное центрирование</title>
  <style>
    .fullscreen-bg {
      min-height: 100vh;
      min-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e8f0ff;
    }
    .centered-box {
      max-width: 400px;
      width: 100%;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 12px #5c8ef122;
      padding: 32px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="fullscreen-bg">
    <div class="centered-box">
      Центрирование по всему экрану
    </div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.fullscreen-bg {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8f0ff;
}
.centered-box {
  max-width: 400px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px #5c8ef122;
  padding: 32px;
  text-align: center;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content",
    "https://developer.mozilla.org/ru/docs/Web/CSS/align-items",
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
  ],
};
export const css_container_task_3 = {
  id: "css_container_task_3",
  module: "CSS",
  title: "Адаптивный центрированный контейнер с декоративным центром",
  topic: "Контейнеры, центрирование и ограничение ширины",
  topicId: "css_container",
  description:
    "Создайте адаптивный контейнер, ограниченный по ширине и минимальной ширине, с полностью центрированным внутренним блоком (например, модальным окном или карточкой). Внутренний блок должен быть расположен ровно по центру контейнера при любой ширине экрана и оставаться адаптивным. Реализуйте эффект, при котором фон контейнера затемняется, а центрированная карточка всегда видна полностью.",
  steps: [
    "Создайте внешний контейнер .adaptive-bg с ограничениями по ширине: max-width: 1200px, min-width: 320px, шириной 100%, и горизонтальным центрированием через margin: auto.",
    "Задайте .adaptive-bg высоту не менее 100vh, фон — полупрозрачный (например, rgba(0,0,0,0.2)).",
    "Внутри разместите .center-card — внутренний блок фиксированной или минимальной ширины (например, min-width: 300px, max-width: 90%, ширина: 400px), фон белый, padding и скругление.",
    "Используйте flex или grid для идеального центрирования .center-card по вертикали и горизонтали внутри .adaptive-bg.",
    "Проверьте, что карточка всегда по центру, а при сужении окна не выходит за пределы контейнера.",
    "Добавьте в карточку заголовок и примерный текст для наглядности.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Адаптивный центрированный контейнер с модальным центром</title>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      background: #eaf3fb;
      min-height: 100vh;
    }
    .adaptive-bg {
      max-width: 1200px;
      min-width: 320px;
      width: 100%;
      min-height: 100vh;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.14);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: 0 2px 12px #0001;
    }
    .center-card {
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 4px 24px #0003;
      min-width: 300px;
      max-width: 90%;
      width: 400px;
      padding: 36px 28px;
      text-align: center;
    }
    .center-card h2 {
      margin-top: 0;
      color: #3574e7;
      margin-bottom: 18px;
    }
    .center-card p {
      color: #353535;
      margin: 0;
    }
    @media (max-width: 500px) {
      .center-card {
        padding: 20px 10px;
      }
    }
  </style>
</head>
<body>
  <div class="adaptive-bg">
    <div class="center-card">
      <h2>Добро пожаловать!</h2>
      <p>Этот блок всегда строго по центру родителя, не выходит за границы и адаптируется под разные размеры экрана.</p>
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
  <title>Адаптивный центрированный контейнер с модальным центром</title>
  <style>
   html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      background: #eaf3fb;
      min-height: 100vh;
    }
    .adaptive-bg {
      max-width: 1200px;
      min-width: 320px;
      width: 100%;
      min-height: 100vh;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.14);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: 0 2px 12px #0001;
    }
    .center-card {
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 4px 24px #0003;
      min-width: 300px;
      max-width: 90%;
      width: 400px;
      padding: 36px 28px;
      text-align: center;
    }
    .center-card h2 {
      margin-top: 0;
      color: #3574e7;
      margin-bottom: 18px;
    }
    .center-card p {
      color: #353535;
      margin: 0;
    }
    @media (max-width: 500px) {
      .center-card {
        padding: 20px 10px;
      }
    }
  </style>
</head>
<body>
  <div class="adaptive-bg">
    <div class="center-card">
      Добро пожаловать!
    </div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
  html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      background: #eaf3fb;
      min-height: 100vh;
    }
    .adaptive-bg {
      max-width: 1200px;
      min-width: 320px;
      width: 100%;
      min-height: 100vh;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.14);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: 0 2px 12px #0001;
    }
    .center-card {
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 4px 24px #0003;
      min-width: 300px;
      max-width: 90%;
      width: 400px;
      padding: 36px 28px;
      text-align: center;
    }
    .center-card h2 {
      margin-top: 0;
      color: #3574e7;
      margin-bottom: 18px;
    }
    .center-card p {
      color: #353535;
      margin: 0;
    }
    @media (max-width: 500px) {
      .center-card {
        padding: 20px 10px;
      }
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/min-width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://developer.mozilla.org/ru/docs/Web/CSS/flex",
    "https://developer.mozilla.org/ru/docs/Web/CSS/align-items",
    "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content",
  ],
};
export const css_container_task_4 = {
  id: "css_container_task_4",
  module: "CSS",
  title: "Закреплённый header (fixed)",
  topic: "Закреплённый header и footer (sticky, fixed)",
  topicId: "css_container",
  description:
    "Реализуйте фиксированный header, который всегда виден в верхней части страницы при прокрутке. Такой приём часто используется для навигации на сайте.",
  steps: [
    "Создайте элемент <header> с классом .site-header.",
    "Задайте высоту (например, 60px), фон и цвет текста.",
    "Используйте свойство position: fixed; top: 0; left: 0; width: 100% для закрепления хедера вверху.",
    "Добавьте паддинг к body, чтобы содержимое не скрывалось под header.",
    "Проверьте, что header всегда остаётся видимым сверху при скролле.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фиксированный Header</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      padding-top: 60px; /* чтобы контент не прятался под header */
      background: #f9f9fb;
    }
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background: #2a3a67;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      z-index: 1000;
      box-shadow: 0 2px 10px #0002;
    }
    .content {
      max-width: 700px;
      margin: 40px auto;
      font-size: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <header class="site-header">
    Фиксированный Header
  </header>
  <div class="content">
    <p>Прокрутите страницу — header всегда останется наверху.</p>
    <p style="margin-top: 700px;">Демонстрация работы фиксированного хедера.</p>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фиксированный Header</title>
  <style>
      body {
      margin: 0;
      font-family: Arial, sans-serif;
      padding-top: 60px; /* чтобы контент не прятался под header */
      background: #f9f9fb;
    }
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background: #2a3a67;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      z-index: 1000;
      box-shadow: 0 2px 10px #0002;
    }
    .content {
      max-width: 700px;
      margin: 40px auto;
      font-size: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <header class="site-header">
    Фиксированный Header
  </header>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      padding-top: 60px; /* чтобы контент не прятался под header */
      background: #f9f9fb;
    }
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background: #2a3a67;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      z-index: 1000;
      box-shadow: 0 2px 10px #0002;
    }
    .content {
      max-width: 700px;
      margin: 40px auto;
      font-size: 18px;
      line-height: 1.6;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/top",
  ],
};
export const css_container_task_5 = {
  id: "css_container_task_5",
  module: "CSS",
  title: "Фиксированный footer и контент над ним",
  topic: "Закреплённый header и footer (sticky, fixed)",
  topicId: "css_container",
  description:
    "Сделайте footer фиксированным внизу окна браузера. Контент должен корректно заканчиваться над футером, чтобы текст не перекрывался при скролле.",
  steps: [
    "Создайте элемент <footer> с классом .site-footer.",
    "Добавьте высоту футера (например, 56px), фон и цвет текста.",
    "Примените position: fixed; left: 0; bottom: 0; width: 100% для закрепления футера внизу.",
    "Добавьте дополнительный отступ снизу у контента (padding-bottom), равный высоте футера.",
    "Проверьте, что footer всегда внизу, а весь текст и блоки не перекрываются футером.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фиксированный Footer</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f9f9fb;
      padding-bottom: 56px; /* чтобы контент не уходил под футер */
    }
    .site-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 56px;
      background: #224a39;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      z-index: 1000;
      box-shadow: 0 -2px 10px #0002;
    }
    .content {
      max-width: 700px;
      margin: 40px auto;
      font-size: 17px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="content">
    <p>Контент страницы. Футер всегда закреплён внизу.</p>
    <p style="margin-bottom: 800px;">Демонстрация работы фиксированного футера.</p>
  </div>
  <footer class="site-footer">
    Фиксированный Footer
  </footer>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фиксированный Footer</title>
  <style>
       body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f9f9fb;
      padding-bottom: 56px; /* чтобы контент не уходил под футер */
    }
    .site-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 56px;
      background: #224a39;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      z-index: 1000;
      box-shadow: 0 -2px 10px #0002;
    }
    .content {
      max-width: 700px;
      margin: 40px auto;
      font-size: 17px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <footer class="site-footer">
    Фиксированный Footer
  </footer>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f9f9fb;
      padding-bottom: 56px; /* чтобы контент не уходил под футер */
    }
    .site-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 56px;
      background: #224a39;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      z-index: 1000;
      box-shadow: 0 -2px 10px #0002;
    }
    .content {
      max-width: 700px;
      margin: 40px auto;
      font-size: 17px;
      line-height: 1.6;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://developer.mozilla.org/ru/docs/Web/CSS/bottom",
  ],
};
export const css_container_task_6 = {
  id: "css_container_task_6",
  module: "CSS",
  title: "Sticky header и sticky footer одновременно",
  topic: "Закреплённый header и footer (sticky, fixed)",
  topicId: "css_container",
  description:
    "Сделайте так, чтобы header и footer всегда были видимы при прокрутке, но не перекрывали основной контент (используйте position: sticky). Контент между ними должен скроллиться. Контейнер с контентом должен иметь собственную прокрутку.",
  steps: [
    "Создайте <header> с классом .sticky-header и <footer> с классом .sticky-footer.",
    "Добавьте высоту и фон для header и footer.",
    "Создайте .scroll-area — контейнер для основного контента между header и footer.",
    "Назначьте .scroll-area высоту 100vh минус высоты header и footer, overflow-y: auto.",
    "Используйте position: sticky для header (top: 0) и footer (bottom: 0).",
    "Проверьте, что основной контент скроллится между закреплёнными header и footer.",
    "Добавьте длинный контент для проверки работы sticky эффектов.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Sticky Header и Footer — Контент со скроллом</title>
  <style>
    html, body {
      margin: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      background: #f9f9fb;
    }
    body {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .sticky-header {
      position: sticky;
      top: 0;
      background: #384a76;
      color: #fff;
      height: 54px;
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      z-index: 10;
      box-shadow: 0 2px 10px #0002;
    }
    .sticky-footer {
      position: sticky;
      bottom: 0;
      background: #367c62;
      color: #fff;
      height: 54px;
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      z-index: 10;
      box-shadow: 0 -2px 10px #0002;
    }
    .scroll-area {
      flex: 1 1 auto;
      /* ВАЖНО! Учитываем высоту header и footer: 100vh - 108px */
      height: calc(100vh - 108px);
      overflow-y: auto;
      background: #fff;
      box-sizing: border-box;
      padding: 28px 0;
    }
    .main-content {
      max-width: 700px;
      margin: 0 auto;
      padding: 0 16px;
      font-size: 17px;
      line-height: 1.7;
    }
    .demo-block {
      background: #eaf4ff;
      border-radius: 7px;
      margin: 24px 0;
      padding: 22px 20px;
      box-shadow: 0 2px 10px #1a55c110;
    }
  </style>
</head>
<body>
  <header class="sticky-header">
    Sticky Header
  </header>
  <div class="scroll-area">
    <div class="main-content">
      <div class="demo-block">
        <b>Прокрутите содержимое — header и footer всегда на экране!</b>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum, velit quis dictum dictum, enim urna consequat odio, in dictum nibh enim nec massa. Etiam accumsan, eros at luctus placerat, leo turpis porta metus, nec luctus magna nibh ac libero.
      </p>
      <p>
        Pellentesque euismod cursus neque, nec facilisis sapien blandit nec. Morbi rhoncus orci id orci dictum, a gravida leo lobortis. Integer gravida dictum neque, ut commodo nibh commodo quis. Curabitur tempor, justo a sodales gravida, enim mauris dictum ex, a venenatis enim risus nec elit.
      </p>
      <div class="demo-block">
        <b>Контент продолжает скроллиться между закреплёнными блоками.</b>
      </div>
      <p>
        Maecenas consequat, tortor non commodo pretium, orci lectus mattis nulla, ac suscipit turpis nisi in urna. Aenean scelerisque, dolor ac blandit malesuada, nulla eros euismod massa, nec commodo orci magna eget eros.
      </p>
      <p>
        Integer sed tortor a dolor dictum varius. Quisque posuere facilisis sapien, vel malesuada mi dictum ac. Etiam scelerisque, nunc et commodo ultricies, purus orci hendrerit felis, sed cursus lectus lacus vitae risus.
      </p>
      <p>
        Proin sit amet velit felis. Suspendisse nec pulvinar arcu, ac dictum lacus. Vivamus commodo faucibus felis id porta. Etiam nec dolor at lorem porta blandit ac ut lectus.
      </p>
      <div class="demo-block">
        <b>Sticky Footer закреплён внизу, пока есть контент для скролла.</b>
      </div>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam facilisis metus at feugiat gravida. Suspendisse ac libero ullamcorper, cursus mi eget, ultricies dolor.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris hendrerit enim at odio facilisis, vitae ullamcorper velit ultricies.
      </p>
      <p>
        Donec pulvinar sapien a dictum dictum. Morbi dictum dictum ligula, eu tempor nisi lacinia ac. Pellentesque nec elit hendrerit, dictum justo et, dictum sapien.
      </p>
    </div>
  </div>
  <footer class="sticky-footer">
    Sticky Footer
  </footer>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Sticky Header и Footer — Контент со скроллом</title>
  <style>
    html, body {
      margin: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      background: #f9f9fb;
    }
    body {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .sticky-header {
      position: sticky;
      top: 0;
      background: #384a76;
      color: #fff;
      height: 54px;
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      z-index: 10;
      box-shadow: 0 2px 10px #0002;
    }
    .sticky-footer {
      position: sticky;
      bottom: 0;
      background: #367c62;
      color: #fff;
      height: 54px;
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      z-index: 10;
      box-shadow: 0 -2px 10px #0002;
    }
    .scroll-area {
      flex: 1 1 auto;
      /* ВАЖНО! Учитываем высоту header и footer: 100vh - 108px */
      height: calc(100vh - 108px);
      overflow-y: auto;
      background: #fff;
      box-sizing: border-box;
      padding: 28px 0;
    }
    .main-content {
      max-width: 700px;
      margin: 0 auto;
      padding: 0 16px;
      font-size: 17px;
      line-height: 1.7;
    }
    .demo-block {
      background: #eaf4ff;
      border-radius: 7px;
      margin: 24px 0;
      padding: 22px 20px;
      box-shadow: 0 2px 10px #1a55c110;
    }
  </style>
</head>
<body>
  <header class="sticky-header">
    Sticky Header
  </header>
  <div class="scroll-area">
    <div class="main-content">
      <div class="demo-block">
        <b>Прокрутите содержимое — header и footer всегда на экране!</b>
      </div>
      <p style="margin-bottom: 700px;">Много контента...</p>
      <div class="demo-block">
        <b>Sticky Footer закреплён внизу, пока есть контент для скролла.</b>
      </div>
    </div>
  </div>
  <footer class="sticky-footer">
    Sticky Footer
  </footer>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    html, body {
      margin: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      background: #f9f9fb;
    }
    body {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .sticky-header {
      position: sticky;
      top: 0;
      background: #384a76;
      color: #fff;
      height: 54px;
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      z-index: 10;
      box-shadow: 0 2px 10px #0002;
    }
    .sticky-footer {
      position: sticky;
      bottom: 0;
      background: #367c62;
      color: #fff;
      height: 54px;
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      z-index: 10;
      box-shadow: 0 -2px 10px #0002;
    }
    .scroll-area {
      flex: 1 1 auto;
      /* ВАЖНО! Учитываем высоту header и footer: 100vh - 108px */
      height: calc(100vh - 108px);
      overflow-y: auto;
      background: #fff;
      box-sizing: border-box;
      padding: 28px 0;
    }
    .main-content {
      max-width: 700px;
      margin: 0 auto;
      padding: 0 16px;
      font-size: 17px;
      line-height: 1.7;
    }
    .demo-block {
      background: #eaf4ff;
      border-radius: 7px;
      margin: 24px 0;
      padding: 22px 20px;
      box-shadow: 0 2px 10px #1a55c110;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://css-tricks.com/the-css-sticky-position/",
  ],
};
