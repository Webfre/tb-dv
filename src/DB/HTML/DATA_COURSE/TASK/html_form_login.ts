export const html_form_login_1 = {
  id: "html_form_login_1",
  module: "HTML",
  title: "Создание простой формы",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_1",
  description:
    "Создайте простую HTML-форму без указания атрибутов `action` и `method`, чтобы продемонстрировать базовую структуру формы и её поля.",
  steps: [
    "Создайте новый HTML-файл, например `form.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте форму с тегом `<form>`.",
    "Внутри формы добавьте следующие поля:",
    'Текстовое поле для имени (`<input type="text" name="username" />`)',
    'Поле для email (`<input type="email" name="email" />`)',
    'Кнопку отправки (`<button type="submit">Отправить</button>`)',
    "Откройте файл в браузере и проверьте, что форма отображается корректно и кнопка реагирует на клик.",
  ],
  difficulty: 1,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Простая форма</title>
</head>
<body>
  <h1>Регистрация</h1>

  <form>
    <label for="username">Имя:</label><br />
    <input type="text" id="username" name="username" placeholder="Иван Иванов" /><br /><br />

    <label for="email">Email:</label><br />
    <input type="email" id="email" name="email" placeholder="user@example.com" /><br /><br />

    <button type="submit">Отправить</button>
  </form>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Простая форма</title>
</head>
<body>
  <h1>Регистрация</h1>

  <form>
    <label for="username">Имя:</label><br />
    <input type="text" id="username" name="username" placeholder="Иван Иванов" /><br /><br />

    <label for="email">Email:</label><br />
    <input type="email" id="email" name="email" placeholder="user@example.com" /><br /><br />

    <button type="submit">Отправить</button>
  </form>
</body>
</html>`,
};
export const html_form_login_6 = {
  id: "html_form_login_6",
  module: "HTML",
  title: "Простая форма регистрации",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_2",
  description:
    "Создайте HTML-страницу с формой регистрации: поля для имени пользователя, email, пароля и подтверждения пароля с использованием встроенной валидации.",
  steps: [
    "Создайте файл `registration.html` и добавьте базовую HTML-структуру.",
    "В `<body>` разместите заголовок `<h1>` с текстом «Регистрация пользователя».",
    "Под заголовком создайте тег `<form>` (без `action` и `method`).",
    "Внутри формы добавьте поля:",
    '`<input type="text">` для имени пользователя (атрибуты `id`, `name`, `placeholder`, `required`, `minlength="3"`).',
    '`<input type="email">` для email (`required`).',
    '`<input type="password">` для пароля (`required`, `minlength="6"`).',
    '`<input type="password">` для подтверждения пароля (`required`, `minlength="6"`).',
    'Добавьте кнопку `<button type="submit">` для отправки формы.',
    "Откройте в браузере и убедитесь, что поля отмечены как обязательные и проверяются при попытке отправки пустой формы.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Регистрация</title>
</head>
<body>
  <h1>Регистрация пользователя</h1>

  <form>
    <label for="username">Имя пользователя:</label><br />
    <input
      type="text"
      id="username"
      name="username"
      placeholder="ivan123"
      required
      minlength="3"
    /><br /><br />

    <label for="email">Email:</label><br />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="user@example.com"
      required
    /><br /><br />

    <label for="password">Пароль:</label><br />
    <input
      type="password"
      id="password"
      name="password"
      placeholder="••••••"
      required
      minlength="6"
    /><br /><br />

    <label for="confirm_password">Подтвердите пароль:</label><br />
    <input
      type="password"
      id="confirm_password"
      name="confirm_password"
      placeholder="••••••"
      required
      minlength="6"
    /><br /><br />

    <button type="submit">Зарегистрироваться</button>
  </form>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Регистрация</title>
</head>
<body>
  <h1>Регистрация пользователя</h1>

  <form>
    <label for="username">Имя пользователя:</label><br />
    <input
      type="text"
      id="username"
      name="username"
      placeholder="ivan123"
      required
      minlength="3"
    /><br /><br />

    <label for="email">Email:</label><br />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="user@example.com"
      required
    /><br /><br />

    <label for="password">Пароль:</label><br />
    <input
      type="password"
      id="password"
      name="password"
      placeholder="••••••"
      required
      minlength="6"
    /><br /><br />

    <label for="confirm_password">Подтвердите пароль:</label><br />
    <input
      type="password"
      id="confirm_password"
      name="confirm_password"
      placeholder="••••••"
      required
      minlength="6"
    /><br /><br />

    <button type="button">Зарегистрироваться</button>
  </form>
</body>
</html>`,
};
export const html_form_login_7 = {
  id: "html_form_login_7",
  module: "HTML",
  title: "Создание формы опроса",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_2",
  description:
    "Создайте HTML-страницу с формой опроса, демонстрирующей работу различных элементов управления: текстового поля, радиокнопок, чекбоксов, выпадающего списка и многострочного поля.",
  steps: [
    "Создайте файл `survey.html` с базовой структурой HTML-документа.",
    "Внутри `<body>` добавьте заголовок `<h1>` с текстом «Опрос: Ваше мнение».",
    "Под заголовком создайте `<form>` без атрибутов `action` и `method`.",
    "Добавьте поля опроса:",
    'Текстовое поле `<input type="text" name="username" placeholder="Ваше имя">`.',
    'Группа радиокнопок `<input type="radio" name="satisfaction" value="1">…` для оценки удовлетворённости (1–5).',
    'Чекбоксы `<input type="checkbox" name="features" value="design">…` для выбора понравившихся разделов (дизайн, функционал, скорость).',
    'Выпадающий список `<select name="frequency">` с опциями (Ежедневно, Еженедельно, Реже).',
    'Многострочное поле `<textarea name="comments" rows="4" placeholder="Ваши комментарии"></textarea>`.',
    'Добавьте кнопку `<button type="submit">Отправить ответы</button>`.',
    "Откройте страницу в браузере и убедитесь, что все поля работают и можно выбрать несколько чекбоксов, только одну радиокнопку и т.д.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/textarea",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Опрос: Ваше мнение</title>
</head>
<body>
  <h1>Опрос: Ваше мнение</h1>

  <form>
    <!-Имя пользователя -->
    <label for="username">Имя:</label><br>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Ваше имя"
    ><br><br>

    <!-Оценка удовлетворённости -->
    <p>Насколько вы довольны сайтом?</p>
    <label><input type="radio" name="satisfaction" value="1">1</label>
    <label><input type="radio" name="satisfaction" value="2">2</label>
    <label><input type="radio" name="satisfaction" value="3">3</label>
    <label><input type="radio" name="satisfaction" value="4">4</label>
    <label><input type="radio" name="satisfaction" value="5">5</label><br><br>

    <!-Выбор понравившихся разделов -->
    <p>Что вам понравилось? (можно несколько вариантов)</p>
    <label><input type="checkbox" name="features" value="design">Дизайн</label>
    <label><input type="checkbox" name="features" value="functionality">Функционал</label>
    <label><input type="checkbox" name="features" value="performance">Скорость</label><br><br>

    <!-Частота посещений -->
    <label for="frequency">Как часто вы посещаете сайт?</label><br>
    <select id="frequency" name="frequency">
      <option value="daily">Ежедневно</option>
      <option value="weekly">Еженедельно</option>
      <option value="monthly">Ежемесячно</option>
      <option value="rarely">Реже</option>
    </select><br><br>

    <!-Комментарии -->
    <label for="comments">Ваши комментарии:</label><br>
    <textarea
      id="comments"
      name="comments"
      rows="4"
      placeholder="Ваши комментарии"
    ></textarea><br><br>

    <!-Отправка формы -->
    <button type="submit">Отправить ответы</button>
  </form>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Опрос: Ваше мнение</title>
</head>
<body>
  <h1>Опрос: Ваше мнение</h1>

  <form>
    <label for="username">Имя:</label><br>
    <input type="text" id="username" name="username" placeholder="Ваше имя"><br><br>

    <p>Насколько вы довольны сайтом?</p>
    <label><input type="radio" name="satisfaction" value="1">1</label>
    <label><input type="radio" name="satisfaction" value="2">2</label>
    <label><input type="radio" name="satisfaction" value="3">3</label>
    <label><input type="radio" name="satisfaction" value="4">4</label>
    <label><input type="radio" name="satisfaction" value="5">5</label><br><br>

    <p>Что вам понравилось? (можно несколько вариантов)</p>
    <label><input type="checkbox" name="features" value="design">Дизайн</label>
    <label><input type="checkbox" name="features" value="functionality">Функционал</label>
    <label><input type="checkbox" name="features" value="performance">Скорость</label><br><br>

    <label for="frequency">Как часто вы посещаете сайт?</label><br>
    <select id="frequency" name="frequency">
      <option value="daily">Ежедневно</option>
      <option value="weekly">Еженедельно</option>
      <option value="monthly">Ежемесячно</option>
      <option value="rarely">Реже</option>
    </select><br><br>

    <label for="comments">Ваши комментарии:</label><br>
    <textarea id="comments" name="comments" rows="4" placeholder="Ваши комментарии"></textarea><br><br>

    <button type="button">Отправить ответы</button>
  </form>
</body>
</html>`,
};

export const html_form_login_2 = {
  id: "html_form_login_2",
  module: "HTML",
  title: "Различные типы input-элементов",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_2",

  description:
    "Создайте HTML-форму с полями различных типов: `text`, `email`, `password`, `checkbox`, `radio`.",
  steps: [
    "Создайте новый HTML-файл, например `input-types.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте форму с тегом `<form>` и произвольным `action`, например `/submit`.",
    "Добавьте следующие поля ввода с подписями:",
    'Текстовое поле для имени (`type="text"`)',
    'Поле для ввода email (`type="email"`)',
    'Поле для пароля (`type="password"`)',
    "Чекбокс с подписью 'Согласен с условиями' (`type=\"checkbox\"`)",
    "Два переключателя (`type=\"radio\"`) с вариантами пола: 'Мужчина', 'Женщина'",
    'Кнопку отправки формы (`type="submit"`)',
    "Проверьте, как отображаются и работают все поля.",
  ],
  difficulty: 2,
  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/input"],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Типы input</title>
  </head>
  <body>
    <h1>Форма регистрации</h1>

    <form action="/submit" method="post">
      <label for="name">Имя:</label><br />
      <input type="text" id="name" name="name"  /><br /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email"  /><br /><br />

      <label for="password">Пароль:</label><br />
      <input type="password" id="password" name="password"  /><br /><br />

      <label>
        <input type="checkbox" name="agreement"  />
        Согласен с условиями
      </label><br /><br />

      <p>Пол:</p>
      <label>
        <input type="radio" name="gender" value="male"  />
        Мужчина
      </label><br />
      <label>
        <input type="radio" name="gender" value="female"  />
        Женщина
      </label><br /><br />

      <button type="submit">Зарегистрироваться</button>
    </form>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Типы input</title>
  </head>
  <body>
    <h1>Форма регистрации</h1>

    <form action="/submit" method="post">
      <label for="name">Имя:</label><br />
      <input type="text" id="name" name="name"  /><br /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email"  /><br /><br />

      <label for="password">Пароль:</label><br />
      <input type="password" id="password" name="password"  /><br /><br />

      <label>
        <input type="checkbox" name="agreement"  />
        Согласен с условиями
      </label><br /><br />

      <p>Пол:</p>
      <label>
        <input type="radio" name="gender" value="male"  />
        Мужчина
      </label><br />
      <label>
        <input type="radio" name="gender" value="female"  />
        Женщина
      </label><br /><br />

      <button type="submit">Зарегистрироваться</button>
    </form>
  </body>
</html>`,
};

export const html_form_login_3 = {
  id: "html_form_login_3",
  module: "HTML",
  title: "Использование select, textarea и button в HTML-форме",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_3",

  description:
    "Создайте HTML-форму, в которой используются элементы `select`, `textarea` и `button` для ввода и отправки данных.",
  steps: [
    "Создайте новый HTML-файл, например `form-elements.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте форму с тегом `<form>`.",
    "Добавьте выпадающий список (`<select>`) с тремя вариантами: 'Фронтенд', 'Бэкенд', 'Фулстек'.",
    "Добавьте многострочное текстовое поле (`<textarea>`) с плейсхолдером 'Расскажите о себе'.",
    'Добавьте кнопку отправки формы (`<button type="submit">`).',
    "Проверьте, как работают все элементы формы.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/button",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Элементы формы</title>
  </head>
  <body>
    <h1>Анкета разработчика</h1>

    <form action="/submit" method="post">
      <label for="specialization">Специализация:</label><br />
      <select id="specialization" name="specialization" >
        <option value="">-Выберите --</option>
        <option value="frontend">Фронтенд</option>
        <option value="backend">Бэкенд</option>
        <option value="fullstack">Фулстек</option>
      </select><br /><br />

      <label for="about">О себе:</label><br />
      <textarea 
        id="about" 
        name="about" 
        rows="5" 
        cols="40" 
        placeholder="Расскажите о себе..." 
        
      ></textarea><br /><br />

      <button type="submit">Отправить анкету</button>
    </form>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Элементы формы</title>
  </head>
  <body>
    <h1>Анкета разработчика</h1>

    <form action="/submit" method="post">
      <label for="specialization">Специализация:</label><br />
      <select id="specialization" name="specialization" >
        <option value="">-Выберите --</option>
        <option value="frontend">Фронтенд</option>
        <option value="backend">Бэкенд</option>
        <option value="fullstack">Фулстек</option>
      </select><br /><br />

      <label for="about">О себе:</label><br />
      <textarea 
        id="about" 
        name="about" 
        rows="5" 
        cols="40" 
        placeholder="Расскажите о себе..." 
        required
      ></textarea><br /><br />

      <button type="submit">Отправить анкету</button>
    </form>
  </body>
</html>`,
};
export const html_form_login_8 = {
  id: "html_form_login_8",
  module: "HTML",
  title: "Создание контактной формы",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_3",
  description:
    "Сверстайте HTML-страницу с простой контактной формой, включающей разные типы полей: текст, email, телефон, дата, загрузка файла и чекбокс.",
  steps: [
    "Создайте файл `contact.html` с базовой HTML-структурой.",
    "Внутри `<body>` добавьте заголовок `<h1>` «Контактная форма».",
    "Под заголовком разместите `<form>` без атрибутов `action` и `method`.",
    "Добавьте поля формы:",
    'Текстовое поле для имени (`<input type="text" name="name" placeholder="Ваше имя" required>`).',
    'Поле для email (`<input type="email" name="email" placeholder="email@example.com" required>`).',
    'Поле для телефона (`<input type="tel" name="phone" placeholder="+7 (___) ___-__-__">`).',
    'Поле для выбора даты встречи (`<input type="date" name="date">`).',
    'Поле для загрузки файла (`<input type="file" name="attachment">`).',
    'Чекбокс «Подписаться на рассылку» (`<input type="checkbox" name="subscribe">`).',
    'Кнопка отправки `<button type="submit">Отправить</button>`. ',
    "Откройте файл в браузере и проверьте, что все элементы отображаются и работают (валидация email/required).",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Контактная форма</title>
</head>
<body>
  <h1>Контактная форма</h1>

  <form>
    <label for="name">Имя:<br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ваше имя"
        required
      />
    </label><br /><br />

    <label for="email">Email:<br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email@example.com"
        required
      />
    </label><br /><br />

    <label for="phone">Телефон:<br />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+7 (___) ___-__-__"
      />
    </label><br /><br />

    <label for="date">Дата встречи:<br />
      <input
        type="date"
        id="date"
        name="date"
      />
    </label><br /><br />

    <label for="attachment">Файл:<br />
      <input
        type="file"
        id="attachment"
        name="attachment"
      />
    </label><br /><br />

    <label>
      <input
        type="checkbox"
        name="subscribe"
      />
      Подписаться на рассылку
    </label><br /><br />

    <button type="submit">Отправить</button>
  </form>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Контактная форма</title>
</head>
<body>
  <h1>Контактная форма</h1>

  <form>
    <label for="name">Имя:<br />
      <input type="text" id="name" name="name" placeholder="Ваше имя" required />
    </label><br /><br />

    <label for="email">Email:<br />
      <input type="email" id="email" name="email" placeholder="email@example.com" required />
    </label><br /><br />

    <label for="phone">Телефон:<br />
      <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" />
    </label><br /><br />

    <label for="date">Дата встречи:<br />
      <input type="date" id="date" name="date" />
    </label><br /><br />

    <label for="attachment">Файл:<br />
      <input type="file" id="attachment" name="attachment" />
    </label><br /><br />

    <label>
      <input type="checkbox" name="subscribe" />
      Подписаться на рассылку
    </label><br /><br />

    <button type="button">Отправить</button>
  </form>
</body>
</html>`,
};
export const html_form_login_9 = {
  id: "html_form_login_9",
  module: "HTML",
  title: "Комплексная форма обратной связи с HTML5-валидацией",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_3",
  description:
    "Сверстайте продвинутую форму обратной связи, демонстрирующую работу различных HTML5-элементов и встроенной валидации без JavaScript.",
  steps: [
    "Создайте файл `feedback.html` с базовой структурой HTML.",
    "Внутри `<body>` добавьте `<h1>` «Обратная связь» и создайте `<form>` без `action` и `method`.",
    "Разбейте форму на логические части с помощью `<fieldset>` и `<legend>`:",
    "  1. **Контактная информация**:",
    '   `<input type="text" name="fullname" placeholder="ФИО" required minlength="3" maxlength="50">`',
    '   `<input type="email" name="email" placeholder="email@example.com" required>`',
    '   `<input type="tel" name="phone" placeholder="+7 (___) ___-__-__" pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}" title="+7 (123) 456-78-90">`',
    "  2. **Информация о заказе**:",
    '   `<input list="topics" name="topic" placeholder="Тема обращения" required>` и `<datalist id="topics">` с опциями (Техническая поддержка, Биллинг, Предложения).',
    '   `<input type="number" name="order_id" placeholder="Номер заказа" min="1">`',
    "  3. **Сообщение**:",
    '   `<textarea name="message" rows="6" placeholder="Ваше сообщение" required minlength="20"></textarea>`',
    '   `<input type="file" name="attachment" accept="image/*,.pdf" multiple>`',
    "  4. **Дополнительно**:",
    '   `<input type="range" name="rating" min="1" max="5" step="1">` с описанием шкалы 1–5.',
    '   `<input type="color" name="favorite_color" value="#0066cc">`.',
    'Добавьте `<button type="submit">Отправить</button>` и `<button type="reset">Сбросить</button>`.',
    "Откройте в браузере и проверьте встроенную валидацию (required, minlength, pattern и др.).",
  ],
  difficulty: 4,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/fieldset",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/datalist",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Обратная связь</title>
</head>
<body>
  <h1>Обратная связь</h1>
  <form>
    <fieldset>
      <legend>Контактная информация</legend>
      <label>
        ФИО:<br>
        <input type="text"
               name="fullname"
               placeholder="Иванов Иван Иванович"
               required minlength="3" maxlength="50">
      </label><br><br>
      <label>
        Email:<br>
        <input type="email"
               name="email"
               placeholder="email@example.com"
               required>
      </label><br><br>
      <label>
        Телефон:<br>
        <input type="tel"
               name="phone"
               placeholder="+7 (123) 456-78-90"
               pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}"
               title="+7 (123) 456-78-90">
      </label>
    </fieldset>
    <br>

    <fieldset>
      <legend>Информация о заказе</legend>
      <label>
        Тема обращения:<br>
        <input list="topics"
               name="topic"
               placeholder="Выберите тему"
               required>
        <datalist id="topics">
          <option value="Техническая поддержка">
          <option value="Биллинг">
          <option value="Предложения">
        </datalist>
      </label><br><br>
      <label>
        Номер заказа:<br>
        <input type="number"
               name="order_id"
               placeholder="12345"
               min="1">
      </label>
    </fieldset>
    <br>

    <fieldset>
      <legend>Сообщение</legend>
      <label>
        Ваше сообщение:<br>
        <textarea name="message"
                  rows="6"
                  placeholder="Опишите вашу проблему или вопрос"
                  required minlength="20"></textarea>
      </label><br><br>
      <label>
        Вложения:<br>
        <input type="file"
               name="attachment"
               accept="image/*,.pdf"
               multiple>
      </label>
    </fieldset>
    <br>

    <fieldset>
      <legend>Дополнительно</legend>
      <label>
        Оцените работу (1–5):<br>
        <input type="range"
               name="rating"
               min="1" max="5" step="1">
      </label><br><br>
      <label>
        Любимый цвет:<br>
        <input type="color"
               name="favorite_color"
               value="#0066cc">
      </label>
    </fieldset>
    <br>

    <button type="submit">Отправить</button>
    <button type="reset">Сбросить</button>
  </form>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Обратная связь</title>
