export const js_localStorage_1 = {
  id: "js_localStorage_1",
  title: "Что такое хранилище в браузере",
  content: `
Современные браузеры предоставляют встроенные механизмы хранения данных, которые позволяют сохранять информацию **прямо в браузере пользователя**. Это удобно, если нужно:

- запомнить настройки пользователя;
- сохранить состояние приложения между перезагрузками;
- реализовать корзину покупок, черновики и т.д.

В JavaScript есть два основных типа хранилищ:

1. **localStorage** — постоянное хранилище
2. **sessionStorage** — временное (только на время одной вкладки)

---

### Особенности хранилищ

| Свойство       | localStorage                   | sessionStorage                     |
| -------------- | ----------------------------- | ---------------------------------- |
| Срок хранения  | Пока не удалено вручную        | Пока не закрыта вкладка браузера   |
| Доступность    | На всех вкладках одного сайта  | Только в текущей вкладке           |
| Объём          | ~5–10 МБ                       | ~5 МБ                              |
| Интерфейс      | Одинаковый                     | Одинаковый                         |

---

### Как устроено хранилище

Оба типа работают как объект с ключами и строковыми значениями:

\`\`\`js
localStorage.setItem("name", "Анна");
let name = localStorage.getItem("name"); // "Анна"
\`\`\`

> **Важно:** Хранилище всегда сохраняет значения как **строки** — даже если вы передаёте число или объект.

---

### Когда использовать

- **localStorage** — если данные нужны даже после закрытия браузера (например, настройки темы, логин и т.д.).
- **sessionStorage** — если данные нужны только в рамках одной вкладки или сессии (например, временная форма).

---

### Вывод

Хранилище браузера — это простой способ хранить данные на стороне пользователя. Оно удобно для реализации пользовательских настроек, корзины, автосохранения и других сценариев, когда нужна "память" между перезагрузками страницы.
  `.trim(),

  codeExampleJS: `
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"

sessionStorage.setItem("temp", "123");
console.log(sessionStorage.getItem("temp")); // "123"
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage",
    "https://learn.javascript.ru/localstorage",
  ],
};
export const js_localStorage_2 = {
  id: "js_localStorage_2",
  title: "Методы: setItem, getItem, removeItem, clear",
  content: `
Оба хранилища — **localStorage** и **sessionStorage** — предоставляют одинаковый набор методов для работы с данными.

> **Важно:** Все ключи и значения сохраняются как строки.

---

### 1. setItem(key, value)
Сохраняет значение по указанному ключу.  
Если ключ уже существует, значение перезаписывается.

\`\`\`js
localStorage.setItem("name", "Анна");
sessionStorage.setItem("age", "28");
\`\`\`

---

### 2. getItem(key)
Получает значение по ключу.

\`\`\`js
const name = localStorage.getItem("name");
console.log(name); // "Анна"
\`\`\`
Если ключа нет — возвращается \`null\`.

---

### 3. removeItem(key)
Удаляет запись по ключу.

\`\`\`js
localStorage.removeItem("name");
\`\`\`

---

### 4. clear()
Очищает всё хранилище.

\`\`\`js
sessionStorage.clear(); // удаляет все данные sessionStorage
\`\`\`

---

### Пример использования

\`\`\`js
// Сохраняем данные
localStorage.setItem("city", "Москва");

// Получаем
console.log(localStorage.getItem("city")); // "Москва"

// Удаляем ключ
localStorage.removeItem("city");

// Проверяем
console.log(localStorage.getItem("city")); // null

// Сохраняем несколько данных
localStorage.setItem("a", "1");
localStorage.setItem("b", "2");

// Полная очистка
localStorage.clear();
\`\`\`

---

### Как посмотреть хранилище

Открой DevTools → вкладка **Application** → **Local Storage** / **Session Storage**, чтобы увидеть все сохранённые ключи и значения.

---

### Вывод

Методы setItem, getItem, removeItem, clear позволяют удобно сохранять, получать и удалять данные в хранилище браузера.
  `.trim(),

  codeExampleJS: `
localStorage.setItem("user", "Анна");
console.log(localStorage.getItem("user")); // "Анна"
localStorage.removeItem("user");
localStorage.clear();
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Storage",
    "https://learn.javascript.ru/localstorage",
  ],
};
export const js_localStorage_3 = {
  id: "js_localStorage_3",
  title: "Хранение сложных данных",
  content: `
Оба хранилища — **localStorage** и **sessionStorage** — могут хранить **только строки**.  
Если попытаться сохранить объект или массив напрямую, получится бесполезная строка типа \`"[object Object]"\`.

**Решение:**  
Чтобы сохранить структуру данных (объект, массив), используют \`JSON.stringify()\` при сохранении и \`JSON.parse()\` при чтении.

---

### Сохранение объекта

\`\`\`js
const user = {
  name: "Анна",
  age: 28
};

const str = JSON.stringify(user);          // преобразуем в строку
localStorage.setItem("user", str);         // сохраняем

const raw = localStorage.getItem("user");  // читаем строку
const parsed = JSON.parse(raw);            // обратно в объект

console.log(parsed.name); // "Анна"
\`\`\`

---

### Сохранение массива

\`\`\`js
const tasks = [
  { id: 1, text: "Купить хлеб", done: false },
  { id: 2, text: "Почитать книгу", done: true }
];

sessionStorage.setItem("tasks", JSON.stringify(tasks));

const raw = sessionStorage.getItem("tasks");
const restored = JSON.parse(raw);

console.log(restored.length); // 2
\`\`\`

---

### Что нельзя сохранить

\`JSON.stringify()\` **не сохраняет**:

- функции
- \`undefined\`
- специальные типы (\`Date\`, \`Map\`, \`Set\` и др.)

\`\`\`js
const obj = {
  name: "Анна",
  greet: () => "Привет",
  age: undefined
};

console.log(JSON.stringify(obj)); // {"name":"Анна"}
\`\`\`
Функция и \`undefined\` не попадут в результат.

---

### Общая схема

- Перед сохранением: **JSON.stringify()**
- После получения:   **JSON.parse()**

---

**Вывод:**  
Для хранения сложных структур используйте сериализацию через JSON. Это универсальный способ обмена данными в браузере и при работе с API.
  `.trim(),

  codeExampleJS: `
const notes = [{ id: 1, text: "Test" }];
localStorage.setItem("notes", JSON.stringify(notes));

const restoredNotes = JSON.parse(localStorage.getItem("notes"));
console.log(restoredNotes[0].text); // "Test"
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Storage",
    "https://learn.javascript.ru/localstorage",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON",
  ],
};
export const js_localStorage_4 = {
  id: "js_localStorage_4",
  title: "Различия между localStorage и sessionStorage",
  content: `
**localStorage** и **sessionStorage** — оба предназначены для хранения данных в браузере, работают с одним API (\`setItem\`, \`getItem\`, \`removeItem\`, \`clear\`). Но есть ключевые отличия:

---

### 1. Срок хранения

| Хранилище      | Сколько живут данные?                                   |
| -------------- | ------------------------------------------------------ |
| localStorage   | Постоянно, пока пользователь или скрипт не удалит      |
| sessionStorage | Только пока открыта вкладка браузера                   |

- **localStorage**: данные сохраняются даже после закрытия и открытия браузера.
- **sessionStorage**: данные стираются при закрытии вкладки.

---

### 2. Область видимости

| Хранилище      | Где доступны данные?           |
| -------------- | ----------------------------- |
| localStorage   | На всех вкладках одного сайта  |
| sessionStorage | Только в текущей вкладке       |

- **localStorage**: доступен в любой вкладке одного домена.
- **sessionStorage**: только в текущей вкладке (даже на том же сайте — вкладки изолированы).

---

### 3. Объём хранения

- **localStorage**: обычно 5–10 МБ
- **sessionStorage**: около 5 МБ

Для больших объёмов используют другие технологии (например, IndexedDB).

---

### 4. Независимость данных

Даже если ключ совпадает, значения в разных хранилищах не пересекаются:

\`\`\`js
localStorage.setItem("name", "Анна");
sessionStorage.setItem("name", "Ольга");

console.log(localStorage.getItem("name"));   // "Анна"
console.log(sessionStorage.getItem("name")); // "Ольга"
\`\`\`

---

### 5. Когда что использовать?

| Сценарий                                    | Что выбрать    |
| ------------------------------------------- | -------------- |
| Настройки, имя пользователя, язык           | localStorage   |
| Черновик формы (только в одной вкладке)     | sessionStorage |
| Запоминание, авторизация пользователя       | localStorage   |
| Временное хранение до отправки              | sessionStorage |

---

### Вывод

| Хранилище      | Время жизни          | Видимость      | Объём    |
| -------------- | -------------------- | -------------- | -------- |
| localStorage   | Постоянное           | Все вкладки    | ~5-10МБ  |
| sessionStorage | Пока вкладка открыта | Только текущая | ~5МБ     |

Оба способа часто используются совместно с JSON для хранения структурированных данных.
  `.trim(),

  codeExampleJS: `
localStorage.setItem("color", "blue");
sessionStorage.setItem("color", "green");

console.log(localStorage.getItem("color"));   // "blue"
console.log(sessionStorage.getItem("color")); // "green"
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage",
    "https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage",
    "https://learn.javascript.ru/localstorage",
  ],
};
