import { css_pr1 } from "./css_pr1";
import { css_pr2 } from "./css_pr2";

export const css_final_1 = {
  id: "css_final_1",
  title: "Практика 1: CSS-оформление сайта компании",
  content: `
## Практика: Стилизация сайта компании с нуля

### Цель:
Научиться применять базовые и промежуточные CSS-свойства на практике: стилизация текста, блоков, отступов, фонов, Flexbox и позиционирование.

---

### Что нужно сделать

На основе готового HTML (одностраничный сайт компании):

####  Стилизуй следующие блоки:
- Шапка сайта (\`<header>\`)
- Навигация (\`<nav>\`)
- Секции "О компании", "Услуги", "Портфолио", "Контакты"
- Форма обратной связи
- Подвал (\`<footer>\`)

####  Добавь стили в \`<style>\` внутри тега \`<head>\`

---

### Обязательные CSS-темы, которые нужно применить

**1. Цвета и шрифты**
- Цвет фона и текста: \`background-color\`, \`color\`
- Шрифт: \`font-family\`, \`font-size\`, \`line-height\`

**2. Отступы и размеры**
- \`margin\`, \`padding\`
- \`width\`, \`max-width\`, \`height\`
- \`box-sizing: border-box\` (глобально)

**3. Границы и фон**
- \`border\`, \`border-radius\`
- \`background-image\`, \`background-size\`, \`background-position\`

**4. Выравнивание**
- \`text-align\`, \`justify-content\`, \`align-items\`

**5. Flexbox**
- \`display: flex\`, \`flex-wrap\`, \`gap\`
- Используй Flexbox для навигации, карточек и футера

**6. Псевдоклассы**
- Эффект наведения на ссылку: \`:hover\`

---

### Дополнительно по желанию:
- Добавь адаптивность через \`max-width\` и \`width: 100%\`
- Используй Google Fonts или системные шрифты
- Добавь простые переходы \`transition: all 0.3s ease\`

---

### Пример классов, которые можно использовать:
- \`.container\`, \`.section\`, \`.nav__list\`, \`.service__item\`, \`.portfolio__card\`, \`.footer\`

---

### Итог:
Полноценная HTML-страница с CSS-оформлением, охватывающая все ключевые темы блока "Стилизация текста и блоков" + "Блочная модель" + "Flexbox".

**Формат сдачи**: один HTML-файл с внутренними стилями.

`.trim(),

  codeExample: `
<!-- Пример CSS внутри <head> -->
<style>
  body {
    font-family: "Segoe UI", sans-serif;
    color: #333;
    background-color: #f9f9f9;
    margin: 0;
  }

  header {
    background: #4caf50;
    color: white;
    padding: 10px 20px;
  }

  nav ul {
    display: flex;
    gap: 15px;
    list-style: none;
    padding: 0;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }

  section {
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
  `.trim(),

  show: css_pr1,
  // showCode: css_pr1,
};
export const css_final_2 = {
  id: "css_final_2",
  title: "Практика 2: Личный кабинет — карточки и формы",
  content: `
## Практика: Личный кабинет с карточками, формой и секцией "О нас"

### Цель:
Закрепить навыки продвинутой верстки на CSS: работа с карточками, формами, псевдоклассами, позиционированием и адаптивностью.

---

### Что нужно сделать

Используя готовый HTML-шаблон:

#### 1. Сверстай и оформи:
- Шапку сайта (\`<header>\`), прибитую сверху
- Блок "О нас" с фоновым изображением, текстом и кнопкой
- Карточки товаров с изображениями, ценой, кнопками и бейджами
- Форму редактирования профиля: текстовые поля, селекты, радио и чекбоксы
- Блок FAQ с раскрывающимися вопросами
- Футер

#### 2. Добавь стили в \`<style>\` внутри тега \`<head>\`

---

### Обязательные CSS-темы

**1. Цвета и текст**
- \`color\`, \`background-color\`, \`font-family\`, \`font-size\`, \`line-height\`

**2. Карточки**
- \`border\`, \`border-radius\`, \`box-shadow\`
- Переходы и анимация: \`transition\`, \`transform\`
- Ховер-эффекты и акценты

**3. Формы**
- Оформление \`input\`, \`textarea\`, \`select\`, \`radio\`, \`checkbox\`
- Стилизация состояний: \`:focus\`, \`:checked\`, \`:disabled\`

**4. Layout**
- \`display: flex\`, \`flex-wrap\`, \`gap\`
- Выравнивание контента в карточках и форме
- \`position: fixed\` для header

**5. Псевдоклассы**
- Наведение: \`:hover\`
- Фокус: \`:focus\`
- Отключено: \`:disabled\`
- Активные опции: \`:checked\`

**6. Адаптивность**
- Медиа-запросы для изменения карточек и формы при ширине < 768px
- Сделай карточки на всю ширину на мобильных устройствах

---

### Дополнительно (по желанию):
- Используй фоновые изображения или градиенты
- Добавь простую анимацию появления карточек
- Используй кастомные цвета и иконки

---

### Итог:
Готовая страница "Личный кабинет", включающая карточки, форму и дополнительный контент. Продемонстрированы все ключевые навыки CSS: оформление, взаимодействие, layout, адаптивность и доступность.

**Формат сдачи**: один HTML-файл с CSS в \`<style>\`.

`.trim(),

  codeExample: `
<!-- Пример: стили для карточки и формы -->
<style>
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  input:focus {
    border-color: #4caf50;
    outline: none;
  }

  input:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
</style>
  `.trim(),

  show: css_pr2,
};
