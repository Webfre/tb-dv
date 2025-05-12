export const css_responsive_1 = {
  id: "css_responsive_1",
  title: "Что такое адаптивность и резиновая вёрстка",
  content: `
  ## Что такое адаптивная вёрстка?

  **Адаптивная вёрстка** — это способ сделать сайт удобным **на любом экране**: от телефона до большого монитора.

  Цель — чтобы контент не выходил за границы, шрифты были читаемыми, а блоки — не слипались.

  ---

  ## Что такое viewport?

  \`<meta name="viewport">\` — это **инструкция для браузера**, как отображать страницу на мобильных.

  Без него страница будет "ужатой" и неудобной.

  ✅ Нужно вставлять в каждый HTML-документ:

  \`\`\`html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  \`\`\`

  ---

  ## Резиновая вёрстка (fluid layout)

  Элементы **растягиваются в зависимости от ширины экрана**.  
  Для этого используют **относительные единицы**:

  | Единица  | Что означает                         |
  |----------|--------------------------------------|
  | \`%\`     | процент от родителя                  |
  | \`vw\`    | процент от ширины экрана (viewport width) |
  | \`vh\`    | процент от высоты экрана (viewport height) |

  Примеры:

  \`\`\`css
  .box {
    width: 80%;      /* от родителя */
    font-size: 2vw;  /* от экрана */
  }
  \`\`\`

  ---

  ## Гибкая ширина

  \`\`\`css
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
  \`\`\`

   Контейнер будет сжиматься на узких экранах, но не растянется больше 1200px.

  ---

  ## Почему это важно?

  Сегодня большинство пользователей заходят с **телефонов**.  
  Если сайт неудобен на маленьком экране — пользователь уходит.

  Адаптивность = удобство + доступность + современный стандарт.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    .banner {
      background: #1976d2;
      color: white;
      padding: 10vh 5vw;
      font-size: 3vw;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="banner">
    Это адаптивный баннер
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.banner {
  background: #1976d2;
  color: white;
  padding: 10vh 5vw;
  font-size: 3vw;
  text-align: center;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Viewport_meta_tag",
    "https://web.dev/viewport/",
    "https://html5book.ru/adaptivnyj-dizajn/",
  ],
};
export const css_responsive_2 = {
  id: "css_responsive_2",
  title: "Media queries — медиазапросы и точки перехода",
  content: `
  ## Что такое медиазапросы?

  **Media queries (медиазапросы)** — это способ применить CSS **только при определённой ширине экрана**.

  Пример:

  \`\`\`css
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
  \`\`\`

   Этот код сработает **только**, если ширина экрана **768px или меньше**.

  ---

  ## Как они работают?

  Ты указываешь **условие**, и CSS внутри применяется **только если оно выполняется**.

  | Условие        | Описание                              |
  |----------------|----------------------------------------|
  | \`max-width\`    | экран **меньше или равен** указанному значению |
  | \`min-width\`    | экран **больше или равен** значению            |

  ---

  ## Часто используемые breakpoints

  | Устройство     | Ширина экрана         |
  |----------------|------------------------|
  | Телефон        | до 600px               |
  | Планшет        | 600px – 1024px         |
  | Компьютер      | от 1024px и выше       |

  ---

  ## Пример адаптации layout'а

  \`\`\`css
  .container {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
  \`\`\`

   На больших экранах — блоки в ряд,  
   На мобильных — блоки в колонку.

  ---

  ## Можно комбинировать

  Пример для диапазона ширин:

  \`\`\`css
  @media (min-width: 600px) and (max-width: 1024px) {
    .box {
      padding: 40px;
    }
  }
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      gap: 20px;
    }

    .block {
      flex: 1;
      background: #f0f0f0;
      padding: 30px;
      text-align: center;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="block">Блок 1</div>
    <div class="block">Блок 2</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.container {
  display: flex;
  gap: 20px;
}

.block {
  flex: 1;
  background: #f0f0f0;
  padding: 30px;
  text-align: center;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries",
    "https://css-tricks.com/css-media-queries/",
    "https://html5book.ru/css3-mediazaprosy/",
  ],
};
export const css_responsive_3 = {
  id: "css_responsive_3",
  title: "Отзывчивые размеры: %, vw, clamp() — без медиазапросов",
  content: `
  ## Что значит "отзывчивые размеры"?

  Это такие размеры, которые **меняются автоматически**, когда пользователь открывает сайт на экране побольше или поменьше.

  Это удобно, потому что тебе **не нужно писать дополнительные условия** (медиазапросы). Всё работает "само".

  ---

  ## Пример: обычный блок

  \`\`\`css
  .box {
    width: 80%;
    font-size: 2vw;
  }
  \`\`\`

  Что здесь происходит:
  - \`width: 80%\` — ширина зависит от родителя (например, контейнера)
  - \`font-size: 2vw\` — размер текста зависит от ширины экрана (viewport width)

  Чем меньше экран — тем меньше шрифт. Чем шире экран — тем больше.

  ---

  ## Что такое vw и vh?

  Это **единицы, привязанные к экрану**:

  | Единица | Описание                       |
  |---------|--------------------------------|
  | \`1vw\`  | 1% от ширины экрана           |
  | \`1vh\`  | 1% от высоты экрана           |

  \`\`\`css
  font-size: 5vw; /* 5% от ширины экрана */
  height: 50vh;   /* половина высоты экрана */
  \`\`\`

  ---

  ## Как работает clamp()

  \`clamp(min, ideal, max)\` — это функция, которая позволяет указать:

  - **Минимальное значение** — не станет меньше
  - **Идеальное (гибкое)** — меняется при изменении экрана
  - **Максимальное значение** — не станет больше

  Пример:

  \`\`\`css
  font-size: clamp(16px, 2vw, 24px);
  \`\`\`

  Значит:
  - если экран узкий — будет **не меньше 16px**
  - при ширине побольше — будет **расти**
  - но не больше **24px**

  Это очень удобно для шрифтов и отступов!

  ---

  ## Без медиазапросов

  Раньше ты бы писал:

  \`\`\`css
  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 36px;
    }
  }
  \`\`\`

  А с clamp это всё можно сократить:

  \`\`\`css
  h1 {
    font-size: clamp(18px, 5vw, 36px);
  }
  \`\`\`

  Удобно, читаемо и современно.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    .hero {
      background: #1976d2;
      color: white;
      text-align: center;
      padding: clamp(20px, 5vw, 60px);
    }

    .hero h1 {
      font-size: clamp(24px, 6vw, 48px);
      margin: 0;
    }

    .hero p {
      font-size: clamp(14px, 3vw, 20px);
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Адаптивный заголовок</h1>
    <p>Размер текста меняется в зависимости от ширины экрана</p>
  </section>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.hero {
  background: #1976d2;
  color: white;
  text-align: center;
  padding: clamp(20px, 5vw, 60px);
}

.hero h1 {
  font-size: clamp(24px, 6vw, 48px);
  margin: 0;
}

.hero p {
  font-size: clamp(14px, 3vw, 20px);
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/clamp",
    "https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/",
    "https://web.dev/viewport-units/",
  ],
};
