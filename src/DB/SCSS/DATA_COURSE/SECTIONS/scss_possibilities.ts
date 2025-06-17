export const scss_possibilities2 = {
  id: "scss_possibilities2",
  title: "Функции в SCSS",
  content: `
Функции в SCSS позволяют вычислять значения и возвращать их для использования в стилях. Это удобно, когда нужно динамически изменять цвета, размеры или любые другие параметры.

---

### Что такое @function
- Объявляется с помощью директивы \`@function\`.
- Принимает аргументы и обязательно возвращает значение при помощи \`@return\`.

Пример объявления простой функции:
\`\`\`scss
@function calculate-rem($px-value) {
  @return $px-value / 16 * 1rem;
}
\`\`\`
- \`$px-value\` — число в пикселях, функция переводит его в единицы \`rem\` (исходя из базового размера 16px).

---

### Как использовать функцию
Чтобы получить значение из функции, достаточно вызвать её внутри любого свойства:

\`\`\`scss
.element {
  font-size: calculate-rem(24); // 24px → 1.5rem
  margin-bottom: calculate-rem(32); // 32px → 2rem
}
\`\`\`

---

### Пример функции для контрастного цвета
Часто нужно выбирать светлый или тёмный цвет текста в зависимости от фона. Напишем функцию:

\`\`\`scss
@function contrast-color($background) {
  @if lightness($background) > 50% {
    @return #000; // если фон светлый, возвращаем чёрный
  } @else {
    @return #fff; // если фон тёмный, возвращаем белый
  }
}
\`\`\`
- \`lightness($background)\` — встроенная функция SCSS, возвращающая степень светлоты цвета (0–100%).

Используем в стиле кнопки:
\`\`\`scss
$button-bg: #3498db;

.button {
  background-color: $button-bg;
  color: contrast-color($button-bg);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}
\`\`\`

---

### Встроенные функции SCSS
Помимо собственных, SCSS предоставляет множество готовых функций:
- Работа с цветами: \`lighten(color, %)\`, \`darken(color, %)\`, \`mix(color1, color2, %)\`, \`rgba(color, alpha)\`.
- Работа с числами: \`percentage(number)\`, \`round(number)\`, \`floor(number)\`, \`ceil(number)\`.
- Списки и карты: \`length(list)\`, \`nth(list, index)\`, \`map-get(map, key)\`, \`map-keys(map)\` и др.

Вы можете комбинировать встроенные функции и свои, создавая гибкие решения.

  `.trim(),
  codeExample: `
<!-- Пример HTML -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример функций SCSS</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <button class="button">Контрастная кнопка</button>
  <div class="card">
    <h2>Заголовок карточки</h2>
    <p>Текст внутри карточки</p>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _functions.scss
@function calculate-rem($px-value) {
  @return $px-value / 16 * 1rem;
}

@function contrast-color($background) {
  @if lightness($background) > 50% {
    @return #000;
  } @else {
    @return #fff;
  }
}

// styles.scss
@import 'functions';

$button-bg: #e74c3c;
$card-bg: #f8f9fa;

.button {
  background-color: $button-bg;
  color: contrast-color($button-bg);
  font-size: calculate-rem(18);
  padding: calculate-rem(12) calculate-rem(24);
  border: none;
  border-radius: 4px;
}

.card {
  background-color: $card-bg;
  padding: calculate-rem(32);
  border-radius: 6px;

  h2 {
    font-size: calculate-rem(24);
    margin-bottom: calculate-rem(16);
  }

  p {
    font-size: calculate-rem(16);
    color: #555;
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/function",
    "https://developer.mozilla.org/ru/docs/Web/Style/Sass/Functions",
  ],
};
export const scss_possibilities3 = {
  id: "scss_possibilities3",
  title: "Наследование (@extend)",
  content: `
Директива \`@extend\` в SCSS позволяет одному селектору перенять все свойства другого селектора, избегая дублирования одинаковых правил.

---

### Как работает \`@extend\`
1. Вы объявляете базовый селектор с набором общих свойств.
2. В другом селекторе пишете \`@extend .base-selector;\`.
3. При компиляции SCSS объединит селекторы, у которых есть общие свойства, в одно правило, экономя код.

---

### Простой пример
\`\`\`scss
// Объявляем базовый селектор с общими стилями
.button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

// Наследуем стили кнопки в двух разных классах
.button--primary {
  @extend .button;
  background-color: #3498db;
  color: #fff;
}

.button--secondary {
  @extend .button;
  background-color: #e74c3c;
  color: #fff;
}
\`\`\`
- Здесь \`.button--primary\` и \`.button--secondary\` автоматически получат padding, border, border-radius и cursor из \`.button\`.

При компиляции SCSS генерирует:
\`\`\`css
.button, .button--primary, .button--secondary {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: #3498db;
  color: #fff;
}

.button--secondary {
  background-color: #e74c3c;
  color: #fff;
}
\`\`\`

---

### Когда использовать \`@extend\`
- **Общие паттерны**: кнопки, карточки, типографика, которые повторяются с разными дополнительными свойствами.
- **Избежать дублирования**: если одинаковый набор свойств нужен сразу у нескольких селекторов.

---

### Ограничения и советы
1. **Порядок определения**  
   - \`@extend\` должен ссылаться на селектор, который уже объявлен выше в том же или импортированном файле.
2. **Сведение селекторов**  
   - Чем больше селекторов “расширяют” базовый, тем более длинный объединённый селектор получается в итоговом CSS. Это может ухудшить производительность при большом количестве расширений.
3. **Альтернатива миксинам**  
   - Если нужен точный порядок свойств или небольшое «вливание» кода, лучше использовать \`@mixin\`, поскольку \`@extend\` объединяет селекторы, а не просто копирует свойства.
4. **Только для классов и элементов**  
   - \`@extend\` работает с селекторами (классами, тегами), но не с произвольными сочетаниями, где может возникнуть конфликт.  
5. **Читабельность кода**  
   - Используйте \`@extend\` для очевидных случаев дублирования. Если код становится сложным из-за слишком большого числа расширений, откажитесь и вернитесь к миксинам.

---

### Пример использования наследования в карточках
\`\`\`scss
// Базовый стиль карточки
.card {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

// Карточка с тенью и градиентом (расширяем .card)
.card--highlighted {
  @extend .card;
  border-color: #f39c12;
  background: linear-gradient(to bottom, #fff, #f9f1e7);
}

// Карточка без тени, но с рамкой (расширяем .card)
.card--simple {
  @extend .card;
  box-shadow: none;
  border-color: #e0e0e0;
}
\`\`\`
Скомпилированный CSS:
\`\`\`css
.card, .card--highlighted, .card--simple {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.card--highlighted {
  border-color: #f39c12;
  background: linear-gradient(to bottom, #fff, #f9f1e7);
}

.card--simple {
  box-shadow: none;
  border-color: #e0e0e0;
}
\`\`\`

  `.trim(),
  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Наследование (@extend) в SCSS</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <button class="button--primary">Основная кнопка</button>
  <button class="button--secondary">Вторичная кнопка</button>

  <div class="card">Обычная карточка</div>
  <div class="card card--highlighted">Выделенная карточка</div>
  <div class="card card--simple">Простая карточка</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$primary-color: #3498db;
$secondary-color: #e74c3c;

// _buttons.scss
.button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  @extend .button;
  background-color: $primary-color;
  color: #fff;
}

