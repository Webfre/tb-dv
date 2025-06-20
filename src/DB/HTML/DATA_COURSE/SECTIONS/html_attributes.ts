export const html_attr_1 = {
  id: "html_attr_1",
  title: "Глобальные атрибуты: id, class, style",
  content: `
  ## Глобальные атрибуты в HTML
  
  **Глобальные атрибуты** — это атрибуты, которые можно применять к **любому HTML-элементу**, независимо от его типа. Они используются для задания идентификаторов, классов, встроенных стилей, доступности и других метаданных.
    
  ---
  
  ### Ключевые глобальные атрибуты
  
  - \`id\` — уникальный идентификатор
  
  - Присваивается одному конкретному элементу на странице
  - Должен быть **уникальным** — нельзя использовать один и тот же \`id\` для нескольких элементов
  - Используется для:
    - стилизации элемента через CSS: \`#header { ... }\`
    - привязки обработчиков в JavaScript: \`document.getElementById("submitBtn")\`
    - навигации по якорям: ссылка \`<a href="#contacts">\` прокрутит к элементу с \`id="contacts"\`
  
  **Пример:**
  
  \`\`\`html
  <h2 id="about">О нас</h2>
  <a href="#about">Перейти к разделу</a>
  \`\`\`
  
  ---
  
  ## \`class\` — группировка элементов
  
  - Позволяет назначать один или несколько **классов** элементу
  - Один класс можно использовать на многих элементах
  - Основной инструмент в CSS и JS для выборки и стилизации
  
  **Пример:**
  
  \`\`\`html
  <p class="highlight">Выделенный текст</p>
  <p class="highlight">И ещё один такой абзац</p>
  \`\`\`
  
  **CSS:**
  
  \`\`\`css
  .highlight {
    background-color: yellow;
  }
  \`\`\`
  
  **JavaScript:**
  
  \`\`\`js
  const elements = document.querySelectorAll(".highlight");
  elements.forEach(el => el.style.fontWeight = "bold");
  \`\`\`
  
  ---
  
  ## \`style\` — встроенные стили (inline)
  
  - Позволяет задать стили **прямо в HTML-элементе**
  - Не рекомендуется для постоянного использования (трудно поддерживать и переопределять)
  - Может быть полезен в динамически сгенерированных элементах
  
  **Пример:**
  
  \`\`\`html
  <div style="color: red; font-size: 18px;">
    Это красный текст
  </div>
  \`\`\`
  
  ---
  
  ## Где используются глобальные атрибуты
  
  - **Формы**: назначение \`id\` для связи \`<label>\` с \`<input>\`
  - **Списки**: классы для стилизации разных типов списков
  - **Кнопки и ссылки**: выборка по классу для назначения обработчиков событий
  - **Секции**: якорная навигация и прокрутка по идентификатору
  - **Интерактивные компоненты**: динамическое применение стилей с помощью \`classList.add()\`, \`element.style\`, и т.д.
  
  ---
  
  ## Полезные советы
  
  - Используй \`id\` только когда действительно нужен **уникальный элемент**, например, при работе с формами или якорями
  - Для **групповой стилизации и логики** всегда предпочтительнее \`class\`
  - Старайся избегать \`style\` в production-коде — лучше выносить стили в отдельный CSS-файл
  
  ---
  
  ## Вывод
  
  Глобальные атрибуты — мощный инструмент в HTML, который позволяет:
  
  - **Стилизовать** элементы
  - **Выбирать** их через JavaScript
  - **Обеспечивать доступность** и структуру страницы
  
  Знание и правильное использование \`id\`, \`class\`, \`style\` — это основа для уверенной работы с HTML, CSS и JavaScript.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример использования атрибутов</title>
  <style>
    .section {
      background-color: #f0f0f0;
    }

    .title {
      color: #2c3e50;
      font-size: 24px;
    }
  </style>
</head>
<body>
  <!-- Пример с использованием всех трёх атрибутов -->
  <div id="header" class="section" style="border: 1px solid gray; padding: 10px;">
    <h1 class="title">Заголовок страницы</h1>
  </div>

  <script>
    const el = document.getElementById("header");
    console.log(el.className); // "section"
  </script>
</body>
</html>
  `,
};

