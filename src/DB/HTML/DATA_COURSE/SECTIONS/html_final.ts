export const html_final_1 = {
  id: "html_final_1",
  title: "Повторение ключевых тем",
  content: `
  ## Итоговое повторение: Основы HTML
  
  В этом разделе собраны ключевые темы курса по HTML. Гайд поможет систематизировать знания, подготовиться к собеседованию или быстро повторить материал перед практикой.
  
  ---
  
  ### Основные теги HTML
  
  - \`<!DOCTYPE html>\` — HTML5-декларация
  - \`<html>\` — корневой тег
  - \`<head>\` — метаданные (title, meta, link, script)
  - \`<body>\` — содержимое страницы
  
  **Структура:**
  - \`<header>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<aside>\`, \`<footer>\`
  
  **Текст:**
  - Заголовки: \`<h1>\`–\`<h6>\`
  - Абзацы и разметка: \`<p>\`, \`<br>\`, \`<hr>\`
  - Форматирование: \`<strong>\`, \`<em>\`, \`<mark>\`, \`<small>\`, \`<sub>\`, \`<sup>\`
  
  **Списки:**
  - Упорядоченный: \`<ol>\`
  - Неупорядоченный: \`<ul>\`
  - Элементы: \`<li>\`
  
  **Ссылки и изображения:**
  - \`<a href="...">\` — ссылка
  - \`<img src="..." alt="...">\` — изображение
  
  **Медиа:**
  - \`<video>\`, \`<audio>\`, \`<track>\` — мультимедиа-вставки
  
  ---
  
  ### Атрибуты
  
  - **Глобальные:** \`id\`, \`class\`, \`style\`, \`title\`, \`hidden\`, \`tabindex\`
  - **Булевые:** \`disabled\`, \`readonly\`, \`required\`, \`checked\`
  - **Специальные:**
    - ARIA: \`aria-label\`, \`aria-hidden\`, \`role\`
    - Data: \`data-* \` — хранение пользовательских данных
  
  ---
  
  ### Формы
  
  - \`<form action="" method="">\`
  - Элементы: \`<input>\`, \`<textarea>\`, \`<select>\`, \`<option>\`, \`<button>\`
  - Типы: \`text\`, \`email\`, \`password\`, \`checkbox\`, \`radio\`
  - Атрибуты: \`name\`, \`value\`, \`placeholder\`, \`required\`, \`pattern\`, \`min/max\`
  
  ---
  
  ### Таблицы
  
  - Базовые теги: \`<table>\`, \`<tr>\`, \`<td>\`, \`<th>\`
  - Структура: \`<thead>\`, \`<tbody>\`, \`<tfoot>\`
  - Объединение: \`colspan\`, \`rowspan\`
  
  ---
  
  ### Семантика
  
  - Используйте смысловые теги вместо \`<div>\`:  
    \`<article>\`, \`<section>\`, \`<aside>\`, \`<nav>\`
  - Одна \`<h1>\` на страницу и логичная иерархия
  - Семантика = читаемый код, доступность и SEO
  
  ---
  
  ### Доступность (a11y)
  
  - Связь \`<label>\` и \`<input>\`
  - Навигация с клавиатуры: \`tabindex\`, ARIA
  - Контрастность, alt-описания для изображений
  
  ---
  
  ### SEO и микроразметка
  
  - Мета-теги: \`<title>\`, \`<meta name="description">\`, \`<link rel="canonical">\`
  - Open Graph: \`og:title\`, \`og:description\`, \`og:image\`
  - Schema.org:
    - Через атрибуты: \`itemscope\`, \`itemtype\`, \`itemprop\`
    - Или через JSON-LD
  
  ---
  
  ### Валидность и линтинг
  
  - Проверка HTML: [W3C Validator](https://validator.w3.org/)
  - Линтер: HTMLHint
  - Форматирование: Prettier
  
  ---
  
  ### Устаревшие теги (не использовать)
  
  - \`<center>\`, \`<font>\`, \`<bgsound>\`, \`<u>\`, \`<marquee>\`
  - Используйте CSS и семантику HTML5
  
  ---
  
  ### Инструменты
  
  **VS Code плагины:**
  
  - Prettier — автоформатер
  - HTMLHint — линтер HTML
  - ESLint — JS/TS, включая HTML в React
  - Live Server — локальный просмотр
  
  **Онлайн-сервисы:**
  
  - [W3C Validator](https://validator.w3.org/)
  - [HTML5 Outliner](https://gsnedders.html5.org/outliner/)
  
  ---
  
  ## Вывод
  
  Этот гайд охватывает всю основную теорию HTML. Повторяй регулярно, пиши руками, используй семантику и помни: качественный HTML — это фундамент всей frontend-разработки.
  `.trim(),

  codeExample: `
<!-- Минимальный каркас HTML-документа -->
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Описание страницы" />
  <title>Итоговая HTML-страница</title>
</head>
<body>
  <header><h1>Добро пожаловать</h1></header>
  <main>
    <section>
      <h2>Контент</h2>
      <p>Это пример валидной структуры HTML5.</p>
    </section>
  </main>
  <footer>&copy; 2025</footer>
</body>
</html>
  `,
};