.button--secondary {
  @extend .button;
  background-color: $secondary-color;
  color: #fff;
}

// _cards.scss
.card {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.card--highlighted {
  @extend .card;
  border-color: #f39c12;
  background: linear-gradient(to bottom, #fff, #f9f1e7);
}

.card--simple {
  @extend .card;
  box-shadow: none;
  border-color: #e0e0e0;
}

// main.scss
@import 'variables';
@import 'buttons';
@import 'cards';
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/extend",
    "https://sass-guidelin.es/#sharing-extends",
  ],
};
export const scss_possibilities6 = {
  id: "scss_possibilities6",
  title: "Операторы и вычисления",
  content: `
SCSS поддерживает арифметические, сравнительные и логические операторы. Это позволяет выполнять вычисления прямо в стилях и динамически изменять значения без необходимости вручную пересчитывать каждое свойство.

---

### Арифметические операторы
- \`+\` (сложение)  
- \`-\` (вычитание)  
- \`*\` (умножение)  
- \`/\` (деление)  
- \`%\` (остаток от деления)

Примеры:
\`\`\`scss
$base-spacing: 1rem;
$double-spacing: $base-spacing * 2; // 2rem
$half-spacing: $base-spacing / 2;   // 0.5rem

.container {
  padding: $base-spacing $double-spacing; // 1rem 2rem
}

.element {
  margin-bottom: $base-spacing + $half-spacing; // 1.5rem
}
\`\`\`
- \`$double-spacing\` вычисляется как 2rem.  
- \`$half-spacing\` вычисляется как 0.5rem.  
- Эти переменные затем используются внутри стилей, экономя время и снижая риск ошибок.

---

### Сравнительные операторы
- \`==\` (равно)  
- \`!=\` (не равно)  
- \`>\`, \`<\`, \`>=\`, \`<=\`

Обычно используются внутри директивы \`@if\` для применения стиля при выполнении условия:
\`\`\`scss
$screen-width: 800px;

.container {
  @if $screen-width >= 768px {
    max-width: 750px;
  } @else {
    max-width: 100%;
  }
}
\`\`\`
- Если \`$screen-width\` ≥ 768px, применяется \`max-width: 750px;\`.  
- В противном случае — \`max-width: 100%;\`.

---

### Логические операторы
- \`and\` (логическое И)  
- \`or\` (логическое ИЛИ)  
- \`not\` (логическое НЕ)

Пример комбинирования условий:
\`\`\`scss
$theme: dark;
$has-sidebar: true;

.layout {
  @if $theme == dark and $has-sidebar {
    background: #2c3e50;
    color: #ecf0f1;
  } @else {
    background: #fff;
    color: #333;
  }
}
\`\`\`
- Блок внутри \`@if\` сработает только если \`$theme\` равно \`dark\` **и** \`$has-sidebar\` равно \`true\`.

---

### Операции с цветами
SCSS предоставляет встроенные функции для работы с цветами. В сочетании с операторами это даёт гибкость:

- \`lighten(color, %)\` — осветлить цвет  
- \`darken(color, %)\` — затемнить цвет  
- \`mix(color1, color2, %)\` — смешать два цвета  
- \`rgba(color, alpha)\` — задать прозрачность

Пример:
\`\`\`scss
$primary-color: #3498db;

.button {
  background-color: lighten($primary-color, 10%); // становится светлее
  border: 1px solid darken($primary-color, 15%); // становится темнее
  color: rgba(#fff, 0.8); // полупрозрачный белый
  padding: ($base-spacing * 2) ($base-spacing / 2);
}
\`\`\`
- \`lighten($primary-color, 10%)\` даёт цвет на 10% светлее исходного.  
- \`darken($primary-color, 15%)\` — на 15% темнее.  
- \`rgba(#fff, 0.8)\` — белый с прозрачностью 80%.

---

### Комбинация операторов
Все виды операторов можно комбинировать для более сложных вычислений:
\`\`\`scss
$columns: 4;
$gutter: 20px;
$total-width: 1200px;

.grid {
  width: $total-width - ($gutter * ($columns - 1));
  display: flex;
  gap: $gutter;

  @for $i from 1 through $columns {
    .col-#{$i} {
      width: (($total-width / $columns) * $i) - ($gutter * ($i - 1));
    }
  }
}
\`\`\`
- \`$total-width - ($gutter * ($columns - 1))\` вычисляет общую ширину области, вычитая промежутки.  
- Внутри \`@for\` каждый класс \`.col-#{$i}\` получает вычисленную ширину.

  `.trim(),
  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример операторов SCSS</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div class="container">
    <div class="box">Блок 1</div>
    <div class="box">Блок 2</div>
  </div>
  <button class="button">Кнопка</button>
  <div class="grid">
    <div class="col-1">1</div>
    <div class="col-2">2</div>
    <div class="col-3">3</div>
    <div class="col-4">4</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$base-spacing: 1rem;
$primary-color: #e74c3c;
$screen-width: 1024px;
$columns: 4;
$gutter: 20px;
$total-width: 1200px;

// styles.scss
@import 'variables';

.container {
  padding: $base-spacing ($base-spacing * 2);
}

.box {
  margin-bottom: $base-spacing + ($base-spacing / 2);
  background: lighten($primary-color, 15%);
  border: 2px solid darken($primary-color, 10%);
  color: #fff;
  padding: $base-spacing;
  border-radius: 4px;
}

.button {
  background-color: rgba($primary-color, 0.9);
  color: #fff;
  padding: ($base-spacing * 2) ($base-spacing / 2);
  border: none;
  border-radius: 4px;

  @if $screen-width > 768px {
    font-size: 1.25rem;
  } @else {
    font-size: 1rem;
  }
}

.grid {
  width: $total-width - ($gutter * ($columns - 1));
  display: flex;
  gap: $gutter;

  @for $i from 1 through $columns {
    .col-#{$i} {
      width: (($total-width / $columns) * $i) - ($gutter * ($i - 1));
      background: lighten($primary-color, ($i - 1) * 10%);
      padding: $base-spacing;
      text-align: center;
      color: darken($primary-color, 20%);
      border: 1px solid darken($primary-color, 10%);
      border-radius: 4px;
    }
  }
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/operators/numbers",
    "https://developer.mozilla.org/ru/docs/Web/Style/Sass/Operators",
  ],
};

