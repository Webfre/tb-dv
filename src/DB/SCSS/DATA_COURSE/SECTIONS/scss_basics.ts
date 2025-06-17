export const scss_basics1 = {
  id: "scss_basics1",
  title: "Переменные в SCSS",
  content: `
Переменные — одна из ключевых возможностей SCSS, которая позволяет хранить повторяющиеся значения в одном месте и легко изменять их по всему проекту.

### Синтаксис объявления
\`$имя-переменной: значение;\`

Пример:
\`\`\`scss
$primary-color: #3498db;
$font-stack: 'Helvetica Neue', sans-serif;
$base-spacing: 16px;
\`\`\`

### Где использовать переменные
- **Цвета**: \`$primary-color\`, \`$secondary-color\`, \`$text-color\`  
- **Шрифты**: \`$font-stack\`, \`$base-font-size\`  
- **Отступы и размеры**: \`$base-spacing\`, \`$container-width\`  
- **Медиазапросы**: \`$breakpoint-mobile: 576px\`

### Пример использования
\`\`\`scss
$primary-color: #3498db;
$text-color: #333;
$base-spacing: 1rem;

body {
  font-family: $font-stack;
  color: $text-color;
  margin: 0;
  padding: $base-spacing;
}

h1 {
  color: $primary-color;
  margin-bottom: $base-spacing * 2;
}
\`\`\`

### Вычисления с переменными
SCSS поддерживает арифметику:
\`\`\`scss
$container-width: 1200px;
$gutter: 30px;

.container {
  width: $container-width - ($gutter * 2);
  margin: 0 auto;
}
\`\`\`

### Вложенные переменные
Переменные можно комбинировать:
\`\`\`scss
$font-size-base: 16px;
$line-height-base: 1.5;

$text-size: $font-size-base * $line-height-base;
\`\`\`
  `.trim(),
  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Переменные SCSS</title>
  <link rel="stylesheet" href="variables.scsss">
</head>
<body>
  <div class="container">
    <h1>Заголовок</h1>
    <p>Текст с переменными</p>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$primary-color: #e74c3c;
$text-color: #2c3e50;
$base-spacing: 1.5rem;
$container-width: 1024px;

// styles.scss
@import 'variables';

body {
  color: $text-color;
  padding: $base-spacing;

  .container {
    width: $container-width - ($base-spacing * 2);
    margin: 0 auto;

    h1 {
      color: $primary-color;
      margin-bottom: $base-spacing / 2;
    }

    p {
      font-size: $base-spacing;
      line-height: 1.6;
    }
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/variables",
    "https://webref.ru/course/sass/variables",
  ],
};
export const scss_basics2 = {
  id: "scss_basics2",
  title: "Вложенность селекторов",
  content: `
В CSS бывает неудобно поддерживать длинные цепочки селекторов, особенно когда структура HTML сложная или когда стили повторяются во многих местах. SCSS позволяет упростить и структурировать код с помощью вложенности, сохраняя при этом читаемость и понятность.

---

### Почему вложенность важна

1. **Читаемость**  
   Вложенность отражает иерархию HTML-структуры. Вместо того чтобы писать селекторы через пробелы, вы группируете правила в одном блоке, показывая «родителя» и «дочерние» элементы.

2. **Меньше повторений**  
   Повторяющиеся части селектора (например, класс родителя) можно не дублировать в каждом правиле, а писать один раз.

3. **Локальность стилей**  
   Вложенные правила применяются только к конкретному блоку, что снижает риск «протечек» стилей на другие части страницы.

---

### Синтаксис вложенности

#### Базовый пример
Вместо:
\`\`\`css
/* CSS */
.container .header .nav ul li a {
  color: #fff;
  text-decoration: none;
}
.container .header .nav ul li a:hover {
  text-decoration: underline;
}
\`\`\`
В SCSS можно написать так:
\`\`\`scss
/* SCSS */
.container {
  .header {
    .nav {
      ul {
        li {
          a {
            color: #fff;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
\`\`\`
Компилятор SCSS превратит это во множество CSS-правил:
\`\`\`css
/* Скомпилированный CSS */
.container .header .nav ul li a {
  color: #fff;
  text-decoration: none;
}
.container .header .nav ul li a:hover {
  text-decoration: underline;
}
\`\`\`

#### Объяснение
- \`.container { ... }\` — внешний блок.
- Внутри него \`.header { ... }\`, \`.nav { ... }\`, и так далее.
- Вложенный блок \`a { ... }\` генерирует селектор \`.container .header .nav ul li a\`.
- Символ \`&\` в \`&:hover\` означает «тот же селектор, на который указывает родитель» — получается \`.container .header .nav ul li a:hover\`.

---

### Parent Selector (\`&\`)

Символ \`&\` используется для указания текущего (родительского) селектора. Это полезно, когда нужно добавить псевдокласс, псевдоэлемент или составной селектор.

Примеры:

1. **Псевдоклассы/псевдоэлементы**
   \`\`\`scss
   .button {
     background: $primary-color;
     color: #fff;
     padding: 0.5rem 1rem;
     border: none;
     border-radius: 4px;
     cursor: pointer;

     &:hover {
       background: darken($primary-color, 10%);
     }

     &::after {
       content: '';
       display: block;
       width: 100%;
       height: 2px;
       background: rgba(0,0,0,0.1);
     }
   }
   \`\`\`
   - \`&:hover\` превратится в \`.button:hover\`.
   - \`&::after\` превратится в \`.button::after\`.

2. **Модификаторы BEM**
   Если вы используете методологию БЭМ (Блок-Элемент-Модификатор), можно добавлять модификаторы напрямую:
   \`\`\`scss
   .card {
     padding: 1rem;
     border: 1px solid #ccc;
     border-radius: 4px;
     background: #fff;

     &__title {
       font-size: 1.25rem;
       margin-bottom: 0.5rem;
     }

     &--highlighted {
       border-color: #f39c12;
       box-shadow: 0 2px 8px rgba(243, 156, 18, 0.3);
     }
   }
   \`\`\`
   - \`&__title\` создаёт селектор \`.card__title\`.
   - \`&--highlighted\` создаёт селектор \`.card--highlighted\`.

---

### Вложенность с псевдоклассами и псевдоэлементами

Часто нужно стилизовать состояние элемента, например при наведении (\`:hover\`), активном состоянии (\`:active\`), или добавить содержимое через псевдоэлемент (\`::before\`, \`::after\`).

Пример:
\`\`\`scss
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  position: relative;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, #3498db, #9b59b6);
  }
}
\`\`\`
- При наведении \`.card:hover\` добавляется тень.
- Псевдоэлемент \`.card::after\` создаёт цветной индикатор снизу карточки.

---

### Лучшие практики и ограничения вложенности

1. **Не более 3–4 уровней вложенности**  
   Слишком глубокая вложенность усложняет понимание кода. Старайтесь ограничиться тремя уровнями или меньше.

2. **Не дублировать семантику HTML**  
   Если структура HTML проста, не нужно создавать лишние вложенные селекторы:
   \`\`\`scss
   /* Плохо */
   .wrapper {
     .header {
       .site-logo {
         img { /* ... */ }
       }
     }
   }

   /* Лучше */
   .site-logo img {
     /* ... */
   }
   \`\`\`

3. **Использовать вложенность там, где логично**  
   Вложенность хороша, когда отражает реальную иерархию блока и его элементов. Если элементы мало связаны, лучше писать отдельные правила.

4. **Явные модификаторы вместо глубокой вложенности**  
   Часто имеет смысл вынести модификатор на уровень родителя:
   \`\`\`scss
   /* Вместо глубокой вложенности */
   .menu {
     &-item {
       &--active {
         /* ... */
       }
     }
   }

   /* Можно использовать проще */
   .menu {}
   .menu-item {}
   .menu-item--active {}
   \`\`\`

---

### Пример полного использования вложенности

#### HTML:
\`\`\`html
<div class="card card--highlighted">
  <h2 class="card__title">Заголовок карточки</h2>
  <p>Описание карточки</p>
  <button class="button">Нажми меня</button>
</div>
\`\`\`

#### SCSS:
\`\`\`scss
$primary-color: #3498db;
$card-bg: #fff;
$card-border: #ccc;

.card {
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 4px;
  padding: 1rem;
  max-width: 300px;
  margin: 1rem auto;
  transition: box-shadow 0.2s;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }

  &--highlighted {
    border-color: #f39c12;

    &:hover {
      box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .button {
    background: $primary-color;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: darken($primary-color, 10%);
    }
  }
}
\`\`\`

#### Скомпилированный CSS:
\`\`\`css
.card {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  max-width: 300px;
  margin: 1rem auto;
  transition: box-shadow 0.2s;
}
.card__title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}
.card--highlighted {
  border-color: #f39c12;
}
.card--highlighted:hover {
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
}
.card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}
.card .button {
  background: #3498db;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.card .button:hover {
  background: #2980b9;
}
\`\`\`
  `.trim(),
  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Вложенность SCSS: Пример</title>
  <link rel="stylesheet" href="variables.scss">
</head>
<body>
  <div class="card card--highlighted">
    <h2 class="card__title">Заголовок карточки</h2>
    <p>Описание карточки</p>
    <button class="button">Нажми меня</button>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$primary-color: #3498db;
$card-bg: #fff;
$card-border: #ccc;

// _card.scss
.card {
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 4px;
  padding: 1rem;
  max-width: 300px;
  margin: 1rem auto;
  transition: box-shadow 0.2s;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }

  &--highlighted {
    border-color: #f39c12;

    &:hover {
      box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .button {
    background: $primary-color;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: darken($primary-color, 10%);
    }
  }
}

// styles.scss
@import 'variables';
@import 'card';
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/style-rules/nesting",
    "https://developer.mozilla.org/ru/docs/Web/HTML/БЭМ",
  ],
};
export const scss_basics3 = {
  id: "scss_basics3",
  title: "Partials и @import",
  content: `
В SCSS **partials** — это маленькие файлы, в которых хранятся части стилей (переменные, миксины, стили компонентов и т. д.). Имя такого файла всегда начинается с подчёркивания, например, \`_variables.scss\` или \`_buttons.scss\`. Partial-файлы сами по себе не превращаются в отдельный CSS: они созданы для того, чтобы потом «включаться» в главный файл.

Директива \`@import\` позволяет собрать несколько partial-файлов в одном месте. В главном файле (например, \`main.scss\`) вы пишете \`@import 'имя-partial' ;\`, и SCSS объединяет содержимое всех импортов при компиляции в единый CSS.

---

### Пример создания partials

1. **_variables.scss**  
   Хранит все переменные (цвета, шрифты, отступы и т. д.):
   \`\`\`scss
   // _variables.scss
   $primary-color: #3498db;
   $font-size-base: 16px;
   \`\`\`

2. **_buttons.scss**  
   Стили для кнопок, которые используют переменные:
   \`\`\`scss
   // _buttons.scss
   .btn {
     background: $primary-color;
     font-size: $font-size-base;
     padding: 0.5rem 1rem;
     border: none;
     border-radius: 4px;
     color: #fff;
     cursor: pointer;

     &:hover {
       background: darken($primary-color, 10%);
     }
   }
   \`\`\`

---

### Как собрать всё вместе

В файле **main.scss** используйте директиву \`@import\` без подчёркивания и без расширения:
\`\`\`scss
// main.scss
@import 'variables';
@import 'buttons';
\`\`\`
При компиляции (командой \`sass main.scss main.css\`) SCSS найдёт \`_variables.scss\` и \`_buttons.scss\`, склеит их содержимое и выдаст единый \`main.css\`.

### Структура проекта (пример)
\`\`\`
project/
├── src/
│   └── scss/
│       ├── _variables.scss   // здесь хранятся все переменные
│       ├── _buttons.scss     // здесь стили для кнопок
│       ├── _header.scss      // здесь стили для шапки сайта
│       └── main.scss         // главный файл, собирающий все частичные файлы
└── dist/
    └── css/
        └── main.css          // итоговый скомпилированный файл
\`\`\`

Использование partials и \`@import\` помогает держать код организованным: вы легко находите нужные стили и быстро добавляете новые файлы, не теряясь в одном большом файле.
  `.trim(),
  codeExample: `
<!-- Пример HTML -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример Partials и @import</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <button class="btn">Нажми меня</button>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$primary-color: #3498db;
$font-size-base: 16px;

// _buttons.scss
.btn {
  background: $primary-color;
  font-size: $font-size-base;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: darken($primary-color, 10%);
  }
}

// main.scss
@import 'variables';
@import 'buttons';
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/import",
    "https://sass-guidelin.es/#partials",
  ],
};
export const scss_possibilities1 = {
  id: "scss_possibilities1",
  title: "Миксины (@mixin) и @include",
  content: `
Миксины в SCSS позволяют создавать повторно используемые блоки стилей, которые можно подключать к разным селекторам. Это удобно, когда нужно применить один и тот же набор свойств с некоторыми параметрами.

---

### Что такое @mixin
- Объявляется с помощью директивы \`@mixin\`.
- Внутри можно описать любой набор CSS-свойств.
- Можно задавать параметры, чтобы миксин был более гибким.

Пример объявления миксина:
\`\`\`scss
@mixin button-styles($bg-color, $text-color: #fff) {
  background-color: $bg-color;
  color: $text-color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}
\`\`\`
- \`$bg-color\` — обязательный параметр.
- \`$text-color\` — необязательный, со значением по умолчанию \`#fff\`.

---

### Как использовать @include
Чтобы применить миксин к селектору, используется \`@include\` с указанием имени миксина и передаваемых аргументов.

Пример:
\`\`\`scss
.button {
  @include button-styles(#2ecc71);
}

.button--danger {
  @include button-styles(#e74c3c, #fafafa);
}
\`\`\`
- В первом случае \`.button\` получит фон \`#2ecc71\` и белый текст.
- Во втором \`.button--danger\` получит фон \`#e74c3c\` и текст \`#fafafa\`.

---

### @content-блок в миксинах
Миксин может принимать вложенный блок кода, при помощи директивы \`@content\`. Это позволяет вставить дополнительный CSS внутрь миксина.

Пример:
\`\`\`scss
@mixin card($bg-color) {
  background: $bg-color;
  padding: 1rem;
  border-radius: 4px;
  @content;
}

.post {
  @include card(#f8f9fa) {
    h2 {
      margin-top: 0;
      font-size: 1.25rem;
    }
    p {
      color: #555;
    }
  }
}
\`\`\`
При компиляции:
- Содержимое блока после \`@include card\` заменит \`@content\` внутри миксина.

---

### Зачем использовать миксины
1. **Переиспользование кода**: не дублировать одинаковые стили.
2. **Параметризация**: легко менять цвета, размеры, другие значения.
3. **Организация**: собрать логически связанные стили в одном месте.
  `.trim(),
  codeExample: `
<!-- Пример HTML -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример миксинов в SCSS</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <button class="button">Обычная кнопка</button>
  <button class="button button--danger">Кнопка опасности</button>

  <div class="post">
    <h2>Заголовок поста</h2>
    <p>Некоторый текст в карточке.</p>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _mixins.scss
@mixin button-styles($bg-color, $text-color: #fff) {
  background-color: $bg-color;
  color: $text-color;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

@mixin card($bg-color) {
  background: $bg-color;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  @content;
}

// styles.scss
@import 'mixins';

.button {
  @include button-styles(#2ecc71);
}

.button--danger {
  @include button-styles(#e74c3c, #fafafa);
}

.post {
  @include card(#f8f9fa) {
    h2 {
      margin-top: 0;
      font-size: 1.25rem;
    }
    p {
      color: #555;
    }
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/mixin",
    "https://sass-guidelin.es/#mixins",
  ],
};
