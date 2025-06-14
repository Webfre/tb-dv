export const js_localStorage_test = {
  id: 510,
  name: "Хранилище данных в браузере (localStorage и sessionStorage)",
  category: "JavaScript",
  ques: [
    {
      id: 1,
      name: "Что такое localStorage в браузере?",
      variants: [
        "Постоянное хранилище данных на стороне пользователя",
        "Временное хранилище до перезагрузки страницы",
        "Место хранения cookies",
      ],
      correct: [0],
    },
    {
      id: 2,
      name: "Для чего удобно использовать хранилище в браузере?",
      variants: [
        "Сохранение настроек пользователя между визитами",
        "Выполнение анимаций",
        "Загрузка скриптов",
      ],
      correct: [0],
    },
    {
      id: 3,
      name: "В чем основное отличие localStorage от sessionStorage?",
      variants: [
        "localStorage сохраняет данные навсегда, sessionStorage — до закрытия вкладки",
        "sessionStorage доступен на всех сайтах",
        "localStorage может хранить только числа",
      ],
      correct: [0],
    },
    {
      id: 4,
      name: "Когда sessionStorage очищается?",
      variants: [
        "После закрытия вкладки",
        "После перезагрузки страницы",
        "Только вручную",
      ],
      correct: [0],
    },
    {
      id: 5,
      name: "Что делает метод localStorage.setItem('theme', 'dark')?",
      variants: [
        "Сохраняет значение 'dark' под ключом 'theme'",
        "Удаляет значение по ключу 'theme'",
        "Получает значение по ключу 'theme'",
      ],
      correct: [0],
    },
    {
      id: 6,
      name: "Как удалить конкретное значение из localStorage?",
      variants: [
        "localStorage.removeItem('ключ')",
        "localStorage.clear('ключ')",
        "localStorage.delete('ключ')",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Что вернет localStorage.getItem('user'), если ключ не найден?",
      variants: ["null", "undefined", "0"],
      correct: [0],
    },
    {
      id: 8,
      name: "Как полностью очистить все значения в sessionStorage?",
      variants: [
        "sessionStorage.clear()",
        "sessionStorage.removeAll()",
        "sessionStorage.deleteAll()",
      ],
      correct: [0],
    },
    {
      id: 9,
      name: "Какой тип данных хранит localStorage?",
      variants: ["Только строки", "Только числа", "Любые типы (автоматически)"],
      correct: [0],
    },
    {
      id: 10,
      name: "Что произойдет, если попытаться сохранить объект напрямую?",
      variants: [
        'Будет сохранено значение "[object Object]"',
        "Объект сохранится как есть",
        "Выдаст ошибку",
      ],
      correct: [0],
    },
    {
      id: 11,
      name: "Как сохранить массив объектов в localStorage?",
      variants: [
        "Преобразовать его в строку через JSON.stringify()",
        "Сохранить напрямую",
        "Разделить элементы через запятую",
      ],
      correct: [0],
    },
    {
      id: 12,
      name: "Что нужно сделать после получения строки из localStorage для восстановления объекта?",
      variants: [
        "Вызвать JSON.parse()",
        "Вызвать JSON.stringify()",
        "Сохранить снова",
      ],
      correct: [0],
    },
    {
      id: 13,
      name: "Что НЕ будет сериализовано при JSON.stringify(obj)?",
      variants: ["Функции и undefined", "Строки", "Числа"],
      correct: [0],
    },
    {
      id: 14,
      name: "В каком случае стоит использовать sessionStorage?",
      variants: [
        "Для хранения черновика формы в одной вкладке",
        "Для хранения темы сайта навсегда",
        "Для загрузки стилей",
      ],
      correct: [0],
    },
    {
      id: 15,
      name: "Могут ли значения с одинаковым ключом в localStorage и sessionStorage пересекаться?",
      variants: [
        "Нет, это независимые хранилища",
        "Да, всегда совпадают",
        "Да, если ключи совпадают",
      ],
      correct: [0],
    },
    {
      id: 16,
      name: "Примерный максимальный объем данных в localStorage:",
      variants: ["5-10 МБ", "100 КБ", "Неограниченно"],
      correct: [0],
    },
    {
      id: 17,
      name: "Где доступны данные из localStorage?",
      variants: [
        "На всех вкладках одного домена",
        "Только в текущей вкладке",
        "Во всех браузерах",
      ],
      correct: [0],
    },
    {
      id: 18,
      name: "Как посмотреть содержимое localStorage в браузере?",
      variants: [
        "В DevTools на вкладке Application",
        "Через терминал",
        "В настройках сайта",
      ],
      correct: [0],
    },
    {
      id: 19,
      name: "Что произойдет с sessionStorage после закрытия вкладки браузера?",
      variants: [
        "Все данные исчезнут",
        "Данные сохранятся навсегда",
        "Данные перейдут в localStorage",
      ],
      correct: [0],
    },
    {
      id: 20,
      name: "Что сделать, чтобы сохранить и восстановить объект пользователя с ключом 'user' в localStorage?",
      variants: [
        "JSON.stringify(obj) при сохранении и JSON.parse() при чтении",
        "Сохранить напрямую и прочитать напрямую",
        "Сохранить как массив",
      ],
      correct: [0],
    },
  ],
};
