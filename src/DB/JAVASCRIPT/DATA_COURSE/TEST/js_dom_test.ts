export const js_dom_test = {
  id: 515,
  name: "Работа с DOM",
  category: "JavaScript",
  ques: [
    {
      id: 1,
      name: "Что такое DOM?",
      variants: [
        "Объектная модель HTML-документа",
        "База данных сайта",
        "CSS-фреймворк",
      ],
      correct: [0],
    },
    {
      id: 2,
      name: "Зачем JavaScript использует DOM?",
      variants: [
        "Для управления содержимым и стилями страницы",
        "Для хранения данных пользователя",
        "Для обработки сетевых запросов",
      ],
      correct: [0],
    },
    {
      id: 3,
      name: "Что произойдет при выполнении кода: p.textContent = 'До встречи!'?",
      variants: [
        "Изменится текст внутри элемента p",
        "Добавится новый элемент p",
        "Удалится элемент p",
      ],
      correct: [0],
    },
    {
      id: 4,
      name: "DOM — это...",
      variants: [
        "Интерфейс между JavaScript и HTML",
        "Библиотека визуализации",
        "Язык программирования",
      ],
      correct: [0],
    },
    {
      id: 5,
      name: "Какую структуру имеет DOM?",
      variants: ["Иерархическую", "Последовательную", "Сетевую"],
      correct: [0],
    },
    {
      id: 6,
      name: "Что делает метод getElementById?",
      variants: [
        "Находит элемент по его id",
        "Удаляет элемент по id",
        "Создаёт элемент с заданным id",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Что возвращает querySelectorAll?",
      variants: [
        "NodeList из всех подходящих элементов",
        "Один элемент",
        "Массив id элементов",
      ],
      correct: [0],
    },
    {
      id: 8,
      name: "Какой метод вернёт первый элемент по CSS-селектору?",
      variants: ["querySelector", "getElementById", "querySelectorAll"],
      correct: [0],
    },
    {
      id: 9,
      name: "Как найти все чекбоксы на странице?",
      variants: [
        "querySelectorAll(\"input[type='checkbox']\")",
        "getElementsByTagName('checkbox')",
        "getElementById('checkbox')",
      ],
      correct: [0],
    },
    {
      id: 10,
      name: "Если элемент не найден, методы getElementById и querySelector вернут:",
      variants: ["null", "undefined", "ошибку"],
      correct: [0],
    },
    {
      id: 11,
      name: "Для чего используется textContent?",
      variants: [
        "Изменения текста внутри элемента",
        "Изменения HTML-разметки",
        "Изменения значения input",
      ],
      correct: [0],
    },
    {
      id: 12,
      name: "Что делает innerHTML?",
      variants: [
        "Позволяет вставлять HTML-разметку",
        "Изменяет только текст",
        "Работает только с input",
      ],
      correct: [0],
    },
    {
      id: 13,
      name: "Как получить значение из поля input?",
      variants: ["element.value", "element.textContent", "element.innerHTML"],
      correct: [0],
    },
    {
      id: 14,
      name: "Где используется value?",
      variants: [
        "В input, textarea и select",
        "В любом HTML-элементе",
        "Только в div",
      ],
      correct: [0],
    },
    {
      id: 15,
      name: "Какое свойство безопасно использовать для вывода текста без HTML?",
      variants: ["textContent", "innerHTML", "value"],
      correct: [0],
    },
    {
      id: 16,
      name: "Что делает element.style?",
      variants: [
        "Изменяет инлайновые стили элемента",
        "Создаёт новый элемент",
        "Удаляет стиль",
      ],
      correct: [0],
    },
    {
      id: 17,
      name: "Какой метод classList используется для добавления класса?",
      variants: ["add", "remove", "toggle"],
      correct: [0],
    },
    {
      id: 18,
      name: "Что делает classList.toggle?",
      variants: [
        "Добавляет или убирает класс",
        "Удаляет элемент",
        "Изменяет стиль напрямую",
      ],
      correct: [0],
    },
    {
      id: 19,
      name: "Какой способ предпочтительнее для масштабируемой стилизации?",
      variants: ["classList", "style", "innerHTML"],
      correct: [0],
    },
    {
      id: 20,
      name: "Что делает classList.remove('hidden')?",
      variants: [
        "Показывает скрытый элемент",
        "Удаляет элемент",
        "Меняет id элемента",
      ],
      correct: [0],
    },
    {
      id: 21,
      name: "Как создать новый HTML-элемент?",
      variants: [
        "document.createElement('tag')",
        "document.newElement('tag')",
        "document.append('tag')",
      ],
      correct: [0],
    },
    {
      id: 22,
      name: "Что делает append?",
      variants: [
        "Добавляет элемент в конец родителя",
        "Удаляет элемент",
        "Изменяет стиль элемента",
      ],
      correct: [0],
    },
    {
      id: 23,
      name: "Что делает метод remove()?",
      variants: [
        "Удаляет элемент из DOM",
        "Скрывает элемент",
        "Очищает текст элемента",
      ],
      correct: [0],
    },
    {
      id: 24,
      name: "Как удалить элемент, имея только его родителя и самого потомка?",
      variants: [
        "parent.removeChild(child)",
        "child.remove(parent)",
        "document.removeElement(child)",
      ],
      correct: [0],
    },
    {
      id: 25,
      name: "Когда созданный элемент появится на странице?",
      variants: [
        "После добавления в DOM",
        "Сразу после createElement",
        "После вызова textContent",
      ],
      correct: [0],
    },
    {
      id: 26,
      name: "Что делает addEventListener?",
      variants: [
        "Назначает обработчик события",
        "Создаёт HTML-элемент",
        "Удаляет элемент",
      ],
      correct: [0],
    },
    {
      id: 27,
      name: "Что такое event.target?",
      variants: [
        "Элемент, по которому произошло событие",
        "Тип события",
        "Ссылка на страницу",
      ],
      correct: [0],
    },
    {
      id: 28,
      name: "Что делает preventDefault?",
      variants: [
        "Отменяет действие по умолчанию",
        "Удаляет элемент",
        "Создаёт обработчик события",
      ],
      correct: [0],
    },
    {
      id: 29,
      name: "Какой обработчик используется при отправке формы?",
      variants: ["submit", "input", "click"],
      correct: [0],
    },
    {
      id: 30,
      name: "Что произойдет при event.preventDefault() в форме?",
      variants: [
        "Форма не будет отправлена",
        "Форма удалится",
        "Форма очистится",
      ],
      correct: [0],
    },
  ],
};
