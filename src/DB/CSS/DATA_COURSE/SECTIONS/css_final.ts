export const css_final_1 = {
  id: "css_final_1",
  title: "Повторение ключевых тем",
  content: `
## Итоговое повторение: Основы CSS

В этом разделе собраны все ключевые темы курса по CSS. Используй гайд для систематизации знаний, подготовки к собеседованию или быстрой самопроверки перед практикой.

---

### Подключение CSS

- \`<link rel="stylesheet" href="style.css">\` — внешний файл
- \`<style> ... </style>\` — внутри head
- \`style="..." \` — инлайн-стили (лучше не использовать в реальных проектах)

---

### Селекторы CSS

- По тегу: \`body\`, \`h1\`
- По классу: \`.className\`
- По id: \`#idName\`
- Вложенные: \`.card p\`
- Групповые: \`h1, h2, h3\`
- Псевдоклассы: \`:hover\`, \`:focus\`, \`:nth-child\`
- Псевдоэлементы: \`::before\`, \`::after\`

---

### Цвета, фон и текст

- Цвета: HEX (\`#fff\`), RGB(\`rgb(0,0,0)\`), HSL(\`hsl(210, 50%, 40%)\`)
- Фон: \`background\`, \`background-color\`, \`background-image\`
- Границы: \`border\`, \`border-radius\`
- Тени: \`box-shadow\`, \`text-shadow\`
- Текст: \`font-family\`, \`font-size\`, \`font-weight\`, \`line-height\`, \`letter-spacing\`, \`text-align\`, \`text-transform\`

---

### Размеры и отступы

- Ширина/высота: \`width\`, \`height\`, \`min-width\`, \`max-width\`
- Отступы: \`margin\`, \`padding\`
- \`box-sizing: border-box\` — всегда используем для предсказуемости верстки

---

### Блочная модель

- \`display: block\`, \`inline\`, \`inline-block\`, \`none\`
- \`overflow: hidden|auto|scroll|visible\`
- \`visibility: hidden|visible\`

---

### Позиционирование

- \`position: static|relative|absolute|fixed|sticky\`
- Смещения: \`top\`, \`right\`, \`bottom\`, \`left\`
- Слои: \`z-index\`

---

### Flexbox

- \`display: flex\`
- Основные свойства: \`flex-direction\`, \`justify-content\`, \`align-items\`, \`flex-wrap\`, \`gap\`
- Для дочерних: \`flex\`, \`order\`, \`align-self\`

---

### Grid Layout

- \`display: grid\`
- \`grid-template-columns\`, \`grid-template-rows\`
- \`gap\`, \`grid-area\`, \`grid-column\`, \`grid-row\`
- Автоматическое размещение: \`auto-fit\`, \`auto-fill\`

---

### Работа с изображениями и фоном

- \`background-image\`, \`background-size\`, \`background-position\`
- Для \`<img>\`: \`width\`, \`height\`, \`object-fit\`, \`object-position\`
- Адаптивные картинки: \`max-width: 100%\`, \`height: auto\`

---

### Адаптивность и медиазапросы

- Медиазапросы:  
  \`@media (max-width: 768px) { ... }\`
- Единицы: %, vw, vh, rem, em, clamp()
- Responsive images: \`srcset\`, \`sizes\`, \`picture\`

---

### Анимации, переходы и трансформации

- Переходы: \`transition: property duration\`
- Трансформации: \`transform: scale() rotate() translate()\`
- Анимации: \`@keyframes\`, \`animation\`

---

### Переменные и современные возможности

- CSS-переменные: \`--main-color: #fff\`; использование: \`color: var(--main-color)\`
- Каскадность и наследование
- Специфичность селекторов

---

### Валидность и инструменты

- Проверка CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Форматирование: Prettier
- Линтер: Stylelint
- Live Server, DevTools

---

### Не использовать!

- Устаревшие свойства (\`float\` — только по необходимости, \`clearfix\`)
- Инлайн-стили (только для быстрых тестов)
- !important (только если нет другого выхода)

---

## Вывод

Этот гайд охватывает все базовые темы CSS, необходимые для старта и уверенного собеседования. Тренируйся, используй чек-лист для самопроверки и не забывай про чистоту и структуру кода!
  

`.trim(),
  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Итоговое повторение</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <section>
    <h2>Селекторы</h2>
    <p class="highlight">Этот текст красный благодаря классу .highlight</p>
  </section>

  <section>
    <h2>Отступы (margin + padding)</h2>
    <div class="box">Блок с внешним и внутренним отступом</div>
  </section>

  <section>
    <h2>Flexbox</h2>
    <div class="flex">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </section>

  <section>
    <h2>Grid</h2>
    <div class="grid">
      <div>Ячейка 1</div>
      <div>Ячейка 2</div>
      <div>Ячейка 3</div>
      <div>Ячейка 4</div>
    </div>
  </section>

  <section>
    <h2>Позиционирование</h2>
    <div class="relative-box">Смещённый элемент с position: relative</div>
  </section>

  <section>
    <h2>Цвета и фон</h2>
    <div class="bg-demo">Текст на зелёном фоне</div>
  </section>

  <section>
    <h2>Адаптивное изображение</h2>
    <img class="responsive" src="https://placekitten.com/800/400" alt="кот" />
  </section>

  <section>
    <h2>Псевдоклассы</h2>
    <div class="hover-demo">Наведи на меня (hover)</div>
  </section>

  <section>
    <h2>Псевдоэлементы</h2>
    <p class="pseudo">Этому параграфу добавлена звезда</p>
  </section>

  <section>
    <h2>Трансформация и переход</h2>
    <div class="animate">Наведи — я увеличусь</div>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `/* Глобальные стили */
body {
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  margin: 20px;
  color: #333;
}

section {
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

.example {
  margin-top: 10px;
  padding: 10px;
  border: 1px dashed #ccc;
}

/* Селекторы */
.highlight {
  color: red;
}

/* Отступы */
.box {
  margin: 20px;
  padding: 10px;
  background: #e0f7fa;
}

/* Flexbox */
.flex {
  display: flex;
  gap: 10px;
}

.flex > div {
  background: #dcedc8;
  padding: 10px;
  flex: 1;
  text-align: center;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grid > div {
  background: #f8bbd0;
  padding: 10px;
  text-align: center;
}

/* Позиционирование */
.relative-box {
  position: relative;
  top: 10px;
  left: 10px;
  background: #ffe0b2;
  padding: 10px;
}

/* Цвет и фон */
.bg-demo {
  background-color: #4caf50;
  color: white;
  padding: 10px;
}

/* Адаптивное изображение */
.responsive {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Псевдоклассы */
.hover-demo {
  padding: 10px;
  background: #fff8e1;
  transition: background 0.3s;
}

.hover-demo:hover {
  background: #ffecb3;
}

/* Псевдоэлементы */
.pseudo::before {
  content: "★ ";
  color: gold;
}

/* Анимации и трансформации */
.animate {
  padding: 10px;
  background: #bbdefb;
  transition: transform 0.3s;
  display: inline-block;
}

.animate:hover {
  transform: scale(1.2);
}
`.trim(),
};
