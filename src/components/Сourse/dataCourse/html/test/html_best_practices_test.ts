export const html_best_practices_test = {
  id: 12,
  name: "HTML5, доступность, SEO и валидность",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Какой из этих тегов НЕ является семантическим в HTML5?",
      variants: ["<section>", "<div>", "<article>"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какой атрибут обязателен для изображений в контексте доступности?",
      variants: ["src", "alt", "title"],
      correct: [1],
    },
    {
      id: 3,
      name: "Какой формат микроразметки рекомендуется Google?",
      variants: ["Microdata", "RDFa", "JSON-LD"],
      correct: [2],
    },
    {
      id: 4,
      name: "Какой тег следует использовать для основного содержимого страницы?",
      variants: ["<body>", "<main>", "<content>"],
      correct: [1],
    },
    {
      id: 5,
      name: "Какой инструмент лучше всего подходит для проверки валидности HTML?",
      variants: ["W3C Validator", "Google Lighthouse", "ESLint"],
      correct: [0],
    },
    {
      id: 6,
      name: "Какой ARIA-атрибут используется для скрытия элемента от скринридеров?",
      variants: [
        "aria-hidden='true'",
        "aria-visible='false'",
        "aria-ignore='true'",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Какой мета-тег наиболее важен для SEO?",
      variants: [
        "<meta name='keywords'>",
        "<meta name='description'>",
        "<meta name='author'>",
      ],
      correct: [1],
    },
    {
      id: 8,
      name: "Какой тег HTML5 предназначен для самостоятельного контента, который может быть распространён отдельно?",
      variants: ["<section>", "<article>", "<aside>"],
      correct: [1],
    },
  ],
};
