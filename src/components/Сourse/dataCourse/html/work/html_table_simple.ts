export const html_table_simple_1 = {
  id: "html_table_simple_1",
  module: "HTML",
  title: "Создание базовой таблицы",
  topic: "HTML таблицы",
  topicId: "html_tables",
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

export const html_table_simple_2 = {
  id: "html_table_simple_2",
  module: "HTML",
  title: "Структурирование таблицы с помощью thead, tbody и tfoot",
  topic: "HTML таблицы",
  topicId: "html_tables",
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
export const html_table_simple_3 = {
  id: "html_table_simple_3",
  module: "HTML",
  title: "Объединение ячеек с помощью colspan и rowspan",
  topic: "HTML таблицы",
  topicId: "html_tables",
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
  difficulty: 4,
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
