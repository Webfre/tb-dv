export const css_position_task_1 = {
  id: "css_position_task_1",
  module: "CSS",
  title: "Позиционирование с использованием position: relative",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ, в котором элемент смещается относительно своего нормального положения на странице с использованием position: relative.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте первому блоку `position: relative` и сместите его на 20px вправо и 10px вниз",
    "Второму блоку не задавайте позиционирование",
    "Настройте цвет фона, границы и отступы",
    "Проверьте, что смещение видно",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Позиционирование Relative</title>
  <style>
    .relative-block {
      position: relative;
      left: 20px;
      top: 10px;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 15px;
    }

    .normal-block {
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="relative-block">
    Я смещён на 20px вправо и на 10px вниз
  </div>

  <div class="normal-block">
    Я на своём обычном месте
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
  <title>Позиционирование Relative</title>
  <style>
    .relative-block {
      position: relative;
      left: 20px;
      top: 10px;
      width: 200px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid #333;
      margin-bottom: 15px;
    }

    .normal-block {
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="relative-block">
    Я смещён на 20px вправо и на 10px вниз
  </div>

  <div class="normal-block">
    Я на своём обычном месте
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Позиционирование с использованием position: relative */
.relative-block {
  position: relative;
  left: 20px;
  top: 10px;
  width: 200px;
  height: 100px;
  background-color: lightblue;
  border: 2px solid #333;
  margin-bottom: 15px;
}

.normal-block {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
  border: 2px solid #333;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_2 = {
  id: "css_position_task_2",
  module: "CSS",
  title: "Позиционирование с использованием z-index",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ, в котором два блока перекрываются. Настройте порядок отображения с использованием z-index.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте обоим блокам `position: absolute`",
    "Сместите их так, чтобы они пересекались",
    "Настройте `z-index` так, чтобы один блок перекрывал другой",
    "Проверьте, что порядок перекрытия изменяется при изменении `z-index`",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Позиционирование с использованием z-index</title>
  <style>
    .box-1 {
      position: absolute;
      top: 50px;
      left: 50px;
      width: 150px;
      height: 150px;
      background-color: lightblue;
      z-index: 1;
    }

    .box-2 {
      position: absolute;
      top: 100px;
      left: 100px;
      width: 150px;
      height: 150px;
      background-color: lightcoral;
      z-index: 2;
    }
  </style>
</head>
<body>

  <div class="box-1">
    Слой 1
  </div>

  <div class="box-2">
    Слой 2 (на переднем плане)
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
  <title>Позиционирование с использованием z-index</title>
  <style>
    .box-1 {
      position: absolute;
      top: 50px;
      left: 50px;
      width: 150px;
      height: 150px;
      background-color: lightblue;
      z-index: 1;
    }

    .box-2 {
      position: absolute;
      top: 100px;
      left: 100px;
      width: 150px;
      height: 150px;
      background-color: lightcoral;
      z-index: 2;
    }
  </style>
</head>
<body>

  <div class="box-1">
    Слой 1
  </div>

  <div class="box-2">
    Слой 2 (на переднем плане)
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Позиционирование с использованием z-index */
.box-1 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 150px;
  height: 150px;
  background-color: lightblue;
  z-index: 1;
}

.box-2 {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 150px;
  height: 150px;
  background-color: lightcoral;
  z-index: 2;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/z-index",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_3 = {
  id: "css_position_task_3",
  module: "CSS",
  title: "Абсолютное позиционирование в контейнере",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ с контейнером, внутри которого расположены блоки с абсолютным позиционированием.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и тремя вложенными блоками",
    "Задайте контейнеру `position: relative`",
    "Вложенным блокам задайте `position: absolute`",
    "Настройте их положение: один в левом верхнем углу, другой в правом нижнем, третий по центру",
    "Проверьте, что при изменении размеров контейнера блоки остаются на своих местах",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Абсолютное позиционирование в контейнере</title>
  <style>
    /* Контейнер */
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
    }

    /* Левый верхний угол */
    .top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Правый нижний угол */
    .bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* По центру */
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>

  <div class="relative-container">
    <div class="top-left">Лево-верх</div>
    <div class="bottom-right">Право-низ</div>
    <div class="center">Центр</div>
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
  <title>Абсолютное позиционирование в контейнере</title>
  <style>
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
    }

    .top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>

  <div class="relative-container">
    <div class="top-left">Лево-верх</div>
    <div class="bottom-right">Право-низ</div>
    <div class="center">Центр</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Абсолютное позиционирование в контейнере */
.relative-container {
  position: relative;
  width: 500px;
  height: 300px;
  background-color: #f9f9f9;
  border: 2px solid #333;
}

.top-left {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-right {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_4 = {
  id: "css_position_task_4",
  module: "CSS",
  title: "Фиксированное позиционирование в шапке и подвале",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ со шапкой и подвалом, которые всегда остаются видимыми при прокрутке страницы.",
  steps: [
    "Создайте HTML-документ с двумя блоками: 'header' и 'footer'",
    "Задайте обоим блокам фиксированное позиционирование",
    "Шапка (`header`) — сверху страницы",
    "Подвал (`footer`) — снизу страницы",
    "Добавьте длинный контент, чтобы появилась вертикальная прокрутка",
    "Проверьте, что при прокрутке страницы они остаются на своих местах",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фиксированное позиционирование шапки и подвала</title>
  <style>
    /* Стили для шапки */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #007acc;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    /* Стили для подвала */
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    /* Контент с отступами, чтобы не перекрывался */
    .content {
      margin-top: 70px;
      margin-bottom: 70px;
      padding: 20px;
      height: 1500px; /* Длинный контент */
      background-color: #f3f3f3;
    }
  </style>
</head>
<body>

  <header>
    Фиксированная шапка
  </header>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что шапка и подвал остаются на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
  </div>

  <footer>
    Фиксированный подвал
  </footer>

</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фиксированное позиционирование шапки и подвала</title>
  <style>
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #007acc;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    .content {
      margin-top: 70px;
      margin-bottom: 70px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  </style>
</head>
<body>

  <header>
    Фиксированная шапка
  </header>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что шапка и подвал остаются на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
  </div>

  <footer>
    Фиксированный подвал
  </footer>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Фиксированное позиционирование для header и footer */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #007acc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.content {
  margin-top: 70px;
  margin-bottom: 70px;
  padding: 20px;
  height: 1500px;
  background-color: #f3f3f3;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_position_task_5 = {
  id: "css_position_task_5",
  module: "CSS",
  title: "Плавающая панель навигации с прокруткой",
  topic: "Позиционирование элементов",
  topicId: "css_position",
  description:
    "Создайте HTML-документ с боковой панелью навигации, которая остаётся видимой при прокрутке страницы.",
  steps: [
    "Создайте HTML-документ с боковой панелью навигации и основным контентом",
    "Задайте панели навигации фиксированное позиционирование (`position: fixed`)",
    "Настройте стили: цвет фона, ширину, высоту",
    "Основной контент должен располагаться справа от панели",
    "Проверьте, что при прокрутке страницы панель остаётся на месте",
  ],
  difficulty: 3,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Плавающая панель навигации с прокруткой</title>
  <style>
    /* Стили для боковой панели */
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 220px;
      height: 100%;
      background-color: #333;
      color: white;
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
    }

    /* Стили для ссылок в панели */
    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
      font-size: 18px;
    }

    .sidebar a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    /* Основной контент */
    .content {
      margin-left: 240px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  </style>
</head>
<body>

  <div class="sidebar">
    <h3>Навигация</h3>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакты</a>
    <a href="#">Часто задаваемые вопросы</a>
    <a href="#">Блог</a>
  </div>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что панель навигации остаётся на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
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
  <title>Плавающая панель навигации с прокруткой</title>
  <style>
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 220px;
      height: 100%;
      background-color: #333;
      color: white;
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
    }

    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
      font-size: 18px;
    }

    .sidebar a:hover {
      background-color: #444;
      padding-left: 5px;
      transition: all 0.2s;
    }

    .content {
      margin-left: 240px;
      padding: 20px;
      height: 1500px;
      background-color: #f3f3f3;
    }
  </style>
</head>
<body>

  <div class="sidebar">
    <h3>Навигация</h3>
    <a href="#">Главная</a>
    <a href="#">О нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакты</a>
    <a href="#">Часто задаваемые вопросы</a>
    <a href="#">Блог</a>
  </div>

  <div class="content">
    <p>Прокручивай страницу вверх и вниз, и ты увидишь, что панель навигации остаётся на месте.</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
    <p>Много-много текста для прокрутки...</p>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Плавающая панель навигации с прокруткой */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100%;
  background-color: #333;
  color: white;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

.sidebar a {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 18px;
}

.sidebar a:hover {
  background-color: #444;
  padding-left: 5px;
  transition: all 0.2s;
}

.content {
  margin-left: 240px;
  padding: 20px;
  height: 1500px;
  background-color: #f3f3f3;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
