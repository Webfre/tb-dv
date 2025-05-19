export const js_basics1 = {
  id: "js_basics_1",
  title: "Операторы в JavaScript",
  type: "js",
  content: `
### Операторы в JavaScript

**Операторы** — это специальные символы или ключевые слова, которые выполняют операции над значениями (переменными, выражениями и т.д.).

---

### Арифметические операторы:
- \`+\` — сложение
- \`-\` — вычитание
- \`*\` — умножение
- \`/\` — деление
- \`%\` — остаток от деления
- \`**\` — возведение в степень

**Пример:**
\`\`\`js
let a = 5 + 2;      // 7
let b = 10 % 3;     // 1
let c = 2 ** 3;     // 8
\`\`\`

---

### Операторы сравнения:
- \`==\` — нестрогое равенство (без учёта типов)
- \`===\` — строгое равенство (с учётом типов)
- \`!=\`, \`!==\` — неравенство
- \`>\`, \`<\`, \`>=\`, \`<=\` — сравнение значений

**Пример:**
\`\`\`js
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 7);     // true
\`\`\`

---

### Логические операторы:
- \`&&\` — логическое И (AND)
- \`||\` — логическое ИЛИ (OR)
- \`!\` — логическое НЕ (NOT)

**\`&&\` — логическое И:**  
Возвращает **первое ложное значение** или **последнее истинное**, если все выражения истинны.

\`\`\`js
true && true    // true
true && false   // false
false && true   // false
\`\`\`

**\`||\` — логическое ИЛИ:**  
Возвращает **первое истинное значение** или **последнее ложное**, если все выражения ложны.

\`\`\`js
false || true   // true
true || false   // true
false || false  // false
\`\`\`

**\`!\` — логическое НЕ:**  
Инвертирует логическое значение.

\`\`\`js
!true      // false
!false     // true
!0         // true (0 — falsy)
!"hello"   // false ("hello" — truthy)
\`\`\`

---

### Операторы присваивания:
- \`=\` — простое присваивание
- \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\` — комбинированные операции

**Пример:**
\`\`\`js
let count = 10;
count += 5; // то же самое, что и count = count + 5
console.log(count); // 15
\`\`\`

---

### Тернарный оператор:
- Формат: \`условие ? выражение_если_истина : выражение_если_ложь\`

**Пример:**
\`\`\`js
let age = 20;
let message = age >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log(message); // "Доступ разрешён"
\`\`\`

---

### typeof и instanceof:
- \`typeof\` — возвращает тип значения
- \`instanceof\` — проверяет, принадлежит ли объект определённому классу

**Пример:**
\`\`\`js
console.log(typeof "Привет");     // "string"
console.log([1, 2, 3] instanceof Array); // true
\`\`\`

---

### Falsy и Truthy значения:
**Falsy** — значения, которые при проверке приводятся к \`false\`:
- \`false\`
- \`0\`
- \`""\` (пустая строка)
- \`null\`
- \`undefined\`
- \`NaN\`

Все остальные значения считаются **Truthy** (ведут себя как \`true\`).

---

`.trim(),

  codeExample: `
// Примеры операторов

// Арифметика
let sum = 10 + 5;
let power = 2 ** 3;
let remainder = 10 % 3;

// Сравнение
console.log(5 == "5");    // true
console.log(5 === "5");   // false

// Логика
let x = true, y = false;
console.log(x && y);      // false
console.log(x || y);      // true
console.log(!x);          // false

// Присваивание
let score = 10;
score += 15;              // 25

// Тернарный оператор
let userAge = 17;
let access = userAge >= 18 ? "OK" : "Нет доступа";
console.log(access);      // "Нет доступа"

// typeof и instanceof
console.log(typeof 123);              // "number"
console.log({} instanceof Object);    // true
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators",
    "https://learn.javascript.ru/operators",
  ],
};

export const js_basics2 = {
  id: "js_basics_2",
  title: "Явные и неявные преобразования",
  type: "js",
  content:
    `
   В JavaScript значения могут **изменять свой тип** — это называется **преобразование типов** (*type coercion*).
 
   ### Виды преобразований:
   1. **Неявное (автоматическое)** — происходит автоматически в выражениях.
   2. **Явное (ручное)** — выполняется разработчиком с помощью функций или операторов.

   ---

   ## Неявное преобразование (Implicit Coercion)
 
   JS сам приводит значения к нужному типу при выполнении операций:
 
   ### Примеры:
 
   \`\`\`js
   // Строка + число → строка
   console.log("5" + 1);      // "51"
 
   // Строка * число → число
   console.log("6" * "2");    // 12
 
   // Булево в арифметике
   console.log(true + 1);     // 2
   console.log(false * 5);    // 0
 
   // Сравнение с приведением типов
   console.log(5 == "5");     // true (число и строка приводятся к одному типу)
   \`\`\`
 
   **Оператор +** при наличии строки вызывает **преобразование к строке**, остальные — к числу.
 
---

   ## Явное преобразование (Explicit Coercion)
 
   Выполняется с помощью функций или операторов: String(), Number(), Boolean(), унарный ` +
    `.
 
   ### Примеры:
 
   \`\`\`js
   // В строку
   let a = String(123);       // "123"
   let b = (123).toString();  // "123"
 
   // В число
   let n1 = Number("456");    // 456
   let n2 = +"789";           // 789
 
   // В булево
   Boolean("")        // false
   Boolean("hello")   // true
   Boolean(0)         // false
   Boolean(1)         // true
   \`\`\`
 
---

   ## Особенности преобразования
 
   - \`null\` → 0 при \`Number(null)\`, но \`undefined\` → \`NaN\`
   - \`false\`, \`null\`, \`undefined\`, \`0\`, \`NaN\`, \`""\` считаются **falsy**
   - Остальные значения — **truthy**
 
   \`\`\`js
   console.log(Number(null));      // 0
   console.log(Number(undefined)); // NaN
   console.log(Boolean(0));        // false
   console.log(Boolean(" "));      // true
   \`\`\`
 
---

   ## Рекомендуется
 
   - Использовать **строгое сравнение** (\`===\`) чтобы избежать неявных преобразований.
   - Явно приводить типы в выражениях для читаемости и предсказуемости.
   `.trim(),

  codeExample: `
 // Неявное преобразование
 console.log("5" * "2");     // 10
 console.log("5" + 1);       // "51"
 console.log(false + 1);     // 1
 
 // Явное преобразование
 console.log(Number("123"));    // 123
 console.log(String(456));      // "456"
 console.log(Boolean(""));      // false
 console.log(Boolean("abc"));   // true
 
 // Строгое сравнение
 console.log(5 == "5");    // true  (неявное приведение)
 console.log(5 === "5");   // false (разные типы)
   `.trim(),

  resources: ["https://learn.javascript.ru/type-conversions"],
};

