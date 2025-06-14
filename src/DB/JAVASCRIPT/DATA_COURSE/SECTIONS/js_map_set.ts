export const js_map_set_1 = {
  id: "js_map_set_1",
  title: "Что такое Set: уникальные значения",
  content: `
## Set — коллекция уникальных значений

**Set** в JavaScript — это структура данных для хранения только уникальных значений. В коллекции Set не может быть двух одинаковых элементов.

---

### Зачем нужен Set?

- Удалять дубликаты из массива
- Хранить множество уникальных значений (строки, числа, объекты и др.)
- Быстро проверять, есть ли значение в коллекции

---

### Создание Set

Пустой Set:
\`\`\`js
const fruits = new Set();
\`\`\`

Set с начальными значениями:
\`\`\`js
const fruits = new Set(["яблоко", "банан", "груша"]);
\`\`\`

Автоматически удаляются дубликаты:
\`\`\`js
const numbers = new Set([1, 2, 2, 3, 3, 3]);
console.log(numbers); // Set(3) {1, 2, 3}
\`\`\`

---

### Особенности Set

- Все значения уникальны
- Сохраняет порядок добавления
- Различает типы (1 и '1' — разные элементы)
- Можно хранить любые типы: строки, числа, объекты, NaN, undefined

\`\`\`js
const mixed = new Set();
mixed.add(42);
mixed.add("42");
mixed.add({ id: 1 });
mixed.add({ id: 1 }); // это другой объект, тоже добавится
console.log(mixed.size); // 4
\`\`\`

---

### Пример: удаление дубликатов из массива

\`\`\`js
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]
\`\`\`

---

## Итог

Set — коллекция, в которой нет повторяющихся значений.  
Полезен для фильтрации массива, проверки уникальности, быстрого поиска.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    // Создаём Set с числами, где есть повторы
    const nums = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNums = [...new Set(nums)];
    document.write("Уникальные числа: " + uniqueNums.join(", "));
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set",
    "https://learn.javascript.ru/map-set#set",
  ],
};
export const js_map_set_2 = {
  id: "js_map_set_2",
  title: "Методы Set: add, delete, has, clear",
  content: `
## Методы Set для управления коллекцией

У Set есть несколько полезных методов для работы с элементами:

---

### 1. add(value) — добавить элемент

Добавляет значение в Set.  
Если такое значение уже есть — ничего не произойдет.

\`\`\`js
const letters = new Set();
letters.add("а");
letters.add("б");
letters.add("а"); // не добавится повторно

console.log(letters); // Set(2) {"а", "б"}
\`\`\`

---

### 2. delete(value) — удалить элемент

Удаляет значение из Set.  
Возвращает true, если элемент был удалён, и false — если его не было.

\`\`\`js
const items = new Set(["q", "w", "e"]);
items.delete("w"); // true
items.delete("r"); // false

console.log(items); // Set(2) {"q", "e"}
\`\`\`

---

### 3. has(value) — проверить наличие

Проверяет, есть ли значение в Set.  
Возвращает true или false.

\`\`\`js
const colors = new Set(["красный", "зелёный"]);
console.log(colors.has("зелёный")); // true
console.log(colors.has("синий"));   // false
\`\`\`

---

### 4. clear() — очистить Set

Удаляет все элементы.

\`\`\`js
const data = new Set([1, 2, 3]);
data.clear();
console.log(data.size); // 0
\`\`\`

---

### Свойство size

Показывает, сколько элементов в Set:

\`\`\`js
const digits = new Set([1, 2, 3]);
console.log(digits.size); // 3
\`\`\`

---

## Итог

- **add(value)** — добавить элемент
- **delete(value)** — удалить элемент
- **has(value)** — проверить наличие
- **clear()** — удалить всё
- **size** — узнать размер Set
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const colors = new Set(["красный", "зелёный"]);
    colors.add("синий");
    colors.delete("красный");
    document.write("Есть синий? " + colors.has("синий")); // true
    document.write("<br>Размер Set: " + colors.size); // 2
    colors.clear();
    document.write("<br>После clear: " + colors.size); // 0
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const set = new Set();
set.add(1);
set.add(2);
console.log(set.has(2)); // true
set.delete(2);
console.log(set.has(2)); // false
set.clear();
console.log(set.size); // 0
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set",
    "https://learn.javascript.ru/map-set#set",
  ],
};
export const js_map_set_3 = {
  id: "js_map_set_3",
  title: "Перебор Set: for...of, forEach",
  content: `
## Перебор элементов Set

Set — это итерируемая структура данных, то есть по нему можно проходить с помощью стандартных циклов.

---

### 1. Цикл for...of

Позволяет пройтись по всем элементам Set в порядке их добавления:

\`\`\`js
const fruits = new Set(["яблоко", "банан", "груша"]);

for (const fruit of fruits) {
  console.log(fruit);
}
// Выведет: яблоко, банан, груша
\`\`\`

---

### 2. Метод forEach

У Set есть метод forEach, который принимает функцию-колбэк.  
В колбэк передаётся три параметра: значение, дубликат значения (для совместимости с Map), сам Set.

\`\`\`js
const numbers = new Set([1, 2, 3]);

numbers.forEach((value, duplicateValue, setItself) => {
  console.log(value); // value === duplicateValue
});
\`\`\`

---

### Пример с условием

Можно применять условия прямо в цикле:

\`\`\`js
const words = new Set(["sun", "sky", "sea"]);

for (const word of words) {
  if (word.includes("s")) {
    console.log("Найдено:", word);
  }
}
// Найдено: sun
// Найдено: sky
// Найдено: sea
\`\`\`

---

## Итог

- Используй **for...of** для простого перебора всех значений Set
- Используй **forEach** для выполнения функции для каждого элемента
- Порядок перебора — такой же, как порядок добавления

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const colors = new Set(["red", "green", "blue"]);
    document.write("<b>Перебор for...of:</b><br>");
    for (const color of colors) {
      document.write(color + "<br>");
    }

    document.write("<b>Перебор forEach:</b><br>");
    colors.forEach(function(value) {
      document.write(value + "<br>");
    });
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const set = new Set(["a", "b", "c"]);

// for...of
for (const item of set) {
  console.log(item);
}

// forEach
set.forEach((value) => {
  console.log(value);
});
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach",
    "https://learn.javascript.ru/map-set#set",
  ],
};
export const js_map_set_4 = {
  id: "js_map_set_4",
  title: "Что такое Map: ключ-значение",
  content: `
## Что такое Map

**Map** — это коллекция пар ключ-значение, похожая на объект, но с рядом отличий:

- Ключи могут быть **любого типа** (строки, числа, объекты, функции и др.)
- Порядок добавления сохраняется
- Удобно перебирать, получать размер, удалять элементы

---

### Пример создания Map

\`\`\`js
const userRoles = new Map();

userRoles.set("Анна", "админ");
userRoles.set("Иван", "модератор");
userRoles.set("Ольга", "пользователь");

console.log(userRoles.get("Анна")); // "админ"
\`\`\`

---

### Отличия Map от объекта

| Свойство          | Object                  | Map                   |
| ----------------- | ----------------------- | --------------------- |
| Тип ключей        | Только строки/символы   | Любой тип             |
| Порядок           | Не всегда сохраняется   | Сохраняется           |
| Итерация          | Неудобно                | Удобно (методы Map)   |
| Размер            | Нужно считать вручную   | map.size              |

---

### Пример: объект в качестве ключа

\`\`\`js
const person1 = { name: "Анна" };
const person2 = { name: "Иван" };

const visits = new Map();
visits.set(person1, 3);
visits.set(person2, 5);

console.log(visits.get(person1)); // 3
\`\`\`

---

## Вывод

- Map — коллекция, где ключи могут быть любого типа
- Легко перебирать, получать размер, удалять и искать элементы
- Удобнее объектов для хранения структурированных данных
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const fruits = new Map();
    fruits.set("яблоко", 10);
    fruits.set("банан", 5);

    document.write("Яблок: " + fruits.get("яблоко") + "<br>");
    document.write("Бананов: " + fruits.get("банан") + "<br>");
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const userRoles = new Map();
userRoles.set("Анна", "админ");
userRoles.set("Иван", "модератор");

console.log(userRoles.get("Иван")); // "модератор"
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map",
    "https://learn.javascript.ru/map-set#map",
  ],
};
export const js_map_set_5 = {
  id: "js_map_set_5",
  title: "Методы Map: set, get, delete, has, clear",
  content: `
## Основные методы коллекции Map

**Map** предоставляет удобные методы для управления парами ключ-значение.

---

### 1. set(key, value)
Добавляет пару ключ-значение. Если ключ уже есть — значение обновляется.

\`\`\`js
const map = new Map();
map.set("fruit", "яблоко");
map.set("fruit", "банан"); // перезаписали значение
console.log(map.get("fruit")); // "банан"
\`\`\`

---

### 2. get(key)
Возвращает значение по ключу. Если ключ не найден — undefined.

\`\`\`js
const prices = new Map();
prices.set("молоко", 90);

console.log(prices.get("молоко")); // 90
console.log(prices.get("хлеб"));   // undefined
\`\`\`

---

### 3. has(key)
Проверяет, есть ли элемент с заданным ключом. Возвращает true/false.

\`\`\`js
const map = new Map();
map.set(1, "один");

console.log(map.has(1));    // true
console.log(map.has(100));  // false
\`\`\`

---

### 4. delete(key)
Удаляет элемент по ключу. Возвращает true, если элемент был удалён.

\`\`\`js
map.delete(1); // удалили ключ 1
console.log(map.has(1)); // false
\`\`\`

---

### 5. clear()
Очищает всю коллекцию.

\`\`\`js
map.clear();
console.log(map.size); // 0
\`\`\`

---

## Свойство size

Возвращает количество элементов:

\`\`\`js
const m = new Map();
m.set("a", 1);
console.log(m.size); // 1
\`\`\`

---

## Вывод

- set, get — добавить/получить значение по ключу
- has, delete — проверить наличие и удалить по ключу
- clear — очистить Map полностью
- size — узнать количество элементов
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const capitals = new Map();
    capitals.set("Россия", "Москва");
    capitals.set("Франция", "Париж");

    document.write("Столица Франции: " + capitals.get("Франция"));
    capitals.delete("Россия");
    document.write("<br>Россия в списке? " + capitals.has("Россия"));
    capitals.clear();
    document.write("<br>Всего элементов: " + capitals.size);
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const fruits = new Map();
fruits.set("яблоко", 5);
fruits.set("банан", 2);

console.log(fruits.get("яблоко")); // 5
fruits.delete("яблоко");
console.log(fruits.has("яблоко")); // false
fruits.clear();
console.log(fruits.size); // 0
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map",
    "https://learn.javascript.ru/map-set#map",
  ],
};
export const js_map_set_6 = {
  id: "js_map_set_6",
  title: "Перебор Map: entries, keys, values",
  content: `
## Перебор Map: entries, keys, values

Map предоставляет специальные методы для перебора содержимого:

---

### 1. map.entries()
Возвращает итерируемый объект с парами \`[ключ, значение]\`.

\`\`\`js
const capitals = new Map([
  ["Россия", "Москва"],
  ["Франция", "Париж"],
]);

for (const [country, capital] of capitals.entries()) {
  console.log(\`\${country} — \${capital}\`);
}
// Россия — Москва
// Франция — Париж
\`\`\`

---

### 2. map.keys()
Перебор только ключей:

\`\`\`js
for (const country of capitals.keys()) {
  console.log(country);
}
// Россия
// Франция
\`\`\`

---

### 3. map.values()
Перебор только значений:

\`\`\`js
for (const capital of capitals.values()) {
  console.log(capital);
}
// Москва
// Париж
\`\`\`

---

### Альтернатива: forEach

\`forEach\` перебирает Map с аргументами \`(value, key)\`:

\`\`\`js
capitals.forEach((capital, country) => {
  console.log(\`\${country}: \${capital}\`);
});
// Россия: Москва
// Франция: Париж
\`\`\`

---

## Итог

- \`entries()\` — пары [ключ, значение]
- \`keys()\` — только ключи
- \`values()\` — только значения
- \`forEach()\` — удобный перебор с любыми действиями

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const map = new Map([
      ["яблоко", 1],
      ["банан", 2],
      ["киви", 3]
    ]);

    // Перебор пар
    for (const [key, value] of map.entries()) {
      document.write(key + ": " + value + "<br>");
    }

    // Перебор ключей
    for (const key of map.keys()) {
      document.write("Ключ: " + key + "<br>");
    }

    // Перебор значений
    for (const value of map.values()) {
      document.write("Значение: " + value + "<br>");
    }
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const users = new Map([
  ["Анна", 25],
  ["Игорь", 31],
  ["Мария", 28],
]);

// Пары [ключ, значение]
for (const [name, age] of users.entries()) {
  console.log(name, age);
}

// Ключи
for (const name of users.keys()) {
  console.log("Имя:", name);
}

// Значения
for (const age of users.values()) {
  console.log("Возраст:", age);
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map",
    "https://learn.javascript.ru/map-set#map",
  ],
};
export const js_map_set_7 = {
  id: "js_map_set_7",
  title: "Сравнение Map и Set с объектами и массивами",
  content: `
## Сравнение коллекций: Map, Set, объекты и массивы

Коллекции \`Map\` и \`Set\` часто сравнивают с привычными объектами \`{}\` и массивами \`[]\`. Вот основные отличия и области применения.

---

### Set vs Array

| Характеристика                    | Set                                         | Array                        |
| --------------------------------- | ------------------------------------------- | ---------------------------- |
| Хранит только уникальные значения | Да                                          | Нет                          |
| Поддержка индексов                | Нет                                         | Да                           |
| Быстрый поиск \`has(value)\`     | Да (O(1))                                   | Нет (поиск по значению — O(n)) |
| Поддержка итерации                | Да (\`for...of\`, \`forEach\`)              | Да                           |
| Применение                        | Удаление дубликатов, быстрые проверки       | Любые упорядоченные данные   |

**Когда использовать Set:**  
- Нужно исключить дубликаты  
- Часто требуется быстрая проверка наличия элемента  
- Не важен порядок и индексы

---

### Map vs Object

| Характеристика                      | Map                         | Object                        |
| ----------------------------------- | --------------------------- | ----------------------------- |
| Ключи могут быть любого типа        | Да                          | Только строки или Symbol      |
| Сохраняет порядок ключей            | Да                          | Нет (до ES6 не гарантировалось) |
| Размер коллекции                    | \`map.size\`                | \`Object.keys(obj).length\`   |
| Удобство перебора                   | \`map.entries()\`, \`map.keys()\` | \`for...in\`, \`Object.keys()\` |
| Подходит для ассоциативных массивов | Да                          | Да, но с ограничениями        |

**Когда использовать Map:**  
- Ключи не только строки (например, объекты, числа)  
- Важен порядок добавления элементов  
- Часто добавляете/удаляете/ищете элементы

---

## Вывод

- **Set** — альтернатива массиву, если важна уникальность элементов.
- **Map** — альтернатива объекту, если нужны гибкие ключи и быстрые операции.

  `.trim(),

  codeExampleJS: `
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

const map = new Map();
map.set({ id: 1 }, "value");
console.log(map.size); // 1

const obj = {};
obj[{ id: 2 }] = "val";
console.log(Object.keys(obj)); // ["[object Object]"]
  `.trim(),

  resources: [
    "https://learn.javascript.ru/map-set",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map",
  ],
};
