export const css_methodologies_1 = {
  id: "css_methodologies_1",
  title: "Что такое CSS-методологии и зачем они нужны",
  content: `
  ## Зачем вообще методологии CSS?

  Когда проект растёт, в CSS часто возникает **беспорядок**:

  - Стили конфликтуют
  - Классы переопределяются случайно
  - Невозможно понять, за что отвечает какой стиль
  - Трудно переиспользовать или масштабировать код

  Методологии помогают избежать этого. Они дают **понятные правила**, как писать CSS:

  - чисто
  - структурировано
  - без конфликтов

  ---

  ## Что такое CSS-методология?

  Это **система правил**, которая помогает организовать CSS-код:  
  — имена классов, структура файлов, подход к стилям.

  Примеры популярных методологий:

  | Методология  | Суть                            |
  |--------------|---------------------------------|
  | BEM          | Блок / Элемент / Модификатор    |
  | SMACSS       | Деление по ролям (layout, base) |
  | OOCSS        | Повторное использование "объектов" |
  | Atomic CSS   | Мини-классы (Tailwind-подход)   |

  ---

  ## Почему BEM — самый популярный?

  Методология **BEM (Block — Element — Modifier)**:

  - легко читается
  - гибко масштабируется
  - подходит для командной разработки

  Она не требует дополнительных библиотек и легко сочетается с SCSS, CSS Modules, React и любыми фреймворками.

  Пример:

  \`\`\`html
  <div class="card card--active">
    <div class="card__title">Заголовок</div>
    <div class="card__text">Описание</div>
  </div>
  \`\`\`

  ---

  ## Плохой пример (хаос):

  \`\`\`html
  <div class="box item special green big active active-2">
    <p class="text bold center">Текст</p>
  </div>
  \`\`\`

   Что делает каждый класс? Кто знает.

  ---

  ## Хороший пример (структура):

  \`\`\`html
  <div class="profile profile--active">
    <div class="profile__avatar"></div>
    <div class="profile__name">Имя</div>
  </div>
  \`\`\`

   Всё понятно:
  - \`profile\` — основной блок
  - \`profile__avatar\` — элемент
  - \`profile--active\` — модификатор

  ---

  ## Вывод

  CSS-методологии делают код:
  - **понятным**
  - **масштабируемым**
  - **удобным для команды**

  В следующем уроке разберём **BEM-подход** подробно, с примерами и практикой.

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 8px;
    }

    .card--active {
      border-color: #2196f3;
      background-color: #e3f2fd;
    }

    .card__title {
      font-size: 20px;
      font-weight: bold;
    }

    .card__text {
      font-size: 14px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="card card--active">
    <div class="card__title">Пример BEM</div>
    <div class="card__text">Это текст внутри карточки.</div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}

.card--active {
  border-color: #2196f3;
  background-color: #e3f2fd;
}

.card__title {
  font-size: 20px;
  font-weight: bold;
}

.card__text {
  font-size: 14px;
  color: #333;
}
  `.trim(),

  resources: [
    "https://ru.bem.info/methodology/",
    "https://css-tricks.com/bem-101/",
    "https://htmlacademy.ru/blog/css/bem-cheatsheet",
  ],
};
export const css_methodologies_2 = {
  id: "css_methodologies_2",
  title: "Методология BEM: блок, элемент, модификатор",
  content: `
  ## Что такое BEM?

  BEM — это методология, которая помогает **структурировать CSS-классы** и писать **предсказуемый код**.

  Расшифровка:
  - **B** — Block (блок)
  - **E** — Element (элемент)
  - **M** — Modifier (модификатор)

  ---  

  ##  1. Блок

  Независимый компонент интерфейса (например, кнопка, карточка, форма).

  \`\`\`html
  <div class="button">Кнопка</div>
  \`\`\`

  ---  

  ##  2. Элемент

  Часть блока, не может использоваться сам по себе. Пишется через два подчёркивания:

  \`\`\`html
  <div class="card">
    <div class="card__title">Заголовок</div>
    <div class="card__text">Описание</div>
  </div>
  \`\`\`

  ---  

  ##  3. Модификатор

  Изменяет внешний вид или поведение блока/элемента. Пишется через два дефиса:

  \`\`\`html
  <button class="button button--primary">Отправить</button>
  \`\`\`

  Также может быть элемент с модификатором:

  \`\`\`html
  <div class="card__title card__title--big">Заголовок</div>
  \`\`\`

  ---  

  ## Как не надо

   Смешивать имена:

  \`\`\`html
  <div class="title highlight box1">...</div>
  \`\`\`

   Использовать сокращения и непонятные названия:

  \`\`\`html
  <div class="c-bx__ttl--mod1">...</div>
  \`\`\`

  ---  

  ## Пример структуры блока по BEM

  \`\`\`html
  <article class="post post--featured">
    <h2 class="post__title">Заголовок</h2>
    <p class="post__text">Текст статьи</p>
    <a class="post__link post__link--active" href="#">Читать далее</a>
  </article>
  \`\`\`

  Всё понятно:
  - \`post\` — блок
  - \`post__title\`, \`post__text\`, \`post__link\` — элементы
  - \`post--featured\`, \`post__link--active\` — модификаторы

  ---  

  ## Как выглядит в CSS

  \`\`\`css
  .post {
    padding: 20px;
  }

  .post--featured {
    background-color: #f9f9f9;
  }

  .post__title {
    font-size: 24px;
  }

  .post__link--active {
    color: blue;
    text-decoration: underline;
  }
  \`\`\`

  ---  

  ## Зачем это всё?

  - Классы читаются как предложения
  - Понятно, что к чему относится
  - Нет конфликтов между компонентами
  - Удобно работать в команде и подключать SCSS

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .post {
      padding: 20px;
      border: 1px solid #ddd;
    }

    .post--featured {
      background-color: #fffde7;
    }

    .post__title {
      font-size: 24px;
      font-weight: bold;
    }

    .post__text {
      font-size: 16px;
      color: #444;
    }

    .post__link {
      color: #2196f3;
      text-decoration: none;
    }

    .post__link--active {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <article class="post post--featured">
    <h2 class="post__title">Заголовок статьи</h2>
    <p class="post__text">Краткое описание статьи.</p>
    <a class="post__link post__link--active" href="#">Читать полностью</a>
  </article>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
.post {
  padding: 20px;
  border: 1px solid #ddd;
}

.post--featured {
  background-color: #fffde7;
}

.post__title {
  font-size: 24px;
  font-weight: bold;
}

.post__text {
  font-size: 16px;
  color: #444;
}

.post__link {
  color: #2196f3;
  text-decoration: none;
}

.post__link--active {
  text-decoration: underline;
}
  `.trim(),

  resources: [
    "https://ru.bem.info/methodology/",
    "https://css-tricks.com/bem-101/",
    "https://htmlacademy.ru/blog/css/bem-cheatsheet",
  ],
};
