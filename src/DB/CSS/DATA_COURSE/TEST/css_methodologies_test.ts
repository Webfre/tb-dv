export const css_methodologies_test = {
  id: 505,
  name: "CSS: Методологии и BEM",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Для чего предназначены CSS-методологии?",
      variants: [
        "Для уменьшения размера стилей",
        "Для структурирования CSS-кода и избежания конфликтов стилей",
        "Для добавления анимаций в CSS",
      ],
      correct: [1],
    },
    {
      id: 2,
      name: "Какая методология CSS делит стили на блоки, элементы и модификаторы?",
      variants: ["SMACSS", "BEM", "OOCSS"],
      correct: [1],
    },
    {
      id: 3,
      name: "Как в BEM обозначается элемент блока?",
      variants: [".block-element", ".block__element", ".block--element"],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой из следующих примеров соответствует правилам BEM?",
      variants: [
        '<div class="profile__header--active"></div>',
        '<div class="header profile__header"></div>',
        '<div class="profile profile--active"></div>',
      ],
      correct: [2],
    },
    {
      id: 5,
      name: "Какое преимущество у BEM по сравнению с обычными CSS-классами?",
      variants: [
        "Быстрее загружается в браузере",
        "Позволяет избежать конфликтов стилей и легко переиспользовать компоненты",
        "Меньше весит в бандле",
      ],
      correct: [1],
    },
    {
      id: 6,
      name: "Какая методология CSS предполагает использование мини-классов (Utility Classes)?",
      variants: ["Atomic CSS", "BEM", "SMACSS"],
      correct: [0],
    },
    {
      id: 7,
      name: "Какой из следующих примеров является правильным именованием модификатора в BEM?",
      variants: [".card-active", ".card--active", ".card__active"],
      correct: [1],
    },
    {
      id: 8,
      name: "Какое основное назначение методологии OOCSS?",
      variants: [
        "Создание анимаций",
        "Повторное использование объектов стилей",
        "Масштабирование шрифтов",
      ],
      correct: [1],
    },
    {
      id: 9,
      name: "Как в BEM создаётся элемент внутри блока с модификатором?",
      variants: [
        ".block--modifier__element",
        ".block__element--modifier",
        ".block-element--modifier",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Какое преимущество у CSS-методологий в командной разработке?",
      variants: [
        "Снижение использования медиазапросов",
        "Уменьшение веса файлов",
        "Понятная структура классов и минимизация конфликтов",
      ],
      correct: [2],
    },
  ],
};
