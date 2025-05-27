export const css_animations_test = {
  id: 411,
  name: "CSS: Анимации и Плавные Переходы",
  category: "CSS",
  ques: [
    {
      id: 1,
      name: "Какое свойство CSS отвечает за создание плавного перехода между состояниями элемента?",
      variants: ["animation", "transition", "transform"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какое значение у свойства 'transition-timing-function' делает анимацию плавной в начале и в конце?",
      variants: ["linear", "ease", "ease-in-out"],
      correct: [2],
    },
    {
      id: 3,
      name: "Какое свойство позволяет поворачивать элемент на 45 градусов?",
      variants: [
        "transform: rotate(45deg);",
        "transition: rotate(45deg);",
        "animation: rotate(45deg);",
      ],
      correct: [0],
    },
    {
      id: 4,
      name: "Что делает свойство 'transform: scale(1.5)'?",
      variants: [
        "Увеличивает элемент в 1.5 раза",
        "Поворачивает элемент на 1.5 градуса",
        "Смещает элемент на 1.5px",
      ],
      correct: [0],
    },
    {
      id: 5,
      name: "Как сделать плавный переход изменения цвета фона за 0.5 секунды?",
      variants: [
        "transition: background-color 0.5s ease;",
        "transform: background-color 0.5s ease;",
        "animation: background-color 0.5s ease;",
      ],
      correct: [0],
    },
    {
      id: 6,
      name: "Какой синтаксис позволяет одновременно анимировать несколько свойств?",
      variants: [
        "transition: all 0.3s ease;",
        "animation: all 0.3s ease;",
        "transform: all 0.3s ease;",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Что делает свойство 'translateY(20px)'?",
      variants: [
        "Сдвигает элемент на 20px по горизонтали",
        "Сдвигает элемент на 20px по вертикали",
        "Поворачивает элемент на 20 градусов",
      ],
      correct: [1],
    },
    {
      id: 8,
      name: "Как сделать элемент прозрачным при наведении с плавным переходом?",
      variants: [
        "transform: opacity 0.5s;",
        "transition: opacity 0.5s;",
        "animation: opacity 0.5s;",
      ],
      correct: [1],
    },
    {
      id: 9,
      name: "Какой синтаксис позволяет изменить центр трансформации элемента?",
      variants: [
        "transition-origin: center;",
        "transform-origin: center;",
        "animation-origin: center;",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Что произойдет при использовании 'transform: rotate(90deg)'?",
      variants: [
        "Элемент увеличится на 90%",
        "Элемент повернётся на 90 градусов",
        "Элемент сдвинется на 90px",
      ],
      correct: [1],
    },
  ],
};
