export const js_bestPractices_1 = {
  id: "js_bestPractices_1",
  title: "Введение в XSS и защита через textContent вместо innerHTML",
  content: `
## Что такое XSS (Cross-Site Scripting)

**XSS** — это уязвимость, когда злоумышленник внедряет вредоносный JavaScript-код на сайт, чтобы он выполнился у других пользователей.

---

### Пример XSS-атаки

\`\`\`js
const name = prompt("Введите имя");
document.getElementById("output").innerHTML = "Привет, " + name;
\`\`\`
Если пользователь введёт \`<script>alert("Вы взломаны!")</script>\`, код будет исполнен.

---

## Как защититься: используйте textContent

- \`innerHTML\` вставляет HTML-код напрямую — это опасно для пользовательских данных.
- \`textContent\` вставляет только текст, не интерпретируя HTML.

**Безопасный пример:**
\`\`\`js
const name = prompt("Введите имя");
document.getElementById("output").textContent = "Привет, " + name;
\`\`\`
Любой HTML отобразится как текст, не будет исполнен.

---

### Использование createElement и textContent

\`\`\`js
const p = document.createElement("p");
p.textContent = userComment;
document.body.appendChild(p);
\`\`\`
Такой подход защищает от XSS.

---

## Общие рекомендации

- Не используйте \`innerHTML\`, \`outerHTML\`, \`insertAdjacentHTML\` для пользовательских данных.
- Для вставки текста всегда используйте \`textContent\` или \`setAttribute\`.
- Если нужно вставить HTML — обязательно очищайте его через специальные библиотеки (например, [DOMPurify](https://github.com/cure53/DOMPurify)).

`.trim(),

  codeExampleJS: `
const name = prompt("Введите имя");
//  Опасно:
document.getElementById("output").innerHTML = "Привет, " + name;
//  Безопасно:
document.getElementById("output").textContent = "Привет, " + name;
  `.trim(),

  resources: [
    "https://learn.javascript.ru/xss",
    "https://developer.mozilla.org/ru/docs/Web/API/Node/textContent",
    "https://github.com/cure53/DOMPurify",
  ],
};
export const js_bestPractices_2 = {
  id: "js_bestPractices_2",
  title: "Никогда не доверять пользовательскому вводу",
  content: `
## Почему это важно

**Пользовательский ввод** — это любые данные извне: из форм, URL, внешних API, localStorage, параметров запроса и др.

Такой ввод **никогда нельзя использовать напрямую** — особенно если:

- Вставляете в HTML (\`innerHTML\`, \`href\`, \`style\`)
- Отправляете на сервер без проверки
- Используете в логике программы без валидации

---

## Примеры потенциальных проблем

**1. Ввод без проверки**
\`\`\`html
<input id="ageInput">
<button onclick="checkAge()">Проверить</button>
<script>
  function checkAge() {
    const age = document.getElementById("ageInput").value;
    if (age > 18) {
      alert("Доступ разрешён");
    }
  }
</script>
\`\`\`

- Если ввести \`20\` — всё ок.
- Если ввести \`20; alert('XSS')\` — при использовании значения в \`eval\` или \`innerHTML\` возможна атака.

**2. Вставка в DOM без валидации**
\`\`\`js
const userInput = getFromSomewhere();
document.getElementById("output").innerHTML = userInput;
\`\`\`
- \`userInput\` может содержать любой HTML или JS.

---

## Как защищаться

- **Валидация:** проверяйте тип, длину, допустимые символы.
  \`\`\`js
  if (typeof name === "string" && name.length < 100) {
    // Можно использовать
  }
  \`\`\`
- **Экранирование:** для HTML всегда используйте \`textContent\`.
- **Ограничение доверия:** доверяйте только серверу, а не клиенту или параметрам URL.
- **Используйте библиотеки:** для HTML-ввода применяйте [DOMPurify](https://github.com/cure53/DOMPurify).

---

## Итог

**Всегда** обрабатывайте пользовательский ввод как потенциально опасный. Даже если «пользователь — это вы».

`.trim(),

  codeExampleJS: `
//  Плохо: ввод сразу в HTML
document.getElementById("output").innerHTML = userInput;

//  Хорошо: безопасно вставлять только через textContent
document.getElementById("output").textContent = userInput;
  `.trim(),

  resources: [
    "https://learn.javascript.ru/xss",
    "https://developer.mozilla.org/ru/docs/Web/API/Node/textContent",
    "https://github.com/cure53/DOMPurify",
  ],
};
export const js_bestPractices_3 = {
  id: "js_bestPractices_3",
  title: "try...catch и надёжность",
  content: `
## Зачем нужен try...catch

Ошибки в коде случаются часто: неправильные данные, опечатки, сетевые сбои, ошибки парсинга. Если их не ловить — приложение может остановиться.

---

## Как работает try...catch

\`\`\`js
try {
  // Код, который может вызвать ошибку
} catch (error) {
  // Обработка ошибки
}
\`\`\`

---

### Пример 1. Ошибка без обработки

\`\`\`js
const json = '{ name: "Анна" }'; // Ошибка: имя не в кавычках
const data = JSON.parse(json);   // Программа завершится с ошибкой
console.log(data);
\`\`\`

---

### Пример 2. С обработкой ошибки

\`\`\`js
const json = '{ name: "Анна" }';

try {
  const data = JSON.parse(json);
  console.log(data);
} catch (error) {
  console.log("Ошибка при разборе JSON:", error.message);
}
\`\`\`
Теперь программа не "падает", а показывает сообщение об ошибке и продолжает работать.

---

### Пример 3. Блок finally

\`\`\`js
try {
  connectToServer();
} catch (e) {
  console.error("Не удалось подключиться");
} finally {
  hideLoader();
}
\`\`\`
Блок \`finally\` выполняется всегда — даже если была ошибка или return.

---

## Что ловит try...catch

- Ловит ошибки **выполнения** (ReferenceError, TypeError, ошибки парсинга и т.п.)
- **Не ловит синтаксические ошибки** (например, опечатки в коде)

---

## Общие рекомендации

- Оборачивайте в try...catch только потенциально опасные места, а не весь код подряд
- Не оставляйте \`catch\` пустым — обязательно логируйте или информируйте пользователя
- Не используйте try...catch для проверки наличия элементов — сначала проверьте их существование

---

## Итог

\`try...catch\` помогает сделать код устойчивым: ловить ошибки, не "ронять" приложение и обрабатывать сбои предсказуемо.
  `.trim(),

  codeExampleJS: `
// Плохо: не ловим ошибку — программа "падает"
const json = '{ name: "Анна" }';
const data = JSON.parse(json); // SyntaxError

// Хорошо: ошибка обработана
try {
  const data = JSON.parse(json);
  console.log(data);
} catch (e) {
  console.log("Ошибка при разборе JSON:", e.message);
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch",
    "https://learn.javascript.ru/try-catch",
  ],
};
export const js_bestPractices_4 = {
  id: "js_bestPractices_4",
  title: "Использование const и let (не var)",
  content: `
## Почему var — устарел

До ES6 (2015) переменные объявляли только через \`var\`, но сейчас его использовать **не рекомендуется** из-за ряда проблем.

---

### 1. Область видимости

- \`var\` виден во всей функции (или глобально), даже если объявлен в блоке.

\`\`\`js
if (true) {
  var x = 5;
}
console.log(x); // 5 — доступен вне блока!
\`\`\`

- \`let\` и \`const\` работают только внутри блока, где объявлены.

\`\`\`js
if (true) {
  let y = 10;
}
console.log(y); // ReferenceError
\`\`\`

---

### 2. Повторное объявление

- \`var\` позволяет объявить переменную повторно (может привести к ошибкам):

\`\`\`js
var a = 1;
var a = 2; // ОК
\`\`\`

- \`let\` и \`const\` — нельзя объявить дважды:

\`\`\`js
let b = 1;
let b = 2; // SyntaxError
\`\`\`

---

### 3. Всплытие (hoisting)

- \`var\` "всплывает" вверх функции, но инициализируется undefined.

\`\`\`js
console.log(foo); // undefined
var foo = 42;
\`\`\`

- \`let\`/\`const\` — не всплывают, использование до объявления вызывает ошибку:

\`\`\`js
console.log(bar); // ReferenceError
let bar = 42;
\`\`\`

---

### Когда использовать const и let

- **const** — по умолчанию для всех переменных, которые не будут изменяться.
- **let** — только если переменная будет изменяться (например, в цикле).

\`\`\`js
const name = "Анна";
let count = 0;

for (let i = 0; i < 3; i++) {
  count++;
}
\`\`\`

---

### Итог

- \`var\` не используйте вообще.
- Всегда начинайте с \`const\`.
- Переходите на \`let\` только если значение будет меняться.

  `.trim(),

  codeExampleJS: `
// Пример плохой практики:
var value = 10;
if (true) {
  var value = 20;
}
console.log(value); // 20 (неожиданно!)

// Современный подход:
const PI = 3.14;
let counter = 0;
for (let i = 0; i < 5; i++) {
  counter++;
}
console.log(counter); // 5
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const",
    "https://learn.javascript.ru/let-const",
  ],
};
export const js_bestPractices_5 = {
  id: "js_bestPractices_5",
  title: "Разделение логики и представления",
  content: `
## В чём суть принципа

**Логика** (что делает приложение) и **представление** (что видит пользователь: HTML, CSS) должны быть разделены.

---

### Почему это важно

- **Читаемость:** Код легче понять — видно, где что происходит.
- **Переиспользуемость:** Логику можно применять с разными интерфейсами.
- **Безопасность:** Меньше риск XSS, если данные вставляются только из JS.
- **Лёгкая отладка:** Проще найти ошибку — она в логике или отображении?

---

### Примеры

**Плохо (логика и разметка смешаны):**
\`\`\`html
<button onclick="count++; document.getElementById('result').textContent = count;">+</button>
<span id="result">0</span>
\`\`\`
Здесь данные и действия прямо в HTML — плохо для масштабируемости.

---

**Хорошо (логика и представление отдельно):**
\`\`\`html
<button id="increment">+</button>
<span id="result">0</span>
\`\`\`
\`\`\`js
let count = 0;
const button = document.getElementById('increment');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  count++;
  result.textContent = count;
});
\`\`\`

---

### В современной разработке

Фреймворки (React, Vue, Angular) поощряют разделение логики (JS-код, функции) и представления (HTML/JSX, шаблоны).

---

### Итоги

- Не пишите поведение прямо в HTML (не используйте \`onclick\`, \`onchange\` и т.п.)
- Вставляйте и обновляйте данные через JS, а не прямо из HTML.
- Держите структуру (HTML) отдельно от поведения (JS).

  `.trim(),

  codeExample: `
<!-- Плохо: логика в разметке -->
<button onclick="count++; document.getElementById('result').textContent = count;">+</button>
<span id="result">0</span>

<!-- Хорошо: только разметка -->
<button id="increment">+</button>
<span id="result">0</span>
  `.trim(),

  codeExampleJS: `
// Хорошо: логика в JS
let count = 0;
const button = document.getElementById('increment');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  count++;
  result.textContent = count;
});
  `.trim(),

  resources: [
    "https://learn.javascript.ru/structure",
    "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
  ],
};
export const js_bestPractices_6 = {
  id: "js_bestPractices_6",
  title: "Принципы чистого кода: DRY, KISS, YAGNI, SOLID",
  content: `
## Зачем нужны принципы?

**Принципы чистого кода** помогают писать понятный, надёжный и поддерживаемый код. Они предотвращают дублирование, излишнюю сложность и ошибки.

---

### DRY — Don't Repeat Yourself

**Не повторяйся**. Не копируйте одну и ту же логику в нескольких местах — вынесите её в функцию или модуль.

**Плохо:**
\`\`\`js
console.log("Привет, Иван!");
// ... через 20 строк
console.log("Привет, Иван!");
\`\`\`
**Хорошо:**
\`\`\`js
function greet(name) {
  console.log(\`Привет, \${name}!\`);
}
greet("Иван");
greet("Мария");
\`\`\`

---

### KISS — Keep It Simple, Stupid

**Пиши проще**. Избегайте ненужной сложности.

**Плохо:**
\`\`\`js
function isZero(n) {
  return !Boolean(n);
}
\`\`\`
**Хорошо:**
\`\`\`js
function isZero(n) {
  return n === 0;
}
\`\`\`

---

### YAGNI — You Ain’t Gonna Need It

**Не добавляй того, что не нужно сейчас.** Не программируйте "на будущее".

**Плохо:**
\`\`\`js
function add(a, b, options = {}) {
  // options пока не используются, но вдруг пригодятся...
  return a + b;
}
\`\`\`
**Хорошо:**
\`\`\`js
function add(a, b) {
  return a + b;
}
\`\`\`

---

### SOLID (для классов и архитектуры)

- **S** — Single Responsibility: Один класс — одна ответственность.
- **O** — Open/Closed: Код открыт для расширения, закрыт для изменения.
- **L** — Liskov Substitution: Потомок должен полностью заменять родителя.
- **I** — Interface Segregation: Много узких интерфейсов лучше одного общего.
- **D** — Dependency Inversion: Зависеть только от абстракций.

В JavaScript-функциях важно помнить про SRP (одна зона ответственности) и не бояться выносить код в отдельные функции.

---

## Итоги

- **DRY** — вынесите повторяющийся код в функции.
- **KISS** — пишите простой и прямой код.
- **YAGNI** — не программируйте "на всякий случай".
- **SOLID** — изучите при работе с классами и архитектурой.

  `.trim(),

  codeExample: `
function greet(name) {
  console.log(\`Привет, \${name}!\`);
}

function isZero(n) {
  return n === 0;
}

function add(a, b) {
  return a + b;
}
  `.trim(),

  resources: [
    "https://ru.hexlet.io/blog/posts/7-principov-kotorye-ulyuchshat-lyuboy-kod",
    "https://learn.javascript.ru/structure#chistyy-kod",
  ],
};