export const js_basics3 = {
  id: "js_basics_3",
  title: "Методы окон",
  type: "js",
  content: `
   В JavaScript объект \`window\` представляет текущее окно браузера. Он предоставляет доступ ко множеству встроенных методов для взаимодействия с пользователем.
 
   ## Основные методы окна:
 
   ### 1. alert()
   Показывает модальное окно с сообщением. Не возвращает значения.
 
   \`\`\`js
   alert("Привет, мир!");
   \`\`\`
 
   ### 2. confirm()
   Показывает окно с сообщением и кнопками "ОК" и "Отмена". Возвращает \`true\` при выборе "ОК" и \`false\` — при "Отмена".
 
   \`\`\`js
   const result = confirm("Вы уверены?");
   console.log(result); // true или false
   \`\`\`
 
   ### 3. prompt()
   Показывает окно с полем ввода текста и кнопками. Возвращает введённое значение или \`null\`, если нажата "Отмена".
 
   \`\`\`js
   const name = prompt("Введите ваше имя:");
   console.log("Привет, " + name);
   \`\`\`
 
   ### 4. open()
   Открывает новое окно или вкладку.
 
   \`\`\`js
   window.open("https://example.com", "_blank");
   \`\`\`
 
   Второй аргумент:
   - \`_blank\` — открыть в новой вкладке
   - \`_self\` — в текущем окне
 
   ### 5. close()
   Закрывает текущее окно. Обычно работает только для окон, открытых через \`window.open()\`.
 
   \`\`\`js
   const newWin = window.open("https://example.com");
   newWin.close();
   \`\`\``,
  codeExample: `
 // alert
 alert("Добро пожаловать!");
 
 // confirm
 if (confirm("Удалить элемент?")) {
   console.log("Удалено");
 } else {
   console.log("Отменено");
 }
 
 // prompt
 const user = prompt("Ваше имя:");
 console.log("Привет,", user);
 
 // open / close
 const newTab = window.open("https://example.com");
 newTab.close();
   `.trim(),
};

