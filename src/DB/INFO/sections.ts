export const sections = [
  {
    title: "Best Practices во Frontend",
    rows: [
      // Код и стиль
      {
        key: "Чистый и читаемый код",
        value: "Пиши понятно для других, а не для машины",
      },
      {
        key: "Модули и функции",
        value: "Функции — короткие, одна задача, по названию ясно что делают",
      },
      {
        key: "Переиспользование",
        value: "Выноси повторяющееся в компоненты, хуки, утилиты",
      },
      {
        key: "Конвенции",
        value: "Следуй правилам проекта (имена файлов, структура, стили)",
      },
      {
        key: "Типизация",
        value: "Используй TypeScript: меньше багов, лучше автокомплит",
      },

      // Архитектура
      {
        key: "Компонентный подход",
        value: "UI как LEGO: атомы, молекулы, фичи и страницы",
      },
      {
        key: "Separation of concerns",
        value: "Разделяй логику, вёрстку и данные",
      },
      {
        key: "FSD (Feature-Sliced Design)",
        value: "Слои: shared, entities, features, pages, widgets",
      },
      {
        key: "Smart / Dumb компоненты",
        value: "Контейнеры — логика, презентационные — отображение",
      },
      { key: "Custom hooks", value: "Логику — в хуки, не в компоненты" },

      // UI / UX
      {
        key: "Адаптивность",
        value:
          "Сайты должны работать на любом экране (медиа-запросы, flex/grid)",
      },
      {
        key: "Семантика HTML",
        value: "Используй <main>, <section>, <button> для доступности и SEO",
      },
      { key: "Анимации с умом", value: "Плавно и не мешают взаимодействию" },
      { key: "Фокус и клавиатура", value: "Всё должно быть доступно без мыши" },

      // Работа с данными
      {
        key: "Логика в хуках",
        value: "Избегай fetch прямо в компонентах — выноси в useDataHook()",
      },
      {
        key: "RTK Query / SWR / React Query",
        value: "Асинхронка + кеш из коробки",
      },
      {
        key: "Мемоизация",
        value: "useMemo, React.memo — по необходимости, не везде подряд",
      },

      // Производительность
      {
        key: "Code splitting",
        value: "Ленивая загрузка по маршрутам и компонентам",
      },
      {
        key: "Оптимизация изображений",
        value: "WebP, lazy loading, адаптивные размеры",
      },
      {
        key: "Не ререндерь лишнее",
        value: "Следи за props, ключами, избегай inline-функций",
      },
      {
        key: "Bundle analysis",
        value: "Проверяй размер бандла (Webpack Bundle Analyzer, Vite Plugin)",
      },

      // Тестирование
      {
        key: "Покрытие логики",
        value: "Тестируй утилиты, формы, редьюсеры — всё, что может сломаться",
      },
      {
        key: "Поведение, не реализацию",
        value: "React Testing Library: 'как пользователь'",
      },
      {
        key: "E2E в критичных местах",
        value: "Авторизация, корзина, оформление заказа и т.п.",
      },

      // Безопасность
      {
        key: "Валидация на клиенте",
        value: "Проверка форм, но не замена серверной валидации",
      },
      { key: "Очищай ввод", value: "XSS: не вставляй raw HTML без проверки" },
      { key: "HTTPS", value: "Только безопасное соединение" },
      {
        key: "CORS и токены",
        value: "Настрой правильные заголовки, не храни токены в localStorage",
      },

      // Работа в команде
      {
        key: "Коммиты по стандарту",
        value: "Conventional commits: feat, fix, refactor и т.д.",
      },
      {
        key: "Code review",
        value: "Проверяй не только код, но и логику, UX, читаемость",
      },
      {
        key: "CI/CD",
        value: "Автоматическая проверка, тесты, сборка и деплой",
      },
    ],
  },
  {
    title: "HTML",
    rows: [
      // Основы HTML
      { key: "<!DOCTYPE html>", value: "Объявление типа документа (HTML5)" },
      { key: "<html>", value: "Корневой элемент HTML-документа" },
      { key: "<head>", value: "Мета-информация: title, meta, link, script" },
      { key: "<body>", value: "Основное содержимое страницы" },
      { key: "<title>", value: "Заголовок страницы (во вкладке браузера)" },
      { key: "<meta charset='UTF-8'>", value: "Установка кодировки (UTF-8)" },

      // Текст и структура
      {
        key: "<h1>–<h6>",
        value: "Заголовки (от самого важного до менее важного)",
      },
      { key: "<p>", value: "Параграф текста" },
      { key: "<br>", value: "Перенос строки" },
      { key: "<hr>", value: "Горизонтальная линия" },
      { key: "<strong>, <b>", value: "Жирный текст (semantics / style)" },
      { key: "<em>, <i>", value: "Курсив (semantics / style)" },
      { key: "<span>", value: "Инлайн-обёртка без смысла (для стилей)" },
      { key: "<div>", value: "Блочная обёртка (контейнер)" },

      // Ссылки и медиа
      { key: "<a href='...'>", value: "Ссылка на другой адрес/страницу" },
      {
        key: "<img src='' alt=''>",
        value: "Изображение (src — путь, alt — описание)",
      },
      { key: "<video>, <audio>", value: "Встраивание видео и аудио" },
      { key: "<source>", value: "Источник медиа-файла для <video>/<audio>" },
      {
        key: "<iframe>",
        value: "Встраивание внешнего ресурса (видео, карта и т.п.)",
      },

      // Списки и таблицы
      {
        key: "<ul>, <ol>, <li>",
        value: "Списки: маркированный, нумерованный, элементы",
      },
      { key: "<table>", value: "Таблица" },
      { key: "<tr>, <td>, <th>", value: "Строка таблицы, ячейка, заголовок" },
      { key: "<thead>, <tbody>, <tfoot>", value: "Разделение таблицы" },

      // Формы и ввод
      { key: "<form>", value: "Форма для отправки данных" },
      {
        key: "<input>",
        value: "Поле ввода (тип через type='text', 'email' и т.п.)",
      },
      { key: "<label>", value: "Подпись к полю ввода" },
      { key: "<textarea>", value: "Многострочное поле ввода" },
      { key: "<button>", value: "Кнопка (по умолчанию — submit)" },
      { key: "<select>, <option>", value: "Выпадающий список" },
      {
        key: "required, disabled, readonly",
        value: "Атрибуты валидации и блокировки",
      },

      // Семантика и SEO
      { key: "<header>, <footer>", value: "Шапка и подвал страницы/блока" },
      {
        key: "<main>, <section>, <article>, <aside>",
        value: "Основные семантические блоки",
      },
      { key: "<nav>", value: "Навигация по сайту" },
      { key: "<time>, <mark>, <abbr>", value: "Временные и смысловые теги" },

      // Скрипты и ресурсы
      { key: "<script src='...'>", value: "Подключение JS-файла" },
      { key: "<link rel='stylesheet'>", value: "Подключение CSS" },
      { key: "defer, async", value: "Атрибуты загрузки скриптов" },
      { key: "<noscript>", value: "Контент, если JS отключен" },
    ],
  },
  {
    title: "CSS",
    rows: [
      // Flexbox
      { key: "display: flex", value: "Включает флекс-контейнер" },
      {
        key: "justify-content",
        value: "Горизонтальное выравнивание: flex-start, center, space-between",
      },
      {
        key: "align-items",
        value: "Вертикальное выравнивание: stretch, center, flex-end",
      },
      { key: "flex-direction", value: "Направление оси: row, column" },
      { key: "gap", value: "Отступы между элементами" },

      // Grid
      { key: "display: grid", value: "Включает грид-контейнер" },
      {
        key: "grid-template-columns",
        value: "Определяет колонки: repeat(3, 1fr)",
      },
      { key: "grid-template-rows", value: "Определяет ряды" },
      { key: "grid-gap / gap", value: "Отступ между ячейками" },
      { key: "grid-column / grid-row", value: "Расположение элемента в сетке" },

      // Position
      { key: "position: static", value: "По умолчанию, без позиционирования" },
      { key: "position: relative", value: "Относительно обычного положения" },
      {
        key: "position: absolute",
        value: "Относительно ближайшего родителя с position",
      },
      { key: "position: fixed", value: "Относительно окна браузера" },
      {
        key: "top / left / right / bottom",
        value: "Смещение при позиционировании",
      },
      { key: "z-index", value: "Управление слоями (чем больше, тем выше)" },

      // Адаптивность
      {
        key: "@media (max-width: 768px)",
        value: "Медиазапрос для адаптивной вёрстки",
      },
      { key: "vw / vh", value: "Проценты от ширины / высоты окна" },
      {
        key: "em / rem",
        value: "Относительные единицы (em — от родителя, rem — от root)",
      },

      // Псевдоклассы и псевдоэлементы
      { key: ":hover", value: "Наведение на элемент" },
      { key: ":nth-child(n)", value: "Выбор по номеру элемента" },
      { key: ":focus", value: "Фокусировка (например, на input)" },
      {
        key: "::before / ::after",
        value: "Добавление контента до/после элемента",
      },

      // Основные свойства
      { key: "color", value: "Цвет текста" },
      { key: "background / background-color", value: "Фон" },
      { key: "margin / padding", value: "Внешние и внутренние отступы" },
      { key: "border", value: "Граница элемента" },
      { key: "width / height", value: "Размеры элемента" },
      {
        key: "box-sizing: border-box",
        value: "Включает padding и border в width/height",
      },

      // Шрифты и текст
      { key: "font-size", value: "Размер шрифта" },
      { key: "font-weight", value: "Жирность: normal, bold, 400, 700" },
      { key: "text-align", value: "Выравнивание текста: left, center, right" },
      { key: "line-height", value: "Межстрочный интервал" },
      {
        key: "text-decoration",
        value: "Оформление текста (например, underline)",
      },

      // Прочее
      {
        key: "overflow",
        value: "Поведение при переполнении: hidden, scroll, auto",
      },
      { key: "cursor", value: "Тип курсора: pointer, default" },
      {
        key: "transition",
        value: "Плавные анимации: transition: all 0.3s ease",
      },
      { key: "opacity", value: "Прозрачность: от 0 до 1" },
      { key: "visibility", value: "Видимость: visible, hidden" },
      {
        key: "display",
        value: "Тип отображения: block, inline, none, flex, grid",
      },
    ],
  },
  {
    title: "React (полный обзор)",
    rows: [
      // Основы
      {
        key: "JSX",
        value:
          "Синтаксис, похожий на HTML внутри JS-функций (transpiled в React.createElement)",
      },
      {
        key: "Компоненты",
        value: "Функции, возвращающие JSX. Названия — с заглавной буквы",
      },
      { key: "Props", value: "Входные данные компонента (read-only)" },
      {
        key: "State",
        value: "Локальное состояние компонента, управляется через useState()",
      },
      {
        key: "Virtual DOM",
        value:
          "Виртуальное дерево элементов — быстрое сравнение и обновление DOM",
      },

      // Хуки (Hooks)
      {
        key: "useState()",
        value: "Хук состояния: const [value, setValue] = useState(init)",
      },
      {
        key: "useEffect()",
        value: "Побочные эффекты: useEffect(() => {...}, [deps])",
      },
      {
        key: "useContext()",
        value: "Доступ к глобальным данным через Context API",
      },
      {
        key: "useRef()",
        value: "Создание ссылки на DOM-элемент или хранение mutable значения",
      },
      {
        key: "useMemo(), useCallback()",
        value: "Мемоизация значений/функций для оптимизации",
      },
      {
        key: "useReducer()",
        value: "Аналог Redux-подхода внутри компонента (state + dispatch)",
      },
      {
        key: "Кастомные хуки",
        value: "Собственные useSomething() — для переиспользования логики",
      },

      // Архитектура и подходы
      {
        key: "Компонентный подход",
        value: "UI разделён на переиспользуемые компоненты",
      },
      {
        key: "Unidirectional data flow",
        value: "Данные идут сверху вниз (props), события — снизу вверх",
      },
      {
        key: "Smart / Dumb компоненты",
        value: "Контейнеры с логикой и презентационные компоненты",
      },
      {
        key: "Atomic Design",
        value: "atoms → molecules → organisms → templates → pages",
      },
      {
        key: "FSD (Feature-Sliced Design)",
        value: "Логическая структура: shared, entities, features, pages",
      },

      // Работа с данными
      {
        key: "Props drilling",
        value: "Передача props через несколько уровней компонентов",
      },
      {
        key: "Context API",
        value:
          "Избегает prop drilling, но может быть неэффективен при больших обновлениях",
      },
      {
        key: "Redux / RTK",
        value: "Глобальное управление состоянием (store, actions, reducers)",
      },
      {
        key: "RTK Query",
        value: "Асинхронные запросы и кеширование от Redux Toolkit",
      },

      // Маршрутизация
      { key: "React Router", value: "<BrowserRouter>, <Route>, <Link>" },
      { key: "Dynamic routes", value: "Маршруты с параметрами: /post/:id" },
      {
        key: "Nested routes",
        value: "Вложенные маршруты (особенно в React Router v6+)",
      },

      // Работа с формами
      {
        key: "Контролируемые компоненты",
        value: "value и onChange управляются из state",
      },
      {
        key: "React Hook Form",
        value: "Удобная библиотека для форм + валидация",
      },
      { key: "Yup/Zod", value: "Схема валидации данных формы" },

      // Рендеринг и оптимизация
      {
        key: "Reconciliation",
        value: "Сравнение Virtual DOM и обновление настоящего DOM",
      },
      {
        key: "Key prop",
        value: "Идентификатор при списках для оптимального рендера",
      },
      {
        key: "React.memo()",
        value: "Памятование компонента при одинаковых props",
      },
      {
        key: "Suspense",
        value: "Ожидание асинхронных данных, используется с lazy",
      },
      { key: "React.lazy()", value: "Динамический импорт компонентов" },

      // SSR / SSG / App Router
      {
        key: "Next.js",
        value: "Фреймворк на React для SSR/SSG/ISR, встроенный маршрутизатор",
      },
      {
        key: "App Router (Next.js 13+)",
        value: "Новая структура с layout, loading, server components",
      },
      {
        key: "React Server Components",
        value: "Выполняются на сервере, передают только результат",
      },

      // Инструменты и экосистема
      {
        key: "Vite / CRA",
        value: "Быстрый старт и сборка проекта (Vite предпочтительнее)",
      },
      {
        key: "TypeScript",
        value: "Типизация компонентов и пропсов, безопасность разработки",
      },
      { key: "UI-библиотеки", value: "MUI, Ant Design, Tailwind, Chakra UI" },
      {
        key: "Тестирование",
        value: "Jest, React Testing Library, Vitest, Cypress (e2e)",
      },
    ],
  },
  {
    title: "String (Строки)",
    rows: [
      { key: "length", value: "Длина строки: 'abc'.length → 3" },
      {
        key: "toUpperCase()",
        value: "В верхний регистр: 'abc'.toUpperCase() → 'ABC'",
      },
      {
        key: "toLowerCase()",
        value: "В нижний регистр: 'ABC'.toLowerCase() → 'abc'",
      },
      {
        key: "includes(substr)",
        value: "Проверка вхождения: 'test'.includes('es') → true",
      },
      {
        key: "startsWith(substr)",
        value: "Начинается ли с: 'hello'.startsWith('he') → true",
      },
      {
        key: "endsWith(substr)",
        value: "Заканчивается ли на: 'test.js'.endsWith('.js') → true",
      },
      {
        key: "indexOf(substr)",
        value: "Индекс первого вхождения: 'hello'.indexOf('l') → 2",
      },
      {
        key: "slice(start, end)",
        value: "Извлекает часть: 'hello'.slice(1, 4) → 'ell'",
      },
      {
        key: "substring(start, end)",
        value: "Похож на slice, но без отриц. индексов",
      },
      {
        key: "replace(old, new)",
        value: "Замена: 'a-b'.replace('-', '+') → 'a+b'",
      },
      {
        key: "split(delimiter)",
        value: "Разделение: 'a,b,c'.split(',') → ['a','b','c']",
      },
      {
        key: "trim()",
        value: "Удаляет пробелы с краёв: '  hi  '.trim() → 'hi'",
      },
      {
        key: "repeat(n)",
        value: "Повторяет строку: 'ha'.repeat(3) → 'hahaha'",
      },
      {
        key: "charAt(index)",
        value: "Символ по индексу: 'abc'.charAt(1) → 'b'",
      },
    ],
  },
  {
    title: "Number (Числа)",
    rows: [
      {
        key: "toFixed(n)",
        value: "Округление до n знаков: (5.678).toFixed(2) → '5.68'",
      },
      { key: "toString()", value: "В строку: (123).toString() → '123'" },
      { key: "parseInt(str)", value: "Парсинг в целое: parseInt('42px') → 42" },
      {
        key: "parseFloat(str)",
        value: "Парсинг в число: parseFloat('3.14abc') → 3.14",
      },
      { key: "isNaN(val)", value: "Проверка на NaN: isNaN('abc') → true" },
      {
        key: "isFinite(val)",
        value: "Проверка конечности: isFinite(10/0) → false",
      },
      { key: "Math.round()", value: "Округление: Math.round(2.6) → 3" },
      { key: "Math.floor()", value: "Округление вниз: Math.floor(2.9) → 2" },
      { key: "Math.ceil()", value: "Округление вверх: Math.ceil(2.1) → 3" },
      { key: "Math.abs()", value: "Модуль: Math.abs(-5) → 5" },
      { key: "Math.max(...)", value: "Максимум: Math.max(1,5,3) → 5" },
      { key: "Math.min(...)", value: "Минимум: Math.min(1,5,3) → 1" },
      {
        key: "Math.random()",
        value: "Случайное от 0 до 1: Math.random() → 0.123...",
      },
      { key: "Math.pow(a, b)", value: "Степень: Math.pow(2, 3) → 8" },
      { key: "Math.sqrt(n)", value: "Корень: Math.sqrt(9) → 3" },
    ],
  },
  {
    title: "Array (Массивы)",
    rows: [
      { key: "length", value: "Длина массива: [1,2,3].length → 3" },
      { key: "push(el)", value: "Добавить в конец: [1].push(2) → [1,2]" },
      { key: "pop()", value: "Удалить с конца: [1,2].pop() → [1]" },
      {
        key: "unshift(el)",
        value: "Добавить в начало: [2].unshift(1) → [1,2]",
      },
      { key: "shift()", value: "Удалить с начала: [1,2].shift() → [2]" },
      { key: "map(fn)", value: "Преобразование: [1,2].map(x=>x*2) → [2,4]" },
      {
        key: "filter(fn)",
        value: "Фильтрация: [1,2,3].filter(x=>x>1) → [2,3]",
      },
      {
        key: "reduce(fn, init)",
        value: "Сбор значения: [1,2,3].reduce((a,b)=>a+b, 0) → 6",
      },
      { key: "forEach(fn)", value: "Перебор: [1,2].forEach(x=>...)" },
      { key: "find(fn)", value: "Первый подходящий: [1,2,3].find(x=>x>1) → 2" },
      { key: "findIndex(fn)", value: "Индекс первого подходящего" },
      {
        key: "some(fn)",
        value: "Есть ли хоть один: [1,2].some(x=>x>1) → true",
      },
      {
        key: "every(fn)",
        value: "Все ли подходят: [1,2].every(x=>x>0) → true",
      },
      {
        key: "includes(el)",
        value: "Содержит ли элемент: [1,2].includes(2) → true",
      },
      { key: "indexOf(el)", value: "Индекс элемента: [1,2,3].indexOf(2) → 1" },
      { key: "concat(arr)", value: "Склеить: [1].concat([2]) → [1,2]" },
      {
        key: "slice(start, end)",
        value: "Копия части: [1,2,3].slice(1,3) → [2,3]",
      },
      {
        key: "splice(start, del, ...add)",
        value: "Удалить/вставить: [1,2,3].splice(1,1,9) → [1,9,3]",
      },
      { key: "reverse()", value: "Реверс: [1,2].reverse() → [2,1]" },
      { key: "sort()", value: "Сортировка: [3,1].sort() → [1,3]" },
      { key: "join(sep)", value: "В строку: [1,2].join('-') → '1-2'" },
      {
        key: "flat()",
        value: "Разворачивает вложенные: [1,[2,3]].flat() → [1,2,3]",
      },
    ],
  },
  {
    title: "Object (Объекты)",
    rows: [
      { key: "Object.keys(obj)", value: "Ключи: Object.keys({a:1}) → ['a']" },
      {
        key: "Object.values(obj)",
        value: "Значения: Object.values({a:1}) → [1]",
      },
      {
        key: "Object.entries(obj)",
        value: "Пары: Object.entries({a:1}) → [['a',1]]",
      },
      {
        key: "Object.fromEntries()",
        value: "Из пар в объект: [['a',1]] → {a:1}",
      },
      {
        key: "hasOwnProperty(key)",
        value: "Проверка свойства: obj.hasOwnProperty('a')",
      },
      { key: "in", value: "Ключ в объекте: 'a' in obj → true" },
      { key: "delete obj.key", value: "Удаление свойства: delete obj.a" },
      { key: "spread (...)", value: "Копия объекта: {...obj, b:2}" },
      { key: "Object.assign()", value: "Копирование/объединение объектов" },
      {
        key: "JSON.stringify(obj)",
        value: "В строку JSON: JSON.stringify({a:1}) → '{\"a\":1}'",
      },
      {
        key: "JSON.parse(str)",
        value: "Из JSON-строки: JSON.parse('{\"a\":1}') → {a:1}",
      },
    ],
  },
  {
    title: "Set / WeakSet",
    rows: [
      { key: "new Set()", value: "Создание множества: const s = new Set()" },
      { key: "add(value)", value: "Добавление: s.add(1)" },
      { key: "delete(value)", value: "Удаление: s.delete(1)" },
      { key: "has(value)", value: "Проверка: s.has(1) → true/false" },
      { key: "size", value: "Количество: s.size → 1" },
      { key: "forEach()", value: "Перебор значений множества" },
      { key: "WeakSet", value: "Только объекты, не итерируемый, без size" },
    ],
  },
  {
    title: "Map / WeakMap",
    rows: [
      { key: "new Map()", value: "Создание: const m = new Map()" },
      { key: "set(key, val)", value: "Установка пары: m.set('a', 1)" },
      { key: "get(key)", value: "Получение: m.get('a') → 1" },
      { key: "has(key)", value: "Проверка: m.has('a') → true" },
      { key: "delete(key)", value: "Удаление: m.delete('a')" },
      { key: "size", value: "Количество пар: m.size → 1" },
      { key: "forEach()", value: "Перебор: m.forEach((val, key) => ...)" },
      {
        key: "WeakMap",
        value: "Ключи — только объекты, не итерируется, без size",
      },
    ],
  },
  {
    title: "Promise (Промисы)",
    rows: [
      {
        key: "new Promise(fn)",
        value: "Создание: new Promise((res, rej) => ...)",
      },
      {
        key: "resolve, reject",
        value: "Завершение: resolve(value), reject(error)",
      },
      { key: "then()", value: "Обработка успеха: promise.then(data => ...)" },
      { key: "catch()", value: "Обработка ошибки: promise.catch(err => ...)" },
      { key: "finally()", value: "Всегда вызывается: .finally(() => ...)" },
      { key: "Promise.all()", value: "Ожидание всех: Promise.all([p1, p2])" },
      {
        key: "Promise.race()",
        value: "Результат первого: Promise.race([p1, p2])",
      },
    ],
  },
  {
    title: "Class (Классы)",
    rows: [
      { key: "class MyClass {}", value: "Создание класса" },
      { key: "constructor()", value: "Инициализация при new" },
      { key: "this", value: "Ссылка на текущий экземпляр" },
      { key: "extends", value: "Наследование: class A extends B" },
      { key: "super()", value: "Вызов конструктора родителя" },
      { key: "static", value: "Статический метод: MyClass.staticMethod()" },
      {
        key: "new MyClass()",
        value: "Создание объекта: const obj = new MyClass()",
      },
    ],
  },
  {
    title: "Работа браузера и URL",
    rows: [
      {
        key: "URL",
        value:
          "Унифицированный адрес ресурса: https://site.com/page?query=1#hash",
      },
      { key: "DNS", value: "Преобразует домен в IP-адрес" },
      {
        key: "TCP/IP",
        value: "Протокол доставки данных между клиентом и сервером",
      },
      { key: "HTTP/HTTPS", value: "Протокол передачи данных (S — безопасный)" },
      {
        key: "Запрос → Ответ",
        value: "Браузер отправляет HTTP-запрос, получает HTML-ответ",
      },
      {
        key: "HTTP-коды",
        value:
          "200 — ок, 301/302 — редирект, 404 — не найдено, 500 — ошибка сервера",
      },
    ],
  },
  {
    title: "Этапы рендеринга страницы",
    rows: [
      { key: "1. Загрузка HTML", value: "HTML приходит от сервера" },
      { key: "2. Парсинг HTML", value: "Создаётся DOM-дерево" },
      {
        key: "3. Загрузка CSS",
        value: "Создаётся CSSOM (может блокировать отрисовку)",
      },
      { key: "4. Создание Render Tree", value: "Объединение DOM + CSSOM" },
      {
        key: "5. Layout (reflow)",
        value: "Вычисление позиций и размеров элементов",
      },
      { key: "6. Painting", value: "Отрисовка пикселей на экран" },
      { key: "7. Composite", value: "Слои композируются и выводятся на экран" },
    ],
  },
  {
    title: "Оптимизация рендера",
    rows: [
      { key: "defer / async", value: "Загрузка JS не блокирует рендер" },
      { key: "minify / gzip", value: "Уменьшение размера файлов" },
      {
        key: "Critical CSS",
        value: "Инлайн важных стилей для быстрой отрисовки",
      },
      { key: "Lazy loading", value: "Отложенная загрузка изображений/модулей" },
      { key: "Avoid reflow", value: "Минимизировать частые изменения layout" },
    ],
  },
  {
    title: "Основные Web API",
    rows: [
      {
        key: "DOM API",
        value: "document.querySelector(), createElement(), appendChild()",
      },
      {
        key: "Event API",
        value: "addEventListener(), event.target, preventDefault()",
      },
      { key: "Fetch API", value: "fetch(url).then(res => res.json())" },
      {
        key: "LocalStorage / SessionStorage",
        value: "Хранение данных в браузере",
      },
      { key: "History API", value: "history.pushState(), history.back()" },
      {
        key: "Geolocation API",
        value: "navigator.geolocation.getCurrentPosition(...)",
      },
      {
        key: "Notification API",
        value: "Уведомления: Notification.requestPermission()",
      },
      { key: "Clipboard API", value: "navigator.clipboard.writeText('text')" },
      { key: "Speech API", value: "SpeechRecognition, SpeechSynthesis" },
      { key: "Canvas / WebGL", value: "Рисование графики, 2D и 3D" },
      { key: "WebSocket", value: "Двусторонняя связь: new WebSocket(url)" },
      { key: "Service Workers", value: "Фоновый кеш и офлайн-режим PWA" },
    ],
  },
  {
    title: "Как работает JavaScript",
    rows: [
      {
        key: "Однопоточность",
        value: "JS выполняется в одном потоке (main thread)",
      },
      {
        key: "Интерпретируемый язык",
        value: "Код читается и выполняется движком (например, V8)",
      },
      {
        key: "JIT-компиляция",
        value:
          "Just-in-time: комбинация интерпретации и компиляции для ускорения",
      },
      {
        key: "Синхронность",
        value: "Операции выполняются последовательно (по умолчанию)",
      },
    ],
  },
  {
    title: "Call Stack (Стек вызовов)",
    rows: [
      {
        key: "Вызовы функций",
        value:
          "Функции помещаются в стек при вызове и убираются после выполнения",
      },
      {
        key: "Стек LIFO",
        value: "Last In – First Out (последний вошёл — первый вышел)",
      },
      {
        key: "RangeError: Maximum call stack size exceeded",
        value: "Переполнение стека (например, при бесконечной рекурсии)",
      },
    ],
  },
  {
    title: "Event Loop и асинхронность",
    rows: [
      {
        key: "Web API",
        value: "Асинхронные функции (setTimeout, fetch) выполняются вне стека",
      },
      {
        key: "Callback Queue (Task Queue)",
        value: "Колбэки добавляются после завершения Web API",
      },
      {
        key: "Microtasks",
        value:
          "Promise.then(), queueMicrotask() — имеют приоритет перед обычными тасками",
      },
      {
        key: "Event Loop",
        value: "Следит за стеком и тасками, обрабатывает по очереди",
      },
    ],
  },
  {
    title: "Область видимости и замыкания",
    rows: [
      {
        key: "Лексическая область",
        value: "Функции помнят контекст, где они были созданы",
      },
      {
        key: "Closure (замыкание)",
        value: "Функция замыкает переменные из внешней области",
      },
      {
        key: "var vs let/const",
        value: "var — функциональная область, let/const — блочная",
      },
    ],
  },
  {
    title: "Hoisting (всплытие)",
    rows: [
      {
        key: "Переменные var",
        value: "Объявления всплывают вверх, но не инициализация",
      },
      {
        key: "Функции (function)",
        value: "Декларации всплывают полностью (можно вызывать до определения)",
      },
      {
        key: "let/const",
        value:
          "Имеют TDZ (Temporal Dead Zone) — нельзя использовать до объявления",
      },
    ],
  },
  {
    title: "this и контекст вызова",
    rows: [
      {
        key: "Обычная функция",
        value: "this зависит от того, **как вызвана функция**",
      },
      { key: "Метод объекта", value: "this = объект перед точкой" },
      {
        key: "Стрелочная функция",
        value: "Не имеет своего this — берёт из внешнего контекста",
      },
      {
        key: "call / apply / bind",
        value: "Ручное управление this: fn.call(obj), fn.bind(obj)",
      },
    ],
  },
  {
    title: "Сравнение типов и преобразование",
    rows: [
      {
        key: "== vs ===",
        value: "== сравнивает с приведением типов, === — строго",
      },
      { key: "Falsy значения", value: "false, 0, '', null, undefined, NaN" },
      { key: "Тип coercion", value: "'5' + 1 → '51', '5' - 1 → 4" },
      {
        key: "typeof",
        value: "Определяет тип: typeof null → 'object' (особенность языка)",
      },
    ],
  },
  {
    title: "Браузерный движок",
    rows: [
      // Основы
      {
        key: "Движок браузера",
        value:
          "Программа, которая интерпретирует HTML, CSS, JS и отображает страницу",
      },
      {
        key: "Rendering Engine",
        value:
          "Отвечает за отрисовку: HTML → DOM → CSSOM → Render Tree → pixels",
      },
      {
        key: "JS Engine",
        value: "Отвечает за выполнение JavaScript (например, V8, SpiderMonkey)",
      },

      // Популярные движки
      {
        key: "Blink (Chrome, Edge, Opera)",
        value: "Современный движок от Google",
      },
      {
        key: "WebKit (Safari)",
        value: "Оригинальный движок Apple (основа Blink)",
      },
      { key: "Gecko (Firefox)", value: "Движок Mozilla" },
      {
        key: "Trident / EdgeHTML",
        value: "Старые движки от Internet Explorer и раннего Edge",
      },

      // Этапы обработки страницы
      { key: "1. Загрузка HTML", value: "Получение HTML-документа от сервера" },
      { key: "2. Парсинг → DOM", value: "HTML превращается в дерево объектов" },
      {
        key: "3. Загрузка CSS → CSSOM",
        value: "Параллельно строится дерево стилей",
      },
      {
        key: "4. Render Tree",
        value: "Объединение DOM + CSSOM без скрытых элементов",
      },
      { key: "5. Layout", value: "Вычисление размеров и позиций элементов" },
      {
        key: "6. Painting",
        value: "Отрисовка элементов на экране (цвета, текст, тени и т.д.)",
      },
      {
        key: "7. Compositing",
        value: "Сборка слоёв и финальный вывод на экран",
      },

      // Оптимизация и особенности
      {
        key: "Reflow",
        value:
          "Изменение структуры/размера вызывает перерасчёт layout (дорого)",
      },
      {
        key: "Repaint",
        value: "Изменение внешнего вида без перерасчёта позиции",
      },
      {
        key: "GPU ускорение",
        value:
          "Некоторые слои обрабатываются на видеокарте (например, transform)",
      },
      {
        key: "Lazy loading",
        value: "Отложенная загрузка ресурсов для ускорения первого рендера",
      },
      {
        key: "Critical Rendering Path",
        value: "Минимальный путь от загрузки до отображения контента",
      },
      {
        key: "defer / async",
        value: "Управление загрузкой скриптов, чтобы не блокировать рендеринг",
      },
    ],
  },
  {
    title: "SEO, Доступность и Скорость (Frontend-фокус)",
    rows: [
      // Основы SEO для фронта
      {
        key: "<title>",
        value:
          "Уникальный и релевантный заголовок страницы (обязательно для SEO)",
      },
      {
        key: "<meta name='description'>",
        value: "Краткое описание страницы (отображается в выдаче)",
      },
      {
        key: "<h1>-<h6>",
        value:
          "Заголовки по иерархии — не пропускать <h1>, 1 заголовок на страницу",
      },
      {
        key: "<a href>",
        value: "Семантические ссылки, не использовать <div onClick>",
      },
      {
        key: "<img alt=''>",
        value: "Описание изображений через alt — важно для доступности и SEO",
      },
      {
        key: "semantic HTML",
        value:
          "Использовать <main>, <nav>, <article>, <section> для понимания структуры",
      },

      // Метаданные и индексация
      {
        key: "<meta robots>",
        value: "Управление индексацией: noindex, nofollow",
      },
      {
        key: "<link rel='canonical'>",
        value: "Предотвращение дублирования контента",
      },
      {
        key: "Open Graph / Twitter Tags",
        value: "Превью в соцсетях: og:title, og:image и т.п.",
      },

      // Доступность (Accessibility / a11y)
      {
        key: "aria-* атрибуты",
        value:
          "Обогащают информацию для скринридеров (aria-label, aria-hidden)",
      },
      { key: "tabindex", value: "Управление фокусом при табуляции" },
      {
        key: "role",
        value: "Определяет тип элемента: role='button', 'dialog'",
      },
      {
        key: "Контраст",
        value: "Хорошая читаемость текста на фоне (WCAG AA/AAA)",
      },
      {
        key: "Клавиатурная навигация",
        value: "Все действия должны быть доступны с клавиатуры",
      },

      // Скорость загрузки
      {
        key: "Оптимизация изображений",
        value: "WebP, сжатие, размеры по контейнеру",
      },
      {
        key: "Lazy loading",
        value: "Отложенная загрузка изображений и блоков (loading='lazy')",
      },
      {
        key: "Code splitting",
        value: "Разделение JS-бандла на части (React.lazy, dynamic import)",
      },
      { key: "defer / async", value: "Неблокирующая загрузка скриптов" },
      { key: "Critical CSS", value: "Инлайн стилей above-the-fold контента" },
      {
        key: "Минификация и кеширование",
        value: "Сжатие ресурсов, long-term кеш",
      },

      // Метрики производительности (Core Web Vitals)
      {
        key: "LCP (Largest Contentful Paint)",
        value: "Когда загружается основной контент (норма <2.5s)",
      },
      {
        key: "FID (First Input Delay)",
        value: "Задержка до реакции на первое действие (норма <100мс)",
      },
      {
        key: "CLS (Cumulative Layout Shift)",
        value: "Скачки верстки при загрузке (норма <0.1)",
      },
      {
        key: "INP (Interaction to Next Paint)",
        value: "Реакция на пользовательское взаимодействие",
      },
      {
        key: "TTFB (Time To First Byte)",
        value: "Время до получения первого байта от сервера",
      },

      // Инструменты для анализа
      {
        key: "Lighthouse",
        value: "Аудит SEO, скорости, a11y (в Chrome DevTools)",
      },
      {
        key: "PageSpeed Insights",
        value: "Google-инструмент для анализа и рекомендаций",
      },
      {
        key: "Web Vitals (npm)",
        value: "Подключаемая библиотека для сбора метрик в реальном времени",
      },
    ],
  },
  {
    title: "История развития Frontend (по годам и технологиям)",
    rows: [
      // 1990–1999: Ранний Web
      { key: "1991", value: "Появился первый сайт в CERN (HTML 1.0)" },
      { key: "1995", value: "Создан JavaScript (Брендан Айк, Netscape)" },
      { key: "1996", value: "CSS1 — стилизация HTML-документов" },
      { key: "1997", value: "HTML 4.0 + DOM + ECMAScript 1 (основа JS)" },

      // 2000–2009: Эпоха DHTML и jQuery
      {
        key: "2002",
        value: "AJAX (асинхронные запросы без перезагрузки страницы)",
      },
      { key: "2006", value: "jQuery — революция удобного DOM-манипулирования" },
      {
        key: "2008",
        value: "Запущен Google Chrome с движком V8 (ускорение JS)",
      },

      // 2010–2014: Эра SPA и MVC-фреймворков
      { key: "2010", value: "Backbone.js — первый популярный MVC-фреймворк" },
      {
        key: "2011",
        value: "AngularJS (Google) — декларативный подход и MVVM",
      },
      {
        key: "2013",
        value: "React.js от Facebook — виртуальный DOM, компонентный подход",
      },
      {
        key: "2014",
        value: "Vue.js от Эвана Ю — легковесный и простой фреймворк",
      },

      // 2015–2018: Новая эра — модульность, ES6+, инструменты
      {
        key: "2015",
        value: "ES6 (let/const, arrow, classes, modules) — новый стандарт JS",
      },
      { key: "2015", value: "Webpack — мощный бандлер, сборка модулей" },
      {
        key: "2016",
        value: "Create React App, React 15.5 — удобный старт без настройки",
      },
      { key: "2017", value: "React Fiber — новый рендеринг движок (React 16)" },
      {
        key: "2018",
        value: "TypeScript + React — становится стандартом индустрии",
      },

      // 2019–2022: Hooks, SSR, Jamstack
      {
        key: "2019",
        value: "React Hooks — useState, useEffect и др. (React 16.8)",
      },
      {
        key: "2020",
        value: "Next.js, Gatsby — рост SSR/SSG решений (Jamstack)",
      },
      { key: "2020", value: "Tailwind CSS — утилитарный CSS стал мейнстримом" },
      { key: "2021", value: "ES Modules — поддержка в браузерах без сборки" },
      {
        key: "2022",
        value: "Vite — быстрый dev-сервер и сборка (альтернатива Webpack)",
      },

      // 2023–2024: Производительность, Server-first
      {
        key: "2023",
        value: "React Server Components (RSC) и App Router (Next.js 13+)",
      },
      {
        key: "2023",
        value: "Signals от Solid.js, Qwik, Astro — Server-first подход",
      },
      {
        key: "2024",
        value: "React 19 (в разработке) + улучшения в RSC и Suspense",
      },
      {
        key: "2024",
        value: "AI-интеграции в UI, генерация кода, Copilot, GPT в IDE",
      },

      // Современные тренды
      {
        key: "Типовой стек",
        value: "React + TypeScript + Vite/Next.js + Tailwind/MUI + Zustand/RTK",
      },
      {
        key: "Полезные практики",
        value: "SSR, SSG, hydration, code-splitting, lazy loading",
      },
      {
        key: "Будущее",
        value:
          "Server-first UI, Edge-функции, Partial Hydration, DX-first подходы",
      },
    ],
  },
  {
    title: "Архитектуры Frontend-приложений",
    rows: [
      // Классический подход
      {
        key: "HTML + CSS + JS",
        value: "Ранние сайты: сервер рендерит HTML, минимум логики на клиенте",
      },
      {
        key: "jQuery",
        value: "Управление DOM вручную, нет архитектуры, сложно масштабировать",
      },

      // MVC / MVVM / MVP
      {
        key: "MVC (Model-View-Controller)",
        value:
          "View показывает данные, Controller управляет, Model хранит данные",
      },
      {
        key: "MVVM",
        value: "ViewModel связывает View и Model через биндинги (AngularJS)",
      },
      {
        key: "MVP",
        value: "Presenter управляет логикой, View — только отображает",
      },

      // SPA (Single Page Application)
      {
        key: "SPA",
        value:
          "Одностраничное приложение, JS управляет навигацией и состоянием без перезагрузки",
      },
      {
        key: "React, Vue, Angular",
        value: "Компонентный подход, Virtual DOM, Router, State Management",
      },

      // Component-based architecture
      {
        key: "Компоненты",
        value: "Повторно используемые блоки UI + логики (React, Vue)",
      },
      {
        key: "Smart / Dumb компоненты",
        value: "Умные (контейнеры) управляют логикой, глупые — отображением",
      },
      {
        key: "FSD (Feature-Sliced Design)",
        value: "Модульность по фичам/слоям: entities, features, pages, shared",
      },

      // SSR, SSG, CSR
      {
        key: "CSR (Client-side rendering)",
        value: "Рендеринг на клиенте, быстрый UX, но медленный первый рендер",
      },
      {
        key: "SSR (Server-side rendering)",
        value: "HTML генерируется на сервере (Next.js), лучше для SEO",
      },
      {
        key: "SSG (Static Site Generation)",
        value: "HTML создаётся на этапе сборки (Gatsby, Astro)",
      },

      // Modern архитектуры
      {
        key: "MPA (Multi-Page App)",
        value:
          "Каждая страница — отдельный HTML-файл, подходит для старых систем",
      },
      {
        key: "Hybrid",
        value: "Комбинация SSR + CSR, гибкость (Next.js, Nuxt)",
      },
      {
        key: "Micro Frontends",
        value:
          "Приложение делится на независимые модули/команды (iframe, Module Federation)",
      },

      // Архитектура состояния
      {
        key: "Redux / Zustand / MobX",
        value: "Управление состоянием (глобальное хранилище)",
      },
      {
        key: "RTK (Redux Toolkit)",
        value: "Стандартизированный Redux с уменьшением шаблонного кода",
      },
      {
        key: "Context API",
        value: "Передача данных через дерево компонентов (без prop drilling)",
      },

      // Организация кода
      {
        key: "FSD (Feature-Sliced Design)",
        value: "Структура: app, shared, features, entities, pages, widgets",
      },
      {
        key: "Atomic Design",
        value: "UI как атомы, молекулы, организмы, шаблоны и страницы",
      },
      {
        key: "Layered Architecture",
        value: "Разделение: UI, BLL, DAL, API, Utils и др.",
      },

      // Будущее и тренды
      {
        key: "Server-first",
        value: "React Server Components, Qwik — минимум JS на клиенте",
      },
      {
        key: "Edge Rendering",
        value: "Рендеринг ближе к пользователю (Vercel, Cloudflare Workers)",
      },
      {
        key: "DX-first",
        value:
          "Фокус на удобстве разработки: Vite, HMR, модульность, TS, автогенерация",
      },
    ],
  },
  {
    title: "Webpack — сборщик модулей",
    rows: [
      // Основы
      {
        key: "Что такое Webpack?",
        value: "Сборщик модулей: объединяет JS, CSS, изображения в бандлы",
      },
      {
        key: "entry",
        value: "Точка входа: откуда начать сборку (обычно src/index.js/ts)",
      },
      {
        key: "output",
        value: "Куда и как сохранить собранные файлы (обычно dist/)",
      },
      {
        key: "mode",
        value: "Режим: development | production (влияет на оптимизацию)",
      },
      {
        key: "loader",
        value: "Преобразует файлы в модули (например, Babel, CSS-loader)",
      },
      {
        key: "plugin",
        value: "Доп. функциональность: минификация, копирование, очистка",
      },
      { key: "devServer", value: "Локальный сервер с HMR для разработки" },

      // Основные лоадеры
      { key: "babel-loader", value: "Транспиляция ES6+/TS в совместимый JS" },
      { key: "style-loader + css-loader", value: "Загрузка CSS-файлов в JS" },
      {
        key: "sass-loader / postcss-loader",
        value: "Обработка SCSS, autoprefixer",
      },
      {
        key: "file-loader / asset modules",
        value: "Импорт изображений, шрифтов и т.д.",
      },
      {
        key: "ts-loader / babel + preset-typescript",
        value: "Поддержка TypeScript",
      },

      // Основные плагины
      {
        key: "HtmlWebpackPlugin",
        value: "Генерирует HTML с подключёнными бандлами",
      },
      {
        key: "CleanWebpackPlugin",
        value: "Очищает dist/ перед каждой сборкой",
      },
      { key: "MiniCssExtractPlugin", value: "Выносит CSS в отдельный файл" },
      {
        key: "DefinePlugin",
        value: "Заменяет переменные окружения (например, process.env)",
      },

      // Оптимизация
      {
        key: "Code splitting",
        value: "Разделение кода по chunk'ам (import())",
      },
      { key: "Tree shaking", value: "Удаление неиспользуемого кода (ESM)" },
      {
        key: "Caching",
        value: "hash в именах файлов: [name].[contenthash].js",
      },
      { key: "Source maps", value: "Помогают отлаживать минифицированный код" },

      // Альтернативы
      {
        key: "Vite",
        value: "Современная альтернатива: dev-сервер + rollup-based build",
      },
      { key: "Parcel", value: "Zero-config сборщик: работает «из коробки»" },
      { key: "Rollup", value: "Оптимален для библиотек, не для SPA" },

      // Где используется
      {
        key: "React, Vue, TS проекты",
        value: "Webpack — основа многих boilerplate'ов",
      },
      {
        key: "CRA (Create React App)",
        value: "Использует Webpack под капотом (скрыт через react-scripts)",
      },
      {
        key: "Webpack config",
        value: "Можно полностью настроить под себя (webpack.config.js)",
      },
    ],
  },
  {
    title: "Тестирование во Frontend",
    rows: [
      // Основы
      {
        key: "Зачем писать тесты?",
        value: "Проверка логики, защита от багов, уверенность при рефакторинге",
      },
      {
        key: "TDD",
        value: "Test Driven Development — сначала пишем тест, потом реализацию",
      },

      // Виды тестов
      {
        key: "Unit-тесты",
        value: "Тестируют отдельные функции/компоненты изолированно (Jest)",
      },
      {
        key: "Integration-тесты",
        value: "Проверяют взаимодействие нескольких модулей вместе",
      },
      {
        key: "E2E (end-to-end)",
        value: "Тестируют приложение как пользователь (Cypress, Playwright)",
      },
      {
        key: "Snapshot-тесты",
        value: "Сравнение UI с эталоном (React Testing Library + Jest)",
      },

      // Инструменты
      {
        key: "Jest",
        value: "Основной тест-раннер и ассертер (подходит для всего)",
      },
      {
        key: "React Testing Library",
        value: "Тесты UI по поведению, а не по структуре",
      },
      { key: "Vitest", value: "Альтернатива Jest, работает быстро с Vite" },
      {
        key: "Cypress / Playwright",
        value: "E2E-тесты в браузере, клики, переходы, формы",
      },

      // Что и как тестировать
      {
        key: "Логика (utils)",
        value: "Функции, редьюсеры, хелперы — всегда покрывать",
      },
      {
        key: "Формы",
        value: "Проверка полей, ошибок, кнопки submit, успешной отправки",
      },
      {
        key: "UI-компоненты",
        value: "Важно проверить реакцию на props, события, рендер текста",
      },
      {
        key: "Асинхронные действия",
        value: "Запросы, лоадеры, ошибки — через моки",
      },
      {
        key: "Redux / RTK Query",
        value: "Редьюсеры, эффекты, селекторы — можно изолированно",
      },

      // Сколько нужно тестов?
      {
        key: "Золотое правило",
        value: "Тестируй только то, что может сломаться",
      },
      { key: "Покрытие", value: "Стремиться к 70–90% покрытия, но не слепо" },
      {
        key: "Balance",
        value: "Юниты — быстро и дёшево, E2E — медленно, но ценно",
      },

      // Best practices
      {
        key: "Тест по поведению",
        value: "Проверяй, что видит и делает пользователь, а не реализацию",
      },
      { key: "Изоляция", value: "Тесты должны быть независимы друг от друга" },
      {
        key: "mock / spy",
        value: "Подмена зависимостей, проверка вызовов (jest.fn(), vi.fn())",
      },
      {
        key: "CI интеграция",
        value:
          "Запуск тестов автоматически при пушах и PR (GitHub Actions и др.)",
      },

      // Примерная структура
      { key: "__tests__ / *.test.tsx", value: "Папка или рядом с компонентом" },
      {
        key: "describe / it / expect",
        value: "describe → группа, it → кейс, expect → проверка",
      },

      // Что важно на собеседовании
      { key: "Умение писать юниты", value: "Функция → 2–3 кейса, как минимум" },
      {
        key: "UI-тесты с React Testing Library",
        value: "render, screen.getByText, fireEvent",
      },
      {
        key: "Понимание структуры",
        value: "Что, зачем и как тестировать — логика vs поведение",
      },
    ],
  },
];
