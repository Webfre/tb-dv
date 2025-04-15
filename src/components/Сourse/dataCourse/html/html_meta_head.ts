export const html_meta_1 = {
  id: "html_meta_1",
  title: "Мета-теги: charset, viewport, description и другие",
  content: `
  ## Мета-теги в HTML
  
  Мета-теги размещаются внутри тега \`<head>\` и передают **техническую информацию о странице** браузерам, поисковым системам, социальным сетям и другим внешним сервисам. Они не отображаются на странице, но играют важную роль в доступности, SEO, безопасности и отображении ссылок.
  
  ---
  
  ### Кодировка
  
  - \`<meta charset="UTF-8">\` — устанавливает кодировку документа.  
    Обязателен для корректного отображения символов.
  
  ---
  
  ### Адаптивность
  
  - \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`  
    Делает сайт адаптивным на мобильных устройствах.  
    \`width=device-width\` — ширина зависит от устройства,  
    \`initial-scale=1.0\` — масштаб по умолчанию.
  
  ---
  
  ### Описание и ключевые слова (SEO)
  
  - \`<meta name="description" content="Краткое описание страницы">\`  
    Используется поисковыми системами и соцсетями.
  
  - \`<meta name="keywords" content="html, css, мета-теги">\`  
    Не имеет большого влияния на SEO, но встречается.
  
  ---
  
  ### Управление индексированием
  
  - \`<meta name="robots" content="index, follow">\`  
    Управление поведением поисковых роботов.
  
    Варианты:
    - \`index\`, \`noindex\` — разрешить/запретить индексацию;
    - \`follow\`, \`nofollow\` — следовать/не следовать по ссылкам.
  
  - \`<meta name="googlebot" content="noarchive">\`  
    Настройка индексации только для GoogleBot.
  
  ---
  
  ### Информация об авторе
  
  - \`<meta name="author" content="Имя Автора">\` — имя автора страницы.  
  - \`<meta name="generator" content="VS Code">\` — название редактора или платформы.
  
  ---
  
  ### Кэш и обновление
  
  - \`<meta http-equiv="cache-control" content="no-cache">\` — запрет на кэширование.  
  - \`<meta http-equiv="expires" content="0">\` — немедленное устаревание страницы.  
  - \`<meta http-equiv="refresh" content="5; url=https://example.com">\` — перенаправление через 5 секунд.
  
  ---
  
  ### Язык и совместимость
  
  - \`<meta http-equiv="Content-Language" content="ru">\` — язык документа.  
  - \`<meta http-equiv="X-UA-Compatible" content="IE=edge">\` — корректное отображение в IE.
  
  ---
  
  ### Безопасность
  
  - \`<meta http-equiv="Content-Security-Policy" content="default-src 'self'">\`  
    Ограничение загрузки внешнего контента (CSP).
  
  - \`<meta http-equiv="Permissions-Policy" content="camera=(), geolocation=()">\`  
    Настройка доступа к API браузера (например, камере и геолокации).
  
  ---
  
  ### Open Graph (отображение в соцсетях)
  
  - \`<meta property="og:title" content="Заголовок страницы">\`  
  - \`<meta property="og:description" content="Описание страницы">\`  
  - \`<meta property="og:image" content="url-картинки">\`  
  - \`<meta property="og:url" content="https://site.com/page">\`
  
  ---
  
  ### Twitter Cards
  
  - \`<meta name="twitter:card" content="summary_large_image">\`  
  - \`<meta name="twitter:title" content="Заголовок">\`  
  - \`<meta name="twitter:description" content="Описание">\`  
  - \`<meta name="twitter:image" content="url-картинки">\`
  
  ---
  
  ## Вывод
  
  Мета-теги — это неотъемлемая часть **качественной HTML-разметки**. Они:
  
  - помогают поисковым системам и соцсетям понять контент страницы;
  - обеспечивают корректную работу браузеров;
  - повышают безопасность и доступность.
  
  Их правильная настройка — важный шаг в создании современного сайта.
  `.trim(),

  codeExample: `
  <!-- Минимальный блок <head> с ключевыми мета-тегами -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Описание страницы для SEO" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Roman Muhametshin" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="Content-Language" content="ru" />
  
    <!-- Open Graph -->
    <meta property="og:title" content="DevCourse" />
    <meta property="og:description" content="Курс по фронтенду" />
    <meta property="og:image" content="/preview.jpg" />
    <meta property="og:url" content="https://devcourse.ru" />
  
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="DevCourse" />
    <meta name="twitter:description" content="Курс по фронтенду" />
    <meta name="twitter:image" content="/twitter-preview.png" />
  </head>
  `,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/meta",
  ],
};

