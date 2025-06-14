export const js_DOM_1 = {
  id: "js_DOM_1",
  title: "Что такое DOM и зачем он нужен",
  content: `
## Что такое DOM

**DOM** (Document Object Model) — это объектная модель HTML-документа, которую браузер создает при загрузке страницы. Каждый тег превращается в объект (узел), а вложенность образует иерархию.

---

### Зачем нужен DOM

С помощью DOM JavaScript может:

- Находить элементы на странице
- Изменять текст, HTML, атрибуты
- Добавлять и удалять теги
- Изменять стили
- Реагировать на действия пользователя
- Создавать динамические интерфейсы

---

## DOM = интерфейс между JS и HTML

JavaScript не видит HTML напрямую, а работает через DOM.

**Пример:**
\`\`\`html
<p id="message">Привет!</p>
\`\`\`
\`\`\`js
const p = document.getElementById("message");
p.textContent = "До встречи!";
\`\`\`
Теперь на экране: "До встречи!".

---

## DOM-структура (визуально)

\`\`\`
Document
└── html
    └── body
        ├── h1
        └── p
\`\`\`
---

## Итог

DOM — это структура объектов, соответствующая HTML-странице.  
Позволяет JS управлять веб-страницей: находить, изменять элементы, стили, слушать события.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 id="greeting">Привет, мир!</h1>
  <p id="message">Это абзац.</p>
  <div class="card">
    <p>Это блок с границей, фоном и скруглёнными углами.</p>
  </div>
  <div class="circle"></div>
  <script>
    // Пример изменения DOM через JS:
    document.getElementById("greeting").textContent = "Добро пожаловать!";
    document.getElementById("message").style.color = "blue";
  </script>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.card {
  width: 300px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 2px dashed #888;
  border-radius: 12px;
  margin: 40px auto;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: #4caf50;
  border-radius: 50%;
  margin: 20px auto;
}
  `.trim(),

  codeExampleJS: `
const p = document.getElementById("message");
p.textContent = "До встречи!";
// Теперь текст в <p> изменён через DOM
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction",
    "https://learn.javascript.ru/dom-nodes",
  ],
};
export const js_DOM_2 = {
  id: "js_DOM_2",
  title: "Поиск элементов: getElementById, querySelector, querySelectorAll",
  content: `
## Поиск элементов в DOM

Чтобы управлять элементами на странице, их нужно сначала найти. Для этого используются специальные методы:

---

### 1. getElementById

Находит **один элемент по уникальному id**.

\`\`\`html
<p id="intro">Привет!</p>
\`\`\`
\`\`\`js
const paragraph = document.getElementById("intro");
console.log(paragraph.textContent); // Привет!
\`\`\`

- Работает быстро, только для одного элемента.
- Возвращает \`null\`, если элемент не найден.

---

### 2. querySelector

Находит **первый элемент по CSS-селектору**.

\`\`\`html
<p class="text">Абзац 1</p>
<p class="text">Абзац 2</p>
\`\`\`
\`\`\`js
const firstText = document.querySelector(".text");
console.log(firstText.textContent); // Абзац 1
\`\`\`

- Поддерживает любые селекторы (\`.class\`, \`#id\`, \`tag\`, \`[attr]\`).
- Возвращает \`null\`, если элемент не найден.

---

### 3. querySelectorAll

Находит **все элементы по CSS-селектору**.

\`\`\`js
const allTexts = document.querySelectorAll(".text");
allTexts.forEach((el) => {
  console.log(el.textContent);
});
// Абзац 1
// Абзац 2
\`\`\`

- Возвращает \`NodeList\` (похож на массив).
- Подходит для работы с группой элементов.

---

| Метод              | Что возвращает                | Селекторы        |
| ------------------ | ---------------------------- | ---------------- |
| getElementById     | Один элемент по id           | Только id        |
| querySelector      | Первый подходящий элемент    | Любой селектор   |
| querySelectorAll   | Все подходящие элементы      | Любой селектор   |

---

**Примеры использования:**

- Кнопка с \`id="submit"\` → \`getElementById("submit")\`
- Первый абзац в блоке → \`querySelector("div p")\`
- Все чекбоксы формы → \`querySelectorAll("input[type='checkbox']")\`

---

## Итог

- Используйте \`getElementById\`, если знаете id.
- \`querySelector\` — для гибкого поиска одного элемента.
- \`querySelectorAll\` — для выбора группы элементов.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <button id="submit">Отправить</button>
  <p class="msg">Первая строка</p>
  <p class="msg">Вторая строка</p>
  <input type="checkbox" name="a" checked>
  <input type="checkbox" name="b">
  <script>
    // Поиск по id
    const btn = document.getElementById("submit");
    btn.textContent = "Готово!";

    // Поиск первого по классу
    const firstMsg = document.querySelector(".msg");
    firstMsg.style.color = "green";

    // Поиск всех чекбоксов
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(cb => cb.checked = false);
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
// Поиск по id
const btn = document.getElementById("submit");

// Поиск первого по классу
const firstMsg = document.querySelector(".msg");

// Поиск всех чекбоксов
const checkboxes = document.querySelectorAll("input[type='checkbox']");
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById",
    "https://learn.javascript.ru/searching-elements-dom",
  ],
};
export const js_DOM_3 = {
  id: "js_DOM_3",
  title: "Изменение содержимого: textContent, innerHTML, value",
  content: `
## Как менять содержимое элементов в DOM

После того как нашли элемент, можно изменить его содержимое разными способами — в зависимости от типа.

---

### 1. textContent

**Меняет только текст** внутри элемента.

\`\`\`html
<p id="welcome">Привет, гость!</p>
\`\`\`
\`\`\`js
const p = document.getElementById("welcome");
console.log(p.textContent); // Привет, гость!
p.textContent = "Добро пожаловать!";
\`\`\`

- Безопасен для пользовательского ввода (HTML не интерпретируется).
- Только текст.

---

### 2. innerHTML

**Позволяет вставлять HTML-разметку**.

\`\`\`html
<div id="content"></div>
\`\`\`
\`\`\`js
const div = document.getElementById("content");
div.innerHTML = "<strong>Привет!</strong>";
\`\`\`

- Можно вставлять теги, списки, любые фрагменты HTML.
- Будьте осторожны с данными пользователя (опасность XSS).

---

### 3. value

**Для формовых элементов**: input, textarea, select.

\`\`\`html
<input id="nameInput" value="Анна">
\`\`\`
\`\`\`js
const input = document.getElementById("nameInput");
console.log(input.value); // Анна
input.value = "Мария";
\`\`\`

- Используется только для элементов формы.
- Получает или меняет значение ввода.

---

| Свойство      | Где используется        | Что делает                       |
| ------------- | ----------------------- | -------------------------------- |
| textContent   | В любых элементах       | Читает/меняет текст              |
| innerHTML     | В любых элементах       | Читает/меняет HTML-код           |
| value         | Только в input/textarea | Читает/меняет значение ввода     |

---

**Резюме:**

- \`textContent\` — для простого текста (без HTML).
- \`innerHTML\` — если нужна разметка (HTML).
- \`value\` — для работы с полями форм.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <p id="welcome">Привет, гость!</p>
  <div id="content"></div>
  <input id="nameInput" value="Анна">
  <script>
    // textContent
    document.getElementById("welcome").textContent = "Добро пожаловать!";
    // innerHTML
    document.getElementById("content").innerHTML = "<b>Вы успешно вошли!</b>";
    // value
    document.getElementById("nameInput").value = "Мария";
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
// textContent — только текст
p.textContent = "Добро пожаловать!";

// innerHTML — вставка HTML
div.innerHTML = "<strong>Привет!</strong>";

// value — для input/textarea
input.value = "Мария";
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Node/textContent",
    "https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML",
    "https://developer.mozilla.org/ru/docs/Web/API/HTMLInputElement/value",
    "https://learn.javascript.ru/basic-dom-node-properties",
  ],
};
export const js_DOM_4 = {
  id: "js_DOM_4",
  title: "Изменение стилей и классов: style, classList.add/remove/toggle",
  content: `
## Как менять внешний вид элементов через JS

Иногда нужно изменить цвет, размер или скрыть элемент. В JavaScript для этого используют:

- \`element.style\` — прямое изменение инлайновых стилей
- \`element.classList\` — управление CSS-классами

---

### 1. Свойство style

Позволяет задать любые CSS-свойства **конкретному элементу** (инлайново).

\`\`\`html
<div id="box">Прямоугольник</div>
\`\`\`
\`\`\`js
const box = document.getElementById("box");
box.style.backgroundColor = "lightblue";
box.style.width = "200px";
box.style.display = "none";
\`\`\`

- Свойства пишутся в camelCase: \`backgroundColor\`, \`fontSize\`
- Инлайновые стили перекрывают стили из CSS-файлов

---

### 2. Свойство classList

Позволяет **добавлять, убирать, переключать** классы.

\`\`\`html
<div id="alert" class="message hidden">Ошибка</div>
\`\`\`
\`\`\`js
const alert = document.getElementById("alert");
alert.classList.remove("hidden");    // Показываем
alert.classList.add("visible");      // Добавляем класс
alert.classList.toggle("hidden");    // Переключаем (если есть — уберёт, нет — добавит)
\`\`\`

#### Часто используемые методы classList:

| Метод                 | Что делает                                  |
| --------------------- | ------------------------------------------- |
| add("class")          | Добавляет класс                             |
| remove("class")       | Удаляет класс                               |
| toggle("class")       | Если есть — убирает, нет — добавляет        |
| contains("class")     | Проверяет, есть ли класс                    |

---

### Пример: сменить цвет по клику
\`\`\`js
button.addEventListener("click", () => {
  button.classList.add("clicked");
  block.classList.toggle("hidden");
});
\`\`\`

---

| Задача                                  | Что использовать      |
| ---------------------------------------- | --------------------- |
| Быстро задать уникальный стиль           | \`element.style\`     |
| Применить заранее определённые стили     | \`element.classList\` |

---

**Резюме:**

- Используйте \`style\` для быстрого и уникального изменения внешнего вида.
- Используйте \`classList\` для применения CSS-классов и повторного использования стилей.
- Классы — предпочтительный способ стилизации (масштабируемо и удобно для команды).
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .hidden { display: none; }
    .highlight { background: yellow; }
    #box { width: 100px; height: 50px; background: gray; margin: 12px 0; }
  </style>
</head>
<body>
  <div id="box">Прямоугольник</div>
  <div id="alert" class="message hidden">Ошибка!</div>
  <button id="showBtn">Показать ошибку</button>
  <button id="colorBtn">Изменить цвет</button>
  <script>
    // Работаем со стилями и классами
    document.getElementById("colorBtn").onclick = function() {
      document.getElementById("box").style.backgroundColor = "lightblue";
    }
    document.getElementById("showBtn").onclick = function() {
      const alert = document.getElementById("alert");
      alert.classList.toggle("hidden");
      alert.classList.add("highlight");
    }
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
// Прямое изменение стиля (инлайн)
box.style.width = "200px";
box.style.backgroundColor = "orange";

// Добавление и удаление классов
alert.classList.remove("hidden");
alert.classList.add("error");
alert.classList.toggle("highlight");
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Element/classList",
    "https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/style",
    "https://learn.javascript.ru/basic-dom-styling",
  ],
};
export const js_DOM_5 = {
  id: "js_DOM_5",
  title: "Создание и удаление элементов: createElement, append, remove",
  content: `
## Как создавать и удалять элементы через JS

Динамический интерфейс часто требует добавлять или удалять элементы в DOM. Всё это делается специальными методами.

---

### 1. Создание элемента: \`document.createElement\`

Создаёт новый элемент с указанным тегом.

\`\`\`js
const newDiv = document.createElement("div");
newDiv.textContent = "Я новый элемент";
\`\`\`

Элемент **не появляется на странице**, пока не будет добавлен вручную.

---

### 2. Добавление элемента: \`append\`, \`appendChild\`

- \`append(elem)\` — добавляет элемент (или текст) в конец другого.
- \`appendChild(elem)\` — тоже добавляет в конец, но только элементы (не текст).

\`\`\`js
const container = document.getElementById("container");
container.append(newDiv); // Теперь div виден на странице

// Можно сразу задать класс или стиль:
newDiv.classList.add("box");
newDiv.style.backgroundColor = "lightgray";
\`\`\`

---

### 3. Удаление элемента: \`remove()\`

- \`element.remove()\` — полностью удаляет элемент со страницы.

\`\`\`js
newDiv.remove(); // Удаляет созданный div из DOM
\`\`\`

- Если нужно удалить по родителю: \`parent.removeChild(child)\`

---

### Пример: создаём и удаляем кнопку

\`\`\`html
<div id="controls"></div>
\`\`\`
\`\`\`js
const controls = document.getElementById("controls");

// Создание кнопки
const btn = document.createElement("button");
btn.textContent = "Удалить меня";

// Добавление в DOM
controls.append(btn);

// Удаление по клику
btn.addEventListener("click", () => {
  btn.remove();
});
\`\`\`

---

| Метод         | Описание                                   |
| ------------- | ------------------------------------------ |
| createElement | Создаёт элемент                            |
| append        | Добавляет в конец (элементы и текст)       |
| appendChild   | Добавляет в конец (только элементы)        |
| remove        | Удаляет элемент                            |
| removeChild   | Удаляет потомка по ссылке от родителя      |

---

## Резюме

- Используйте \`createElement\` для создания новых DOM-элементов.
- Для вставки в страницу — \`append\`, \`appendChild\`.
- Для удаления — \`remove()\` или \`removeChild()\`.
`.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      padding: 12px 16px;
      margin: 10px 0;
      background: #f8f8f8;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1.1em;
    }
  </style>
