export const html_table_simple_1 = {
  id: "html_table_simple_1",
  module: "HTML",
  title: "Создание базовой таблицы",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_1",
  description:
    "Создайте HTML-таблицу с заголовками и строками, используя теги `<table>`, `<tr>`, `<th>` и `<td>`.",
  steps: [
    "Создайте новый HTML-файл, например `table.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Внутри `<body>` создайте таблицу с тегом `<table>`.",
    "- В первой строке используйте `<th>` для заголовков: 'Имя', 'Возраст', 'Город'.",
    "- Добавьте минимум 2 строки с данными студентов с помощью `<td>`.",
    "Проверьте, как таблица отображается в браузере.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Таблица студентов</title>
  </head>
  <body>
    <h1>Список студентов</h1>

    <table border="1">
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Город</th>
      </tr>
      <tr>
        <td>Анна</td>
        <td>21</td>
        <td>Москва</td>
      </tr>
      <tr>
        <td>Иван</td>
        <td>23</td>
        <td>Санкт-Петербург</td>
      </tr>
    </table>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Таблица студентов</title>
  </head>
  <body>
    <h1>Список студентов</h1>

    <table border="1">
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Город</th>
      </tr>
      <tr>
        <td>Анна</td>
        <td>21</td>
        <td>Москва</td>
      </tr>
      <tr>
        <td>Иван</td>
        <td>23</td>
        <td>Санкт-Петербург</td>
      </tr>
    </table>
  </body>
</html>`,
};
export const html_table_simple_4 = {
  id: "html_table_simple_4",
  module: "HTML",
  title: "Таблица с заголовком и атрибутом scope",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_1",
  description:
    "Создайте HTML-таблицу со **заголовком** (`<caption>`) и используйте атрибут `scope` для заголовочных ячеек `<th>`, чтобы улучшить доступность.",
  steps: [
    "Создайте файл `table-caption.html` с базовой структурой HTML.",
    "Внутри `<body>` добавьте `<table>` и сразу после открывающего тега — `<caption>` с текстом «Таблица студентов».",
    "Добавьте первую строку `<tr>` внутри `<thead>`, в ней `<th scope=\"col\">` для столбцов: 'Имя', 'Возраст', 'Город'.",
    'Добавьте несколько строк внутри `<tbody>` с данными `<td>`. В первой ячейке каждой строки используйте `<th scope="row">` вместо `<td>`, например для имени.',
    "Проверьте в браузере, что заголовок отображается над таблицей, а `scope` установлен корректно.",
  ],
  difficulty: 2,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/table#caption",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/th#attr-scope",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Таблица студентов</title>
</head>
<body>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>Таблица студентов</caption>
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Возраст</th>
        <th scope="col">Город</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Анна</th>
        <td>21</td>
        <td>Москва</td>
      </tr>
      <tr>
        <th scope="row">Иван</th>
        <td>23</td>
        <td>Санкт-Петербург</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Таблица студентов</title>
</head>
<body>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>Таблица студентов</caption>
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Возраст</th>
        <th scope="col">Город</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Анна</th>
        <td>21</td>
        <td>Москва</td>
      </tr>
      <tr>
        <th scope="row">Иван</th>
        <td>23</td>
        <td>Санкт-Петербург</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
};

