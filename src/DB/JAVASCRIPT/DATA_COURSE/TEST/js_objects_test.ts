export const js_objects_test = {
  id: 506,
  name: "Объекты в JavaScript",
  category: "JavaScript",
  ques: [
    {
      id: 1,
      name: "Что такое объект в JavaScript?",
      variants: [
        "Структура для хранения пар ключ-значение",
        "Переменная для хранения только чисел",
        "Функция для вывода данных",
      ],
      correct: [0],
    },
    {
      id: 2,
      name: "Как создать пустой объект?",
      variants: ["let obj = {};", "let obj = [];", "let obj = new Array();"],
      correct: [0],
    },
    {
      id: 3,
      name: "Что такое свойство объекта?",
      variants: [
        "Ключ и значение внутри объекта",
        "Имя функции",
        "Элемент массива",
      ],
      correct: [0],
    },
    {
      id: 4,
      name: "Как получить значение свойства name из объекта user?",
      variants: ["user.name", "user(name)", "user->name"],
      correct: [0],
    },
    {
      id: 5,
      name: "Как получить свойство с пробелом в имени ('full name')?",
      variants: [`user["full name"]`, "user.full name", "user->full name"],
      correct: [0],
    },
    {
      id: 6,
      name: "Что вернёт обращение к несуществующему свойству объекта?",
      variants: ["undefined", "null", "Ошибка"],
      correct: [0],
    },
    {
      id: 7,
      name: "Как добавить новое свойство к объекту?",
      variants: [
        'obj.newProp = "значение";',
        "add(obj, 'newProp', 'значение')",
        "obj.add(newProp, 'значение')",
      ],
      correct: [0],
    },
    {
      id: 8,
      name: "Как удалить свойство age из объекта user?",
      variants: ["delete user.age;", "remove user.age;", "user.age = delete;"],
      correct: [0],
    },
    {
      id: 9,
      name: "Как проверить наличие свойства 'name' в объекте user?",
      variants: [`"name" in user`, "user.has(name)", "user.exists('name')"],
      correct: [0],
    },
    {
      id: 10,
      name: "Как получить город пользователя user?",
      variants: [
        "user.address.city",
        "user->address->city",
        "user[address][city]",
      ],
      correct: [0],
    },
    {
      id: 11,
      name: "Что произойдёт при обращении user.address.city, если у user нет address?",
      variants: [
        "Ошибка (Cannot read property 'city' of undefined)",
        "Вернётся undefined",
        "Вернётся null",
      ],
      correct: [0],
    },
    {
      id: 12,
      name: "Как безопасно получить city из user, если address может отсутствовать?",
      variants: [
        "user.address?.city",
        "user.address.city || ''",
        "user?.address.city",
      ],
      correct: [0],
    },
    {
      id: 13,
      name: "Что будет при присваивании let b = a; где a — объект?",
      variants: [
        "b и a ссылаются на один объект",
        "b — копия a, но не связан с ним",
        "a становится недоступным",
      ],
      correct: [0],
    },
    {
      id: 14,
      name: "Как сделать поверхностную копию объекта?",
      variants: [
        "let copy = { ...obj };",
        "let copy = obj;",
        "let copy = obj.clone();",
      ],
      correct: [0],
    },
    {
      id: 15,
      name: "Как добавить свойство, имя которого хранится в переменной key?",
      variants: [
        "obj[key] = value;",
        "obj.key = value;",
        "set(obj, key, value);",
      ],
      correct: [0],
    },
    {
      id: 16,
      name: "В чём ошибка в коде: user.key = 'Значение'; (если key — переменная)?",
      variants: [
        "Создаст свойство с именем 'key', а не с содержимым переменной",
        "Нельзя использовать переменные для ключей",
        "Произойдёт ошибка выполнения",
      ],
      correct: [0],
    },
    {
      id: 17,
      name: "Что такое метод объекта?",
      variants: [
        "Функция, записанная как свойство объекта",
        "Свойство с числовым значением",
        "Переменная внутри функции",
      ],
      correct: [0],
    },
    {
      id: 18,
      name: "Как вызвать метод sayHello объекта user?",
      variants: ["user.sayHello()", "user.sayHello", "sayHello.user()"],
      correct: [0],
    },
    {
      id: 19,
      name: "Как реализовать метод set(key, value) внутри объекта?",
      variants: [
        "this[key] = value;",
        "this.key = value;",
        "key.value = this;",
      ],
      correct: [0],
    },
    {
      id: 20,
      name: "Что вернёт метод has(key), если свойства нет?",
      variants: ["false", "true", "undefined"],
      correct: [0],
    },
    {
      id: 21,
      name: "Что делает цикл for...in?",
      variants: [
        "Перебирает все ключи объекта",
        "Перебирает все значения массива",
        "Создаёт новый объект",
      ],
      correct: [0],
    },
    {
      id: 22,
      name: "Что возвращает Object.keys(obj)?",
      variants: [
        "Массив всех ключей объекта",
        "Массив всех значений объекта",
        "Массив пар [ключ, значение]",
      ],
      correct: [0],
    },
    {
      id: 23,
      name: "Что возвращает Object.entries(obj)?",
      variants: [
        "Массив пар [ключ, значение]",
        "Массив только ключей",
        "Массив только значений",
      ],
      correct: [0],
    },
    {
      id: 24,
      name: "Что такое window в браузере?",
      variants: [
        "Глобальный объект, представляющий окно браузера",
        "HTML-элемент",
        "Метод вывода информации",
      ],
      correct: [0],
    },
    {
      id: 25,
      name: "Как сделать глобальную переменную username (без let/const/var)?",
      variants: [
        "username = 'Анна';",
        "let username = 'Анна';",
        "var username = 'Анна';",
      ],
      correct: [0],
    },
    {
      id: 26,
      name: "Что будет результатом вызова window.greet(), если определена function greet() {}?",
      variants: [
        "Вызовется функция greet",
        "Будет ошибка",
        "Вернётся undefined",
      ],
      correct: [0],
    },
    {
      id: 27,
      name: "Как получить ширину контентной области окна браузера?",
      variants: ["window.innerWidth", "window.width", "window.screen.width"],
      correct: [0],
    },
    {
      id: 28,
      name: "Что делает window.location.reload()?",
      variants: [
        "Перезагружает страницу",
        "Переходит по новой ссылке",
        "Сохраняет данные в window",
      ],
      correct: [0],
    },
    {
      id: 29,
      name: `Что выведет этот код?
let a = { name: "Вася" };
let b = a;
b.name = "Петя";
console.log(a.name);`,
      variants: ['"Петя"', '"Вася"', "undefined"],
      correct: [0],
    },
    {
      id: 30,
      name: `Что выведет этот код?
let user = { name: "Анна" };
delete user.name;
console.log("name" in user);`,
      variants: ["false", "true", "undefined"],
      correct: [0],
    },
  ],
};
