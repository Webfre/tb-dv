export const js_basics_task_1 = {
  id: "js_basics_task_1",
  module: "JavaScript",
  title: "Проверка возраста и доступ с преобразованиями",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу, которая запрашивает возраст пользователя с помощью `prompt`, проверяет его с помощью операторов, преобразует строку в число, выводит сообщение через `alert` и подтверждает доступ через `confirm`.",
  steps: [
    "Создайте HTML-файл `index.html` с подключением `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующую логику:",
    "С помощью `prompt` запросите возраст пользователя и сохраните в переменной `age`.",
    "Преобразуйте введённую строку в число (используйте `Number()` или унарный `+`).",
    "Используйте логические и сравнительные операторы, чтобы проверить:",
    "   - если возраст не введён или это `NaN`, выведите `alert('Возраст не указан')`;",
    "   - если возраст меньше 18, выведите `alert('Доступ запрещён')`;",
    "   - если возраст от 18 до 60, покажите `confirm('Вы хотите войти?')`. Если пользователь подтвердит — покажите `alert('Доступ разрешён')`, иначе `alert('Вход отменён')`;",
    "   - если возраст больше 60 — выведите `alert('Добро пожаловать, уважаемый пользователь')`.",
    "Проверьте, как работает логика при разных вводах: числах, пустой строке, тексте.",
  ],
  difficulty: 4,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Проверка возраста</title>
</head>
<body>
  <h1>Вход на сайт</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

let ageInput = prompt("Введите ваш возраст:");
let age = Number(ageInput); // явное преобразование

if (!ageInput || isNaN(age)) {
  alert("Возраст не указан");
} else if (age < 18) {
  alert("Доступ запрещён");
} else if (age >= 18 && age <= 60) {
  let confirmed = confirm("Вы хотите войти?");
  if (confirmed) {
    alert("Доступ разрешён");
  } else {
    alert("Вход отменён");
  }
} else {
  alert("Добро пожаловать, уважаемый пользователь");
}
`,
  resources: [
    "https://learn.javascript.ru/ifelse",
    "https://learn.javascript.ru/type-conversions",
    "https://learn.javascript.ru/alert-prompt-confirm",
  ],
};

export const js_basics_task_2 = {
  id: "js_basics_task_2",
  module: "JavaScript",
  title: "Определение чётных и нечётных чисел",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу, которая запрашивает у пользователя диапазон чисел и выводит в консоль все чётные и нечётные числа из этого диапазона. Используйте преобразование типов, арифметические операторы и условные конструкции.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующую логику:",
    "С помощью `prompt` запросите у пользователя два числа: начало и конец диапазона.",
    "Преобразуйте введённые строки в числа.",
    "Проверьте, что оба значения — числа. Если хотя бы одно — `NaN`, покажите `alert('Некорректный ввод')` и завершите выполнение.",
    "Используйте цикл `for` для перебора чисел от начального до конечного.",
    "Для каждого числа проверьте остаток от деления на 2 с помощью оператора `%`:",
    "   - Если число делится на 2 без остатка — выведите в консоль: `Чётное: <число>`;",
    "   - Иначе — `Нечётное: <число>`.",
    "Проверьте работу скрипта с корректными и некорректными вводами.",
  ],
  difficulty: 5,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Чётные и нечётные числа</title>
</head>
<body>
  <h1>Проверка чисел</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

let start = Number(prompt("Введите начальное число диапазона:"));
let end = Number(prompt("Введите конечное число диапазона:"));

if (isNaN(start) || isNaN(end)) {
  alert("Некорректный ввод");
} else {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log("Чётное:", i);
    } else {
      console.log("Нечётное:", i);
    }
  }
}
`,
  resources: [
    "https://learn.javascript.ru/while-for",
    "https://learn.javascript.ru/type-conversions",
  ],
};

