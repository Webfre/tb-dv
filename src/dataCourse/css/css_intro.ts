export const css_intro1 = {
  id: "css_intro1",
  title: "Что такое CSS",
  content: `  
  CSS (Cascading Style Sheets) — это **язык стилей**, который определяет внешний вид HTML-документов. CSS отвечает за все аспекты визуального представления веб-страниц: цвета, шрифты, расположение элементов, анимации и адаптацию под разные устройства.
  
  ### Основные возможности CSS
  
  - **Оформление текста**: размер, цвет, шрифт, межстрочный интервал
  - **Работа с блоками**: размеры, отступы, границы, фон
  - **Позиционирование элементов**: относительное, абсолютное, фиксированное
  - **Создание сложных макетов**: Flexbox, Grid
  - **Адаптивный дизайн**: медиазапросы для разных устройств
  - **Анимации и переходы**: плавные изменения свойств
  ---
  ### Как работает CSS
  
  CSS состоит из **правил**, каждое из которых содержит:
  
  1. **Селектор** - указывает, к каким элементам применяется стиль
  2. **Свойства** - определяют конкретные аспекты оформления
  3. **Значения** - задают параметры для свойств
  
  ---

  ### Преимущества CSS
  
  - **Разделение содержания и оформления**: HTML отвечает за структуру, CSS - за внешний вид
  - **Гибкость**: один стиль можно применять ко многим страницам
  - **Каскадность**: стили могут наследоваться и переопределяться
  - **Производительность**: уменьшает количество HTML-кода
  - **Доступность**: помогает создавать удобные интерфейсы
  
  ---

  ### CSS в современной веб-разработке
  
  CSS постоянно развивается. Современные возможности включают:
  
  - Переменные (CSS Custom Properties)
  - Грид-раскладку (CSS Grid)
  - Флексбокс (Flexbox)
  - Сложные фильтры и эффекты
  - Анимации и переходы
  - Поддержка адаптивного дизайна
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <title>Пример CSS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Заголовок</h1>
  <p class="intro">Это абзац текста.</p>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
/* Базовые стили для страницы */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Стили для заголовка */
h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

/* Стили для класса intro */
.intro {
  font-size: 1.1em;
  background-color: #f8f9fa;
  padding: 15px;
  border-left: 4px solid #3498db;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS",
    "https://html5book.ru/osnovy-css/",
  ],
};

export const css_intro2 = {
  id: "css_intro2",
  title: "Способы подключения CSS",
  content: `
  ## Способы подключения CSS к HTML
  
  Существует три основных способа подключения CSS-стилей к HTML-документу:
  
  ### 1. Внешняя таблица стилей
  
  Самый рекомендуемый способ. Стили хранятся в отдельном файле с расширением .css и подключаются через тег \`<link>\` в секции \`<head>\`.
  
  **Преимущества**:
  - Один файл стилей для многих страниц
  - Кэширование браузером
  - Чистое разделение HTML и CSS
  
  ### 2. Внутренние стили
  
  Стили прописываются непосредственно в HTML-документе внутри тега \`<style>\` в секции \`<head>\`.
  
  **Когда использовать**:
  - Для небольших одностраничных проектов
  - Когда нужны специфические стили только для одной страницы
  
  ### 3. Инлайн-стили
  
  Стили прописываются непосредственно в атрибуте \`style\` HTML-элементов.
  
  **Когда использовать**:
  - Для динамического изменения стилей через JavaScript
  - Для единичных исключений
  - Не рекомендуется для основного оформления
  
  ### Приоритетность стилей
  
  При конфликте стилей применяются следующие правила приоритета:
  
  1. Инлайн-стили (наивысший приоритет)
  2. Внутренние стили
  3. Внешние стили
  4. Стили браузера (наименьший приоритет)
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <!-- Внешняя таблица стилей -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Внутренние стили -->
  <style>
    body {
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
  <!-- Инлайн-стили -->
  <h1 style="color: blue;">Заголовок</h1>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
/* Пример внешнего файла styles.css */

/* Базовые стили */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
}

/* Стили для навигации */
nav {
  background-color: #2c3e50;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}
  `.trim(),

  resources: ["https://developer.mozilla.org/ru/docs/Web/HTML/Element/link"],
};

