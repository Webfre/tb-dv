export const css_animations_1 = {
  id: "css_animations_1",
  title: "Плавные переходы (transition)",
  content: `
  ## Что такое transition?

  \`transition\` позволяет **сделать плавное изменение CSS-свойств**,  
  вместо резкого переключения.

  Например, при наведении цвет кнопки не просто меняется, а **плавно переливается**.

  ---

  ## Пример: кнопка с плавной сменой фона

  \`\`\`css
  .btn {
    background: #2196f3;
    color: white;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background: #1565c0;
  }
  \`\`\`

   Когда наводишь курсор — фон плавно меняется за 0.3 секунды.

  ---

  ## Как работает transition?

  Формат:

  \`\`\`css
  transition: свойство длительность timing-function задержка;
  \`\`\`

  Пример:

  \`\`\`css
  transition: all 0.4s ease-in-out 0.1s;
  \`\`\`

  | Часть            | Что значит                            |
  |------------------|----------------------------------------|
  | \`all\`            | применить ко всем свойствам             |
  | \`0.4s\`           | длительность перехода (0.4 секунды)     |
  | \`ease-in-out\`    | функция плавности (ускорение/замедление) |
  | \`0.1s\`           | задержка перед началом анимации         |

  ---

  ## Популярные easing-функции

  - \`ease\` — стандартная плавность
  - \`linear\` — равномерная скорость
  - \`ease-in\` — медленно начинает
  - \`ease-out\` — медленно заканчивает
  - \`ease-in-out\` — и медленно начинает, и заканчивает

  ---

  ## Можно анимировать:

  - цвет (\`color\`, \`background-color\`)
  - размеры (\`width\`, \`height\`)
  - отступы, тени, прозрачность
  - **НЕ** работает для \`display\`, но работает для \`opacity\` и \`visibility\`
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <button class="btn">Наведи на меня</button>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    body {
      font-family: sans-serif;
      padding: 50px;
    }

    .btn {
      background: #2196f3;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #1565c0;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
    "https://html5book.ru/css3-transition/",
  ],
};
export const css_animations_2 = {
  id: "css_animations_2",
  title: "Трансформации (transform): сдвиг, масштаб, поворот",
  content: `
  ## Что такое transform?

  \`transform\` позволяет **изменять форму и положение элемента**:
  - двигать его (перемещение)
  - увеличивать/уменьшать (масштаб)
  - вращать
  - наклонять

  Всё это **без изменения разметки** и **без скачков** — элемент просто "двигается" визуально.

  ---

  ## Популярные функции transform:

  | Свойство         | Что делает                        |
  |------------------|-----------------------------------|
  | \`translateX(px)\` | Сдвиг по горизонтали              |
  | \`translateY(px)\` | Сдвиг по вертикали               |
  | \`scale(n)\`       | Масштабирование (1 = без изменений) |
  | \`rotate(deg)\`     | Поворот (в градусах)              |
  | \`skewX(deg)\`     | Наклон по оси X                   |

  Можно комбинировать:

  \`\`\`css
  transform: scale(1.1) rotate(10deg);
  \`\`\`

  ---

  ## Пример: увеличение и поворот при наведении

  \`\`\`css
  .card {
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05) rotate(1deg);
  }
  \`\`\`

   Анимация работает за счёт комбинации \`transform\` + \`transition\`.

  ---

  ## Центр трансформации

  По умолчанию изменения происходят от **центра элемента**.  
  Можно изменить с помощью \`transform-origin\`:

  \`\`\`css
  transform-origin: top left;
  \`\`\`

  ---

  ## Почему transform лучше, чем менять margin/position?

  - работает плавно
  - не ломает поток и верстку
  - можно анимировать

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="card">
    Наведи на меня<br />
    Я увеличусь и немного повернусь
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    body {
      font-family: sans-serif;
      background: #f5f5f5;
      padding: 50px;
    }

    .card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 40px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: scale(1.05) rotate(1deg);
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transform",
    "https://css-tricks.com/almanac/properties/t/transform/",
    "https://html5book.ru/css3-transform/",
  ],
};
