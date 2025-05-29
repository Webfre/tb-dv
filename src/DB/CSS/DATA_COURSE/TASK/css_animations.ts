// Плавные переходы (transition)
export const css_animations_task_1 = {
  id: "css_animations_task_1",
  module: "CSS",
  title: "Плавный переход цвета и размера кнопки",
  topic: "Плавные переходы (transition)",
  topicId: "css_animations",
  sectionId: "css_animations_1",
  description:
    "Создайте кнопку с плавным изменением цвета и размера при наведении с использованием CSS-свойства `transition`.",
  steps: [
    "Создайте кнопку с классом `.animated-button`.",
    "Задайте кнопке цвет фона, размер и скругление.",
    "Пропишите `transition` для плавного изменения цвета и размера.",
    "При наведении измените цвет фона и увеличьте размер.",
    "Стилизуйте кнопку для наглядности.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Плавный переход цвета и размера кнопки</title>
  <style>
 
  </style>
</head>
<body>

  <button class="animated-button">Наведи на меня</button>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Плавный переход цвета и размера кнопки</title>
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

    .animated-button {
      background-color: #4CAF50;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .animated-button:hover {
      background-color: #45a049;
      transform: scale(1.05);
    }
  </style>
</head>
<body>

  <button class="animated-button">Наведи на меня</button>

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

    .animated-button {
      background-color: #4CAF50;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .animated-button:hover {
      background-color: #45a049;
      transform: scale(1.05);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
    "https://html5book.ru/css3-transition/",
  ],
};
export const css_animations_task_2 = {
  id: "css_animations_task_2",
  module: "CSS",
  title: "Плавное раскрытие информации при наведении",
  topic: "Плавные переходы (transition)",
  topicId: "css_animations",
  sectionId: "css_animations_1",
  description:
    "Создайте блок с текстом 'Наведи на меня', при наведении на который он увеличивается в размере, меняет цвет фона и отображает скрытую информацию.",
  steps: [
    "Создайте HTML-структуру с блоком `<div class='card'>`.",
    "Внутри блока разместите текст 'Наведи на меня!' и еще один блок с дополнительной информацией.",
    "Добавьте стили для плавного увеличения, смены цвета и отображения текста при наведении.",
    "Используйте `transition` для плавного изменения.",
    "Добавьте тень и анимацию при наведении.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Плавное раскрытие информации при наведении</title>
</head>
<body>
  <div class="card">
    <div class="title">Наведи на меня!</div>
    <div class="info">Теперь ты видишь скрытую информацию!</div>
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
  <title>Плавное раскрытие информации при наведении</title>
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .card {
      width: 300px;
      height: 200px;
      background-color: #eeeeee;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }

    .card:hover {
      background-color: #42a5f5;
      transform: scale(1.05);
    }

    .card:hover .info {
      opacity: 1;
      transform: translateY(0);
    }

    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .info {
      position: absolute;
      bottom: 15px;
      opacity: 0;
      font-size: 14px;
      color: white;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }
  </style>
</head>
<body>

  <div class="card">
    <div class="title">Наведи на меня!</div>
    <div class="info">Теперь ты видишь скрытую информацию!</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .card {
      width: 300px;
      height: 200px;
      background-color: #eeeeee;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }

    .card:hover {
      background-color: #42a5f5;
      transform: scale(1.05);
    }

    .card:hover .info {
      opacity: 1;
      transform: translateY(0);
    }

    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .info {
      position: absolute;
      bottom: 15px;
      opacity: 0;
      font-size: 14px;
      color: white;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
    "https://html5book.ru/css3-transition/",
  ],
};
export const css_transition_task_1 = {
  id: "css_transition_task_1",
  module: "CSS",
  title: "Плавное изменение цвета кнопки",
  topic: "Плавные переходы (transition)",
  topicId: "css_transition",
  description:
    "Сделай кнопку, у которой плавно меняется цвет фона и текста при наведении.",
  steps: [
    'Создай <button class="transition-btn">.',
    "Добавь начальные стили: цвет, фон, border-radius.",
    "Пропиши transition для background и color (например, 0.3s).",
    "Сделай :hover с другим цветом фона и текста.",
    "Проверь плавность перехода.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
  <link rel="stylesheet" href="styles.css">
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Плавное изменение цвета кнопки</title>
</head>
<body>
  <button class="transition-btn">Наведи на меня</button>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Плавное изменение цвета кнопки</title>
  <style>
    .transition-btn {
      padding: 16px 36px;
      background: #2387d7;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s, color 0.3s;
      box-shadow: 0 2px 10px #19557715;
    }
    .transition-btn:hover {
      background: #a7e236;
      color: #2d2d2d;
    }
  </style>
</head>
<body>
  <button class="transition-btn">Наведи на меня</button>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    .transition-btn {
      padding: 16px 36px;
      background: #2387d7;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s, color 0.3s;
      box-shadow: 0 2px 10px #19557715;
    }
    .transition-btn:hover {
      background: #a7e236;
      color: #2d2d2d;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
  ],
};
export const css_transition_task_2 = {
  id: "css_transition_task_2",
  module: "CSS",
  title: "Плавное увеличение карточки с тенью",
  topic: "Плавные переходы (transition)",
  topicId: "css_transition",
  description:
    "Сделай карточку, которая при наведении плавно увеличивается и становится с более заметной тенью.",
  steps: [
    'Создай <div class="hover-card"> с любым текстом внутри.',
    "Добавь стили: фон, радиус, паддинг, box-shadow.",
    "Пропиши transition для transform и box-shadow.",
    "На :hover увеличивай scale и усиливай тень.",
    "Проверь плавность увеличения карточки.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Плавное увеличение карточки</title>
</head>
<body>
  <div class="hover-card">
    Наведи на карточку — увидишь плавное увеличение и тень
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Плавное увеличение карточки</title>
  <style>
    body {
      background: #f8fafc;
      font-family: Arial, sans-serif;
    }
    .hover-card {
      background: #36bdb9;
      color: #fff;
      padding: 44px 40px;
      border-radius: 18px;
      font-size: 22px;
      box-shadow: 0 2px 10px #13375119;
      transition: transform 0.32s cubic-bezier(.5,1.8,.6,1), box-shadow 0.32s;
      margin: 80px auto;
      text-align: center;
      max-width: 380px;
    }
    .hover-card:hover {
      transform: scale(1.07);
      box-shadow: 0 8px 36px #27e1e055;
    }
  </style>
</head>
<body>
  <div class="hover-card">
    Наведи на карточку — увидишь плавное увеличение и тень
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      background: #f8fafc;
      font-family: Arial, sans-serif;
    }
    .hover-card {
      background: #36bdb9;
      color: #fff;
      padding: 44px 40px;
      border-radius: 18px;
      font-size: 22px;
      box-shadow: 0 2px 10px #13375119;
      transition: transform 0.32s cubic-bezier(.5,1.8,.6,1), box-shadow 0.32s;
      margin: 80px auto;
      text-align: center;
      max-width: 380px;
    }
    .hover-card:hover {
      transform: scale(1.07);
      box-shadow: 0 8px 36px #27e1e055;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
  ],
};
export const css_transition_task_3 = {
  id: "css_transition_task_3",
  module: "CSS",
  title: "Плавное появление и исчезновение блока без JS",
  topic: "Плавные переходы (transition)",
  topicId: "css_transition",
  description:
    "Сделай блок, который плавно исчезает при наведении курсора на родительский контейнер, и появляется обратно, когда курсор уходит. Используй только CSS (transition + :hover).",
  steps: [
    'Создай <div class="container">, а внутри него <div class="fade-block"> с любым текстом.',
    "Для .fade-block пропиши opacity: 1 и transition: opacity 0.35s.",
    "Добавь стиль .container:hover .fade-block { opacity: 0; pointer-events: none; }",
    "Проверь: при наведении на контейнер блок плавно исчезает, при уходе — появляется.",
    "Можно добавить стили для центрирования, фон и отступы.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
  <link rel="stylesheet" href="styles.css">
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Плавное появление блока без JS</title>
</head>
<body>
  <div class="container">
    <div class="fade-block">
      Наведи мышкой — блок плавно исчезает!
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
  <title>Плавное появление блока без JS</title>
  <style>
    body {
      background: #f5f8fa;
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      background: #e9f1fb;
    }
    .fade-block {
      background: #ffec96;
      color: #583800;
      border-radius: 12px;
      font-size: 22px;
      text-align: center;
      padding: 44px 32px;
      box-shadow: 0 2px 10px #eec32155;
      opacity: 1;
      transition: opacity 0.35s;
      max-width: 430px;
    }
    .container:hover .fade-block {
      opacity: 0;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="fade-block">
      Наведи мышкой — блок плавно исчезает!
    </div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      background: #f5f8fa;
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      background: #e9f1fb;
    }
    .fade-block {
      background: #ffec96;
      color: #583800;
      border-radius: 12px;
      font-size: 22px;
      text-align: center;
      padding: 44px 32px;
      box-shadow: 0 2px 10px #eec32155;
      opacity: 1;
      transition: opacity 0.35s;
      max-width: 430px;
    }
    .container:hover .fade-block {
      opacity: 0;
      pointer-events: none;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
  ],
};

// Трансформации (transform): сдвиг, масштаб, поворот

export const css_animations_task_3 = {
  id: "css_animations_task_3",
  module: "CSS",
  title: "Простая анимация увеличения и поворота",
  topic: "Трансформации (transform): сдвиг, масштаб, поворот",
  topicId: "css_animations",
  sectionId: "css_animations_2",
  description:
    "Создайте карточку, которая при наведении плавно увеличивается в размере и слегка поворачивается.",
  steps: [
    "Создайте HTML-структуру с блоком `<div class='card'>`.",
    "Добавьте текст в блок, например, 'Наведи на меня'.",
    "Примените стили к блоку для красивого отображения.",
    "Используйте `transform` для увеличения и поворота при наведении.",
    "Примените `transition` для плавного эффекта.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Простая анимация увеличения и поворота</title>
</head>
<body>

  <div class="card">
    Наведи на меня!
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
  <title>Простая анимация увеличения и поворота</title>
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .card {
      width: 200px;
      height: 150px;
      background-color: #4caf50;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  </style>
</head>
<body>

  <div class="card">
    Наведи на меня!
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .card {
      width: 200px;
      height: 150px;
      background-color: #4caf50;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transform",
    "https://css-tricks.com/almanac/properties/t/transform/",
    "https://html5book.ru/css3-transform/",
  ],
};
export const css_animations_task_4 = {
  id: "css_animations_task_4",
  module: "CSS",
  title: "3D карточка с разворотом при наведении",
  topic: "Трансформации (transform): сдвиг, масштаб, поворот",
  topicId: "css_animations",
  sectionId: "css_animations_2",
  description:
    "Создайте 3D карточку, которая при наведении разворачивается, показывая обратную сторону с дополнительной информацией.",
  steps: [
    "Создайте HTML-структуру с двумя блоками: `.card-front` и `.card-back`.",
    "Поместите их внутрь контейнера `.card`, который будет служить обёрткой.",
    "Задайте стили для отображения передней и задней стороны карточки.",
    "Используйте `transform` для эффекта разворота при наведении.",
    "Реализуйте плавный переход с помощью `transition`.",
    "Добавьте перспективу для 3D-эффекта.",
  ],
  difficulty: 4,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>3D Карточка с разворотом</title>
</head>
<body>

  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">
        Передняя сторона
      </div>
      <div class="card-face card-back">
        Обратная сторона
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
  <title>3D Карточка с разворотом</title>
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .card-container {
      perspective: 1000px;
    }

    .card {
      width: 300px;
      height: 200px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      cursor: pointer;
    }

    .card:hover {
      transform: rotateY(180deg);
    }

    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .card-front {
      background-color: #2196f3;
      color: white;
    }

    .card-back {
      background-color: #4caf50;
      color: white;
      transform: rotateY(180deg);
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">
        Передняя сторона
      </div>
      <div class="card-face card-back">
        Обратная сторона
      </div>
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .card-container {
      perspective: 1000px;
    }

    .card {
      width: 300px;
      height: 200px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      cursor: pointer;
    }

    .card:hover {
      transform: rotateY(180deg);
    }

    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .card-front {
      background-color: #2196f3;
      color: white;
    }

    .card-back {
      background-color: #4caf50;
      color: white;
      transform: rotateY(180deg);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transform",
    "https://css-tricks.com/almanac/properties/t/transform/",
    "https://html5book.ru/css3-transform/",
  ],
};
export const css_transition_task_4 = {
  id: "css_transition_task_4",
  module: "CSS",
  title: "Сдвиг и поворот карточки при наведении",
  topic: "Трансформации (transform): сдвиг, масштаб, поворот",
  topicId: "css_transition",
  description:
    "Сделай карточку, которая при наведении плавно смещается вправо и слегка поворачивается. Используй transform и transition.",
  steps: [
    'Создай <div class="transform-card"> с любым текстом.',
    "Задай начальные стили: паддинг, фон, радиус, box-shadow, transition для transform.",
    "При :hover смещай карточку вправо на 30px (translateX) и вращай на 8deg.",
    "Проверь плавность и одновременность обеих трансформаций.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Сдвиг и поворот карточки</title>
</head>
<body>
  <div class="transform-card">
    Наведи курсор — карточка плавно сместится и повернётся!
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сдвиг и поворот карточки</title>
  <style>
    body {
      background: #f5f8fa;
      font-family: Arial, sans-serif;
    }
    .transform-card {
      background: #4b63ff;
      color: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 12px #37448833;
      font-size: 22px;
      padding: 42px 40px;
      margin: 70px auto;
      max-width: 380px;
      text-align: center;
      transition: transform 0.32s cubic-bezier(.5,1.8,.6,1);
      cursor: pointer;
    }
    .transform-card:hover {
      transform: translateX(30px) rotate(8deg);
    }
  </style>
</head>
<body>
  <div class="transform-card">
    Наведи курсор — карточка плавно сместится и повернётся!
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
   body {
      background: #f5f8fa;
      font-family: Arial, sans-serif;
    }
    .transform-card {
      background: #4b63ff;
      color: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 12px #37448833;
      font-size: 22px;
      padding: 42px 40px;
      margin: 70px auto;
      max-width: 380px;
      text-align: center;
      transition: transform 0.32s cubic-bezier(.5,1.8,.6,1);
      cursor: pointer;
    }
    .transform-card:hover {
      transform: translateX(30px) rotate(8deg);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transform",
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
  ],
};
export const css_transition_task_5 = {
  id: "css_transition_task_5",
  module: "CSS",
  title: "Масштабирование и прыжок блока при наведении",
  topic: "Трансформации (transform): сдвиг, масштаб, поворот",
  topicId: "css_transition",
  description:
    "Сделай блок, который при наведении одновременно увеличивается (scale) и подскакивает вверх (translateY). Всё — плавно.",
  steps: [
    'Создай <div class="jump-block"> с произвольным текстом.',
    "Добавь стили: фон, радиус, padding, transition для transform.",
    "На :hover увеличь блок (scale: 1.18) и сдвинь его вверх на 24px (translateY(-24px)).",
    "Проверь плавность одновременного эффекта.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  <title>Масштаб и прыжок блока</title>
</head>
<body>
  <div class="jump-block">
    Наведи — блок увеличится и прыгнет вверх!
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Масштаб и прыжок блока</title>
  <style>
    body {
      background: #eef7f2;
      font-family: Arial, sans-serif;
    }
    .jump-block {
      background: #0fb374;
      color: #fff;
      border-radius: 18px;
      box-shadow: 0 2px 14px #099b5260;
      font-size: 21px;
      padding: 40px 38px;
      margin: 100px auto;
      max-width: 360px;
      text-align: center;
      transition: transform 0.38s cubic-bezier(.45,1.6,.55,1);
      cursor: pointer;
    }
    .jump-block:hover {
      transform: scale(1.18) translateY(-24px);
    }
  </style>
</head>
<body>
  <div class="jump-block">
    Наведи — блок увеличится и прыгнет вверх!
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      background: #eef7f2;
      font-family: Arial, sans-serif;
    }
    .jump-block {
      background: #0fb374;
      color: #fff;
      border-radius: 18px;
      box-shadow: 0 2px 14px #099b5260;
      font-size: 21px;
      padding: 40px 38px;
      margin: 100px auto;
      max-width: 360px;
      text-align: center;
      transition: transform 0.38s cubic-bezier(.45,1.6,.55,1);
      cursor: pointer;
    }
    .jump-block:hover {
      transform: scale(1.18) translateY(-24px);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transform",
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
  ],
};
