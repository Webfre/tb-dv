export const css_preprocessors_1 = {
  id: "css_preprocessors_1",
  title: "Что такое препроцессоры и зачем они нужны",
  content: `
  ## Что такое CSS-препроцессор?

  CSS-препроцессор — это специальный инструмент, который **расширяет возможности обычного CSS**.

  Ты пишешь код на удобном языке (например, SCSS),  
  а он **компилируется в обычный CSS**, который понимает браузер.

  ---

  ## Зачем нужен препроцессор?

  В обычном CSS **не хватает**:

  - переменных
  - повторного использования кода
  - модульности
  - вложенности селекторов
  - математических выражений

  Препроцессоры решают всё это.

  ---

  ## Пример: SCSS vs CSS

   SCSS (препроцессор):

  \`\`\`scss
  $main-color: #3498db;

  .button {
    background: $main-color;
    color: white;

    &:hover {
      background: darken($main-color, 10%);
    }
  }
  \`\`\`

   CSS (что получится после компиляции):

  \`\`\`css
  .button {
    background: #3498db;
    color: white;
  }

  .button:hover {
    background: #2a80b9;
  }
  \`\`\`

  ---

  ## Популярные препроцессоры

  | Название | Формат | Комментарий             |
  |----------|--------|--------------------------|
  | SCSS     | .scss  | Самый популярный         |
  | Sass     | .sass  | Без фигурных скобок и точек с запятой |
  | Less     | .less  | Раньше использовался с Bootstrap 3 |
  | Stylus   | .styl  | Гибкий, но менее распространён |

   На практике чаще всего используют **SCSS**, так как он **максимально похож на обычный CSS**, но даёт больше возможностей.

  ---

  ## Как использовать SCSS?

  Ты не можешь напрямую подключить .scss в HTML — нужен **сборщик**:

  - в React-проектах SCSS уже работает из коробки (если подключен Sass)
  - можно использовать **Vite**, **Webpack** или **Live Sass Compiler** (в VSCode)

  Пример подключения в React:

  \`\`\`tsx
  import './Button.scss';
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Это просто пример результата компиляции SCSS */
    .button {
      background: #3498db;
      color: white;
    }

    .button:hover {
      background: #2a80b9;
    }
  </style>
</head>
<body>
  <button class="button">Купить</button>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.button {
  background: #3498db;
  color: white;
}

.button:hover {
  background: #2a80b9;
}
  `.trim(),

  resources: [
    "https://sass-lang.com/guide",
    "https://htmlacademy.ru/blog/css/scss-sass-for-beginners",
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_preprocessors",
  ],
};
export const css_preprocessors_2 = {
  id: "css_preprocessors_2",
  title: "Основы SCSS: переменные, вложенность, миксины",
  content: `
  ## Основы SCSS — как писать код быстрее и чище

  SCSS добавляет в CSS **новые возможности**, которые делают стили более гибкими и удобными в поддержке.

  Вот самые важные из них 👇

  ---

  ### 1. Переменные: \`$\`

  Позволяют сохранять значения (цвета, размеры и т.д.) в именованные переменные:

  \`\`\`scss
  $main-color: #4caf50;
  $padding: 20px;

  .card {
    background: $main-color;
    padding: $padding;
  }
  \`\`\`

  ---  

  ### 2. Вложенность

  SCSS позволяет писать **вложенные селекторы**, как в HTML:

  \`\`\`scss
  .nav {
    background: #eee;

    ul {
      list-style: none;
      padding: 0;

      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
  \`\`\`

  Это удобно, но **не стоит делать вложенность слишком глубокой** (максимум 2–3 уровня).

  ---  

  ### 3. Миксины

  Миксин — это как функция: можно задать повторяющийся стиль и вызывать его сколько угодно раз.

  \`\`\`scss
  @mixin rounded($radius) {
    border-radius: $radius;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .button {
    @include rounded(10px);
    padding: 10px 20px;
    background: #007bff;
    color: white;
  }
  \`\`\`

  ---  

  ### 4. Импорт частичных файлов

  SCSS позволяет разбить код на части:

  \`\`\`scss
  // _variables.scss
  $font-size: 16px;

  // main.scss
  @import 'variables';

  body {
    font-size: $font-size;
  }
  \`\`\`

  Позже (в SCSS 1.23+) лучше использовать \`@use\` вместо \`@import\`.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .button {
      background: #4caf50;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <button class="button">Применить</button>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.button {
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
  `.trim(),

  resources: [
    "https://sass-lang.com/guide",
    "https://htmlacademy.ru/blog/css/scss-syntax",
    "https://webref.ru/course/scss",
  ],
};
