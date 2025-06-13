export const js_objects_1 = {
  id: "js_objects_1",
  title: "Что такое объект",
  content: `
## Что такое объект в JavaScript

Объект — это структура, которая позволяет хранить несколько значений в одной переменной.  
Объект состоит из свойств (ключей) и значений:

\`\`\`js
let user = {
  name: "Анна",
  age: 25
};
\`\`\`

Здесь \`user\` — это объект. У него два свойства:
- \`name\` — ключ
- "Анна" — значение
- \`age\` — ключ
- 25 — значение

---

### Зачем нужны объекты

Объекты позволяют:
- Хранить связанные данные в одном месте
- Создавать структуры, описывающие сущности (пользователь, товар, заказ и т.д.)
- Легко добавлять, читать, изменять и удалять данные

---

### Сравнение с переменными

**Без объекта:**

\`\`\`js
let name = "Анна";
let age = 25;
let city = "Москва";
\`\`\`

**С объектом:**

\`\`\`js
let user = {
  name: "Анна",
  age: 25,
  city: "Москва"
};
\`\`\`

Объект объединяет связанные данные в одну структуру.

---

### Синтаксис объекта

\`\`\`js
let objectName = {
  ключ1: значение1,
  ключ2: значение2,
  // ...
};
\`\`\`

- Ключ — это имя свойства (всегда строка или символ)
- Значение может быть любым типом: строка, число, массив, объект, функция и т.д.

---

### Пример объекта

\`\`\`js
let book = {
  title: "JS для начинающих",
  author: "Иванов",
  year: 2023,
  available: true
};
\`\`\`

---

### Тип объекта

Тип переменной \`user\` (или любого объекта) — это "object":

\`\`\`js
console.log(typeof user); // "object"
\`\`\`

---

### Пустой объект

Если нужно создать пустой объект, можно использовать:

\`\`\`js
let empty = {};
\`\`\`

или

\`\`\`js
let empty = new Object(); // менее популярный способ
\`\`\`

---

### Пример из жизни

Объект — как карточка клиента в базе данных:

- Имя: Анна
- Возраст: 25
- Город: Москва

То есть: сущность + данные про неё. Именно для этого и нужны объекты в JavaScript.

---

### Вывод

- Объект — это способ хранить связанные данные вместе
- Объект состоит из пары ключ: значение
- Это основной тип данных для представления любой сложной информации в JS
  `,
  codeExampleJS: `
let user = {
  name: "Анна",
  age: 25
};

let book = {
  title: "JS для начинающих",
  author: "Иванов",
  year: 2023,
  available: true
};

console.log(typeof user); // "object"

let empty = {};
let empty2 = new Object();
  `,
  resources: [
    "https://learn.javascript.ru/object",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects",
  ],
};
export const js_objects_2 = {
  id: "js_objects_2",
  title: "Свойства и значения",
  content: `
## Что такое свойство объекта

Свойство объекта — это пара:  
**ключ: значение**

- **Ключ** (или имя свойства) — это строка (или символ), которая задаёт "имя поля".
- **Значение** — это любое допустимое значение в JavaScript: число, строка, логическое значение, массив, объект, функция и т.д.

\`\`\`js
let user = {
  name: "Анна",              // строка
  age: 25,                   // число
  isAdmin: false,            // логическое значение
  skills: ["HTML", "CSS"],   // массив
  address: { city: "Москва" } // вложенный объект
};
\`\`\`

---

### Правила именования ключей

Ключом может быть любая строка:

\`\`\`js
let obj = {
  name: "Олег",
  "favorite color": "синий"
};
\`\`\`

Можно использовать пробелы или специальные символы, но тогда ключ берётся в кавычки, и доступ к нему — через скобки:

\`\`\`js
console.log(obj["favorite color"]); // синий
\`\`\`

---

### Автоматическое преобразование ключей

Если ты пишешь ключ без кавычек, JavaScript автоматически превращает его в строку:

\`\`\`js
let obj = {
  123: "число"
};

console.log(obj["123"]); // "число"
\`\`\`

---

### Какое может быть значение

Значением свойства может быть любой тип данных:

\`\`\`js
let movie = {
  title: "Interstellar",
  year: 2014,
  genres: ["sci-fi", "drama"],
  rating: 8.6,
  director: {
    name: "Christopher Nolan",
    born: 1970
  },
  isAvailable: true
};
\`\`\`

---

### Проверка наличия свойства

Чтобы узнать, есть ли свойство в объекте, используют оператор **in**:

\`\`\`js
let user = { name: "Анна" };

console.log("name" in user); // true
console.log("age" in user);  // false
\`\`\`

---

### Удаление свойства

Свойство можно удалить с помощью оператора **delete**:

\`\`\`js
let user = { name: "Анна", age: 25 };

delete user.age;

console.log(user); // { name: "Анна" }
\`\`\`

---

### Динамическое добавление и изменение

Свойства можно:
- **добавлять** после создания:
  \`\`\`js
  user.city = "Москва";
  \`\`\`
- **изменять**:
  \`\`\`js
  user.name = "Ольга";
  \`\`\`
- **удалять**:
  \`\`\`js
  delete user.city;
  \`\`\`

---

### Вывод

- Объект состоит из свойств, каждое из которых имеет ключ и значение.
- Ключ — это строка, значение — любой тип.
- Свойства можно добавлять, изменять, удалять и проверять их наличие.
  `,
  codeExampleJS: `
let user = {
  name: "Анна",
  age: 25,
  isAdmin: false,
  skills: ["HTML", "CSS"],
  address: { city: "Москва" }
};

let obj = {
  name: "Олег",
  "favorite color": "синий"
};
console.log(obj["favorite color"]); // синий

let movie = {
  title: "Interstellar",
  year: 2014,
  genres: ["sci-fi", "drama"],
  rating: 8.6,
  director: {
    name: "Christopher Nolan",
    born: 1970
  },
  isAvailable: true
};

let user2 = { name: "Анна" };
console.log("name" in user2); // true
console.log("age" in user2);  // false

let user3 = { name: "Анна", age: 25 };
delete user3.age;
console.log(user3);

user3.city = "Москва";
user3.name = "Ольга";
delete user3.city;
  `,
  resources: [
    "https://learn.javascript.ru/object",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#enumerating_properties",
  ],
};
export const js_objects_3 = {
  id: "js_objects_3",
  title: "Доступ к значениям",
  content: `
## Как получить значение из объекта

В JavaScript есть два способа доступа к свойствам объекта:
- Через точку (\`object.key\`)
- Через квадратные скобки (\`object["key"]\`)

---

###  Доступ через точку

Наиболее распространённый способ, если имя свойства известно заранее и не содержит пробелов, спецсимволов или цифры в начале.

\`\`\`js
let user = {
  name: "Анна",
  age: 25
};

console.log(user.name); // "Анна"
console.log(user.age);  // 25
\`\`\`

---

###  Доступ через квадратные скобки

Используется, если:
- имя свойства записано в переменной
- имя свойства содержит пробелы, спецсимволы или начинается с цифры
- имя свойства вычисляется во время выполнения

\`\`\`js
let user = {
  "full name": "Анна Иванова",
  age: 25
};

console.log(user["full name"]); // "Анна Иванова"

let key = "age";
console.log(user[key]); // 25
\`\`\`

---

#### Важное отличие:

\`\`\`js
let key = "name";
console.log(user.key);  // undefined — JS ищет свойство "key"
console.log(user[key]); // "Анна" — key содержит "name"
\`\`\`

\`user.key ≠ user[key]\` — это принципиально разные записи.

---

### Квадратные скобки + вычисление

\`\`\`js
let property = "city";
let user = {
  name: "Анна",
  city: "Москва"
};

console.log(user[property]); // "Москва"
\`\`\`

---

### Ошибка доступа: если свойства нет

Если запрашиваемого свойства в объекте нет — результат будет undefined, а не ошибка:

\`\`\`js
let car = { brand: "Toyota" };
console.log(car.model); // undefined
\`\`\`

---

### Вложенные свойства

Можно использовать доступ по цепочке:

\`\`\`js
let user = {
  name: "Анна",
  address: {
    city: "Москва",
    street: "Тверская"
  }
};

console.log(user.address.city); // "Москва"
console.log(user["address"]["street"]); // "Тверская"
\`\`\`

---

### Что нельзя сделать через точку

\`\`\`js
let obj = {
  "user-name": "Оля",
  123: "число"
};

console.log(obj["user-name"]); // "Оля"
console.log(obj[123]);         // "число"

// Точка не работает с такими именами:
console.log(obj.user-name); // ошибка (попытка вычесть name из obj.user)
\`\`\`

---

### Вывод

- Для доступа к значениям объекта можно использовать точку или скобки.
- Скобки дают больше гибкости: поддерживают переменные и спецсимволы.
- Если свойства нет — возвращается undefined, а не ошибка.
  `,
  codeExampleJS: `
let user = {
  name: "Анна",
  age: 25,
  "full name": "Анна Иванова",
  address: {
    city: "Москва",
    street: "Тверская"
  }
};

console.log(user.name);        // "Анна"
console.log(user["full name"]); // "Анна Иванова"

let key = "age";
console.log(user[key]);        // 25

let property = "city";
console.log(user.address[property]); // "Москва"

let car = { brand: "Toyota" };
console.log(car.model);        // undefined

console.log(user.address.city);        // "Москва"
console.log(user["address"]["street"]); // "Тверская"

let obj = {
  "user-name": "Оля",
  123: "число"
};

console.log(obj["user-name"]); // "Оля"
console.log(obj[123]);         // "число"
// console.log(obj.user-name); // ошибка!
  `,
  resources: [
    "https://learn.javascript.ru/object",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#accessing_properties",
  ],
};
export const js_objects_4 = {
  id: "js_objects_4",
  title: "Вложенные объекты",
  content: `
## Что такое вложенный объект

**Вложенный объект** — это объект, который находится внутри другого объекта как значение одного из его свойств.

Это удобно, когда нужно группировать данные по смыслу.

\`\`\`js
let user = {
  name: "Анна",
  age: 25,
  address: {
    city: "Москва",
    street: "Тверская",
    building: 5
  }
};
\`\`\`

- \`user\` — основной объект
- \`address\` — свойство, значение которого — тоже объект
- У объекта \`address\` есть свои свойства: \`city\`, \`street\`, \`building\`

---

### Как получить доступ к вложенным свойствам

Через точку (или скобки) можно продолжить цепочку:

\`\`\`js
console.log(user.address.city);      // "Москва"
console.log(user.address["street"]); // "Тверская"
\`\`\`

---

### Вложенность может быть на любом уровне

\`\`\`js
let company = {
  name: "TechCorp",
  department: {
    name: "Разработка",
    teamLead: {
      name: "Ирина",
      experience: 5
    }
  }
};

console.log(company.department.teamLead.name); // "Ирина"
\`\`\`

---

### Если промежуточный объект отсутствует

\`\`\`js
let person = {};

console.log(person.address); // undefined
console.log(person.address.city); // ошибка: Cannot read property 'city' of undefined
\`\`\`

Чтобы избежать ошибки, нужно сначала проверить существование всех уровней:

\`\`\`js
if (person.address && person.address.city) {
  console.log(person.address.city);
}
\`\`\`

Альтернатива — опциональная цепочка:

\`\`\`js
console.log(person.address?.city); // безопасно: undefined
\`\`\`

---

### Можно изменять вложенные объекты

\`\`\`js
user.address.city = "Санкт-Петербург";
user.address.postalCode = "190000";

console.log(user.address);
// { city: "Санкт-Петербург", street: "Тверская", building: 5, postalCode: "190000" }
\`\`\`

---

### Вложенные объекты в массивах

Вложенные объекты часто используются внутри массивов (например, список товаров, пользователей и т.д.):

\`\`\`js
let users = [
  { name: "Анна", age: 25 },
  { name: "Игорь", age: 30 }
];

console.log(users[1].name); // "Игорь"
\`\`\`

---

### Вывод

- Объекты могут содержать другие объекты в качестве значений
- К вложенным свойствам можно обращаться по цепочке: \`obj.prop1.prop2\`
- Нужно быть осторожным: если одного из уровней не существует — будет ошибка
  `,
  codeExampleJS: `
let user = {
  name: "Анна",
  age: 25,
  address: {
    city: "Москва",
    street: "Тверская",
    building: 5
  }
};

console.log(user.address.city);      // "Москва"
console.log(user.address["street"]); // "Тверская"

let company = {
  name: "TechCorp",
  department: {
    name: "Разработка",
    teamLead: {
      name: "Ирина",
      experience: 5
    }
  }
};
console.log(company.department.teamLead.name); // "Ирина"

let person = {};
console.log(person.address); // undefined
// console.log(person.address.city); // ошибка

if (person.address && person.address.city) {
  console.log(person.address.city);
}

console.log(person.address?.city); // undefined

user.address.city = "Санкт-Петербург";
user.address.postalCode = "190000";
console.log(user.address);

let users = [
  { name: "Анна", age: 25 },
  { name: "Игорь", age: 30 }
];
console.log(users[1].name); // "Игорь"
  `,
  resources: [
    "https://learn.javascript.ru/object",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#nested_objects_and_arrays",
  ],
};
export const js_objects_5 = {
  id: "js_objects_5",
  title: "Создание и изменение объектов",
  content: `
## 1. Создание объекта

Пустой объект:
\`\`\`js
let user = {};
\`\`\`
Или с начальными данными:
\`\`\`js
let user = {
  name: "Анна",
  age: 25
};
\`\`\`
Также можно использовать \`new Object()\`, но в практике почти всегда используется \`{}\`.

---

## 2. Добавление свойства

Свойство можно добавить в уже существующий объект:
\`\`\`js
let user = {};
user.name = "Ольга";
user.age = 30;
\`\`\`

Или с помощью скобочной записи:
\`\`\`js
user["city"] = "Москва";
\`\`\`

---

## 3. Изменение свойства

Если свойство уже есть — его значение будет заменено:
\`\`\`js
user.age = 35;
\`\`\`

---

## 4. Удаление свойства

Чтобы удалить свойство из объекта, используется оператор \`delete\`:
\`\`\`js
delete user.city;
\`\`\`

---

## 5. Проверка существования свойства

С помощью оператора \`in\`:
\`\`\`js
console.log("age" in user);   // true
console.log("city" in user);  // false
\`\`\`

---

## 6. Объекты и переменные-ссылки

Объекты в JavaScript передаются по ссылке.  
Если две переменные ссылаются на один объект — изменение через одну переменную влияет на другую:

\`\`\`js
let a = { name: "Анна" };
let b = a;

b.name = "Ольга";

console.log(a.name); // "Ольга" — потому что это один и тот же объект
\`\`\`

---

## 7. Динамическое имя свойства

Если имя свойства хранится в переменной, используем скобки:
\`\`\`js
let key = "email";
user[key] = "anna@example.com";
\`\`\`

---

## 8. Создание объекта на основе другого

\`\`\`js
let user1 = {
  name: "Анна",
  age: 25
};

let user2 = { ...user1 }; // поверхностная копия (spread-оператор)

user2.name = "Мария";
console.log(user1.name); // "Анна" — оригинал не изменился
\`\`\`

Это поверхностная копия: вложенные объекты не копируются глубоко.

---

## Ошибки начинающих

- Используют \`user.key\` вместо \`user[key]\`, когда имя свойства — в переменной
- Думают, что \`delete\` удаляет переменную (он удаляет свойство объекта, а не переменную)
- Забывают, что объекты копируются по ссылке

---

## Примеры из жизни

Как в анкете: можно дописать поле, изменить ответ или зачеркнуть — так и в объекте можно добавлять, менять и удалять свойства.

---

## Вывод

- Объекты можно создавать пустыми или с данными
- Свойства можно добавлять, изменять, удалять и проверять
- Доступ к свойствам возможен как через точку, так и через скобки (особенно, если имя — переменная)
  `,
  codeExampleJS: `
let user = {};
user.name = "Ольга";
user.age = 30;
user["city"] = "Москва";

user.age = 35;
delete user.city;

console.log("age" in user);   // true
console.log("city" in user);  // false

let a = { name: "Анна" };
let b = a;
b.name = "Ольга";
console.log(a.name); // "Ольга"

let key = "email";
user[key] = "anna@example.com";

let user1 = { name: "Анна", age: 25 };
let user2 = { ...user1 };
user2.name = "Мария";
console.log(user1.name); // "Анна"
  `,
  resources: [
    "https://learn.javascript.ru/object",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects",
  ],
};
export const js_objects_6 = {
  id: "js_objects_6",
  title: "Методы объектов",
  content: `
## Что такое метод

**Метод объекта** — это функция, которая записана как значение свойства.

Методы позволяют объекту выполнять действия, связанные с его данными.

---

### Простой пример

\`\`\`js
let user = {
  name: "Анна",
  sayHello: function () {
    console.log("Привет!");
  }
};

user.sayHello(); // Привет!
\`\`\`

- \`sayHello\` — это метод
- Он вызван через объект: \`user.sayHello()\`

---

### Короткий синтаксис методов

JavaScript позволяет использовать сокращённую запись:

\`\`\`js
let user = {
  name: "Анна",
  sayHello() {
    console.log("Привет!");
  }
};
\`\`\`

---

### Методы могут использовать свойства объекта

Методы могут обращаться к другим свойствам объекта:

\`\`\`js
let user = {
  name: "Анна",
  greet() {
    console.log("Здравствуйте, меня зовут " + user.name);
  }
};

user.greet(); // Здравствуйте, меня зовут Анна
\`\`\`

> Позже, когда изучим \`this\`, мы научимся писать такие методы универсально, даже если имя объекта неизвестно заранее.

---

### Метод, вычисляющий данные на основе объекта

\`\`\`js
let rectangle = {
  width: 5,
  height: 10,
  getArea() {
    return this.width * this.height;
  }
};

console.log(rectangle.getArea()); // 50
\`\`\`

Здесь используется \`this\` — пока мы его не изучали, просто знай: внутри метода можно получить доступ к другим данным объекта.

---

### Метод внутри вложенного объекта

\`\`\`js
let user = {
  name: "Анна",
  contact: {
    email: "anna@example.com",
    showEmail() {
      console.log("Email: " + this.email);
    }
  }
};

user.contact.showEmail(); // Email: anna@example.com
\`\`\`

---

### Удаление метода

Методы — это обычные свойства, их можно удалять:

\`\`\`js
delete user.sayHello;
\`\`\`

---

### Пример из жизни

Если представить объект как робота, то свойства — это данные о нём (имя, вес), а методы — это то, что он умеет делать (ходить, говорить, вычислять).

---

### Вывод

- Метод — это функция, записанная как свойство объекта
- Метод может обращаться к другим свойствам объекта
- Методы делают объект более "живым" — он может выполнять действия
  `,
  codeExampleJS: `
let user = {
  name: "Анна",
  sayHello: function () {
    console.log("Привет!");
  }
};

user.sayHello(); // Привет!

let user2 = {
  name: "Анна",
  sayHello() {
    console.log("Привет!");
  },
  greet() {
    console.log("Здравствуйте, меня зовут " + user2.name);
  }
};

user2.greet(); // Здравствуйте, меня зовут Анна

let rectangle = {
  width: 5,
  height: 10,
  getArea() {
    return this.width * this.height;
  }
};

console.log(rectangle.getArea()); // 50

let user3 = {
  name: "Анна",
  contact: {
    email: "anna@example.com",
    showEmail() {
      console.log("Email: " + this.email);
    }
  }
};

user3.contact.showEmail(); // Email: anna@example.com

delete user2.sayHello;
  `,
  resources: [
    "https://learn.javascript.ru/object-methods",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#methods",
  ],
};
export const js_objects_7 = {
  id: "js_objects_7",
  title: "Методы для работы с данными объекта: set, update, delete, has",
  content: `
## Методы для работы с данными объекта: set, update, delete, has

В этой теме мы рассмотрим, как добавлять, обновлять, удалять и проверять наличие свойств в объекте — и как организовать эти действия в виде методов.

---

### 1. Добавление (set)

Обычно добавление свойства в объект происходит напрямую:
\`\`\`js
let user = {};
user.name = "Анна";
\`\`\`

Можно оформить это в виде метода:
\`\`\`js
let user = {
  setName(newName) {
    this.name = newName;
  }
};

user.setName("Мария");
console.log(user.name); // "Мария"
\`\`\`

---

### 2. Обновление (update)

Обновление — это та же операция, что и добавление, но свойство уже существует:
\`\`\`js
let product = {
  name: "Телефон",
  price: 10000,
  updatePrice(newPrice) {
    this.price = newPrice;
  }
};

product.updatePrice(12000);
console.log(product.price); // 12000
\`\`\`

---

### 3. Удаление (delete)

Удаление происходит с помощью оператора \`delete\`:
\`\`\`js
delete product.name;
\`\`\`

Или через метод:
\`\`\`js
let product = {
  name: "Телефон",
  deleteName() {
    delete this.name;
  }
};

product.deleteName();
console.log(product.name); // undefined
\`\`\`

---

### 4. Проверка наличия (has)

Для проверки, существует ли свойство, используется оператор \`in\`:
\`\`\`js
console.log("price" in product); // true или false
\`\`\`

Можно сделать метод:
\`\`\`js
let product = {
  price: 10000,
  hasKey(key) {
    return key in this;
  }
};

console.log(product.hasKey("price")); // true
console.log(product.hasKey("name"));  // false
\`\`\`

---

### Всё вместе: универсальный объект

\`\`\`js
let user = {
  set(key, value) {
    this[key] = value;
  },
  update(key, value) {
    if (key in this) {
      this[key] = value;
    }
  },
  remove(key) {
    delete this[key];
  },
  has(key) {
    return key in this;
  }
};

user.set("name", "Анна");
user.update("name", "Мария");
console.log(user.name); // "Мария"

user.remove("name");
console.log(user.has("name")); // false
\`\`\`

---

### Аналогия из жизни

Если представить объект как блокнот, то:
- set — записали новую заметку
- update — исправили уже написанное
- delete — вычеркнули
- has — проверили, есть ли такая заметка

---

### Вывод

- Все основные действия с объектом — добавление, изменение, удаление, проверка — можно оформить в виде методов
- Это помогает структурировать логику работы с данными
- Методы делают объект самостоятельным и управляемым
  `,
  codeExampleJS: `
let user = {
  set(key, value) {
    this[key] = value;
  },
  update(key, value) {
    if (key in this) {
      this[key] = value;
    }
  },
  remove(key) {
    delete this[key];
  },
  has(key) {
    return key in this;
  }
};

user.set("name", "Анна");
user.update("name", "Мария");
console.log(user.name); // "Мария"

user.remove("name");
console.log(user.has("name")); // false
  `,
  resources: [
    "https://learn.javascript.ru/object",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects",
  ],
};
export const js_objects_8 = {
  id: "js_objects_8",
  title: "Методы обхода объекта: for...in, Object.keys, values, entries",
  content: `
## Зачем обходить объект?

Когда объект содержит много свойств, бывает нужно:
- Вывести все ключи или значения
- Сформировать из объекта список
- Преобразовать объект в другой вид
- Сравнить или проверить данные

Для этого в JavaScript есть способы перебора (обхода).

---

### 1. Цикл for...in

Самый простой способ — обойти все свойства с помощью цикла \`for...in\`:
\`\`\`js
let user = {
  name: "Анна",
  age: 25,
  city: "Москва"
};

for (let key in user) {
  console.log(key);          // имя свойства (ключ)
  console.log(user[key]);    // значение свойства
}
\`\`\`

---

### 2. Object.keys(obj)

Возвращает массив всех ключей объекта:
\`\`\`js
let keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]
\`\`\`

Можно использовать вместе с forEach:
\`\`\`js
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});
\`\`\`

---

### 3. Object.values(obj)

Возвращает массив всех значений:
\`\`\`js
let values = Object.values(user);
console.log(values); // ["Анна", 25, "Москва"]
\`\`\`

---

### 4. Object.entries(obj)

Возвращает массив пар [ключ, значение]:
\`\`\`js
let entries = Object.entries(user);
console.log(entries);
// [["name", "Анна"], ["age", 25], ["city", "Москва"]]

entries.forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});
\`\`\`

---

### Пример: подсчёт количества свойств

\`\`\`js
let count = Object.keys(user).length;
console.log("Свойств в объекте:", count);
\`\`\`

---

### Когда использовать что?

| Метод              | Что возвращает            | Для чего полезен                     |
| ------------------ | ------------------------ | ------------------------------------ |
| for...in           | ключ + доступ к значению | общий перебор, в том числе вложенные |
| Object.keys(obj)   | массив ключей            | длина, проверка, forEach             |
| Object.values(obj) | массив значений          | работа с данными                     |
| Object.entries(obj)| массив [ключ, значение]  | маппинг, преобразование, вывод       |

---

### Пример из жизни

Представь, что объект — это таблица в Excel:

- Object.keys — заголовки колонок
- Object.values — значения строк
- Object.entries — пары "заголовок — значение" по каждой строке
- for...in — как вручную просмотреть ячейку за ячейкой

---

> **Важно:** \`for...in\` обходит только собственные и перечисляемые свойства объекта.

---

### Вывод

- Обход объекта — ключевой навык для работы с данными
- \`for...in\` — простой способ пройтись по всем свойствам
- \`Object.keys\`, \`values\`, \`entries\` — удобны для более гибкой работы
  `,
  codeExampleJS: `
let user = {
  name: "Анна",
  age: 25,
  city: "Москва"
};

// for...in
for (let key in user) {
  console.log(key, user[key]);
}

// Object.keys
let keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]
keys.forEach(key => console.log(key, user[key]));

// Object.values
let values = Object.values(user);
console.log(values); // ["Анна", 25, "Москва"]

// Object.entries
let entries = Object.entries(user);
console.log(entries);
// [["name", "Анна"], ["age", 25], ["city", "Москва"]]
entries.forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});

// Подсчёт количества свойств
let count = Object.keys(user).length;
console.log("Свойств в объекте:", count);
  `,
  resources: [
    "https://learn.javascript.ru/object#for-in",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
  ],
};
export const js_objects_9 = {
  id: "js_objects_9",
  title: "Глобальный объект window",
  content: `
## Что такое window

\`window\` — это глобальный объект браузера, который:

- Хранит все глобальные переменные и функции
- Доступен в любом месте скрипта
- Представляет собой "окно" браузера, в котором выполняется код

\`\`\`js
console.log(window); // Огромный объект с множеством свойств и методов
\`\`\`

---

### 1. Глобальные переменные = свойства window

Если вы создаёте переменную **без let/const/var** (не рекомендуется!), она попадает в \`window\`:

\`\`\`js
username = "Анна"; // глобальная переменная
console.log(window.username); // "Анна"
\`\`\`

Даже объявленные через \`var\` переменные становятся его свойствами:

\`\`\`js
var city = "Москва";
console.log(window.city); // "Москва"
\`\`\`

Переменные, объявленные через \`let\` и \`const\`, в \`window\` не добавляются.

---

### 2. Глобальные функции = методы window

\`\`\`js
function greet() {
  console.log("Привет!");
}

window.greet(); // Привет!
\`\`\`

---

### 3. Методы window, полезные для практики

- \`alert(message)\` — вывод модального окна
- \`prompt(message)\` — запрос строки от пользователя
- \`confirm(message)\` — запрос подтверждения (true/false)

\`\`\`js
let name = prompt("Как тебя зовут?");
alert("Привет, " + name);
\`\`\`

---

### 4. Размеры окна

\`\`\`js
console.log(window.innerWidth);  // ширина контента
console.log(window.innerHeight); // высота контента
\`\`\`

---

### 5. Навигация и перезагрузка

\`\`\`js
window.location.href = "https://example.com"; // переход по ссылке
window.location.reload(); // перезагрузка страницы
\`\`\`

---

### Почему важно знать про window

- Многие встроенные возможности браузера — это методы window
- Это основа взаимодействия с пользовательским интерфейсом, размером окна, навигацией
- Понимание window помогает лучше разобраться в среде выполнения JavaScript в браузере

---

### Что ещё входит в window

- \`console\`
- \`document\` (работа с HTML)
- \`navigator\` (данные о браузере)
- \`screen\` (разрешение экрана)
- \`history\`, \`location\`, \`localStorage\`, \`sessionStorage\`
- \`setTimeout\` и \`setInterval\`

---

### Аналогия из жизни

Объект window — это как панель управления браузера, через которую JavaScript может видеть и управлять "окном", в котором он работает.

---

### Вывод

- \`window\` — глобальный объект браузера, доступный в любом скрипте
- Многие функции и переменные — его части
- Это база для взаимодействия с пользователем, экраном, интерфейсом
  `,
  codeExampleJS: `
username = "Анна";
console.log(window.username); // "Анна"

var city = "Москва";
console.log(window.city); // "Москва"

function greet() {
  console.log("Привет!");
}
window.greet(); // Привет!

let name = prompt("Как тебя зовут?");
alert("Привет, " + name);

console.log(window.innerWidth);
console.log(window.innerHeight);

window.location.href = "https://example.com";
window.location.reload();
  `,
  resources: [
    "https://learn.javascript.ru/global-object",
    "https://developer.mozilla.org/ru/docs/Web/API/Window",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Window",
  ],
};