</head>
<body>
  <h1>Обратная связь</h1>
  <form>
    <fieldset>
      <legend>Контактная информация</legend>
      <label>
        ФИО:<br>
        <input type="text"
               name="fullname"
               placeholder="Иванов Иван Иванович"
               required minlength="3" maxlength="50">
      </label><br><br>
      <label>
        Email:<br>
        <input type="email"
               name="email"
               placeholder="email@example.com"
               required>
      </label><br><br>
      <label>
        Телефон:<br>
        <input type="tel"
               name="phone"
               placeholder="+7 (123) 456-78-90"
               pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}"
               title="+7 (123) 456-78-90">
      </label>
    </fieldset>
    <br>

    <fieldset>
      <legend>Информация о заказе</legend>
      <label>
        Тема обращения:<br>
        <input list="topics"
               name="topic"
               placeholder="Выберите тему"
               required>
        <datalist id="topics">
          <option value="Техническая поддержка">
          <option value="Биллинг">
          <option value="Предложения">
        </datalist>
      </label><br><br>
      <label>
        Номер заказа:<br>
        <input type="number"
               name="order_id"
               placeholder="12345"
               min="1">
      </label>
    </fieldset>
    <br>

    <fieldset>
      <legend>Сообщение</legend>
      <label>
        Ваше сообщение:<br>
        <textarea name="message"
                  rows="6"
                  placeholder="Опишите вашу проблему или вопрос"
                  required minlength="20"></textarea>
      </label><br><br>
      <label>
        Вложения:<br>
        <input type="file"
               name="attachment"
               accept="image/*,.pdf"
               multiple>
      </label>
    </fieldset>
    <br>

    <fieldset>
      <legend>Дополнительно</legend>
      <label>
        Оцените работу (1–5):<br>
        <input type="range"
               name="rating"
               min="1" max="5" step="1">
      </label><br><br>
      <label>
        Любимый цвет:<br>
        <input type="color"
               name="favorite_color"
               value="#0066cc">
      </label>
    </fieldset>
    <br>

    <button type="button">Отправить</button>
    <button type="reset">Сбросить</button>
  </form>
