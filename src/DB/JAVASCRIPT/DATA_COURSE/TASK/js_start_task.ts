export const js_start_task_1 = {
  id: "js_start_task_1",
  module: "JavaScript",
  title: "Вывод сообщения в консоль браузера",
  topic: "Знакомство с программированием",
  topicId: "js_start",
  sectionId: "js_start_4",
  description:
    "Ваша первая практика — вывести сообщение в консоль с помощью команды `console.log`. Это поможет вам понять, как работает базовый вывод информации в JavaScript.",
  steps: [
    "Откройте любую веб-страницу в браузере (например, google.com).",
    "Нажмите **F12** или откройте 'Инструменты разработчика' → вкладка **Console**.",
    "В появившейся консоли напишите следующую команду:",
    "`console.log('Привет, JavaScript!')`",
    "Нажмите Enter и посмотрите результат.",
    "Попробуйте изменить текст и вывести своё собственное приветствие.",
  ],
  difficulty: 1,
  solution: `console.log("Привет, JavaScript!");`,
  codeExampleJS: `console.log("Я только начал изучать программирование!");`,
};
export const js_start_task_2 = {
  id: "js_start_task_2",
  module: "JavaScript",
  title: "Вывод сообщения в VS Code",
  topic: "Запуск кода в редакторе",
  topicId: "js_start",
  sectionId: "js_start_4",
  description:
    "Создайте файл в VS Code и напишите простую программу на JavaScript. Эта практика поможет вам освоить редактор, сохранить файл и запустить его через Node.js.",
  steps: [
    "Откройте VS Code и создайте новую папку для проекта.",
    "Создайте новый файл с именем `hello.js`.",
    "Внутри файла напишите команду: `console.log('Привет из VS Code!');`",
    "Сохраните файл (Ctrl+S или Cmd+S).",
    "Откройте встроенный терминал в VS Code (Ctrl+\\` или через меню: Terminal → New Terminal).",
    "В терминале введите: `node hello.js` и нажмите Enter.",
    "Убедитесь, что в терминале появилось ваше сообщение.",
    "Попробуйте изменить текст и запустить ещё раз.",
  ],
  difficulty: 1,
  solution: `console.log("Привет из VS Code!");`,
  codeExampleJS: `console.log("Вы успешно запустили код в редакторе VS Code!");`,
};
export const js_start_task_3 = {
  id: "js_start_task_3",
  module: "JavaScript",
  title: "Запуск JavaScript-файла через Node.js (по желанию)",
  topic: "Запуск кода в редакторе",
  topicId: "js_start",
  sectionId: "js_start_4",
  description:
    "Если вы установили Node.js, вы можете попробовать запустить файл JavaScript вне браузера — прямо как настоящую программу. Это необязательная практика, которую можно просто отметить как выполненную, если вы не планируете использовать Node прямо сейчас.",
  steps: [
    "Убедитесь, что Node.js установлен. Откройте терминал и введите `node -v`.",
    "Создайте новый файл с именем `my_program.js` в любой папке.",
    "Напишите в нём код: `console.log('Моя первая программа на Node.js');`",
    "Сохраните файл и запустите в терминале командой: `node my_program.js`",
    "Убедитесь, что в терминале отобразилось ваше сообщение.",
    "При желании измените сообщение и перезапустите программу.",
  ],
  optional: true,
  difficulty: 1,
  solution: `console.log("Моя первая программа на Node.js");`,
  codeExampleJS: `console.log("Добро пожаловать в Node.js!");`,
};

