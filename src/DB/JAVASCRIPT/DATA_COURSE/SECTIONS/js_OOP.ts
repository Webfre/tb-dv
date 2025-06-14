export const js_OOP_1 = {
  id: "js_OOP_1",
  title: "Принципы ООП: инкапсуляция, наследование, полиморфизм",
  content: `
## Что такое ООП

**Объектно-ориентированное программирование (ООП)** — стиль программирования, где данные и поведение объединены в объекты. Это помогает моделировать реальные сущности, упрощает проектирование и поддержку кода.

---

### 1. Инкапсуляция

Инкапсуляция — объединение данных и функций, работающих с этими данными, внутри объекта. Также это механизм ограничения доступа к внутренним деталям объекта.

\`\`\`js
class User {
  #password; // приватное свойство
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
  checkPassword(pwd) {
    return this.#password === pwd;
  }
}
const user = new User("Анна", "1234");
console.log(user.checkPassword("1234")); // true
console.log(user.#password); // Ошибка: приватное поле
\`\`\`

---

### 2. Наследование

Наследование позволяет создавать новый класс на основе существующего, повторно используя его свойства и методы.

\`\`\`js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} издаёт звук\`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} лает\`);
  }
}
const dog = new Dog("Шарик");
dog.speak(); // "Шарик лает"
\`\`\`

---

### 3. Полиморфизм

Полиморфизм — это возможность вызывать одинаковые методы у разных объектов, но с разным результатом.

\`\`\`js
const animals = [new Animal("Животное"), new Dog("Барбос")];
animals.forEach(animal => animal.speak());
// "Животное издаёт звук"
// "Барбос лает"
\`\`\`

---

### Итоги

| Принцип      | Описание                                                                |
| ------------ | ----------------------------------------------------------------------- |
| Инкапсуляция | Сокрытие внутренней логики объекта от внешнего мира                     |
| Наследование | Создание нового класса на основе существующего                          |
| Полиморфизм  | Возможность вызывать одинаковые методы у разных объектов с разным результатом |

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    class Animal {
      constructor(name) {
        this.name = name;
      }
      speak() {
        alert(this.name + " издаёт звук");
      }
    }
    class Dog extends Animal {
      speak() {
        alert(this.name + " лает");
      }
    }
    const animals = [new Animal("Кот"), new Dog("Рекс")];
    animals.forEach(a => a.speak());
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
  checkPassword(pwd) {
    return this.#password === pwd;
  }
}
const user = new User("Анна", "1234");
console.log(user.checkPassword("1234")); // true
  `.trim(),

  resources: [
    "https://learn.javascript.ru/class",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
  ],
};
export const js_OOP_2 = {
  id: "js_OOP_2",
  title: "Прототипное наследование в JavaScript",
  content: `
## Что такое прототипное наследование

JavaScript — прототипно-ориентированный язык. Это значит, что **каждый объект имеет скрытое внутреннее свойство [[Prototype]]**, которое указывает на другой объект. Благодаря этому объект может наследовать свойства и методы другого объекта.

---

### Пример

\`\`\`js
const animal = {
  speak() {
    console.log("Животное издаёт звук");
  }
};

const dog = {
  name: "Барбос"
};

Object.setPrototypeOf(dog, animal);

dog.speak(); // "Животное издаёт звук"
\`\`\`

dog не имеет метода \`speak\`, но через прототип находит и использует \`animal.speak\`.

---

### Цепочка прототипов

Если свойство не найдено в текущем объекте, поиск продолжается по цепочке прототипов:

\`\`\`js
console.log(dog.toString()); // [object Object]
\`\`\`
Метод \`toString\` найден в \`Object.prototype\`.

---

### Создание объекта с определённым прототипом

\`\`\`js
const animal = {
  speak() {
    console.log("животное говорит");
  }
};

const cat = Object.create(animal);
cat.name = "Мурка";
cat.speak(); // "животное говорит"
\`\`\`

---

### proto и современные методы

Рекомендуется использовать:

- \`Object.getPrototypeOf(obj)\` — узнать прототип
- \`Object.setPrototypeOf(obj, proto)\` — установить прототип

Использование \`__proto__\` не рекомендуется (устаревший способ).

---

### Почему это важно

- Прототипы — фундаментальная часть ООП в JavaScript.
- Классы (class) — синтаксический сахар над прототипным наследованием.
- Понимание прототипов помогает писать более эффективный и понятный код.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const animal = { speak() { alert("Животное издаёт звук"); } };
    const dog = Object.create(animal);
    dog.name = "Шарик";
    dog.speak();
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const animal = { speak() { console.log("Животное издаёт звук"); } };
const dog = Object.create(animal);
dog.name = "Барбос";
dog.speak(); // "Животное издаёт звук"
  `.trim(),

  resources: [
    "https://learn.javascript.ru/prototype-inheritance",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
  ],
};
export const js_OOP_3 = {
  id: "js_OOP_3",
  title: "Конструкторы и свойство prototype",
  content: `
## Что такое функция-конструктор

Функция-конструктор — это обычная функция, которую вызывают с помощью \`new\`. Она создаёт новый объект и инициализирует его.

\`\`\`js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Аня", 30);
console.log(user1.name); // "Аня"
\`\`\`

- \`this\` в конструкторе указывает на создаваемый объект.
- Если не возвращать ничего явно — возвращается этот объект автоматически.

---

## Свойство prototype

Каждая функция в JS имеет специальное свойство \`.prototype\`. Когда вы создаёте объект через \`new\`, его внутренний прототип (\`[[Prototype]]\`) указывает на \`Function.prototype\`.

### Пример:

\`\`\`js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(\`Привет, \${this.name}\`);
};

const u = new User("Игорь");
u.sayHi(); // "Привет, Игорь"
\`\`\`

- Метод \`sayHi\` хранится в \`User.prototype\` и доступен всем экземплярам.

---

## Почему это удобно

- Методы определяются один раз, не копируются в каждый объект — экономится память.
- Можно добавлять методы даже после создания объектов: все экземпляры сразу их получают.
- Позволяет реализовать наследование.

---

## Пример: добавить метод после создания объектов

\`\`\`js
function Car(model) {
  this.model = model;
}

const car1 = new Car("Toyota");

Car.prototype.drive = function () {
  console.log(\`\${this.model} едет\`);
};

car1.drive(); // "Toyota едет"
\`\`\`

---

## Проверка принадлежности

\`object instanceof Constructor\` — проверяет, был ли объект создан этим конструктором.

\`\`\`js
car1 instanceof Car; // true
\`\`\`

---

## Итог

Функции-конструкторы + \`.prototype\` — основа ООП до появления классов.  
Методы и свойства в \`.prototype\` доступны всем экземплярам через цепочку прототипов.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.say = function () {
      alert("Привет, я " + this.name);
    };

    const cat = new Animal("Барсик");
    cat.say(); // Привет, я Барсик
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  console.log(\`Привет, \${this.name}\`);
};
const user = new User("Вася");
user.sayHi(); // "Привет, Вася"
  `.trim(),

  resources: [
    "https://learn.javascript.ru/constructor-new",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype",
  ],
};
export const js_OOP_4 = {
  id: "js_OOP_4",
  title: "Классы в JavaScript — class, constructor, extends, super",
  content: `
## Что такое класс

**Класс** — это синтаксический сахар над функцией-конструктором и прототипом. Упрощает создание объектов и наследование.

\`\`\`js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(\`Привет, \${this.name}\`);
  }
}

const u = new User("Оля", 25);
u.sayHi(); // "Привет, Оля"
\`\`\`

- Все методы, объявленные в классе, попадают в прототип (User.prototype).
- Метод \`constructor\` автоматически вызывается при \`new User()\`.

---

## Наследование: extends и super

Классы могут наследовать друг друга через \`extends\`.

\`\`\`js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} издаёт звук\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // вызывает конструктор родителя
    this.breed = breed;
  }
  bark() {
    console.log(\`\${this.name} лает\`);
  }
}

const dog = new Dog("Шарик", "овчарка");
dog.speak(); // "Шарик издаёт звук"
dog.bark();  // "Шарик лает"
\`\`\`

- \`super()\` обязательно в дочернем классе до обращения к \`this\`.
- Методы родителя доступны во всех экземплярах дочернего класса.

---

## Особенности классов

- Классы **не поднимаются** (hoisting) — использовать только после объявления.
- Методы класса не участвуют в переборе через \`for...in\`.
- Свойства объекта задаются в \`constructor\` (или через поля класса в новых стандартах).

---

## Почему использовать классы

- Читабельный и короткий синтаксис.
- Удобное наследование.
- Поддержка современными инструментами и стандартами.

`.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    class User {
      constructor(name) {
        this.name = name;
      }
      sayHi() {
        alert("Привет, " + this.name);
      }
    }
    const user = new User("Ваня");
    user.sayHi(); // Привет, Ваня
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} издаёт звук\`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(\`\${this.name} лает\`);
  }
}
const dog = new Dog("Шарик", "овчарка");
dog.speak(); // "Шарик издаёт звук"
dog.bark();  // "Шарик лает"
  `.trim(),

  resources: [
    "https://learn.javascript.ru/class",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes",
  ],
};
export const js_OOP_5 = {
  id: "js_OOP_5",
  title: "Методы классов, геттеры и сеттеры",
  content: `
## Методы классов

Методы, объявленные внутри класса, автоматически попадают в прототип:

\`\`\`js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  describe() {
    console.log(\`Круг радиусом \${this.radius}\`);
  }
}

const c = new Circle(5);
console.log(c.getArea()); // 78.539...
c.describe(); // Круг радиусом 5
\`\`\`

---

## Геттеры и сеттеры

Геттеры (get) и сеттеры (set) позволяют контролировать чтение и запись свойства, добавляя логику:

\`\`\`js
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length < 2) {
      console.log("Имя слишком короткое");
    } else {
      this._name = value;
    }
  }
}

const user = new User("Ира");
console.log(user.name); // ИРА

user.name = "А"; // Имя слишком короткое
user.name = "Анна";
console.log(user.name); // АННА
\`\`\`

**Особенности:**
- Геттер вызывается как свойство: \`obj.prop\`
- Сеттер вызывается при присваивании: \`obj.prop = value\`
- Геттер возвращает значение, сеттер принимает один аргумент

---

## Пример: температура

Геттеры и методы могут работать вместе:

\`\`\`js
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  convertToKelvin() {
    return this.celsius + 273.15;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
console.log(temp.convertToKelvin()); // 298.15
\`\`\`

---

## Когда использовать

- Геттеры и сеттеры — для контроля доступа к внутренним данным, валидации, преобразования значений.
- Методы — для операций и вычислений, которые требуют параметров или действий.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    class User {
      constructor(name) {
        this._name = name;
      }
      get name() {
        return this._name.toUpperCase();
      }
      set name(value) {
        if (value.length < 2) {
          alert("Имя слишком короткое");
        } else {
          this._name = value;
        }
      }
    }
    const user = new User("Таня");
    alert(user.name); // ТАНЯ
    user.name = "А"; // "Имя слишком короткое"
    user.name = "Оля";
    alert(user.name); // ОЛЯ
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  get diameter() {
    return this.radius * 2;
  }
  set diameter(value) {
    this.radius = value / 2;
  }
}
const c = new Circle(10);
console.log(c.diameter); // 20
c.diameter = 8;
console.log(c.radius); // 4
  `.trim(),

  resources: [
    "https://learn.javascript.ru/classes",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/set",
  ],
};
export const js_OOP_6 = {
  id: "js_OOP_6",
  title: "Сравнение ES5 и ES6 подходов к ООП",
  content: `
## ООП в JavaScript: ES5 vs ES6

До появления классов (ES6) в JavaScript использовались функции-конструкторы и прототипы. С приходом ES6 появился синтаксис class.

---

### 1. Создание объекта

**ES5:**
\`\`\`js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " издаёт звук.");
};

var dog = new Animal("Шарик");
dog.speak(); // Шарик издаёт звук.
\`\`\`

**ES6:**
\`\`\`js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " издаёт звук.");
  }
}

const dog = new Animal("Шарик");
dog.speak(); // Шарик издаёт звук.
\`\`\`

---

### 2. Наследование

**ES5:**
\`\`\`js
function Dog(name, breed) {
  Animal.call(this, name); // вызов родителя
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log(this.name + " лает.");
};
\`\`\`

**ES6:**
\`\`\`js
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // вызов родителя
    this.breed = breed;
  }
  bark() {
    console.log(this.name + " лает.");
  }
}
\`\`\`

---

### 3. Читаемость и удобство

- ES6-код компактнее и понятнее
- Нет ручного управления prototype
- super — явное обращение к родителю

---

### 4. Что внутри?

ES6-классы — синтаксический сахар. Под капотом остаются функции и прототипы:
\`\`\`js
typeof Animal; // 'function'
typeof Dog;    // 'function'
\`\`\`

---

### 5. Таблица сравнения

| Особенность   | ES5                  | ES6                           |
| ------------- | -------------------- | ----------------------------- |
| Синтаксис     | Функции + прототипы  | Классы и ключевые слова       |
| Наследование  | Object.create + call | extends + super               |
| Удобство      | Сложнее              | Проще и читаемее              |
| Совместимость | Везде                | Современный браузер           |

---

## Итог

ES6-классы делают ООП более удобным, но в основе всегда лежит прототипное наследование.
  `.trim(),

  codeExample: `
<!-- Пример: ES5 vs ES6 в HTML -->
<script>
  // ES5: функция-конструктор
  function Car(model) {
    this.model = model;
  }
  Car.prototype.drive = function() {
    alert(this.model + " едет (ES5)");
  };
  var car1 = new Car("Toyota");
  car1.drive();

  // ES6: класс
  class Car2 {
    constructor(model) {
      this.model = model;
    }
    drive() {
      alert(this.model + " едет (ES6)");
    }
  }
  const car2 = new Car2("Mazda");
  car2.drive();
</script>
  `.trim(),

  codeExampleJS: `
/* ES5 */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return this.name + " издаёт звук.";
};

/* ES6 */
class Animal2 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " издаёт звук.";
  }
}
  `.trim(),

  resources: [
    "https://learn.javascript.ru/classes",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes",
    "https://learn.javascript.ru/es-class",
  ],
};
