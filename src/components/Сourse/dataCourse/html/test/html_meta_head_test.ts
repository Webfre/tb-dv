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
      name: "Какой мета-тег сообщает авторство веб-страницы?",
      variants: [
        "<meta name='copyright' content='...'>",
        "<meta name='author' content='...'>",
        "<meta name='developer' content='...'>",
      ],
      correct: [1],
    },
    {
      id: 9,
      name: "Какой мета-тег автоматически обновляет страницу через заданное время?",
      variants: [
        "<meta http-equiv='refresh' content='10'>",
        "<meta name='refresh' content='10'>",
        "<meta http-equiv='reload' content='10'>",
      ],
      correct: [0],
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
      name: "Какой тег применяется для добавления краткого описания страницы в поисковой выдаче?",
      variants: [
        "<meta name='description'>",
        "<meta name='keywords'>",
        "<meta name='viewport'>",
      ],
      correct: [0],
    },
  ],
};
