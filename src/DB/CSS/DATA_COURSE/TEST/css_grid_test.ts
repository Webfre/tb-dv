export const css_grid_test = {
  id: 407,
  name: "CSS: Grid Layout",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Какое значение свойства display включает режим Grid?",
      variants: ["block", "grid", "flex"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какое свойство отвечает за количество и ширину колонок в Grid-контейнере?",
      variants: ["grid-template-rows", "grid-template-columns", "grid-area"],
      correct: [1],
    },
    {
      id: 3,
      name: "Что делает значение auto-fit у свойства grid-template-columns?",
      variants: [
        "Задаёт фиксированное количество колонок",
        "Автоматически подстраивает количество колонок под ширину экрана",
        "Удаляет лишние элементы из грида",
      ],
      correct: [1],
    },
    {
      id: 4,
      name: "Какая единица измерения в Grid делит свободное пространство на части?",
      variants: ["px", "%", "fr"],
      correct: [2],
    },
    {
      id: 5,
      name: "Какое значение grid-template-columns создаст 3 колонки одинаковой ширины?",
      variants: [
        "grid-template-columns: 1fr 2fr 3fr",
        "grid-template-columns: 1fr 1fr 1fr",
        "grid-template-columns: auto auto auto",
      ],
      correct: [1],
    },
    {
      id: 6,
      name: "Какое свойство отвечает за количество и высоту строк в Grid-контейнере?",
      variants: ["grid-template-columns", "grid-template-rows", "grid-area"],
      correct: [1],
    },
    {
      id: 7,
      name: "Какое свойство позволяет элементу занимать несколько колонок?",
      variants: ["grid-column", "grid-row", "grid-template-columns"],
      correct: [0],
    },
    {
      id: 8,
      name: "Какой метод задания колонок позволяет задать их количество и ширину кратко?",
      variants: [
        "grid-template-columns: auto",
        "grid-template-columns: minmax()",
        "grid-template-columns: repeat()",
      ],
      correct: [2],
    },
    {
      id: 9,
      name: "Что произойдет, если использовать auto-fill в grid-template-columns?",
      variants: [
        "Контейнер создаст пустые ячейки, если места больше, чем элементов",
        "Контейнер заполнит все пустые ячейки контентом",
        "Элементы исчезнут, если места не хватит",
      ],
      correct: [0],
    },
    {
      id: 10,
      name: "Какое свойство позволяет задать разрыв (отступ) между строками и колонками?",
      variants: ["gap", "margin", "padding"],
      correct: [0],
    },
    {
      id: 11,
      name: "Какое свойство позволяет элементу занимать несколько строк?",
      variants: ["grid-row", "grid-column", "grid-template-areas"],
      correct: [0],
    },
    {
      id: 12,
      name: "Как задать фиксированную ширину для первой колонки и гибкую для остальных?",
      variants: [
        "grid-template-columns: 100px 1fr",
        "grid-template-columns: auto 1fr",
        "grid-template-columns: 1fr auto",
      ],
      correct: [0],
    },
    {
      id: 13,
      name: "Какое свойство используется для именования областей в Grid?",
      variants: ["grid-area", "grid-template-areas", "grid-template-columns"],
      correct: [1],
    },
    {
      id: 14,
      name: "Какой синтаксис позволяет создать сетку из 4 колонок одинаковой ширины?",
      variants: [
        "grid-template-columns: auto auto auto auto",
        "grid-template-columns: 1fr 1fr 1fr 1fr",
        "grid-template-columns: repeat(4, 1fr)",
      ],
      correct: [2],
    },
    {
      id: 15,
      name: "Какое свойство позволяет элементу разместиться в области с именем header?",
      variants: [
        "grid-area: header",
        "grid-template-area: header",
        "grid-template-row: header",
      ],
      correct: [0],
    },
    {
      id: 16,
      name: "Какая запись grid-template-areas создаст структуру из header, sidebar и content?",
      variants: [
        `"header header" "sidebar content"`,
        `"header header header" "sidebar content content"`,
        `"header" "sidebar" "content"`,
      ],
      correct: [0],
    },
    {
      id: 17,
      name: "Какое свойство позволяет объединить ячейки в Grid?",
      variants: ["grid-column", "grid-row", "grid-area"],
      correct: [2],
    },
    {
      id: 18,
      name: "Какое свойство задаёт минимальную и максимальную ширину колонки в Grid?",
      variants: ["grid-gap", "minmax()", "grid-column-gap"],
      correct: [1],
    },
    {
      id: 19,
      name: "Какой метод верстки удобнее использовать для создания табличных макетов?",
      variants: ["float", "inline-block", "grid"],
      correct: [2],
    },
    {
      id: 20,
      name: "Какое свойство позволяет задать отступы между строками в Grid-контейнере?",
      variants: ["grid-row-gap", "grid-column-gap", "row-gap"],
      correct: [2],
    },
  ],
};
