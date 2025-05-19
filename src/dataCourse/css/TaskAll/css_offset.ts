export const css_offset_task_1 = {
  id: "css_offset_task_1",
  module: "CSS",
  title: "Смещение с использованием margin и padding",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ с элементами, которые смещены с помощью margin и padding.",
  steps: [
    "Создайте HTML-документ с двумя `<div>`",
    "Задайте первому блоку внешние отступы (`margin`) и внутренние отступы (`padding`)",
    "Задайте второму блоку только внутренние отступы",
    "Настройте цвет фона, границы и отступы для обоих блоков",
    "Проверьте, как отображаются отступы на странице",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Смещение с использованием margin и padding</title>
  <style>
    .block-with-margin {
      margin: 20px;
      padding: 15px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    .block-with-padding {
      padding: 20px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="block-with-margin">
    Блок с внешними (margin) и внутренними (padding) отступами.
  </div>

  <div class="block-with-padding">
    Блок только с внутренними отступами (padding).
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
  <title>Смещение с использованием margin и padding</title>
  <style>
    .block-with-margin {
      margin: 20px;
      padding: 15px;
      background-color: lightblue;
      border: 2px solid #333;
    }

    .block-with-padding {
      padding: 20px;
      background-color: lightcoral;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="block-with-margin">
    Блок с внешними (margin) и внутренними (padding) отступами.
  </div>

  <div class="block-with-padding">
    Блок только с внутренними отступами (padding).
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Смещение с использованием margin и padding */
.block-with-margin {
  margin: 20px;
  padding: 15px;
  background-color: lightblue;
  border: 2px solid #333;
}

.block-with-padding {
  padding: 20px;
  background-color: lightcoral;
  border: 2px solid #333;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/padding",
  ],
};
export const css_offset_task_2 = {
  id: "css_offset_task_2",
  module: "CSS",
  title: "Смещение с использованием margin auto и центрирование",
  topic: "Смещение элементов",
  topicId: "css_offset",
  sectionId: "css_offset1",
  description:
    "Создайте HTML-документ с блоком, который автоматически центрируется на странице с использованием margin: auto.",
  steps: [
    "Создайте HTML-документ с одним `<div>`",
    "Задайте блоку фиксированную ширину и высоту",
    "Настройте `margin: auto` для центрирования блока",
    "Примените цвет фона и границы",
    "Проверьте, что блок выровнен по центру страницы",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Центрирование с помощью margin auto</title>
  <style>
    .centered-block {
      width: 300px;
      height: 200px;
      margin: 50px auto;
      background-color: lightgreen;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="centered-block">
    Этот блок отцентрирован по горизонтали.
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
  <title>Центрирование с помощью margin auto</title>
  <style>
    .centered-block {
      width: 300px;
      height: 200px;
      margin: 50px auto;
      background-color: lightgreen;
      border: 2px solid #333;
    }
  </style>
</head>
<body>

  <div class="centered-block">
    Этот блок отцентрирован по горизонтали.
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Центрирование с использованием margin auto */
.centered-block {
  width: 300px;
  height: 200px;
  margin: 50px auto;
  background-color: lightgreen;
  border: 2px solid #333;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/margin",
    "https://developer.mozilla.org/ru/docs/Web/CSS/centering_block_elements",
  ],
};
export const css_offset_task_3 = {
  id: "css_offset_task_3",
  module: "CSS",
  title: "Абсолютное смещение элементов",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ, в котором элементы позиционируются с использованием position: absolute.",
  steps: [
    "Создайте HTML-документ с контейнером `<div>` и тремя вложенными блоками",
    "Задайте контейнеру `position: relative`",
    "Настройте для вложенных блоков `position: absolute`",
    "Примените разные значения для `top`, `left`, `right` и `bottom`",
    "Проверьте, что блоки корректно отображаются относительно контейнера",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Абсолютное смещение элементов</title>
  <style>
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .box-top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
    }

    .box-bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }

    .box-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>

  <div class="relative-container">
    <div class="box-top-left">Слева сверху</div>
    <div class="box-bottom-right">Справа снизу</div>
    <div class="box-center">По центру</div>
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
  <title>Абсолютное смещение элементов</title>
  <style>
    .relative-container {
      position: relative;
      width: 500px;
      height: 300px;
      background-color: #f9f9f9;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .box-top-left {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
    }

    .box-bottom-right {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }

    .box-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>

  <div class="relative-container">
    <div class="box-top-left">Слева сверху</div>
    <div class="box-bottom-right">Справа снизу</div>
    <div class="box-center">По центру</div>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Абсолютное смещение элементов */
.relative-container {
  position: relative;
  width: 500px;
  height: 300px;
  background-color: #f9f9f9;
  border: 2px solid #333;
}

.box-top-left {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  background-color: lightcoral;
}

.box-bottom-right {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  background-color: lightblue;
}

.box-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background-color: lightgreen;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_offset_task_4 = {
  id: "css_offset_task_4",
  module: "CSS",
  title: "Фиксированное смещение элементов",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ, в котором элемент остаётся зафиксированным при прокрутке страницы, используя position: fixed.",
  steps: [
    "Создайте HTML-документ с длинным контентом для появления вертикальной прокрутки",
    "Добавьте в документ элемент `<div>`, который будет фиксирован в левом нижнем углу",
    "Задайте ему стиль с использованием `position: fixed`",
    "Настройте цвет фона, ширину, высоту и внутренние отступы",
    "Проверьте, что элемент остаётся на месте при прокрутке страницы",
  ],
  difficulty: 2,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фиксированное смещение элемента</title>
  <style>
    /* Контейнер с большим контентом */
    .content {
      height: 1500px;
      background-color: #f3f3f3;
      padding: 20px;
    }

    /* Фиксированный блок в левом нижнем углу */
    .fixed-block {
      position: fixed;
      left: 20px;
      bottom: 20px;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      color: white;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    }
  </style>
</head>
<body>

  <div class="content">
    <p>Прокручивай страницу вниз, чтобы увидеть фиксированный блок в левом нижнем углу.</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
  </div>

  <div class="fixed-block">
    Я всегда на месте!
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
  <title>Фиксированное смещение элемента</title>
  <style>
    /* Контейнер с большим контентом */
    .content {
      height: 1500px;
      background-color: #f3f3f3;
      padding: 20px;
    }

    /* Фиксированный блок в левом нижнем углу */
    .fixed-block {
      position: fixed;
      left: 20px;
      bottom: 20px;
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      color: white;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    }
  </style>
</head>
<body>

  <div class="content">
    <p>Прокручивай страницу вниз, чтобы увидеть фиксированный блок в левом нижнем углу.</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
    <p>Длинный контент, чтобы была возможность прокрутки...</p>
  </div>

  <div class="fixed-block">
    Я всегда на месте!
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Фиксированный блок в левом нижнем углу */
.fixed-block {
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 200px;
  height: 100px;
  background-color: lightcoral;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
export const css_offset_task_5 = {
  id: "css_offset_task_5",
  module: "CSS",
  title: "Модальное окно с фиксированной позицией и затемнением фона",
  topic: "Смещение элементов",
  topicId: "css_offset",
  description:
    "Создайте HTML-документ с модальным окном, которое появляется по клику на кнопку. Реализуйте открытие и закрытие окна только с помощью CSS.",
  steps: [
    "Создайте HTML-документ с кнопкой 'Открыть модальное окно'",
    "Реализуйте модальное окно с фиксированной позицией (`position: fixed`)",
    "Настройте его открытие и закрытие через чекбокс и CSS",
    "Добавьте затемнение фона при открытии окна",
    "Настройте кнопку закрытия окна",
  ],
  difficulty: 5,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Модальное окно без JavaScript</title>
  <style>
    /* Скрытый чекбокс */
    #modal-toggle {
      display: none;
    }

    /* Стили для кнопки */
    label {
      padding: 10px 20px;
      background-color: #007acc;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      margin-top: 50px;
      display: inline-block;
    }

    /* Затемнение фона */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      z-index: 10;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Модальное окно */
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 20;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Чекбокс активен — показать окно и фон */
    #modal-toggle:checked + .overlay,
    #modal-toggle:checked + .overlay + .modal {
      opacity: 1;
      visibility: visible;
    }

    /* Кнопка закрытия */
    .close-btn {
      display: inline-block;
      margin-top: 10px;
      color: #e74c3c;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <label for="modal-toggle">Открыть модальное окно</label>
  <input type="checkbox" id="modal-toggle">

  <div class="overlay"></div>

  <div class="modal">
    <h3>Модальное окно</h3>
    <p>Это пример модального окна с фиксированной позицией, открываемого без JavaScript.</p>
    <label for="modal-toggle" class="close-btn">Закрыть</label>
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
  <title>Модальное окно без JavaScript</title>
  <style>
    /* Скрытый чекбокс */
    #modal-toggle {
      display: none;
    }

    /* Стили для кнопки */
    label {
      padding: 10px 20px;
      background-color: #007acc;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      margin-top: 50px;
      display: inline-block;
    }

    /* Затемнение фона */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      z-index: 10;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Модальное окно */
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 20;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* Чекбокс активен — показать окно и фон */
    #modal-toggle:checked + .overlay,
    #modal-toggle:checked + .overlay + .modal {
      opacity: 1;
      visibility: visible;
    }

    /* Кнопка закрытия */
    .close-btn {
      display: inline-block;
      margin-top: 10px;
      color: #e74c3c;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <label for="modal-toggle">Открыть модальное окно</label>
  <input type="checkbox" id="modal-toggle">

  <div class="overlay"></div>

  <div class="modal">
    <h3>Модальное окно</h3>
    <p>Это пример модального окна с фиксированной позицией, открываемого без JavaScript.</p>
    <label for="modal-toggle" class="close-btn">Закрыть</label>
  </div>

</body>
</html>
  `.trim(),
  codeExampleCSS: `
/* Модальное окно с фиксированной позицией без JavaScript */
#modal-toggle {
  display: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "https://html5book.ru/css-position/",
  ],
};
