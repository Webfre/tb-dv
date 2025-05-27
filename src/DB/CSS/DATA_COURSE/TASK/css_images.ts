export const css_images_task_1 = {
  id: "css_images_task_1",
  module: "CSS",
  title: "Фоновое изображение с базовыми стилями",
  topic: "Фоновые изображения и background",
  topicId: "css_images",
  sectionId: "css_images_1",
  description:
    "Создайте секцию с фоновым изображением, которое занимает всю ширину и высоту секции. Изображение должно быть центрировано и не повторяться.",
  steps: [
    "Создайте HTML-структуру с секцией `<section>` и добавьте в неё заголовок.",
    "Задайте этой секции фоновое изображение через `background-image`.",
    "Используйте свойства `background-size: cover`, `background-position: center` и `background-repeat: no-repeat`.",
    "Задайте секции минимальную высоту в 300px.",
    "Стилизуйте заголовок, чтобы он был читаемым на фоне изображения.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Фоновое изображение с базовыми стилями</title>
</head>
<body>

  <section class="banner">
    Красивое фоновое изображение
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фоновое изображение с базовыми стилями</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .banner {
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
  </style>
</head>
<body>

  <section class="banner">
    Красивое фоновое изображение
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* Фоновое изображение */
    .banner {
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://html5book.ru/css-background/",
    "https://css-tricks.com/almanac/properties/b/background/",
  ],
};
export const css_images_task_2 = {
  id: "css_images_task_2",
  module: "CSS",
  title: "Фоновое изображение с затемнением и градиентом",
  topic: "Фоновые изображения и background",
  topicId: "css_images",
  sectionId: "css_images_1",
  description:
    "Создайте секцию с фоновым изображением, наложением полупрозрачного градиента и текстом по центру.",
  steps: [
    "Создайте HTML-структуру с секцией `<section>` и добавьте в неё заголовок и описание.",
    "Задайте секции фоновое изображение с помощью `background-image`.",
    "Добавьте затемнение с использованием `linear-gradient` перед изображением.",
    "Используйте `background-blend-mode: overlay` для наложения слоёв.",
    "Центрируйте текст внутри секции.",
    "Сделайте текст читабельным на фоне (цвет, размер шрифта).",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Фоновое изображение с затемнением и градиентом</title>
</head>
<body>

  <section class="banner">
    <div>
      <h1>Невероятные приключения ждут вас!</h1>
      <p>Присоединяйтесь к нам в захватывающем путешествии прямо сейчас.</p>
    </div>
  </section>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фоновое изображение с затемнением и градиентом</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .banner {
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 20px;
    }

    .banner h1 {
      margin-bottom: 10px;
      font-size: 36px;
    }

    .banner p {
      font-size: 18px;
    }
  </style>
</head>
<body>

  <section class="banner">
    <div>
      <h1>Невероятные приключения ждут вас!</h1>
      <p>Присоединяйтесь к нам в захватывающем путешествии прямо сейчас.</p>
    </div>
  </section>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
  body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* Фон с градиентом и затемнением */
    .banner {
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 20px;
    }

    .banner h1 {
      margin-bottom: 10px;
      font-size: 36px;
    }

    .banner p {
      font-size: 18px;
    }
  `.trim(),
};
export const css_images_task_3 = {
  id: "css_images_task_3",
  module: "CSS",
  title: "Разница между <img> и background-image",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_images",
  sectionId: "css_images_2",
  description:
    "Создайте два блока: в одном реализуйте изображение через `<img>`, в другом — через `background-image`. Управляйте их размерами и позиционированием.",
  steps: [
    "Создайте два контейнера с изображениями: один с использованием тега `<img>`, второй — с использованием `background-image`.",
    "Задайте изображению через `<img>` размеры с помощью `width` и `height`.",
    "Для изображения в `background-image` примените `background-size`, `background-position` и `background-repeat`.",
    "Продемонстрируйте разницу в поведении изображений при изменении размеров контейнера.",
    "Стилизуйте блоки для наглядности.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Разница между <img> и background-image</title>
</head>
<body>

  <div class="container">
    <div class="image-container">
      <h2>Изображение с тегом &lt;img&gt;</h2>
      <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Пример изображения">
    </div>
    <div class="background-container">
      Изображение через background-image
    </div>
  </div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Разница между <img> и background-image</title>
    <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: flex;
      gap: 20px;
      margin: 20px;
    }

    /* Блок с <img> */
    .image-container {
      flex: 1;
      background-color: #e0e0e0;
      padding: 10px;
      text-align: center;
      border: 1px solid #ccc;
    }

    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    /* Блок с background-image */
    .background-container {
      flex: 1;
      height: 300px;
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="image-container">
      <h2>Изображение с тегом &lt;img&gt;</h2>
      <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Пример изображения">
    </div>
    <div class="background-container">
      Изображение через background-image
    </div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
   body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      display: flex;
      gap: 20px;
      margin: 20px;
    }

    /* Блок с <img> */
    .image-container {
      flex: 1;
      background-color: #e0e0e0;
      padding: 10px;
      text-align: center;
      border: 1px solid #ccc;
    }

    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    /* Блок с background-image */
    .background-container {
      flex: 1;
      height: 300px;
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border: 1px solid #ccc;
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://html5book.ru/css-background/",
  ],
};
export const css_images_task_4 = {
  id: "css_images_task_4",
  module: "CSS",
  title: "Адаптивные изображения с использованием srcset и sizes",
  topic: "Адаптивные изображения: srcset, sizes, picture",
  topicId: "css_images",
  sectionId: "css_images_3",
  description:
    "Создайте изображение, которое будет автоматически подстраиваться под ширину экрана с помощью атрибутов `srcset` и `sizes`.",
  steps: [
    "Добавьте тег `<img>` в HTML.",
    "Используйте атрибут `srcset`, чтобы указать разные размеры изображений.",
    "Добавьте атрибут `sizes`, чтобы браузер знал, какое изображение загружать в зависимости от ширины экрана.",
    "Проверьте, как изображение подстраивается при изменении ширины окна браузера.",
    "Стилизуйте изображение для наглядности.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Адаптивные изображения с srcset и sizes</title>
</head>
<body>

  <div class="container">
    <h2>Адаптивное изображение с srcset и sizes</h2>
  <img 
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80" 
  srcset="
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80 400w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80 800w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80 1200w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80 1600w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="Горы и озеро на закате — крупная адаптивная картинка">
  </div>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Адаптивные изображения с srcset и sizes</title>
</head>
<body>

  <div class="container">
    <h2>Адаптивное изображение с srcset и sizes</h2>
   <img 
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80" 
  srcset="
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80 400w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80 800w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80 1200w,
    https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80 1600w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="Горы и озеро на закате — крупная адаптивная картинка">
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
    "https://web.dev/serve-responsive-images/",
    "https://html5book.ru/adaptivnye-izobrazheniya/",
  ],
};