</body>
</html>`,
};

export const html_form_login_4 = {
  id: "html_form_login_4",
  module: "HTML",
  title: "Использование атрибутов required, disabled и readonly",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_4",

  description:
    "Создайте HTML-форму и примените к полям атрибуты `required`, `disabled` и `readonly`, чтобы продемонстрировать их поведение.",
  steps: [
    "Создайте новый HTML-файл, например `form-attributes.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Создайте форму с произвольным `action`, например `/submit`, и метод `post`.",
    "Добавьте следующие поля с соответствующими атрибутами:",
    'Поле имени (`type="text"`) с атрибутом `required` — без него форма не отправится.',
    'Поле email (`type="email"`) с атрибутом `readonly` — можно выделить и скопировать, но нельзя изменить.',
    'Поле пароля (`type="password"`) с атрибутом `disabled` — недоступно для ввода.',
    "Кнопку отправки формы.",
    "Проверьте поведение каждого поля при попытке заполнения и отправки формы.",
  ],
  difficulty: 3,
  resources: [],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Атрибуты формы</title>
  </head>
  <body>
    <h1>Регистрация</h1>

    <form action="/submit" method="post">
      <label for="name">Имя (обязательное):</label><br />
      <input type="text" id="name" name="name" required /><br /><br />

      <label for="email">Email (только для чтения):</label><br />
      <input type="email" id="email" name="email" value="readonly@example.com" readonly /><br /><br />

      <label for="password">Пароль (отключено):</label><br />
      <input type="password" id="password" name="password" disabled /><br /><br />

      <button type="submit">Отправить</button>
    </form>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Атрибуты формы</title>
  </head>
  <body>
    <h1>Регистрация</h1>
    <form action="/submit" method="post">
      <label for="name">Имя (обязательное):</label><br />
      <input type="text" id="name" name="name" required /><br /><br />

      <label for="email">Email (только для чтения):</label><br />
      <input type="email" id="email" name="email" value="readonly@example.com" readonly /><br /><br />

      <label for="password">Пароль (отключено):</label><br />
      <input type="password" id="password" name="password" disabled /><br /><br />

      <button type="submit">Отправить</button>
    </form>
  </body>
