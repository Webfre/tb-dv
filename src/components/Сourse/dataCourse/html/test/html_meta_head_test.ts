export const html_meta_head_test = {
  id: 11,
  name: "Мета-теги и подключение ресурсов",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Какой мета-тег обязателен для корректного отображения символов?",
      variants: [
        "<meta name='description' content='...'>",
        "<meta charset='UTF-8'>",
        "<meta http-equiv='X-UA-Compatible' content='IE=edge'>",
      ],
      correct: [1],
    },
    {
      id: 2,
      name: "Какой мета-тег делает сайт адаптивным на мобильных устройствах?",
      variants: [
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "<meta name='mobile' content='responsive'>",
        "<meta http-equiv='MobileOptimized' content='width'>",
      ],
      correct: [0],
    },
    {
      id: 3,
      name: "Какой мета-тег наиболее важен для SEO?",
      variants: [
        "<meta name='keywords' content='...'>",
        "<meta name='description' content='...'>",
        "<meta name='author' content='...'>",
      ],
      correct: [1],
    },
    {
      id: 4,
      name: "Какой тег используется для установки заголовка страницы?",
      variants: ["<h1>", "<header>", "<title>"],
      correct: [2],
    },
    {
      id: 5,
      name: "Какой атрибут тега <link> используется для подключения CSS?",
      variants: ["rel='stylesheet'", "type='text/css'", "href='style.css'"],
      correct: [0],
    },
    {
      id: 6,
      name: "Какой мета-тег запрещает поисковым роботам индексировать страницу?",
      variants: [
        "<meta name='robots' content='noindex'>",
        "<meta name='google' content='nofollow'>",
        "<meta name='search' content='disable'>",
      ],
      correct: [0],
    },
    {
      id: 7,
      name: "Для чего используется тег <link rel='icon'>?",
      variants: [
        "Для подключения иконки сайта (favicon)",
        "Для указания главной страницы сайта",
        "Для добавления социальной иконки",
      ],
      correct: [0],
    },
    {
      id: 8,
      name: "Какой мета-тег используется для Open Graph разметки?",
      variants: [
        "<meta property='og:title' content='...'>",
        "<meta name='og:title' content='...'>",
        "<meta itemprop='og:title' content='...'>",
      ],
      correct: [0],
    },
    {
      id: 9,
      name: "Какой мета-тег перенаправит пользователя на другую страницу через 5 секунд?",
      variants: [
        "<meta http-equiv='redirect' content='5; url=...'>",
        "<meta http-equiv='refresh' content='5; url=...'>",
        "<meta name='location' content='5; url=...'>",
      ],
      correct: [1],
    },
    {
      id: 10,
      name: "Какой тег лучше всего подходит для подключения Google Fonts?",
      variants: ["<style>", "<script>", "<link>"],
      correct: [2],
    },
    {
      id: 11,
      name: "Какой мета-тег указывает язык страницы?",
      variants: [
        "<meta lang='ru'>",
        "<meta http-equiv='Content-Language' content='ru'>",
        "<meta name='language' content='Russian'>",
      ],
      correct: [1],
    },
    {
      id: 12,
      name: "Какой мета-тег используется для Twitter Cards?",
      variants: [
        "<meta property='twitter:title' content='...'>",
        "<meta name='twitter:title' content='...'>",
        "<meta itemprop='twitter:title' content='...'>",
      ],
      correct: [1],
    },
  ],
};
