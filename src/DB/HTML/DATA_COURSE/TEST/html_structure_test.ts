export const html_structure_test = {
  id: 201,
  name: "Структура HTML-документа",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "С какого тега должен начинаться любой HTML-документ?",
      variants: ["<html>", "<!DOCTYPE html>", "<head>"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какой тег является корневым элементом HTML-документа?",
      variants: ["<body>", "<head>", "<html>"],
      correct: [2],
    },
    {
      id: 3,
      name: "Что содержит тег <head>?",
      variants: [
        "Видимое содержимое страницы",
        "Метаинформацию, стили, скрипты",
        "Контент, связанный с пользователем",
      ],
      correct: [1],
    },
    {
      id: 4,
      name: "Что содержит тег <body>?",
      variants: [
        "Технические настройки документа",
        "Заголовок вкладки браузера",
        "Всё, что отображается пользователю",
      ],
      correct: [2],
    },
    {
      id: 5,
      name: "Какой тег задаёт кодировку страницы?",
      variants: [
        '<meta charset="UTF-8">',
        "<title>",
        '<link rel="stylesheet">',
      ],
      correct: [0],
    },
    {
      id: 6,
      name: "Какой тег используется для задания заголовка окна браузера?",
      variants: ["<meta>", "<title>", "<h1>"],
      correct: [1],
    },
    {
      id: 7,
      name: 'Где должен располагаться тег <meta charset="UTF-8">?',
      variants: ["Внутри <body>", "До <html>", "Внутри <head>"],
      correct: [2],
    },
    {
      id: 8,
      name: "Какой атрибут тега <html> указывает язык документа?",
      variants: ["lang", "language", "charset", "translate"],
      correct: [0],
      explanation:
        "Атрибут lang (например, lang='ru') указывает язык содержимого страницы.",
    },
    {
      id: 9,
      name: "Можно ли иметь несколько тегов <head> в документе?",
      variants: [
        "Да, если в них разные мета-теги",
        "Нет, тег <head> должен быть один",
        "Да, если они находятся в разных <div>",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Какой порядок разделов правильный в HTML-документе?",
      variants: [
        "<head> → <html> → <body>",
        "<html> → <body> → <head>",
        "<!DOCTYPE> → <html> → <head> → <body>",
      ],
      correct: [2],
    },
  ],
};