export const scss_possibilities4 = {
  id: "scss_possibilities4",
  title: "Директивы управления: @if, @for, @each, @while",
  content: `
В SCSS есть специальные конструкции—директивы—которые позволяют автоматически генерировать повторяющиеся или условные стили. Даже если вы никогда раньше не сталкивались с программированием, всё объясняется очень просто:  

- **@if** — проверяет условие и применяет стили только если условие истинно.  
- **@for** — создаёт несколько похожих правил, повторяя одну и ту же операцию несколько раз.  
- **@each** — берёт каждый элемент из списка и создаёт правило для каждого.  
- **@while** — повторяет блок стилей до тех пор, пока не перестанет выполняться условие.

Всё это помогает не писать вручную длинный и однообразный код. Рассмотрим каждую директиву по порядку.

---

### 1. @if (условие)

**Что делает:**  
Проверяет, выполняется ли какое-то условие (например, «больше ли число заданного значения»). Если условие истинно (то есть «да»), то блок стилей внутри @if применяется. Если нет, можно добавить блок @else, который сработает в противном случае.

**Пример без программирования (на пальцах):**  
Представьте, что у вас есть правило: «Если экран широкий (например, больше 768px), то делаем колонку шире, иначе ставим ширину 100%».  

**Как это выглядит в SCSS:**
\`\`\`scss
$screen-width: 800px; // мы условно считаем, что ширина экрана 800px

.container {
  @if $screen-width >= 768px {
    width: 750px;
  } @else {
    width: 100%;
  }
}
\`\`\`
- \`$screen-width >= 768px\` — это условие. Поскольку 800px ≥ 768px, в итоговом CSS получится \`width: 750px;\`.  
- Если бы \`$screen-width\` было 600px, сработал бы блок \`@else\` и \`width: 100%\`.

---

### 2. @for (повторение с числовым счётчиком)

**Что делает:**  
Создаёт группу похожих правил, меняя только число от 1 до заданного. Полезно, когда нужно сделать, например, классы \`.col-1\`, \`.col-2\`, \`.col-3\` и т.д., без ручного копирования.

**Пример без программирования (на пальцах):**  
Вы хотите пять колонок, ширина первой = 20%, второй = 40%, третьей = 60% и так далее. Вместо того чтобы писать пять раз почти одинаковый код, @for сделает это за вас.

**Как это выглядит в SCSS:**
\`\`\`scss
@for $i from 1 through 5 {
  .col-#{$i} {
    width: (100% / 5) * $i;
  }
}
\`\`\`
- \`$i\` принимает значения 1, 2, 3, 4, 5 по очереди.  
- \`.col-#{$i}\` при каждом проходе создаёт класс \`.col-1\`, \`.col-2\` и так далее.  
- Вычисление \`(100% / 5) * $i\` даёт ширину: 20%, 40%, 60%, 80%, 100%.

**Итоговый CSS:**
\`\`\`css
.col-1 { width: 20%; }
.col-2 { width: 40%; }
.col-3 { width: 60%; }
.col-4 { width: 80%; }
.col-5 { width: 100%; }
\`\`\`

---

### 3. @each (повторение по списку)

**Что делает:**  
Берёт заранее подготовленный список значений (список может быть цветов, имён, чисел и т.д.) и для каждого элемента списка генерирует блок стилей.

**Пример без программирования (на пальцах):**  
Допустим, у вас есть три темы: «светлая», «тёмная», «сепия». Для каждой темы вы хотите создать класс, который задаёт фон и цвет текста. Вместо трёх похожих блоков можно использовать @each.

**Как это выглядит в SCSS:**
\`\`\`scss
$themes: light, dark, sepia;

@each $theme in $themes {
  .theme-#{$theme} {
    @if $theme == light {
      background: #fff;
      color: #333;
    } @else if $theme == dark {
      background: #000;
      color: #fff;
    } @else {
      background: #f4ecd8; 
      color: #4e342e;
    }
  }
}
\`\`\`
- \`$themes\` — это список из трёх слов: \`light\`, \`dark\`, \`sepia\`.  
- \`@each $theme in $themes\` означает: «для каждого слова в списке $themes».  
- Внутри мы проверяем, какое именно слово (\`light\`, \`dark\` или \`sepia\`), и ставим соответствующие цвета.  

**Итоговый CSS:**
\`\`\`css
.theme-light {
  background: #fff;
  color: #333;
}
.theme-dark {
  background: #000;
  color: #fff;
}
.theme-sepia {
  background: #f4ecd8;
  color: #4e342e;
}
\`\`\`

---

### 4. @while (повторение до выполнения условия)

**Что делает:**  
Повторяет блок стилей, пока указанное условие остаётся истинным. По сути, это «цикл», который идёт до тех пор, пока вы не скажете «хватит».

**Пример без программирования (на пальцах):**  
Вы хотите создать классы \`.item-1\`, \`.item-2\`, \`.item-3\`, пока счётчик не станет больше 3.

**Как это выглядит в SCSS:**
\`\`\`scss
$i: 1; // начинаем с 1

@while $i <= 3 {
  .item-#{$i} {
    margin-bottom: $i * 10px;
  }
  $i: $i + 1; // увеличиваем счётчик на единицу
}
\`\`\`
- Сначала \`$i\` равно 1, условие \`1 <= 3\` истинно, создаём \`.item-1\` с \`margin-bottom: 10px\`.  
- Затем увеличиваем \`$i\` на 1 (теперь $i = 2). Условие \`2 <= 3\` всё ещё истинно, создаётся \`.item-2\` с \`margin-bottom: 20px\`.  
- И так продолжим, пока $i не станет равным 4 (тогда \`4 <= 3\` ложно и цикл остановится).

**Итоговый CSS:**
\`\`\`css
.item-1 { margin-bottom: 10px; }
.item-2 { margin-bottom: 20px; }
.item-3 { margin-bottom: 30px; }
\`\`\`

---

### Итого

- **@if** проверяет одно условие и выбирает между двумя (или более) наборами стилей.  
- **@for** повторяет блок с числовым счётчиком от одного числа до другого.  
- **@each** перебирает заранее заданный список и создаёт правила по каждому элементу.  
- **@while** повторяет блок, пока условие остаётся правдивым, контролируя счётчик вручную.

Использование этих директив экономит сотни строк одинакового кода и даёт возможность генерировать стили динамически, без знания какого-либо языка программирования.  `,
  codeExample: `
<!-- Пример HTML -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Директивы управления в SCSS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">Контейнер</div>

  <div class="theme-light">Светлая тема</div>
  <div class="theme-dark">Тёмная тема</div>
  <div class="theme-sepia">Сепия тема</div>

  <div class="grid">
    <div class="col-1">1</div>
    <div class="col-2">2</div>
    <div class="col-3">3</div>
    <div class="col-4">4</div>
    <div class="col-5">5</div>
  </div>

  <div class="items">
    <div class="item-1">Элемент 1</div>
    <div class="item-2">Элемент 2</div>
    <div class="item-3">Элемент 3</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$screen-width: 800px;
$themes: light, dark, sepia;
$columns: 5;
$i: 1;

// styles.scss
@import 'variables';

// Пример @if
.container {
  @if $screen-width >= 768px {
    width: 750px;
  } @else {
    width: 100%;
  }
}

// Пример @each
@each $theme in $themes {
  .theme-#{$theme} {
    @if $theme == light {
      background: #fff;
      color: #333;
    } @else if $theme == dark {
      background: #000;
      color: #fff;
    } @else {
      background: #f4ecd8;
      color: #4e342e;
    }
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
}

// Пример @for
@for $j from 1 through $columns {
  .col-#{$j} {
    width: (100% / $columns) * $j;
    float: left;
    padding: 0.5rem;
    box-sizing: border-box;
    background: lighten(#3498db, ($j - 1) * 10%);
    color: #fff;
    text-align: center;
    margin-bottom: 0.5rem;
  }
}

// Пример @while
@while $i <= 3 {
  .item-#{$i} {
    margin-bottom: $i * 10px;
    background: #e74c3c;
    color: #fff;
    padding: 0.5rem;
    border-radius: 4px;
  }
  $i: $i + 1;
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/at-rules/control",
    "https://webref.ru/course/sass/loops-and-conditions",
  ],
};
export const scss_possibilities5 = {
  id: "scss_possibilities5",
  title: "Работа со списками и картами",
  content: `
В SCSS **списки** и **карты** позволяют хранить несколько значений вместе и работать с ними как с единой структурой. Это удобно, когда нужно задать сразу несколько похожих значений (например, цвета темы, размеры и т. д.) и затем использовать их в стилях автоматически.

---

### 1. Что такое список

- **Список** — это набор значений, разделённых пробелом или запятой.
- Пример простого списка чисел: \`4px 8px 12px 16px\`.
- Пример списка цветов: \`red, green, blue\`.
- Списки используют для: отступов, цветовых палитр, шрифтов и т. п.

#### Как объявить список
\`\`\`scss
// Список размеров
$sizes: 4px 8px 12px 16px;

// Список цветов
$colors: #e74c3c, #3498db, #2ecc71;
\`\`\`

#### Доступ к элементам списка
Чтобы взять конкретный элемент из списка, используется функция \`nth(list, индекс)\`.
- Индекс в SCSS начинается с 1 (не с 0, как в JavaScript).
- \`nth($sizes, 2)\` вернёт \`8px\`.

Пример:
\`\`\`scss
$colors: #e74c3c, #3498db, #2ecc71;

.heading {
  color: nth($colors, 1); // #e74c3c
}

.alert {
  background-color: nth($colors, 3); // #2ecc71
}
\`\`\`

#### Полезные функции для списков
- \`length($list)\` — длина списка (количество элементов).
- \`nth($list, $n)\` — n-й элемент.
- \`append($list, $value, $separator)\` — добавить элемент в конец (по умолчанию тот же сепаратор, что и у списка).
- \`join($list1, $list2, $separator)\` — объединить два списка.
- \`zip($lists...)\` — объединяет несколько списков «поэлементно» в список вложенных списков.

Пример использования функций:
\`\`\`scss
$fonts: 'Helvetica Neue', Arial, sans-serif;

@for $i from 1 through length($fonts) {
  .font-#{$i} {
    font-family: nth($fonts, $i);
  }
}
\`\`\`
- \`length($fonts)\` вернёт 3.  
- Для каждого индекса 1, 2, 3 создастся класс с нужным шрифтом.

---

### 2. Что такое карта

- **Карта** — это набор пар «ключ: значение», похожий на объект или словарь.
- Пример карты цветов темы:
  \`\`\`scss
  $theme-colors: (
    primary: #3498db,
    secondary: #e74c3c,
    success: #2ecc71,
    danger: #e74c3c
  );
  \`\`\`
- Карты удобно использовать, когда нужно хранить имена и связанные с ними значения (например, «primary → цвет», «md → размер»).

#### Объявление карты
\`\`\`scss
$breakpoints: (
  mobile: 576px,
  tablet: 768px,
  desktop: 992px
);
\`\`\`

#### Доступ к значениям карты
Чтобы взять значение по ключу, используется функция \`map-get($map, $ключ)\`.

Пример:
\`\`\`scss
$theme-colors: (
  primary: #3498db,
  secondary: #e74c3c
);

.button-primary {
  background-color: map-get($theme-colors, primary); // #3498db
  color: #fff;
}

.button-secondary {
  background-color: map-get($theme-colors, secondary); // #e74c3c
  color: #fff;
}
\`\`\`

#### Полезные функции для карт
- \`map-get($map, $key)\` — возвращает значение по ключу.
- \`map-keys($map)\` — возвращает список всех ключей.
- \`map-values($map)\` — возвращает список всех значений.
- \`map-merge($map1, $map2)\` — объединяет две карты в одну (если ключи совпадают, берётся значение из второй карты).

Пример перебора карты:
\`\`\`scss
$theme-colors: (
  primary: #3498db,
  secondary: #e74c3c,
  success: #2ecc71
);

@each $name, $color in $theme-colors {
  .text-#{$name} {
    color: $color;
  }
  .bg-#{$name} {
    background-color: $color;
  }
}
\`\`\`
- Для каждого ключа (\`primary\`, \`secondary\`, \`success\`) генерируются два класса:  
  - \`.text-primary { color: #3498db; }\`  
  - \`.bg-primary { background-color: #3498db; }\`  
  и так далее для других ключей.

---

### Зачем использовать списки и карты

1. **Организация данных**  
   Вместо множества отдельных переменных вы храните связанные значения в одном месте.
2. **Удобство поддержки**  
   Если нужно добавить новый пункт (цвет, размер, ключ), вы просто дописываете в список или карту, а циклы и функции сами создадут нужные правила.
3. **Гибкость**  
   Можно динамически генерировать классы и значения без дублирования кода.

  `.trim(),
  codeExample: `
<!-- Пример HTML -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример списков и карт в SCSS</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <h1 class="font-1">Шрифт 1</h1>
  <h1 class="font-2">Шрифт 2</h1>
  <h1 class="font-3">Шрифт 3</h1>

  <button class="button-primary">Primary</button>
  <button class="button-secondary">Secondary</button>

  <p class="text-primary">Текст primary</p>
  <p class="text-secondary">Текст secondary</p>
  <p class="text-success">Текст success</p>

  <div class="bg-primary">Фон primary</div>
  <div class="bg-secondary">Фон secondary</div>
  <div class="bg-success">Фон success</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
// _variables.scss
$fonts: 'Helvetica Neue', Arial, sans-serif;
$theme-colors: (
  primary: #3498db,
  secondary: #e74c3c,
  success: #2ecc71
);

// styles.scss
@import 'variables';

// Пример списка и @for
@for $i from 1 through length($fonts) {
  .font-#{$i} {
    font-family: nth($fonts, $i);
  }
}

// Пример карты и @each
@each $name, $color in $theme-colors {
  .text-#{$name} {
    color: $color;
  }
  .bg-#{$name} {
    background-color: $color;
  }
}

// Пример прямого доступа через map-get
.button-primary {
  background-color: map-get($theme-colors, primary);
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

.button-secondary {
  background-color: map-get($theme-colors, secondary);
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}
  `.trim(),
  resources: [
    "https://sass-lang.com/documentation/values/lists",
    "https://sass-lang.com/documentation/values/maps",
  ],
};
