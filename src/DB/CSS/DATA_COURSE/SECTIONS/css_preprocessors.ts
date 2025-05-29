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
  <link rel="stylesheet" href="styles.css">
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
