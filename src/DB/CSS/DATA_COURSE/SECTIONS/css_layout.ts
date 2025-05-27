export const css_layout_1 = {
  id: "css_layout_1",
  title: "Контейнеры, центрирование и ограничение ширины",
  content: `
  ## Зачем нужен контейнер?

  Контейнер — это **обёртка для содержимого страницы**, которая:
  - ограничивает ширину (чтобы текст не растягивался на весь экран),
  - выравнивает контент по центру,
  - добавляет внутренние отступы.

  ---

  ## Базовый пример контейнера

  \`\`\`css
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  \`\`\`

  ### Объяснение:
  - \`max-width: 1200px\` — ограничивает ширину блока
  - \`margin: 0 auto\` — выравнивает по центру (по горизонтали)
  - \`padding\` — создаёт внутренние отступы (особенно важны на мобильных!)

  ---

  ## Почему margin: 0 auto центрирует?

  Когда ширина ограничена (через \`width\` или \`max-width\`), и ты ставишь \`margin-left\` и \`margin-right\` в \`auto\`,  
  браузер **распределяет свободное пространство поровну**, и элемент выравнивается по центру.

  ---

  ## Контейнер + 100% ширины экрана

  Иногда удобно, чтобы фон тянулся на всю ширину, а контент был по центру:

  \`\`\`html
  <div class="wrapper">
    <div class="container">
      Контент
    </div>
  </div>
  \`\`\`

  \`\`\`css
  .wrapper {
    background: #f5f5f5;
    padding: 40px 0;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }
  \`\`\`

  Это часто используется для секций: фон — на всю ширину, контент — ограничен.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <p>Это центрированный контейнер внутри обёртки с фоном.</p>
    </div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    body {
      margin: 0;
      font-family: sans-serif;
    }

    .wrapper {
      background: #e0e0e0;
      padding: 40px 0;
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 20px;
      background: white;
    }

    p {
      margin: 0;
      padding: 20px 0;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/max-width",
    "https://css-tricks.com/the-css-box-model/",
    "https://html5book.ru/css-margin-auto/",
  ],
};
export const css_layout_2 = {
  id: "css_layout_2",
  title: "Закреплённый header и footer (sticky, fixed)",
  content: `
  ## Что значит "закреплённый"?

  Иногда нужно, чтобы **шапка или подвал оставались на экране**, даже когда пользователь скроллит страницу.

  Есть два способа сделать это:

  ---

  ##  position: sticky — прилипает при прокрутке

  Элемент как обычно находится в потоке, **но когда ты доскроллишь до него — он "прилипает"** к нужной позиции (например, к верху экрана).

  Пример:

  \`\`\`css
  header {
    position: sticky;
    top: 0;
    background: white;
  }
  \`\`\`

  Важно: у родителя не должно быть \`overflow: hidden\`.

  ---

  ##  position: fixed — всегда на экране

  Элемент **всегда виден**, он как будто "приклеен" к краю окна.

  Пример:

  \`\`\`css
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #333;
    color: white;
  }
  \`\`\`

Минус: контент может залезать под футер — нужно добавить отступ внизу:

  \`\`\`css
  main {
    padding-bottom: 60px; /* высота футера */
  }
  \`\`\`

  ---

  ## Когда использовать?

  | Хочешь, чтобы...                 | Используй         |
  |----------------------------------|-------------------|
  | Шапка "прилипала" при прокрутке  | \`sticky\`         |
  | Подвал всегда был снизу экрана   | \`fixed\`          |

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>Закреплённый header (sticky)</header>
  <main>
    <p>Контент страницы</p>
    <p style="height: 1200px;">Много текста для скролла...</p>
  </main>
  <footer>Фиксированный footer (fixed)</footer>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    body {
      margin: 0;
      font-family: sans-serif;
    }

    header {
      position: sticky;
      top: 0;
      background: #1976d2;
      color: white;
      padding: 20px;
    }

    main {
      padding: 20px;
      padding-bottom: 60px;
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
      padding: 15px;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://css-tricks.com/position-sticky-2/",
  ],
};
export const css_layout_3 = {
  id: "css_layout_3",
  title: "Паттерны секций: карточки, блоки и отступы",
  content: `
## Что такое "секции"?

Секции — это **отдельные смысловые блоки** на веб-странице. Каждый такой блок выполняет свою задачу и визуально отделяется от других:

- заголовок сайта (hero),
- блок с товарами или услугами,
- отзывы клиентов,
- форма подписки,
- футер и т.д.

Обычно каждая секция:
- имеет **внутренние отступы** (чтобы контент не прилипал к краям),
- имеет **фон**, отличающий её от других блоков,
- идёт **одна за другой по вертикали**.

---

## Что такое CSS-паттерны?

**CSS-паттерны** — это **повторяющиеся, удобные решения** для типичных задач верстки. Например:
- как устроены карточки товаров,
- как выравнивать блоки внутри секции,
- какие отступы и стили применяются ко всем секциям.

Использование паттернов:
- делает код **предсказуемым** и **однородным**,
- помогает быстрее собирать страницы,
- упрощает работу в команде и масштабирование проекта.

---

## Пример структуры страницы

\`\`\`html
<body>
  <section class="hero">Баннер</section>
  <section class="features">Преимущества</section>
  <section class="products">Карточки товаров</section>
  <section class="footer">Футер</section>
</body>
\`\`\`

Каждая \`section\` — это **паттерн секции**. Мы задаём общие стили для всех секций, а также стили для каждой конкретной.

---

## Отступы между секциями

Чтобы секции не сливались, им задают:
- **внутренние отступы**: \`padding\`,
- **внешние отступы между собой**: \`margin-top\`.

\`\`\`css
section {
  padding: 60px 20px;
}

section + section {
  margin-top: 40px;
}
\`\`\`

---

## Паттерн: карточки в секции

Внутри секции часто размещают **карточки** с помощью Flex или Grid.

Пример: блок с тремя карточками товаров

\`\`\`html
<section class="products">
  <div class="card">Товар 1</div>
  <div class="card">Товар 2</div>
  <div class="card">Товар 3</div>
</section>
\`\`\`

\`\`\`css
.products {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
}
\`\`\`

---

## Почему важно использовать паттерны?

 Делает макет **согласованным и профессиональным**  
 Позволяет переиспользовать блоки и стили  
 Упрощает поддержку и масштабирование  
 Облегчает работу в команде

`.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="hero">
    <h1>Добро пожаловать</h1>
    <p>Это баннер</p>
  </section>
  <section class="products">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
  </section>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
body {
  margin: 0;
  font-family: sans-serif;
  background: #f9f9f9;
}

section {
  padding: 60px 20px;
}

section + section {
  margin-top: 40px;
}

.hero {
  background: #1976d2;
  color: white;
  text-align: center;
}

.products {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}
  `.trim(),

  resources: [
    "https://css-tricks.com/building-card-components-with-flexbox/",
    "https://html5book.ru/osnovy-flexbox/",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/section",
  ],
};
