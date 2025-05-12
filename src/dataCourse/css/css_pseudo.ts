export const css_pseudo1 = {
  id: "css_pseudo1",
  title: "Псевдоклассы",
  content: `
  ## Псевдоклассы в CSS

  Псевдоклассы позволяют стилизовать элементы на основе их состояния, положения в дереве DOM или других характеристик.

  ### Основные псевдоклассы:
  
  - \`:first-child\` — первый дочерний элемент
  - \`:last-child\` — последний дочерний элемент
  - \`:nth-child(n)\` — каждый n-й элемент
  - \`:nth-of-type(n)\` — каждый n-й элемент определённого типа
  - \`:not(selector)\` — все, кроме указанного селектора
  - \`:empty\` — элемент без дочерних элементов
  - \`:focus\` — элемент в фокусе (обычно \`input\` или \`textarea\`)
  - \`:disabled\` — неактивные поля ввода
  - \`:checked\` — отмеченные чекбоксы и радиокнопки

  ### Примеры:
  \`\`\`css
  li:first-child {
    color: green;
  }

  li:last-child {
    color: red;
  }

  li:nth-child(2) {
    color: blue;
  }

  input:checked + label {
    font-weight: bold;
  }

  input:focus {
    border-color: #3f51b5;
    outline: none;
  }
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    li:first-child {
      color: green;
    }
    li:last-child {
      color: red;
    }
    li:nth-child(2) {
      color: blue;
    }
    input:checked + label {
      font-weight: bold;
    }
    input:focus {
      border-color: #3f51b5;
      outline: none;
    }
  </style>
</head>
<body>
  <ul>
    <li>Первый элемент (зелёный)</li>
    <li>Второй элемент (синий)</li>
    <li>Третий элемент (красный)</li>
  </ul>

  <br />

  <input type="checkbox" id="agree">
  <label for="agree">Согласен с условиями</label>
  
  <br /><br />
  
  <input type="text" placeholder="Фокус сюда" />
</body>
</html>
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-classes",
    "https://html5book.ru/css-pseudo-classes/",
  ],
};
export const css_pseudo2 = {
  id: "css_pseudo2",
  title: "Псевдоэлементы",
  content: `
  ## Псевдоэлементы в CSS

  Псевдоэлементы позволяют добавлять стилизованный контент или изменять часть содержимого элемента без изменения HTML.

  ### Основные псевдоэлементы:
  
  - \`::before\` — добавляет содержимое **перед** элементом
  - \`::after\` — добавляет содержимое **после** элемента
  - \`::first-letter\` — стилизация первой буквы текста
  - \`::first-line\` — стилизация первой строки текста
  - \`::selection\` — стилизация выделенного текста пользователем

  ### Примеры:
  \`\`\`css
  p::before {
    content: "→ ";
    color: gray;
  }

  p::after {
    content: " ✓";
    color: green;
  }

  p::first-letter {
    font-size: 2em;
    color: #ff5722;
  }

  p::first-line {
    font-weight: bold;
    color: #3f51b5;
  }
  \`\`\`

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    p::before {
      content: "→ ";
      color: gray;
    }
    p::after {
      content: " ✓";
      color: green;
    }
    p::first-letter {
      font-size: 2em;
      color: #ff5722;
    }
    p::first-line {
      font-weight: bold;
      color: #3f51b5;
    }
  </style>
</head>
<body>
  <p>Это пример текста с использованием псевдоэлементов.</p>
</body>
</html>
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements",
    "https://html5book.ru/css-pseudo-elements/",
  ],
};
export const css_pseudo3 = {
  id: "css_pseudo3",
  title: "Состояния элементов: hover, focus, active и другие",
  content: `
  ## Стилизация состояний в CSS

  CSS позволяет менять стили элемента, когда пользователь с ним **взаимодействует**: наводит, нажимает, фокусируется и т.д.

  Это делается с помощью **псевдоклассов** (начинаются с \`:\`).

  ---

  ### 1. :hover — при наведении курсора

  Пример:

  \`\`\`css
  button:hover {
    background-color: #ffcc00;
  }
  \`\`\`

  Элемент меняется, когда мышка на нём.

  ---

  ### 2. :active — в момент нажатия

  Пример:

  \`\`\`css
  button:active {
    transform: scale(0.98);
  }
  \`\`\`

  Работает, пока кнопка нажата (мышка удерживается).

  ---

  ### 3. :focus — когда элемент получает фокус (обычно input)

  Пример:

  \`\`\`css
  input:focus {
    border-color: #3f51b5;
    outline: none;
  }
  \`\`\`

  Убираем стандартную рамку и добавляем свою при активации поля.

  ---

  ### 4. :visited, :disabled, :checked

  - \`:visited\` — уже посещённые ссылки
  - \`:disabled\` — неактивные кнопки/поля
  - \`:checked\` — отмеченные чекбоксы или радиокнопки

  Пример:

  \`\`\`css
  a:visited {
    color: gray;
  }

  input:disabled {
    background-color: #eee;
  }

  input:checked + label {
    font-weight: bold;
  }
  \`\`\`

  ---

  ### Комбинирование

  Можно комбинировать состояния:

  \`\`\`css
  button:hover:active {
    background-color: red;
  }
  \`\`\`

  ---

  ### Советы

  - Используй \`transition\` для плавных эффектов
  - Добавляй \`:focus\` и \`:active\` для доступности
  - Не забывай про мобайл: на тач-устройствах \`:hover\` может не сработать

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #2196f3;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #1976d2;
    }

    button:active {
      background-color: #0d47a1;
    }

    input:focus {
      border: 2px solid #ff5722;
      outline: none;
    }

    input:disabled {
      background-color: #eee;
    }
  </style>
</head>
<body>
  <button>Кнопка</button>
  <br /><br />
  <input type="text" placeholder="Фокус сюда" />
  <br /><br />
  <input type="text" disabled value="Отключено" />
</body>
</html>
  `.trim(),

  codeExampleCSS: `
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1976d2;
}

button:active {
  background-color: #0d47a1;
}

input:focus {
  border: 2px solid #ff5722;
  outline: none;
}

input:disabled {
  background-color: #eee;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/:hover",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:focus",
    "https://developer.mozilla.org/ru/docs/Web/CSS/:active",
    "https://html5book.ru/css-hover-focus-active/",
  ],
};