export const js_basics_task_3 = {
  id: "js_basics_task_3",
  module: "JavaScript",
  title: "Конвертер валют: доллар → рубль",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте простой конвертер, который запрашивает курс доллара и сумму в долларах, после чего рассчитывает и выводит сумму в рублях. Используйте преобразование типов, арифметику и вывод сообщений пользователю.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "С помощью `prompt` запросите у пользователя курс доллара (например: 92.5).",
    "Снова с помощью `prompt` запросите сумму в долларах (например: 100).",
    "Преобразуйте оба значения в числа с помощью `Number()` или унарного `+`.",
    "Проверьте, что оба значения — это корректные числа (не `NaN`). Если нет — покажите `alert('Ошибка ввода')` и завершите выполнение.",
    "Вычислите сумму в рублях: курс × сумма.",
    "Выведите результат через `alert`, округлив его до 2 знаков с помощью `toFixed(2)`.",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Конвертер валют</title>
</head>
<body>
  <h1>Доллары в рубли</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

let rate = Number(prompt("Введите курс доллара:"));     // например: 92.5
let dollars = Number(prompt("Введите сумму в долларах:")); // например: 100

if (isNaN(rate) || isNaN(dollars)) {
  alert("Ошибка ввода");
} else {
  let rubles = rate * dollars;
  alert("Сумма в рублях: " + rubles.toFixed(2));
}
`,
  resources: [
    "https://learn.javascript.ru/type-conversions",
    "https://learn.javascript.ru/alert-prompt-confirm",
  ],
};

export const js_basics_task_4 = {
  id: "js_basics_task_4",
  module: "JavaScript",
  title: "Определение возрастной категории",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу, которая запрашивает возраст пользователя и определяет, является ли он молодым (до 30 лет) или уже старым (30 и больше). Используйте условные операторы и преобразование типов.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "С помощью `prompt` запросите у пользователя его возраст (например: 25).",
    "Преобразуйте введенное значение в число с помощью `Number()` или унарного `+`.",
    "Проверьте, что значение — это корректное число (не `NaN`). Если нет — покажите `alert('Ошибка ввода')` и завершите выполнение.",
    "Проверьте, что возраст не отрицательный. Если отрицательный — покажите `alert('Возраст не может быть отрицательным')`.",
    "Используя тернарный оператор или if/else, определите возрастную категорию:",
    " - Если возраст меньше 30 — 'Вы еще молоды!'",
    " - Если 30 и больше — 'Вы уже стары!'",
    "Выведите результат через `alert`.",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Определение возраста</title>
</head>
<body>
  <h1>Молодой или старый?</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

let age = +prompt("Введите ваш возраст:");

if (isNaN(age)) {
  alert("Ошибка ввода");
} else if (age < 0) {
  alert("Возраст не может быть отрицательным");
} else {
  let message = age < 30 ? "Вы еще молоды!" : "Вы уже стары!";
  alert(message);
  
  // Альтернативный вариант с if/else:
  /*
  if (age < 30) {
    alert("Вы еще молоды!");
  } else {
    alert("Вы уже стары!");
  }
  */
}
`,
  resources: [
    "https://learn.javascript.ru/ifelse",
    "https://learn.javascript.ru/type-conversions",
    "https://learn.javascript.ru/alert-prompt-confirm",
  ],
};

