export const js_functions_1 = {
  id: "js_functions_1",
  title: "Что такое функция и зачем она нужна",
  content: `
## Что такое функция

Функция — это именованный блок кода, который можно многократно вызывать, передавать в него данные и получать результат.

Проще говоря, функция — это действие, которое ты можешь запрограммировать один раз, а потом вызывать столько раз, сколько нужно.

\`\`\`js
function sayHello() {
  console.log("Привет!");
}

sayHello(); // вызов функции
sayHello(); // ещё раз
\`\`\`

Эта функция выводит сообщение. Мы её написали один раз, а используем многократно.

---

### Зачем нужны функции

Функции позволяют:
- Избежать повторения кода (принцип DRY — Don't Repeat Yourself)
- Разделять программу на логические блоки
- Повышать читаемость и удобство сопровождения кода
- Передавать данные внутрь функции
- Получать результат обратно

---

### Пример из жизни

Представь, что ты печатаешь письмо.  
Без функции: ты каждый раз вручную набираешь весь текст.  
С функцией: ты создаёшь шаблон, а потом просто используешь его сколько угодно раз.

То же и в коде: функция — как шаблон действия.

---

### Пример с повторением кода без функции

\`\`\`js
console.log("Добро пожаловать!");
console.log("Добро пожаловать!");
console.log("Добро пожаловать!");
\`\`\`

Здесь три одинаковые строки. Плохо.

\`\`\`js
function greetUser() {
  console.log("Добро пожаловать!");
}

greetUser(); // 1
greetUser(); // 2
greetUser(); // 3
\`\`\`

Код стал короче, понятнее, удобнее.

---

### Что делает функция

Функция может:
- получать данные на вход (аргументы);
- выполнять какие-то действия;
- возвращать результат (через return).

\`\`\`js
function double(x) {
  return x * 2;
}

console.log(double(5)); // 10
console.log(double(7)); // 14
\`\`\`

Мы передаём в функцию число x, функция возвращает x * 2.

---

### Как работает функция в памяти

Когда ты определяешь функцию, она сохраняется в памяти, но не выполняется.

Когда ты вызываешь функцию — она запускается. После завершения — возвращает результат или просто завершает работу.

---

### Итого: зачем нужны функции

| Без функции              | С функцией                              |
| ------------------------ | --------------------------------------- |
| Код повторяется          | Код написан один раз и переиспользуется |
| Сложно менять логику     | Логику можно изменить в одном месте     |
| Трудно читать            | Код разбит на понятные блоки            |
| Нельзя передавать данные | Можно передавать аргументы              |
| Нет результата           | Можно возвращать результат (return)     |

---

### Подведём итог

Функция — это как команда:

«Сделай вот это, когда я тебя позову — и можешь использовать входные данные.»

Она помогает:
- не дублировать однотипный код;
- разбивать программу на части;
- улучшать читаемость и поддержку кода;
- и, самое главное, мыслить в терминах действий, а не только значений.
  `,
  codeExampleJS: `
function sayHello() {
  console.log("Привет!");
}

sayHello();
sayHello();

function greetUser() {
  console.log("Добро пожаловать!");
}

greetUser();
greetUser();
greetUser();

function double(x) {
  return x * 2;
}

console.log(double(5)); // 10
console.log(double(7)); // 14
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions",
    "https://learn.javascript.ru/function-basics",
  ],
};
export const js_functions_2 = {
  id: "js_functions_2",
  title: "Объявление функции",
  content: `
## Как объявить функцию в JavaScript

В JavaScript есть несколько способов создать функцию.  
Самый базовый и понятный — через **function-декларацию** (function declaration).

---

### Синтаксис function-декларации

\`\`\`js
function имяФункции(параметры) {
  // тело функции
}
\`\`\`

- \`function\` — ключевое слово.
- \`имяФункции\` — название, по которому мы потом будем вызывать функцию.
- \`параметры\` — переменные, которые принимает функция (в скобках).
- \`тело функции\` — блок кода, который выполняется при вызове.

---

### Примеры

**Функция без параметров:**

\`\`\`js
function greet() {
  console.log("Привет, пользователь!");
}

greet(); // вызов функции
\`\`\`

**Функция с параметром:**

\`\`\`js
function greet(name) {
  console.log("Привет, " + name + "!");
}

greet("Анна"); // "Привет, Анна!"
greet("Олег"); // "Привет, Олег!"
\`\`\`

**Функция с несколькими параметрами:**

\`\`\`js
function sum(a, b) {
  console.log(a + b);
}

sum(3, 4); // 7
sum(10, 5); // 15
\`\`\`

---

### Возврат значения с помощью return

Функция может не только выполнять действия, но и возвращать результат наружу.

\`\`\`js
function multiply(x, y) {
  return x * y;
}

let result = multiply(2, 3);
console.log(result); // 6
\`\`\`

- \`return\` завершает выполнение функции и возвращает значение.
- После \`return\` функция больше не выполняется.

---

### Пустая функция

Если в теле ничего не написано — функция всё равно работает, просто ничего не делает:

\`\`\`js
function doNothing() {
}
\`\`\`

Можно также явно вернуть undefined:

\`\`\`js
function noValue() {
  return;
}
\`\`\`

---

### Вызов функции

Чтобы запустить функцию, нужно указать её имя и круглые скобки:

\`\`\`js
sayHi(); // вызов
\`\`\`

Если забыть скобки, то ты просто ссылаешься на функцию, но не вызываешь её:

\`\`\`js
console.log(sayHi);   // выведет код функции
console.log(sayHi()); // выполнит функцию
\`\`\`

---

### Правила наименования функций

- Имя должно быть понятным и описывать действие: \`showMessage\`, \`calculateTax\`, \`sendEmail\`.
- Пишется в camelCase: первая буква маленькая, каждое следующее слово с большой буквы.
- Нельзя начинать имя с цифры.
- Можно использовать буквы, цифры, $, _.

---

### Ошибки при объявлении

\`\`\`js
function myFunc {
  console.log("Ошибка");
}
\`\`\`

**Ошибка:** пропущены круглые скобки после имени — должно быть \`myFunc()\`.

---

### Вывод

- Функция — это инструмент, который мы создаём один раз и используем сколько угодно.
- Объявление через \`function\` — основной способ создать функцию.
- Можно передавать данные (параметры) и возвращать результат (\`return\`).
- Хорошие имена функций делают код читаемым и понятным.
  `,
  codeExampleJS: `
function greet() {
  console.log("Привет, пользователь!");
}

greet();

function greet(name) {
  console.log("Привет, " + name + "!");
}

greet("Анна");
greet("Олег");

function sum(a, b) {
  console.log(a + b);
}

sum(3, 4);
sum(10, 5);

function multiply(x, y) {
  return x * y;
}

let result = multiply(2, 3);
console.log(result);

function doNothing() {}

function noValue() {
  return;
}

// Ошибка объявления
// function myFunc {
//   console.log("Ошибка");
// }
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions",
    "https://learn.javascript.ru/function-basics#ob-yavlenie-funktsii",
  ],
};
export const js_functions_3 = {
  id: "js_functions_3",
  title: "Виды функций",
  content: `
## 1. Function Declaration — Функция-декларация

Это классический способ объявления функции, который используется чаще всего.

\`\`\`js
function greet(name) {
  console.log("Привет, " + name);
}

greet("Анна"); // "Привет, Анна"
\`\`\`

**Особенности:**
- Такая функция доступна в коде до её объявления. Это возможно благодаря механизму JavaScript, который называется **всплытие (hoisting)**.
- Подходит для основного кода и простых задач.

\`\`\`js
sayHello(); // работает, хотя объявление ниже

function sayHello() {
  console.log("Привет!");
}
\`\`\`

---

## 2. Function Expression — Функция-выражение

Здесь функция создаётся как значение и сохраняется в переменной.

\`\`\`js
const greet = function(name) {
  console.log("Привет, " + name);
};

greet("Олег"); // "Привет, Олег"
\`\`\`

**Особенности:**
- Это выражение — оно **не всплывает**.
- Функция доступна только после её создания.

\`\`\`js
sayHi(); // ошибка: Cannot access 'sayHi' before initialization

const sayHi = function() {
  console.log("Привет");
};
\`\`\`

Также можно использовать именованные функции:

\`\`\`js
const multiply = function mult(a, b) {
  return a * b;
};
\`\`\`

---

## 3. Arrow Function — Стрелочная функция

Это короткий способ записи функций, особенно удобный для однострочных действий.

\`\`\`js
const greet = (name) => {
  console.log("Привет, " + name);
};

greet("Мария");
\`\`\`

Если параметр один — можно опустить скобки:

\`\`\`js
const double = x => x * 2;
\`\`\`

Если функция возвращает одно выражение — можно не писать \`return\` и фигурные скобки:

\`\`\`js
const sum = (a, b) => a + b;
\`\`\`

Если нет параметров:

\`\`\`js
const sayHello = () => console.log("Привет!");
\`\`\`

---

### Сравнение всех трёх видов

| Вид                  | Всплывает (можно вызывать до объявления) | Подходит для                        |
| -------------------- | ---------------------------------------- | ----------------------------------- |
| function declaration | Да                                       | Основной код                        |
| function expression  | Нет                                      | Выражения, колбэки, передача дальше |
| arrow function       | Нет                                      | Короткие действия, лаконичность     |

---

## Примеры

**Обычная функция:**

\`\`\`js
function showMessage() {
  console.log("Сообщение");
}
\`\`\`

**Функция-выражение:**

\`\`\`js
const showMessage = function() {
  console.log("Сообщение");
};
\`\`\`

**Стрелочная функция:**

\`\`\`js
const showMessage = () => {
  console.log("Сообщение");
};
\`\`\`

---

## Когда использовать какой вид?

- Используй **function declaration** — если тебе нужно простое, классическое поведение.
- Используй **function expression** — если хочешь сохранить функцию в переменной.
- Используй **arrow function** — если нужна краткость, особенно внутри методов map, forEach, filter.
  `,
  codeExampleJS: `
function greet(name) {
  console.log("Привет, " + name);
}

const greetExpr = function(name) {
  console.log("Привет, " + name);
};

const greetArrow = (name) => {
  console.log("Привет, " + name);
};

sayHello(); // работает

function sayHello() {
  console.log("Привет!");
}

// sayHi(); // ошибка
const sayHi = function() {
  console.log("Привет");
};

const double = x => x * 2;
const sum = (a, b) => a + b;
const sayHelloArrow = () => console.log("Привет!");
  `,
  resources: [
    "https://learn.javascript.ru/function-expressions",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function",
  ],
};
export const js_functions_4 = {
  id: "js_functions_4",
  title: "Аргументы и return",
  content: `
## Что такое аргументы

Аргументы функции — это данные, которые мы передаём функции при вызове.  
Внутри функции эти данные попадают в переменные, указанные в круглых скобках — они называются **параметры**.

- **Параметры** — это имена внутри функции.
- **Аргументы** — это значения, которые передаются при вызове.

\`\`\`js
function greet(name) {
  console.log("Привет, " + name);
}

greet("Анна"); // "Привет, Анна"
\`\`\`

- \`name\` — параметр
- \`"Анна"\` — аргумент

---

### Функция с несколькими параметрами

\`\`\`js
function showInfo(name, age) {
  console.log("Имя: " + name + ", Возраст: " + age);
}

showInfo("Олег", 25); // Имя: Олег, Возраст: 25
\`\`\`

Параметры перечисляются через запятую.  
Аргументы должны передаваться в том же порядке, что и параметры.

---

## Что такое return

Оператор \`return\` используется, чтобы вернуть результат из функции.

\`\`\`js
function add(a, b) {
  return a + b;
}

let sum = add(3, 4);
console.log(sum); // 7
\`\`\`

- \`return\` завершает выполнение функции.
- Значение, указанное после \`return\`, можно сохранить в переменной.
- После \`return\` код в функции больше не выполняется.

---

### Пример с return

\`\`\`js
function getGreeting(name) {
  return "Привет, " + name;
}

console.log(getGreeting("Алиса")); // "Привет, Алиса"
\`\`\`

Функция вернула строку, а не просто вывела её в консоль.

---

### Возвращение значения и остановка

\`\`\`js
function check(num) {
  if (num > 0) {
    return "Положительное";
  }
  return "Не положительное";
}

console.log(check(5));  // "Положительное"
console.log(check(-2)); // "Не положительное"
\`\`\`

Как только \`return\` сработал — всё, функция завершила работу.

---

### Что будет, если не писать return

Если функция не содержит \`return\`, она всё равно работает, но возвращает \`undefined\`:

\`\`\`js
function sayHi(name) {
  console.log("Привет, " + name);
}

let result = sayHi("Вика");
console.log(result); // undefined
\`\`\`

Потому что sayHi только выводит текст, но ничего не возвращает.

---

### Функции можно использовать как часть выражения

\`\`\`js
function double(n) {
  return n * 2;
}

console.log(double(3) + double(4)); // 6 + 8 = 14
\`\`\`

---

### Примеры из жизни

**Функция, возвращающая сумму**

\`\`\`js
function total(price, quantity) {
  return price * quantity;
}
\`\`\`

**Функция, которая ничего не возвращает**

\`\`\`js
function printWelcome() {
  console.log("Добро пожаловать!");
}
\`\`\`

---

### Подведём итог

- Аргументы — данные, которые мы передаём функции.
- Параметры — переменные, принимающие эти данные.
- \`return\` — позволяет вернуть результат из функции.
- Без \`return\` функция всегда возвращает \`undefined\`.
  `,
  codeExampleJS: `
function greet(name) {
  console.log("Привет, " + name);
}

greet("Анна");

function showInfo(name, age) {
  console.log("Имя: " + name + ", Возраст: " + age);
}

showInfo("Олег", 25);

function add(a, b) {
  return a + b;
}

let sum = add(3, 4);
console.log(sum);

function getGreeting(name) {
  return "Привет, " + name;
}

console.log(getGreeting("Алиса"));

function check(num) {
  if (num > 0) {
    return "Положительное";
  }
  return "Не положительное";
}

console.log(check(5));
console.log(check(-2));

function sayHi(name) {
  console.log("Привет, " + name);
}

let result = sayHi("Вика");
console.log(result);

function double(n) {
  return n * 2;
}

console.log(double(3) + double(4));

function total(price, quantity) {
  return price * quantity;
}

function printWelcome() {
  console.log("Добро пожаловать!");
}
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions",
    "https://learn.javascript.ru/function-basics#argumenty",
    "https://learn.javascript.ru/function-basics#vozvrat-znacheniya-return",
  ],
};
export const js_functions_5 = {
  id: "js_functions_5",
  title: "Параметры по умолчанию и необязательные аргументы",
  content: `
## Что такое параметры по умолчанию

Параметры по умолчанию — это значения, которые используются, если аргумент не передан при вызове функции.

То есть: если мы не указали значение — используется значение "по умолчанию".

---

### Синтаксис:

\`\`\`js
function имяФункции(параметр = значениеПоУмолчанию) {
  // тело функции
}
\`\`\`

---

### Пример:

\`\`\`js
function greet(name = "Гость") {
  console.log("Привет, " + name);
}

greet("Анна"); // Привет, Анна
greet();       // Привет, Гость
\`\`\`

Если name не передан — будет использовано "Гость".

---

### Параметры по умолчанию могут быть любыми значениями:

\`\`\`js
function showMessage(text = "Нет сообщения", repeat = 1) {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
}

showMessage(); // "Нет сообщения"
showMessage("Привет!", 3); // трижды "Привет!"
\`\`\`

---

## Необязательные аргументы

Если в вызове функции передано меньше аргументов, чем указано параметров — оставшиеся параметры становятся undefined.

\`\`\`js
function sum(a, b) {
  console.log("a:", a); // значение передано
  console.log("b:", b); // undefined, если не передано
}

sum(5); // передан только один аргумент
\`\`\`

Поэтому часто используют значения по умолчанию, чтобы избежать undefined.

---

### Можно комбинировать обязательные и необязательные аргументы

\`\`\`js
function printUserInfo(name, age = "не указан") {
  console.log("Имя:", name);
  console.log("Возраст:", age);
}

printUserInfo("Олег"); // возраст по умолчанию
printUserInfo("Ольга", 30); // оба значения переданы
\`\`\`

---

### Параметры можно вычислять на месте

\`\`\`js
function getDiscount(price, rate = price > 100 ? 0.1 : 0.05) {
  return price * (1 - rate);
}

console.log(getDiscount(150)); // 10% скидка
console.log(getDiscount(80));  // 5% скидка
\`\`\`

---

### Аргументы undefined вручную

Если ты явно передаёшь undefined, сработает значение по умолчанию:

\`\`\`js
function show(message = "Пусто") {
  console.log(message);
}

show(undefined); // "Пусто"
\`\`\`

А если передаёшь null — значение по умолчанию не применяется:

\`\`\`js
show(null); // null
\`\`\`

---

### Примеры из жизни

**Форма на сайте: имя указано, возраст нет**

\`\`\`js
function register(name, age = "не указан") {
  console.log(name + ", возраст: " + age);
}
\`\`\`

**Цена со скидкой по умолчанию**

\`\`\`js
function finalPrice(price, discount = 0.05) {
  return price * (1 - discount);
}
\`\`\`

---

### Вывод

- Параметры по умолчанию упрощают работу с функциями, особенно когда не все данные обязательны.
- Если аргумент не передан или явно равен undefined — используется значение по умолчанию.
- Если аргумент null — значение по умолчанию не применяется.
  `,
  codeExampleJS: `
function greet(name = "Гость") {
  console.log("Привет, " + name);
}

greet("Анна");
greet();

function showMessage(text = "Нет сообщения", repeat = 1) {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
}

showMessage();
showMessage("Привет!", 3);

function sum(a, b) {
  console.log("a:", a);
  console.log("b:", b);
}

sum(5);

function printUserInfo(name, age = "не указан") {
  console.log("Имя:", name);
  console.log("Возраст:", age);
}

printUserInfo("Олег");
printUserInfo("Ольга", 30);

function getDiscount(price, rate = price > 100 ? 0.1 : 0.05) {
  return price * (1 - rate);
}

console.log(getDiscount(150));
console.log(getDiscount(80));

function show(message = "Пусто") {
  console.log(message);
}

show(undefined);
show(null);

function register(name, age = "не указан") {
  console.log(name + ", возраст: " + age);
}

function finalPrice(price, discount = 0.05) {
  return price * (1 - discount);
}
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters",
    "https://learn.javascript.ru/function-basics#parametry-po-umolchaniyu",
  ],
};
export const js_functions_6 = {
  id: "js_functions_6",
  title: "Область видимости (scope)",
  content: `
## Что такое область видимости

Область видимости — это часть кода, в которой доступна переменная.  
Иными словами: «Где я могу использовать эту переменную?»

---

### Виды областей видимости в JavaScript

- **Глобальная область видимости**
- **Локальная область видимости функции**
- **Блочная область (let / const)**

---

#### 1. Глобальная область видимости

Переменные, объявленные вне функций и блоков, доступны везде в коде.

\`\`\`js
let siteName = "Frontarium";

function showSite() {
  console.log(siteName); // доступна
}

showSite();
console.log(siteName); // доступна
\`\`\`

---

#### 2. Локальная область видимости функции

Переменные, объявленные внутри функции, существуют только внутри этой функции.

\`\`\`js
function sayHi() {
  let message = "Привет!";
  console.log(message); // работает
}

sayHi();
console.log(message); // ошибка: message is not defined
\`\`\`

Вне функции переменная message не существует.

---

#### 3. Блочная область (let и const)

Блочная область — это всё, что внутри фигурных скобок \`{}\`, например в if, for, while и т.д.

\`\`\`js
if (true) {
  let color = "red";
  console.log(color); // "red"
}

console.log(color); // ошибка — переменная вне блока
\`\`\`

let и const уважают блочную область.  
var — нет, но его лучше не использовать.

---

### Вложенные области видимости

Можно создавать вложенные области, и внутренняя область имеет доступ к внешней, но не наоборот.

\`\`\`js
let outer = "внешняя";

function test() {
  let inner = "внутренняя";
  console.log(outer); // доступно
  console.log(inner); // доступно
}

test();

console.log(inner); // ошибка — нет доступа
\`\`\`

---

### Переопределение переменных (shadowing)

Если переменная объявлена и во внешней, и во внутренней области, внутренняя перекрывает внешнюю в своём контексте:

\`\`\`js
let user = "Вася";

function showUser() {
  let user = "Оля";
  console.log(user); // "Оля"
}

showUser();
console.log(user); // "Вася"
\`\`\`

---

### Переменные без let / const — глобальные (и это опасно)

Если случайно не указать let или const, переменная попадёт в глобальную область:

\`\`\`js
function test() {
  mistake = "глобальная переменная!";
}

test();
console.log(mistake); // работает, но это плохая практика
\`\`\`

Так делать нельзя — это ведёт к непредсказуемым ошибкам.

---

### Примеры из жизни

- Глобальная переменная — как папка "Документы", доступная всем.
- Локальная переменная в функции — как заметка у тебя в кармане: никто, кроме тебя, её не видит.
- Блочная область — как временная заметка внутри задачи: работает только пока задача не закрыта.

---

### Вывод

- Переменные существуют только в своей области видимости.
- Вложенные области могут обращаться к внешним, но не наоборот.
- Используй let и const — они уважают блочную область.
- Никогда не создавай переменные без ключевого слова — это создаёт глобальные переменные.
  `,
  codeExampleJS: `
let siteName = "Frontarium";
function showSite() {
  console.log(siteName);
}
showSite();
console.log(siteName);

function sayHi() {
  let message = "Привет!";
  console.log(message);
}
sayHi();
// console.log(message); // ошибка

if (true) {
  let color = "red";
  console.log(color);
}
// console.log(color); // ошибка

let outer = "внешняя";
function test() {
  let inner = "внутренняя";
  console.log(outer);
  console.log(inner);
}
test();
// console.log(inner); // ошибка

let user = "Вася";
function showUser() {
  let user = "Оля";
  console.log(user);
}
showUser();
console.log(user);

function test2() {
  mistake = "глобальная переменная!";
}
test2();
console.log(mistake); // работает, но это плохая практика
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions#%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8",
    "https://learn.javascript.ru/function-basics#oblast-vidimosti",
  ],
};
export const js_functions_7 = {
  id: "js_functions_7",
  title: "Замыкания (Closures)",
  content: `
## Что такое замыкание

Замыкание — это функция, которая запоминает переменные из своей внешней области видимости, даже после того, как эта область завершила выполнение.

Говоря проще:  
Замыкание — это когда функция "помнит" переменные, которые были рядом с ней в момент создания.

---

### Пример

\`\`\`js
function outer() {
  let message = "Привет из замыкания";

  function inner() {
    console.log(message);
  }

  return inner;
}

const func = outer(); // outer уже завершилась
func(); // "Привет из замыкания"
\`\`\`

Функция \`inner\` запомнила переменную \`message\`, потому что она была объявлена рядом.  
Даже после завершения \`outer\`, переменная \`message\` не удаляется, потому что на неё ссылается замыкание.

---

### Ещё проще: пример с функцией, возвращающей другую функцию

\`\`\`js
function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
\`\`\`

\`factor\` — это внешняя переменная, и каждая возвращённая функция её помнит.

---

### Как это работает

- Когда вызывается \`makeMultiplier(2)\`, создаётся локальная переменная \`factor = 2\`.
- Возвращается внутренняя функция, которая замыкает в себе значение \`factor\`.
- Даже после завершения \`makeMultiplier\`, \`factor\` продолжает существовать внутри замыкания.

---

### Где это используется

- Для создания фабрик функций (пример с \`makeMultiplier\`)
- Для создания приватных данных, скрытых от внешнего кода
- В обработчиках событий
- В асинхронных функциях (\`setTimeout\`, \`fetch\` и т.п.)

---

### Примеры из жизни

Замыкание — как когда ты взял с собой бумажку с данными (переменными), и теперь можешь к ним обращаться в любое время, даже когда уже вышел из комнаты (вне той функции, где бумажка появилась).

Как будто внутренняя функция «берёт с собой багаж из прошлого».

---

### Вывод

- Замыкание позволяет функции запоминать своё окружение — переменные, которые были при её создании.
- Это даёт возможность создавать гибкие, динамичные конструкции, сохранять приватные данные и управлять состоянием.
- Замыкания — одна из самых мощных концепций JavaScript, и ты уже умеешь их использовать.
  `,
  codeExampleJS: `
function outer() {
  let message = "Привет из замыкания";
  function inner() {
    console.log(message);
  }
  return inner;
}

const func = outer();
func();

function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
  `,
  resources: [
    "https://learn.javascript.ru/closure",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures",
  ],
};
export const js_functions_8 = {
  id: "js_functions_8",
  title: "Рекурсия",
  content: `
## Что такое рекурсия

Рекурсия — это когда функция вызывает саму себя.

---

### Зачем это нужно?

Рекурсия позволяет разбить большую задачу на более простые, решаемые тем же способом.

---

### Структура рекурсивной функции

Каждая рекурсивная функция обязательно должна иметь:
- **Базовый случай** — когда функция прекращает вызывать себя (условие остановки).
- **Рекурсивный вызов** — функция вызывает сама себя, но с другими (упрощёнными) данными.

---

### Пример: обратный отсчёт

\`\`\`js
function countdown(n) {
  if (n <= 0) {
    console.log("Старт!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);
// 3
// 2
// 1
// Старт!
\`\`\`

- \`n <= 0\` — базовый случай
- \`countdown(n - 1)\` — рекурсивный вызов

---

### Пример: факториал числа

Факториал числа n — это n * (n - 1) * (n - 2) * ... * 1

\`\`\`js
function factorial(n) {
  if (n === 1) return 1; // базовый случай
  return n * factorial(n - 1); // рекурсивный вызов
}

console.log(factorial(5)); // 120
// Расчёт: 5 * 4 * 3 * 2 * 1 = 120
\`\`\`

---

### Принцип работы (что происходит внутри)

\`\`\`js
factorial(3)
// → 3 * factorial(2)
// → 3 * (2 * factorial(1))
// → 3 * (2 * 1)
// → 6
\`\`\`

Каждый вызов функции откладывается, пока не достигнет базового случая.  
Потом результаты начинают возвращаться обратно вверх.

---

### Важно: всегда должен быть базовый случай

Если его нет — функция будет вызывать себя бесконечно, пока программа не упадёт с ошибкой переполнения стека (\`Maximum call stack size exceeded\`).

---

### Когда использовать рекурсию

Когда задача естественно делится на части, например:
- работа с деревьями (DOM-структура, меню, папки)
- обход вложенных структур
- математические последовательности

---

### Когда лучше не использовать

- Когда можно проще решить задачу через цикл (\`for\`, \`while\`)
- Когда количество шагов может быть очень большим (например, \`factorial(10000)\`) — в JS нет хвостовой оптимизации, и рекурсия может "сломать стек"

---

### Сравнение с циклом

\`\`\`js
// цикл
for (let i = 3; i > 0; i--) {
  console.log(i);
}
console.log("Старт!");

// рекурсия
function countdown(n) {
  if (n <= 0) {
    console.log("Старт!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
\`\`\`

Оба варианта делают одно и то же — разница в стиле мышления.

---

### Вывод

- Рекурсия — это мощный инструмент, когда функция вызывает саму себя.
- У каждой рекурсии должен быть базовый случай — чтобы не было бесконечного вызова.
- Рекурсию удобно использовать, когда структура задачи повторяющаяся или вложенная.
  `,
  codeExampleJS: `
function countdown(n) {
  if (n <= 0) {
    console.log("Старт!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

for (let i = 3; i > 0; i--) {
  console.log(i);
}
console.log("Старт!");
  `,
  resources: [
    "https://learn.javascript.ru/recursion",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions#%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F",
  ],
};
export const js_functions_9 = {
  id: "js_functions_9",
  title: "Чистые функции и побочные эффекты",
  content: `
## Что такое чистая функция

**Чистая функция (pure function)** — это функция, которая:
- При одинаковых входных данных всегда возвращает одинаковый результат
- Ничего не изменяет снаружи — не вызывает побочных эффектов

\`\`\`js
function add(a, b) {
  return a + b;
}
\`\`\`
- Всегда даёт одинаковый результат на a и b
- Не меняет внешние переменные
- Не вызывает console.log, alert, fetch, и т.д.

---

## Что такое побочный эффект

**Побочный эффект (side effect)** — это любое действие вне функции, которое меняет внешний мир или зависит от него.

**Примеры побочных эффектов:**
- Вывод в консоль: \`console.log(...)\`
- Запрос на сервер: \`fetch(...)\`
- Изменение глобальной переменной
- Изменение параметров, объектов, массивов
- Чтение/запись в файл или БД
- Вызов \`alert()\`, \`prompt()\`, \`confirm()\`
- Изменение DOM (например, \`document.querySelector(...)\`)

---

### Пример функции с побочным эффектом

\`\`\`js
let counter = 0;

function increment() {
  counter++;
}
\`\`\`

---

**Чистая:**
\`\`\`js
function square(n) {
  return n * n;
}
\`\`\`

**Нечистая:**
\`\`\`js
function squareAndLog(n) {
  console.log(n * n); // побочный эффект
  return n * n;
}
\`\`\`

---

## Как научиться писать чисто

- Не трогай внешнее состояние
- Всегда возвращай результат
- Не используй console.log, если этого не требует задача
- Используй копии массивов и объектов

---

## Когда побочные эффекты нужны

Во многих задачах они неизбежны: показать сообщение, отправить форму, сохранить в localStorage.

Но старайся разделять чистую логику и побочные эффекты.

---

### Принцип: разделение логики и действий

\`\`\`js
// Чистая функция
function calculateDiscount(price, percent) {
  return price - (price * percent / 100);
}

// Побочный эффект отдельно
function showDiscountedPrice(price) {
  const final = calculateDiscount(price, 10);
  console.log("Скидка:", final);
}
\`\`\`

---

## Вывод

- Чистая функция — всегда один результат на один вход, не меняет ничего снаружи.
- Побочные эффекты — любое воздействие на внешний мир.
- Чистый подход делает код предсказуемым, безопасным и легко тестируемым.
  `,
  codeExampleJS: `
function add(a, b) {
  return a + b;
}

let counter = 0;
function increment() {
  counter++;
}

function square(n) {
  return n * n;
}

function squareAndLog(n) {
  console.log(n * n);
  return n * n;
}

function calculateDiscount(price, percent) {
  return price - (price * percent / 100);
}

function showDiscountedPrice(price) {
  const final = calculateDiscount(price, 10);
  console.log("Скидка:", final);
}
  `,
  resources: [
    "https://learn.javascript.ru/function-basics#chistye-funktsii",
    "https://developer.mozilla.org/ru/docs/Glossary/Pure_function",
  ],
};
