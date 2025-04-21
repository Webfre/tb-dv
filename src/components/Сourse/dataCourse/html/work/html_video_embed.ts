export const html_video_embed_1 = {
  id: "html_video_embed_1",
  module: "HTML",
  title: "Добавление видео с использованием тега <video>",
  topic: "HTML мультимедиа",
  topicId: "html_multimedia",
  description:
    "Создайте HTML-документ, в котором встроено видео с использованием тега `<video>` и базовых атрибутов: `controls`, `autoplay`, `loop`, `muted`, `poster`.",
  steps: [
    "Создайте новый HTML-файл, например `video.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` вставьте тег `<video>` с атрибутами:",
    "- `controls` — для отображения панели управления.",
    "- `poster` — изображение, отображаемое до начала воспроизведения.",
    "- `width` — ширина видео в пикселях (например, 400).",
    "- Внутри тега добавьте `<source>` с `src` и `type`, указывающими на видеофайл (используйте внешний URL).",
    "При необходимости добавьте атрибуты `autoplay`, `loop`, `muted` (необязательные).",
    "Добавьте текст-заглушку внутри `<video>` на случай, если браузер не поддерживает видео.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/source",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Встраивание видео</title>
  </head>
  <body>
    <h1>Пример видео</h1>

    <video 
      width="400" 
      controls 
      poster="https://www.w3schools.com/html/pic_trulli.jpg"
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Ваш браузер не поддерживает воспроизведение видео.
    </video>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Встраивание видео</title>
  </head>
  <body>
    <h1>Пример видео</h1>

    <video 
      width="400" 
      controls 
      poster="https://www.w3schools.com/html/pic_trulli.jpg"
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Ваш браузер не поддерживает воспроизведение видео.
    </video>
  </body>
</html>`,
};

export const html_video_embed_2 = {
  id: "html_video_embed_2",
  module: "HTML",
  title: "Добавление аудио с использованием тега <audio>",
  topic: "HTML мультимедиа",
  topicId: "html_multimedia",
  description:
    "Создайте HTML-документ с использованием тега `<audio>` и базовых атрибутов: `controls`, `autoplay`, `loop`, `muted`. Добавьте источник звукового файла через тег `<source>`.",
  steps: [
    "Создайте новый HTML-файл, например `audio.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` вставьте тег `<audio>` с атрибутом `controls` для отображения панели управления.",
    "- Укажите внутри `<audio>` тег `<source>` с атрибутом `src`, указывающим на аудиофайл (можно внешний URL), и `type`.",
    "- При желании добавьте атрибуты: `autoplay`, `loop`, `muted` — и понаблюдайте за их работой.",
    "- Добавьте текст внутри тега `<audio>` на случай, если браузер не поддерживает воспроизведение звука.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/audio",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/source",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Аудио в HTML</title>
  </head>
  <body>
    <h1>Пример аудиофайла</h1>

    <audio controls>
      <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
      Ваш браузер не поддерживает аудиоэлемент.
    </audio>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Аудио в HTML</title>
  </head>
  <body>
    <h1>Пример аудиофайла</h1>

    <audio controls>
      <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
      Ваш браузер не поддерживает аудиоэлемент.
    </audio>
  </body>
</html>`,
};
