export const js_arrays_1 = {
  id: "js_arrays_1",
  title: "Что такое массив и зачем он нужен",
  content: `
## Что такое массив

Массив — это специальная структура данных в JavaScript, предназначенная для хранения упорядоченного набора значений.

\`\`\`js
let fruits = ["яблоко", "банан", "груша"];
\`\`\`

Массив может содержать любое количество элементов и любые типы данных:

\`\`\`js
let mixed = [1, "текст", true, null];
\`\`\`

---

### Как устроен массив

Каждому элементу в массиве соответствует порядковый номер — индекс.  
Индексы всегда начинаются с нуля.

\`\`\`js
let colors = ["красный", "зелёный", "синий"];
console.log(colors[0]); // "красный"
console.log(colors[2]); // "синий"
\`\`\`

---

### Зачем нужен массив

Массивы удобны, когда:

- Нужно хранить список элементов (например, список товаров, имён, оценок)
- Нужно обрабатывать данные одинакового типа (например, все числа или строки)
- Требуется выполнить однотипные действия над многими элементами

---

### Аналогия из жизни

Представь массив как ящик с ячейками.  
В каждую ячейку можно положить что угодно: число, слово, объект.  
А затем — по номеру ячейки достать нужный элемент.

---

### Тип массива

На самом деле массив — это объект, но с особым поведением:

\`\`\`js
typeof [1, 2, 3]; // "object"
\`\`\`

Чтобы проверить, действительно ли переменная — массив, используют:

\`\`\`js
Array.isArray([1, 2, 3]); // true
Array.isArray({ a: 1 });  // false
\`\`\`

---

### Особенности массива в JavaScript

- Может содержать элементы разных типов
- Длина может меняться динамически
- Имеет множество встроенных методов для добавления, удаления, сортировки и преобразования данных

---

### Примеры использования

Список покупок:
\`\`\`js
let groceries = ["хлеб", "молоко", "сыр"];
\`\`\`

Оценки студентов:
\`\`\`js
let marks = [5, 4, 3, 5, 4];
\`\`\`

Результаты опроса (да/нет):
\`\`\`js
let answers = [true, false, true, true];
\`\`\`

---

### Что можно делать с массивом

- Добавлять и удалять элементы
- Перебирать и фильтровать
- Преобразовывать в другие структуры
- Использовать в циклах и логике приложения

---

### Вывод

Массив — это структура, позволяющая хранить и обрабатывать списки данных.  
Он индексируется с нуля и может включать разные типы значений.  
Массив — основа при работе с большими наборами данных.
  `,
  codeExampleJS: `
let fruits = ["яблоко", "банан", "груша"];
console.log(fruits[1]); // "банан"

let mixed = [1, "текст", true, null];
console.log(mixed.length); // 4

let colors = ["красный", "зелёный", "синий"];
console.log(colors[0]); // "красный"
console.log(colors[2]); // "синий"

console.log(Array.isArray(colors)); // true
console.log(Array.isArray({ a: 1 })); // false

let groceries = ["хлеб", "молоко", "сыр"];
let marks = [5, 4, 3, 5, 4];
let answers = [true, false, true, true];
  `,
  resources: [
    "https://learn.javascript.ru/array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array",
  ],
};
export const js_arrays_2 = {
  id: "js_arrays_2",
  title: "Создание массива",
  content: `
## Способы создания массива

В JavaScript массив можно создать несколькими способами. Самые распространённые:

---

### 1. Через квадратные скобки [] — литерал массива

Это самый популярный и читаемый способ:
\`\`\`js
let fruits = ["яблоко", "банан", "груша"];
\`\`\`
Массив создаётся сразу с указанными значениями. Можно оставить массив пустым:
\`\`\`js
let empty = [];
\`\`\`

---

### 2. Через конструктор new Array()

\`\`\`js
let numbers = new Array(1, 2, 3);
\`\`\`
Этот способ работает, но используется реже, так как может вести себя непредсказуемо:
\`\`\`js
let arr = new Array(5); // создаёт массив из 5 пустых ячеек
console.log(arr.length); // 5
console.log(arr); // [ <5 empty items> ]
\`\`\`

Поэтому лучше использовать литерал \`[]\`, особенно для начинающих.

---

### 3. Через метод Array.of()

\`\`\`js
let arr = Array.of(5); // массив с одним элементом 5
console.log(arr); // [5]
\`\`\`

В отличие от \`new Array(5)\`, здесь не создаётся массив из пустых ячеек, а просто массив с числом 5.

---

### Смешанные типы в массиве

Массив может содержать элементы разных типов:
\`\`\`js
let mixed = [1, "привет", true, null];
\`\`\`

---

### Длина массива при создании

Можно создать массив определённой длины:
\`\`\`js
let arr = new Array(10); // массив с 10 пустыми ячейками
\`\`\`

Но в таких массивах нельзя перебрать элементы, пока они явно не заполнены:
\`\`\`js
arr[0] = "начало";
console.log(arr); // [ 'начало', <9 empty items> ]
\`\`\`

---

### Создание массивов программно

Иногда нужно создать массив на основе условий или вычислений:
\`\`\`js
let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(i * 2); // [0, 2, 4, 6, 8]
}
\`\`\`

---

### Проверка на массив

\`\`\`js
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true
\`\`\`

---

### Антипаттерны (чего избегать)

- Не используйте \`new Array(n)\` без надобности — создаётся массив с пустыми ячейками, которые сложно обрабатывать.
- Не используйте \`typeof\` для проверки, массив это или нет:
\`\`\`js
typeof [1, 2, 3]; // "object" — не поможет точно определить массив
\`\`\`

---

### Примеры из жизни

- Список книг в библиотеке
- Очередь заказов в кафе
- Расписание звонков
- Таблица лидеров в игре

Все эти данные удобно хранить в массиве.

---

### Вывод

- Создание массива чаще всего выполняется через []
- В массив можно поместить любые типы данных
- Использование new Array(n) требует осторожности
- Проверка Array.isArray() — безопасный способ удостовериться, что это массив
  `,
  codeExampleJS: `
let fruits = ["яблоко", "банан", "груша"];
let empty = [];

let numbers = new Array(1, 2, 3);
let arr = new Array(5); // [ <5 empty items> ]
let arr2 = Array.of(5); // [5]

let mixed = [1, "привет", true, null];

arr[0] = "начало";
console.log(arr); // [ 'начало', <4 empty items> ]

let nums = [];
for (let i = 0; i < 5; i++) {
  nums.push(i * 2);
}
console.log(nums); // [0, 2, 4, 6, 8]

console.log(Array.isArray(nums)); // true
typeof [1, 2, 3]; // "object"
  `,
  resources: [
    "https://learn.javascript.ru/array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/of",
  ],
};
export const js_arrays_3 = {
  id: "js_arrays_3",
  title: "Доступ и изменение элементов массива",
  content: `
## Индексация элементов

Каждому элементу массива соответствует индекс — порядковый номер, начиная с нуля.

\`\`\`js
let fruits = ["яблоко", "банан", "груша"];
console.log(fruits[0]); // "яблоко"
console.log(fruits[1]); // "банан"
console.log(fruits[2]); // "груша"
\`\`\`

Если обратиться к несуществующему индексу:
\`\`\`js
console.log(fruits[10]); // undefined
\`\`\`

---

### Изменение элементов

Можно заменить значение по индексу:
\`\`\`js
fruits[1] = "апельсин";
console.log(fruits); // ["яблоко", "апельсин", "груша"]
\`\`\`

---

### Добавление элементов по индексу

Можно создать новый элемент на конкретной позиции:
\`\`\`js
fruits[3] = "киви";
console.log(fruits); // ["яблоко", "апельсин", "груша", "киви"]
\`\`\`

Если пропустить индексы, внутри массива будут пустые ячейки:
\`\`\`js
fruits[6] = "манго";
console.log(fruits); // ["яблоко", "апельсин", "груша", "киви", <2 пустые>, "манго"]
\`\`\`

---

### Чтение длины массива

Количество элементов в массиве — это свойство \`length\`:
\`\`\`js
console.log(fruits.length); // 7 (включая пустые ячейки)
\`\`\`

---

### Последний элемент массива

Чтобы получить последний элемент:
\`\`\`js
let last = fruits[fruits.length - 1];
console.log(last); // "манго"
\`\`\`

---

### Использование метода at()

Начиная с ES2022, можно использовать \`at()\`.

**Метод at() — что это такое**  
\`at()\` — это метод массивов, который позволяет получить элемент по индексу.

Он поддерживает отрицательные индексы, начиная отсчёт с конца массива.

**Сравнение с обычной индексацией:**
\`\`\`js
let colors = ["красный", "зелёный", "синий"];

console.log(colors[0]);              // "красный" — первый элемент
console.log(colors[colors.length-1]); // "синий" — последний элемент

console.log(colors.at(0));  // "красный"
console.log(colors.at(-1)); // "синий"
\`\`\`

**Почему это удобно**

Раньше для получения последнего элемента нужно было писать: \`arr[arr.length - 1]\`  
Теперь — просто: \`arr.at(-1)\`

**Что будет, если индекс выходит за границы**
\`\`\`js
let arr = [10, 20, 30];
console.log(arr.at(5));  // undefined
console.log(arr.at(-4)); // undefined
\`\`\`
\`at()\` не вызывает ошибок при выходе за пределы — просто возвращает \`undefined\`, как и обычный доступ по индексу.

---

### Примеры из жизни

- В списке покупок \`items[0]\` — первый товар
- В расписании поездов \`trains[trains.length - 1]\` — последний поезд
- В массиве оценок \`grades[2] = 5\` — исправить оценку

---

### Вывод

- Массивы индексируются с нуля
- Можно читать и изменять элементы по индексу
- Добавление за пределами текущей длины приводит к пустым ячейкам
- \`length\` и \`at()\` — удобные инструменты для работы с концом массива
  `,
  codeExampleJS: `
let fruits = ["яблоко", "банан", "груша"];
console.log(fruits[0]); // "яблоко"
console.log(fruits[10]); // undefined

fruits[1] = "апельсин";
fruits[3] = "киви";
fruits[6] = "манго";
console.log(fruits); // ["яблоко", "апельсин", "груша", "киви", <2 пустые>, "манго"]
console.log(fruits.length); // 7

let last = fruits[fruits.length - 1];
console.log(last); // "манго"

let colors = ["красный", "зелёный", "синий"];
console.log(colors.at(0));  // "красный"
console.log(colors.at(-1)); // "синий"
console.log(colors.at(5));  // undefined
  `,
  resources: [
    "https://learn.javascript.ru/array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at",
  ],
};
export const js_arrays_4 = {
  id: "js_arrays_4",
  title: "Добавление и удаление элементов массива",
  content: `
## Способы добавления элементов

###  Добавление в конец массива

Используется метод \`push()\`:
\`\`\`js
let colors = ["красный", "зелёный"];
colors.push("синий");
console.log(colors); // ["красный", "зелёный", "синий"]
\`\`\`

---

###  Добавление в начало массива

Используется метод \`unshift()\`:
\`\`\`js
colors.unshift("жёлтый");
console.log(colors); // ["жёлтый", "красный", "зелёный", "синий"]
\`\`\`

---

###  Добавление по индексу

Можно просто указать индекс:
\`\`\`js
colors[2] = "оранжевый";
\`\`\`
Если индекс больше текущей длины, между значениями появятся пустые ячейки:
\`\`\`js
colors[10] = "фиолетовый";
\`\`\`

---

## Способы удаления элементов

###  Удаление последнего элемента

Метод \`pop()\`:
\`\`\`js
let last = colors.pop();
console.log(last);    // "фиолетовый"
console.log(colors);  // ["жёлтый", "красный", "оранжевый", "зелёный", "синий"]
\`\`\`

---

###  Удаление первого элемента

Метод \`shift()\`:
\`\`\`js
let first = colors.shift();
console.log(first);  // "жёлтый"
console.log(colors); // ["красный", "оранжевый", "зелёный", "синий"]
\`\`\`

---

###  Удаление по индексу

Можно присвоить \`undefined\`, но элемент останется:
\`\`\`js
colors[1] = undefined;
console.log(colors); // ["красный", undefined, "зелёный", "синий"]
\`\`\`
**Лучше использовать метод \`splice()\` (о нём — в следующей теме).**

---

## Пример из жизни

- Очередь: \`shift()\` — обслужили первого, \`push()\` — добавили нового
- Рюкзак: \`pop()\` — достали вещь, \`push()\` — положили новую

---

## Вывод

- Для добавления и удаления в начале и в конце массива есть специальные методы
- Прямая работа с индексами может создать пустые ячейки
- Для удаления по позиции лучше использовать \`splice()\`, который рассмотрим далее
  `,
  codeExampleJS: `
let colors = ["красный", "зелёный"];
colors.push("синий");        // ["красный", "зелёный", "синий"]
colors.unshift("жёлтый");    // ["жёлтый", "красный", "зелёный", "синий"]
colors[2] = "оранжевый";     // ["жёлтый", "красный", "оранжевый", "синий"]
colors[10] = "фиолетовый";   // <промежутки - пустые элементы>

let last = colors.pop();     // "фиолетовый", массив укорачивается
let first = colors.shift();  // "жёлтый", массив укорачивается

colors[1] = undefined;       // элемент есть, но он undefined
  `,
  resources: [
    "https://learn.javascript.ru/array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
  ],
};
export const js_arrays_5 = {
  id: "js_arrays_5",
  title: "Базовые операции. Методы: push, pop, shift, unshift, splice",
  content: `
## Базовые методы для изменения массива

### Метод \`push()\`

Добавляет один или несколько элементов в конец массива.
\`\`\`js
let nums = [1, 2];
nums.push(3);
console.log(nums); // [1, 2, 3]
\`\`\`
Можно добавить несколько элементов:
\`\`\`js
nums.push(4, 5); // [1, 2, 3, 4, 5]
\`\`\`
Возвращает новую длину массива:
\`\`\`js
let newLength = nums.push(6); // 6
\`\`\`

---

### Метод \`pop()\`

Удаляет последний элемент массива и возвращает его:
\`\`\`js
let last = nums.pop();
console.log(last); // 6
console.log(nums); // [1, 2, 3, 4, 5]
\`\`\`
Если массив пустой, \`pop()\` вернёт \`undefined\`.

---

### Метод \`unshift()\`

Добавляет элементы в начало массива:
\`\`\`js
nums.unshift(0);
console.log(nums); // [0, 1, 2, 3, 4, 5]
\`\`\`
Также может принимать несколько аргументов:
\`\`\`js
nums.unshift(-2, -1); // [-2, -1, 0, 1, 2, 3, 4, 5]
\`\`\`

---

### Метод \`shift()\`

Удаляет первый элемент и возвращает его:
\`\`\`js
let first = nums.shift();
console.log(first); // -2
console.log(nums);  // [-1, 0, 1, 2, 3, 4, 5]
\`\`\`

---

### Метод \`splice()\`

\`splice()\` — универсальный инструмент для вставки, удаления и замены элементов.

**Синтаксис:**  
\`array.splice(start, deleteCount, item1, item2, ...)\`
- \`start\` — индекс, с которого начать
- \`deleteCount\` — сколько элементов удалить
- \`item1, item2, ...\` — элементы, которые нужно вставить

**Удаление элементов:**
\`\`\`js
let items = ["a", "b", "c", "d"];
items.splice(1, 2); // удалить 2 элемента начиная с индекса 1
console.log(items); // ["a", "d"]
\`\`\`

**Добавление элементов:**
\`\`\`js
items.splice(1, 0, "x", "y");
console.log(items); // ["a", "x", "y", "d"]
\`\`\`

**Замена элементов:**
\`\`\`js
items.splice(1, 2, "new");
console.log(items); // ["a", "new", "d"]
\`\`\`

---

## Примеры из жизни

- Рюкзак: \`push()\` — положили предмет, \`pop()\` — достали последний
- Очередь: \`unshift()\` — встал в начало, \`shift()\` — ушёл первым
- Редактор списка: \`splice()\` — вырезать, вставить или заменить элемент

---

## Вывод

- Методы \`push\`, \`pop\`, \`shift\`, \`unshift\` — простые и удобные инструменты для работы с концами массива
- Метод \`splice\` — мощный способ изменять массив в любой его части
- Все эти методы изменяют оригинальный массив
`,
  codeExampleJS: `
let nums = [1, 2];
nums.push(3);         // [1, 2, 3]
nums.push(4, 5);      // [1, 2, 3, 4, 5]
let last = nums.pop(); // last = 5, nums = [1, 2, 3, 4]

nums.unshift(0);      // [0, 1, 2, 3, 4]
nums.unshift(-2, -1); // [-2, -1, 0, 1, 2, 3, 4]
let first = nums.shift(); // first = -2, nums = [-1, 0, 1, 2, 3, 4]

let items = ["a", "b", "c", "d"];
items.splice(1, 2);          // items = ["a", "d"]
items.splice(1, 0, "x", "y");// items = ["a", "x", "y", "d"]
items.splice(1, 2, "new");   // items = ["a", "new", "d"]
  `,
  resources: [
    "https://learn.javascript.ru/array-methods",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
  ],
};
export const js_arrays_6 = {
  id: "js_arrays_6",
  title: "Размер массива и свойства: length, at()",
  content: `
## Свойство \`length\`

Каждый массив в JavaScript имеет свойство \`.length\`, которое показывает количество элементов в массиве.
\`\`\`js
let numbers = [10, 20, 30];
console.log(numbers.length); // 3
\`\`\`

### Особенности свойства \`length\`
- \`length\` — не индекс последнего элемента, а количество элементов.
- Оно всегда на 1 больше, чем последний индекс (если массив заполнен без пропусков).
- Это свойство можно изменить вручную:
\`\`\`js
numbers.length = 2;
console.log(numbers); // [10, 20] — третий элемент удалён

numbers.length = 5;
console.log(numbers); // [10, 20, <3 empty items>]
\`\`\`
- Так можно усекать или расширять массив.

- \`length\` учитывает и пустые ячейки:
\`\`\`js
let arr = [];
arr[5] = "hello";
console.log(arr.length); // 6
\`\`\`

---

## Метод \`at()\`

Метод \`at()\` позволяет удобно обращаться к элементам по индексу, включая отрицательные индексы:
\`\`\`js
let letters = ["a", "b", "c", "d"];

console.log(letters.at(0));  // "a" — первый элемент
console.log(letters.at(-1)); // "d" — последний элемент
console.log(letters.at(-2)); // "c"
\`\`\`
Это особенно удобно, когда нужно быстро получить элемент с конца массива.

---

### Отличие \`arr.at(-1)\` от \`arr[arr.length - 1]\`
- Обе конструкции возвращают последний элемент, но \`at()\`:
  - Работает с отрицательными индексами
  - Читается проще

Можно использовать \`at()\` и для строк:
\`\`\`js
let str = "JavaScript";
console.log(str.at(-1)); // "t"
\`\`\`

---

## Примеры из жизни

- В массиве сообщений \`messages.length\` — количество сообщений.
- Чтобы получить последнее сообщение: \`messages.at(-1)\`
- Чтобы удалить последние 5 элементов: \`arr.length -= 5\`

---

## Вывод

- \`length\` показывает количество элементов и может управлять размером массива
- \`at()\` — современный и читаемый способ получения элементов, особенно с конца
- Работа с \`length\` позволяет обрезать или добавлять пустые элементы
`,
  codeExampleJS: `
let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5

arr.length = 3;
console.log(arr); // [1, 2, 3]

arr.length = 6;
console.log(arr); // [1, 2, 3, <3 empty items>]

let letters = ["a", "b", "c", "d"];
console.log(letters.at(-1)); // "d"
console.log(letters.at(0));  // "a"
console.log(letters.at(-2)); // "c"

let str = "JavaScript";
console.log(str.at(-1)); // "t"
  `,
  resources: [
    "https://learn.javascript.ru/array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at",
  ],
};
export const js_arrays_7 = {
  id: "js_arrays_7",
  title: "Перебор массива: for, for...of, forEach",
  content: `
## Перебор массива: for, for...of, forEach

Когда мы работаем с массивами, часто нужно выполнить одно и то же действие с каждым элементом — например, вывести на экран, умножить на 2, проверить условие и т.д.

Это называется перебор массива. В JavaScript есть несколько способов перебора:

---

###  Классический \`for\`

Полный контроль: можно управлять индексом, делать шаги, выходить досрочно.

\`\`\`js
let numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
\`\`\`

Можно использовать индекс для других целей:
\`\`\`js
for (let i = 0; i < numbers.length; i++) {
  console.log(\`Элемент №\${i + 1} равен \${numbers[i]}\`);
}
\`\`\`

---

###  Цикл \`for...of\`

Современный удобный способ пройтись по значениям массива.

\`\`\`js
for (let value of numbers) {
  console.log(value);
}
\`\`\`

Такой перебор не даёт доступа к индексам (только значения).

---

###  Метод \`forEach()\`

Это метод массива, который принимает функцию обратного вызова (callback), выполняемую для каждого элемента.

\`\`\`js
numbers.forEach(function (value, index) {
  console.log(\`Индекс: \${index}, Значение: \${value}\`);
});
\`\`\`

Сокращённый вариант с arrow-функцией:
\`\`\`js
numbers.forEach((value, index) => {
  console.log(value);
});
\`\`\`

#### Особенности:
- Нельзя выйти из цикла с \`break\`
- Удобно использовать для простых действий

---

| Способ     | Когда использовать                                    |
| ---------- | ----------------------------------------------------- |
| for      | Когда нужен индекс или гибкий контроль                |
| for...of | Когда важны только значения                           |
| forEach  | Когда удобно использовать колбэк, без выхода из цикла |

---

### Пример из жизни

- Список покупок: пройтись по всем продуктам
- Список оценок: посчитать среднюю
- Список сообщений: вывести все, начиная с первого

---

### Вывод

- \`for\` даёт полный контроль над перебором
- \`for...of\` — простой способ пройтись по значениям
- \`forEach()\` — метод массива, удобный для однострочных действий

Перебор — основа работы с массивами, важно выбрать подходящий способ
  `,
  codeExampleJS: `
let numbers = [1, 2, 3, 4];

// for
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of
for (let value of numbers) {
  console.log(value);
}

// forEach
numbers.forEach((value, index) => {
  console.log(\`Индекс: \${index}, Значение: \${value}\`);
});
  `,
  resources: [
    "https://learn.javascript.ru/array-iteration",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of",
  ],
};
export const js_arrays_8 = {
  id: "js_arrays_8",
  title: "Поиск элементов: indexOf, lastIndexOf, includes, find, findIndex",
  content: `
## Поиск элементов: indexOf, lastIndexOf, includes, find, findIndex

Когда мы работаем с массивом, часто возникает задача найти элемент — по значению или по условию.  
В JavaScript есть несколько удобных методов для поиска.

---

###  \`indexOf()\`
Ищет первое вхождение элемента в массиве и возвращает его индекс. Если не найден — возвращает -1.

\`\`\`js
let colors = ["красный", "синий", "зелёный", "синий"];

console.log(colors.indexOf("синий")); // 1
console.log(colors.indexOf("чёрный")); // -1
\`\`\`

---

###  \`lastIndexOf()\`
Похож на \`indexOf\`, но ищет с конца массива.

\`\`\`js
console.log(colors.lastIndexOf("синий")); // 3
\`\`\`

---

###  \`includes()\`
Проверяет, есть ли элемент в массиве. Возвращает true или false.

\`\`\`js
let nums = [1, 2, 3];

console.log(nums.includes(2)); // true
console.log(nums.includes(5)); // false

// Можно указать, с какого индекса начинать поиск
console.log(nums.includes(1, 1)); // false (ищем с позиции 1)
\`\`\`

---

###  \`find()\`
Ищет первый элемент, удовлетворяющий условию, и возвращает его. Если не найден — возвращает undefined.

\`\`\`js
let users = [
  { name: "Анна", age: 22 },
  { name: "Олег", age: 30 },
  { name: "Ирина", age: 25 }
];

let result = users.find(user => user.age > 24);
console.log(result); // { name: "Олег", age: 30 }
\`\`\`

---

###  \`findIndex()\`
Похож на \`find()\`, но возвращает индекс найденного элемента.

\`\`\`js
let index = users.findIndex(user => user.age > 24);
console.log(index); // 1
\`\`\`

---

### Что выбрать?

| Метод         | Что делает                          |
| ------------- | ----------------------------------- |
| indexOf     | Ищет по значению, с начала          |
| lastIndexOf | Ищет по значению, с конца           |
| includes    | Проверяет наличие значения          |
| find        | Ищет по условию, возвращает элемент |
| findIndex   | Ищет по условию, возвращает индекс  |

---

### Пример из жизни

- В поиске сообщений — \`includes("ошибка")\`
- В списке товаров — \`find(product => product.price < 100)\`
- В журнале посещений — \`findIndex(log => log.user === "admin")\`

---

### Вывод

- Методы \`indexOf\`, \`lastIndexOf\`, \`includes\` работают с конкретными значениями
- \`find\` и \`findIndex\` позволяют искать по более гибким условиям (например, внутри объектов)
- Эти инструменты упрощают повседневные задачи поиска и фильтрации
  `,
  codeExampleJS: `
let colors = ["красный", "синий", "зелёный", "синий"];
console.log(colors.indexOf("синий"));      // 1
console.log(colors.lastIndexOf("синий"));  // 3
console.log(colors.includes("зелёный"));   // true

let users = [
  { name: "Анна", age: 22 },
  { name: "Олег", age: 30 },
  { name: "Ирина", age: 25 }
];

let user = users.find(u => u.age > 24);
console.log(user); // { name: "Олег", age: 30 }

let idx = users.findIndex(u => u.name === "Ирина");
console.log(idx); // 2
  `,
  resources: [
    "https://learn.javascript.ru/array-methods#poisk-v-massive",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
  ],
};
export const js_arrays_9 = {
  id: "js_arrays_9",
  title: "Преобразование значений: map, filter",
  content: `
## Преобразование значений: \`map\`, \`filter\`

Массив — это не только способ хранить значения, но и инструмент для преобразования данных.  
В JavaScript есть два мощных метода для таких целей: \`map()\` и \`filter()\`.

---

### Метод \`map()\`

\`map()\` — создаёт новый массив, в котором каждый элемент — это результат выполнения функции над соответствующим элементом исходного массива.

\`\`\`js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
\`\`\`

Исходный массив не меняется.

**Пример: Преобразовать список имён**
\`\`\`js
let names = ["Анна", "Игорь", "Оля"];
let upper = names.map(name => name.toUpperCase());
console.log(upper); // ["АННА", "ИГОРЬ", "ОЛЯ"]
\`\`\`

**Пример: Добавить текст к числу**
\`\`\`js
let scores = [10, 20, 30];
let messages = scores.map(score => \`Вы набрали \${score} баллов\`);
console.log(messages);
// ["Вы набрали 10 баллов", "Вы набрали 20 баллов", "Вы набрали 30 баллов"]
\`\`\`

---

### Метод \`filter()\`

\`filter()\` — создаёт новый массив, содержащий только те элементы, для которых функция вернула true.

\`\`\`js
let numbers = [5, 12, 8, 130, 44];
let big = numbers.filter(num => num > 10);
console.log(big); // [12, 130, 44]
\`\`\`

**Пример: Отфильтровать строки**
\`\`\`js
let words = ["яблоко", "киви", "банан", "груша"];
let short = words.filter(word => word.length <= 4);
console.log(short); // ["киви"]
\`\`\`

**Пример: Выбрать взрослых пользователей**
\`\`\`js
let users = [
  { name: "Аня", age: 17 },
  { name: "Вася", age: 22 },
  { name: "Катя", age: 15 }
];
let adults = users.filter(user => user.age >= 18);
console.log(adults); // [{ name: "Вася", age: 22 }]
\`\`\`

---

### Сравнение

| Метод    | Что делает                          |
| -------- | ----------------------------------- |
| map      | Преобразует каждый элемент массива  |
| filter   | Отбирает только подходящие элементы |

---

### Примеры из жизни

- \`map\`: преобразовать список цен в рубли, округлить значения
- \`filter\`: отобрать заказы дороже 1000 рублей, выбрать доступные товары

---

### Вывод

- \`map()\` — для преобразования каждого элемента массива
- \`filter()\` — для отбора элементов по условию
- Оба метода создают новый массив и не изменяют оригинал
- Используются очень часто в реальных задачах
  `,
  codeExampleJS: `
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

let ages = [12, 18, 21, 16, 30];
let adults = ages.filter(age => age >= 18); // [18, 21, 30]
  `,
  resources: [
    "https://learn.javascript.ru/array-iteration#map",
    "https://learn.javascript.ru/array-iteration#filter",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
  ],
};
export const js_arrays_10 = {
  id: "js_arrays_10",
  title: "Агрегация значений: reduce, reduceRight",
  content: `
## Агрегация значений: \`reduce\`, \`reduceRight\`

Иногда нужно преобразовать весь массив в одно итоговое значение: посчитать сумму, собрать строку, получить объект.  
Для этого в JavaScript есть методы \`reduce()\` и \`reduceRight()\`.

---

### Метод \`reduce()\`

\`reduce()\` — сворачивает (агрегирует) массив в одно значение, проходя по всем элементам слева направо.

**Сигнатура:**
\`\`\`js
arr.reduce((accumulator, currentValue, index, array) => {
  // логика
}, initialValue);
\`\`\`
- \`accumulator\` — накопленное значение (на каждом шаге)
- \`currentValue\` — текущий элемент массива
- \`initialValue\` — начальное значение аккумулятора (если не указано — будет взят первый элемент)

---

**Пример: сумма всех чисел**
\`\`\`js
let numbers = [10, 20, 30];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 60
\`\`\`

**Пример: найти максимальное число**
\`\`\`js
let max = [5, 12, 8, 44].reduce((acc, num) => num > acc ? num : acc, -Infinity);
console.log(max); // 44
\`\`\`

**Пример: собрать строку**
\`\`\`js
let letters = ["H", "e", "l", "l", "o"];
let word = letters.reduce((acc, letter) => acc + letter, "");
console.log(word); // "Hello"
\`\`\`

**Пример: посчитать количество каждого слова**
\`\`\`js
let fruits = ["яблоко", "груша", "яблоко", "слива"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { яблоко: 2, груша: 1, слива: 1 }
\`\`\`

---

### Метод \`reduceRight()\`

\`reduceRight()\` работает так же, но проходит массив с конца.
\`\`\`js
let letters = ["a", "b", "c"];
let reversed = letters.reduceRight((acc, char) => acc + char, "");
console.log(reversed); // "cba"
\`\`\`

---

### Особенности

- Если \`initialValue\` не указан, \`accumulator\` будет первым элементом, а цикл начнётся со второго.
- Лучше всегда указывать начальное значение для предсказуемости.

---

### Примеры из жизни

- Подсчитать общую сумму заказов
- Объединить строки в текст
- Построить объект с результатами теста
- Составить список покупок в одну строку

---

### Вывод

- \`reduce()\` — универсальный инструмент для получения одного значения из массива
- Позволяет лаконично и гибко собирать суммы, строки, объекты
- \`reduceRight()\` — полезен для обработки с конца
  `,
  codeExampleJS: `
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0); // 10

let arr = ['a', 'b', 'c'];
let right = arr.reduceRight((acc, curr) => acc + curr, ""); // "cba"
  `,
  resources: [
    "https://learn.javascript.ru/array-iteration#reduce",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight",
  ],
};
export const js_arrays_11 = {
  id: "js_arrays_11",
  title: "Сортировка и разворот: sort, reverse",
  content: `
## Сортировка и разворот: \`sort\`, \`reverse\`

###  Метод \`sort()\`

\`sort()\` — сортирует элементы массива **на месте**, изменяя исходный массив.

По умолчанию сортирует как строки по юникод-значениям:

\`\`\`js
let fruits = ["яблоко", "груша", "слива"];
fruits.sort();
console.log(fruits); // ["груша", "слива", "яблоко"]
\`\`\`

#### Особенности при работе с числами

\`\`\`js
let numbers = [8, 22, 3, 14];
numbers.sort();
console.log(numbers); // [14, 22, 3, 8]
\`\`\`
Почему не по возрастанию? Числа сравниваются как строки ("14" > "3"), поэтому порядок неправильный для чисел.

#### Как исправить: функция сравнения

Чтобы корректно сортировать числа, нужно передать функцию сравнения:

\`\`\`js
numbers.sort((a, b) => a - b); // по возрастанию
console.log(numbers); // [3, 8, 14, 22]

numbers.sort((a, b) => b - a); // по убыванию
console.log(numbers); // [22, 14, 8, 3]
\`\`\`

#### Сортировка объектов

\`\`\`js
let users = [
  { name: "Анна", age: 30 },
  { name: "Игорь", age: 22 },
  { name: "Оля", age: 25 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);
// [{name: "Игорь", age: 22}, {name: "Оля", age: 25}, {name: "Анна", age: 30}]
\`\`\`

---

###  Метод \`reverse()\`

\`reverse()\` — переворачивает массив в обратном порядке. Меняет исходный массив.

\`\`\`js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
\`\`\`

#### Совместное использование \`sort\` и \`reverse\`

\`\`\`js
let letters = ["a", "b", "c"];
letters.sort().reverse();
console.log(letters); // ["c", "b", "a"]
\`\`\`

---

### Примеры из жизни

- Сортировка товаров по цене
- Упорядочивание пользователей по дате регистрации
- Инвертирование истории событий (новые сверху)

---

### Вывод

- \`sort()\` сортирует массив по умолчанию как строки.
- Для корректной сортировки чисел или объектов передавай функцию сравнения.
- \`reverse()\` просто меняет порядок элементов на обратный.
- Оба метода **изменяют исходный массив**!
  `,
  codeExampleJS: `
let nums = [2, 10, 1];
nums.sort(); // [1, 10, 2] (неправильно для чисел)
nums.sort((a, b) => a - b); // [1, 2, 10] (правильно)

nums.reverse(); // [10, 2, 1]
  `,
  resources: [
    "https://learn.javascript.ru/array-methods#sort",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
  ],
};
export const js_arrays_12 = {
  id: "js_arrays_12",
  title: "Копирование и извлечение: slice, concat, ...",
  content: `
## Копирование и извлечение: \`slice\`, \`concat\`, \`...\`

Иногда нужно создать новый массив на основе существующего: скопировать часть, объединить, добавить элемент без изменения оригинала.

---

###  \`slice()\`
- \`slice(start, end)\` — возвращает новый массив с элементами от \`start\` до \`end\` (не включая \`end\`).
- Оригинальный массив **не меняется**.

\`\`\`js
let fruits = ["яблоко", "банан", "груша", "слива"];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ["банан", "груша"]
console.log(fruits); // ["яблоко", "банан", "груша", "слива"]

let lastTwo = fruits.slice(-2);
console.log(lastTwo); // ["груша", "слива"]
\`\`\`

---

###  \`concat()\`
- Объединяет массив с другими значениями или массивами, возвращая новый массив.

\`\`\`js
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4]

let extended = arr1.concat(5, 6);
console.log(extended); // [1, 2, 5, 6]
\`\`\`

---

###  Spread-оператор (\`...\`)
- "Распаковывает" элементы массива.
- Удобен для копирования, объединения, вставки.

\`\`\`js
let copy = [...fruits];            // Копия массива
let combined = [...arr1, ...arr2]; // Объединение
let result = [0, ...arr1, 99];     // Вставка новых элементов
console.log(result); // [0, 1, 2, 99]
\`\`\`

---

### Когда использовать

| Задача                   | Метод                        |
| ------------------------ | --------------------------- |
| Вырезать часть           | \`slice()\`                 |
| Объединить               | \`concat()\` или \`...\`    |
| Сделать копию            | \`slice()\`, \`...\`        |
| Вставить элементы        | \`...\`                     |

---

### Примеры из жизни

- Получить первые 5 товаров: \`products.slice(0, 5)\`
- Скопировать массив без изменений: \`let copy = [...arr]\`
- Объединить избранное и корзину: \`[...favorites, ...cart]\`
- Добавить элемент: \`[...arr, newItem]\`

---

### Вывод

- \`slice()\` — извлекает часть массива, не меняя оригинал
- \`concat()\` — объединяет массивы или значения
- \`...\` — современный, удобный способ для копирования, объединения и вставки
- Все эти способы **возвращают новый массив**
  `,
  codeExampleJS: `
let a = [1, 2, 3];
let b = a.slice(1);       // [2, 3]
let c = a.concat([4, 5]); // [1, 2, 3, 4, 5]
let d = [...a, 100];      // [1, 2, 3, 100]
  `,
  resources: [
    "https://learn.javascript.ru/array-methods#slice",
    "https://learn.javascript.ru/array-methods#concat",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
  ],
};
export const js_arrays_13 = {
  id: "js_arrays_13",
  title: "Вложенные массивы: доступ, перебор, двумерные структуры",
  content: `
## Вложенные массивы (многомерные)

Иногда в массиве могут храниться другие массивы — такие структуры называют вложенными (или двумерными/многомерными) массивами.

---

### Пример двумерного массива

\`\`\`js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
\`\`\`

Это можно представить как таблицу или игровое поле 3x3.

---

### Доступ к элементам

Чтобы получить значение, нужно указать два индекса: сначала строку, потом столбец.

\`\`\`js
console.log(matrix[0][1]); // 2  (первая строка, второй столбец)
console.log(matrix[2][0]); // 7  (третья строка, первый столбец)
\`\`\`

---

### Изменение значений

\`\`\`js
matrix[1][1] = 999;
console.log(matrix);
// [
//   [1, 2, 3],
//   [4, 999, 6],
//   [7, 8, 9]
// ]
\`\`\`

---

### Перебор вложенных массивов

С помощью вложенных циклов:

\`\`\`js
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(\`Элемент [\${i}][\${j}] = \${matrix[i][j]}\`);
  }
}
\`\`\`

Или с помощью \`for...of\`:

\`\`\`js
for (let row of matrix) {
  for (let value of row) {
    console.log(value);
  }
}
\`\`\`

---

### Где применяется

- Таблицы (Excel, Google Sheets)
- Шахматные доски ([8][8])
- Игровые поля (крестики-нолики, судоку)
- Места в кинотеатре: \`seats[row][seat]\`

---

### Глубже 2 уровней

Можно создавать ещё более сложные структуры:

\`\`\`js
let data = [
  [ [1], [2] ],
  [ [3], [4] ]
];

console.log(data[1][0][0]); // 3
\`\`\`

---

### Вывод

- Вложенные массивы — удобны для хранения таблиц, сеток и других "плоских" структур.
- Для доступа и перебора используются двойные (или более) индексы и вложенные циклы.
- Избегай слишком большой вложенности — это затрудняет работу и понимание кода.
  `,
  codeExampleJS: `
let matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][0]); // 3

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// Альтернативно
for (let row of matrix) {
  for (let value of row) {
    console.log(value);
  }
}
  `,
  resources: [
    "https://learn.javascript.ru/array",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array",
  ],
};
export const js_arrays_14 = {
  id: "js_arrays_14",
  title: "Сглаживание массивов: flat()",
  content: `
## Что такое сглаживание массива

Сглаживание массива — это процесс преобразования вложенного массива в "плоский", когда все элементы становятся на один уровень.

---

### Метод flat()

Метод \`flat()\` возвращает новый массив, где все элементы вложенных массивов "развёрнуты" на указанную глубину (по умолчанию — 1 уровень).

\`\`\`js
let arr = [1, [2, 3], [4, 5]];

let flatArr = arr.flat();
console.log(flatArr); // [1, 2, 3, 4, 5]
\`\`\`

---

### Параметр depth

Можно передать глубину сглаживания:

\`\`\`js
let nested = [1, [2, [3, [4]]]];

console.log(nested.flat());    // [1, 2, [3, [4]]]
console.log(nested.flat(2));   // [1, 2, 3, [4]]
console.log(nested.flat(3));   // [1, 2, 3, 4]
\`\`\`

---

### flat() удаляет пустые ячейки

\`\`\`js
let messy = [1, , 2, [3, , 4]];

console.log(messy.flat()); // [1, 2, 3, 4]
\`\`\`

---

### Комбинация map() + flat()

Часто используется для сбора данных из вложенных структур:

\`\`\`js
let users = [
  { name: "Анна", hobbies: ["чтение", "бег"] },
  { name: "Игорь", hobbies: ["шахматы"] }
];

let allHobbies = users.map(user => user.hobbies).flat();
console.log(allHobbies); // ["чтение", "бег", "шахматы"]
\`\`\`

---

### Метод flatMap()

\`flatMap()\` — это map() + flat(1) за одну операцию.

\`\`\`js
let arr = [1, 2, 3];

let result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
\`\`\`

---

### Применение

- Получение всех товаров из заказов (если каждый заказ — массив товаров)
- Объединение сообщений из переписок
- Выпрямление вложенных структур

---

### Вывод

- flat() помогает сделать массив "плоским", разворачивая вложенности
- Можно указывать глубину сглаживания
- Удаляет пустые элементы
- Удобно при работе с вложенными и неравномерными массивами
  `,
  codeExampleJS: `
let arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // [1, 2, 3, 4]

let orders = [
  ["товар1", "товар2"],
  ["товар3"]
];
let allProducts = orders.flat();
console.log(allProducts); // ["товар1", "товар2", "товар3"]

let nums = [1, 2, 3];
console.log(nums.flatMap(x => [x, x * 10])); // [1, 10, 2, 20, 3, 30]
  `,
  resources: [
    "https://learn.javascript.ru/array-methods#flat",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap",
  ],
};
