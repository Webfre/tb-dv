export const scss_intro1 = {
  id: "scss_intro1",
  title: "Что такое SCSS",
  content: `
SCSS (Sassy CSS) — это **расширение CSS**, добавляющее новые возможности и удобства при написании стилей. SCSS полностью совместим с синтаксисом CSS: каждый допустимый CSS-файл является валидным SCSS-файлом.

### Почему SCSS?
- **Переменные**: возможность хранить цвета, размеры и повторяющиеся значения в переменных.
- **Вложенность**: писать вложенные селекторы вместо длинных цепочек.
- **Миксины и функции**: создавать повторно используемые фрагменты стилей.
- **Наследование (Extend)**: переиспользовать наборы свойств.
- **Операторы и вычисления**: выполнять математические операции прямо в стилях.
- **Директивы управления**: условные конструкции (\`@if\`), циклы (\`@for\`, \`@each\`, \`@while\`).
- **Работа со списками и картами**: гибкое хранение структурированных данных.

SCSS упрощает поддержку и масштабирование CSS-кода, особенно в крупных проектах.

---
### Основные особенности SCSS

1. **Совместимость с CSS**  
   Любой CSS-код можно переименовать в \`.scss\` и сразу же компилировать без изменений.

2. **Переменные**  
   Объявляются с помощью знака \`$\` и могут хранить любые значения (цвета, строки, числа, списки, карты).

3. **Вложенность**  
   Позволяет писать вложенные правила, которые компилируются в каскадные селекторы.

4. **Partials и \`@import\`**  
   Возможность разбивать стили на отдельные файлы (partials) и импортировать их в главный файл.

5. **Миксины (\`@mixin\` / \`@include\`)**  
   Функции, позволяющие инжектировать готовый блок свойств с передачей параметров.

6. **Функции**  
   Определять пользовательские функции, возвращающие значения для дальнейшего использования.

7. **Наследование (\`@extend\`)**  
   Позволяет одному селектору перенять набор свойств другого селектора.

8. **Операторы и вычисления**  
   Поддерживаются арифметические (\`+,-,*,/\`), сравнения, логические операции.

9. **Директивы управления потоком**  
   \`@if\`, \`@else if\`, \`@else\`, а также циклы: \`@for\`, \`@each\`, \`@while\`.

10. **Списки и карты**  
    В SCSS можно создавать и манипулировать сложными структурами данных (списки, карты).

---
### Как работает компиляция SCSS

1. Пишем файлы с расширением \`.scss\`.
2. С помощью препроцессора (например, Dart Sass, LibSass) компилируем SCSS в чистый CSS.
3. Подключаем скомпилированный CSS-файл к HTML, как обычно.

\`\`\`bash
# Пример команды компиляции:
sass src/styles/main.scss dist/styles/main.css --style compressed
\`\`\`
  `.trim(),
  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример SCSS</title>
  <link rel="stylesheet" href="main.scss">
</head>
<body>
  <h1 class="title">Заголовок</h1>
  <button class="btn">Нажми меня</button>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// main.scss

// 1. Переменные
$primary-color: #3498db;
$font-stack: 'Arial', sans-serif;

// 2. Вложенность
body {
  font-family: $font-stack;
  color: #333;

  .title {
    color: $primary-color;
    font-size: 2rem;
    text-align: center;
  }

  .btn {
    background-color: $primary-color;
    border: none;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/syntax#scss",
    "https://developer.mozilla.org/ru/docs/Web/CSS/Sass",
  ],
};
export const scss_intro2 = {
  id: "scss_intro2",
  title: "Установка и настройка окружения",
  content: `
Перед тем, как начать писать SCSS, необходимо настроить инструменты для компиляции.

### 1. Установка Dart Sass
Dart Sass — официальный компилятор SCSS, написанный на Dart. Рекомендуется для большинства проектов.

\`\`\`bash
# Установка через npm (если установлен Node.js)
npm install -g sass
\`\`\`

Проверка установки:
\`\`\`bash
sass --version
\`\`\`

### 2. Структура проектов с SCSS

Обычно используется следующая структура:
\`\`\`
project/
│
├── src/
│   └── scss/
│       ├── _variables.scss   // Partial для переменных
│       ├── _mixins.scss      // Partial для миксинов
│       ├── _base.scss        // Базовые стили (ресеты, типографика)
│       ├── _layout.scss      // Стили для сетки/раскладки
│       ├── _components.scss  // Стили отдельных компонентов
│       └── main.scss         // Главный файл, собирающий все partials
│
└── dist/
    └── css/
        └── main.css          // Сюда будет компилироваться результат
\`\`\`

### 3. Настройка сборщика

Для удобства можно настроить watch-режим:
\`\`\`bash
sass --watch src/scss/main.scss:dist/css/main.css
\`\`\`
При изменении SCSS-файлов они будут автоматически компилироваться в CSS.

Можно интегрировать SCSS в сборщики (Webpack, Gulp, Parcel):
- **Webpack**: использовать \`sass-loader\`, \`css-loader\`, \`style-loader\`.
- **Gulp**: плагин \`gulp-sass\`.
- **Parcel/Vite**: из коробки поддерживают SCSS.

---
### Практические советы

- **Не забывайте про partials**: разбивайте код на логические части (_variables, _mixins, _components и т.д.).
- **Следите за порядком импортов**: правильно подключайте сначала переменные, потом миксины, затем базовые и компонентные стили.
- **Компрессия**: для продакшена используйте опцию \`--style compressed\` или настройку в сборщике.
  `.trim(),
  codeExample: `
# Структура проекта (пример)
project/
├── src/
│   └── scss/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _base.scss
│       ├── _layout.scss
│       ├── _components.scss
│       └── main.scss
└── dist/
    └── css/
        └── main.css
  `.trim(),
  codeExampleSCSS: `
// src/scss/main.scss

// Подключаем переменные и миксины
@import 'variables';
@import 'mixins';

// Базовые стили
@import 'base';

// Сетки и расположение
@import 'layout';

// Стили компонентов
@import 'components';
  `.trim(),
  resources: [
    "https://sass-lang.com/install",
    "https://webpack.js.org/loaders/sass-loader/",
    "https://gulpjs.com/plugins/gulp-sass/",
  ],
};