export const css_intro3 = {
  id: "css_intro3",
  title: "Синтаксис CSS",
  content: `  
  CSS имеет простой и понятный синтаксис, состоящий из набора правил.
  
  ### Структура CSS-правила
  
  Каждое CSS-правило состоит из:
  
  1. **Селектора** - указывает, к какому элементу(ам) применяется стиль
  2. **Блока объявлений** - содержит одно или несколько свойств в фигурных скобках {}
  3. **Свойств** - определяют конкретные аспекты оформления
  4. **Значений** - параметры для свойств, после двоеточия
  
  ### Пример CSS-правила
  
  \`\`\`css
  селектор {
    свойство1: значение;
    свойство2: значение;
  }
  \`\`\`
  
  ### Комментарии в CSS
  
  Комментарии помогают документировать код и временно отключать стили:
  
  \`\`\`css
  /* Это однострочный комментарий */
  
  /*
    Это многострочный
    комментарий
  */
  \`\`\`
  
  ### Группировка селекторов
  
  Можно применять одни стили к нескольким селекторам:
  
  \`\`\`css
  h1, h2, h3 {
    color: navy;
    font-family: sans-serif;
  }
  \`\`\`
  
  ### Каскадность CSS
  
  Каскадность означает, что:
  
  - Стили могут наследоваться от родительских элементов
  - При конфликте применяются более специфичные правила
  - Порядок правил влияет на приоритет (последнее правило имеет больший вес)
  
  ### Единицы измерения
  
  CSS поддерживает различные единицы измерения:
  
  - Абсолютные: px (пиксели)
  - Относительные: em, rem, %, vw, vh
  - Цвета: hex (#RRGGBB), rgb(), rgba(), hsl()
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Группировка селекторов */
    h1, h2 {
      font-family: Arial, sans-serif;
    }
    
    /* CSS-правило */
    p {
      color: #333;
      line-height: 1.5;
      margin-bottom: 15px;
    }
    
    /* Комментарии */
    /* .old-style { display: none; } */
  </style>
</head>
<body>
  <h1>Заголовок</h1>
  <p>Абзац текста</p>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
/* Примеры различных CSS-правил */

/* Стили для body */
body {
  font-size: 16px;
  background-color: #f9f9f9;
  margin: 0;
  padding: 20px;
}

/* Стили для заголовков */
h1 {
  color: #2c3e50;
  font-size: 2em; /* 32px */
  margin-top: 0;
}

/* Стили для ссылок */
a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #2980b9;
}

/* Стили для класса .button */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #2980b9;
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics",
  ],
};

export const css_intro4 = {
  id: "css_intro4",
  title: "Каскад, наследование и специфичность",
  content: `
  ## Основы: почему один стиль применяется, а другой — нет?

  При работе с CSS браузер должен выбрать один стиль, если к элементу подходят несколько. Для этого он опирается на три правила:

  - Каскад
  - Наследование
  - Специфичность

  Давайте разберём каждое из них — на понятных примерах.

  ---

  ## 1. Каскад (Cascading)

  Представь, что ты применяешь к элементу два разных цвета:

  \`\`\`css
  p {
    color: red;
  }

  p {
    color: blue;
  }
  \`\`\`

  Кто победит? CSS прочитает сверху вниз, и если правила одинаково «весомые» — победит последнее. Поэтому текст будет синим.

  Каскад = порядок + специфичность + !important

  ---

  ## 2. Наследование

  Некоторые свойства (цвет, шрифт, межстрочный интервал) передаются потомкам:

  \`\`\`css
  body {
    color: darkgreen;
    font-family: sans-serif;
  }
  \`\`\`

  Тогда все \`<p>\` и \`<h1>\` внутри \`<body>\` унаследуют эти стили.

  Но не все свойства наследуются! Например: \`margin\`, \`padding\`, \`border\` — не передаются по умолчанию.

  Чтобы явно унаследовать стиль, пиши:
  \`\`\`css
  p {
    color: inherit;
  }
  \`\`\`

  ---

  ## 3. Специфичность (Specificity)

  Это правило определяет "вес" селектора.

  Вот табличка:

  | Селектор                    | Вес     |
  |----------------------------|---------|
  | \`* \` (универсальный)        | 0       |
  | тег (например \`p\`)         | 1       |
  | класс (\`.box\`)             | 10      |
  | атрибут (\`[type="text"]\`)  | 10      |
  | псевдокласс (\`:hover\`)     | 10      |
  | ID (\`#main\`)               | 100     |
  | inline-стиль                | 1000    |
  | \`!important\`                | бесконечно, побеждает всё |

  Пример:

  \`\`\`html
  <p id="text" class="highlight">Пример</p>
  \`\`\`

  \`\`\`css
  p { color: black; }              /* вес 1 */
  .highlight { color: blue; }      /* вес 10 */
  #text { color: green; }          /* вес 100 */
  \`\`\`

  Побеждает \`#text\` → цвет будет зелёным.

  ---

  ## Когда использовать !important?

  Только в крайних случаях: если ты точно хочешь переопределить любой стиль (например, когда переопределяешь стороннюю библиотеку).

  \`\`\`css
  .alert {
    color: red !important;
  }
  \`\`\`

  Не используй \`!important\` повсюду — он ломает предсказуемость CSS.

  ---

  ## Закрепим

  Когда к элементу применяются несколько стилей, побеждает тот, у которого:
  1. Больше специфичность
  2. Ближе к элементу (inline > внутренние > внешние)
  3. Стоит ниже по коду
  4. Содержит \`!important\`
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: black; /* вес 1 */
    }
    .highlight {
      color: blue; /* вес 10 */
    }
    #text {
      color: green; /* вес 100 */
    }
  </style>
</head>
<body>
  <p id="text" class="highlight">Этот текст будет ЗЕЛЁНЫМ</p>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
/* Наследование */
body {
  color: darkblue;
  font-family: Arial, sans-serif;
}

/* Каскад: порядок имеет значение */
p {
  color: orange;
}

p {
  color: red; /* Победит этот */
}

/* Специфичность */
p { color: gray; }               /* 1 */
.text { color: blue; }           /* 10 */
#id { color: green; }            /* 100 */
span { color: red !important; }  /* бесконечный вес */
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/Specificity",
    "https://developer.mozilla.org/ru/docs/Web/CSS/inheritance",
    "https://css-tricks.com/specifics-on-css-specificity/",
  ],
};

export const css_intro5 = {
  id: "css_intro5",
  title: "Типы селекторов и комбинации",
  content: `
  ## Типы CSS-селекторов

  Селекторы — это основа CSS. Они позволяют выбрать нужные элементы на странице, чтобы применить к ним стили.

  ### 1. Простые селекторы:

  - **Тег (элемент)**: \`p\`, \`h1\`, \`div\`
    Применяется ко всем тегам на странице.
    
    \`\`\`css
    h1 {
      font-size: 2em;
    }
    \`\`\`

  - **Класс**: \`.highlight\` — ставится через точку
    Один элемент может иметь несколько классов.
    
    \`\`\`css
    .highlight {
      background: yellow;
    }
    \`\`\`

  - **ID**: \`#main\` — уникальный идентификатор
    Используется один раз на странице.
    
    \`\`\`css
    #main {
      padding: 20px;
    }
    \`\`\`

  - **Универсальный**: \`*\` — применяется ко всем элементам
    
    \`\`\`css
    * {
      box-sizing: border-box;
    }
    \`\`\`

  ---

  ### 2. Комбинированные селекторы:

  - **Потомок**: \`div p\` — все \`<p>\` внутри \`<div>\`
  - **Прямой потомок**: \`div > p\` — только прямые дети
  - **Сосед**: \`h2 + p\` — следующий \`<p>\` после \`<h2>\`
  - **Все соседи**: \`h2 ~ p\` — все \`<p>\`, следующие за \`<h2>\`

  \`\`\`css
  article > p {
    margin-bottom: 15px;
  }
  \`\`\`

  ---

  ### 3. Атрибутные селекторы:

  Позволяют выбирать элементы по атрибутам.

  \`\`\`css
  input[type="text"] {
    border: 1px solid #ccc;
  }

  a[href^="https"] {
    color: green;
  }
  \`\`\`

  - \`[attr=value]\` — точное совпадение
  - \`[attr^=value]\` — начинается с
  - \`[attr$=value]\` — заканчивается на
  - \`[attr*=value]\` — содержит подстроку

  ---

  ### 4. Группировка селекторов:

  Один стиль можно применить ко многим элементам:

  \`\`\`css
  h1, h2, h3 {
    color: navy;
    font-family: sans-serif;
  }
  \`\`\`

  ---

  ### 5. Псевдоклассы:

  Используются для описания состояния элемента:

  - \`:hover\` — при наведении
  - \`:first-child\` — первый ребёнок
  - \`:nth-child(2n)\` — чётные элементы
  - \`:not(.active)\` — исключение

  \`\`\`css
  a:hover {
    text-decoration: underline;
  }

  li:first-child {
    font-weight: bold;
  }
  \`\`\`

  ---

  ### 6. Псевдоэлементы:

  Позволяют стилизовать части элементов:

  - \`::before\` — вставка перед элементом
  - \`::after\` — вставка после
  - \`::first-line\`, \`::first-letter\` — оформление текста

  \`\`\`css
  p::first-line {
    font-weight: bold;
  }

  a::after {
    content: " ↗";
  }
  \`\`\`

  ---

  ## Итог

  - Выбирай селекторы с умом: чем проще — тем лучше.
  - Комбинируй их для точечного применения.
  - Псевдоклассы и псевдоэлементы помогают реагировать на действия и расширять внешний вид.
  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    h1, h2 {
      color: navy;
    }

    #main {
      padding: 20px;
      background-color: #f2f2f2;
    }

    .highlight {
      background-color: yellow;
    }

    article > p {
      font-size: 1.1em;
    }

    input[type="text"] {
      border: 1px solid gray;
    }

    a:hover {
      color: red;
    }

    a::after {
      content: " 🔗";
    }
  </style>
</head>
<body>
  <div id="main">
    <h1 class="highlight">Заголовок</h1>
    <article>
      <p>Первый абзац</p>
      <p>Второй абзац</p>
    </article>
    <input type="text" placeholder="Введите имя" />
    <a href="#">Ссылка</a>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
/* Универсальный сброс */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Селекторы */
p {
  font-size: 16px;
}

.highlight {
  background: yellow;
}

#main {
  background: #eee;
  padding: 20px;
}

article > p {
  margin-bottom: 10px;
}

/* Псевдоклассы и псевдоэлементы */
a:hover {
  text-decoration: underline;
}

a::after {
  content: " →";
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Selectors",
    "https://css-tricks.com/almanac/selectors/",
    "https://html5book.ru/css-selectors/",
  ],
};

export const css_intro6 = {
  id: "css_intro6",
  title: "Структура CSS-файла",
  content: `
  ## Организация CSS-файла

  Правильная структура облегчает поддержку и масштабирование кода.

  ### Рекомендуемая структура:
  
  1. **Сброс стилей** или normalize.css
  2. **Глобальные стили**: body, шрифты, цвета
  3. **Общие утилиты**: классы \`.hidden\`, \`.container\`
  4. **Компоненты**: стили кнопок, карточек и т.д.
  5. **Модули/страницы**: стили отдельных блоков или страниц
  6. **Медиа-запросы** — в конце или в нужных местах

  ### Примеры соглашений:
  - Используй комментарии для разделов
  - Придерживайся единого порядка: **позиционирование → бокс-модель → текст → прочее**
  - Используй предсказуемые имена классов

  `.trim(),

  codeExample: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Структура CSS-файла</title>
</head>
<body>
  <div class="container">
    <h1>Структура CSS-файла</h1>
    <div class="card">
      <p>Это пример карточки с базовым оформлением.</p>
      <button class="button">Нажми меня</button>
    </div>
  </div>
</body>
</html>
  `.trim(),

  codeExampleCSS: `
/* Структура стилей для проекта */

/* === Reset === */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* === Globals === */
    body {
      font-family: Arial, sans-serif;
      background-color: #fff;
      color: #333;
      line-height: 1.6;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    /* === Utilities === */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .hidden {
      display: none;
    }

    /* === Components === */
    .button {
      padding: 10px 20px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .button:hover {
      background: #2980b9;
    }

    .card {
      border: 1px solid #ddd;
      padding: 20px;
      margin: 10px 0;
      border-radius: 8px;
    }

    /* === Media === */
    @media (max-width: 768px) {
      .container {
        padding: 10px;
      }

      .card {
        padding: 15px;
      }

      .button {
        padding: 8px 16px;
      }
    }
  `.trim(),

  resources: [
    "https://css-tricks.com/structure-css-project/",
    "https://getbem.com/introduction/",
  ],
};