</html>`,
};

export const html_form_login_5 = {
  id: "html_form_login_5",
  module: "HTML",
  title: "Валидация формы",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_5",
  description:
    "Создайте HTML-форму, в которой используется встроенная валидация HTML5: ограничения по длине, шаблону, числовым значениям и типам данных.",
  steps: [
    "Создайте новый HTML-файл, например `form-validation.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Создайте форму с атрибутами `action` и `method`.",
    "Добавьте следующие поля с валидацией:",
    'Имя: `type="text"`, `required`, `minlength="3"`, `maxlength="20"`.',
    'Пароль: `type="password"`, `required`, `pattern="[A-Za-z0-9]{6,}"` (только латинские буквы и цифры, минимум 6 символов).',
    "[A-Za-z0-9] — допустимые символы: A-Z — заглавные буквы латиницы , a-z — строчные буквы латиницы 0-9 — цифры ,{6,} — количество символов: минимум 6 символов",
    'Возраст: `type="number"`, `min="18"`, `max="99"`.',
    'Email: `type="email"`, `required`.',
    "Кнопка отправки.",
    "Проверьте, что браузер не позволяет отправить форму при нарушении правил валидации.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Constraint_validation",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Валидация</title>
  </head>
  <body>
    <h1>Регистрация пользователя</h1>

    <form action="/submit" method="post">
      <label for="name">Имя:</label><br />
      <input type="text" id="name" name="name" required minlength="3" maxlength="20" /><br /><br />

      <label for="password">Пароль:</label><br />
      <input type="password" id="password" name="password" required pattern="[A-Za-z0-9]{6,}" /><br />
      <small>Минимум 6 символов, только латиница и цифры.</small><br /><br />

      <label for="age">Возраст:</label><br />
      <input type="number" id="age" name="age" min="18" max="99" /><br /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email" required /><br /><br />

      <button type="submit">Зарегистрироваться</button>
    </form>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Валидация</title>
  </head>
  <body>
    <h1>Регистрация пользователя</h1>

    <form action="/submit" method="post">
      <label for="name">Имя:</label><br />
      <input type="text" id="name" name="name" required minlength="3" maxlength="20" /><br /><br />

      <label for="password">Пароль:</label><br />
      <input type="password" id="password" name="password" required pattern="[A-Za-z0-9]{6,}" /><br />
      <small>Минимум 6 символов, только латиница и цифры.</small><br /><br />

      <label for="age">Возраст:</label><br />
      <input type="number" id="age" name="age" min="18" max="99" /><br /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email" required /><br /><br />

      <button type="submit">Зарегистрироваться</button>
    </form>
  </body>
