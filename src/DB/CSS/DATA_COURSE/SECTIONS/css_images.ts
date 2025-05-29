export const css_images_1 = {
  id: "css_images_1",
  title: "Фоновые изображения и background",
  content: `
  ## Что такое фоновое изображение?

  Фоновое изображение — это **картинка, которая задаётся через CSS** и отображается как фон у блока.  
  Это не тег \`<img>\`, она **не участвует в HTML-структуре**, но видна как оформление.

  ---

  ## Как задать фон?

  Самое простое:

  \`\`\`css
  .block {
    background-image: url('image.jpg');
  }
  \`\`\`

  Но одного свойства мало — чтобы фон выглядел красиво, нужно указать ещё и другие параметры.

  ---

  ## Важные свойства background

  | Свойство              | Что делает                                           |
  |------------------------|------------------------------------------------------|
  | \`background-image\`     | Указывает путь к картинке                           |
  | \`background-repeat\`    | Повторять ли изображение (\`repeat\`, \`no-repeat\`)   |
  | \`background-position\` | Где поставить картинку (например, \`center center\`) |
  | \`background-size\`     | Как масштабировать картинку (\`cover\`, \`contain\`)  |
  | \`background-color\`     | Задает цвет фона (если картинка не загрузится)      |

  Пример полной записи:

  \`\`\`css
  .block {
    background: url('image.jpg') no-repeat center center / cover;
  }
  \`\`\`

  Это значит:
  - **не повторять**
  - **выравнивать по центру**
  - **растянуть, чтобы закрыть весь блок**

  ---

  ## Что делает \`cover\` и \`contain\`?

  | Значение | Объяснение                                                            |
  |----------|------------------------------------------------------------------------|
  | \`cover\`   | Заполняет блок полностью, **может обрезать** изображение             |
  | \`contain\` | Вписывает изображение целиком, но **может остаться пустое место**     |

  ---

  ## Можно объединить фон и цвет

  Например, сделать затемнение поверх картинки:

  \`\`\`css
  .banner {
    background:
      linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)),
      url('bg.jpg') center/cover no-repeat;
  }
  \`\`\`

  Сначала добавляется полупрозрачный чёрный градиент, а потом картинка.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="banner">Заголовок на фоне</div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .banner {
      width: 100%;
      height: 300px;
      background: url('https://via.placeholder.com/800x300') no-repeat center/cover;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background",
    "https://html5book.ru/css-background/",
    "https://css-tricks.com/almanac/properties/b/background/",
  ],
};
export const css_images_2 = {
  id: "css_images_2",
  title: "Когда использовать <img>, а когда background-image",
  content: `
  ## Что лучше: <img> или background?

  Всё зависит от задачи:

  | Хочешь...                                | Используй     |
  |------------------------------------------|---------------|
  | Показать **контентное изображение**      | \`<img>\`       |
  | Задать **оформление фоном**              | \`background\` |
  | Нужно, чтобы изображение **отображалось в DOM** и было доступно (для SEO, alt) | \`<img>\` |

  Примеры:

  - Фото профиля → \`<img>\`
  - Фон баннера или карточки → \`background-image\`

  ---

  ## Проблема с <img>: оно не обрезается

  Изображения через \`<img>\` по умолчанию **масштабируются как есть** и могут "выпадать" из контейнера.

  Поэтому используют:

  - \`object-fit\` — как вписать изображение
  - \`object-position\` — где разместить изображение внутри

  ---

  ## object-fit: управление масштабом <img>

  | Значение    | Что делает                                              |
  |-------------|---------------------------------------------------------|
  | \`fill\`       | Растягивает до размера контейнера (по умолчанию)         |
  | \`contain\`    | Вписывает полностью, сохраняет пропорции, могут быть пустоты |
  | \`cover\`      | Заполняет контейнер полностью, может обрезаться         |
  | \`none\`       | Оставляет как есть, без масштабирования                 |
  | \`scale-down\` | Сравнивает \`none\` и \`contain\`, берёт меньшее         |

  ---

  ## object-position: выравнивание изображения

  Работает как \`background-position\`, но для тега \`<img>\`.

  Примеры:

  \`\`\`css
  img {
    object-fit: cover;
    object-position: center;
  }
  \`\`\`

  ---

  ## Когда <img> + object-fit удобнее?

  - Когда тебе важно **сохранять семантику и alt**
  - Когда нужно **поддерживать адаптивность и обрезку одновременно**
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="avatar">
    <img src="https://via.placeholder.com/300x200" alt="Avatar">
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/object-fit",
    "https://developer.mozilla.org/ru/docs/Web/CSS/object-position",
    "https://css-tricks.com/almanac/properties/o/object-fit/",
  ],
};
export const css_images_3 = {
  id: "css_images_3",
  title: "Адаптивные изображения.",
  content: `
  ## Зачем нужны адаптивные изображения?

  На разных устройствах нужны **разные размеры изображений**:
  - на телефоне — картинка может быть меньше,
  - на Retina — картинка должна быть чётче.

  Если грузить всегда одно большое изображение — это **медленно и неэффективно**.

  Решение — использовать:
  - \`srcset\` и \`sizes\` — для одного тега \`<img>\`
  - \`<picture>\` — если нужно больше контроля (например, форматы WebP)

  ---

  ##  srcset — набор вариантов

  С помощью \`srcset\` можно указать **несколько версий** изображения:

  \`\`\`html
  <img
    src="img-small.jpg"
    srcset="img-small.jpg 480w, img-medium.jpg 800w, img-large.jpg 1200w"
    sizes="(max-width: 600px) 100vw, 50vw"
    alt="Фото">
  \`\`\`

  Объяснение:
  - \`480w\` — картинка подходит для экранов шириной до 480px
  - \`sizes\` — говорит браузеру, **какой размер картинки нужен** в разных условиях

  ---

  ##  picture — разные форматы и условия

  Тег \`<picture>\` даёт больше гибкости: можно показывать **разные изображения** в зависимости от ширины экрана или даже использовать **WebP**.

  \`\`\`html
  <picture>
    <source srcset="img.webp" type="image/webp">
    <source srcset="img.jpg" type="image/jpeg">
    <img src="fallback.jpg" alt="Картинка">
  </picture>
  \`\`\`

  Можно также использовать медиазапросы:

  \`\`\`html
  <picture>
    <source media="(max-width: 600px)" srcset="small.jpg">
    <source media="(min-width: 601px)" srcset="large.jpg">
    <img src="default.jpg" alt="Фото">
  </picture>
  \`\`\`

  ---

  ## Что выбрать?

  | Нужно | Используй         |
  |--------------------------|-------------------|
  | Просто разные размеры     | \`srcset + sizes\` |
  | Разные форматы (WebP)     | \`<picture>\`       |
  | Контроль под разные экраны | \`<picture>\`       |

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <picture>
    <source media="(max-width: 600px)" srcset="https://via.placeholder.com/400x200">
    <source media="(min-width: 601px)" srcset="https://via.placeholder.com/800x400">
    <img src="https://via.placeholder.com/600x300" alt="Адаптивное изображение" class="responsive-img">
  </picture>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
    .responsive-img {
      width: 100%;
      max-width: 800px;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
    "https://web.dev/serve-responsive-images/",
    "https://html5book.ru/adaptivnye-izobrazheniya/",
  ],
};