export const html_meta_2 = {
  id: "html_meta_2",
  title: "Заголовок документа: <title>",
  content: `
  ## Тег \`<title>\` — заголовок страницы
  
  Тег \`<title>\` используется для задания **заголовка HTML-документа**. Он размещается внутри тега \`<head>\` и **не отображается** на самой странице, но играет важную роль для:
  
  - отображения названия во вкладке браузера;
  - результатов поисковой выдачи (SEO);
  - заголовка при добавлении страницы в закладки;
  - ссылок в социальных сетях (если не переопределено через Open Graph).
  
  ---
  
  ## Пример
  
  \`\`\`html
  <head>
    <title>Курс по HTML для начинающих</title>
  </head>
  \`\`\`
  
  Этот заголовок отобразится во вкладке браузера, а также будет использоваться как основной текст ссылки в результатах поиска.
  
  ---
  
  ## Рекомендации по оформлению
  
  - Заголовок должен быть **уникальным** для каждой страницы
  - Рекомендуемая длина — до **60 символов**, чтобы не обрезался в поиске
  - Включай **ключевые слова** ближе к началу
  - Избегай излишне общих фраз типа "Главная", "Без названия"
  
  ---
  
  ## SEO-значение
  
  - Тег \`<title>\` — один из **важнейших факторов ранжирования** в поисковых системах
  - Он сообщает, о чём страница, и помогает пользователю принять решение о переходе по ссылке
  
  ---
  
  ## Вывод
  
  - Тег \`<title>\` задаёт название страницы для браузеров, поисковиков и социальных сетей
  - Он обязателен и должен быть **информативным, кратким и релевантным содержимому страницы**
  - Грамотно написанный \`<title>\` улучшает **пользовательский опыт и SEO**
  `.trim(),

  codeExample: `
<head>
  <title>Главная | DevCourse</title>
</head>
  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title",
  ],
};
export const html_meta_3 = {
  id: "html_meta_3",
  title: "Favicon, шрифты, подключение стилей",
  content: `
  ## Подключение ресурсов в теге \`<head>\`
  
  Внутри тега \`<head>\` можно подключать **внешние ресурсы**, которые необходимы для отображения страницы и формирования интерфейса. Эти подключения влияют на внешний вид, производительность, UX и брендинг сайта.
  
  ---
  
  ### \`<link rel="icon">\` — фавикон
  
  - Отображается во вкладке браузера, в закладках, истории и на мобильных экранах
  - Обычно указывает на файл \`favicon.ico\` или PNG
  - Размеры: 16x16, 32x32, 48x48 и выше (можно использовать разные)
  
  **Пример:**
  
  \`\`\`html
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  \`\`\`
  
  ---
  
  ### \`<link rel="stylesheet">\` — подключение CSS
  
  - Подключает внешний файл стилей
  - Обычно размещается до основного содержимого страницы
  
  **Пример:**
  
  \`\`\`html
  <link rel="stylesheet" href="/css/styles.css" />
  \`\`\`
  
  ---
  
  ### Сторонние шрифты
  
  - Подключение шрифтов с внешних источников (например, Google Fonts)
  
  **Пример (Google Fonts):**
  
  \`\`\`html
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" 
    rel="stylesheet" 
  />
  \`\`\`
  
  - После подключения можно использовать шрифт в CSS:
  
  \`\`\`css
  body {
    font-family: 'Roboto', sans-serif;
  }
  \`\`\`
  
  ---
  
  ## Зачем подключать эти ресурсы в \`<head>\`
  
  - **Фавикон** усиливает узнаваемость и улучшает UX
  - **CSS-файл** позволяет стилизовать элементы до того, как они отобразятся (избегая мерцания)
  - **Шрифты** придают индивидуальность интерфейсу и соблюдают фирменный стиль
  
  ---
  
  ## Вывод
  
  Внутри \`<head>\` часто подключаются:
  
  - \`<link rel="icon">\` — иконка страницы
  - \`<link rel="stylesheet">\` — таблицы стилей
  - Сторонние ресурсы: шрифты, UI-библиотеки, preload-данные
  
  Это обязательная часть правильной HTML-разметки, обеспечивающая **стабильное и красивое отображение интерфейса**.
  `.trim(),

  codeExample: `
<head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/styles/main.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
</head>
  `,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style",
    "https://fonts.google.com/",
  ],
};
