export const js_data_1 = {
  id: "js_data_1",
  title: "Что такое Date и зачем он нужен",
  content: `
### Зачем нужны даты в программировании

В большинстве приложений приходится работать с датами и временем. Примеры:
- Показать текущую дату на сайте
- Посчитать, сколько дней до события
- Записать дату регистрации пользователя
- Рассчитать окончание подписки

---

### Что такое Date

**Date** — это встроенный объект в JavaScript для работы с датой и временем.  
Он может хранить:
- Дату (год, месяц, день)
- Время (часы, минуты, секунды, миллисекунды)
- Часовой пояс (по умолчанию — локальный)

---

### Как устроен Date внутри

Внутри любая дата — это количество миллисекунд, прошедших с 1 января 1970 года (UTC).  
Это называется **Unix timestamp** или **epoch time**.

\`\`\`js
const now = new Date();
console.log(now.getTime()); // миллисекунды с 01.01.1970
\`\`\`

---

### Где используется Date

- Временные метки (createdAt, updatedAt)
- Логи и аналитика
- Сортировка по времени
- Календарь, напоминания, расписания

---

### Как работать с датой

- Создавать объект Date
- Получать/изменять год, месяц, день, часы и т.д.
- Сравнивать даты
- Форматировать дату для вывода

Детальнее эти задачи — в следующих темах!
  `.trim(),

  codeExampleJS: `
const now = new Date();
console.log(now);         // Текущая дата и время
console.log(now.getTime()); // Милисекунды с 01.01.1970
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
    "https://learn.javascript.ru/datetime",
  ],
};
export const js_data_2 = {
  id: "js_data_2",
  title: "Создание объектов даты: new Date(), с параметрами",
  content: `
### Как создать объект Date

В JavaScript объекты даты создаются через \`new Date()\`. Есть несколько способов — от простого к более точному:

---

#### 1. Текущая дата и время

\`\`\`js
const now = new Date();
console.log(now); // Например: Fri Jun 14 2025 13:00:00 GMT+0300
\`\`\`
Без аргументов — возвращает текущую дату и время.

---

#### 2. Дата из строки (ISO-формат)

\`\`\`js
const date = new Date("2025-12-25");
console.log(date); // Thu Dec 25 2025 00:00:00 GMT+0300
\`\`\`
Можно использовать строки в формате "ГГГГ-ММ-ДД".  
**Внимание:** месяц — с 01 по 12 (а не с 0, как в числовом способе).

---

#### 3. Дата из числовых параметров

\`\`\`js
const date = new Date(2025, 11, 25); // Год, месяц (от 0!), день
console.log(date); // Thu Dec 25 2025 00:00:00
\`\`\`

Синтаксис:
\`new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)\`

- \`year\` — год (например, 2025)
- \`monthIndex\` — месяц: **от 0 (январь) до 11 (декабрь)**
- \`day\` — день месяца (от 1)
- Остальные параметры — необязательны

\`\`\`js
const d = new Date(2025, 11, 25, 10, 30); // 25 декабря 2025, 10:30
console.log(d);
\`\`\`

---

#### 4. Дата из миллисекунд

\`\`\`js
const date = new Date(0); // 0 миллисекунд от 1.01.1970 UTC
console.log(date);
\`\`\`
Удобно для математических операций с датами.

---

#### Ошибки при создании

\`\`\`js
const wrong = new Date("not a date");
console.log(wrong); // Invalid Date
\`\`\`
Если формат невалидный — получится объект Invalid Date.

---

#### Итоги: 4 способа создать Date

| Способ         | Пример                           |
| -------------- | -------------------------------- |
| Текущая дата   | \`new Date()\`                   |
| Из строки      | \`new Date("2025-12-25")\`       |
| Из чисел       | \`new Date(2025, 11, 25, 10, 30)\`|
| Из миллисекунд | \`new Date(1000 * 60 * 60)\`     |

  `.trim(),

  codeExampleJS: `
const now = new Date();
const fromString = new Date("2025-12-25");
const fromNumbers = new Date(2025, 11, 25, 10, 30);
const fromMs = new Date(1000 * 60 * 60);

console.log(now);
console.log(fromString);
console.log(fromNumbers);
console.log(fromMs);
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",
    "https://learn.javascript.ru/datetime",
  ],
};
export const js_data_3 = {
  id: "js_data_3",
  title:
    "Получение компонентов даты: getFullYear(), getMonth(), getDate() и др.",
  content: `
### Как получить части даты и времени

У объекта \`Date\` есть методы, чтобы "достать" нужный компонент: год, месяц, день, часы, минуты и т.д.

---

#### Получение даты

\`\`\`js
const date = new Date("2025-12-25T10:30:00");

// Год (4 цифры)
console.log(date.getFullYear()); // 2025

// Месяц (от 0 до 11)
console.log(date.getMonth()); // 11 (декабрь)

// День месяца (от 1 до 31)
console.log(date.getDate()); // 25

// День недели (0 — воскресенье, 6 — суббота)
console.log(date.getDay()); // 4 (четверг)
\`\`\`

> **Внимание:** Месяцы считаются с нуля — 0 (январь), 11 (декабрь).

---

#### Получение времени

\`\`\`js
console.log(date.getHours());        // 10
console.log(date.getMinutes());      // 30
console.log(date.getSeconds());      // 0
console.log(date.getMilliseconds()); // 0
\`\`\`

---

#### UTC-варианты

Если нужно получить дату и время по всемирному времени (UTC), есть аналоги:

- \`getUTCFullYear()\`
- \`getUTCMonth()\`
- \`getUTCDate()\`
- \`getUTCHours()\`
- и т.д.

---

#### Пример: Вывод текущей даты

\`\`\`js
const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1; // добавляем 1, т.к. месяцы с нуля
const year = now.getFullYear();

console.log(\`\${day}.\${month}.\${year}\`); // например, "14.6.2025"
\`\`\`

---

#### Краткая таблица

| Что получить        | Метод              | Пример |
| ------------------- | ------------------ | ------ |
| Год                 | getFullYear()      | 2025   |
| Месяц (0–11)        | getMonth()         | 11     |
| День месяца         | getDate()          | 25     |
| День недели (0–6)   | getDay()           | 4      |
| Часы                | getHours()         | 10     |
| Минуты              | getMinutes()       | 30     |
| Секунды             | getSeconds()       | 0      |
| Миллисекунды        | getMilliseconds()  | 0      |

  `.trim(),

  codeExampleJS: `
const date = new Date("2025-12-25T10:30:00");
console.log(date.getFullYear()); // 2025
console.log(date.getMonth());    // 11
console.log(date.getDate());     // 25
console.log(date.getDay());      // 4
console.log(date.getHours());    // 10
console.log(date.getMinutes());  // 30
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
    "https://learn.javascript.ru/datetime",
  ],
};
export const js_data_4 = {
  id: "js_data_4",
  title: "Форматирование даты вручную",
  content: `
## Как форматировать дату и время в JavaScript

По умолчанию объект \`Date\` выводится в длинном формате:
\`\`\`js
const date = new Date();
console.log(date); // Например: Sat Jun 14 2025 14:25:18 GMT+0300 (Москва)
\`\`\`
Но часто требуется свой формат — например, "14.06.2025" или "2025-06-14 14:25".

---

### Почему приходится форматировать вручную

Методы \`getDate()\`, \`getMonth()\`, \`getFullYear()\` возвращают числа. Готовую строку нужно собрать самому, добавляя нули и разделители.

---

### Пример: дата в формате ДД.ММ.ГГГГ

\`\`\`js
const date = new Date(2025, 5, 14); // 14 июня 2025

const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0"); // +1 — месяцы с нуля
const year = date.getFullYear();

const formatted = \`\${day}.\${month}.\${year}\`;
console.log(formatted); // "14.06.2025"
\`\`\`
> \`padStart(2, "0")\` — добавляет ведущий ноль, если число однозначное.

---

### Пример: дата и время в формате ГГГГ-ММ-ДД ЧЧ:ММ

\`\`\`js
const now = new Date();

const y = now.getFullYear();
const m = String(now.getMonth() + 1).padStart(2, "0");
const d = String(now.getDate()).padStart(2, "0");
const h = String(now.getHours()).padStart(2, "0");
const min = String(now.getMinutes()).padStart(2, "0");

const result = \`\${y}-\${m}-\${d} \${h}:\${min}\`;
console.log(result); // Например: "2025-06-14 14:35"
\`\`\`

---

### Альтернатива: toLocaleDateString() и toLocaleTimeString()

\`\`\`js
const date = new Date();
console.log(date.toLocaleDateString()); // "14.06.2025"
console.log(date.toLocaleTimeString()); // "14:40:22"
\`\`\`
> Эти методы зависят от локали пользователя и не всегда дают нужный формат.

---

### Вывод

- Для полного контроля формата используют ручную сборку строки через \`getDate()\`, \`getMonth()\`, и т.д.
- Для локального отображения — \`toLocaleDateString()\`, \`toLocaleTimeString()\`.
- В крупных проектах часто применяют библиотеки: \`date-fns\`, \`dayjs\`, \`moment.js\`.
`.trim(),

  codeExampleJS: `
const now = new Date();
const formatted = [
  String(now.getDate()).padStart(2, "0"),
  String(now.getMonth() + 1).padStart(2, "0"),
  now.getFullYear()
].join(".");

console.log(formatted); // "14.06.2025"
  `.trim(),

  resources: [
    "https://learn.javascript.ru/datetime",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
  ],
};
export const js_data_5 = {
  id: "js_data_5",
  title: "Разница между датами: вычисление интервалов",
  content: `
## Как посчитать разницу между датами

В JavaScript узнать, сколько времени прошло между двумя датами, очень просто: можно просто вычесть один объект \`Date\` из другого.

---

### Получение разницы в миллисекундах

\`\`\`js
const date1 = new Date("2025-06-10");
const date2 = new Date("2025-06-14");

const diffMs = date2 - date1;
console.log(diffMs); // 345600000 миллисекунд
\`\`\`
> Разница в миллисекундах. 1 секунда = 1000 мс, 1 минута = 60 секунд, 1 час = 60 минут, 1 день = 24 часа.

---

### Перевод миллисекунд в дни, часы, минуты

\`\`\`js
const msInDay = 1000 * 60 * 60 * 24;
const days = diffMs / msInDay;
console.log(days); // 4
\`\`\`

---

### Пример: сколько прошло дней с начала года

\`\`\`js
const start = new Date("2025-01-01");
const now = new Date();

const diff = now - start;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(\`Прошло дней с начала года: \${days}\`);
\`\`\`

---

### Разница в часах и минутах

\`\`\`js
const d1 = new Date("2025-06-14T10:00:00");
const d2 = new Date("2025-06-14T13:45:00");

const diffMs = d2 - d1;

const hours = Math.floor(diffMs / (1000 * 60 * 60));
const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

console.log(\`\${hours} часов и \${minutes} минут\`); // 3 часов и 45 минут
\`\`\`

---

### Важно учитывать

- Время считается в локальной временной зоне (если не использовать UTC-методы).
- Всегда проверяйте, что обе даты валидны (не \`Invalid Date\`).
- Можно использовать методы \`getTime()\` — результат будет тот же (разница в миллисекундах).

---

### Вывод

- Разница между двумя датами — это просто разность их значений в миллисекундах.
- Для перевода в дни, часы, минуты делите на соответствующее количество миллисекунд.
- Это полезно для отчётов, таймеров, планирования событий.
`.trim(),

  codeExampleJS: `
const date1 = new Date("2025-06-10");
const date2 = new Date("2025-06-14");

const diffMs = date2 - date1; // миллисекунды
const days = diffMs / (1000 * 60 * 60 * 24);

console.log(days); // 4
  `.trim(),

  resources: [
    "https://learn.javascript.ru/datetime",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
  ],
};
export const js_data_6 = {
  id: "js_data_6",
  title: "Изменение даты: setFullYear, setHours и другие",
  content: `
## Как изменять части даты в JavaScript

Объекты \`Date\` — **изменяемые**. Для изменения компонентов даты (год, месяц, день, часы и т.д.) используются методы, начинающиеся с \`set\`.

---

### Основные методы изменения даты

| Что изменить   | Метод               | Пример                        |
| -------------- | ------------------- | ----------------------------- |
| Год            | setFullYear()       | date.setFullYear(2026)        |
| Месяц (0–11)   | setMonth()          | date.setMonth(0) // январь    |
| День месяца    | setDate()           | date.setDate(15)              |
| Часы           | setHours()          | date.setHours(10)             |
| Минуты         | setMinutes()        | date.setMinutes(30)           |
| Секунды        | setSeconds()        | date.setSeconds(0)            |
| Миллисекунды   | setMilliseconds()   | date.setMilliseconds(0)       |

---

### Пример изменения даты

\`\`\`js
const date = new Date("2025-12-25T10:30:00");

date.setFullYear(2026);
date.setMonth(0);   // январь
date.setDate(1);
date.setHours(8);
date.setMinutes(15);

console.log(date.toString());
// Например: Thu Jan 01 2026 08:15:00 GMT+0300
\`\`\`

---

### Переполнение автоматически корректируется

Если задать "лишний" день, месяц или час — JavaScript сам скорректирует дату:

\`\`\`js
const d = new Date("2025-01-31");
d.setDate(32); // 32 января не существует

console.log(d.toDateString()); // "Sun Feb 01 2025"
\`\`\`

---

### Комбинирование изменений

Можно комбинировать изменения:

\`\`\`js
const deadline = new Date();
deadline.setHours(deadline.getHours() + 5); // добавить 5 часов

console.log(deadline);
\`\`\`

---

### Вывод

- Объекты Date изменяются через методы set*().
- JavaScript автоматически корректирует дату при переполнении.
- Для сложных операций с датами можно использовать библиотеки (date-fns, dayjs и др.), но встроенных методов достаточно для большинства задач на начальном уровне.
`.trim(),

  codeExampleJS: `
const date = new Date("2025-12-25T10:30:00");
date.setFullYear(2026);
date.setMonth(0); // январь
date.setDate(1);
date.setHours(8);
date.setMinutes(15);

console.log(date.toString()); 
// Например: Thu Jan 01 2026 08:15:00 GMT+0300
  `.trim(),

  resources: [
    "https://learn.javascript.ru/datetime",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
  ],
};
