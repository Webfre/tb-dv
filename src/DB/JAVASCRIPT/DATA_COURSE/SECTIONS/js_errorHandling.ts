export const js_errorHandling_1 = {
  id: "js_errorHandling_1",
  title: "Конструкция try...catch",
  content: `
## Зачем нужна обработка ошибок

В любом приложении могут возникать ошибки во время выполнения — например, при загрузке данных, работе с вводом пользователя, чтении файлов и др.

Если не обработать ошибку, программа может прервать выполнение и показать пользователю непонятное сообщение или ничего не показать.

Чтобы этого избежать, в JavaScript используется конструкция **try...catch**.

---

## Синтаксис

\`\`\`js
try {
  // Код, который может вызвать ошибку
} catch (error) {
  // Код, который выполнится, если произошла ошибка
}
\`\`\`

- **try** — блок с "опасным" кодом.
- **catch** — сработает, если в try произошла ошибка.

---

## Пример: простая ошибка

\`\`\`js
try {
  const result = a + b; // a и b не определены
  console.log(result);
} catch (e) {
  console.log("Произошла ошибка:", e.message);
}
// Вывод: Произошла ошибка: a is not defined
\`\`\`

---

## Как это работает

- Если в try возникает ошибка, выполнение сразу переходит в catch.
- В catch можно:
  - Показать сообщение пользователю
  - Записать ошибку в лог
  - Подставить значение по умолчанию

Если ошибка не произошла — catch пропускается.

---

## Объект ошибки

В catch(error) переменная **error** содержит:

- **message** — текст ошибки
- **name** — тип ошибки (ReferenceError, TypeError и др.)
- **stack** — стек вызовов (полезно для отладки)

\`\`\`js
try {
  nonExistentFunction();
} catch (err) {
  console.log("Тип:", err.name);
  console.log("Сообщение:", err.message);
  console.log("Стек:", err.stack);
}
\`\`\`

---

## Где try...catch НЕ работает

- **Не ловит синтаксические ошибки** (ошибки при загрузке скрипта)
- **Не ловит ошибки в асинхронном коде после выхода из try**:

\`\`\`js
try {
  setTimeout(() => {
    throw new Error("Ошибка в setTimeout");
  }, 1000);
} catch (e) {
  console.log("Не поймает эту ошибку");
}
// Ошибка не будет поймана catch, а появится в консоли
\`\`\`

Чтобы ловить такие ошибки, нужно использовать обработку внутри callback или через .catch, async/await и др.

---

## Примеры применения

- Загрузка данных с сервера (fetch)
- Преобразование строки в объект (JSON.parse)
- Проверка пользовательского ввода
- Вызовы сторонних библиотек
- Работа с нестабильными API
  `.trim(),

  codeExampleJS: `
try {
  const data = JSON.parse("{ невалидный json }");
} catch (e) {
  console.error("Ошибка парсинга:", e.message);
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch",
    "https://learn.javascript.ru/try-catch",
  ],
};
export const js_errorHandling_2 = {
  id: "js_errorHandling_2",
  title: "Блок finally",
  content: `
## Что такое finally

Конструкция \`try...catch\` может быть дополнена блоком \`finally\`, который выполняется **всегда** — независимо от того, произошла ошибка или нет.

\`\`\`js
try {
  // Код, где может возникнуть ошибка
} catch (error) {
  // Обработка ошибки
} finally {
  // Этот код выполнится всегда
}
\`\`\`

---

## Зачем нужен finally

Блок \`finally\` удобно использовать для завершающих действий, например:

- закрытие соединений;
- освобождение ресурсов;
- сброс индикатора загрузки;
- завершение логирования.

Он **всегда срабатывает**, даже если:

- В try не было ошибки
- В try была ошибка (и она перехвачена)
- В catch возникла ошибка
- Использован \`return\` в try или catch

---

## Примеры

**Ошибка есть**
\`\`\`js
try {
  console.log("Начало");
  throw new Error("Что-то пошло не так");
} catch (e) {
  console.log("Ошибка:", e.message);
} finally {
  console.log("Всегда выполняется");
}
// Вывод:
// Начало
// Ошибка: Что-то пошло не так
// Всегда выполняется
\`\`\`

**Ошибки нет**
\`\`\`js
try {
  console.log("Всё хорошо");
} catch (e) {
  console.log("Не будет вызвано");
} finally {
  console.log("И это выполняется тоже");
}
// Вывод:
// Всё хорошо
// И это выполняется тоже
\`\`\`

**return в try**
\`\`\`js
function example() {
  try {
    return "Результат из try";
  } catch {
    return "Результат из catch";
  } finally {
    console.log("finally всё равно сработал");
  }
}

console.log(example());
// Вывод:
// finally всё равно сработал
// Результат из try
\`\`\`

---

## Важно

- \`finally\` не отменяет ошибку, но выполняется даже при завершении программы (если не вызвать \`process.exit()\` или \`window.close()\`).
- Если ошибка возникнет и в \`finally\`, она "перекроет" ошибку из try или catch:

\`\`\`js
try {
  throw new Error("Ошибка в try");
} finally {
  throw new Error("Ошибка в finally");
}
// В консоли будет только "Ошибка в finally"
\`\`\`
  `.trim(),

  codeExampleJS: `
try {
  console.log("Попытка выполнить");
  throw new Error("Ошибка");
} catch (e) {
  console.log("Поймали ошибку:", e.message);
} finally {
  console.log("Это выполнится всегда");
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch",
    "https://learn.javascript.ru/try-catch",
  ],
};
export const js_errorHandling_3 = {
  id: "js_errorHandling_3",
  title: "Генерация ошибок с помощью throw",
  content: `
## Что делает \`throw\`

Оператор \`throw\` используется, чтобы **намеренно сгенерировать ошибку** в JavaScript. Это позволяет:

- прервать выполнение кода, если что-то пошло не так;
- передать сообщение об ошибке в \`catch\`;
- реализовать собственные проверки и валидацию.

---

## Синтаксис

\`\`\`js
throw выражение;
\`\`\`

Выражение может быть:

- объектом ошибки (\`new Error("сообщение")\`);
- строкой (не рекомендуется);
- любым значением (числом, true/false — редко используется).

---

## Пример 1. Генерация стандартной ошибки

\`\`\`js
throw new Error("Что-то пошло не так");
\`\`\`

---

## Пример 2. Использование с try...catch

\`\`\`js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль невозможно");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Результат:", result);
} catch (err) {
  console.log("Ошибка:", err.message);
}
// Вывод: Ошибка: Деление на ноль невозможно
\`\`\`

---

## Почему лучше кидать объекты Error

Можно кидать строку:
\`\`\`js
throw "Ошибка";
\`\`\`
Но так делать **не рекомендуется**. Объекты Error дают больше информации (стек, тип ошибки) и лучше поддерживаются инструментами отладки.

---

## Пример 3. Разные типы ошибок

В зависимости от ситуации можно генерировать разные ошибки:
\`\`\`js
throw new TypeError("Неверный тип данных");
throw new ReferenceError("Переменная не определена");
throw new RangeError("Число вне диапазона");
\`\`\`

---

## Использование throw для валидации

\`\`\`js
function setAge(age) {
  if (age < 0) {
    throw new RangeError("Возраст не может быть отрицательным");
  }
  console.log("Возраст установлен:", age);
}
\`\`\`

---

## throw вместе с try...catch и finally

\`\`\`js
try {
  validateInput();
} catch (e) {
  console.log("Обработка ошибки:", e.message);
} finally {
  console.log("Завершающие действия");
}
\`\`\`

---

## Вывод

- \`throw\` позволяет явно сигнализировать о некорректной ситуации.
- Лучше использовать объекты ошибок — \`new Error()\`, \`new TypeError()\` и др.
- \`throw\` работает вместе с try...catch для обработки ошибок.
  `.trim(),

  codeExampleJS: `
function parseNumber(str) {
  if (typeof str !== "string") {
    throw new TypeError("Ожидается строка");
  }
  const num = Number(str);
  if (isNaN(num)) {
    throw new Error("Не удалось преобразовать к числу");
  }
  return num;
}

try {
  const result = parseNumber("abc");
  console.log(result);
} catch (e) {
  console.error("Ошибка:", e.message);
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw",
    "https://learn.javascript.ru/try-catch#генерация-своих-ошibok",
  ],
};
export const js_errorHandling_4 = {
  id: "js_errorHandling_4",
  title: "Объект Error: message, name, stack",
  content: `
## Что такое Error

В JavaScript все ошибки — это объекты, созданные с помощью конструктора \`Error\` или его подклассов (\`TypeError\`, \`ReferenceError\`, \`SyntaxError\` и др.).

\`\`\`js
const error = new Error("Что-то пошло не так");
console.log(error);
\`\`\`

---

## Основные свойства объекта ошибки

- **message** — текстовое описание ошибки
- **name** — тип ошибки (например, "Error", "TypeError")
- **stack** — стек вызовов (путь до места, где возникла ошибка)

---

## Пример использования

\`\`\`js
try {
  throw new Error("Пользовательская ошибка");
} catch (e) {
  console.log("message:", e.message); // "Пользовательская ошибка"
  console.log("name:", e.name);       // "Error"
  console.log("stack:", e.stack);     // Стек вызовов
}
\`\`\`

---

## Польза от этих свойств

- **message** — помогает понять, что произошло
- **name** — различать типы ошибок
- **stack** — отлаживать код, видеть, где именно возникла ошибка

---

## Пример с кастомной ошибкой

\`\`\`js
function authenticate(user) {
  if (!user.isLoggedIn) {
    const err = new Error("Пользователь не авторизован");
    err.name = "AuthError";
    throw err;
  }
}
\`\`\`

---

## Встроенные классы ошибок

| Класс ошибки     | Когда используется                      |
| ---------------- | --------------------------------------- |
| Error            | Общая ошибка                            |
| TypeError        | Неверный тип (например, не функция)     |
| ReferenceError   | Неопределённая переменная               |
| SyntaxError      | Ошибка синтаксиса                       |
| RangeError       | Значение вне допустимого диапазона      |

---

## Как создавать свои классы ошибок

Можно расширять Error через \`class\`:

\`\`\`js
class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}
\`\`\`

---

## Ошибки в асинхронном коде

- В цепочках промисов используйте .catch():
  \`\`\`js
  fetch("/data")
    .then(res => res.json())
    .catch(error => {
      console.log("Ошибка:", error.message);
    });
  \`\`\`

- Ошибки внутри .then() также попадут в ближайший .catch():

  \`\`\`js
  Promise.resolve()
    .then(() => { throw new Error("Что-то пошло не так"); })
    .catch(err => { console.log("Ошибка:", err.message); });
  \`\`\`

- В async/await используйте try...catch:

  \`\`\`js
  async function loadData() {
    try {
      const response = await fetch("/bad-url");
      const data = await response.json();
    } catch (error) {
      console.log("Ошибка загрузки:", error.message);
    }
  }
  \`\`\`

---

## Важно помнить

- Любая async-функция возвращает промис — ошибки можно ловить и через .catch():
  \`\`\`js
  async function fail() {
    throw new Error("Ошибка внутри async");
  }
  fail().catch(err => {
    console.log("Обработка снаружи:", err.message);
  });
  \`\`\`

- Обрабатывать ошибки в асинхронном коде — важно для стабильности приложения.
  `.trim(),

  codeExampleJS: `
try {
  throw new TypeError("Ошибка типа");
} catch (e) {
  console.log(e.name);    // TypeError
  console.log(e.message); // "Ошибка типа"
  console.log(e.stack);   // Стек вызовов
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error",
    "https://learn.javascript.ru/error-objects",
  ],
};
export const js_errorHandling_5 = {
  id: "js_errorHandling_5",
  title: "Обработка ошибок в промисах и async/await",
  content: `
## 1. Обработка ошибок в промисах (.then().catch())

Если внутри промиса или одного из .then() произойдёт ошибка, она попадёт в ближайший .catch():

\`\`\`js
fetch("https://some-api.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Данные:", data);
  })
  .catch(error => {
    console.log("Произошла ошибка:", error.message);
  });
\`\`\`

Ошибки в любом .then() автоматически "пробрасываются" вниз по цепочке до ближайшего .catch().

---

## 2. Ошибки внутри .then()

Если внутри .then() явно выброшена ошибка — она также будет перехвачена .catch():

\`\`\`js
Promise.resolve()
  .then(() => {
    throw new Error("Что-то пошло не так");
  })
  .catch(err => {
    console.log("Ошибка:", err.message);
  });
\`\`\`

---

## 3. Обработка ошибок с async/await

Когда используешь async/await, ошибки ловят через try...catch:

\`\`\`js
async function loadData() {
  try {
    const response = await fetch("https://some-api.com/data");
    const data = await response.json();
    console.log("Данные:", data);
  } catch (error) {
    console.log("Ошибка загрузки:", error.message);
  }
}
\`\`\`

---

## 4. Ошибки вне try...catch — необработанные

Если await использовать вне try...catch, то ошибка не будет поймана внутри функции, а пойдёт наружу:

\`\`\`js
async function test() {
  const response = await fetch("https://bad-url");
}
test(); // Uncaught (in promise)
\`\`\`

Лучше всегда использовать try...catch или .catch() у вызова async-функции.

---

## 5. async-функции возвращают промис

Любая async-функция возвращает промис. Даже если внутри есть try...catch, можно обработать ошибку и снаружи:

\`\`\`js
async function fail() {
  throw new Error("Ошибка внутри async");
}

fail().catch(err => {
  console.log("Обработка снаружи:", err.message);
});
\`\`\`

---

## 6. Что выбрать: .catch() или try...catch?

- .catch() — удобно для цепочек промисов.
- try...catch — для кода с await, особенно если внутри несколько асинхронных шагов.

---

## Заключение

Ошибки в асинхронном коде — частая причина неожиданных сбоев. Главное:
- всегда обрабатывать ошибки;
- логировать причину (error.message, error.stack);
- отделять логику работы от обработки ошибок, когда это возможно.
  `.trim(),

  codeExampleJS: `
fetch("/api/data")
  .then(res => res.json())
  .then(data => doSomething(data))
  .catch(err => console.error("Ошибка:", err));

async function process() {
  try {
    await fetch("/bad-url");
  } catch (e) {
    console.error("Async error:", e.message);
  }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises",
    "https://learn.javascript.ru/async",
  ],
};
