export const html_semantics_test = {
  id: 204,
  name: "Семантическая вёрстка",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Что такое семантические теги в HTML?",
      variants: [
        "Теги, отвечающие за стилизацию",
        "Теги без закрывающего элемента",
        "Теги, которые несут смысловую нагрузку и описывают структуру контента",
      ],
      correct: [2],
    },
    {
      id: 2,
      name: "Какой тег следует использовать для размещения логотипа и навигации в верхней части страницы?",
      variants: ["<nav>", "<main>", "<header>"],
      correct: [2],
    },
    {
      id: 3,
      name: "Какой тег оборачивает основные ссылки на сайте?",
      variants: ["<ul>", "<nav>", "<aside>"],
      correct: [1],
    },
    {
      id: 4,
      name: "Сколько тегов <main> допустимо использовать на одной странице?",
      variants: ["Несколько", "Один", "Неограниченно"],
      correct: [1],
    },
    {
      id: 5,
      name: "Какой тег обозначает автономный блок, например, новость или статью?",
      variants: ["<section>", "<div>", "<article>"],
      correct: [2],
    },
    {
      id: 6,
      name: "Какой тег предназначен для размещения боковой информации, такой как реклама или рекомендации?",
      variants: ["<aside>", "<footer>", "<nav>"],
      correct: [0],
    },
    {
      id: 7,
      name: "Где обычно размещается контактная информация и ссылки на политику конфиденциальности?",
      variants: ["<footer>", "<main>", "<header>"],
      correct: [0],
    },
    {
      id: 8,
      name: "Чем отличается <section> от <div>?",
      variants: [
        "<section> используется для визуального оформления, <div> — для логики",
        "<section> является семантическим тегом и должен иметь заголовок",
        "Они полностью идентичны",
      ],
      correct: [1],
    },
    {
      id: 9,
      name: "Какие преимущества даёт семантическая разметка для SEO?",
      variants: [
        "Позволяет использовать больше ключевых слов",
        "Поисковые системы лучше понимают структуру и важность контента",
        "Никаких",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Почему семантические теги полезны для скринридеров?",
      variants: [
        "Они делают страницу быстрее",
        "Они позволяют ассистивным технологиям лучше ориентироваться по смыслу",
        "Они добавляют стили",
      ],
      correct: [1],
    },
  ],
};
