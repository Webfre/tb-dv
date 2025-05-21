export const html_form_1 = {
  id: "html_form_1",
  title: "Форма — разнообразие полей и типов",
  content: `
## Тег <form> и многообразие элементов

Тег \`<form>\` создаёт область для взаимодействия с пользователем: ввода и отправки данных. Внутрь формы можно поместить множество различных полей:

- **\<input> с type**:
  - text, password, email, tel, url, search — базовые текстовые поля.
  - number, range — числовые и ползунковые (ползунок).
  - date, datetime-local, month, week, time — выбор даты и/или времени.
  - color — выбор цвета.
  - file — загрузка файлов.
  - checkbox — флажок (можно выбрать несколько).
  - radio — переключатели (группа из одного варианта).
  - hidden — скрытое поле для передачи данных.
  - submit, reset, button — управляющие кнопки.
- **\<textarea>** — многострочное текстовое поле.
- **\<select> + \<option>** — выпадающий список (с поддержкой \<optgroup>).
- **\<fieldset> + \<legend>** — логическая группировка полей.
- **\<button>** — кнопки всех типов.

Каждый элемент ввода должен иметь атрибут **name**, чтобы данные попали на сервер. Поддерживается встроенная проверка:
- **required**, **minlength/maxlength**, **pattern**, **min/max**, **step**, **type** (email, url, tel и др.)

**Пример формы с разными типами полей:**`,
  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример формы</title>
</head>
<body>
  <form>
    <label>Имя: <input type="text"     name="username"    placeholder="Иван Иванов" required></label><br>
    <label>Email: <input type="email"   name="email"       placeholder="user@example.com"></label><br>
    <label>Пароль: <input type="password" name="password" minlength="6" required></label><br>
    <label>Возраст: <input type="number" name="age" min="0" max="120"></label><br>
    <label>Дата рождения: <input type="date"   name="birthdate"></label><br>
    <label>Цвет:             <input type="color"  name="favcolor"></label><br>
    <label>Файл:             <input type="file"   name="avatar"></label><br>
    <label><input type="checkbox" name="agree"> Согласен с условиями</label><br>
    <fieldset>
      <legend>Пол</legend>
      <label><input type="radio" name="gender" value="m"> Мужчина</label>
      <label><input type="radio" name="gender" value="f"> Женщина</label>
    </fieldset>
    <label>Комментарий:<br>
      <textarea name="comment" rows="4" cols="40" placeholder="Ваш отзыв"></textarea>
    </label><br>
    <label>Страна:
      <select name="country">
        <optgroup label="Европа">
          <option value="ru">Россия</option>
          <option value="de">Германия</option>
        </optgroup>
        <optgroup label="Америка">
          <option value="us">США</option>
          <option value="br">Бразилия</option>
        </optgroup>
      </select>
    </label><br><br>
    <button type="submit">Отправить</button>
    <button type="reset">Сбросить</button>
  </form>
</body>
</html>
`,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select",
  ],
};

export const html_form_2 = {
  id: "html_form_2",
  title: "Элементы ввода",
  content: `
  ## Тег \`<input>\` — поля ввода данных
  
  Тег \`<input>\` используется в HTML-формах для **ввода и отправки данных** от пользователя. Это **универсальный элемент**, который может принимать различные типы ввода через атрибут \`type\`.
  
  Каждому полю можно задать такие атрибуты, как: \`name\`, \`value\`, \`placeholder\`, \`required\`, \`disabled\`, \`readonly\` и др.
  
  ---
  
  ## Основные типы \`<input>\`
  
  ### \`type="text"\`
  
  - Стандартное **однострочное поле ввода**
  - Используется для ввода имени, логина, заголовков и т.п.
  
  **Пример:**
  
  \`\`\`html
  <input type="text" name="username" placeholder="Введите имя" />
  \`\`\`
  
  ---
  
  ### \`type="email"\`
  
  - Проверяет, что пользователь ввёл корректный email
  - Может использовать встроенную валидацию браузера
  
  **Пример:**
  
  \`\`\`html
  <input type="email" name="user_email" required />
  \`\`\`
  
  ---
  
  ### \`type="password"\`
  
  - Ввод данных скрывается (например, при авторизации)
  - Символы отображаются как точки или звёздочки
  
  **Пример:**
  
  \`\`\`html
  <input type="password" name="user_password" />
  \`\`\`
  
  ---
  
  ### \`type="checkbox"\`
  
  - Позволяет выбрать **несколько вариантов** из набора
  - Каждый элемент работает независимо
  
  **Пример:**
  
  \`\`\`html
  <label><input type="checkbox" name="skills" value="html" /> HTML</label>
  <label><input type="checkbox" name="skills" value="css" /> CSS</label>
  <label><input type="checkbox" name="skills" value="js" /> JavaScript</label>
  \`\`\`
  
  ---
  
  ### \`type="radio"\`
  
  - Используется для **одиночного выбора** из набора
  - Все радио-кнопки с одинаковым атрибутом \`name\` объединяются в группу — можно выбрать только одну
  
  **Пример:**
  
  \`\`\`html
  <label><input type="radio" name="gender" value="male" /> Мужской</label>
  <label><input type="radio" name="gender" value="female" /> Женский</label>
  \`\`\`
  
  ---
  
  ## Валидация и взаимодействие
  
  - \`required\` — обязательное поле
  - \`minlength\`, \`maxlength\` — ограничение по длине текста
  - \`pattern\` — регулярное выражение для проверки
  - \`disabled\`, \`readonly\` — ограничение на ввод
  
  **Пример обязательного email-поля:**
  
  \`\`\`html
  <input type="email" name="email" required placeholder="example@mail.com" />
  \`\`\`
  
  ---
  
  ## Вывод
  
  Тег \`<input>\`:
  
  - Универсален и настраивается через \`type\`
  - Используется для текстовых данных, паролей, переключателей, email и др.
  - Позволяет реализовать как простые поля, так и сложные формы с валидацией
  
  Грамотное использование \`<input>\` обеспечивает удобный и безопасный ввод данных пользователем.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример формы</title>
</head>
<body>
  <form>
    <input type="text" placeholder="Имя" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Пароль" />

    <label>
      <input type="checkbox" name="terms" />
      Я согласен
    </label>

    <label>
      <input type="radio" name="gender" value="m" />
      Мужчина
    </label>
    <label>
      <input type="radio" name="gender" value="f" />
      Женщина
    </label>
  </form>
</body>
</html>

  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
  ],
};
export const html_form_3 = {
  id: "html_form_3",
  title: "Выпадающие списки, кнопки",
  content: `
  ## Дополнительные элементы формы в HTML
  
  Помимо \`<input>\`, HTML предоставляет и другие элементы для сбора и управления данными от пользователя. Они помогают расширить интерфейс формы и улучшить удобство взаимодействия.
  
  ---
  
  ### \`<select>\` — выпадающий список
  
  - Используется для выбора одного или нескольких значений из заранее заданного набора
  - Содержит вложенные теги \`<option>\` — они представляют пункты списка
  - Атрибут \`selected\` на \`<option>\` делает его выбранным по умолчанию
  - Атрибут \`multiple\` позволяет выбирать сразу несколько значений
  
  **Пример (одиночный выбор):**
  
  \`\`\`html
  <label for="country">Выберите страну:</label>
  <select name="country" id="country">
    <option value="ru" selected>Россия</option>
    <option value="us">США</option>
    <option value="de">Германия</option>
  </select>
  \`\`\`
  
  ---
  
  ### \`<textarea>\` — многострочное текстовое поле
  
  - Используется для ввода больших объёмов текста (например, комментариев, описаний)
  - В отличие от \`<input type="text">\`, поддерживает **много строк**
  - Размер задаётся через атрибуты \`rows\` и \`cols\`, или стилями CSS
  
  **Пример:**
  
  \`\`\`html
  <label for="message">Сообщение:</label>
  <textarea id="message" name="message" rows="5" cols="30" placeholder="Введите текст..."></textarea>
  \`\`\`
  
  ---
  
  ### \`<button>\` — кнопка
  
  - Универсальный элемент для действия (отправка, сброс, вызов логики через JS)
  - По умолчанию действует как \`type="submit"\` — отправляет форму
  - Можно явно задать тип:
    - \`type="submit"\` — отправка формы
    - \`type="reset"\` — сброс значений
    - \`type="button"\` — просто кнопка, без действия (для JS-обработчиков)
  
  **Пример:**
  
  \`\`\`html
  <button type="submit">Отправить</button>
  <button type="reset">Сбросить</button>
  <button type="button" onclick="alert('Привет!')">Нажми</button>
  \`\`\`
  
  ---
  
  ## Вывод
  
  - \`<select>\` и \`<option>\` — позволяют создавать выпадающие списки
  - \`<textarea>\` — используется для больших объёмов текста
  - \`<button>\` — универсальный элемент для отправки или выполнения действий
  
  Эти теги расширяют возможности формы и делают пользовательский интерфейс **гибким, удобным и доступным**.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Форма с выбором города и комментарием</title>
</head>
<body>
  <form>
    <label>Город:
      <select name="city">
        <option value="msk">Москва</option>
        <option value="spb" selected>Санкт-Петербург</option>
      </select>
    </label>
    <br /><br />

    <label>Комментарий:<br />
      <textarea name="comment" rows="4" cols="30">Ваш комментарий</textarea>
    </label>
    <br /><br />

    <button type="submit">Отправить</button>
  </form>
</body>
</html>

  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
  ],
};
export const html_form_4 = {
  id: "html_form_4",
  title: "Атрибуты required, disabled, readonly",
  content: `
  ## Атрибуты доступности и валидации в HTML-формах
  
  HTML предоставляет ряд встроенных атрибутов, которые позволяют **управлять поведением полей** формы и **повышать удобство и контроль** за вводом данных без использования JavaScript.
  
  ---
  
  ### \`required\` — обязательное поле
  
  - Заставляет пользователя **обязательно заполнить** поле перед отправкой формы
  - Поддерживается нативной валидацией браузера
  - При попытке отправки формы без значения — появится предупреждение
  
  **Пример:**
  
  \`\`\`html
  <input type="email" name="email" required placeholder="Введите email" />
  \`\`\`
  
  ---
  
  ### \`disabled\` — отключенное поле
  
  - Делает поле **недоступным** для взаимодействия
  - Его значение **не отправляется на сервер**
  - Используется, когда поле неактивно по логике (например, зависит от других условий)
  
  **Пример:**
  
  \`\`\`html
  <input type="text" value="Заблокировано" disabled />
  \`\`\`
  
  ---
  
  ### \`readonly\` — только для чтения
  
  - Позволяет **видеть значение**, но не изменять его
  - Значение отправляется на сервер при отправке формы
  - Подходит, например, для отображения ID, генерируемого поля, даты создания и т.д.
  
  **Пример:**
  
  \`\`\`html
  <input type="text" value="Только чтение" readonly />
  \`\`\`
  
  ---
  
  ## Сравнение: \`disabled\` vs \`readonly\`
  
  | Атрибут   | Изменение | Отправляется | Визуально | Применение                       |
  |-----------|------------|---------------|------------|----------------------------------|
  | \`disabled\` |  Нельзя |  Нет         | Серое, неактивное | Временно заблокировать поле     |
  | \`readonly\` |  Нельзя |  Да          | Выглядит как обычное | Показывать, но не редактировать |
  
  ---
  
  ## Зачем это нужно
  
  - Позволяет **упростить валидацию** без JS
  - Повышает **доступность** и **понятность интерфейса**
  - Обеспечивает **гибкость в бизнес-логике** (например, условные поля, только для чтения и т.д.)
  
  ---
  
  ## Вывод
  
  - Используйте \`required\` для обязательных полей
  - Применяйте \`disabled\` для временно недоступных данных
  - Добавляйте \`readonly\` к значениям, которые нельзя изменять, но нужно передавать
  
  Эти атрибуты делают формы **удобными, безопасными и предсказуемыми** как для пользователя, так и для разработчика.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Пример input: required, readonly, disabled</title>
</head>
<body>
  <h1>Пример работы атрибутов input</h1>
  <form>
    <!-- Поле обязательно для заполнения -->
    <label>
      Имя:<br />
      <input type="text" placeholder="Имя" required />
    </label>
    <br /><br />

    <!-- Поле только для чтения -->
    <label>
      Только для чтения:<br />
      <input type="text" value="Нельзя редактировать" readonly />
    </label>
    <br /><br />

    <!-- Отключённое поле -->
    <label>
      Отключено:<br />
      <input type="text" value="Отключено" disabled />
    </label>
    <br /><br />

    <button type="submit">Отправить</button>
  </form>
</body>
</html>

  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly",
  ],
};
export const html_form_5 = {
  id: "html_form_5",
  title: "Валидация форм",
  content: `
  ## Встроенная валидация форм в HTML5
  
  HTML5 предоставляет встроенные механизмы **проверки правильности ввода данных** без необходимости использовать JavaScript. Это делает формы более надёжными, доступными и удобными для пользователя.
  
  Браузеры автоматически обрабатывают валидацию и выводят понятные сообщения об ошибках.
  
  ---
  
  ## Ключевые атрибуты валидации
  
  ### \`required\`
  
  - Делает поле **обязательным для заполнения**
  - При отсутствии значения — браузер не позволит отправить форму
  
  **Пример:**
  
  \`\`\`html
  <input type="text" name="name" required />
  \`\`\`
  
  ---
  
  ### \`type="email" | "url" | "number"\`
  
  - Автоматически проверяют корректность формата:
  
    - \`email\` — должен содержать \`@\`
    - \`url\` — начинается с \`http://\` или \`https://\`
    - \`number\` — принимает только числа
  
  **Пример:**
  
  \`\`\`html
  <input type="email" name="email" required />
  \`\`\`
  
  ---
  
  ### \`min\` / \`max\`
  
  - Ограничивают числовые значения (для \`type="number"\`, \`date\`, \`range\` и др.)
  
  **Пример:**
  
  \`\`\`html
  <input type="number" name="age" min="18" max="99" />
  \`\`\`
  
  ---
  
  ### \`minlength\` / \`maxlength\`
  
  - Ограничивают **длину текста** во вводимом значении
  
  **Пример:**
  
  \`\`\`html
  <input type="text" name="username" minlength="3" maxlength="15" />
  \`\`\`
  
  ---
  
  ### \`pattern\`
  
  - Позволяет задать **регулярное выражение** для валидации
  - Например, для телефона или пароля
  
  **Пример:**
  
  \`\`\`html
  <input 
    type="text" 
    name="phone" 
    pattern="\\+7\\d{10}" 
    placeholder="+71234567890"
  />
  \`\`\`
  
  ---
  
  ## Преимущества встроенной валидации
  
  - Работает **автоматически во всех современных браузерах**
  - Не требует JavaScript
  - Улучшает **UX** — пользователь видит сообщение об ошибке сразу
  - Ускоряет разработку простых форм
  - Совместима с JavaScript — можно комбинировать с JS-валидацией при необходимости
  
  ---
  
  ## Вывод
  
  Валидация форм:
  
  - Позволяет быстро проверять данные на клиенте
  - Поддерживает основные правила: обязательность, формат, длина, диапазоны
  - Помогает создавать **надёжные и доступные формы** даже без JS
  
  Для сложных случаев можно использовать JS + HTML5 совместно, но встроенные средства уже покрывают большинство задач.
  `.trim(),

  codeExample: `
<form>
  <input type="email" required placeholder="Введите email" />
  <input type="number" min="18" max="99" placeholder="Возраст" />
  <input type="text" pattern="\\d{3}-\\d{2}-\\d{2}" placeholder="Формат: 123-45-67" />
  <button type="submit">Проверить</button>
</form>
  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
  ],
};
