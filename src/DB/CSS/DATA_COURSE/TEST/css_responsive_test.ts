export const css_responsive_test = {
  id: 310,
  name: "CSS: Адаптивность и медиазапросы",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Какой тег HTML используется для корректного отображения страницы на мобильных устройствах?",
      variants: [
        "<meta name='mobile'>",
        "<meta name='viewport'>",
        "<meta name='responsive'>",
      ],
      correct: [1],
    },
    {
      id: 2,
      name: "Какая единица измерения в CSS обозначает 1% от ширины окна браузера?",
      variants: ["vw", "%", "em"],
      correct: [0],
    },
    {
      id: 3,
      name: "Какое свойство CSS задаёт относительную ширину элемента в процентах?",
      variants: ["width: 100px;", "width: 100%;", "width: 100vw;"],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой синтаксис медиазапроса используется для применения стилей на экранах шириной до 600px?",
      variants: [
        "@media (max-width: 600px) { ... }",
        "@media (min-width: 600px) { ... }",
        "@media (screen-width: 600px) { ... }",
      ],
      correct: [0],
    },
    {
      id: 5,
      name: "Какое значение background-size растягивает изображение на весь блок, сохраняя пропорции?",
      variants: ["contain", "cover", "100%"],
      correct: [1],
    },
    {
      id: 6,
      name: "Какой медиазапрос нужно использовать для стилей на планшетах?",
      variants: [
        "@media (max-width: 600px)",
        "@media (min-width: 600px) and (max-width: 1024px)",
        "@media (min-width: 1024px)",
      ],
      correct: [1],
    },
    {
      id: 7,
      name: "Какое свойство CSS изменяет размер шрифта в зависимости от ширины экрана?",
      variants: [
        "font-size: auto;",
        "font-size: vw;",
        "font-size: clamp(16px, 2vw, 24px);",
      ],
      correct: [2],
    },
    {
      id: 8,
      name: "Что делает свойство 'vw' в CSS?",
      variants: [
        "Задаёт относительную ширину от родителя",
        "Задаёт ширину в процентах от ширины окна браузера",
        "Задаёт высоту в процентах от высоты окна браузера",
      ],
      correct: [1],
    },
    {
      id: 9,
      name: "Какое значение указывает, что элемент растянется на 100% от ширины экрана?",
      variants: ["width: 100px;", "width: 100%;", "width: 100vw;"],
      correct: [2],
    },
    {
      id: 10,
      name: "Какое значение медиазапроса ограничивает стили только для экранов шире 1024px?",
      variants: [
        "@media (max-width: 1024px)",
        "@media (min-width: 1024px)",
        "@media (screen-width: 1024px)",
      ],
      correct: [1],
    },
    {
      id: 11,
      name: "Что делает медиазапрос с условием @media (min-width: 600px) and (max-width: 1024px)?",
      variants: [
        "Применяет стили на экранах шириной от 600px до 1024px",
        "Применяет стили только на мобильных устройствах",
        "Применяет стили на всех экранах шире 1024px",
      ],
      correct: [0],
    },
    {
      id: 12,
      name: "Какой CSS-синтаксис позволяет плавно изменять размер шрифта в зависимости от ширины экрана?",
      variants: [
        "font-size: fluid;",
        "font-size: clamp(16px, 2vw, 24px);",
        "font-size: responsive;",
      ],
      correct: [1],
    },
    {
      id: 13,
      name: "Какое свойство используется для задания высоты относительно видимой области экрана?",
      variants: ["vh", "vw", "%"],
      correct: [0],
    },
    {
      id: 14,
      name: "Что произойдет с элементом, если у него задано width: 100vw?",
      variants: [
        "Он займёт 100% от ширины родителя",
        "Он займёт 100% от ширины экрана",
        "Он растянется на всю доступную высоту",
      ],
      correct: [1],
    },
    {
      id: 15,
      name: "Какой CSS-синтаксис делает блок отзывчивым к размеру экрана без медиазапросов?",
      variants: [
        "width: 100px;",
        "width: 100vw;",
        "width: clamp(200px, 50%, 800px);",
      ],
      correct: [2],
    },
  ],
};