export const html_attr_2 = {
  id: "html_attr_2",
  title: "Специфичные атрибуты: href, src, alt",
  content: `
  ## Специфические атрибуты HTML
  
  Некоторые атрибуты в HTML применимы **только к определённым тегам**. Они имеют узкую специализацию и играют ключевую роль в функциональности и доступности контента.
  
  ---
  
  ## \`href\` — атрибут тега \`<a>\` (ссылки)
  
  - Определяет адрес, по которому произойдёт переход при клике на ссылку.
  - Может содержать:
    - относительный путь: \`href="/about"\`
    - абсолютный URL: \`href="https://example.com"\`
    - якорь: \`href="#section1"\`
    - ссылку на файл: \`href="/docs/file.pdf"\`
  
  **Пример:**
  
  \`\`\`html
  <a href="https://developer.mozilla.org">Открыть MDN</a>
  \`\`\`
  
  **Пример с якорем:**
  
  \`\`\`html
  <a href="#contacts">Контакты</a>
  ...
  <h2 id="contacts">Свяжитесь с нами</h2>
  \`\`\`
  
  ---
  
  ## \`src\` — атрибут тега \`<img>\`, \`<audio>\`, \`<video>\`, \`<iframe>\`
  
  - Указывает путь к **внешнему ресурсу**, который должен быть загружен в элемент.
  - Применяется, например, для вставки изображений, видео, аудио и внешних страниц.
  
  **Пример для изображения:**
  
  \`\`\`html
  <img src="/images/logo.png" alt="Логотип компании" />
  \`\`\`
  
  **Пример для видео:**
  
  \`\`\`html
  <video src="promo.mp4" controls></video>
  \`\`\`
  
  ---
  
  ## \`alt\` — атрибут тега \`<img>\` (альтернативный текст)
  
  - Показывается, если изображение не загрузилось.
  - Используется **технологиями доступности** (например, экранными дикторами).
  - Помогает поисковым системам понимать содержимое изображений.
  
  **Пример:**
  
  \`\`\`html
  <img src="team.jpg" alt="Команда разработки на конференции" />
  \`\`\`
  
  **Когда не указывать alt:**
  
  \`\`\`html
  <img src="decor.png" alt="" />
  \`\`\`
  
  Если изображение декоративное и **не несёт смысловой нагрузки**, атрибут \`alt\` можно оставить пустым, чтобы его игнорировали ассистивные технологии.
  
  ---
  
  ## Практическое применение
  
  - Без \`href\` ссылка не будет работать, даже если стилизована как таковая.
  - Без \`src\` картинка или видео не загрузятся.
  - Без \`alt\` страница будет хуже восприниматься пользователями с ограничениями по зрению и получит штраф от поисковых систем (важно для SEO).
  
  ---
  
  ## Вывод
  
  Специфические атрибуты усиливают теги и делают HTML-страницы:
  
  - **функциональными** (переходы, вставка контента)
  - **доступными** для всех пользователей
  - **понятными** для поисковых систем
  
  При работе с HTML важно понимать, **какие атрибуты поддерживаются конкретными тегами**, и **в каких ситуациях** их нужно использовать.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример ссылок и изображений</title>
</head>
<body>
  <!-- Пример использования href, src, alt -->
  <a href="https://example.com" target="_blank">Перейти на сайт</a>

  <br><br>

  <img src="logo.png" alt="Логотип компании" />
</body>
</html>
  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href",
  ],
};

export const html_attr_3 = {
  id: "html_attr_3",
  title: "Data-* атрибуты",
  content: `
  ## Атрибуты \`data-*\` в HTML
  
  Атрибуты с префиксом \`data-\` позволяют хранить **пользовательские и кастомные данные** прямо внутри HTML-элементов. Это особенно полезно в ситуациях, когда необходимо передавать информацию из HTML в JavaScript без использования глобальных переменных или дополнительных запросов.
  
  ---
  
  ## Что такое \`data-*\`
  
  - Любой атрибут, начинающийся с \`data-\`, считается **кастомным (пользовательским)**.
  - Формат: \`data-имя="значение"\`
  - Такие атрибуты **не влияют на отображение**, но могут быть прочитаны через JavaScript.
  - Используются для хранения: ID, статусов, конфигураций, дополнительных меток и любых других данных.
  
  **Примеры:**
  
  \`\`\`html
  <button data-user-id="42">Открыть профиль</button>
  
  <div data-theme="dark" data-state="active">Контейнер</div>
  \`\`\`
  
  ---
  
  ## Доступ к \`data-*\` в JavaScript
  
  JavaScript предоставляет удобный способ чтения и изменения этих атрибутов через свойство \`dataset\`.
  
  **Пример:**
  
  \`\`\`js
  const button = document.querySelector("button");
  console.log(button.dataset.userId); // "42"
  \`\`\`
  
  **Работа с dataset:**
  
  - Чтение: \`element.dataset.имя\`
  - Запись: \`element.dataset.имя = "новое значение"\`
  - Все имена автоматически преобразуются в camelCase:
    - \`data-user-id\` → \`dataset.userId\`
    - \`data-item-count\` → \`dataset.itemCount\`
  
  ---
  
  ## Применение на практике
  
  - **Кнопки и карточки**: можно передать ID, статус, роль и т.д.
  - **Динамические списки**: каждому элементу можно присвоить данные, по которым будет происходить фильтрация, сортировка или отправка на сервер
  - **Конфигурация компонентов**: например, переключение тем оформления или языков
  
  **Пример:**
  
  \`\`\`html
  <div class="product" data-id="123" data-price="4500" data-category="books">
    Книга по программированию
  </div>
  \`\`\`
  
  \`\`\`js
  const product = document.querySelector(".product");
  const price = Number(product.dataset.price); // 4500
  \`\`\`
  
  ---
  
  ## Вывод
  
  Атрибуты \`data-*\`:
  
  - Позволяют **гибко передавать данные** из HTML в JS
  - Не требуют дополнительных API или внешнего состояния
  - Хорошо подходят для **интерактивных интерфейсов**
  - Не конфликтуют со стандартными атрибутами HTML
  
  Это универсальный способ внедрения пользовательских данных в разметку при построении современных UI-компонентов.
  `.trim(),

  codeExample: `
<!-- Пример с data-атрибутами -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример data-атрибутов</title>
</head>
<body>
  <!-- Пример с data-атрибутами -->
  <button data-user-id="42" data-role="admin">Подробнее</button>

  <script>
    const btn = document.querySelector("button");
    console.log(btn.dataset.userId); // "42"
    console.log(btn.dataset.role);   // "admin"
  </script>
</body>
</html>
  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*",
  ],
};

export const html_attr_4 = {
  id: "html_attr_4",
  title: "Атрибуты boolean и aria-*",
  content: `
  ## Булевые и ARIA-атрибуты в HTML
  
  В HTML есть специальные атрибуты, которые не несут значений напрямую, но играют важную роль в **поведении, доступности и UX-интерфейсе**.
  
  ---
  
  ## Булевые атрибуты
  
  **Булевые атрибуты** — это атрибуты, у которых само **присутствие** уже означает \`true\`.  
  Если атрибут отсутствует — считается, что его значение \`false\`.
  
  **Примеры:**
  
  - \`disabled\` — делает элемент неактивным (например, \`<button>\`)
  - \`checked\` — указывает, что чекбокс или радио выбран
  - \`required\` — требует обязательного заполнения поля
  - \`readonly\` — делает поле доступным только для чтения
  
  **Пример использования:**
  
  \`\`\`html
  <input type="checkbox" checked />
  <input type="text" placeholder="Только для чтения" readonly />
  <button disabled>Отправить</button>
  \`\`\`
  
  **Особенности:**
  
  - Не указывается значение (\`checked="checked"\` допустимо, но не обязательно)
  - Присутствие атрибута = \`true\`
  - Отсутствие = \`false\`
  
  ---
  
  ## ARIA-атрибуты
  
  **ARIA** (Accessible Rich Internet Applications) — это набор атрибутов \`aria-*\`, предназначенных для улучшения **доступности веб-интерфейсов**. Они **не влияют на визуальное отображение**, но помогают **технологиям ассистирования** (например, экранным дикторам) правильно интерпретировать структуру и поведение страницы.
  
  **Примеры ARIA-атрибутов:**
  
  - \`aria-label\` — текстовая метка для элемента, если нет явного текста
  - \`aria-hidden="true"\` — скрывает элемент от ассистивных технологий
  - \`aria-disabled="true"\` — элемент выглядит активным, но считается недоступным
  - \`aria-expanded="true"\` — отображает, открыт ли, например, аккордеон
  
  **Пример использования:**
  
  \`\`\`html
  <button aria-label="Закрыть модальное окно">
    ×
  </button>
  
  <div aria-hidden="true">
    Это скрыто от скринридера
  </div>
  \`\`\`
  
  ---
  
  ## Когда применять
  
  ### Булевые атрибуты:
  
  - Используются в формах и интерактивных элементах
  - Управляют поведением элементов: включено/отключено, активно/неактивно
  - Упрощают логику взаимодействия с формами и UI
  
  ### ARIA-атрибуты:
  
  - Обязательны при создании **кастомных компонентов**, у которых нет нативного поведения (например, модальные окна, аккордеоны, выпадающие списки)
  - Используются для **улучшения доступности** в рамках WCAG и других стандартов
  - Помогают людям с ограничениями пользоваться интерфейсами
  
  ---
  
  ## Вывод
  
  - **Булевые атрибуты** упрощают управление поведением элементов и логикой взаимодействия.
  - **ARIA-атрибуты** делают интерфейсы доступными и понятными для всех пользователей, включая тех, кто использует скринридеры и ассистивные технологии.
  - Их правильное использование — признак качественного и профессионального фронтенда.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример булевых и ARIA-атрибутов</title>
</head>
<body>
  <!-- Пример булевых и ARIA-атрибутов -->
  <input type="checkbox" checked disabled />

  <button aria-label="Закрыть модальное окно">✖</button>

  <div role="alert" aria-live="assertive">
    Произошла ошибка!
  </div>
</body>
</html>

  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes",
  ],
};
