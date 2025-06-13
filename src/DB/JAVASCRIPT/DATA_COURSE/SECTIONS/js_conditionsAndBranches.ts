export const js_conditionsAndBranches_1 = {
  id: "js_conditionsAndBranches_1",
  title: "Условные операторы",
  content: `
## Что такое условия в программировании

Иногда программе нужно принимать решения в зависимости от ситуации.

**Примеры:**
- Если пользователь ввёл правильный пароль — пустить его в систему.
- Если товар есть в наличии — разрешить покупку.
- Если число больше нуля — сказать, что оно положительное.

Для этого используются условные конструкции. Самая базовая — это \`if\`.

---

### Оператор if

Оператор \`if\` проверяет условие. Если условие выполняется (то есть равно \`true\`), код внутри блока \`{}\` будет выполнен.

\`\`\`js
let age = 18;

if (age >= 18) {
  console.log("Доступ разрешён");
}
\`\`\`

В этом примере:
- \`age >= 18\` — это условие.
- Если оно истинно (\`true\`), выполняется \`console.log("Доступ разрешён")\`.
- Если условие не выполняется (\`false\`) — код внутри блока пропускается.

---

### Оператор else

Иногда нужно сделать альтернативное действие, если условие не выполнено. Для этого используется \`else\`.

\`\`\`js
let age = 16;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
\`\`\`

---

### Оператор else if

Если возможны несколько вариантов, можно использовать \`else if\`.

\`\`\`js
let score = 75;

if (score >= 90) {
  console.log("Отлично");
} else if (score >= 70) {
  console.log("Хорошо");
} else if (score >= 50) {
  console.log("Удовлетворительно");
} else {
  console.log("Неудовлетворительно");
}
\`\`\`

**Работает так:**
1. Проверяется первое условие (\`score >= 90\`)
2. Если оно ложно, проверяется второе (\`score >= 70\`)
3. И так далее, пока не найдётся подходящее условие

---

### Пример из жизни: покупка билета

\`\`\`js
let age = 12;

if (age >= 18) {
  console.log("Полный билет");
} else if (age >= 12) {
  console.log("Детский билет");
} else {
  console.log("Бесплатно");
}
\`\`\`

Если возраст 12 — выполнится блок \`else if\`.

---

### Важные правила

- Скобки \`{}\` обязательны, если внутри if/else более одной строки.  
  Если только одна — можно опустить, но лучше всегда писать для читаемости.
- \`if\` проверяет булевое значение (\`true\`/\`false\`).  
  Если передаётся число, строка и т.д. — они автоматически приводятся к булевому типу.
- \`else if\` можно использовать несколько раз подряд. \`else\` — максимум один и только в конце.

---

### Заключение

\`if\`, \`else if\` и \`else\` позволяют делать выбор в коде.  
Это основа любого алгоритма, где возможны разные действия в зависимости от условий.
  `,
  codeExampleJS: `
let age = 18;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}

let score = 75;
if (score >= 90) {
  console.log("Отлично");
} else if (score >= 70) {
  console.log("Хорошо");
} else if (score >= 50) {
  console.log("Удовлетворительно");
} else {
  console.log("Неудовлетворительно");
}

let age2 = 12;
if (age2 >= 18) {
  console.log("Полный билет");
} else if (age2 >= 12) {
  console.log("Детский билет");
} else {
  console.log("Бесплатно");
}
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else",
    "https://learn.javascript.ru/ifelse",
  ],
};
export const js_conditionsAndBranches_2 = {
  id: "js_conditionsAndBranches_2",
  title: "Тернарный оператор",
  content: `
## Что такое тернарный оператор

Иногда условие и действия по нему можно выразить в одну короткую строку.  
Для этого используется **тернарный оператор**.

Его название происходит от слова "три" — потому что он состоит из трёх частей:

\`\`\`js
условие ? значениеЕслиTrue : значениеЕслиFalse
\`\`\`

---

### Пример: доступ по возрасту

Сравним обычный \`if\` и тернарный оператор:

**Способ 1 — через if:**
\`\`\`js
let age = 20;
let access;

if (age >= 18) {
  access = "Доступ разрешён";
} else {
  access = "Доступ запрещён";
}
\`\`\`

**Способ 2 — через тернарный оператор:**
\`\`\`js
let age = 20;
let access = age >= 18 ? "Доступ разрешён" : "Доступ запрещён";
\`\`\`

Результат будет тот же — но запись короче и компактнее.

---

### Пример из жизни: цена со скидкой

\`\`\`js
let isStudent = true;
let price = isStudent ? 100 : 200;
console.log(price); // 100
\`\`\`

Если \`isStudent === true\`, получаем скидку и цена — 100.  
Если \`false\`, платим полную стоимость — 200.

---

### Тернарный оператор внутри console.log

Можно использовать прямо в выводе:

\`\`\`js
let hour = 10;
console.log(hour < 12 ? "Доброе утро" : "Добрый день");
\`\`\`

---

### Вложенные тернарные операторы

Тернарный оператор можно вложить внутрь другого, но не рекомендуется делать это без нужды — код становится плохо читаемым:

\`\`\`js
let score = 85;

let result = score >= 90
  ? "Отлично"
  : score >= 70
  ? "Хорошо"
  : score >= 50
  ? "Удовлетворительно"
  : "Неудовлетворительно";

console.log(result);
\`\`\`

Лучше использовать \`if\` / \`else if\`, если условий много.

---

### Когда использовать тернарный оператор

**Можно использовать:**
- Если нужно выбрать одно из двух значений
- Когда условие короткое и понятное

**Не стоит использовать:**
- Если условий больше двух
- Если действия слишком длинные
- Если страдает читаемость

---

### Заключение

Тернарный оператор — это сокращённая запись условия.  
Он помогает писать короткий и понятный код, но требует аккуратности.  
Если условие сложное — лучше использовать \`if\` / \`else\`.
  `,
  codeExampleJS: `
let age = 20;
let access = age >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log(access); // "Доступ разрешён"

let isStudent = false;
let price = isStudent ? 100 : 200;
console.log(price); // 200

let hour = 10;
console.log(hour < 12 ? "Доброе утро" : "Добрый день");

let score = 85;
let result = score >= 90
  ? "Отлично"
  : score >= 70
  ? "Хорошо"
  : score >= 50
  ? "Удовлетворительно"
  : "Неудовлетворительно";
console.log(result); // "Хорошо"
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
    "https://learn.javascript.ru/ifelse#uslovnyy-operator",
  ],
};
export const js_conditionsAndBranches_3 = {
  id: "js_conditionsAndBranches_3",
  title: "Вложенные условия",
  content: `
## Что такое вложенные условия

**Вложенные условия** — это ситуация, когда один оператор \`if\` находится внутри другого.

То есть: сначала программа проверяет одно условие, а внутри него — ещё одно, если первое выполнено.

---

### Пример: проверка по двум критериям

Допустим, ты пишешь код, который проверяет, может ли человек сдать экзамен:

- Если возраст больше 16
- И если у него есть документ

\`\`\`js
let age = 18;
let hasDocument = true;

if (age > 16) {
  if (hasDocument) {
    console.log("Допущен к экзамену");
  } else {
    console.log("Нет документов");
  }
} else {
  console.log("Слишком молод");
}
\`\`\`

Здесь второе \`if\` — вложено в первое. Оно будет проверяться только если возраст больше 16.

---

### Вложенные if-else if

Вложенные условия можно комбинировать с \`else if\`. Например:

\`\`\`js
let temperature = 10;

if (temperature > 0) {
  if (temperature > 25) {
    console.log("Тепло");
  } else {
    console.log("Прохладно");
  }
} else {
  console.log("Заморозки");
}
\`\`\`

---

### Вложенность на нескольких уровнях

Можно вкладывать условия сколько угодно раз, но слишком глубокая вложенность делает код трудным для чтения.

**Пример плохого стиля:**

\`\`\`js
if (a) {
  if (b) {
    if (c) {
      if (d) {
        console.log("Слишком много уровней");
      }
    }
  }
}
\`\`\`

---

### Заключение

- Вложенные условия позволяют строить многоуровневую логику.
- Используются, когда нужно делать проверки шаг за шагом.
- Их лучше использовать, когда одна проверка зависит от другой.
- Избегай глубокой вложенности — упрощай логику, выноси в функции.
  `,
  codeExampleJS: `
let age = 18;
let hasDocument = true;

if (age > 16) {
  if (hasDocument) {
    console.log("Допущен к экзамену");
  } else {
    console.log("Нет документов");
  }
} else {
  console.log("Слишком молод");
}

let temperature = 10;

if (temperature > 0) {
  if (temperature > 25) {
    console.log("Тепло");
  } else {
    console.log("Прохладно");
  }
} else {
  console.log("Заморозки");
}

// Пример плохого стиля
if (a) {
  if (b) {
    if (c) {
      if (d) {
        console.log("Слишком много уровней");
      }
    }
  }
}
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else",
    "https://learn.javascript.ru/ifelse",
  ],
};
export const js_conditionsAndBranches_4 = {
  id: "js_conditionsAndBranches_4",
  title: "Логические операторы",
  content: `
## Что такое логические операторы

Логические операторы позволяют комбинировать несколько условий внутри одного \`if\`.  
Это важно, когда нужно, чтобы выполнялись сразу несколько требований или хотя бы одно из них.

---

### Логический оператор \`&&\` (И)

Условие с \`&&\` выполняется, только если оба условия \`true\`.

\`\`\`js
if (age >= 18 && hasPassport) {
  console.log("Можно пройти проверку");
}
\`\`\`

**Работает так:**
- Если возраст >= 18 **и** паспорт есть → условие \`true\`
- Если хотя бы одно условие \`false\` → всё условие \`false\`

\`\`\`js
let hasMoney = true;
let isStoreOpen = false;

if (hasMoney && isStoreOpen) {
  console.log("Можно пойти в магазин");
} else {
  console.log("Нельзя пойти в магазин");
}
\`\`\`

Здесь \`isStoreOpen === false\`, значит \`&&\` даст \`false\`.

---

### Логический оператор \`||\` (ИЛИ)

Условие с \`||\` выполняется, если хотя бы одно из условий \`true\`.

\`\`\`js
if (isWeekend || isHoliday) {
  console.log("Выходной день");
}
\`\`\`

**Работает так:**
- Если хотя бы одно из условий \`true\` → всё условие \`true\`
- Если оба \`false\` → тогда \`false\`

\`\`\`js
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Можно отдыхать");
} else {
  console.log("Рабочий день");
}
\`\`\`

---

### Логический оператор \`!\` (НЕ)

Оператор \`!\` переворачивает значение условия: \`true\` становится \`false\`, и наоборот.

\`\`\`js
let isOnline = false;

if (!isOnline) {
  console.log("Пользователь не в сети");
}
\`\`\`

Здесь \`isOnline === false\`, \`!isOnline === true\`, значит код выполнится.

---

### Сочетания операторов

Можно комбинировать \`&&\`, \`||\`, \`!\` в одном условии:

\`\`\`js
if (!isBanned && (isAdmin || isModerator)) {
  console.log("Доступ разрешён");
}
\`\`\`

**Важно:**
- Всегда ставь скобки, если не уверен в приоритете.
- \`!\` выполняется раньше всех, потом \`&&\`, потом \`||\`.

---

### Заключение

- \`&&\` — выполняется, когда оба условия \`true\`
- \`||\` — выполняется, когда хотя бы одно \`true\`
- \`!\` — переворачивает значение
- Используй скобки для ясности при сложных комбинациях
  `,
  codeExampleJS: `
let age = 19;
let hasPassport = true;

if (age >= 18 && hasPassport) {
  console.log("Можно пройти проверку");
}

let hasMoney = true;
let isStoreOpen = false;

if (hasMoney && isStoreOpen) {
  console.log("Можно пойти в магазин");
} else {
  console.log("Нельзя пойти в магазин");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Можно отдыхать");
} else {
  console.log("Рабочий день");
}

let isOnline = false;

if (!isOnline) {
  console.log("Пользователь не в сети");
}

let isBanned = false;
let isAdmin = true;
let isModerator = false;

if (!isBanned && (isAdmin || isModerator)) {
  console.log("Доступ разрешён");
}
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators",
    "https://learn.javascript.ru/logical-operators",
    "https://learn.javascript.ru/ifelse#logicheskie-operatory-v-if",
  ],
};
export const js_conditionsAndBranches_5 = {
  id: "js_conditionsAndBranches_5",
  title: "Ранний выход (early return)",
  content: `
## Что такое «ранний выход»

**Ранний выход** — это приём, при котором программа останавливает выполнение дальнейших инструкций, если какое-то условие не выполнено.

Он помогает избежать лишней вложенности и сделать код более читаемым.

---

### Пример: обычная структура с if

\`\`\`js
let age = 15;

if (age >= 18) {
  console.log("Вы можете пройти");
  console.log("Открывается форма регистрации");
} else {
  console.log("Доступ запрещён");
}
\`\`\`

Это классическая конструкция if / else. Всё правильно, но можно упростить.

---

### Смысл раннего выхода

Ранний выход помогает:
- Проверить «плохой» случай первым.
- Вывести сообщение и остановиться (или не продолжать действия).
- Сделать код более линейным и читаемым.

---

\`\`\`js
let isLoggedIn = false;
let isBlocked = true;

if (!isLoggedIn) {
  console.log("Пожалуйста, войдите в систему");
} else if (isBlocked) {
  console.log("Ваша учётная запись заблокирована");
} else {
  console.log("Добро пожаловать");
}
\`\`\`

Здесь:
- Сначала проверяются условия, при которых не нужно продолжать.
- Только если все они не сработали, выполняется основное действие.

---

### Вывод

"Ранний выход" — это подход, а не команда.

Он помогает сначала проверять плохие случаи и не выполнять лишнего.

Это улучшает читаемость и структуру кода.

В дальнейшем, когда вы изучите функции, мы ещё вернёмся к этой теме и познакомимся с командой \`return\`, которая тоже позволяет выполнять ранний выход.
  `,
  codeExampleJS: `
let age = 15;

if (age >= 18) {
  console.log("Вы можете пройти");
  console.log("Открывается форма регистрации");
} else {
  console.log("Доступ запрещён");
}

let isLoggedIn = false;
let isBlocked = true;

if (!isLoggedIn) {
  console.log("Пожалуйста, войдите в систему");
} else if (isBlocked) {
  console.log("Ваша учётная запись заблокирована");
} else {
  console.log("Добро пожаловать");
}
  `,
  resources: [
    "https://learn.javascript.ru/ifelse#ranij-vyhod",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else",
  ],
};
export const js_conditionsAndBranches_6 = {
  id: "js_conditionsAndBranches_6",
  title: "Оператор switch",
  content: `
## Что такое switch

Оператор \`switch\` — это альтернатива конструкции \`if / else if / else\`, но только в случаях, когда ты сравниваешь одно и то же значение с разными вариантами.

---

### Общая структура

\`\`\`js
switch (выражение) {
  case значение1:
    // код, если выражение === значение1
    break;
  case значение2:
    // код, если выражение === значение2
    break;
  default:
    // код, если ничего не подошло
}
\`\`\`

---

### Простой пример: дни недели

\`\`\`js
let day = 3;

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  default:
    console.log("Другой день");
}
\`\`\`

Если \`day === 3\`, выполнится блок "Среда".

---

### Зачем нужен break

Оператор \`break\` говорит:  
"Остановись — дальше код не выполняй".

Без \`break\` выполнение переходит к следующему \`case\`, даже если он не подходит.

**Пример без break (опасная ситуация):**

\`\`\`js
let rating = 5;

switch (rating) {
  case 5:
    console.log("Отлично");
  case 4:
    console.log("Хорошо");
  case 3:
    console.log("Удовлетворительно");
  default:
    console.log("Оценка неизвестна");
}
\`\`\`

**Результат:**
Отлично  
Хорошо  
Удовлетворительно  
Оценка неизвестна

---

**Почему так?**  
Что делает JavaScript:
- switch находит совпадение: \`rating === 5\` → это \`case 5\`.
- JavaScript начинает выполнять код с этого места.
- Но т.к. нет break, он продолжает выполнять всё, что ниже, включая \`case 4\`, \`case 3\` и \`default\`.

---

### Как правильно:

\`\`\`js
switch (rating) {
  case 5:
    console.log("Отлично");
    break;
  case 4:
    console.log("Хорошо");
    break;
  case 3:
    console.log("Удовлетворительно");
    break;
  default:
    console.log("Оценка неизвестна");
}
\`\`\`

Теперь сработает только подходящий блок.

---

### Пример из жизни: выбор действия

\`\`\`js
let command = "save";

switch (command) {
  case "save":
    console.log("Сохраняем файл");
    break;
  case "load":
    console.log("Загружаем файл");
    break;
  case "delete":
    console.log("Удаляем файл");
    break;
  default:
    console.log("Неизвестная команда");
}
\`\`\`

---

### Когда использовать switch, а когда if

| Ситуация                            | Что выбрать    |
| ----------------------------------- | -------------- |
| Много значений для одного сравнения | switch         |
| Несколько разных условий            | if / else if   |
| Есть логика с &&, \`||\`, !         | if             |
| Сравниваются числа, строки, булевы  | switch можно   |

---

### Заключение

- \`switch\` — удобен, когда сравниваешь одно значение с разными вариантами
- Не забывай ставить \`break\`, иначе сработают все нижние блоки
- \`default\` — как else: он срабатывает, если ничего не подошло
  `,
  codeExampleJS: `
let day = 3;

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  default:
    console.log("Другой день");
}

let rating = 5;

switch (rating) {
  case 5:
    console.log("Отлично");
    break;
  case 4:
    console.log("Хорошо");
    break;
  case 3:
    console.log("Удовлетворительно");
    break;
  default:
    console.log("Оценка неизвестна");
}

let command = "save";

switch (command) {
  case "save":
    console.log("Сохраняем файл");
    break;
  case "load":
    console.log("Загружаем файл");
    break;
  case "delete":
    console.log("Удаляем файл");
    break;
  default:
    console.log("Неизвестная команда");
}
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch",
    "https://learn.javascript.ru/switch",
  ],
};