export const js_basics4 = {
  id: "js_basics_4",
  title: "Работа со строками",
  type: "js",
  content: `
  В JavaScript строки (тип \`string\`) используются для хранения и обработки текстовой информации. Строки можно создавать с помощью одинарных (\`'\`), двойных (\`"\`) или обратных кавычек (\`\`\`).
  
  ## Создание строк
  
  \`\`\`js
  let str1 = "Привет";
  let str2 = 'Мир';
  let str3 = \`Ширина: \${100}px\`; // шаблонная строка с подстановкой переменных
  \`\`\`
  
---

  ## Получение символов
  
  - \`[index]\` — возвращает символ по указанной позиции.
  - \`.charAt(index)\` — альтернатива, также возвращает символ по индексу.
  - \`.length\` — возвращает длину строки.
  
  \`\`\`js
  let text = "JavaScript";
  
  text[0];        // "J"
  text.charAt(1); // "a"
  text[text.length - 1]; // последний символ — "t"
  \`\`\`
  
---

  ## Конкатенация (объединение)
  
  - Оператор \`+\` используется для объединения строк.
  - Шаблонные строки (\`\`) позволяют вставлять переменные внутрь текста с помощью \`\${...}\`.
  
  \`\`\`js
  let name = "Анна";
  let greeting = "Привет, " + name + "!";
  let phrase = \`Добро пожаловать, \${name}!\`;
  \`\`\`
  
---

  ## Длина строки
  
  - Свойство \`.length\` возвращает количество символов в строке.
  
  \`\`\`js
  let word = "Frontend";
  console.log(word.length); // 8
  \`\`\`
  
---

  ## Изменение регистра
  
  - \`.toUpperCase()\` — возвращает строку, где все буквы в верхнем регистре.
  - \`.toLowerCase()\` — возвращает строку, где все буквы в нижнем регистре.
  
  \`\`\`js
  let input = "JavaScript";
  
  input.toUpperCase(); // "JAVASCRIPT"
  input.toLowerCase(); // "javascript"
  \`\`\`
  
---

  ## Поиск подстроки
  
  - \`.includes(substr)\` — возвращает true, если подстрока найдена.
  - \`.startsWith(substr)\` — проверяет, начинается ли строка с указанной подстроки.
  - \`.endsWith(substr)\` — проверяет, заканчивается ли строка указанной подстрокой.
  - \`.indexOf(substr)\` — возвращает индекс первого вхождения подстроки или -1.
  
  \`\`\`js
  let message = "Привет, мир";
  
  message.includes("мир");     // true
  message.startsWith("Прив");  // true
  message.endsWith("нет");     // false
  message.indexOf("в");        // 3 (позиция символа "в")
  \`\`\`
  
---

  ## Извлечение подстроки
  
  - \`.slice(start, end)\` — возвращает часть строки от start до end (не включая end).
  - \`.substring(start, end)\` — аналогична slice, но не принимает отрицательные значения.
  - \`.substr(start, length)\` — возвращает часть строки от позиции start длиной length (устаревший метод).
  
  \`\`\`js
  let lang = "JavaScript";
  
  lang.slice(0, 4);      // "Java"
  lang.substring(4, 10); // "Script"
  lang.substr(4, 3);     // "Scr"
  \`\`\`
  
---

  ## Удаление пробелов
  
  - \`.trim()\` — удаляет пробелы в начале и в конце строки.
  - \`.trimStart()\` — удаляет пробелы только в начале строки.
  - \`.trimEnd()\` — удаляет пробелы только в конце строки.
  
  \`\`\`js
  let raw = "  текст с пробелами   ";
  
  raw.trim();      // "текст с пробелами"
  raw.trimStart(); // "текст с пробелами   "
  raw.trimEnd();   // "  текст с пробелами"
  \`\`\`
  
---

  ## Замена текста
  
  - \`.replace(from, to)\` — заменяет первое вхождение подстроки.
  - \`.replaceAll(from, to)\` — заменяет все вхождения (ES2021+).
  
  \`\`\`js
  let text = "Я люблю JS";
  
  text.replace("JS", "JavaScript"); // "Я люблю JavaScript"
  text.replaceAll("о", "0");        // заменяет все "о" на "0"
  \`\`\`
  
---

  ## Разделение и объединение
  
  - \`.split(separator)\` — разбивает строку на массив по разделителю.
  - \`.join(separator)\` — объединяет массив строк в одну строку через указанный разделитель.
  
  \`\`\`js
  let data = "html,css,js";
  
  let arr = data.split(",");     // ["html", "css", "js"]
  let result = arr.join(" + ");  // "html + css + js"
  \`\`\`
  `.trim(),

  codeExample: `
 // Примеры задач со строками
 
 let user = "  alex ";
 let cleanName = user.trim();             // "alex"
 
 let title = "javascript";
 let capitalized = title[0].toUpperCase() + title.slice(1); // "Javascript"
 
 let email = "user@example.com";
 console.log(email.includes("@"));        // true
 
 let desc = "Frontend Developer";
 console.log(desc.toLowerCase());         // "frontend developer"
 
 let path = "index.html";
 console.log(path.endsWith(".html"));     // true
 
 let phrase = "Я учу JavaScript";
 let updated = phrase.replace("учу", "изучаю"); // "Я изучаю JavaScript"
 
 let tags = "react,redux,typescript";
 let tagList = tags.split(",");           // ["react", "redux", "typescript"]
 
 let joined = tagList.join(" | ");        // "react | redux | typescript"
   `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String",
    "https://learn.javascript.ru/string",
  ],
};