</html>`,
};
export const html_form_login_10 = {
  id: "html_form_login_10",
  module: "HTML",
  title: "Продвинутая валидация форм",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  sectionId: "html_form_5",
  description:
    "Создайте HTML-форму обратной связи с различными полями и продемонстрируйте встроенную валидацию HTML5: обязательность, диапазоны, длину, шаблоны и встроенные типы данных.",
  steps: [
    "Создайте файл `feedback-validation.html` с базовой структурой HTML.",
    "Добавьте в `<body>` заголовок `<h1>` — «Обратная связь» и тег `<form>` (без `action`/`method`).",
    "Добавьте поля с валидацией:",
    'Имя: `<input type="text" name="fullname" placeholder="Иван Иванов" required minlength="3" maxlength="30">`',
    'Email: `<input type="email" name="email" placeholder="user@example.com" required>`',
    'Телефон: `<input type="tel" name="phone" placeholder="+7 (123) 456-78-90" pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}" title="+7 (123) 456-78-90">`',
    'Возраст: `<input type="number" name="age" min="18" max="99" required>`',
    'Сайт: `<input type="url" name="site" placeholder="https://example.com">`',
    'Сообщение: `<textarea name="message" rows="5" required minlength="20" placeholder="Ваш отзыв"></textarea>`',
    'Добавьте кнопку `<button type="submit">Отправить</button>`.',
    "Откройте в браузере и проверьте, что форма не отправляется при нарушении любых правил валидации.",
  ],
  difficulty: 4,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Constraint_validation",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/textarea",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Обратная связь — Валидация</title>
