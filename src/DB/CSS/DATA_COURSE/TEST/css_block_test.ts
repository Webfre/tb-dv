export const css_block_test = {
  id: 303,
  name: "CSS: Отступы, Границы, Фон и Скругления",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Какое свойство отвечает за внешний отступ элемента?",
      variants: ["padding", "border", "margin"],
      correct: [2],
    },
    {
      id: 2,
      name: "Как центрировать блок по горизонтали с помощью margin?",
      variants: ["margin: auto 0;", "margin: 0 auto;", "margin: auto;"],
      correct: [1],
    },
    {
      id: 3,
      name: "Какое значение box-sizing включает padding и border в ширину элемента?",
      variants: ["content-box", "border-box", "padding-box"],
      correct: [1],
    },
    {
      id: 4,
      name: "Какое свойство отвечает за внутренний отступ элемента?",
      variants: ["padding", "margin", "border"],
      correct: [0],
    },
    {
      id: 5,
      name: "Какое свойство CSS используется для задания границы вокруг элемента?",
      variants: ["padding", "border", "outline"],
      correct: [1],
    },
    {
      id: 6,
      name: "Какое значение border-radius сделает элемент полностью круглым?",
      variants: [
        "border-radius: 50%;",
        "border-radius: 100px;",
        "border-radius: 10px 0;",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Какой из вариантов правильно задаёт фон с изображением, растянутым на всю область блока?",
      variants: [
        "background: url('image.jpg') no-repeat center;",
        "background: url('image.jpg') no-repeat center/cover;",
        "background-image: url('image.jpg') center cover;",
      ],
      correct: [1],
    },
    {
      id: 8,
      name: "Как убрать верхнюю границу у элемента?",
      variants: [
        "border-top: none;",
        "border-top-width: 0;",
        "border-top-style: none;",
      ],
      correct: [0],
    },
    {
      id: 9,
      name: "Какое значение используется, чтобы задать разные отступы по сторонам?",
      variants: [
        "margin: 10px;",
        "margin: 10px 5px 15px 0;",
        "margin: 10px 5px;",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Какое значение background-repeat отключает повторение изображения?",
      variants: ["repeat-x", "no-repeat", "repeat-y"],
      correct: [1],
    },
  ],
};
