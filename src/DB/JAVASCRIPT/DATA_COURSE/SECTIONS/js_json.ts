export const js_json_1 = {
  id: "js_json_1",
  title: "Что такое JSON и где он используется",
  content: `
## Что такое JSON

**JSON (JavaScript Object Notation)** — это текстовый формат для хранения и передачи структурированных данных, основанный на синтаксисе объектов JavaScript.

**Основные особенности:**
- Легко читается человеком
- Легко обрабатывается программой
- Используется для обмена данными между сервером и клиентом

**Пример JSON:**
\`\`\`json
{
  "name": "Анна",
  "age": 28,
  "isAdmin": false,
  "skills": ["HTML", "CSS", "JavaScript"]
}
\`\`\`
- Ключи обязательно в двойных кавычках.
- Значения — строки, числа, булевы, массивы, объекты или \`null\`.
- Это не JS-код, а именно строка в определённом формате.

---

### Чем JSON отличается от объекта JavaScript?

| Характеристика           | Объект JS          | JSON                   |
| ------------------------ | ------------------ | ---------------------- |
| Кавычки у ключей         | Не обязательны     | Обязательны (двойные)  |
| Комментарии              | Можно              | Нельзя                 |
| undefined                | Допустим           | Не поддерживается      |
| Функции внутри           | Можно              | Нельзя                 |

---

### Где используется JSON?

- **Обмен данными с сервером:**  
  Браузер отправляет запрос, получает ответ в формате JSON. Это стандартный способ общения между фронтендом и бэкендом.

- **Хранение данных:**  
  Можно сохранять строки JSON в localStorage браузера.

- **Сериализация и копирование:**  
  Для передачи объектов по сети или для глубокого копирования:  
  \`JSON.parse(JSON.stringify(obj))\`

---

### Почему JSON так популярен?

- Поддерживается всеми языками программирования
- Легче и безопаснее, чем XML
- Простая, универсальная структура (объекты и массивы)
- Является частью спецификации JavaScript

---

**Вывод:**  
JSON — это универсальный формат для обмена данными между программами и сервисами. Он прост, безопасен, и применяется везде: от API до хранения данных в браузере.
  `.trim(),

  codeExampleJS: `
const user = {
  name: "Анна",
  age: 28,
  isAdmin: false,
  skills: ["HTML", "CSS", "JavaScript"]
};

// Преобразование в JSON-строку:
const jsonString = JSON.stringify(user);

// Получение объекта из JSON-строки:
const parsedUser = JSON.parse(jsonString);

console.log(jsonString); // {"name":"Анна","age":28,"isAdmin":false,"skills":["HTML","CSS","JavaScript"]}
console.log(parsedUser.name); // "Анна"
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON",
    "https://learn.javascript.ru/json",
  ],
};
export const js_json_2 = {
  id: "js_json_2",
  title: "Преобразование объекта в строку: JSON.stringify()",
  content: `
## Что делает JSON.stringify()

Метод \`JSON.stringify()\` преобразует объект JavaScript в строку в формате JSON.

Зачем это нужно:
- Отправить данные на сервер (POST-запросы)
- Сохранить данные в localStorage (там можно хранить только строки)
- Сделать копию структуры объекта без функций и лишних ссылок

---

### Пример простого преобразования

\`\`\`js
const user = {
  name: "Анна",
  age: 28,
  isAdmin: false
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"Анна","age":28,"isAdmin":false}
\`\`\`

---

### Особенности преобразования

- Ключи всегда в **двойных кавычках**
- Функции, \`undefined\` и \`Symbol\` — игнорируются и не включаются в строку

\`\`\`js
const data = {
  name: "Анна",
  greet() { console.log("Привет"); },
  temp: undefined
};

console.log(JSON.stringify(data)); // {"name":"Анна"}
\`\`\`

---

### Вложенные объекты и массивы

\`JSON.stringify()\` сохраняет структуру вложенных объектов и массивов:

\`\`\`js
const post = {
  id: 1,
  title: "Новость",
  author: {
    name: "Анна",
    age: 28
  },
  tags: ["js", "новости"]
};

console.log(JSON.stringify(post));
// {"id":1,"title":"Новость","author":{"name":"Анна","age":28},"tags":["js","новости"]}
\`\`\`

---

### Форматирование (для удобства чтения)

Можно сделать строку красиво отформатированной для логов и отладки:

\`\`\`js
console.log(JSON.stringify(user, null, 2));
/*
{
  "name": "Анна",
  "age": 28,
  "isAdmin": false
}
*/
\`\`\`
- Второй параметр — функция-фильтр (используется редко, обычно \`null\`)
- Третий параметр — количество пробелов для отступа

---

### Исключение/включение определённых свойств

Можно указать, какие свойства оставить:

\`\`\`js
const short = JSON.stringify(user, ["name", "age"]);
console.log(short); // {"name":"Анна","age":28}
\`\`\`

---

### Использование в localStorage

\`\`\`js
localStorage.setItem("user", JSON.stringify(user));
\`\`\`

---

### Вывод

- \`JSON.stringify()\` — основной способ перевести объект или массив в строку JSON
- Игнорирует функции, \`undefined\` и \`Symbol\`
- Поддерживает вложенные структуры и форматирование
- Удобен для передачи и хранения данных в стандартизированном виде
`.trim(),

  codeExampleJS: `
const user = { name: "Анна", age: 28 };
const json = JSON.stringify(user);

console.log(json); // {"name":"Анна","age":28}
localStorage.setItem("user", json);
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
    "https://learn.javascript.ru/json",
  ],
};
export const js_json_3 = {
  id: "js_json_3",
  title: "Преобразование строки в объект: JSON.parse()",
  content: `
## Что делает JSON.parse()

Метод \`JSON.parse()\` преобразует строку в формате JSON обратно в объект JavaScript.

Это обратная операция к \`JSON.stringify()\`.

---

### Пример простого преобразования

\`\`\`js
const jsonString = '{"name":"Анна","age":28,"isAdmin":false}';
const user = JSON.parse(jsonString);

console.log(user.name); // "Анна"
console.log(user.age);  // 28
\`\`\`

---

### Требования к строке

- Ключи и строки — только в **двойных кавычках**
- **Нет** лишних запятых, комментариев, одиночных кавычек

\`\`\`js
const invalid = "{name: 'Анна'}";
JSON.parse(invalid); // Ошибка: SyntaxError
\`\`\`

---

### Пример с массивом

\`\`\`js
const json = '["html", "css", "js"]';
const skills = JSON.parse(json);

console.log(skills[1]); // "css"
\`\`\`

---

### Использование после чтения из localStorage

\`\`\`js
const stored = localStorage.getItem("user");
if (stored) {
  const user = JSON.parse(stored);
  console.log(user.name); // "Анна"
}
\`\`\`

---

### Восстановление вложенных структур

\`\`\`js
const json = \`
{
  "post": {
    "id": 1,
    "title": "Новость"
  },
  "tags": ["js", "новости"]
}
\`;

const data = JSON.parse(json);
console.log(data.post.title); // "Новость"
\`\`\`

---

### Дополнительно: функция reviver

Второй аргумент — функция \`reviver\`, позволяет обработать каждое значение во время парсинга.

\`\`\`js
const str = '{"date":"2025-06-01T00:00:00.000Z"}';

const obj = JSON.parse(str, (key, value) => {
  if (key === "date") {
    return new Date(value);
  }
  return value;
});

console.log(obj.date.getFullYear()); // 2025
\`\`\`

---

### Вывод

- \`JSON.parse()\` превращает JSON-строку в объект или массив
- Строка должна строго соответствовать формату JSON
- Часто используется при чтении из localStorage и при получении данных от сервера
`.trim(),

  codeExampleJS: `
const str = '{"x":10,"y":20}';
const point = JSON.parse(str);

console.log(point.x); // 10
console.log(point.y); // 20

// Пример с датой
const str2 = '{"created":"2025-01-01T00:00:00.000Z"}';
const obj = JSON.parse(str2, (key, value) => {
  if (key === "created") return new Date(value);
  return value;
});
console.log(obj.created.getFullYear()); // 2025
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
    "https://learn.javascript.ru/json",
  ],
};
export const js_json_4 = {
  id: "js_json_4",
  title: "Ошибки при работе с JSON (неправильный формат)",
  content: `
Работая с JSON, чаще всего ошибки возникают из-за невалидного формата данных. Рассмотрим основные причины и способы избежать проблем.

---

### 1. Только двойные кавычки

В JSON допустимы только двойные кавычки (\`"..."\`). Одинарные не работают:

\`\`\`js
// Ошибка:
const json = "{'name': 'Анна'}";
JSON.parse(json); // SyntaxError

// Правильно:
const json = '{"name": "Анна"}';
JSON.parse(json); // OK
\`\`\`

---

### 2. Ключи — только в кавычках

В объектах JS можно без кавычек, но не в JSON:

\`\`\`js
// Ошибка:
const str = "{name: \"Анна\"}";
JSON.parse(str); // SyntaxError

// Правильно:
const str = "{\"name\": \"Анна\"}";
JSON.parse(str); // OK
\`\`\`

---

### 3. Лишняя запятая

После последнего элемента запятая не допускается:

\`\`\`js
// Ошибка:
const json = '{"name":"Анна","age":28,}';
JSON.parse(json); // SyntaxError

// Правильно:
const json = '{"name":"Анна","age":28}';
\`\`\`

---

### 4. Запрещённые значения: undefined, Infinity, NaN, функции

В JSON такие значения не поддерживаются — при сериализации они игнорируются:

\`\`\`js
const user = {
  name: "Анна",
  age: undefined,
  greet() { return "Привет"; }
};

const json = JSON.stringify(user);
console.log(json); // {"name":"Анна"}

const parsed = JSON.parse(json); // age и greet отсутствуют
\`\`\`

---

### 5. Не до конца полученная или повреждённая строка

\`\`\`js
const broken = '{"name": "Анна", "age": 28'; // нет закрывающей скобки
JSON.parse(broken); // SyntaxError
\`\`\`

---

### Как обрабатывать ошибки

Чтобы не "уронить" приложение, всегда используйте \`try...catch\`:

\`\`\`js
try {
  const json = '{"name": "Анна"}';
  const user = JSON.parse(json);
  console.log(user.name);
} catch (error) {
  console.log("Ошибка при разборе JSON:", error.message);
}
\`\`\`

Это особенно важно, если данные приходят извне — из API, localStorage, файлов.

---

### Рекомендации

- Проверяйте JSON-строки в онлайн-валидаторах, например: [jsonlint.com](https://jsonlint.com)
- Формируйте JSON через \`JSON.stringify()\`, а не "вручную"
- Всегда оборачивайте \`JSON.parse()\` в \`try...catch\` при работе с ненадёжными источниками

---

**Вывод:**  
Самые частые ошибки — в синтаксисе. Следите за кавычками, отсутствием лишних запятых, не используйте функции и \`undefined\` в JSON. Обрабатывайте возможные ошибки через \`try...catch\`.
  `.trim(),

  codeExampleJS: `
try {
  // Ошибочная строка
  const json = "{name: 'Анна'}";
  const obj = JSON.parse(json);
} catch (e) {
  console.error("Ошибка:", e.message);
}

// Всегда оборачивайте парсинг JSON в try...catch
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON",
    "https://learn.javascript.ru/json",
  ],
};
export const js_json_5 = {
  id: "js_json_5",
  title: "Примеры: хранение, передача, копирование данных",
  content: `
JSON — универсальный инструмент для хранения, передачи и копирования данных. Вот основные примеры его использования:

---

### 1. Хранение данных в localStorage

В localStorage можно сохранять **только строки**. Чтобы сохранить объект, используем \`JSON.stringify()\`, чтобы получить строку, и \`JSON.parse()\` — чтобы восстановить объект:

\`\`\`js
const user = {
  name: "Анна",
  age: 28
};

// Сохраняем объект как строку
localStorage.setItem("user", JSON.stringify(user));

// Загружаем и преобразуем обратно в объект
const stored = localStorage.getItem("user");
const parsedUser = JSON.parse(stored);

console.log(parsedUser.name); // "Анна"
\`\`\`

---

### 2. Передача данных по сети (на сервер)

При отправке данных в API тело запроса часто нужно передать в формате JSON:

\`\`\`js
const data = {
  productId: 123,
  quantity: 2
};

fetch("/api/order", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
\`\`\`

На сервер отправится JSON-строка.

---

### 3. Копирование объекта

Если нужна "чистая" копия объекта без ссылок (глубокое копирование), можно использовать связку \`JSON.stringify()\` и \`JSON.parse()\`:

\`\`\`js
const original = {
  name: "Анна",
  tags: ["js", "html"]
};

const copy = JSON.parse(JSON.stringify(original));

copy.name = "Иван";
copy.tags.push("css");

console.log(original.name); // "Анна"
console.log(original.tags); // ["js", "html"]
console.log(copy.tags);     // ["js", "html", "css"]
\`\`\`

> **Важно:** этот способ не копирует функции, \`undefined\`, объекты типа \`Date\`, \`Map\`, \`Set\` и др. сложные типы.

---

### 4. Пример хранения списка задач

\`\`\`js
const tasks = [
  { id: 1, text: "Сделать домашку", done: false },
  { id: 2, text: "Купить хлеб", done: true }
];

// Сохраняем задачи в localStorage
localStorage.setItem("tasks", JSON.stringify(tasks));

// Восстанавливаем обратно в массив
const raw = localStorage.getItem("tasks");
const restoredTasks = JSON.parse(raw);

console.log(restoredTasks.length); // 2
\`\`\`

---

### Вывод

- JSON позволяет удобно хранить данные в браузере (например, через localStorage)
- Передавать и получать данные через сеть (API, fetch)
- Копировать простые структуры (без вложенных сложных объектов и функций)

Навыки работы с \`JSON.stringify()\` и \`JSON.parse()\` необходимы для любого веб-разработчика.
  `.trim(),

  codeExampleJS: `
const user = { name: "Анна", age: 28 };
localStorage.setItem("user", JSON.stringify(user));
const userCopy = JSON.parse(localStorage.getItem("user"));
console.log(userCopy.name); // "Анна"
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON",
    "https://learn.javascript.ru/json",
  ],
};