export const js_basics5 = {
  id: "js_basics_5",
  title: "Работа с числами",
  type: "js",
  content: `
 В JavaScript числа представлены типом \`number\`. Он используется для представления как целых чисел, так и чисел с плавающей точкой. JavaScript также поддерживает специальные значения: \`Infinity\`, \`-Infinity\` и \`NaN\`.
 
 ## Объявление чисел
 
 Числа можно записывать в обычной или экспоненциальной форме:
 
 \`\`\`js
 let a = 10;           // целое число
 let b = 3.14;         // дробное число
 let c = -20;          // отрицательное число
 let d = 1.2e3;        // 1200 (экспоненциальная запись)
 \`\`\`
 
---

 ## Арифметические операции
 
 JavaScript поддерживает стандартные математические операции:
 
 \`\`\`js
 let sum = 10 + 5;        // 15
 let diff = 10 - 3;       // 7
 let mult = 2 * 4;        // 8
 let div = 9 / 3;         // 3
 let mod = 10 % 3;        // 1
 let power = 2 ** 3;      // 8
 \`\`\`
 
---

 ## Проверка типа числа
 
 - \`typeof value\` — возвращает "number" для чисел.
 - \`isNaN(value)\` — проверяет, является ли значение \`NaN\`.
 - \`isFinite(value)\` — проверяет, является ли число конечным.
 
 \`\`\`js
 typeof 42;               // "number"
 isNaN("abc");            // true
 isNaN(100);              // false
 isFinite(10);            // true
 isFinite(Infinity);      // false
 \`\`\`
 

---

 ## Преобразование строки в число
 
 - \`Number(value)\` — явное преобразование в число.
 - \`parseInt(value, radix)\` — преобразует строку в целое число.
 - \`parseFloat(value)\` — преобразует строку в дробное число.
 - Унарный \`+\` также преобразует строку в число.
 
 \`\`\`js
 Number("10.5");          // 10.5
 parseInt("15px");        // 15
 parseFloat("3.14text");  // 3.14
 +"123";                  // 123
 \`\`\`
 
---

 ## Округление чисел
 
 - \`Math.round()\` — округляет до ближайшего целого.
 - \`Math.floor()\` — округляет вниз (в меньшую сторону).
 - \`Math.ceil()\` — округляет вверх (в большую сторону).
 - \`Math.trunc()\` — отбрасывает дробную часть.
 
 \`\`\`js
 Math.round(3.6);   // 4
 Math.floor(3.6);   // 3
 Math.ceil(3.2);    // 4
 Math.trunc(3.9);   // 3
 \`\`\`
 
---

 ## Работа с Math
 
 Объект \`Math\` содержит полезные константы и методы:
 
 \`\`\`js
 Math.max(1, 5, 10);    // 10
 Math.min(1, 5, 10);    // 1
 Math.pow(2, 4);        // 16 (2 в степени 4)
 Math.sqrt(16);         // 4
 Math.random();         // случайное число от 0 до 1
 Math.abs(-10);         // 10 (модуль)
 \`\`\`
 
---

 ## Форматирование чисел
 
 - \`toFixed(n)\` — округляет число до n знаков после запятой и возвращает строку.
 - \`toString(base)\` — возвращает строковое представление числа в указанной системе счисления.
 
 \`\`\`js
 let n = 3.14159;
 
 n.toFixed(2);      // "3.14"
 (255).toString(16); // "ff" (шестнадцатеричная)
 \`\`\`
 
---

 ## Особенности NaN и Infinity
 
 - \`NaN\` означает "не число", например, результат недопустимой математической операции.
 - \`Infinity\` и \`-Infinity\` — результат деления на ноль или чисел, вышедших за пределы диапазона.
 
 \`\`\`js
 0 / 0;            // NaN
 10 / 0;           // Infinity
 -10 / 0;          // -Infinity
 \`\`\`
   `.trim(),

  codeExample: `
 // Арифметика
 let a = 5 + 3;           // 8
 let b = 10 / 2;          // 5
 let c = 2 ** 4;          // 16
 
 // Проверка типа
 console.log(typeof a);   // "number"
 console.log(isNaN("abc")); // true
 console.log(isFinite(100)); // true
 
 // Преобразование
 let d = +"42.5";         // 42.5
 let e = parseInt("100px");  // 100
 let f = parseFloat("5.67kg"); // 5.67
 
 // Округление
 console.log(Math.round(4.5)); // 5
 console.log(Math.floor(4.9)); // 4
 console.log(Math.ceil(4.1));  // 5
 console.log(Math.trunc(4.9)); // 4
 
 // Math
 let max = Math.max(1, 9, 4);     // 9
 let sqrt = Math.sqrt(25);       // 5
 let rand = Math.random();       // случайное число от 0 до 1
 let abs = Math.abs(-15);        // 15
 
 // Форматирование
 let pi = 3.14159;
 console.log(pi.toFixed(2));     // "3.14"
 console.log((255).toString(16)); // "ff"
   `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number",
    "https://learn.javascript.ru/number",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math",
  ],
};