</head>
<body>
  <div id="container"></div>
  <button id="addBtn">Добавить элемент</button>
  <script>
    const container = document.getElementById("container");
    const addBtn = document.getElementById("addBtn");

    addBtn.onclick = () => {
      // 1. Создать элемент
      const newDiv = document.createElement("div");
      newDiv.className = "box";
      newDiv.textContent = "Кликни, чтобы удалить меня!";
      // 2. Добавить элемент в DOM
      container.append(newDiv);
      // 3. Удалять по клику
      newDiv.onclick = () => newDiv.remove();
    };
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
// Создать элемент
const box = document.createElement("div");
box.textContent = "Я динамичный элемент";
box.className = "box";

// Добавить в DOM
document.body.append(box);

// Удалить через 3 секунды
setTimeout(() => box.remove(), 3000);
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Document/createElement",
    "https://developer.mozilla.org/ru/docs/Web/API/Element/append",
    "https://developer.mozilla.org/ru/docs/Web/API/Element/remove",
    "https://learn.javascript.ru/modifying-document",
  ],
};
export const js_DOM_6 = {
  id: "js_DOM_6",
  title: "Обработка событий: addEventListener, event.target, preventDefault",
  content: `
## Что такое событие

**Событие** — это любое действие пользователя или браузера: клик, нажатие клавиши, ввод текста, отправка формы, загрузка страницы и др.

Чтобы "реагировать" на событие, навешивают обработчик — функцию, которая срабатывает при наступлении события.

---

### 1. Назначение обработчика: \`addEventListener\`

Привязывает обработчик к нужному элементу и событию:

\`\`\`js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Кнопка нажата");
});
\`\`\`

- Первый аргумент — тип события ("click", "input", "keydown", ...).
- Второй — функция-обработчик.

---

### 2. Объект события: \`event\`

В обработчик автоматически передаётся объект события (event):

\`\`\`js
button.addEventListener("click", function (event) {
  console.log("Тип события:", event.type);   // "click"
  console.log("Элемент:", event.target);     // элемент, по которому кликнули
});
\`\`\`

---

### 3. Получение источника: \`event.target\`

\`event.target\` — элемент, где произошло событие (важно для делегирования):

\`\`\`js
document.addEventListener("click", function (event) {
  console.log("Вы нажали на:", event.target.tagName);
});
\`\`\`

---

### 4. Отмена поведения: \`preventDefault\`

Чтобы отменить действие браузера по умолчанию (например, переход по ссылке или отправку формы):

\`\`\`js
const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Переход отменён");
});
\`\`\`

---

### Пример: обработка отправки формы

\`\`\`html
<form id="myForm">
  <input type="text" />
  <button>Отправить</button>
</form>
\`\`\`
\`\`\`js
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // страница не перезагрузится
  console.log("Форма отправлена");
});
\`\`\`

---

### Часто используемые события

| Событие     | Когда возникает                             |
| ----------- | ------------------------------------------- |
| click       | Клик мыши                                   |
| input       | Ввод текста в поле                          |
| submit      | Отправка формы                              |
| keydown     | Нажатие клавиши                             |
| mouseover   | Наведение курсора                           |
| change      | Изменение значения <select>/<input>         |

---

## Резюме

- \`addEventListener\` — основной способ "слушать" события.
- \`event.target\` — определяет, где произошло событие.
- \`event.preventDefault()\` — отменяет действие по умолчанию (например, переход по ссылке, отправку формы).
`.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <button id="helloBtn">Сказать привет</button>
  <a href="https://yandex.ru" id="myLink">Перейти</a>
  <form id="form">
    <input type="text" name="text">
    <button>Отправить</button>
  </form>
  <script>
    document.getElementById("helloBtn").addEventListener("click", () => {
      alert("Привет!");
    });

    document.getElementById("myLink").addEventListener("click", function(e) {
      e.preventDefault();
      alert("Переход отменён");
    });

    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Форма отправлена!");
    });
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
// Пример делегирования:
document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Клик по кнопке:", event.target.textContent);
  }
});
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener",
    "https://learn.javascript.ru/introduction-browser-events",
    "https://developer.mozilla.org/ru/docs/Web/API/Event",
  ],
};
