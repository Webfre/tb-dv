export const html_form_login_1 = {
  id: "html_form_login_1",
  module: "HTML",
  title: "Создание формы с атрибутами action и method",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  description:
    "Создайте простую HTML-форму с использованием тега `<form>` и настройкой атрибутов `action` и `method`.",
  steps: [
    "Создайте новый HTML-файл, например `form.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте форму с тегом `<form>`.",
    '- Установите атрибут `action="/submit"` (это путь, куда обычно отправляются данные — можно условный).',
    '- Установите атрибут `method="post"` (указывающий на тип HTTP-запроса).',
    "- Внутри формы добавьте следующие поля:",
    '  - Текстовое поле для имени (`<input type="text">`)',
    '  - Поле для email (`<input type="email">`)',
    '  - Кнопку отправки (`<button type="submit">`)',
    "Проверьте, как отображается форма и какие данные отправляются (можно временно изменить `action` на `https://httpbin.org/post`, чтобы протестировать отправку).",
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
    <title>Форма</title>
  </head>
  <body>
    <h1>Регистрация</h1>

    <form action="/submit" method="post">
      <label for="name">Имя:</label><br />
      <input type="text" id="name" name="name"  /><br /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email"  /><br /><br />

      <button type="submit">Отправить</button>
    </form>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Форма</title>
  </head>
  <body>
    <h1>Регистрация</h1>

    <form action="/submit" method="post">
      <label for="name">Имя:</label><br />
      <input type="text" id="name" name="name"  /><br /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email"  /><br /><br />

      <button type="submit">Отправить</button>
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
  description:
    "Создайте HTML-форму с полями различных типов: `text`, `email`, `password`, `checkbox`, `radio`.",
  steps: [
    "Создайте новый HTML-файл, например `input-types.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте форму с тегом `<form>` и произвольным `action`, например `/submit`.",
    "Добавьте следующие поля ввода с подписями:",
    '- Текстовое поле для имени (`type="text"`)',
    '- Поле для ввода email (`type="email"`)',
    '- Поле для пароля (`type="password"`)',
    "- Чекбокс с подписью 'Согласен с условиями' (`type=\"checkbox\"`)",
    "- Два переключателя (`type=\"radio\"`) с вариантами пола: 'Мужчина', 'Женщина'",
    '- Кнопку отправки формы (`type="submit"`)',
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
  description:
    "Создайте HTML-форму, в которой используются элементы `select`, `textarea` и `button` для ввода и отправки данных.",
  steps: [
    "Создайте новый HTML-файл, например `form-elements.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте форму с тегом `<form>`.",
    "- Добавьте выпадающий список (`<select>`) с тремя вариантами: 'Фронтенд', 'Бэкенд', 'Фулстек'.",
    "- Добавьте многострочное текстовое поле (`<textarea>`) с плейсхолдером 'Расскажите о себе'.",
    '- Добавьте кнопку отправки формы (`<button type="submit">`).',
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
        <option value="">-- Выберите --</option>
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
        <option value="">-- Выберите --</option>
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

export const html_form_login_4 = {
  id: "html_form_login_4",
  module: "HTML",
  title: "Использование атрибутов required, disabled и readonly",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  description:
    "Создайте HTML-форму и примените к полям атрибуты `required`, `disabled` и `readonly`, чтобы продемонстрировать их поведение.",
  steps: [
    "Создайте новый HTML-файл, например `form-attributes.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Создайте форму с произвольным `action`, например `/submit`, и метод `post`.",
    "Добавьте следующие поля с соответствующими атрибутами:",
    '- Поле имени (`type="text"`) с атрибутом `required` — без него форма не отправится.',
    '- Поле email (`type="email"`) с атрибутом `readonly` — можно выделить и скопировать, но нельзя изменить.',
    '- Поле пароля (`type="password"`) с атрибутом `disabled` — недоступно для ввода.',
    "- Кнопку отправки формы.",
    "Проверьте поведение каждого поля при попытке заполнения и отправки формы.",
  ],
  difficulty: 4,
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
  title: "Валидация формы средствами HTML5",
  topic: "HTML формы и элементы управления",
  topicId: "html_forms",
  description:
    "Создайте HTML-форму, в которой используется встроенная валидация HTML5: ограничения по длине, шаблону, числовым значениям и типам данных.",
  steps: [
    "Создайте новый HTML-файл, например `form-validation.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Создайте форму с атрибутами `action` и `method`.",
    "Добавьте следующие поля с валидацией:",
    '- Имя: `type="text"`, `required`, `minlength="3"`, `maxlength="20"`.',
    '- Пароль: `type="password"`, `required`, `pattern="[A-Za-z0-9]{6,}"` (только латинские буквы и цифры, минимум 6 символов).',
    "[A-Za-z0-9] — допустимые символы: A-Z — заглавные буквы латиницы , a-z — строчные буквы латиницы 0-9 — цифры ,{6,} — количество символов: минимум 6 символов",
    '- Возраст: `type="number"`, `min="18"`, `max="99"`.',
    '- Email: `type="email"`, `required`.',
    "- Кнопка отправки.",
    "Проверьте, что браузер не позволяет отправить форму при нарушении правил валидации.",
  ],
  difficulty: 5,
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