</head>
<body>
  <h1>Обратная связь</h1>
  <form>
    <label>
      Имя:<br>
      <input
        type="text"
        name="fullname"
        placeholder="Иван Иванов"
        required
        minlength="3"
        maxlength="30"
      >
    </label><br><br>

    <label>
      Email:<br>
      <input
        type="email"
        name="email"
        placeholder="user@example.com"
        required
      >
    </label><br><br>

    <label>
      Телефон:<br>
      <input
        type="tel"
        name="phone"
        placeholder="+7 (123) 456-78-90"
        pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}"
        title="+7 (123) 456-78-90"
      >
    </label><br><br>

    <label>
      Возраст:<br>
      <input
        type="number"
        name="age"
        min="18"
        max="99"
        required
      >
    </label><br><br>

    <label>
      Сайт:<br>
      <input
        type="url"
        name="site"
        placeholder="https://example.com"
      >
    </label><br><br>

    <label>
      Ваш отзыв:<br>
      <textarea
        name="message"
        rows="5"
        required
        minlength="20"
        placeholder="Ваш отзыв"
      ></textarea>
    </label><br><br>

    <button type="submit">Отправить</button>
  </form>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Обратная связь — Валидация</title>
</head>
<body>
  <h1>Обратная связь</h1>
  <form>
    <label>
      Имя:<br>
      <input type="text" name="fullname" placeholder="Иван Иванов" required minlength="3" maxlength="30">
    </label><br><br>

    <label>
      Email:<br>
      <input type="email" name="email" placeholder="user@example.com" required>
    </label><br><br>

    <label>
      Телефон:<br>
      <input type="tel" name="phone" placeholder="+7 (123) 456-78-90" pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}" title="+7 (123) 456-78-90">
    </label><br><br>

    <label>
      Возраст:<br>
      <input type="number" name="age" min="18" max="99" required>
    </label><br><br>

    <label>
      Сайт:<br>
      <input type="url" name="site" placeholder="https://example.com">
    </label><br><br>

    <label>
      Ваш отзыв:<br>
      <textarea name="message" rows="5" required minlength="20" placeholder="Ваш отзыв"></textarea>
    </label><br><br>

    <button type="submit">Отправить</button>
  </form>
</body>
</html>`,
};
