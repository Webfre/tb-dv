export const css_img_vs_bg_task_1 = {
  id: "css_img_vs_bg_task_1",
  module: "CSS",
  title: "Вставка картинки через тег <img>",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_img_vs_bg",
  description:
    "Вставьте картинку на страницу с помощью тега <img> и добавьте под ней подпись. Используйте реальную ссылку на изображение.",
  steps: [
    "Вставьте картинку с помощью <img src=...> внутри div.",
    "Добавьте подпись под изображением с помощью <figcaption> или отдельного блока.",
    "Установите фиксированную ширину для картинки (например, 300px).",
    "Проверьте, что изображение корректно отображается и можно применить к нему стили (рамку, скругление).",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Изображение через &lt;img&gt;</title>
  <style>
    .img-container {
      width: 320px;
      margin: 40px auto;
      text-align: center;
    }
    .img-container img {
      width: 300px;
      border-radius: 14px;
      border: 3px solid #a1c8ff;
      box-shadow: 0 2px 10px #1a55c122;
      display: block;
      margin: 0 auto 10px;
    }
    .caption {
      color: #346;
      font-size: 16px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="img-container">
    <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Природа">
    <div class="caption">Картинка вставлена через тег &lt;img&gt;</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Изображение через &lt;img&gt;</title>
  <style>
      .img-container {
      width: 320px;
      margin: 40px auto;
      text-align: center;
    }
    .img-container img {
      width: 300px;
      border-radius: 14px;
      border: 3px solid #a1c8ff;
      box-shadow: 0 2px 10px #1a55c122;
      display: block;
      margin: 0 auto 10px;
    }
    .caption {
      color: #346;
      font-size: 16px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="img-container">
    <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Природа">
    <div class="caption">Картинка вставлена через тег &lt;img&gt;</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
   .img-container {
      width: 320px;
      margin: 40px auto;
      text-align: center;
    }
    .img-container img {
      width: 300px;
      border-radius: 14px;
      border: 3px solid #a1c8ff;
      box-shadow: 0 2px 10px #1a55c122;
      display: block;
      margin: 0 auto 10px;
    }
    .caption {
      color: #346;
      font-size: 16px;
      font-style: italic;
    }
  `.trim(),
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/img"],
};
export const css_img_vs_bg_task_2 = {
  id: "css_img_vs_bg_task_2",
  module: "CSS",
  title: "Вставка картинки через background-image",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_img_vs_bg",
  description:
    "Используйте то же изображение, что и в прошлой задаче, но в качестве фонового для блока. Добавьте заголовок поверх картинки. Попробуйте растянуть или обрезать изображение под размеры блока.",
  steps: [
    "Создайте div с классом .bg-img-box.",
    "Установите background-image и задайте размеры (width, height).",
    "Используйте background-size: cover, background-position: center.",
    "Добавьте текстовый заголовок внутри блока, убедитесь, что он виден поверх картинки.",
    "Добавьте overlay (полупрозрачный фон) для лучшей читаемости текста.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фоновое изображение через CSS</title>
  <style>
.bg-img-box {
  position: relative;
  width: 320px;
  height: 180px;
  background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(23, 56, 128, 0.33);
  z-index: 1;
}
.bg-img-box .title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 18px 22px;
  text-shadow: 0 2px 10px #000c;
  width: 100%;
}
  </style>
</head>
<body>
  <div class="bg-img-box">
    <div class="overlay"></div>
    <div class="title">Картинка через background-image</div>
  </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Фоновое изображение через CSS</title>
  <style>
.bg-img-box {
  position: relative;
  width: 320px;
  height: 180px;
  background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(23, 56, 128, 0.33);
  z-index: 1;
}
.bg-img-box .title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 18px 22px;
  text-shadow: 0 2px 10px #000c;
  width: 100%;
}
  </style>
</head>
<body>
  <div class="bg-img-box">
    <div class="overlay"></div>
    <div class="title">Картинка через background-image</div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.bg-img-box {
  position: relative;
  width: 320px;
  height: 180px;
  background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(23, 56, 128, 0.33);
  z-index: 1;
}
.bg-img-box .title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 18px 22px;
  text-shadow: 0 2px 10px #000c;
  width: 100%;
}
  `.trim(),
  resources: ["https://developer.mozilla.org/ru/docs/Web/CSS/background-image"],
};
export const css_img_vs_bg_task_3 = {
  id: "css_img_vs_bg_task_3",
  module: "CSS",
  title: "Сравнение адаптивности: <img> vs background-image",
  topic: "<img> и background-image: в чём разница.",
  topicId: "css_img_vs_bg",
  description:
    "Сравните, как изображение через <img> и через background-image ведёт себя при изменении размеров контейнера. Покажите плюсы и минусы каждого способа с точки зрения адаптивности.",
  steps: [
    "Создайте два блока: в первом используйте <img>, во втором background-image (то же изображение).",
    "Установите для обоих блоков одинаковую ширину 100% (максимум 340px) и фиксированную высоту 170px.",
    "Для <img> используйте object-fit: cover и width/height 100%.",
    "Для блока с background-image используйте background-size: cover и background-position: center.",
    "Поменяйте размер окна и сравните, как оба варианта подстраиваются под размер блока.",
    "Сделайте короткое текстовое описание (например, в отдельном <p>), чем отличаются подходы.",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сравнение <img> и background-image</title>
  <style>
    .wrapper {
      max-width: 370px;
      margin: 40px auto;
      font-family: Arial, sans-serif;
    }
    .compare-block {
      margin-bottom: 26px;
    }
    .img-wrap, .bgimg-wrap {
      width: 100%;
      height: 170px;
      border-radius: 15px;
      overflow: hidden;
      background: #eef2f6;
      margin-bottom: 6px;
      position: relative;
    }
    .img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 15px;
    }
    .bgimg-wrap {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 15px;
    }
    .label {
      font-size: 15px;
      color: #416;
      margin-bottom: 3px;
    }
    .description {
      background: #f7faff;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 15px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="compare-block">
      <div class="label">&lt;img&gt; с object-fit: cover</div>
      <div class="img-wrap">
        <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Image by img">
      </div>
    </div>
    <div class="compare-block">
      <div class="label">background-image + background-size: cover</div>
      <div class="bgimg-wrap"></div>
    </div>
    <div class="description">
      <b>Сравнение:</b> 
      Тег <b>&lt;img&gt;</b> позволяет легко менять источник, удобно для SEO и accessibility, изображение участвует в потоке. 
      <b>background-image</b> — гибче в плане позиционирования, позволяет накладывать overlay/градиенты, но не участвует в потоке и не даёт доступ к alt. 
      Оба способа с cover делают картинку адаптивной, но их лучше выбирать по задаче: <b>&lt;img&gt;</b> — для контентных изображений, <b>background-image</b> — для декоративных.
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
  <title>Сравнение <img> и background-image</title>
  <style>
    .img-wrap, .bgimg-wrap {
      width: 100%;
      height: 170px;
      border-radius: 15px;
      overflow: hidden;
      background: #eef2f6;
      margin-bottom: 6px;
      position: relative;
    }
    .img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 15px;
    }
    .bgimg-wrap {
      background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 15px;
    }
    .label {
      font-size: 15px;
      color: #416;
      margin-bottom: 3px;
    }
    .description {
      background: #f7faff;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 15px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="compare-block">
      <div class="label">&lt;img&gt; с object-fit: cover</div>
      <div class="img-wrap">
        <img src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="Image by img">
      </div>
    </div>
    <div class="compare-block">
      <div class="label">background-image + background-size: cover</div>
      <div class="bgimg-wrap"></div>
    </div>
    <div class="description">
      <b>Сравнение:</b> 
      Тег <b>&lt;img&gt;</b> позволяет легко менять источник, удобно для SEO и accessibility, изображение участвует в потоке. 
      <b>background-image</b> — гибче в плане позиционирования, позволяет накладывать overlay/градиенты, но не участвует в потоке и не даёт доступ к alt. 
      Оба способа с cover делают картинку адаптивной, но их лучше выбирать по задаче: <b>&lt;img&gt;</b> — для контентных изображений, <b>background-image</b> — для декоративных.
    </div>
  </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.img-wrap, .bgimg-wrap {
  width: 100%;
  height: 170px;
  border-radius: 15px;
  overflow: hidden;
  background: #eef2f6;
  margin-bottom: 6px;
  position: relative;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 15px;
}
.bgimg-wrap {
  background-image: url('https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}
.label {
  font-size: 15px;
  color: #416;
  margin-bottom: 3px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img",
    "https://developer.mozilla.org/ru/docs/Web/CSS/background-image",
    "https://css-tricks.com/css-vs-img/",
  ],
};
export const css_img_vs_bg_task_4 = {
  id: "css_img_vs_bg_task_4",
  module: "CSS",
  title: "Использование srcset для ретины",
  topic: "Адаптивные изображения: srcset, sizes, picture",
  topicId: "css_img_vs_bg",
  description:
    "Покажи, как с помощью атрибута srcset можно подгрузить картинку повыше разрешением для экранов Retina, но без изменения размера на обычных экранах.",
  steps: [
    "Создай img с атрибутами src и srcset.",
    "В srcset укажи две версии изображения: обычную и 2x.",
    "Задай фиксированную ширину (например, 350px) для img через CSS.",
    "Проверь результат на разных устройствах (или через DevTools).",
    "Добавь короткий подпояснительный текст.",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>srcset для retina</title>
  <style>
    .img-retina {
      width: 350px;
      border-radius: 12px;
      box-shadow: 0 2px 10px #2356a921;
      border: 2px solid #abd;
      display: block;
      margin: 36px auto 8px;
    }
    .caption {
      text-align: center;
      font-size: 15px;
      color: #337;
    }
  </style>
</head>
<body>
  <img 
    class="img-retina"
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700"
    srcset="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700 1x, https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400 2x"
    alt="Горы и лес">
  <div class="caption">На Retina дисплеях будет загружено изображение 2x</div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>srcset для retina</title>
  <style>
    .img-retina {
      width: 350px;
      border-radius: 12px;
      box-shadow: 0 2px 10px #2356a921;
      border: 2px solid #abd;
      display: block;
      margin: 36px auto 8px;
    }
    .caption {
      text-align: center;
      font-size: 15px;
      color: #337;
    }
  </style>
</head>
<body>
  <img 
    class="img-retina"
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700"
    srcset="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700 1x, https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400 2x"
    alt="Горы и лес">
  <div class="caption">На Retina дисплеях будет загружено изображение 2x</div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
.img-retina {
  width: 350px;
  border-radius: 12px;
  box-shadow: 0 2px 10px #2356a921;
  border: 2px solid #abd;
  display: block;
  margin: 36px auto 8px;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset",
    "https://web.dev/learn/images/responsive-images/",
  ],
};
