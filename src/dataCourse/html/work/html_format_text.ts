export const html_format_text_1 = {
  id: "html_format_text_1",
  module: "HTML",
  title: "Форматирование текста с помощью HTML-тегов",
  topic: "Форматирование текста",
  topicId: "html_text_formatting",
  description:
    "Создайте HTML-документ, в котором вы примените различные теги для форматирования текста: `strong`, `em`, `mark`, `small`, `sub`, `sup`.",
  steps: [
    "Создайте новый HTML-файл, например `formatting.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте несколько абзацев, в которых будут использованы следующие теги:",
    "- `strong` — для выделения важного текста.",
    "- `em` — для выделения текста курсивом, передающего эмоциональную окраску.",
    "- `mark` — для выделения текста маркером.",
    "- `small` — для отображения мелкого текста (например, примечаний).",
    "- `sub` и `sup` — для отображения индексов (например, H₂O и x²).",
    "Проверьте визуальное отображение форматирования в браузере.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/strong",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/em",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/mark",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Форматирование текста</title>
  </head>
  <body>
    <p><strong>Важно:</strong> всегда закрывайте HTML-теги корректно.</p>
    <p><em>Обратите внимание:</em> это особенно полезно при написании инструкций.</p>
    <p>Вы можете использовать тег <mark>mark</mark> для выделения текста как маркером.</p>
    <p><small>Примечание: эта информация может измениться.</small></p>
    <p>Формула воды — H<sub>2</sub>O, а квадрат числа — x<sup>2</sup>.</p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Форматирование текста</title>
  </head>
  <body>
    <p><strong>Важно:</strong> всегда закрывайте HTML-теги корректно.</p>
    <p><em>Обратите внимание:</em> это особенно полезно при написании инструкций.</p>
    <p>Вы можете использовать тег <mark>mark</mark> для выделения текста как маркером.</p>
    <p><small>Примечание: эта информация может измениться.</small></p>
    <p>Формула воды — H<sub>2</sub>O, а квадрат числа — x<sup>2</sup>.</p>
  </body>
</html>`,
};

export const html_format_text_2 = {
  id: "html_format_text_2",
  module: "HTML",
  title: "Цитаты и разделители в HTML",
  topic: "Цитаты и разделители",
  topicId: "html_text_formatting",
  description:
    "Создайте HTML-документ, демонстрирующий использование тегов для цитат (`blockquote`, `q`, `cite`) и разделителей (`hr`, `br`).",
  steps: [
    "Создайте новый HTML-файл, например `quotes.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте следующие элементы:",
    "- Используйте `blockquote` для длинной цитаты, добавьте внутри тег `cite` с указанием источника.",
    "- Используйте `q` для короткой встроенной цитаты внутри абзаца.",
    "- Добавьте горизонтальную линию с помощью `hr`, чтобы визуально разделить блоки.",
    "- Добавьте текст с использованием `br` для переноса строк (например, адрес).",
    "Проверьте, как отображаются цитаты и разделители в браузере.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/cite",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/hr",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/br",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Цитаты и разделители</title>
  </head>
  <body>
    <h1>Известные высказывания</h1>

    <blockquote cite="https://ru.wikipedia.org/wiki/Альберт_Эйнштейн">
      Воображение важнее знания. Знание ограничено, тогда как воображение охватывает весь мир.
    </blockquote>
    <p><cite>— Альберт Эйнштейн</cite></p>

    <hr />

    <p>Как сказал один мудрец: <q>Путь в тысячу ли начинается с первого шага.</q></p>

    <hr />

    <p>Контактная информация:<br />г. Москва<br />ул. Пушкина, д. 10<br />Тел.: +7 (000) 123-45-67</p>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Цитаты и разделители</title>
  </head>
  <body>
    <h1>Известные высказывания</h1>

    <blockquote cite="https://ru.wikipedia.org/wiki/Альберт_Эйнштейн">
      Воображение важнее знания. Знание ограничено, тогда как воображение охватывает весь мир.
    </blockquote>
    <p><cite>— Альберт Эйнштейн</cite></p>

    <hr />

    <p>Как сказал один мудрец: <q>Путь в тысячу ли начинается с первого шага.</q></p>

    <hr />

    <p>Контактная информация:<br />г. Москва<br />ул. Пушкина, д. 10<br />Тел.: +7 (000) 123-45-67</p>
  </body>
</html>`,
};
