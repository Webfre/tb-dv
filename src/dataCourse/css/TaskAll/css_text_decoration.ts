export const css_text_decoration_task_1 = {
  id: "css_text_decoration_task_1",
  module: "CSS",
  title: "Подчёркивание и зачёркивание текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Создайте HTML-документ с текстом, оформленным с помощью подчёркивания и зачёркивания.",
  steps: [
    "Создайте HTML-документ с двумя абзацами (`<p>`)",
    "Для первого абзаца примените подчёркивание текста (`text-decoration: underline`)",
    "Для второго абзаца используйте зачёркивание текста (`text-decoration: line-through`)",
    "Проверьте, что стили отображаются корректно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декорации текста: Подчёркивание и зачёркивание</title>
  <style>
    .underline {
      text-decoration: underline;
    }

    .line-through {
      text-decoration: line-through;
    }
  </style>
</head>
<body>
  <p class="underline">Этот текст с подчёркиванием.</p>
  <p class="line-through">Этот текст с зачёркиванием.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Декорации текста: Подчёркивание и зачёркивание</title>
  <style>
    .underline {
      text-decoration: underline;
    }

    .line-through {
      text-decoration: line-through;
    }
  </style>
</head>
<body>
  <p class="underline">Этот текст с подчёркиванием.</p>
  <p class="line-through">Этот текст с зачёркиванием.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Примеры декорации текста */
.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration",
    "https://html5book.ru/css-text-decoration/",
  ],
};
export const css_text_decoration_task_2 = {
  id: "css_text_decoration_task_2",
  module: "CSS",
  title: "Надчёркивание и двойное подчёркивание текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Добавьте к тексту надчёркивание и двойное подчёркивание с разным цветом линии.",
  steps: [
    "Создайте HTML-документ с двумя абзацами (`<p>`)",
    "Для первого абзаца примените надчёркивание текста (`text-decoration: overline`)",
    "Для второго абзаца используйте двойное подчёркивание (`text-decoration-style: double`)",
    "Задайте цвет линии для двойного подчёркивания (например, красный)",
    "Проверьте корректность отображения",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Надчёркивание и двойное подчёркивание</title>
  <style>
    .overline {
      text-decoration: overline;
    }

    .double-underline {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="overline">Этот текст с надчёркиванием.</p>
  <p class="double-underline">Этот текст с двойным подчёркиванием и красной линией.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Надчёркивание и двойное подчёркивание</title>
  <style>
    .overline {
      text-decoration: overline;
    }

    .double-underline {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="overline">Этот текст с надчёркиванием.</p>
  <p class="double-underline">Этот текст с двойным подчёркиванием и красной линией.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Надчёркивание и двойное подчёркивание */
.overline {
  text-decoration: overline;
}

.double-underline {
  text-decoration: underline;
  text-decoration-style: double;
  text-decoration-color: red;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-style",
    "https://html5book.ru/css-text-decoration/",
  ],
};
export const css_text_decoration_task_3 = {
  id: "css_text_decoration_task_3",
  module: "CSS",
  title: "Изменение толщины декорации текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Создайте HTML-документ с текстом, оформленным с изменённой толщиной линий декорации.",
  steps: [
    "Создайте HTML-документ с двумя абзацами (`<p>`)",
    "Для первого абзаца примените подчёркивание с толщиной 3px",
    "Для второго абзаца используйте зачёркивание с толщиной 4px",
    "Задайте разные цвета линий для подчёркивания и зачёркивания",
    "Проверьте, что стили применяются корректно",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Толщина декорации текста</title>
  <style>
    .thick-underline {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-decoration-color: blue;
    }

    .thick-line-through {
      text-decoration: line-through;
      text-decoration-thickness: 4px;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="thick-underline">Этот текст с подчёркиванием толщиной 3px.</p>
  <p class="thick-line-through">Этот текст с зачёркиванием толщиной 4px.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Толщина декорации текста</title>
  <style>
    .thick-underline {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-decoration-color: blue;
    }

    .thick-line-through {
      text-decoration: line-through;
      text-decoration-thickness: 4px;
      text-decoration-color: red;
    }
  </style>
</head>
<body>
  <p class="thick-underline">Этот текст с подчёркиванием толщиной 3px.</p>
  <p class="thick-line-through">Этот текст с зачёркиванием толщиной 4px.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Изменение толщины декорации текста */
.thick-underline {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: blue;
}

.thick-line-through {
  text-decoration: line-through;
  text-decoration-thickness: 4px;
  text-decoration-color: red;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-thickness",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-color",
  ],
};
export const css_text_decoration_task_4 = {
  id: "css_text_decoration_task_4",
  module: "CSS",
  title: "Комбинированное оформление текста",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  description:
    "Создайте HTML-документ с абзацем, в котором одновременно применяются подчёркивание, зачёркивание и надчёркивание.",
  steps: [
    "Создайте HTML-документ с одним абзацем (`<p>`)",
    "Примените к нему одновременно подчёркивание, зачёркивание и надчёркивание",
    "Используйте разные стили для каждого типа декорации",
    "Настройте цвет и толщину для каждой линии",
    "Проверьте, что все стили применяются корректно",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Комбинированное оформление текста</title>
  <style>
    .combined-decoration {
      text-decoration-line: underline overline line-through;
      text-decoration-thickness: 2px;
      text-decoration-color: #007ACC;
      text-decoration-style: solid;
    }
  </style>
</head>
<body>
  <p class="combined-decoration">Этот текст одновременно подчёркнут, зачёркнут и надчёркнут.</p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Комбинированное оформление текста</title>
  <style>
    .combined-decoration {
      text-decoration-line: underline overline line-through;
      text-decoration-thickness: 2px;
      text-decoration-color: #007ACC;
      text-decoration-style: solid;
    }
  </style>
</head>
<body>
  <p class="combined-decoration">Этот текст одновременно подчёркнут, зачёркнут и надчёркнут.</p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Комбинированное оформление текста */
.combined-decoration {
  text-decoration-line: underline overline line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: #007ACC;
  text-decoration-style: solid;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-line",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-thickness",
  ],
};
export const css_text_decoration_task_5 = {
  id: "css_text_decoration_task_5",
  module: "CSS",
  title: "Полное оформление абзаца с анимацией декорации",
  topic: "Декорации текста в CSS",
  topicId: "css_text_decoration",
  sectionId: "css_text_decoration3",
  description:
    "Создайте HTML-документ с абзацем, который содержит все виды декорации текста: подчёркивание, надчёркивание и зачёркивание. Добавьте анимацию при наведении на текст.",
  steps: [
    "Создайте HTML-документ с одним абзацем (`<p>`)",
    "Примените к абзацу одновременно подчёркивание, надчёркивание и зачёркивание",
    "Настройте стили линий: цвет, толщину и стиль (например, волнистая линия)",
    "Добавьте CSS-анимацию при наведении: плавное изменение цвета линий и толщины",
    "Проверьте, что при наведении эффект срабатывает плавно",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Полное оформление абзаца с анимацией декорации</title>
  <style>
    .fancy-text {
      text-decoration-line: underline overline line-through;
      text-decoration-color: #007ACC;
      text-decoration-thickness: 2px;
      text-decoration-style: wavy;
      transition: text-decoration-color 0.3s ease, text-decoration-thickness 0.3s ease;
    }

    .fancy-text:hover {
      text-decoration-color: #ff6347;
      text-decoration-thickness: 4px;
    }
  </style>
</head>
<body>
  <p class="fancy-text">
    Этот текст одновременно подчёркнут, надчёркнут и зачёркнут. При наведении линии меняют цвет и становятся толще.
  </p>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Полное оформление абзаца с анимацией декорации</title>
  <style>
    .fancy-text {
      text-decoration-line: underline overline line-through;
      text-decoration-color: #007ACC;
      text-decoration-thickness: 2px;
      text-decoration-style: wavy;
      transition: text-decoration-color 0.3s ease, text-decoration-thickness 0.3s ease;
    }

    .fancy-text:hover {
      text-decoration-color: #ff6347;
      text-decoration-thickness: 4px;
    }
  </style>
</head>
<body>
  <p class="fancy-text">
    Этот текст одновременно подчёркнут, надчёркнут и зачёркнут. При наведении линии меняют цвет и становятся толще.
  </p>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Полное оформление абзаца с анимацией декорации */
.fancy-text {
  text-decoration-line: underline overline line-through;
  text-decoration-color: #007ACC;
  text-decoration-thickness: 2px;
  text-decoration-style: wavy;
  transition: text-decoration-color 0.3s ease, text-decoration-thickness 0.3s ease;
}

.fancy-text:hover {
  text-decoration-color: #ff6347;
  text-decoration-thickness: 4px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-line",
    "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration-style",
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
  ],
};
