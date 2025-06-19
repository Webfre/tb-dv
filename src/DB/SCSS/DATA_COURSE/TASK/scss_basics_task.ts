export const scss_basics_task_1 = {
  id: "scss_basics_task_1",
  module: "SCSS",
  title: "Использование переменных для базовых стилей",
  topic: "Переменные в SCSS",
  topicId: "scss_basics",
  sectionId: "scss_basics1",
  description:
    "Создайте HTML-документ и SCSS-файл, где все основные цвета, отступы и шрифты задаются через переменные. Примените переменные к тегам `body`, `h1` и `p`.",
  steps: [
    "Создайте файл `index.html` с базовой структурой HTML (doctype, `<head>`, `<body>`).",
    "В папке `scss/` создайте файл `_variables.scss` и объявите в нём три переменные: `$primary-color`, `$text-color` и `$base-spacing`.",
    "Задайте значения переменным: например, `$primary-color: #3498db;`, `$text-color: #333;`, `$base-spacing: 1rem;`.",
    "Создайте файл `styles.scss` рядом с `_variables.scss` и подключите в нём partial с переменными через `@import 'variables';`.",
    "Внутри `styles.scss` задайте стили для `body` (фон, шрифт): используйте переменные `$text-color` для цвета текста и `$base-spacing` для внутреннего отступа.",
    "Задайте стиль для `h1`, используя `$primary-color` для цвета заголовка и отступ снизу в ` $base-spacing * 2`.",
    "Задайте стиль для `p`, используя `$text-color` для текста и отступ сверху `$base-spacing`.",
    "Скомпилируйте SCSS в CSS командой `sass scss/styles.scss css/styles.css` и подключите `css/styles.css` в `index.html`.",
    "Откройте `index.html` в браузере и убедитесь, что все цвета и отступы применяются согласно переменным.",
  ],
  difficulty: 1,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Переменные SCSS: Базовые стили</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <h1>Заголовок страницы</h1>
  <p>Это абзац текста, стилизованный с помощью переменных SCSS.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Переменные SCSS: Базовые стили</title>
  <style>
    /* Скомпилированный css/styles.css */
    body {
      color: #333;
      font-family: Arial, sans-serif;
      padding: 1rem;
      background: #fafafa;
    }
    h1 {
      color: #3498db;
      margin-bottom: 2rem;
    }
    p {
      color: #333;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h1>Заголовок страницы</h1>
  <p>Это абзац текста, стилизованный с помощью переменных SCSS.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
<!-- scss/_variables.scss -->
$primary-color: #3498db;
$text-color: #333;
$base-spacing: 1rem;

<!-- scss/styles.scss -->
@import 'variables';

body {
  color: $text-color;
  font-family: Arial, sans-serif;
  padding: $base-spacing;
  background: #fafafa;
}

h1 {
  color: $primary-color;
  margin-bottom: $base-spacing * 2;
}

p {
  color: $text-color;
  margin-top: $base-spacing;
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/variables",
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Variables",
  ],
};
export const scss_basics_task_2 = {
  id: "scss_basics_task_2",
  module: "SCSS",
  title: "Вычисления и вложенные переменные",
  topic: "Переменные в SCSS",
  topicId: "scss_basics",
  sectionId: "scss_basics1",
  description:
    "Создайте адаптивный контейнер с максимальной шириной, вычисляемой с учётом боковых отступов. Используйте вложенные переменные для определения размеров и примените их к блоку `.container`. Сделайте заголовок внутри контейнера, который наследует цвет из вложенной переменной.",
  steps: [
    "В папке `scss/` создайте файл `_variables.scss` и объявите переменные: `$container-max: 1200px;`, `$side-gutter: 20px;`, `$font-size-base: 16px;`, `$line-height: 1.5;`.",
    "Добавьте вложенную переменную `$text-size: $font-size-base * $line-height;` (пример вложенных переменных).",
    "В `styles.scss` подключите `_variables.scss` через `@import 'variables';`.",
    "Создайте класс `.container` и задайте ему `width: $container-max - ($side-gutter * 2);`, `max-width: 100%;`, `margin: 0 auto;`.",
    "Внутри `.container` объявите вложенный селектор `h1` и задайте ему `font-size: $text-size;` и `color: darken(#3498db, 10%);`.",
    "Скомпилируйте SCSS в CSS (`sass scss/styles.scss css/styles.css`).",
    'Создайте `index.html`, подключите `css/styles.css`, поместите внутри `<body>` `<div class="container"><h1>Заголовок</h1><p>Текст внутри контейнера</p></div>`. ',
    "Откройте страницу и проверьте, что контейнер имеет корректную ширину с учётом боковых отступов, а заголовок отображается размером, вычисленным из вложенной переменной.",
  ],
  difficulty: 2,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Вычисления и вложенные переменные SCSS</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <div class="container">
    <h1>Заголовок</h1>
    <p>Текст внутри контейнера.</p>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Вычисления и вложенные переменные SCSS</title>
  <style>
    .container {
      width: 1160px;
      max-width: 100%;
      margin: 0 auto;
      padding: 20px;
    }
    .container h1 {
      font-size: 24px;
      color: #2c76b8;
      margin-bottom: 16px;
    }
    .container p {
      font-size: 16px;
      line-height: 1.5;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Заголовок</h1>
    <p>Текст внутри контейнера.</p>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
<!-- scss/_variables.scss -->
$container-max: 1200px;
$side-gutter: 20px;
$font-size-base: 16px;
$line-height: 1.5;
$text-size: $font-size-base * $line-height; // вложенная переменная

<!-- scss/styles.scss -->
@import 'variables';

.container {
  width: $container-max - ($side-gutter * 2);
  max-width: 100%;
  margin: 0 auto;
  padding: $side-gutter;

  h1 {
    font-size: $text-size;
    color: darken(#3498db, 10%);
    margin-bottom: $font-size-base;
  }

  p {
    font-size: $font-size-base;
    line-height: $line-height;
    color: #555;
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/variables",
    "https://sass-lang.com/documentation/operators",
  ],
};
export const scss_basics_task_3 = {
  id: "scss_basics_task_3",
  module: "SCSS",
  title: "Вёрстка двух секций с переменными, вложенностью и миксинами",
  topic: "Переменные в SCSS",
  topicId: "scss_basics",
  sectionId: "scss_basics1",
  description:
    "Создайте HTML-страницу с двумя секциями: «Заголовок» (hero) и «Список услуг» (services). Используйте SCSS, чтобы задать переменные для основных цветов и отступов, применить вложенность для стилизации элементов и создать миксин для кнопок. Разбейте SCSS на partials (_variables, _mixins, _layout) и импортируйте их в главный файл. Сделайте так, чтобы секции корректно отображались на экранах любого размера.",
  steps: [
    "Создайте папку `scss/` и внутри неё три partial-файла: `_variables.scss`, `_mixins.scss`, `_layout.scss`.",
    "В `_variables.scss` объявите переменные: `$primary-color`, `$secondary-color`, `$text-color`, `$base-spacing` (например, `$primary-color: #2c3e50;`, `$secondary-color: #e74c3c;`, `$text-color: #333;`, `$base-spacing: 1.5rem;`).",
    "В `_mixins.scss` создайте миксин `button-styles`, который принимает два аргумента: `$bg-color` и `$text-color`, и задаёт стандартные свойства кнопки (фоновый цвет, цвет текста, отступы, рамку, скругление и hover-эффект, использующий `darken`).",
    "В `_layout.scss` напишите стили для двух секций: `.hero` и `.services`. Для каждой секции задайте внутренние отступы через переменную `$base-spacing`. Используйте вложенность: внутри `.hero` стилизуйте заголовок `<h1>` и кнопку, а внутри `.services` — стилизуйте заголовок `<h2>` и список `.service-list` с элементами `.service-item`.",
    "Создайте файл `styles.scss` рядом с partials и импортируйте их в порядке: `@import 'variables'; @import 'mixins'; @import 'layout';`.",
    "Скомпилируйте `scss/styles.scss` в `css/styles.css` (например, `sass scss/styles.scss css/styles.css`).",
    'Создайте `index.html` и подключите `css/styles.css`. Внутри `<body>` разместите две секции: \n  1. `<section class="hero">` с `<h1>Добро пожаловать</h1>` и `<a href="#" class="btn">Узнать больше</a>`;\n  2. `<section class="services">` с `<h2>Наши услуги</h2>` и `<ul class="service-list">` с тремя `<li class="service-item">` (название услуги и небольшое описание).',
    "Убедитесь, что на узком экране `.hero` и `.services` остаются отзывчивыми: заголовки центрируются, список услуг располагается вертикально.",
    "Проверьте работу hover-эффекта кнопки (цвет затемняется на 10%).",
  ],
  difficulty: 3,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Практика SCSS: Две секции</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <section class="hero">
    <h1>Добро пожаловать</h1>
    <a href="#" class="btn">Узнать больше</a>
  </section>

  <section class="services">
    <h2>Наши услуги</h2>
    <ul class="service-list">
      <li class="service-item">
        <h3>Веб-дизайн</h3>
        <p>Создание современного и адаптивного интерфейса для вашего сайта.</p>
      </li>
      <li class="service-item">
        <h3>Разработка</h3>
        <p>Качественная front-end и back-end разработка под любые задачи.</p>
      </li>
      <li class="service-item">
        <h3>SEO-оптимизация</h3>
        <p>Повышение видимости вашего ресурса в поисковых системах.</p>
      </li>
    </ul>
  </section>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Практика SCSS: Две секции</title>
  <style>
    /* css/styles.css (скомпилированный) */
    $primary-color: #2c3e50;
    $secondary-color: #e74c3c;
    $text-color: #333;
    $base-spacing: 1.5rem;

    .hero {
      background: #2c3e50;
      color: #fff;
      text-align: center;
      padding: 3rem;
    }
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    .hero .btn {
      display: inline-block;
      background-color: #e74c3c;
      color: #fff;
      padding: 1rem 3rem;
      text-decoration: none;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      transition: background-color 0.2s ease;
    }
    .hero .btn:hover {
      background-color: #c0392b;
    }

    .services {
      background: #f9f9f9;
      color: #333;
      padding: 3rem;
    }
    .services h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2.25rem;
    }
    .services .service-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .services .service-item {
      background: #fff;
      border: 1px solid #aac4d9;
      border-radius: 4px;
      padding: 1.5rem;
      max-width: 300px;
      width: 100%;
    }
    .services .service-item h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: #2c3e50;
    }
    .services .service-item p {
      font-size: 1rem;
      line-height: 1.5;
      color: #333;
    }

    @media (max-width: 768px) {
      .services .service-list {
        flex-direction: column;
        align-items: center;
      }
      .services .service-item {
        width: 90%;
      }
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Добро пожаловать</h1>
    <a href="#" class="btn">Узнать больше</a>
  </section>

  <section class="services">
    <h2>Наши услуги</h2>
    <ul class="service-list">
      <li class="service-item">
        <h3>Веб-дизайн</h3>
        <p>Создание современного и адаптивного интерфейса для вашего сайта.</p>
      </li>
      <li class="service-item">
        <h3>Разработка</h3>
        <p>Качественная front-end и back-end разработка под любые задачи.</p>
      </li>
      <li class="service-item">
        <h3>SEO-оптимизация</h3>
        <p>Повышение видимости вашего ресурса в поисковых системах.</p>
      </li>
    </ul>
  </section>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* scss/_variables.scss */
$primary-color: #2c3e50;
$secondary-color: #e74c3c;
$text-color: #333;
$base-spacing: 1.5rem;

/* scss/_mixins.scss */
@mixin button-styles($bg-color, $text-color) {
  display: inline-block;
  background-color: $bg-color;
  color: $text-color;
  padding: $base-spacing / 1.5 $base-spacing * 2;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

/* scss/_layout.scss */
@import 'variables';
@import 'mixins';

.hero {
  background: $primary-color;
  color: #fff;
  text-align: center;
  padding: $base-spacing * 2;

  h1 {
    font-size: 2.5rem;
    margin-bottom: $base-spacing;
  }

  .btn {
    @include button-styles($secondary-color, #fff);
  }
}

.services {
  background: #f9f9f9;
  color: $text-color;
  padding: $base-spacing * 2;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: $base-spacing * 1.5;
  }

  .service-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: $base-spacing;
    flex-wrap: wrap;
    justify-content: center;

    .service-item {
      background: #fff;
      border: 1px solid lighten($primary-color, 40%);
      border-radius: 4px;
      padding: $base-spacing;
      max-width: 300px;
      width: 100%;

      h3 {
        font-size: 1.25rem;
        margin-bottom: $base-spacing / 2;
        color: $primary-color;
      }

      p {
        font-size: 1rem;
        line-height: 1.5;
        color: $text-color;
      }
    }
  }
}

@media (max-width: 768px) {
  .services {
    .service-list {
      flex-direction: column;
      align-items: center;

      .service-item {
        width: 90%;
      }
    }
  }
}

/* scss/styles.scss */
@import 'variables';
@import 'mixins';
@import 'layout';
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/variables",
    "https://sass-lang.com/documentation/at-rules/mixin",
    "https://sass-lang.com/documentation/style-rules/nesting",
  ],
};
export const scss_basics_task_4 = {
  id: "scss_basics_task_4",
  module: "SCSS",
  title: "Практика вложенности: карточки и навигация",
  topic: "Вложенность селекторов",
  topicId: "scss_basics",
  sectionId: "scss_basics2",
  description:
    "Создайте HTML-страницу с двумя блоками: карточкой товара и навигацией. Используя вложенность в SCSS, оформите их следующим образом: карточка должна содержать изображение, заголовок и описание, а навигация — список ссылок. Пары уровней вложенности не должны превышать трёх.",
  steps: [
    'Создайте файл `index.html` с секцией `<div class="product-card">` и секцией `<nav class="site-nav">`.',
    "Внутри `.product-card` разместите `<img>` с классом `product-card__image`, `<h3>` с классом `product-card__title` и `<p>` с классом `product-card__desc`.",
    'Внутри `<nav class="site-nav">` разместите `<ul class="site-nav__list">` и три `<li class="site-nav__item">`, внутри каждого — `<a class="site-nav__link">`.',
    "Создайте файл `styles.scss` и объявите переменную `$card-border-color: #ccc;` в начале.",
    "В `styles.scss` опишите блок `.product-card`:\n  • задайте границу `1px solid $card-border-color` и скругление `4px`;\n  • вложите внутри него `.product-card__image`, задав ширину `100%`;\n  • вложите `.product-card__title`, задав размер шрифта `1.25rem` и отступ снизу `0.5rem`;\n  • вложите `.product-card__desc`, задав цвет текста `#555` и межстрочный интервал `1.4`.",
    "В том же `styles.scss` опишите блок `.site-nav`:\n  • вложите `.site-nav__list` и уберите маркеры списка, сделав `display: flex; gap: 1rem;`;\n  • вложите `.site-nav__item`, чтобы у ссылок не было подчёркивания;\n  • вложите `.site-nav__link`, задав цвет `#333` и при ховере (`&:hover`) меняйте цвет на тёмно-синий (`#2c3e50`).",
    "Убедитесь, что ни в одном селекторе вложенность не выходит за пределы трёх уровней (например, `.product-card .product-card__title` — два уровня).",
    "Скомпилируйте SCSS в CSS (`sass styles.scss styles.css`) и подключите в `index.html`.",
    "Откройте страницу в браузере и проверьте корректность отображения карточки и навигации.",
  ],
  difficulty: 2,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Вложенность: Карточка и Навигация</title>
  <link rel="stylesheet" href="styles.css" />
 
</head>
<body>
  <div class="product-card">
    <img src="product.jpg" alt="Товар" class="product-card__image" />
    <h3 class="product-card__title">Название товара</h3>
    <p class="product-card__desc">Короткое описание товара с ключевыми свойствами.</p>
  </div>

  <nav class="site-nav">
    <ul class="site-nav__list">
      <li class="site-nav__item"><a href="#" class="site-nav__link">Главная</a></li>
      <li class="site-nav__item"><a href="#" class="site-nav__link">Каталог</a></li>
      <li class="site-nav__item"><a href="#" class="site-nav__link">Контакты</a></li>
    </ul>
  </nav>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Вложенность: Карточка и Навигация</title>
  <link rel="stylesheet" href="styles.css" />
     <style>
 .product-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
  overflow: hidden;
}
.product-card__image {
  width: 100%;
  display: block;
}
.product-card__title {
  font-size: 1.25rem;
  margin: 0.5rem;
}
.product-card__desc {
  color: #555;
  line-height: 1.4;
  margin: 0.5rem;
}
.site-nav {
  margin-top: 2rem;
}
.site-nav__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}
.site-nav__link {
  text-decoration: none;
  color: #333;
}
.site-nav__link:hover {
  color: #2c3e50;
}
  </style>
</head>
<body>
  <div class="product-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOKw_u57YuVGgQFs5C1wav51xH-vI0MwRbA&s" alt="Товар" class="product-card__image" />
    <h3 class="product-card__title">Название товара</h3>
    <p class="product-card__desc">Короткое описание товара с ключевыми свойствами.</p>
  </div>

  <nav class="site-nav">
    <ul class="site-nav__list">
      <li class="site-nav__item"><a href="#" class="site-nav__link">Главная</a></li>
      <li class="site-nav__item"><a href="#" class="site-nav__link">Каталог</a></li>
      <li class="site-nav__item"><a href="#" class="site-nav__link">Контакты</a></li>
    </ul>
  </nav>
</body>
</html>`.trim(),
  codeExampleCSS: `
$nav-bg: #2c3e50;
$nav-link-color: #fff;
$submenu-bg: #34495e;
$card-border: #ccc;
$card-active-bg: #f1c40f;

.main-nav {
  background: $nav-bg;
  position: relative;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  &__item {
    position: relative;

    & .main-nav__link {
      display: block;
      padding: 1rem 1.5rem;
      color: $nav-link-color;
      text-decoration: none;
    }

    &:hover .main-nav__submenu {
      display: block;
    }

    &__submenu {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 100%;
      left: 0;
      background: $submenu-bg;
      display: none;

      &-item {
        & .main-nav__submenu-link {
          display: block;
          padding: 0.75rem 1rem;
          color: $nav-link-color;
          text-decoration: none;
        }

        & .main-nav__submenu-link:hover {
          background: darken($submenu-bg, 10%);
        }
      }
    }
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/style-rules/nesting",
    "https://developer.mozilla.org/ru/docs/Web/HTML",
  ],
};
export const scss_basics_task_5 = {
  id: "scss_basics_task_5",
  module: "SCSS",
  title: "Глубокая вложенность: меню и карточки с модификаторами",
  topic: "Вложенность селекторов",
  topicId: "scss_basics",
  sectionId: "scss_basics2",
  description:
    "Создайте сложный макет: горизонтальное меню с выпадающими подменю и сетку карточек с модификаторами активного состояния. Используйте вложенность не более чем в четыре уровня. Примените псевдоклассы и BEM-модификаторы.",
  steps: [
    'Создайте `index.html` с `<nav class="main-nav">` и блоком `<div class="card-grid">`.',
    'Внутри `.main-nav` создайте `<ul class="main-nav__list">` с тремя `<li class="main-nav__item">`. У одного из пунктов создайте вложенный `<ul class="main-nav__submenu">` с двумя `<li class="main-nav__submenu-item">` (это выпадающее меню).',
    'В блоке `.card-grid` создайте четыре `<div class="card">` с модификатором `.card--active` у первой карточки.',
    "В `styles.scss` объявите переменные: `$nav-bg`, `$nav-link-color`, `$submenu-bg`, `$card-border`, `$card-active-bg`.",
    "Опишите в SCSS вложенность для `.main-nav`:\n  • задайте фон `$nav-bg`;\n  • вложите `.main-nav__list` (display: flex;);\n  • вложите `.main-nav__item` и внутри него `.main-nav__link` с цветом `$nav-link-color`;\n  • для `.main-nav__item:hover .main-nav__submenu` сделайте подменю видимым;\n  • вложите `.main-nav__submenu` и задайте ему `position: absolute; background: $submenu-bg; display: none;`;\n  • вложите `.main-nav__submenu-item .main-nav__submenu-link` и задайте цвет и padding.",
    "Опишите в SCSS вложенность для `.card-grid`:\n  • задайте `display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;`;\n  • вложите `.card` и задайте `border: 1px solid $card-border; padding: 1rem; border-radius: 4px; background: #fff;`;\n  • вложите модификатор `.card--active` и задайте фон `$card-active-bg`;\n  • вложите `.card__title` и `.card__desc` внутри `.card`.",
    "Убедитесь, что меню с подменю появляется при наведении, а карточка с модификатором выглядит иначе.",
    "Скомпилируйте SCSS в CSS (`sass styles.scss styles.css`) и подключите в `index.html`.",
    "Проверьте макет в браузере на широком и узком экранах: подменю должно появляться корректно, карточки — в сетке 2×2.",
  ],
  difficulty: 3,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Глубокая вложенность: Меню и Карточки</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Главная</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Услуги</a>
        <ul class="main-nav__submenu">
          <li class="main-nav__submenu-item">
            <a href="#" class="main-nav__submenu-link">Дизайн</a>
          </li>
          <li class="main-nav__submenu-item">
            <a href="#" class="main-nav__submenu-link">Разработка</a>
          </li>
        </ul>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Контакты</a>
      </li>
    </ul>
  </nav>

  <div class="card-grid">
    <div class="card card--active">
      <h3 class="card__title">Карточка 1</h3>
      <p class="card__desc">Описание активной карточки.</p>
    </div>
    <div class="card">
      <h3 class="card__title">Карточка 2</h3>
      <p class="card__desc">Описание карточки 2.</p>
    </div>
    <div class="card">
      <h3 class="card__title">Карточка 3</h3>
      <p class="card__desc">Описание карточки 3.</p>
    </div>
    <div class="card">
      <h3 class="card__title">Карточка 4</h3>
      <p class="card__desc">Описание карточки 4.</p>
    </div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Глубокая вложенность: Меню и Карточки</title>
  <style>
    /* Скомпилированный CSS */
    .main-nav {
      background: #2c3e50;
      position: relative;
    }
    .main-nav__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    .main-nav__item {
      position: relative;
    }
    .main-nav__item .main-nav__link {
      display: block;
      padding: 1rem 1.5rem;
      color: #fff;
      text-decoration: none;
    }
    .main-nav__item:hover .main-nav__submenu {
      display: block;
    }
    .main-nav__item__submenu {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 100%;
      left: 0;
      background: #34495e;
      display: none;
    }
    .main-nav__item__submenu-item .main-nav__submenu-link {
      display: block;
      padding: 0.75rem 1rem;
      color: #fff;
      text-decoration: none;
    }
    .main-nav__item__submenu-item .main-nav__submenu-link:hover {
      background: #2c3e50;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-top: 2rem;
    }
    .card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 4px;
      background: #fff;
    }
    .card--active {
      background: #f1c40f;
    }
    .card__title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    .card__desc {
      color: #555;
      line-height: 1.4;
    }

    @media (max-width: 600px) {
      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Главная</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Услуги</a>
        <ul class="main-nav__submenu">
          <li class="main-nav__submenu-item"><a href="#" class="main-nav__submenu-link">Дизайн</a></li>
          <li class="main-nav__submenu-item"><a href="#" class="main-nav__submenu-link">Разработка</a></li>
        </ul>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Контакты</a>
      </li>
    </ul>
  </nav>

  <div class="card-grid">
    <div class="card card--active">
      <h3 class="card__title">Карточка 1</h3>
      <p class="card__desc">Описание активной карточки.</p>
    </div>
    <div class="card">
      <h3 class="card__title">Карточка 2</h3>
      <p class="card__desc">Описание карточки 2.</p>
    </div>
    <div class="card">
      <h3 class="card__title">Карточка 3</h3>
      <p class="card__desc">Описание карточки 3.</p>
    </div>
    <div class="card">
      <h3 class="card__title">Карточка 4</h3>
      <p class="card__desc">Описание карточки 4.</p>
    </div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
<!-- styles.scss -->
$nav-bg: #2c3e50;
$nav-link-color: #fff;
$submenu-bg: #34495e;
$card-border: #ccc;
$card-active-bg: #f1c40f;

.main-nav {
  background: $nav-bg;
  position: relative;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  &__item {
    position: relative;

    & .main-nav__link {
      display: block;
      padding: 1rem 1.5rem;
      color: $nav-link-color;
      text-decoration: none;
    }

    &:hover .main-nav__submenu {
      display: block;
    }

    &__submenu {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 100%;
      left: 0;
      background: $submenu-bg;
      display: none;

      &-item {
        & .main-nav__submenu-link {
          display: block;
          padding: 0.75rem 1rem;
          color: $nav-link-color;
          text-decoration: none;
        }

        & .main-nav__submenu-link:hover {
          background: darken($submenu-bg, 10%);
        }
      }
    }
  }
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  .card {
    border: 1px solid $card-border;
    padding: 1rem;
    border-radius: 4px;
    background: #fff;

    &--active {
      background: $card-active-bg;
    }

    &__title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    &__desc {
      color: #555;
      line-height: 1.4;
    }
  }
}

@media (max-width: 600px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/style-rules/nesting",
    "https://en.bem.info/methodology/naming-convention/",
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout",
  ],
};
export const scss_basics_task_6 = {
  id: "scss_basics_task_6",
  module: "SCSS",
  title: "Организация стилей с partials и @import",
  topic: "Partials и @import",
  topicId: "scss_basics",
  sectionId: "scss_basics3",
  description:
    "Создайте простую страницу с хедером и кнопкой, используя SCSS-партиалы для переменных, стилей кнопок и стилей хедера. Настройте правильный порядок подключения partials и скомпилируйте в единый CSS.",
  steps: [
    "Создайте папку `scss/` и внутри неё три файла: `_variables.scss`, `_buttons.scss`, `_header.scss`.",
    "В `_variables.scss` объявите две переменные: `$header-bg: #2ecc71;` и `$button-color: #ffffff;`.",
    "В `_buttons.scss` создайте селектор `.btn` с фоном `$header-bg`, цветом `$button-color`, паддингом `0.5rem 1rem`, бордер-радиусом `4px` и при ховере (`&:hover`) затемняйте фон с помощью `darken($header-bg, 10%)`.",
    "В `_header.scss` опишите селектор `.site-header`, задав ему фон `$header-bg`, цвет текста `$button-color`, отступы `1rem`, и вложенный селектор `.site-header__title` с размером шрифта `1.5rem` и отступом снизу `0.5rem`.",
    "Создайте файл `main.scss` в той же папке и подключите partials в таком порядке: `@import 'variables'; @import 'buttons'; @import 'header';`.",
    "Скомпилируйте `scss/main.scss` в `css/main.css` командой `sass scss/main.scss css/main.css`.",
    'Создайте `index.html` и подключите `css/main.css`. Внутри `<body>` разместите `<header class="site-header"><h1 class="site-header__title">Мой сайт</h1><a href="#" class="btn">Кнопка</a></header>`.',
    "Откройте страницу в браузере и убедитесь, что хедер и кнопка стилизованы согласно переменным и partials.",
  ],
  difficulty: 2,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Partials и @import: Пример</title>
  <link rel="stylesheet" href="css/main.css" />
</head>
<body>
  <header class="site-header">
    <h1 class="site-header__title">Мой сайт</h1>
    <a href="#" class="btn">Кнопка</a>
  </header>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Partials и @import: Пример</title>
  <style>
    /* css/main.css (скомпилированный) */
    .btn {
      background-color: #2ecc71;
      color: #ffffff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      text-decoration: none;
      display: inline-block;
      transition: background-color 0.2s ease;
    }
    .btn:hover {
      background-color: #28b765;
    }
    .site-header {
      background-color: #2ecc71;
      color: #ffffff;
      padding: 1rem;
      text-align: center;
    }
    .site-header__title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  <header class="site-header">
    <h1 class="site-header__title">Мой сайт</h1>
    <a href="#" class="btn">Кнопка</a>
  </header>
</body>
</html>
  `.trim(),
  codeExampleCSS: `

<!-- scss/_variables.scss -->
$header-bg: #2ecc71;
$button-color: #ffffff;

<!-- scss/_buttons.scss -->
.btn {
  background-color: $header-bg;
  color: $button-color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($header-bg, 10%);
  }
}

<!-- scss/_header.scss -->
.site-header {
  background-color: $header-bg;
  color: $button-color;
  padding: 1rem;
  text-align: center;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

<!-- scss/main.scss -->
@import 'variables';
@import 'buttons';
@import 'header';
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/import",
    "https://sass-lang.com/documentation/variables",
    "https://sass-lang.com/documentation/style-rules/nesting",
  ],
};
export const scss_basics_task_7 = {
  id: "scss_basics_task_7",
  module: "SCSS",
  title: "Создание кнопки с помощью миксина",
  topic: "Миксины (@mixin) и @include",
  topicId: "scss_basics",
  sectionId: "scss_possibilities1",
  description:
    "Создайте HTML-страницу с одной кнопкой и SCSS-миксин, который станет облегчённым шаблоном для этой кнопки. Задача покажет, как объявлять и подключать миксин без дополнительных вложенных блоков.",
  steps: [
    'Создайте файл `index.html` с базовой структурой HTML и одной кнопкой `<button class="btn">Кнопка</button>`.',
    "Создайте папку `scss/` и внутри неё файл `_mixins.scss`.",
    "В `_mixins.scss` объявите миксин `@mixin simple-button($bg-color)`, который задаёт:\n   • `background-color: $bg-color;`\n   • `color: #fff;`\n   • `padding: 0.5rem 1rem;`\n   • `border: none; border-radius: 4px;`\n   • при наведении (`&:hover`) затемняет фон: `background-color: darken($bg-color, 10%);`.",
    "Создайте файл `styles.scss` рядом с `_mixins.scss` и подключите миксин через `@import 'mixins';`.",
    "В `styles.scss` опишите селектор `.btn { @include simple-button(#3498db); }`.",
    "Скомпилируйте SCSS в CSS: `sass scss/styles.scss css/styles.css`.",
    "Подключите `css/styles.css` в `index.html` и откройте страницу в браузере. Убедитесь, что кнопка имеет синий фон и затемняется при наведении.",
  ],
  difficulty: 1,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Простой миксин</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <button class="btn">Кнопка</button>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Простой миксин</title>
  <style>
    /* css/styles.css */
    .btn {
      background-color: #3498db;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .btn:hover {
      background-color: #2a7cb8;
    }
  </style>
</head>
<body>
  <button class="btn">Кнопка</button>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
<!-- scss/_mixins.scss -->
@mixin simple-button($bg-color) {
  background-color: $bg-color;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

<!-- scss/styles.scss -->
@import 'mixins';

.btn {
  @include simple-button(#3498db);
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/mixin",
    "https://sass-lang.com/functions/color#darken",
  ],
};
export const scss_basics_task_8 = {
  id: "scss_basics_task_8",
  module: "SCSS",
  title: "Миксин с @content: карточка товара",
  topic: "Миксины (@mixin) и @include",
  topicId: "scss_basics",
  sectionId: "scss_possibilities1",
  description:
    "Создайте HTML-страницу с карточкой товара (изображение, название, цена, кнопка). Напишите миксин с `@content` для стилизации `.card`, и используйте его в `.card`.",
  steps: [
    "Создайте `index.html` с карточкой товара: изображение, заголовок, цена и кнопка.",
    "В папке `scss/` создайте `_mixins.scss`, объявите миксин `@mixin card-wrapper($bg-color)` со стилями обёртки и `@content;` внутри.",
    "Создайте `styles.scss`, подключите миксин: `@import 'mixins';` и внутри `.card { @include card-wrapper(...) { ... } }` опишите стили вложенных элементов.",
    "Скомпилируйте SCSS: `sass scss/styles.scss css/styles.css`.",
    "Откройте `index.html` и убедитесь, что карточка отображается корректно.",
  ],
  difficulty: 2,
  solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Карточка товара</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="card">
    <img src="product.jpg" alt="Товар" class="card__image">
    <h3 class="card__title">Название товара</h3>
    <p class="card__price">9 990 ₽</p>
    <button class="card__button">Добавить в корзину</button>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Карточка товара</title><style>
.card {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.card__image { width:100%; display:block; margin-bottom:0.5rem; }
.card__title { margin:0.5rem 0; font-size:1.25rem; }
.card__price { margin:0.5rem 0; color:#e67e22; }
.card__button {
  padding:0.5rem 1rem; background:#3498db; color:#fff;
  border:none; border-radius:4px; cursor:pointer;
  transition:background-color .3s;
}
.card__button:hover { background:darken(#3498db,10%); }
</style></head><body>
  <div class="card">
    <img src="product.jpg" class="card__image" alt="Товар">
    <h3 class="card__title">Название товара</h3>
    <p class="card__price">9 990 ₽</p>
    <button class="card__button">Добавить в корзину</button>
  </div>
</body></html>
  `.trim(),
  codeExampleCSS: `
/* scss/_mixins.scss */
@mixin card-wrapper($bg-color) {
  background-color: $bg-color;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  @content;
}

/* scss/styles.scss */
@import 'mixins';

.card {
  @include card-wrapper(#f0f0f0) {
    &__image {
      width: 100%;
      display: block;
      margin-bottom: 0.5rem;
    }
    &__title {
      margin: 0.5rem 0;
      font-size: 1.25rem;
    }
    &__price {
      margin: 0.5rem 0;
      color: #e67e22;
    }
    &__button {
      padding: 0.5rem 1rem;
      background: #3498db;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color .3s;

      &:hover {
        background-color: darken(#3498db, 10%);
      }
    }
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/mixin",
    "https://sass-lang.com/documentation/at-rules/content",
  ],
};