export const js_basics_task_5 = {
  id: "js_basics_task_5",
  module: "JavaScript",
  title: "Примитивный калькулятор",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте простой калькулятор, который запрашивает два числа и операцию (+, -, *, /), затем выводит результат. Обработайте возможные ошибки ввода.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "С помощью `prompt` запросите у пользователя первое число.",
    "Снова с помощью `prompt` запросите второе число.",
    "Еще одним `prompt` запросите операцию (+, -, *, /).",
    "Преобразуйте оба значения в числа с помощью `Number()` или унарного `+`.",
    "Проверьте, что оба значения — это корректные числа (не `NaN`). Если нет — покажите `alert('Ошибка ввода чисел')`.",
    "Проверьте, что операция является одной из допустимых (+, -, *, /). Если нет — покажите `alert('Неподдерживаемая операция')`.",
    "Для операции деления (/), проверьте, что второе число не ноль (деление на ноль невозможно).",
    "Вычислите результат в зависимости от операции:",
    " - Для '+' — сложение",
    " - Для '-' — вычитание",
    " - Для '*' — умножение",
    " - Для '/' — деление",
    "Выведите результат через `alert` в формате: 'Результат: [число1] [операция] [число2] = [результат]'.",
    "Округлите результат до 2 знаков после запятой с помощью `toFixed(2)`.",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Калькулятор</title>
</head>
<body>
  <h1>Простой калькулятор</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
let operation = prompt("Введите операцию (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
  alert("Ошибка ввода чисел");
} else if (!["+", "-", "*", "/"].includes(operation)) {
  alert("Неподдерживаемая операция");
} else if (operation === "/" && num2 === 0) {
  alert("Деление на ноль невозможно");
} else {
  let result;
  
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  
  alert(\`Результат: \${num1} \${operation} \${num2} = \${result.toFixed(2)}\`);
  
  // Альтернативный вариант с if/else:
  /*
  if (operation === "+") result = num1 + num2;
  else if (operation === "-") result = num1 - num2;
  else if (operation === "*") result = num1 * num2;
  else if (operation === "/") result = num1 / num2;
  */
}
`,
  resources: [
    "https://learn.javascript.ru/operators",
    "https://learn.javascript.ru/switch",
    "https://learn.javascript.ru/alert-prompt-confirm",
  ],
};

export const js_basics_task_6 = {
  id: "js_basics_task_6",
  module: "JavaScript",
  title: "Конвертер температуры: Цельсий → Фаренгейт",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу для перевода температуры из градусов Цельсия в градусы Фаренгейта. Формула: °F = (°C × 9/5) + 32. Обработайте возможные ошибки ввода.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "С помощью `prompt` запросите у пользователя температуру в градусах Цельсия.",
    "Преобразуйте введенное значение в число с помощью `Number()` или унарного `+`.",
    "Проверьте, что значение — это корректное число (не `NaN`). Если нет — покажите `alert('Ошибка ввода')`.",
    "Используя формулу °F = (°C × 9/5) + 32, вычислите температуру в Фаренгейтах.",
    "Выведите результат через `alert` в формате: '[°C] градусов Цельсия = [°F] градусов Фаренгейта'.",
    "Округлите результат до 1 знака после запятой с помощью `toFixed(1)`.",
    "Добавьте комментарии к формуле для ясности.",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Конвертер температуры</title>
</head>
<body>
  <h1>Цельсий → Фаренгейт</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

// Запрашиваем температуру в Цельсиях
let celsius = +prompt("Введите температуру в градусах Цельсия:");

// Проверяем корректность ввода
if (isNaN(celsius)) {
  alert("Ошибка ввода: введите число");
} else {
  // Конвертируем в Фаренгейты по формуле
  let fahrenheit = (celsius * 9/5) + 32;
  
  // Выводим результат с округлением
  alert(\`\${celsius}°C = \${fahrenheit.toFixed(1)}°F\`);
  
  /* Альтернативный вариант вывода:
  alert(celsius + "°C = " + fahrenheit.toFixed(1) + "°F");
  */
}
`,
  resources: [
    "https://learn.javascript.ru/operators",
    "https://learn.javascript.ru/number",
    "https://en.wikipedia.org/wiki/Fahrenheit#Definition_and_conversion",
  ],
};

export const js_basics_task_7 = {
  id: "js_basics_task_7",
  module: "JavaScript",
  title: "Определение високосного года",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу, которая определяет, является ли год високосным. Високосный год определяется по следующим правилам: 1) год кратен 400 — високосный; 2) иначе, если год кратен 100 — не високосный; 3) иначе, если год кратен 4 — високосный; 4) все остальные годы — не високосные.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "С помощью `prompt` запросите у пользователя год (например: 2024).",
    "Преобразуйте введенное значение в число с помощью `Number()` или унарного `+`.",
    "Проверьте, что значение — это корректное целое положительное число (не `NaN`). Если нет — покажите `alert('Ошибка ввода')`.",
    "Реализуйте проверку года по правилам високосных лет:",
    " - Если год делится на 400 без остатка — високосный",
    " - Иначе, если делится на 100 — не високосный",
    " - Иначе, если делится на 4 — високосный",
    " - Во всех остальных случаях — не високосный",
    "Выведите результат через `alert` в формате: 'Год [год] [является/не является] високосным'.",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Високосный год</title>
</head>
<body>
  <h1>Определение високосного года</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

let year = +prompt("Введите год для проверки:");

if (isNaN(year) || !Number.isInteger(year) || year <= 0) {
  alert("Ошибка ввода: введите целое положительное число");
} else {
  let isLeap = false;
  
  if (year % 400 === 0) {
    isLeap = true;
  } else if (year % 100 === 0) {
    isLeap = false;
  } else if (year % 4 === 0) {
    isLeap = true;
  }
  
  alert(\`Год \${year} \${isLeap ? "является" : "не является"} високосным\`);
  
  /* Альтернативный вариант с более компактной проверкой:
  let isLeap = (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
  */
}
`,
  resources: [
    "https://learn.javascript.ru/ifelse",
    "https://learn.javascript.ru/logical-operators",
    "https://ru.wikipedia.org/wiki/Високосный_год",
  ],
};

export const js_basics_task_8 = {
  id: "js_basics_task_8",
  module: "JavaScript",
  title: "Расчет калорий при беге",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу для расчета расхода калорий при беге. Формула: калории = (вес × время × коэффициент) / 60. Коэффициент для бега = 8.5 ккал/кг/час. Обработайте возможные ошибки ввода.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "С помощью `prompt` запросите у пользователя его вес в кг (например: 70).",
    "С помощью `prompt` запросите время бега в минутах (например: 30).",
    "Преобразуйте оба значения в числа с помощью `Number()` или унарного `+`.",
    "Проверьте, что значения — это корректные положительные числа (не `NaN`). Если нет — покажите `alert('Ошибка ввода')`.",
    "Используя формулу: калории = (вес × время × 8.5) / 60, вычислите расход калорий.",
    "Выведите результат через `alert` в формате: 'При весе [вес] кг и времени бега [время] мин, вы потратите [калории] ккал'.",
    "Округлите результат до целого числа с помощью `Math.round()`.",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Расчет калорий</title>
</head>
<body>
  <h1>Калькулятор расхода калорий при беге</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

const CALORIES_COEFFICIENT = 8.5; // ккал/кг/час

let weight = +prompt("Введите ваш вес в кг:");
let minutes = +prompt("Введите время бега в минутах:");

if (isNaN(weight) || isNaN(minutes) || weight <= 0 || minutes <= 0) {
  alert("Ошибка ввода: введите положительные числа");
} else {
  // Переводим минуты в часы (делим на 60)
  // и умножаем на коэффициент 8.5 ккал/кг/час
  let calories = (weight * minutes * CALORIES_COEFFICIENT) / 60;
  let roundedCalories = Math.round(calories);
  
  alert(\`При весе \${weight} кг и времени бега \${minutes} мин, вы потратите \${roundedCalories} ккал\`);
  
  /* Дополнительно можно вывести более точный результат:
  alert(\`Точный расход: \${calories.toFixed(1)} ккал\`);
  */
}
`,
  resources: [
    "https://www.calculator.net/calories-burned-calculator.html",
    "https://learn.javascript.ru/number",
  ],
};

export const js_basics_task_9 = {
  id: "js_basics_task_9",
  module: "JavaScript",
  title: "Игра 'Угадай число'",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте игру, где компьютер загадывает случайное число от 1 до 100, а пользователь пытается его угадать. Программа должна подсказывать 'больше' или 'меньше' после каждой попытки и считать количество попыток.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "1. Сгенерируйте случайное число от 1 до 100 с помощью `Math.random()` и `Math.floor()`",
    "2. Создайте переменную-счетчик попыток (начинается с 1)",
    "3. В цикле `while` запрашивайте у пользователя число через `prompt`",
    "4. Преобразуйте ввод в число, проверьте корректность ввода",
    "5. Если число угадано — поздравьте пользователя и выведите количество попыток",
    "6. Если число не угадано — скажите 'больше' или 'меньше' и увеличьте счетчик попыток",
    "7. Добавьте возможность досрочного завершения игры (например, при вводе 'q')",
  ],
  difficulty: 5,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Угадай число</title>
</head>
<body>
  <h1>Игра "Угадай число от 1 до 100"</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js

// Генерируем случайное число от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 1;
let userGuess;
let gameActive = true;

alert("Я загадал число от 1 до 100. Попробуй угадать! (Для выхода введите 'q')");

while (gameActive) {
  userGuess = prompt("Попытка " + attempts + ". Введите число:");
  
  // Проверка на выход из игры
  if (userGuess === 'q') {
    alert("Игра завершена. Было загадано: " + secretNumber);
    gameActive = false;
    continue;
  }
  
  userGuess = Number(userGuess);
  
  // Проверка корректности ввода
  if (isNaN(userGuess) {
    alert("Пожалуйста, введите число!");
    continue;
  }
  
  // Проверка угаданного числа
  if (userGuess === secretNumber) {
    alert("Поздравляю! Вы угадали число " + secretNumber + " за " + attempts + " попыток!");
    gameActive = false;
  } else if (userGuess < secretNumber) {
    alert("Загаданное число больше!");
    attempts++;
  } else {
    alert("Загаданное число меньше!");
    attempts++;
  }
}
`,
  resources: [
    "https://learn.javascript.ru/while-for",
    "https://learn.javascript.ru/number",
  ],
};

export const js_basics_task_10 = {
  id: "js_basics_task_10",
  module: "JavaScript",
  title: "Приветствие пользователя",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу, которая запрашивает имя пользователя и выводит приветствие.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "Используйте prompt() для запроса имени",
    "Выведите результат через alert() в формате 'Привет, [имя]!'",
  ],
  difficulty: 1,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Приветствие</title>
</head>
<body>
  <h1>Программа приветствия</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js
let name = prompt("Как вас зовут?");
alert("Привет, " + name + "!");
`,
  resources: ["https://learn.javascript.ru/alert-prompt-confirm"],
};

export const js_basics_task_11 = {
  id: "js_basics_task_11",
  module: "JavaScript",
  title: "Сумма двух чисел",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description: "Программа запрашивает два числа и выводит их сумму.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "Запросите два числа через prompt()",
    "Преобразуйте введенные значения в числа с помощью унарного + или Number()",
    "Выведите сумму через alert()",
  ],
  difficulty: 1,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Сумма чисел</title>
</head>
<body>
  <h1>Калькулятор суммы</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js
let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
alert("Сумма: " + (num1 + num2));
`,
  resources: [
    "https://learn.javascript.ru/operators",
    "https://learn.javascript.ru/number",
  ],
};

export const js_basics_task_12 = {
  id: "js_basics_task_12",
  module: "JavaScript",
  title: "Конвертер метров в километры",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description: "Переведите метры в километры (1 км = 1000 м).",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "Запросите количество метров через prompt()",
    "Преобразуйте значение в число",
    "Разделите на 1000 для перевода в километры",
    "Выведите результат через alert(), округлив до 2 знаков после запятой",
  ],
  difficulty: 2,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Конвертер длины</title>
</head>
<body>
  <h1>Метры в километры</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js
let meters = +prompt("Введите метры:");
let km = meters / 1000;
alert(meters + " м = " + km.toFixed(2) + " км");
`,
  resources: [
    "https://learn.javascript.ru/number",
    "https://learn.javascript.ru/type-conversions",
  ],
};

export const js_basics_task_13 = {
  id: "js_basics_task_13",
  module: "JavaScript",
  title: "Нахождение меньшего числа",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description: "Программа должна найти и вывести меньшее из двух чисел.",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js` через тег `<script>` перед `</body>`.",
    "В файле `script.js` реализуйте следующий алгоритм:",
    "Запросите два числа через prompt()",
    "Преобразуйте значения в числа",
    "Сравните числа с помощью оператора if или тернарного оператора",
    "Выведите меньшее число через alert()",
  ],
  difficulty: 2,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Меньшее число</title>
</head>
<body>
  <h1>Поиск меньшего числа</h1>

  <script src="script.js"></script>
</body>
</html>
`,
  codeExampleJS: `// script.js
let a = +prompt("Первое число:");
let b = +prompt("Второе число:");
alert(a < b ? a : b);
`,
  resources: [
    "https://learn.javascript.ru/comparison",
    "https://learn.javascript.ru/ifelse",
  ],
};

export const js_basics_task_14 = {
  id: "js_basics_task_14",
  module: "JavaScript",
  title: "Определение времени суток",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Напишите программу, которая определяет время суток (утро, день, вечер, ночь) по введенному часу (0-23).",
  steps: [
    "Создайте HTML-файл `index.html` и подключите `script.js`",
    "Запросите у пользователя текущий час (0-23) через prompt()",
    "Преобразуйте ввод в число",
    "Проверьте корректность ввода (число от 0 до 23)",
    "Используя условные операторы, определите время суток:",
    " - 6-11: утро",
    " - 12-17: день",
    " - 18-23: вечер",
    " - 0-5: ночь",
    "Выведите результат через alert()",
  ],
  difficulty: 2,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Время суток</title>
</head>
<body>
  <h1>Определение времени суток</h1>
  <script src="script.js"></script>
</body>
</html>`,
  codeExampleJS: `// script.js
const hour = +prompt("Введите текущий час (0-23):");

if (isNaN(hour) || hour < 0 || hour > 23) {
  alert("Некорректный ввод! Введите число от 0 до 23");
} else {
  let timeOfDay;
  
  if (hour >= 6 && hour < 12) {
    timeOfDay = "утро";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "день";
  } else if (hour >= 18 && hour <= 23) {
    timeOfDay = "вечер";
  } else {
    timeOfDay = "ночь";
  }
  
  alert(\`Сейчас \${timeOfDay}!\`);
  
  // Альтернативный вариант с тернарными операторами:
  // const timeOfDay = hour >= 6 && hour < 12 ? "утро" :
  //                  hour >= 12 && hour < 18 ? "день" :
  //                  hour >= 18 && hour <= 23 ? "вечер" : "ночь";
}
`,
  resources: [
    "https://learn.javascript.ru/ifelse",
    "https://learn.javascript.ru/comparison",
  ],
};

export const js_basics_task_15 = {
  id: "js_basics_task_15",
  module: "JavaScript",
  title: "Калькулятор ИМТ",
  topic: "Основные конструкции и операции JavaScript",
  topicId: "js_basics",
  description:
    "Создайте программу для расчета индекса массы тела (ИМТ) с оценкой результата.",
  steps: [
    "Создайте HTML-файл и подключите скрипт",
    "Запросите вес (в кг) и рост (в см) пользователя",
    "Преобразуйте ввод в числа",
    "Проверьте корректность введенных значений",
    "Рассчитайте ИМТ по формуле: вес / (рост в метрах)^2",
    "Оцените результат:",
    " - ИМТ < 18.5: Недостаточный вес",
    " - 18.5 ≤ ИМТ < 25: Норма",
    " - 25 ≤ ИМТ < 30: Избыточный вес",
    " - ИМТ ≥ 30: Ожирение",
    "Выведите ИМТ с 1 знаком после запятой и оценку",
  ],
  difficulty: 3,
  solution: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Калькулятор ИМТ</title>
</head>
<body>
  <h1>Калькулятор индекса массы тела</h1>
  <script src="script.js"></script>
</body>
</html>`,
  codeExampleJS: `// script.js
const weight = +prompt("Введите ваш вес (кг):");
const height = +prompt("Введите ваш рост (см):");

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
  alert("Некорректные данные! Введите положительные числа");
} else {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters ** 2);
  let result;
  
  if (bmi < 18.5) {
    result = "недостаточный вес";
  } else if (bmi < 25) {
    result = "нормальный вес";
  } else if (bmi < 30) {
    result = "избыточный вес";
  } else {
    result = "ожирение";
  }
  
  alert(\`Ваш ИМТ: \${bmi.toFixed(1)} (\${result})\`);
}
`,
  resources: ["https://learn.javascript.ru/ifelse"],
};
