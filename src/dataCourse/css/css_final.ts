// import { css_pr1 } from "../A_PR_WORK/css_pr1";
// import { css_pr2 } from "../A_PR_WORK/css_pr2";

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
/* Минимальный пример стилей */
:root {
  --main-color: #2f80ed;
  --bg-color: #f6f8fa;
  --text-color: #232323;
  --radius: 16px;
}

/* Сброс стилей */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

/* Пример flex-контейнера */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: var(--main-color);
  color: #fff;
}

/* Пример Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin: 32px 0;
}

/* Адаптивность */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 12px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
  `.trim(),
};
