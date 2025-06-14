export const js_API_1 = {
  id: "js_API_1",
  title: "Что такое API и зачем он нужен",
  content: `
## Что такое API

API (Application Programming Interface — интерфейс программирования приложений) — это набор правил, с помощью которых одна программа может взаимодействовать с другой.

В веб-разработке API — это способ общения между браузером и сервером. Можно представить как официанта в ресторане:  
- Ты (браузер) делаешь заказ (запрос).
- Официант (API) передаёт его на кухню (сервер).
- Кухня готовит блюдо (обрабатывает запрос).
- Официант приносит готовое блюдо обратно (ответ сервера).

---

## Где используется API

- Получение товаров в интернет-магазине
- Отправка сообщений в чат
- Вход через Google и другие сервисы
- Приложения с погодой, новостями, курсами валют — всё это API

---

## Пример

Сайт с новостями может брать данные с другого сервера через API: отправляет HTTP-запрос и получает ответ в формате JSON.

---

## Зачем нужен API разработчику

- Позволяет получать и отправлять данные без доступа к базе напрямую
- Повышает безопасность (скрывает детали сервера)
- Повторное использование (разные приложения используют один API)
- Гибкость (можно менять реализацию на сервере, не меняя клиентов)

---

## Виды API

- **REST API** — самый распространённый: использует HTTP-запросы (GET, POST, PUT, DELETE)
- **GraphQL** — более гибкая альтернатива REST
- **WebSocket API** — для постоянного соединения (чаты, игры)
- **Браузерные API** — localStorage, Notification API и др.

В курсе делаем акцент на REST API, так как он самый популярный в веб-разработке.

---

## Что нужно знать перед работой с API

- Как работают HTTP-запросы
- Как пользоваться функцией fetch
- Как обрабатывать и отправлять данные
- Как обрабатывать ошибки

Этим займёмся в следующих темах этой главы.
  `.trim(),

  codeExampleJS: `
fetch("https://api.example.com/news")
  .then(response => response.json())
  .then(news => {
    console.log("Список новостей:", news);
  })
  .catch(error => {
    console.error("Ошибка загрузки новостей:", error);
  });
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
    "https://learn.javascript.ru/rest",
  ],
};
export const js_API_2 = {
  id: "js_API_2",
  title: "Структура HTTP-запроса: метод, URL, заголовки, тело",
  content: `
## Основные части HTTP-запроса

Когда отправляем запрос к API (например, через \`fetch()\`), он имеет стандартную структуру:

---

### 1. Метод (method)

Метод указывает, что мы хотим сделать:

| Метод    | Назначение                                       |
| -------- | ------------------------------------------------ |
| GET      | Получить данные (например, список новостей)      |
| POST     | Отправить новые данные (например, создать запись)|
| PUT      | Полностью заменить существующий ресурс           |
| PATCH    | Частично обновить данные                         |
| DELETE   | Удалить ресурс                                   |

Чаще всего используются GET и POST.

---

### 2. URL (адрес запроса)

URL — адрес, куда отправляется запрос.  
Включает домен, путь и параметры:

\`\`\`js
fetch("https://api.example.com/posts?limit=10&page=2")
\`\`\`

---

### 3. Заголовки (headers)

Заголовки — дополнительная информация для сервера:

- \`Content-Type\`: тип данных (обычно \`application/json\`)
- \`Authorization\`: токен для авторизации
- \`Accept\`: желаемый тип данных

Пример:

\`\`\`js
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer your_token"
}
\`\`\`

---

### 4. Тело запроса (body)

Передаётся только в POST, PUT, PATCH. Содержит данные для отправки (обычно JSON):

\`\`\`js
body: JSON.stringify({ name: "Иван", age: 30 })
\`\`\`

Если есть тело, обязательно укажите \`Content-Type: application/json\`.

---

### Пример полного запроса

\`\`\`js
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Алиса",
    email: "alice@example.com"
  })
});
\`\`\`

---

## Итог

HTTP-запрос — это:  
- Метод (что делаем)  
- URL (куда отправляем)  
- Заголовки (доп. информация)  
- Тело (что отправляем, если нужно)

Понимание структуры запроса — основа работы с API.
  `.trim(),

  codeExampleJS: `
fetch("https://api.example.com/products/42", {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
})
  .then(res => res.json())
  .then(data => {
    console.log("Товар:", data);
  });
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTTP/Methods",
    "https://learn.javascript.ru/fetch",
  ],
};
export const js_API_3 = {
  id: "js_API_3",
  title: "Метод fetch: базовое использование (GET-запрос)",
  content: `
## Что такое fetch

\`fetch()\` — встроенная функция для отправки HTTP-запросов и получения ответов от серверов.  
Работает асинхронно и возвращает промис.

**Синтаксис:**
\`\`\`js
fetch(url, options)
\`\`\`
- \`url\` — адрес запроса
- \`options\` — необязательные настройки (метод, заголовки и т.д.)

---

## Простой GET-запрос

Пример получения списка пользователей:
\`\`\`js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Массив пользователей
  })
  .catch(error => {
    console.log("Произошла ошибка:", error);
  });
\`\`\`

### Как это работает

- \`fetch()\` отправляет запрос и возвращает промис с объектом Response
- \`.json()\` — преобразует ответ в JavaScript-объект или массив (тоже промис)
- Данные передаются в следующий \`.then()\`
- \`.catch()\` — ловит ошибки (например, нет интернета или опечатка в URL)

---

## Формат ответа: JSON

Большинство API возвращают JSON:
\`\`\`json
[
  { "id": 1, "name": "Алиса" },
  { "id": 2, "name": "Боб" }
]
\`\`\`
Метод \`.json()\` парсит строку в массив/объект.

---

## Обработка ошибок

Обязательно используйте \`.catch()\`, чтобы не "падал" код при ошибке сети:
\`\`\`js
fetch("https://example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Ошибка:", error));
\`\`\`

> Важно: \`.catch()\` не срабатывает при ошибке сервера (404, 500). Об этом позже.

---

## Пример из практики

Получение курса валют:
\`\`\`js
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(res => res.json())
  .then(data => {
    console.log("Курс EUR:", data.rates.EUR);
  });
\`\`\`

---

## Когда использовать GET-запрос

- Для получения данных: пользователей, товаров, комментариев и т.д.
- Для загрузки данных при открытии страницы.
- Для поиска или фильтрации.

  `.trim(),

  codeExampleJS: `
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(post => {
    console.log("Заголовок поста:", post.title);
  });
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch",
    "https://learn.javascript.ru/fetch",
  ],
};
export const js_API_4 = {
  id: "js_API_4",
  title: "Обработка ответа: response.ok, response.status, response.json()",
  content: `
## Что возвращает fetch

\`fetch()\` возвращает не данные, а объект **Response** — в нём вся информация о результате запроса.

\`\`\`js
fetch("https://example.com/data")
  .then(response => {
    console.log(response); // объект Response
  });
\`\`\`

---

## Основные свойства и методы объекта Response

### response.ok

Логическое значение: \`true\` — если код ответа в диапазоне 200–299 (успех), иначе \`false\`.

\`\`\`js
fetch("https://example.com/data")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Ошибка на сервере");
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

### response.status

Числовой код ответа HTTP (например, 200, 404, 500).

\`\`\`js
fetch("https://example.com/data")
  .then(response => {
    console.log("Код ответа:", response.status);
  });
\`\`\`

**Типовые статусы:**

- 200 — OK
- 201 — Created
- 400 — Bad Request
- 401 — Unauthorized
- 404 — Not Found
- 500 — Server Error

---

### response.json()

Асинхронный метод, который преобразует JSON-строку из ответа сервера в объект или массив.

\`\`\`js
fetch("https://example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Полученные данные:", data);
  });
\`\`\`

> \`response.json()\` возвращает промис — не забывайте .then()

---

## Обработка ошибок: полный пример

\`\`\`js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Пост:", data);
  })
  .catch(error => {
    console.error("Произошла ошибка запроса:", error.message);
  });
\`\`\`

---

## Итог

- Проверяйте \`response.ok\` и \`response.status\` для надёжной обработки ошибок.
- \`response.json()\` вызывайте только после проверки успешности ответа.
- Добавляйте \`.catch()\` для обработки сетевых и других ошибок.
  `.trim(),

  codeExampleJS: `
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка: " + response.status);
    }
    return response.json();
  })
  .then(post => {
    console.log("Пост:", post.title);
  })
  .catch(err => {
    console.log("Ошибка:", err.message);
  });
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Response",
    "https://learn.javascript.ru/fetch-api",
  ],
};
export const js_API_5 = {
  id: "js_API_5",
  title: "POST-запросы: отправка данных с fetch",
  content: `
## Что такое POST-запрос

Метод **POST** используется для отправки данных на сервер:  
- создание ресурса,
- регистрация пользователя,
- отправка формы,
- сохранение настроек и др.

---

## Синтаксис POST-запроса через fetch

\`\`\`js
fetch("https://example.com/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Анна",
    age: 25
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка запроса: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Ответ сервера:", data);
  })
  .catch(error => {
    console.error("Произошла ошибка:", error.message);
  });
\`\`\`

---

## Разбор кода

1. \`method: "POST"\` — явно указываем тип запроса.
2. \`headers: {"Content-Type": "application/json"}\` — сообщаем серверу, что отправляем JSON.
3. \`body: JSON.stringify(...)\` — тело запроса. Данные превращаем в строку через \`JSON.stringify\`.

---

## Пример: отправка формы регистрации

\`\`\`js
const user = {
  email: "test@example.com",
  password: "123456"
};

fetch("https://myapi.com/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
  .then(response => response.json())
  .then(data => console.log("Регистрация прошла успешно:", data))
  .catch(error => console.error("Ошибка регистрации:", error));
\`\`\`

---

## Если нужно отправить не JSON

Для файлов и обычных форм используют \`FormData\`:

\`\`\`js
const formData = new FormData();
formData.append("file", myFile);

fetch("/upload", {
  method: "POST",
  body: formData
});
\`\`\`
*Заголовок Content-Type в этом случае ставить не нужно — браузер сделает это сам.*

---

## Какой бывает ответ сервера

- Подтверждение: \`{"status": "ok"}\`
- Новый объект: \`{"id": 123, "name": "Анна"}\`
- Сообщение об ошибке

Обрабатывайте ответ так же, как в GET-запросах: через \`response.ok\` и \`response.json()\`.

  `.trim(),

  codeExampleJS: `
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Новый пост",
    body: "Текст поста",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("Созданный пост:", data));
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch",
    "https://learn.javascript.ru/fetch",
  ],
};
export const js_API_6 = {
  id: "js_API_6",
  title: "Установка заголовков: Content-Type, Authorization и другие",
  content: `
## Что такое заголовки (headers)

**Заголовки HTTP** — это дополнительные параметры, которые передаются с запросом.  
Они помогают серверу понять, как обрабатывать данные, кто отправил запрос, нужна ли авторизация и т.д.

---

## Как передавать заголовки

В методе \`fetch\` заголовки задаются в объекте \`headers\`:

\`\`\`js
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer my_token",
    "Accept": "application/json"
  },
  body: JSON.stringify({ name: "Анна" })
});
\`\`\`

---

## Часто используемые заголовки

1. **Content-Type**  
   Формат отправляемых данных:
   - \`application/json\` — JSON (чаще всего)
   - \`application/x-www-form-urlencoded\` — как в HTML-формах
   - \`multipart/form-data\` — для файлов

   Пример:
   \`\`\`js
   headers: { "Content-Type": "application/json" }
   \`\`\`

2. **Authorization**  
   Передаёт токен доступа для защищённых API.

   Пример:
   \`\`\`js
   headers: { "Authorization": "Bearer my_token" }
   \`\`\`
   *Токен обычно выдает сервер после логина. Его сохраняют в localStorage/sessionStorage и добавляют ко всем запросам.*

3. **Accept**  
   Указывает, в каком формате ожидаем ответ:
   \`\`\`js
   headers: { "Accept": "application/json" }
   \`\`\`

---

## Пример с несколькими заголовками

\`\`\`js
fetch("https://example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer my_token"
  },
  body: JSON.stringify({ name: "Анна" })
})
  .then(res => res.json())
  .then(data => console.log(data));
\`\`\`

---

## Где брать токен для Authorization?

- Получают при регистрации или входе (login)
- Сохраняют в localStorage, sessionStorage или переменной
- Передают с каждым защищённым запросом

---

## Итоги

- \`Content-Type\` — указывает формат отправляемых данных
- \`Authorization\` — используется для авторизации пользователя
- \`Accept\` — сообщает, какой формат ответа ожидает клиент
- Заголовки передаются в объекте \`headers\`, можно комбинировать любые

  `.trim(),

  codeExampleJS: `
const token = localStorage.getItem("token");

fetch("https://api.example.com/profile", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + token,
    "Accept": "application/json"
  }
})
  .then(res => res.json())
  .then(data => console.log(data));
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTTP/Headers",
    "https://learn.javascript.ru/fetch",
  ],
};
export const js_API_7 = {
  id: "js_API_7",
  title: "Работа с async/await при fetch",
  content: `
## Почему async/await с fetch?

\`fetch()\` возвращает промис.  
Можно обрабатывать его через \`.then()\`, но современный и более читаемый способ — \`async/await\`.

---

## Пример: Получение данных

\`\`\`js
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Ошибка запроса: " + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}

getData();
\`\`\`

---

## Что происходит?

- \`async\` — делает функцию асинхронной, внутри неё можно использовать \`await\`
- \`await fetch(...)\` — ждём завершения запроса
- \`await response.json()\` — ждём преобразования ответа
- \`try...catch\` — ловим ошибки (например, если сервер не отвечает или не удалось распарсить ответ)

---

## async/await vs .then()

**С .then():**
\`\`\`js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

**С async/await:**
\`\`\`js
async function load() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
\`\`\`

**Преимущество:**  
Код становится линейным и проще для чтения, особенно если много последовательных запросов или сложная логика.

---

## Пример: POST-запрос с async/await

\`\`\`js
async function createUser(user) {
  try {
    const response = await fetch("https://example.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const result = await response.json();
    console.log("Пользователь создан:", result);
  } catch (error) {
    console.error("Ошибка создания пользователя:", error.message);
  }
}

createUser({ name: "Анна", age: 25 });
\`\`\`

---

## Итог

- \`async/await\` упрощает работу с асинхронным кодом, делает его "пошаговым"
- Всегда используйте \`try...catch\` для обработки ошибок при работе с сетевыми запросами
- Такой стиль особенно удобен для последовательных операций и сложных сценариев

  `.trim(),

  codeExampleJS: `
async function getUserList() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Ошибка загрузки пользователей:", error.message);
  }
}

getUserList();
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function",
    "https://learn.javascript.ru/async-await",
  ],
};
export const js_API_8 = {
  id: "js_API_8",
  title: "Обработка ошибок при запросах",
  content: `
## Какие бывают ошибки при fetch

- **Сетевая ошибка** — сервер не отвечает, адрес неправильный, нет интернета.
- **Статус 4xx/5xx** — сервер вернул ошибку (fetch НЕ вызывает catch!).
- **Ошибка при чтении данных** — например, response.json() не смог распарсить ответ.

---

## Как правильно обрабатывать ошибки

\`\`\`js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error(\`Ошибка сервера: \${response.status}\`);
    }

    const data = await response.json();
    console.log("Данные:", data);

  } catch (error) {
    console.error("Ошибка запроса:", error.message);
  }
}
\`\`\`

- \`!response.ok\` — проверяет статус (например, 404, 500).
- \`throw new Error(...)\` — передаёт ошибку в catch.
- \`catch\` — ловит как сетевые ошибки, так и ошибки с throw.

---

## Почему fetch не кидает ошибку при 404?

Потому что для fetch "успех" — это наличие ответа от сервера.  
Ошибка статуса (404, 500) — нужно обрабатывать явно, через \`response.ok\`.

---

## Пример: 404 от сервера

\`\`\`js
const res = await fetch("https://site.com/нет-страницы");
console.log(res.ok); // false
console.log(res.status); // 404
\`\`\`

---

## Пример: сетевая ошибка

\`\`\`js
try {
  const res = await fetch("https://no-such-server.com");
  const data = await res.json();
} catch (err) {
  console.error("Ошибка сети:", err.message);
}
\`\`\`

---

## Аналог с .then():

\`\`\`js
fetch("https://api.com/data")
  .then(res => {
    if (!res.ok) throw new Error("Ошибка ответа");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Ошибка:", err.message));
\`\`\`

---

## Советы

- ВСЕГДА проверяйте \`response.ok\`!
- Используйте \`try...catch\` с async/await.
- Не полагайтесь только на \`catch\` — он не ловит ошибки статуса!

  `.trim(),

  codeExampleJS: `
async function safeFetch() {
  try {
    const response = await fetch("https://api.site.com/resource");
    if (!response.ok) throw new Error("Ошибка: " + response.status);
    const data = await response.json();
    console.log("Данные получены:", data);
  } catch (e) {
    console.error("Ошибка запроса:", e.message);
  }
}
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch#Обработка_ошибок",
    "https://learn.javascript.ru/fetch",
  ],
};
export const js_API_9 = {
  id: "js_API_9",
  title: "Что такое CORS и почему может быть ошибка",
  content: `
## Что такое CORS

**CORS** (Cross-Origin Resource Sharing) — механизм безопасности в браузерах, ограничивающий доступ к ресурсам между разными источниками (домен, порт, протокол).

---

## Зачем нужен CORS

- Если ваш сайт работает на одном домене, а отправляет запросы на другой (другой origin), браузер по умолчанию блокирует такие запросы.
- Это сделано для защиты пользователя от вредоносных сайтов.

---

## Пример проблемы

Ваш сайт: \`http://my-frontend.com\`  
Вы делаете запрос на: \`https://some-backend.com/api/data\`  
Браузер блокирует ответ, если сервер не разрешил ваш origin.

**Ошибка в консоли:**
\`\`\`
Access to fetch at 'https://some-backend.com/api/data'
from origin 'http://my-frontend.com' has been blocked by CORS policy.
\`\`\`

---

## Кто должен разрешить?

- Сервер должен явно разрешить доступ, отправляя заголовок:
  - \`Access-Control-Allow-Origin: *\`
  - или: \`Access-Control-Allow-Origin: http://my-frontend.com\`

---

## Что вызывает ошибку CORS

- Сервер не возвращает нужные заголовки
- Разные протоколы (\`http\` и \`https\`)
- Разные порты (\`localhost:3000\` и \`localhost:4000\`)
- Используются нестандартные методы или заголовки (требуется предварительный запрос OPTIONS)

---

## Важно

- CORS — **не ошибка в вашем коде**, а ограничение браузера.
- Проблему должен решать сервер: настраивать нужные CORS-заголовки.

---

## Как решают разработчики

- **На разработке:** используют прокси (proxy в vite/webpack).
- **В продакшене:** сервер должен отдавать нужные CORS-заголовки.

---

## Итог

CORS — это механизм безопасности, а не ошибка JavaScript.  
Настройка CORS — задача серверной части.

  `.trim(),

  codeExampleJS: `
/*
  Пример заголовка на сервере:
  Access-Control-Allow-Origin: http://my-frontend.com
*/
  `.trim(),

  resources: [
    "https://developer.mozilla.org/ru/docs/Web/HTTP/CORS",
    "https://learn.javascript.ru/fetch-crossorigin",
  ],
};
