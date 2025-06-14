export const js_this_1 = {
  id: "js_this_1",
  title: "Что такое контекст вызова (this)",
  content: `
## Что такое контекст вызова?

**Контекст вызова** — это объект, к которому привязано ключевое слово \`this\` в момент вызова функции.

- Контекст не определяется в момент написания функции.
- Контекст устанавливается **в момент вызова** функции.

---

## Примеры — как определяется контекст

\`\`\`js
function showName() {
  console.log(this.name);
}

const user = {
  name: "Анна",
  show: showName
};

const admin = {
  name: "Павел",
  show: showName
};

user.show();   // "Анна"
admin.show();  // "Павел"
\`\`\`

> Одна и та же функция, но this указывает на разный объект: на user или на admin. Всё зависит от того, кто вызывает функцию.

---

## Глобальный контекст

Если функция вызывается вне объекта — \`this\` ссылается на глобальный объект (в браузере — \`window\`):

\`\`\`js
function sayHello() {
  console.log(this); // window (в браузере)
}

sayHello();
\`\`\`

---

## Контекст во вложенных функциях

Вложенные функции **теряют** контекст:

\`\`\`js
const user = {
  name: "Игорь",
  sayHi() {
    function inner() {
      console.log(this.name); // undefined
    }
    inner();
  }
};

user.sayHi();
\`\`\`
> Внутри \`inner\` — свой \`this\`, не связанный с user.

---

## Итог

- Контекст вызова — это то, на что ссылается \`this\` **в момент вызова** функции.
- Понимание контекста важно для правильной работы с объектами и методами.
- В следующих темах: правила, потери контекста, стрелочные функции, классы.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    function showName() {
      console.log(this.name);
    }

    const user = { name: "Анна", show: showName };
    const admin = { name: "Павел", show: showName };

    user.show();   // "Анна"
    admin.show();  // "Павел"
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
function showName() {
  console.log(this.name);
}

const user = { name: "Анна", show: showName };
const admin = { name: "Павел", show: showName };

user.show();   // "Анна"
admin.show();  // "Павел"
  `.trim(),

  resources: [
    "https://learn.javascript.ru/object-methods",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this",
  ],
};
export const js_this_2 = {
  id: "js_this_2",
  title: "Значение this по умолчанию",
  content: `
## Что значит "по умолчанию"?

Когда функция вызывается **без объекта**, \`this\` ссылается на глобальный объект:

- В браузере это \`window\`
- В строгом режиме ('use strict') — \`this\` будет \`undefined\`

---

### Примеры

#### Обычный режим

\`\`\`js
function show() {
  console.log(this); // window
}

show();
\`\`\`

#### Строгий режим

\`\`\`js
"use strict";
function show() {
  console.log(this); // undefined
}
show();
\`\`\`

---

## Если функция внутри объекта

Если функция вызвана **как метод объекта**, \`this\` указывает на этот объект:

\`\`\`js
const user = {
  name: "Ольга",
  greet() {
    console.log(this.name);
  }
};
user.greet(); // "Ольга"
\`\`\`

---

## Потеря контекста при передаче функции

Если функцию "отрывают" от объекта — она теряет свой контекст:

\`\`\`js
const user = {
  name: "Артем",
  sayHi() {
    console.log(this.name);
  }
};

const greet = user.sayHi;
greet(); // undefined (в строгом режиме) или window.name
\`\`\`

---

## Как избежать потери контекста?

- Использовать \`.bind()\`, \`.call()\`, \`.apply()\` (разберём далее)
- Не передавать методы как отдельные функции, если нужен контекст
- Использовать стрелочные функции внутри (подходит не всегда)

---

## Итог

- \`this\` по умолчанию — глобальный объект (\`window\`) или \`undefined\` в строгом режиме.
- Если метод "оторвали" от объекта, контекст теряется.
- Контекст всегда определяется в момент вызова функции.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    function show() {
      console.log(this);
    }
    show(); // window

    "use strict";
    function strictShow() {
      console.log(this);
    }
    strictShow(); // undefined
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
function show() {
  console.log(this);
}
show(); // window

"use strict";
function strictShow() {
  console.log(this);
}
strictShow(); // undefined

const user = {
  name: "Артем",
  sayHi() {
    console.log(this.name);
  }
};
const greet = user.sayHi;
greet(); // undefined
  `.trim(),

  resources: [
    "https://learn.javascript.ru/object-methods#this",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this",
  ],
};
export const js_this_3 = {
  id: "js_this_3",
  title: "this в методах объекта",
  content: `
## Как работает this внутри метода объекта

Если функция объявлена внутри объекта и вызывается **как метод** — \`this\` ссылается на этот объект.

---

### Пример метода

\`\`\`js
const user = {
  name: "Иван",
  sayHi() {
    console.log(this.name);
  }
};
user.sayHi(); // "Иван"
\`\`\`
- Здесь \`this\` внутри метода указывает на \`user\`.

---

### Вложенные объекты и this

Если вызвать метод у вложенного объекта, \`this\` будет ссылаться на него:

\`\`\`js
const user = {
  name: "Мария",
  info: {
    age: 30,
    show() {
      console.log(this.age);
    }
  }
};
user.info.show(); // 30
\`\`\`
- В этом случае \`this\` — это \`user.info\`, не \`user\`.

---

### this зависит от вызова

Если "оторвать" метод от объекта, \`this\` теряется:

\`\`\`js
const user = {
  name: "Кирилл",
  sayHi() {
    console.log(this.name);
  }
};
const fn = user.sayHi;
fn(); // undefined (в строгом режиме)
\`\`\`
- Здесь \`this\` не указывает на \`user\`, потому что вызов идет без объекта.

---

## Итог

- В методе объекта \`this\` указывает на сам объект.
- Вложенность важна: \`this\` — это тот объект, у которого вызван метод.
- Если передать метод как функцию, контекст теряется.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const user = {
      name: "Иван",
      sayHi() {
        console.log(this.name);
      }
    };
    user.sayHi(); // Иван

    const another = { age: 30, show() { console.log(this.age); } };
    another.show(); // 30

    const fn = user.sayHi;
    fn(); // undefined
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const user = {
  name: "Иван",
  sayHi() {
    console.log(this.name);
  }
};
user.sayHi(); // "Иван"

const nested = {
  value: 42,
  inner: {
    value: 100,
    show() {
      console.log(this.value);
    }
  }
};
nested.inner.show(); // 100

const fn = user.sayHi;
fn(); // undefined (или window.name в нестрогом режиме)
  `.trim(),

  resources: [
    "https://learn.javascript.ru/object-methods#metody-obekta",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this",
  ],
};
export const js_this_4 = {
  id: "js_this_4",
  title: "Потеря контекста и bind",
  content: `
## Что такое потеря контекста

Контекст (\`this\`) может "потеряться", если метод объекта вызывается **отдельно** от объекта.

---

### Пример: потеря контекста

\`\`\`js
const user = {
  name: "Анна",
  sayHi() {
    console.log(this.name);
  }
};

const greet = user.sayHi;
greet(); // undefined (или window.name в нестрогом режиме)
\`\`\`
- В переменной \`greet\` уже нет связи с объектом \`user\`.
- \`this\` становится \`undefined\` (или window).

---

## Решение: bind

Метод \`.bind()\` позволяет **жёстко привязать** \`this\` к нужному объекту.

\`\`\`js
const greetBound = user.sayHi.bind(user);
greetBound(); // "Анна"
\`\`\`

- \`bind\` возвращает новую функцию с фиксированным контекстом.
- Оригинальная функция не вызывается сразу.

---

### bind для обычных функций

\`\`\`js
function showThis() {
  console.log(this);
}
const bound = showThis.bind({ a: 1 });
bound(); // { a: 1 }
\`\`\`

---

## Частое применение: задержка вызова

\`\`\`js
const user = {
  name: "Сергей",
  sayHi() {
    console.log(this.name);
  }
};

setTimeout(user.sayHi, 1000);           // undefined (this потерян)
setTimeout(user.sayHi.bind(user), 1000); // "Сергей"
\`\`\`

---

## Итог

- \`this\` теряется при отделении метода от объекта.
- \`bind\` решает проблему, возвращая новую функцию с нужным \`this\`.
- Особенно важно при работе с колбэками, обработчиками, таймерами.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const user = {
      name: "Анна",
      sayHi() {
        console.log(this.name);
      }
    };

    // Потеря контекста
    const greet = user.sayHi;
    greet(); // undefined

    // bind
    const greetBound = user.sayHi.bind(user);
    greetBound(); // Анна

    // Таймер с bind
    setTimeout(user.sayHi, 500);            // undefined
    setTimeout(user.sayHi.bind(user), 1000); // Анна
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const user = {
  name: "Анна",
  sayHi() {
    console.log(this.name);
  }
};

const greet = user.sayHi;
greet(); // undefined

const greetBound = user.sayHi.bind(user);
greetBound(); // "Анна"

setTimeout(user.sayHi, 500);            // undefined
setTimeout(user.sayHi.bind(user), 1000); // "Анна"
  `.trim(),

  resources: [
    "https://learn.javascript.ru/bind",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_objects/Function/bind",
  ],
};
export const js_this_5 = {
  id: "js_this_5",
  title: "this в стрелочных функциях",
  content: `
## Как работает \`this\` в стрелочных функциях

У стрелочных функций **нет собственного \`this\`**.  
Они берут значение \`this\` из внешней области, где объявлены.

---

### Пример: стрелочная функция внутри метода

\`\`\`js
const user = {
  name: "Оля",
  sayHi() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

user.sayHi(); // "Оля"
\`\`\`
- Внутри \`sayHi\` создаётся стрелочная функция \`arrow\`.
- \`arrow\` берёт \`this\` из внешнего метода — это \`user\`.

---

### Сравнение с обычной функцией

\`\`\`js
const user = {
  name: "Оля",
  sayHi() {
    function regular() {
      console.log(this.name);
    }
    regular();
  }
};

user.sayHi(); // undefined
\`\`\`
- Обычная функция \`regular\` теряет контекст — \`this\` становится \`undefined\` (в строгом режиме).

---

## Где полезны стрелочные функции

- В колбэках (таймеры, события):

\`\`\`js
const user = {
  name: "Кирилл",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
user.greet(); // "Кирилл"
\`\`\`

- В методах массивов:

\`\`\`js
const team = {
  title: "Team A",
  members: ["Анна", "Игорь"],
  showMembers() {
    this.members.forEach(member => {
      console.log(\`\${member} from \${this.title}\`);
    });
  }
};

team.showMembers();
// Анна from Team A
// Игорь from Team A
\`\`\`

---

## Итог

- Стрелочные функции **не имеют своего \`this\`** — всегда используют внешний контекст.
- Отлично подходят для колбэков, чтобы не потерять \`this\` внутри методов объекта.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    const user = {
      name: "Оля",
      sayHi() {
        // Стрелочная функция сохранит внешний this
        const arrow = () => {
          document.body.innerHTML += this.name + "<br>";
        };
        arrow();

        // Обычная функция потеряет контекст
        function regular() {
          document.body.innerHTML += (this && this.name) + "<br>";
        }
        regular();
      }
    };
    user.sayHi();
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const team = {
  title: "Team A",
  members: ["Анна", "Игорь"],
  showMembers() {
    this.members.forEach(member => {
      console.log(\`\${member} from \${this.title}\`);
    });
  }
};

team.showMembers();
// Анна from Team A
// Игорь from Team A
  `.trim(),

  resources: [
    "https://learn.javascript.ru/arrow-functions",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
  ],
};
export const js_this_6 = {
  id: "js_this_6",
  title: "call, apply и bind",
  content: `
## Зачем нужны \`call\`, \`apply\`, \`bind\`

Эти методы позволяют **вручную задать \`this\`** при вызове функции.
Особенно полезно, если функцию нужно вызвать в контексте другого объекта.

---

### \`call\`
Вызывает функцию с указанным \`this\` и передаёт аргументы через запятую.

\`\`\`js
function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}

const user = { name: "Ира" };

greet.call(user, "Привет"); // "Привет, Ира"
\`\`\`

---

### \`apply\`
Работает как \`call\`, но аргументы передаются **массивом**.

\`\`\`js
greet.apply(user, ["Здравствуйте"]); // "Здравствуйте, Ира"
\`\`\`

---

### \`bind\`
**Не вызывает функцию сразу**, а возвращает новую функцию с привязанным \`this\`.

\`\`\`js
const boundGreet = greet.bind(user, "Добрый день");
boundGreet(); // "Добрый день, Ира"
\`\`\`

---

## Разница между \`call\`, \`apply\` и \`bind\`

| Метод   | Вызов функции сразу | Как передаются аргументы |
| ------- | ------------------- | ------------------------ |
| call    | Да                  | Через запятую            |
| apply   | Да                  | В виде массива           |
| bind    | Нет                 | Через запятую (или позже)|

---

### Пример: потеря и восстановление контекста

\`\`\`js
const person = {
  name: "Сергей",
  sayHi() {
    console.log(this.name);
  }
};

const hi = person.sayHi;
hi(); // undefined (this потерян)

hi.call(person); // "Сергей"
\`\`\`

---

## Итог

- \`call\` и \`apply\` вызывают функцию сразу с нужным \`this\`.
- \`bind\` возвращает новую функцию с жёстко привязанным \`this\`.
- Используются для передачи контекста или если функция "отрывается" от объекта.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <script>
    function greet(greeting) {
      document.body.innerHTML += \`\${greeting}, \${this.name}<br>\`;
    }

    const user = { name: "Ира" };
    greet.call(user, "Привет");
    greet.apply(user, ["Здравствуйте"]);
    const bound = greet.bind(user, "Добрый день");
    bound();
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
const person = {
  name: "Сергей",
  sayHi() {
    console.log(this.name);
  }
};

const hi = person.sayHi;
hi(); // undefined (this потерян)
hi.call(person); // Сергей
  `.trim(),

  resources: [
    "https://learn.javascript.ru/call-apply-decorators",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind",
  ],
};
export const js_this_7 = {
  id: "js_this_7",
  title: "this в классах",
  content: `
## Классы в JavaScript

Классы — синтаксический сахар над прототипами. Они используются для создания однотипных объектов с одинаковой структурой и методами.

\`\`\`js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(\`Привет, \${this.name}\`);
  }
}

const user = new User("Аня");
user.sayHi(); // "Привет, Аня"
\`\`\`

---

## Как работает \`this\` в методах класса

Внутри метода класса \`this\` указывает на экземпляр класса (на объект, созданный через \`new\`).

\`\`\`js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const c = new Counter();
c.increment();
console.log(c.count); // 1
\`\`\`

---

## Потеря контекста в методах класса

Если метод класса передать как отдельную функцию, \`this\` теряется:

\`\`\`js
const btn = document.querySelector("button");

class App {
  constructor() {
    this.message = "Нажато!";
  }
  handleClick() {
    console.log(this.message);
  }
}

const app = new App();
btn.addEventListener("click", app.handleClick); // undefined
\`\`\`

---

## Как избежать потери контекста

1. Использовать \`.bind(this)\`:

\`\`\`js
btn.addEventListener("click", app.handleClick.bind(app)); // "Нажато!"
\`\`\`

2. Или стрелочную функцию-обёртку:

\`\`\`js
btn.addEventListener("click", () => app.handleClick());
\`\`\`

---

## Закрепим

- В методах класса \`this\` — это экземпляр, созданный через \`new\`.
- При потере контекста используйте \`.bind\` или стрелочную функцию.
- В конструкторе \`this\` — это создаваемый объект.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<body>
  <button>Кликни меня</button>
  <script>
    class App {
      constructor() {
        this.message = "Нажато!";
      }
      handleClick() {
        alert(this.message);
      }
    }
    const app = new App();
    const btn = document.querySelector("button");
    // Без bind: btn.addEventListener("click", app.handleClick); // undefined
    btn.addEventListener("click", app.handleClick.bind(app)); // "Нажато!"
  </script>
</body>
</html>
  `.trim(),

  codeExampleJS: `
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const c = new Counter();
c.increment();
console.log(c.count); // 1
  `.trim(),

  resources: [
    "https://learn.javascript.ru/class",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes",
  ],
};
