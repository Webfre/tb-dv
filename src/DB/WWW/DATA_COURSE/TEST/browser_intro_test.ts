export const browser_intro_test = {
  id: 1,
  name: "Основы браузера и интернета",
  category: "Работа браузера",
  ques: [
    {
      id: 1,
      name: "Что такое браузер?",
      variants: [
        "Программа для создания сайтов",
        "Программа для просмотра и взаимодействия с веб-страницами",
        "Сервер, который обслуживает сайты",
      ],
      correct: [1],
    },
    {
      id: 2,
      name: "Что делает браузер при вводе адреса сайта?",
      variants: [
        "Обращается к серверу напрямую без проверки",
        "Создаёт локальную копию сайта",
        "Обращается к DNS, получает IP и отправляет HTTP-запрос",
      ],
      correct: [2],
    },
    {
      id: 3,
      name: "Какая функция у DNS?",
      variants: [
        "Зашифровывает трафик",
        "Переводит доменное имя в IP-адрес",
        "Отправляет JavaScript-код на сервер",
      ],
      correct: [1],
    },
    {
      id: 4,
      name: "Что такое HTTP?",
      variants: [
        "Формат HTML-документов",
        "Язык программирования для браузеров",
        "Протокол обмена данными между клиентом и сервером",
      ],
      correct: [2],
    },
    {
      id: 5,
      name: "Чем отличается HTTPS от HTTP?",
      variants: [
        "HTTPS быстрее, чем HTTP",
        "HTTPS работает только в мобильных браузерах",
        "HTTPS использует шифрование для безопасности",
      ],
      correct: [2],
    },
    {
      id: 6,
      name: "Что делает Rendering Engine?",
      variants: [
        "Выполняет JavaScript",
        "Рисует веб-страницу из HTML и CSS",
        "Загружает ресурсы с сервера",
      ],
      correct: [1],
    },
    {
      id: 7,
      name: "Какой компонент отвечает за выполнение JavaScript-кода?",
      variants: ["Browser Engine", "JavaScript Engine", "UI Backend"],
      correct: [1],
    },
    {
      id: 8,
      name: "Что делает метод fetch в JavaScript?",
      variants: [
        "Создаёт элемент DOM",
        "Отправляет HTTP-запрос",
        "Выполняет цикл",
      ],
      correct: [1],
    },
    {
      id: 9,
      name: "Что делает движок V8?",
      variants: [
        "Обрабатывает CSS",
        "Исполняет JavaScript в браузере",
        "Загружает изображения",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Какой движок используется в Google Chrome?",
      variants: ["Gecko", "WebKit", "Blink"],
      correct: [2],
    },
    {
      id: 11,
      name: "Зачем frontend-разработчику понимать, как работает браузер?",
      variants: [
        "Чтобы разрабатывать серверную логику",
        "Чтобы делать кроссбраузерные и быстрые интерфейсы",
        "Чтобы использовать больше CSS",
      ],
      correct: [1],
    },
    {
      id: 12,
      name: "Где браузер хранит локальные данные пользователя?",
      variants: ["JavaScript Engine", "localStorage, cookies", "UI Backend"],
      correct: [1],
    },
    {
      id: 13,
      name: "Что делает компонент Networking в браузере?",
      variants: [
        "Хранит локальные данные",
        "Загружает ресурсы по сети (HTML, CSS, JS и др.)",
        "Рисует интерфейс пользователя",
      ],
      correct: [1],
    },
    {
      id: 14,
      name: "Какая часть браузера отвечает за связь UI и рендерингом страницы?",
      variants: ["JavaScript Engine", "Browser Engine", "UI Backend"],
      correct: [1],
    },
    {
      id: 15,
      name: "Какие браузеры используют движок Blink?",
      variants: [
        "Firefox, Safari",
        "Chrome, Edge, Opera, Яндекс.Браузер",
        "Safari, Edge",
      ],
      correct: [1],
    },
  ],
};
