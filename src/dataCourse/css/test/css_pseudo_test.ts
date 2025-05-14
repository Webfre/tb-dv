export const css_pseudo_test = {
  id: 404,
  name: "CSS: Псевдоклассы, Псевдоэлементы и Состояния",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Какой псевдокласс выбирает первый дочерний элемент внутри родителя?",
      variants: [":first-child", ":last-child", ":nth-child(1)"],
      correct: [0],
    },
    {
      id: 2,
      name: "Какой псевдокласс применяется к элементу, когда он находится в фокусе (например, при клике на input)?",
      variants: [":hover", ":focus", ":active"],
      correct: [1],
    },
    {
      id: 3,
      name: "Какой псевдоэлемент позволяет добавить текст перед элементом без изменения HTML?",
      variants: ["::after", "::before", "::first-letter"],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой псевдокласс применяется к кнопке в момент её нажатия?",
      variants: [":focus", ":hover", ":active"],
      correct: [2],
    },
    {
      id: 5,
      name: "Какой псевдокласс позволяет стилизовать все элементы, кроме указанного селектора?",
      variants: [":not()", ":nth-child()", ":only-child"],
      correct: [0],
    },
    {
      id: 6,
      name: "Какой псевдоэлемент позволяет стилизовать первую букву параграфа?",
      variants: ["::first-line", "::first-letter", "::before"],
      correct: [1],
    },
    {
      id: 7,
      name: "Какой псевдокласс позволяет выбрать все чекбоксы, которые отмечены?",
      variants: [":enabled", ":checked", ":selected"],
      correct: [1],
    },
    {
      id: 8,
      name: "Какой псевдокласс позволяет стилизовать элементы, у которых нет дочерних элементов?",
      variants: [":empty", ":last-child", ":not(*)"],
      correct: [0],
    },
    {
      id: 9,
      name: "Какой псевдокласс позволяет выбрать последний дочерний элемент?",
      variants: [":last-child", ":nth-last-child(1)", ":first-of-type"],
      correct: [0],
    },
    {
      id: 10,
      name: "Какой псевдоэлемент позволяет стилизовать выделенный пользователем текст?",
      variants: ["::first-line", "::selection", "::highlight"],
      correct: [1],
    },
  ],
};
