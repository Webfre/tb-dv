export const js_import_1 = {
  id: "js_import_1",
  title: "Что такое модуль в JavaScript",
  content: `
## Что такое модуль

**Модуль** — это отдельный файл JavaScript, в котором размещают часть кода (переменные, функции, классы и т.д.). Модули помогают разбивать программу на независимые логические части.

---

### Зачем нужны модули

- Делят код на более маленькие, легко поддерживаемые части
- Предотвращают конфликты имён переменных и функций
- Позволяют переиспользовать код в разных проектах
- Упрощают тестирование и развитие

---

## Экспорт из модуля

Чтобы сделать часть кода доступной другим файлам, используют \`export\`:

\`\`\`js
// utils.js
export const sum = (a, b) => a + b;
export const mult = (a, b) => a * b;
\`\`\`

Можно экспортировать заранее объявленные переменные и функции:

\`\`\`js
const name = "Иван";
function greet() {
  console.log("Привет, " + name);
}
export { name, greet };
\`\`\`

---

### Экспорт по умолчанию (export default)

В каждом модуле может быть **один экспорт по умолчанию**:

\`\`\`js
// calc.js
export default function calc(a, b) {
  return a + b;
}
\`\`\`

Или так:

\`\`\`js
const config = { apiUrl: "https://api.example.com", port: 3000 };
export default config;
\`\`\`

---

## Импорт из модуля

Чтобы использовать экспорт из другого файла — \`import\`:

Импорт нескольких именованных экспортов:
\`\`\`js
import { sum, mult } from './utils.js';
\`\`\`

Импорт всего как объекта:
\`\`\`js
import * as math from './utils.js';
console.log(math.mult(2, 4)); // 8
\`\`\`

Импорт по умолчанию:
\`\`\`js
import calc from './calc.js';
console.log(calc(5, 6)); // 11
\`\`\`

Можно совмещать:
\`\`\`js
import config, { PORT, HOST } from './settings.js';
\`\`\`

---

### Важно

- \`import\` и \`export\` — только на верхнем уровне файла (не в функциях, условиях и т.д.)
- Пути к файлам пишутся явно: \`'./utils.js'\`
- Для браузера обычно нужно расширение \`.js\`
- Файлы с \`import/export\` нужно подключать с \`type="module"\`

---

## Пример

\`\`\`js
// math.js
export const PI = 3.14;
export function area(radius) {
  return PI * radius * radius;
}
\`\`\`

\`\`\`js
// main.js
import { area } from './math.js';
console.log(area(5)); // 78.5
\`\`\`

---

## Итог

- \`export\` — делает переменные, функции и классы доступными вне модуля
- \`export default\` — основной экспорт одного значения/функции
- \`import\` — позволяет подключать код из других файлов

Модули — современный способ организации и переиспользования кода в JavaScript.
  `.trim(),

  codeExample: `
<!-- index.html -->
<script type="module" src="main.js"></script>
  `.trim(),

  codeExampleJS: `
// math.js
export const PI = 3.14;
export function area(radius) {
  return PI * radius * radius;
}

// main.js
import { area } from './math.js';
console.log(area(5)); // 78.5
  `.trim(),

  resources: [
    "https://learn.javascript.ru/modules-intro",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export",
  ],
};
export const js_import_2 = {
  id: "js_import_2",
  title: 'Использование type="module" в <script>',
  content: `
## Почему нельзя просто подключить модульный файл?

Если попытаться подключить файл с \`import\`/\`export\` так:
\`\`\`html
<script src="main.js"></script>
\`\`\`
Браузер выдаст ошибку:
\`Uncaught SyntaxError: Cannot use import statement outside a module\`

---

## Как правильно: type="module"

Чтобы скрипт работал как модуль, используйте:
\`\`\`html
<script type="module" src="main.js"></script>
\`\`\`

Теперь браузер будет обрабатывать файл как модуль:
- Разрешены \`import\` и \`export\`
- Переменные не попадают в глобальный \`window\`
- Скрипт загружается асинхронно (как \`defer\`)

---

### Особенности \`type="module"\`

- **Асинхронная загрузка**  
  Модули не блокируют страницу, загружаются как с \`defer\`
- **Локальная область видимости**  
  Переменные модуля не видны в \`window\`:
  \`\`\`js
  // script.js
  let a = 10;
  // window.a === undefined
  \`\`\`
- **Обязательный путь с расширением**  
  Всегда указывайте путь к модулю с \`.js\`:
  \`\`\`js
  import { sayHi } from './greetings.js';
  \`\`\`
- **CORS**  
  При загрузке модулей с другого домена должны быть разрешающие CORS-заголовки.
- **document.write() запрещён**  
  В модулях нельзя использовать \`document.write()\`.

---

### Можно ли писать модуль прямо в HTML?

Да, прямо в HTML:
\`\`\`html
<script type="module">
  import { sum } from './utils.js';
  console.log(sum(2, 3));
</script>
\`\`\`

---

## Зачем нужен type="module"?

- Делит код на независимые части
- Позволяет переиспользовать модули
- Дает современный синтаксис (\`import.meta\`, top-level await)
- Работает во всех современных браузерах без сборщиков

---

## Итог

Чтобы использовать модули (\`import\`/\`export\`) в браузере:
- Подключайте скрипты с \`type="module"\`
- Модули загружаются асинхронно, изолированы и требуют явного пути
- Современные браузеры поддерживают модульную систему "из коробки"
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <title>Пример модуля</title>
</head>
<body>
  <script type="module" src="main.js"></script>

  <!-- или прямо внутри HTML -->
  <script type="module">
    import { greet } from './greetings.js';
    greet('Мир');
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
// greetings.js
export function greet(name) {
  console.log(\`Привет, \${name}!\`);
}

// main.js
import { greet } from './greetings.js';
greet('Анна');
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules",
    "https://learn.javascript.ru/modules",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/script",
  ],
};
export const js_import_3 = {
  id: "js_import_3",
  title: "Структурирование проекта по модулям",
  content: `
## Зачем структурировать проект?

Когда проект растёт, весь код в одном файле становится неудобным:
- Сложно читать и поддерживать
- Много дублирующегося кода
- Нельзя повторно использовать логику в других проектах

**Решение:** разбить код на модули.

---

## Принцип модульности

Каждый модуль отвечает за одну конкретную задачу:
- Работа с формами
- Утилиты (форматирование дат и др.)
- Взаимодействие с API
- Отображение компонентов
- Маршрутизация и прочее

---

## Пример структуры проекта

\`\`\`
project/
│
├── index.html
├── main.js                 ← главный файл
│
├── modules/
│   ├── api.js              ← работа с сервером
│   ├── dom.js              ← функции для работы с DOM
│   └── helpers.js          ← утилиты и вспомогательные функции
│
└── components/
    ├── form.js
    └── modal.js
\`\`\`

---

## Пример подключения модулей

\`\`\`js
// main.js
import { fetchData } from './modules/api.js';
import { createCard } from './components/form.js';

fetchData().then(data => {
  const card = createCard(data);
  document.body.append(card);
});
\`\`\`

\`\`\`js
// modules/api.js
export async function fetchData() {
  const res = await fetch('https://example.com/data');
  return await res.json();
}
\`\`\`

\`\`\`js
// components/form.js
export function createCard(data) {
  const el = document.createElement('div');
  el.textContent = data.title;
  return el;
}
\`\`\`

---

## Советы по организации

- **Папки:** \`modules\`, \`utils\`, \`components\`, \`services\`, \`pages\`
- **Именование:** camelCase или kebab-case, но единообразно во всём проекте
- **Одна зона ответственности:** 1 модуль — 1 задача
- **Не смешивать DOM и API:** разделяй по разным модулям
- **Меньше функций в main.js:** выноси в отдельные модули и импортируй

---

## Итог

Модули делают проект:
- Масштабируемым
- Удобным для командной работы
- Легче тестируемым и расширяемым

Разделяй код по модулям — это стандарт современной разработки.
  `.trim(),

  codeExample: `
project/
│
├── index.html
├── main.js
│
├── modules/
│   ├── api.js
│   ├── dom.js
│   └── helpers.js
│
└── components/
    ├── form.js
    └── modal.js
  `.trim(),

  codeExampleJS: `
// main.js
import { fetchData } from './modules/api.js';
import { createCard } from './components/form.js';

fetchData().then(data => {
  const card = createCard(data);
  document.body.append(card);
});
  `.trim(),

  resources: [
    "https://learn.javascript.ru/modules-intro",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules",
  ],
};
