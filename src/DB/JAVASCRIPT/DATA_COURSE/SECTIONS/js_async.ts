export const js_async_1 = {
  id: "js_async_1",
  title: "Что такое асинхронность и зачем она нужна",
  content: `
## Синхронный код: шаг за шагом

В обычном (синхронном) коде JavaScript выполняет команды **строго по порядку**, одна за другой:

\`\`\`js
console.log("Начало");
console.log("Середина");
console.log("Конец");
\`\`\`

**Результат в консоли:**
Начало  
Середина  
Конец  

---

## Почему нужен асинхронный подход?

Синхронный код **блокирует выполнение**: если одна команда занимает много времени (например, ожидание ответа сервера), весь остальной код ждёт её завершения.

**Проблемы синхронности:**
- Задержки и "зависания" интерфейса
- Плохой пользовательский опыт

**Пример:**
\`\`\`js
const response = fetch("https://api.example.com/products");
console.log("Данные получены");
\`\`\`
Если сервер отвечает долго, программа "зависает" на этом месте.

---

## Асинхронность — решение

**Асинхронный код** позволяет выполнять долгие операции в фоне, не блокируя основной поток.  
Браузер: "Я займусь этим, а пока делай остальной код. Как только закончу — сообщу результат."

**Пример с асинхронностью:**
\`\`\`js
console.log("Начало");

setTimeout(() => {
  console.log("Прошло 2 секунды");
}, 2000);

console.log("Конец");
\`\`\`

**Результат в консоли:**
Начало  
Конец  
Прошло 2 секунды

---

## Где используется асинхронность в JS?

- Таймеры: \`setTimeout\`, \`setInterval\`
- Сетевые запросы (\`fetch\`, \`axios\`)
- Работа с файлами, базами данных, событиями, анимациями

---

## Как реализуется асинхронность

Хотя JavaScript работает в **одном потоке**, он умеет переключаться между задачами с помощью:
- Таймеров
- Callback-функций
- Промисов (\`Promise\`)
- Ключевых слов \`async/await\`
- Механизма Event Loop и очереди задач

> Подробнее про Event Loop — в следующей теме!

---

## Вывод

Асинхронность — способ выполнять долгие операции без блокировки кода. Это основа отзывчивых, быстрых веб-приложений.
`.trim(),

  codeExampleJS: `
console.log("Начало");

setTimeout(() => {
  console.log("Прошло 2 секунды");
}, 2000);

console.log("Конец");
// Результат:
// Начало
// Конец
// Прошло 2 секунды
  `.trim(),

  resources: [
    "https://learn.javascript.ru/async",
    "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous",
  ],
};
export const js_async_2 = {
  id: "js_async_2",
  title: "Event Loop — цикл событий и очередь задач",
  content: `
## Зачем нужен Event Loop

JavaScript — **однопоточный язык**: выполняет только одну задачу в конкретный момент. Но при этом в браузере можно:

- ждать ответа с сервера,
- запускать таймер,
- реагировать на клики,
- обрабатывать очереди событий.

**Как?** Благодаря Event Loop!

---

## Главные участники

1. **Call Stack (стек вызовов):**
   - Место, где прямо сейчас выполняется код (работает по принципу "последний вошёл — первый вышел").

2. **Web API (браузер):**
   - Внешние механизмы среды: \`setTimeout\`, \`fetch\`, обработка событий и др.
   - Код тут выполняется вне основного потока JS.

3. **Task Queue (очередь задач):**
   - Сюда попадают функции после завершения асинхронных операций (например, callback setTimeout).

4. **Event Loop (цикл событий):**
   - Постоянно следит: если стек вызовов пуст — берёт первую задачу из очереди и запускает её.

---

## Как это работает (пошагово)

\`\`\`js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
\`\`\`

- В стек вызовов попадает \`console.log("1")\` — выполняется.
- \`setTimeout\` уходит во "внешний мир" (Web API), браузер ждёт 0 мс.
- \`console.log("3")\` — сразу выполняется.
- Как только Call Stack пуст — Event Loop берёт задачу \`() => console.log("2")\` из очереди задач и выполняет её.

**Результат в консоли:**
1  
3  
2  

---

## Визуальная аналогия

- **Стек вызовов** — кассир, обслуживает клиентов по одному.
- **Web API** — курьер за дверью, вы отдаёте ему задачу (таймер/запрос), он возвращает результат позже.
- **Очередь задач** — очередь клиентов, ожидающих, когда кассир освободится.
- **Event Loop** — координатор: если кассир свободен, впускаем следующего!

---

## Зачем это знать?

- Объясняет, почему \`setTimeout(..., 0)\` срабатывает не сразу.
- Позволяет понять, в каком порядке выполняются асинхронные операции.
- Помогает разобраться с работой \`Promise\`, \`async/await\`, событиями, анимациями.

`.trim(),

  codeExampleJS: `
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Результат:
// A
// C
// B
  `.trim(),

  resources: [
    "https://learn.javascript.ru/event-loop",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop",
  ],
};
export const js_async_3 = {
  id: "js_async_3",
  title: "Таймеры: setTimeout и setInterval",
  content: `
## Что такое таймеры

В JavaScript есть два метода для запуска кода с задержкой:

- **setTimeout** — выполнить функцию один раз через заданное время.
- **setInterval** — выполнять функцию периодически через равные промежутки времени.

---

### setTimeout

\`setTimeout(func, delay)\` запускает \`func\` один раз после задержки \`delay\` (в миллисекундах).

\`\`\`js
setTimeout(() => {
  console.log("Привет через 2 секунды");
}, 2000);
\`\`\`

**Даже если delay = 0:** функция попадёт в очередь и выполнится после основного кода.

\`\`\`js
console.log("Сначала");

setTimeout(() => {
  console.log("Потом");
}, 0);

console.log("Снова сначала");
\`\`\`

**Результат:**
Сначала  
Снова сначала  
Потом

---

### setInterval

\`setInterval(func, interval)\` вызывает функцию \`func\` каждые \`interval\` миллисекунд.

\`\`\`js
setInterval(() => {
  console.log("Каждую секунду");
}, 1000);
\`\`\`

Функция будет выполняться бесконечно — раз в секунду, пока не остановим.

---

### Как остановить таймер

Оба метода возвращают идентификатор таймера, который можно использовать для остановки:

- \`clearTimeout(timerId)\`
- \`clearInterval(intervalId)\`

\`\`\`js
const timerId = setTimeout(() => {
  console.log("Это не выполнится");
}, 5000);

clearTimeout(timerId); // Останавливаем таймер

const intervalId = setInterval(() => {
  console.log("Повторяюсь");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId); // Остановить через 3 секунды
}, 3000);
\`\`\`

---

### Практические примеры

- Показать уведомление через 2 секунды
- Скрыть элемент через 5 секунд
- Обновлять данные на странице раз в 10 секунд
- Реализовать обратный отсчёт

---

### Важно: точность таймеров

Таймеры — не гарантируют точную задержку. Это **минимальное** время, после которого задача попадёт в очередь.
Если основной код занят — выполнение может задержаться.

`.trim(),

  codeExampleJS: `
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
// Результат: A, C, B

let count = 0;
const id = setInterval(() => {
  count++;
  console.log("tick", count);
  if (count === 3) clearInterval(id);
}, 1000);
// tick 1, tick 2, tick 3 (и остановится)
  `.trim(),

  resources: [
    "https://learn.javascript.ru/settimeout-setinterval",
    "https://developer.mozilla.org/ru/docs/Web/API/setTimeout",
  ],
};
export const js_async_4 = {
  id: "js_async_4",
  title: "Проблема вложенности (Callback Hell)",
  content: `
## Что такое callback

**Callback** — это функция, которую передают другой функции для вызова позже, обычно после завершения асинхронной операции.

Пример:

\`\`\`js
setTimeout(() => {
  console.log("Первое действие");
}, 1000);
// () => console.log(...) — callback, выполнится через 1 секунду
\`\`\`

---

## Что такое "Callback Hell"

Когда нужно выполнить несколько асинхронных действий подряд, callback-функции начинают вкладываться друг в друга:

\`\`\`js
setTimeout(() => {
  console.log("Шаг 1");
  setTimeout(() => {
    console.log("Шаг 2");
    setTimeout(() => {
      console.log("Шаг 3");
    }, 1000);
  }, 1000);
}, 1000);
\`\`\`

**Проблемы:**

- Глубокая вложенность (“пирамида ужаса”)
- Плохо читается и поддерживается
- Сложно отлавливать и обрабатывать ошибки
- Трудно переиспользовать такой код

---

## Почему это плохо

- **Код "ползёт вправо"** — трудно воспринимать логику, особенно если действий больше
- **Ошибки теряются** — сложно понять, где именно возникла проблема
- **Нет повторного использования** — все функции жёстко связаны друг с другом

---

## Как решить проблему

Современные подходы:

- **Промисы (Promise):**
  Позволяют писать цепочки без вложенности:
  \`\`\`js
  doStep1()
    .then(doStep2)
    .then(doStep3)
    .catch(handleError);
  \`\`\`

- **async/await:**
  Синтаксис, похожий на обычный последовательный код, но с асинхронным выполнением:
  \`\`\`js
  async function runSteps() {
    try {
      await doStep1();
      await doStep2();
      await doStep3();
    } catch (err) {
      handleError(err);
    }
  }
  \`\`\`

---

## Заключение

- Callback Hell — это не баг, а "побочный эффект" стиля написания кода через колбэки.
- В современном JavaScript используют промисы и async/await для более чистого, последовательного и управляемого кода.
  `.trim(),

  codeExampleJS: `
setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
    }, 1000);
  }, 1000);
}, 1000);
// Проблема: читается и поддерживается сложно

// Современный способ:
function step(msg, ms) {
  return new Promise(resolve => setTimeout(() => {console.log(msg); resolve();}, ms));
}
step("A", 1000)
  .then(() => step("B", 1000))
  .then(() => step("C", 1000));
  `.trim(),

  resources: [
    "https://learn.javascript.ru/callbacks",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises",
  ],
};
export const js_async_5 = {
  id: "js_async_5",
  title: "Промисы: создание, .then(), .catch(), .finally()",
  content: `
## Что такое Promise

**Promise (промис)** — объект, который представляет результат асинхронной операции (например, запрос к серверу или таймер). Он может быть в одном из трёх состояний:
- \`pending\` — ожидание (операция выполняется)
- \`fulfilled\` — выполнено успешно
- \`rejected\` — выполнено с ошибкой

---

## Зачем нужны промисы

Промисы делают асинхронный код более читаемым и управляемым (без "callback hell"). Позволяют обрабатывать результат и ошибки централизованно, писать цепочки асинхронных операций.

---

## Создание промиса

\`\`\`js
const promise = new Promise((resolve, reject) => {
  // асинхронная операция
  if (успех) {
    resolve(результат); // при успехе
  } else {
    reject(ошибка);     // при ошибке
  }
});
\`\`\`

Пример с таймером:

\`\`\`js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`Прошло \${ms} мс\`);
    }, ms);
  });
};

delay(1000).then((msg) => console.log(msg));
\`\`\`

---

## then, catch, finally

- \`.then(fn)\` — обработка успешного результата (fulfilled).
- \`.catch(fn)\` — обработка ошибки (rejected).
- \`.finally(fn)\` — выполняется всегда, после завершения промиса.

Пример:

\`\`\`js
promise
  .then(result => console.log("Результат:", result))
  .catch(error => console.error("Ошибка:", error))
  .finally(() => console.log("Завершено"));
\`\`\`

---

## Цепочки промисов

Промисы можно "связывать" — результат из одного then передаётся в следующий:

\`\`\`js
delay(1000)
  .then((msg) => {
    console.log(msg);
    return delay(1000);
  })
  .then((msg2) => {
    console.log("Следующий шаг");
  })
  .catch((err) => {
    console.error("Ошибка:", err);
  })
  .finally(() => {
    console.log("Готово");
  });
\`\`\`

---

## Ошибки в then

Если внутри \`.then()\` произойдёт ошибка (throw), она попадёт в ближайший \`.catch()\`:

\`\`\`js
delay(1000)
  .then(() => {
    throw new Error("Что-то пошло не так");
  })
  .catch((e) => {
    console.log("Перехвачено:", e.message);
  });
\`\`\`

---

## Итог

- **Promise** — объект для работы с результатом асинхронной операции
- \`resolve(value)\` — успех, \`reject(error)\` — ошибка
- \`then\` — обработка результата, \`catch\` — обработка ошибки, \`finally\` — всегда вызывается
- Промисы позволяют писать асинхронный код цепочками, легко обрабатывать ошибки

  `.trim(),

  codeExampleJS: `
const fetchData = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (url === "ok") resolve("Данные получены!");
    else reject("Ошибка загрузки");
  }, 1000);
});

fetchData("ok")
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Конец загрузки"));
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises",
    "https://learn.javascript.ru/promise-basics",
  ],
};
export const js_async_6 = {
  id: "js_async_6",
  title: "Промисы: Promise.all, Promise.race",
  content: `
## Для чего нужны Promise.all и Promise.race

Когда нужно одновременно запустить несколько асинхронных операций (например, несколько загрузок с сервера), важно уметь:
- дожидаться завершения всех;
- или получить результат самого быстрого.

Для этого есть два специальных метода: **Promise.all** и **Promise.race**.

---

## Promise.all

\`Promise.all([...])\` принимает массив промисов и возвращает **новый промис**, который:
- выполняется успешно, когда все промисы успешно завершены;
- отклоняется, если хотя бы один промис завершился с ошибкой.

\`\`\`js
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results); // [1, 2, 3]
  });
\`\`\`

Если один из промисов завершился с ошибкой, сработает \`.catch()\`:

\`\`\`js
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Ошибка!");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((results) => {
    // ...
  })
  .catch((error) => {
    console.error("Одна из операций завершилась с ошибкой:", error);
  });
\`\`\`

**Пример из жизни:** загрузка нескольких файлов одновременно:

\`\`\`js
Promise.all([
  fetch("/data1.json"),
  fetch("/data2.json"),
  fetch("/data3.json")
])
  .then((responses) => Promise.all(responses.map(r => r.json())))
  .then((data) => {
    console.log("Все данные загружены:", data);
  })
  .catch((err) => {
    console.error("Ошибка при загрузке одного из файлов:", err);
  });
\`\`\`

---

## Promise.race

\`Promise.race([...])\` также принимает массив промисов, но возвращает результат **первого завершённого** промиса (неважно, с ошибкой или с успехом):

\`\`\`js
const p1 = new Promise((resolve) => setTimeout(() => resolve("Первый"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Второй"), 1000));

Promise.race([p1, p2])
  .then((result) => {
    console.log("Победил:", result); // "Второй"
  });
\`\`\`

**Практический пример: тайм-аут сетевого запроса:**

\`\`\`js
const fetchWithTimeout = (url, timeout = 3000) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Тайм-аут запроса")), timeout)
    )
  ]);
};

fetchWithTimeout("/api/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

---

## Вывод

- **Promise.all** — ждёт завершения всех промисов (полезно для параллельной загрузки).
- **Promise.race** — возвращает результат первого завершившегося промиса (полезно для тайм-аутов и соревнования задач).

  `.trim(),

  codeExampleJS: `
const p1 = Promise.resolve("Операция 1");
const p2 = new Promise(res => setTimeout(() => res("Операция 2"), 500));

Promise.all([p1, p2]).then(values => {
  console.log("Все завершились:", values);
});

Promise.race([p1, p2]).then(value => {
  console.log("Победил:", value);
});
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
    "https://learn.javascript.ru/promise-api",
  ],
};
export const js_async_7 = {
  id: "js_async_7",
  title: "async/await: синтаксис и примеры",
  content: `
## Что такое async/await

**async** и **await** — это удобный способ писать асинхронный код, используя промисы, но в стиле обычного "синхронного" кода. async/await — это синтаксический сахар над промисами.

---

### async

Если перед функцией поставить \`async\`, функция **всегда возвращает промис**:

\`\`\`js
async function example() {
  return 42;
}

example().then(result => console.log(result)); // 42
\`\`\`

---

### await

Ключевое слово \`await\` используется **только внутри async-функции** и "останавливает" выполнение, пока промис не выполнится.

\`\`\`js
async function greet() {
  const name = await Promise.resolve("Анна");
  console.log("Привет,", name);
}

greet(); // Привет, Анна
\`\`\`

---

### Простой пример

\`\`\`js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Ждём...");
  await delay(1000);
  console.log("Прошла 1 секунда");
}

run();
\`\`\`

---

### Обработка ошибок

Ошибки внутри async-функций удобно ловить через try...catch:

\`\`\`js
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log("Получено:", data);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
}
\`\`\`

---

### Сравнение с then/catch

**Без async/await:**
\`\`\`js
fetch("/data.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

**С async/await:**
\`\`\`js
async function load() {
  try {
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
\`\`\`

async/await делает код более линейным, понятным и похожим на обычный пошаговый код.

---

### Можно использовать и в стрелочных функциях

\`\`\`js
const load = async () => {
  const data = await fetch("/api").then(r => r.json());
  console.log(data);
};
\`\`\`

---

### await в цикле

await можно использовать в цикле, чтобы делать асинхронные операции **последовательно**:

\`\`\`js
const delays = [1000, 2000, 1500];

async function processDelays() {
  for (const ms of delays) {
    await delay(ms);
    console.log(\`Прошло \${ms} мс\`);
  }
}
\`\`\`

---

### Особенности

- await работает только с промисами. Если передать обычное значение — оно будет возвращено сразу.
- async-функция всегда возвращает промис.
- Можно await-ить не только сетевые запросы, но и любые асинхронные операции (таймер, чтение файла и т.д.).
  `.trim(),

  codeExampleJS: `
async function getData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log("Данные:", data);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}

getData();
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function",
    "https://learn.javascript.ru/async-await",
  ],
};
export const js_async_8 = {
  id: "js_async_8",
  title: "Сравнение промисов и async/await",
  content: `
## Общая цель

И промисы, и async/await — способы работы с асинхронным кодом, которые позволяют **дождаться результата операции**, не блокируя выполнение программы.

---

### Промисы: плюсы и минусы

**Плюсы:**
- Явно видно, где начинается и заканчивается асинхронная операция.
- Удобны для цепочек (.then().then().catch()) и параллельных запросов.

\`\`\`js
fetch("/data.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Ошибка:", error));
\`\`\`

**Минусы:**
- При множестве вложенных вызовов читаемость ухудшается.
- Труднее работать с условиями и циклами.
- Для обработки ошибок нужно следить за расположением .catch.

---

### async/await: плюсы и минусы

**Плюсы:**
- Код выглядит "пошагово", легко читается и отлаживается.
- Удобно использовать условия (if), циклы (for/while).
- Ошибки обрабатываются через try/catch — структура проще.

\`\`\`js
async function loadData() {
  try {
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
\`\`\`

**Минусы:**
- Для нескольких параллельных операций обработка ошибок может стать сложнее (лучше использовать Promise.all).
- await "блокирует" выполнение внутри функции — для независимых задач это не всегда оптимально.

---

### Когда использовать промисы

- Нужно обрабатывать много независимых асинхронных операций.
- Удобно использовать цепочки .then().
- Работа с библиотеками, использующими промисы напрямую.

### Когда использовать async/await

- Есть последовательные шаги (каждый зависит от предыдущего).
- Нужно сделать код максимально читаемым.
- Требуются условия или циклы в асинхронном коде.
- Удобнее использовать try/catch для обработки ошибок.

---

### Пример сравнения

**Промисы:**
\`\`\`js
getUser()
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));
\`\`\`

**async/await:**
\`\`\`js
async function main() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`

---

### Итоговое сравнение

| Характеристика        | Промисы         | async/await        |
| --------------------- | --------------- | ------------------ |
| Читаемость            | Средняя         | Высокая            |
| Обработка ошибок      | .catch()        | try/catch          |
| Работа в циклах       | Неудобно        | Удобно             |
| Параллельные задачи   | Легко           | Promise.all внутри |
| Уровень абстракции    | Средний         | Более высокий      |

---

**Вывод:**  
- Промисы хороши для параллельных операций и цепочек.
- async/await — для последовательных шагов и более читаемого кода.
  `.trim(),

  codeExampleJS: `
async function processData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises",
    "https://learn.javascript.ru/async",
  ],
};
export const js_async_9 = {
  id: "js_async_9",
  title: "Ошибки в async/await",
  content: `
## Как обрабатываются ошибки в async/await

Если промис, на который ссылается \`await\`, завершится с ошибкой (\`reject\`), будет выброшено исключение.

Чтобы поймать такую ошибку — используйте \`try...catch\`:

\`\`\`js
async function load() {
  try {
    const response = await fetch("https://some-api.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка при загрузке:", error);
  }
}
\`\`\`

---

### Пример: ошибка при загрузке

\`\`\`js
async function fetchUser() {
  try {
    const res = await fetch("https://example.com/user");
    if (!res.ok) {
      throw new Error("Сервер вернул ошибку: " + res.status);
    }
    const user = await res.json();
    console.log("Пользователь:", user);
  } catch (err) {
    console.error("Произошла ошибка:", err.message);
  }
}
\`\`\`

> **Важно:** \`fetch\` не выбрасывает ошибку при 404 или 500 — только при проблемах с сетью. Поэтому нужно проверять \`res.ok\` вручную.

---

### Ошибка вне try/catch

Если \`await\` используется вне try/catch, и промис завершится с ошибкой — программа может аварийно завершиться или вы увидите сообщение в консоли:

\`\`\`js
async function run() {
  const data = await Promise.reject("Что-то пошло не так");
  console.log(data); // этот код не выполнится
}

run(); // Uncaught (in promise): Что-то пошло не так
\`\`\`

---

### Общая рекомендация

Любой \`await\`, который может завершиться с ошибкой, **оборачивайте в try/catch**.  
Это особенно важно для сетевых запросов, чтения файлов, баз данных и других нестабильных операций.

---

### Параллельные запросы и ошибки

При использовании \`Promise.all\`:
- Если хотя бы один промис завершится с ошибкой — вся конструкция завершится с ошибкой.

\`\`\`js
async function loadData() {
  try {
    const [user, posts] = await Promise.all([
      fetch("/user").then(r => r.json()),
      fetch("/posts").then(r => r.json()),
    ]);
    console.log(user, posts);
  } catch (e) {
    console.error("Один из запросов не удался", e);
  }
}
\`\`\`

Если нужно обрабатывать ошибки по отдельности —  
используйте \`try/catch\` на каждый вызов или \`Promise.allSettled\`.

---

### Итог

- \`await\` выбрасывает ошибку, если промис отклоняется.
- Все потенциально ошибочные операции — в \`try/catch\`.
- Для \`fetch\` дополнительно проверяйте \`response.ok\`.
- В \`Promise.all\` достаточно одной ошибки, чтобы вся операция завершилась неудачей.
  `.trim(),

  codeExampleJS: `
async function getData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts();
    return { user, posts };
  } catch (err) {
    console.error("Ошибка:", err);
  }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function",
    "https://learn.javascript.ru/async-await#error-handling",
  ],
};
