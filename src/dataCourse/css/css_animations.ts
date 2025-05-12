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
  <style>
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
  </style>
</head>
<body>
  <button class="btn">Наведи на меня</button>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
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
  <style>
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
  </style>
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
export const css_animations_3 = {
  id: "css_animations_3",
  title: "Анимации с помощью @keyframes (шаг за шагом)",
  content: `
  ## Что такое анимации в CSS?

  Анимация — это когда элемент **постепенно меняет** своё состояние: например,  
  **двигается**, **мерцает**, **вращается** или **меняет цвет**.

  Всё это можно сделать с помощью правила \`@keyframes\` и свойства \`animation\`.

  ---

  ## Как это работает?

  1. Ты описываешь **шаги анимации** через \`@keyframes\`
  2. Потом применяешь эту анимацию к элементу через \`animation\`

  ---

  ## Пример: мигающий блок

  \`\`\`css
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .box {
    animation: blink 1s infinite;
  }
  \`\`\`

  Что происходит:
  - В начале и в конце элемент полностью видимый (\`opacity: 1\`)
  - В середине — становится невидимым (\`opacity: 0\`)
  - А потом всё повторяется — бесконечно

  ---

  ## Что такое animation?

  Вот основные параметры, которые можно задать:

  | Свойство | Объяснение                         |
  |----------|------------------------------------|
  | \`animation-name\` | Название анимации (из \`@keyframes\`) |
  | \`animation-duration\` | Сколько длится анимация (например, \`2s\`) |
  | \`animation-iteration-count\` | Сколько раз повторить (\`infinite\` = бесконечно) |
  | \`animation-delay\` | Задержка перед началом |
  | \`animation-timing-function\` | Скорость (плавно, резко и т.д.) |

  ---

  ## Короткая запись

  Всё можно записать одной строкой:

  \`\`\`css
  animation: blink 1s ease-in-out infinite;
  \`\`\`

  ---

  ## Пример: элемент выезжает слева

  \`\`\`css
  @keyframes slide {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .element {
    animation: slide 0.5s ease-out;
  }
  \`\`\`

  Элемент "въезжает" с левой стороны при загрузке страницы.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: #f39c12;
      animation: blink 1s infinite;
      margin-bottom: 30px;
    }

    .slide {
      width: 200px;
      height: 50px;
      background: #2ecc71;
      color: white;
      line-height: 50px;
      text-align: center;
      animation: slide 0.6s ease-out;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes slide {
      0%   { transform: translateX(-100px); }
      100% { transform: translateX(0); }
    }
  </style>
</head>
<body>
  <div class="box"></div>
  <div class="slide">Я выехал слева</div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.box {
  width: 100px;
  height: 100px;
  background: #f39c12;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.slide {
  width: 200px;
  height: 50px;
  background: #2ecc71;
  color: white;
  line-height: 50px;
  text-align: center;
  animation: slide 0.6s ease-out;
}

@keyframes slide {
  0%   { transform: translateX(-100px); }
  100% { transform: translateX(0); }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/@keyframes",
    "https://html5book.ru/css3-animation/",
    "https://css-tricks.com/snippets/css/keyframe-animation-syntax/",
  ],
};
export const css_animations_4 = {
  id: "css_animations_4",
  title: "Управление анимацией: длительность, повтор, направление",
  content: `
  ## Что можно настраивать в анимации?

  Когда ты создаёшь анимацию через \`@keyframes\`, ты можешь **управлять её поведением**:

  - сколько она длится
  - сколько раз повторяется
  - будет ли она задерживаться
  - будет ли она проигрываться в обратную сторону

  Всё это задаётся через свойства \`animation-*\`.

  ---

  ## Основные параметры

  | Свойство                       | Что делает                                   |
  |--------------------------------|----------------------------------------------|
  | \`animation-name\`              | Имя анимации (из \`@keyframes\`)             |
  | \`animation-duration\`         | Сколько длится 1 цикл (например, \`2s\`)     |
  | \`animation-delay\`            | Задержка перед началом                       |
  | \`animation-iteration-count\`  | Сколько раз повторить (1, 2, \`infinite\`)   |
  | \`animation-direction\`        | Направление: обычное, обратное, чередование  |
  | \`animation-timing-function\`  | Тип скорости: плавно, линейно, скачками и т.д.|

  ---

  ## Пример 1: анимация с задержкой и повтором

  \`\`\`css
  .box {
    animation-name: pulse;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  \`\`\`

   Анимация начнётся через 1 секунду, будет длиться 2 секунды и повторяться бесконечно.

  ---

  ## Пример 2: направление alternate

  \`\`\`css
  animation-direction: alternate;
  \`\`\`

  Это значит: первый раз — в прямом направлении, второй раз — в обратном, и так далее.

   Без этого свойство блок будет "прыгать" назад.

  ---

  ## Укороченная запись

  Всё можно записать в одну строку:

  \`\`\`css
  animation: pulse 2s ease-in-out 1s infinite alternate;
  \`\`\`

  Порядок:
  - имя
  - длительность
  - скорость
  - задержка
  - повтор
  - направление

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .pulse-box {
      width: 120px;
      height: 120px;
      background: #e91e63;
      border-radius: 50%;
      margin: 50px auto;
      animation: pulse 1.5s ease-in-out 0.5s infinite alternate;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        background: #e91e63;
      }
      100% {
        transform: scale(1.2);
        background: #ad1457;
      }
    }
  </style>
</head>
<body>
  <div class="pulse-box"></div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.pulse-box {
  width: 120px;
  height: 120px;
  background: #e91e63;
  border-radius: 50%;
  margin: 50px auto;
  animation: pulse 1.5s ease-in-out 0.5s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    background: #e91e63;
  }
  100% {
    transform: scale(1.2);
    background: #ad1457;
  }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/animation",
    "https://css-tricks.com/almanac/properties/a/animation/",
    "https://html5book.ru/css3-animation/",
  ],
};
export const css_animations_5 = {
  id: "css_animations_5",
  title: "Комбинирование transform, transition и animation",
  content: `
  ## Зачем комбинировать?

  Часто для красивых эффектов нужно **совместить**:
  - \`transform\` — чтобы изменить вид (сдвиг, масштаб, поворот)
  - \`transition\` — чтобы это происходило **плавно** при взаимодействии
  - \`@keyframes + animation\` — чтобы происходило **само по себе**, без наведения

  Комбинация даёт **мощные интерактивные эффекты** — и по наведению, и при загрузке.

  ---

  ## Пример 1: масштаб при наведении

  \`\`\`css
  .card {
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
  }
  \`\`\`

   Элемент увеличивается при наведении — плавно.

  ---

  ## Пример 2: анимация + переход при наведении

  \`\`\`css
  .icon {
    animation: float 2s ease-in-out infinite;
    transition: transform 0.2s ease;
  }

  .icon:hover {
    transform: scale(1.2);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  \`\`\`

   Элемент "плавает" вверх-вниз,  
  и при наведении ещё увеличивается.

  ---

  ## Советы по сочетанию

  - \`transform\` используется и в \`transition\`, и в \`@keyframes\` — **можно и нужно совмещать**
  - если нужно анимировать при наведении — используй \`transition\`
  - если нужно анимировать **автоматически** — используй \`animation\`
  - можно использовать одновременно, как в примере выше

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .icon {
      width: 80px;
      height: 80px;
      background: #00bcd4;
      border-radius: 50%;
      margin: 50px auto;
      animation: float 2s ease-in-out infinite;
      transition: transform 0.3s ease;
    }

    .icon:hover {
      transform: scale(1.2);
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
  </style>
</head>
<body>
  <div class="icon"></div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.icon {
  width: 80px;
  height: 80px;
  background: #00bcd4;
  border-radius: 50%;
  margin: 50px auto;
  animation: float 2s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.2);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transform",
    "https://developer.mozilla.org/ru/docs/Web/CSS/animation",
    "https://css-tricks.com/css-transitions-vs-animations/",
  ],
};