export const js_basics6 = {
  id: "js_basics_6",
  title: "Условия в JavaScript",
  type: "js",
  content: `
 В JavaScript **условия** позволяют выполнять разные участки кода в зависимости от истинности выражений. Условные конструкции — основа управления потоком выполнения программы.
 
 ## Основная структура if
 
 Конструкция \`if\` проверяет логическое выражение и выполняет блок кода, если оно истинно (\`true\`):
 
 \`\`\`js
 let age = 18;
 
 if (age >= 18) {
   console.log("Доступ разрешён");
 }
 \`\`\`
 
---

 ## if...else
 
 Если условие ложно, выполняется блок \`else\`:
 
 \`\`\`js
 let age = 16;
 
 if (age >= 18) {
   console.log("Доступ разрешён");
 } else {
   console.log("Доступ запрещён");
 }
 \`\`\`
 
---

 ## if...else if...else
 
 Можно проверить несколько условий последовательно:
 
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
 
---

 ## Тернарный оператор
 
 Краткая форма условия:
 
 \`\`\`js
 let isLoggedIn = true;
 
 let message = isLoggedIn ? "Добро пожаловать!" : "Войдите в систему";
 console.log(message);
 \`\`\`
 
---

 ## Условие в виде значения
 
 Условие в \`if\` — любое выражение, приводимое к логическому типу (boolean). Значения делятся на:
 
 **Falsy** (считаются ложными):
 - \`false\`
 - \`0\`
 - \`""\` (пустая строка)
 - \`null\`
 - \`undefined\`
 - \`NaN\`
 
 Остальные значения — **truthy** (истинные).
 
 \`\`\`js
 if ("текст") {
   console.log("Это truthy"); // выполнится
 }
 
 if (0) {
   console.log("Это не выполнится"); // 0 — falsy
 }
 \`\`\`
 
---

 ## Оператор switch
 
 Подходит, когда нужно сравнить одно значение с разными вариантами:
 
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
     console.log("Неизвестный день");
 }
 \`\`\`
 
 - \`break\` — прекращает выполнение после совпадения
 - \`default\` — выполняется, если нет совпадений
 
---

 ## Вложенные условия
 
 Можно вкладывать \`if\` внутри других \`if\`:
 
 \`\`\`js
 let isAdmin = true;
 let isLoggedIn = true;
 
 if (isLoggedIn) {
   if (isAdmin) {
     console.log("Привет, администратор");
   } else {
     console.log("Привет, пользователь");
   }
 }
 \`\`\`
   `.trim(),

  codeExample: `
 // Примеры условий
 
 let age = 20;
 
 // Простое условие
 if (age >= 18) {
   console.log("Совершеннолетний");
 } else {
   console.log("Несовершеннолетний");
 }
 
 // Тернарный оператор
 let access = age >= 18 ? "Доступ есть" : "Нет доступа";
 console.log(access);
 
 // Условие с несколькими вариантами
 let grade = 85;
 if (grade >= 90) {
   console.log("Отлично");
 } else if (grade >= 70) {
   console.log("Хорошо");
 } else {
   console.log("Удовлетворительно");
 }
 
 // switch-case
 let color = "red";
 switch (color) {
   case "green":
     console.log("Зелёный");
     break;
   case "red":
     console.log("Красный");
     break;
   default:
     console.log("Неизвестный цвет");
 }
   `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else",
    "https://learn.javascript.ru/ifelse",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch",
  ],
};