export const html_table_simple_5 = {
  id: "html_table_simple_5",
  module: "HTML",
  title: "Семантическая разметка таблицы: thead, tbody, tfoot",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_1",
  description:
    "Создайте HTML-таблицу с семантическим разделением на `<thead>`, `<tbody>` и `<tfoot>`, а также с `<caption>`, чтобы продемонстрировать правильную структуру.",
  steps: [
    "Создайте файл `table-semantic.html` с базовой структурой HTML.",
    "Внутри `<body>` добавьте `<table>` и вначале `<caption>` с текстом «Ассортимент товаров».",
    "Добавьте `<thead>` с заголовочной строкой `<tr>` и ячейками `<th>`: 'Товар', 'Цена', 'Количество'.",
    "Добавьте `<tbody>` с как минимум 3 строками `<tr>` данных `<td>`.",
    'После тела таблицы добавьте `<tfoot>` с итоговой строкой: объедините первую ячейку `<td colspan="2">Итого</td>` и в последней ячейке покажите сумму.',
    "Убедитесь, что структура корректно отображается и логически разделена.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/thead",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tbody",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tfoot",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/caption",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Ассортимент товаров</title>
</head>
<body>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>Ассортимент товаров</caption>
    <thead>
      <tr>
        <th>Товар</th>
        <th>Цена</th>
        <th>Количество</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Яблоки</td>
        <td>100₽</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Бананы</td>
        <td>120₽</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Вишня</td>
        <td>150₽</td>
        <td>8</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Итого</td>
        <td>23</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Ассортимент товаров</title>
</head>
<body>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>Ассортимент товаров</caption>
    <thead>
      <tr>
        <th>Товар</th>
        <th>Цена</th>
        <th>Количество</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Яблоки</td>
        <td>100₽</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Бананы</td>
        <td>120₽</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Вишня</td>
        <td>150₽</td>
        <td>8</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Итого</td>
        <td>23</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
};

export const html_table_simple_2 = {
  id: "html_table_simple_2",
  module: "HTML",
  title: "Структурирование таблицы с помощью thead, tbody и tfoot",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_2",
  description:
    "Создайте таблицу, в которой используются секции `<thead>`, `<tbody>` и `<tfoot>` для логического разделения заголовков, содержимого и итогов.",
  steps: [
    "Создайте новый HTML-файл, например `table-structure.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Создайте таблицу с тегом `<table>` и вложенными тегами `<thead>`, `<tbody>` и `<tfoot>`.",
    "- Внутри `<thead>` добавьте заголовки: 'Продукт', 'Цена', 'Количество'.",
    "- Внутри `<tbody>` добавьте 2–3 строки с данными товаров.",
    "- Внутри `<tfoot>` добавьте строку с итогом (например, 'Итого: 3 товара').",
    "Проверьте, что структура таблицы корректно отображается в браузере.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tfoot",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Таблица с секциями</title>
  </head>
  <body>
    <h1>Товары на складе</h1>

    <table border="1">
      <thead>
        <tr>
          <th>Продукт</th>
          <th>Цена</th>
          <th>Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ноутбук</td>
          <td>60000</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Мышь</td>
          <td>1500</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Клавиатура</td>
          <td>2500</td>
          <td>7</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td >Итого: 3 товара</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Таблица с секциями</title>
  </head>
  <body>
    <h1>Товары на складе</h1>

    <table border="1">
      <thead>
        <tr>
          <th>Продукт</th>
          <th>Цена</th>
          <th>Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ноутбук</td>
          <td>60000</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Мышь</td>
          <td>1500</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Клавиатура</td>
          <td>2500</td>
          <td>7</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Итого: 3 товара</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>`,
};

export const html_table_simple_6 = {
  id: "html_table_simple_6",
  module: "HTML",
  title: "Таблица продаж с многоуровневыми заголовками",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_2",
  description:
    "Создайте таблицу с групповыми заголовками: сначала объедините ячейки для столбца 'Год', затем разбейте кварталы по отдельным столбцам, и в конце добавьте итоговую строку.",
  steps: [
    "Создайте файл `table-sales.html` с базовой структурой HTML.",
    "Внутри `<body>` добавьте `<table>` и `<caption>` с подписью «Сводная таблица продаж».",
    "Создайте `<thead>` с двумя строками:",
    'Первая строка: `<th rowspan="2">Год</th>` и `<th colspan="4">Квартал</th>`.',
    "Вторая строка: `<th>Q1</th>`, `<th>Q2</th>`, `<th>Q3</th>`, `<th>Q4</th>`.",
    'Добавьте `<tbody>` с данными продаж за 3 года, используя `<th scope="row">` для ячейки года.',
    "В конце таблицы добавьте `<tfoot>` с итогами по каждому кварталу (сумма значений).",
    "Проверьте в браузере правильность объединения ячеек и отображение итогов.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/thead",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tfoot",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/th#attr-rowspan",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/th#attr-colspan",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сводная таблица продаж</title>
</head>
<body>
  <h1>Сводная таблица продаж</h1>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>Продажи по кварталам</caption>
    <thead>
      <tr>
        <th rowspan="2">Год</th>
        <th colspan="4">Квартал</th>
      </tr>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
        <th>Q4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">2022</th>
        <td>150</td>
        <td>200</td>
        <td>180</td>
        <td>220</td>
      </tr>
      <tr>
        <th scope="row">2023</th>
        <td>170</td>
        <td>210</td>
        <td>190</td>
        <td>230</td>
      </tr>
      <tr>
        <th scope="row">2024</th>
        <td>180</td>
        <td>220</td>
        <td>200</td>
        <td>240</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Итого</td>
        <td>500</td>
        <td>630</td>
        <td>570</td>
        <td>690</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сводная таблица продаж</title>
</head>
<body>
  <h1>Сводная таблица продаж</h1>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>Продажи по кварталам</caption>
    <thead>
      <tr>
        <th rowspan="2">Год</th>
        <th colspan="4">Квартал</th>
      </tr>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
        <th>Q4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">2022</th>
        <td>150</td>
        <td>200</td>
        <td>180</td>
        <td>220</td>
      </tr>
      <tr>
        <th scope="row">2023</th>
        <td>170</td>
        <td>210</td>
        <td>190</td>
        <td>230</td>
      </tr>
      <tr>
        <th scope="row">2024</th>
        <td>180</td>
        <td>220</td>
        <td>200</td>
        <td>240</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Итого</td>
        <td>500</td>
        <td>630</td>
        <td>570</td>
        <td>690</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
};

export const html_table_simple_7 = {
  id: "html_table_simple_7",
  module: "HTML",
  title: "Расписание конференции с объединением ячеек",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_2",
  description:
    "Сверстайте расписание конференции с двухуровневыми заголовками, объединением ячеек для кофе-брейков и итоговой строкой в футере.",
  steps: [
    "Создайте файл `table-schedule.html` с базовой HTML-структурой.",
    "Добавьте `<table>`, `<caption>` — название 'DevSummit 2025'.",
    "В `<thead>` сделайте два ряда:",
    '`<th rowspan="2">Время</th>`, `<th colspan="2">День 1</th>`, `<th colspan="2">День 2</th>`.  ',
    "`<th>Трек A</th>`, `<th>Трек B</th>`, `<th>Трек A</th>`, `<th>Трек B</th>`.  ",
    "В `<tbody>` добавьте несколько временных слотов:",
    "10:00–11:00: четыре ячейки с докладами.",
    '11:15–12:15: объедините по два столбца для кофе-брейка (`colspan="2"`).',
    "12:30–13:30: четыре ячейки с разными докладами.",
    "В `<tfoot>` добавьте строку, объединяющую все 5 ячеек (`colspan=\"5\"`) с текстом 'Спасибо за участие!'.",
    "Проверьте в браузере корректность объединений и отображение расписания.",
  ],
  difficulty: 4,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/thead",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/colspan",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/rowspan",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Расписание DevSummit 2025</title>
</head>
<body>
  <h1>Расписание DevSummit 2025</h1>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>DevSummit 2025</caption>
    <thead>
      <tr>
        <th rowspan="2">Время</th>
        <th colspan="2">День 1</th>
        <th colspan="2">День 2</th>
      </tr>
      <tr>
        <th>Трек A</th>
        <th>Трек B</th>
        <th>Трек A</th>
        <th>Трек B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">10:00–11:00</th>
        <td>Вступление</td>
        <td>CSS Прорыв</td>
        <td>Аутентификация</td>
        <td>Производительность</td>
      </tr>
      <tr>
        <th scope="row">11:15–12:15</th>
        <td colspan="2">Кофе-брейк</td>
        <td colspan="2">Кофе-брейк</td>
      </tr>
      <tr>
        <th scope="row">12:30–13:30</th>
        <td>JavaScript Next</td>
        <td>Vue 3</td>
        <td>React Hooks</td>
        <td>Angular Ivy</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">Спасибо за участие!</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Расписание DevSummit 2025</title>
</head>
<body>
  <h1>Расписание DevSummit 2025</h1>
  <table border="1" cellpadding="6" cellspacing="0">
    <caption>DevSummit 2025</caption>
    <thead>
      <tr>
        <th rowspan="2">Время</th>
        <th colspan="2">День 1</th>
        <th colspan="2">День 2</th>
      </tr>
      <tr>
        <th>Трек A</th>
        <th>Трек B</th>
        <th>Трек A</th>
        <th>Трек B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">10:00–11:00</th>
        <td>Вступление</td>
        <td>CSS Прорыв</td>
        <td>Аутентификация</td>
        <td>Производительность</td>
      </tr>
      <tr>
        <th scope="row">11:15–12:15</th>
        <td colspan="2">Кофе-брейк</td>
        <td colspan="2">Кофе-брейк</td>
      </tr>
      <tr>
        <th scope="row">12:30–13:30</th>
        <td>JavaScript Next</td>
        <td>Vue 3</td>
        <td>React Hooks</td>
        <td>Angular Ivy</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">Спасибо за участие!</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
};

export const html_table_simple_3 = {
  id: "html_table_simple_3",
  module: "HTML",
  title: "Объединение ячеек с помощью colspan и rowspan",
  topic: "HTML таблицы",
  topicId: "html_tables",
  sectionId: "html_table_3",
  description:
    "Создайте таблицу, в которой используются атрибуты `colspan` и `rowspan` для объединения ячеек по горизонтали и вертикали.",
  steps: [
    "Создайте новый HTML-файл, например `table-merge.html`.",
    "Добавьте базовую структуру HTML-документа.",
    "Создайте таблицу с несколькими строками и столбцами.",
    "- В одной из строк объедините две ячейки в одну по горизонтали с помощью `colspan`.",
    "- В другой строке объедините две ячейки по вертикали с помощью `rowspan`.",
    "Убедитесь, что структура таблицы отображается корректно.",
  ],
  difficulty: 3,
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/td#attr-colspan",
    "https://developer.mozilla.org/ru/docs/Web/HTML/Element/td#attr-rowspan",
  ],
  solution: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Объединение ячеек</title>
  </head>
  <body>
    <h1>Пример объединения ячеек</h1>

    <table border="1">
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Город</th>
      </tr>
      <tr>
        <td rowspan="2">Анна</td>
        <td>21</td>
        <td>Москва</td>
      </tr>
      <tr>
        <td>22</td>
        <td>Санкт-Петербург</td>
      </tr>
      <tr>
        <td colspan="3">Итого: 2 записи</td>
      </tr>
    </table>
  </body>
</html>`,
  show: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Объединение ячеек</title>
  </head>
  <body>
    <h1>Пример объединения ячеек</h1>

    <table border="1">
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Город</th>
      </tr>
      <tr>
        <td rowspan="2">Анна</td>
        <td>21</td>
        <td>Москва</td>
      </tr>
      <tr>
        <td>22</td>
        <td>Санкт-Петербург</td>
      </tr>
      <tr>
        <td colspan="3">Итого: 2 записи</td>
      </tr>
    </table>
  </body>
</html>`,
};
