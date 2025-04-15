export const html_legacy_test = {
  id: 13,
  name: "Устаревшие теги и рефакторинг HTML",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Какой CSS-свойство заменяет устаревший тег <center>?",
      variants: ["align: center", "text-align: center", "position: center"],
      correct: [1],
    },
    {
      id: 2,
      name: "Какой современный тег следует использовать вместо <font> для изменения внешнего вида текста?",
      variants: ["<style>", "<span> с CSS", "<text>"],
      correct: [1],
    },
    {
      id: 3,
      name: "Какой современный HTML-тег следует использовать для основного содержимого страницы вместо <div id='main'>?",
      variants: ["<content>", "<main>", "<body>"],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой инструмент лучше всего подходит для проверки валидности HTML-кода?",
      variants: [
        "Google PageSpeed Insights",
        "W3C Validator",
        "Chrome DevTools",
      ],
      correct: [1],
    },
    {
      id: 5,
      name: "Какой подход рекомендуется при рефакторинге старой верстки?",
      variants: [
        "Полностью переписать весь код за один раз",
        "Постепенно заменять устаревшие элементы, сохраняя работоспособность",
        "Оставить как есть, если страница отображается корректно",
      ],
      correct: [1],
    },
  ],
};