export const js_basics7 = {
  id: "js_basics_7",
  title: "Циклы в JavaScript",
  type: "js",
  content: `
 Циклы в JavaScript позволяют **повторять однотипные действия** несколько раз. Это удобно при переборе массивов, выполнении повторяющихся операций и генерации данных.
 
 ## Зачем нужны циклы
 
 Если нужно выполнить одно и то же действие несколько раз, вместо копирования кода можно использовать цикл.
 
 \`\`\`js
 console.log("Привет");
 console.log("Привет");
 console.log("Привет");
 \`\`\`
 
 Можно заменить на:
 
 \`\`\`js
 for (let i = 0; i < 3; i++) {
   console.log("Привет");
 }
 \`\`\`
 
---

 ## Виды циклов в JavaScript
 
 ### 1. for
 
 Цикл \`for\` используется, когда известно количество повторений.
 
 **Синтаксис:**
 
 \`\`\`js
 for (начало; условие; шаг) {
   // тело цикла
 }
 \`\`\`
 
 **Пример:**
 
 \`\`\`js
 for (let i = 1; i <= 5; i++) {
   console.log("Число:", i);
 }
 \`\`\`
 
 **Плюсы:**
 - Подходит для чётко ограниченных повторений
 - Контроль счётчика
 
 **Минусы:**
 - Требует инициализации счётчика, условия и шага
 
 ---
 
 ### 2. while
 
 Цикл \`while\` выполняется, пока условие истинно.
 
 **Синтаксис:**
 
 \`\`\`js
 while (условие) {
   // тело цикла
 }
 \`\`\`
 
 **Пример:**
 
 \`\`\`js
 let i = 1;
 while (i <= 3) {
   console.log("Итерация", i);
   i++;
 }
 \`\`\`
 
 **Плюсы:**
 - Гибкий, подходит при неизвестном числе повторов
 
 **Минусы:**
 - Нужно следить за выходом из цикла вручную
 
 ---
 
 ### 3. do...while
 
 Цикл \`do...while\` сначала выполнит тело, а затем проверит условие (всегда минимум одна итерация).
 
 **Синтаксис:**
 
 \`\`\`js
 do {
   // тело цикла
 } while (условие);
 \`\`\`
 
 **Пример:**
 
 \`\`\`js
 let num = 0;
 do {
   console.log("Сработает хотя бы один раз");
   num++;
 } while (num < 1);
 \`\`\`
 
 **Плюсы:**
 - Выполняется хотя бы один раз
 
 **Минусы:**
 - Может выполнить лишний раз, если условие ложное
 
 ---
 
 ### 4. for...of
 
 Цикл \`for...of\` используется для перебора **итерируемых объектов** (массивов, строк и т.д.).
 
 **Синтаксис:**
 
 \`\`\`js
 for (let value of iterable) {
   // тело цикла
 }
 \`\`\`
 
 **Пример:**
 
 \`\`\`js
 let fruits = ["яблоко", "банан", "груша"];
 
 for (let fruit of fruits) {
   console.log(fruit);
 }
 \`\`\`
 
 **Плюсы:**
 - Удобен для массивов
 - Не требует индексов
 
 **Минусы:**
 - Нет доступа к индексу напрямую
 
 ---
 
 ### 5. for...in
 
 Цикл \`for...in\` используется для перебора **свойств объекта**.
 
 **Синтаксис:**
 
 \`\`\`js
 for (let key in object) {
   // тело цикла
 }
 \`\`\`
 
 **Пример:**
 
 \`\`\`js
 let user = {
   name: "Анна",
   age: 25,
 };
 
 for (let key in user) {
   console.log(key + ": " + user[key]);
 }
 \`\`\`
 
 **Плюсы:**
 - Удобен для перебора объектов
 
 **Минусы:**
 - Не подходит для массивов (порядок не гарантирован)
 
 ---
 
 ## Прерывание и продолжение цикла
 
 - \`break\` — полностью завершает цикл
 - \`continue\` — пропускает текущую итерацию
 
 \`\`\`js
 for (let i = 1; i <= 5; i++) {
   if (i === 3) continue;
   if (i === 5) break;
   console.log(i); // выведет 1, 2, 4
 }
 \`\`\`
   `.trim(),

  codeExample: `
 // for
 for (let i = 0; i < 3; i++) {
   console.log("for:", i);
 }
 
 // while
 let j = 0;
 while (j < 3) {
   console.log("while:", j);
   j++;
 }
 
 // do...while
 let k = 0;
 do {
   console.log("do...while:", k);
   k++;
 } while (k < 1);
 
 // for...of
 let letters = ["a", "b", "c"];
 for (let letter of letters) {
   console.log("for...of:", letter);
 }
 
 // for...in
 let car = { brand: "Toyota", year: 2020 };
 for (let key in car) {
   console.log(key, "=>", car[key]);
 }
 
 // break и continue
 for (let i = 1; i <= 5; i++) {
   if (i === 2) continue;
   if (i === 4) break;
   console.log("Цикл с пропуском и остановкой:", i);
 }
   `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration",
    "https://learn.javascript.ru/while-for",
  ],
};
