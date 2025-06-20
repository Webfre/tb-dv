import { learningProcess } from "../../INFO/learningProcess";
import { filterMentorsByIds } from "../../../components/MentorProfilePage/mentorsData";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TerminalIcon from "@mui/icons-material/Terminal";

export const web_layout_info_course = {
  id: 1,
  type: "professions",
  typeId: 1,
  courseId: [
    "scss",
    "browser",
    "ide",
    "html",
    "css",
    "introHtml",
    "portfolio",
    "verstka_final",
  ],
  title: "Вёрстка сайтов (HTML и CSS)",
  description: "Язык разметки • 4 месяца • С нуля",
  price: 4500,
  duration: "Рассрочка на 6 месяцев",
  totalPrice: 27000,
  paymentMonths: 6,
  courseType: "Basic",
  mentors: filterMentorsByIds([2]),
  technologies: [
    {
      title: "HTML5",
      icon: HtmlIcon,
      titleTooltip: "Структура веб-страниц, семантическая разметка",
    },
    {
      title: "CSS3",
      icon: CssIcon,
      titleTooltip: "Стилизация интерфейса, создание адаптивных макетов",
    },
    {
      title: "VS Code",
      icon: CodeIcon,
      titleTooltip: "Редактор кода для разработки проектов",
    },
    {
      title: "Figma",
      icon: DesignServicesIcon,
      titleTooltip: "Инструмент для работы с макетами и дизайном",
    },
    {
      title: "Git",
      icon: TerminalIcon,
      titleTooltip: "Система контроля версий для управления изменениями в коде",
    },
    {
      title: "GitHub",
      icon: GitHubIcon,
      titleTooltip:
        "Платформа для хранения репозиториев и совместной разработки",
    },
  ],
  projects: [
    {
      title: "Лендинг технологической компании",
      description:
        "Многостраничный адаптивный лендинг с анимацией, слайдерами, карточками услуг и отзывами. Реализован в стилистике современных IT-компаний с применением Flexbox и Grid.",
    },
    {
      title: "Магазин электроники",
      description:
        "Адаптивный интернет-магазин с возможностью фильтрации товаров, добавления в корзину, оформления заказа и отображения состояния заказов. Реализована простая корзина с локальным хранилищем (localStorage).",
    },
    {
      title: "Платформа для блогеров",
      description:
        "Интерактивная платформа для размещения статей, с поддержкой разметки Markdown, комментирования и подписки на авторов. Полностью адаптивная с отзывчивым дизайном.",
    },
    {
      title: "Сайт-портфолио веб-разработчика",
      description:
        "Сайт с разделами 'Обо мне', 'Навыки', 'Проекты' и 'Контакты'. Реализована форма обратной связи с отправкой данных на почту. Подключены анимации при скролле.",
    },
    {
      title: "Дашборд аналитики",
      description:
        "Адаптивная админ-панель с графиками, таблицами и фильтрацией данных. Реализованы интерактивные виджеты и сортировка данных по разным параметрам.",
    },
    {
      title: "Сайт мероприятия или конференции",
      description:
        "Многостраничный сайт с информацией о мероприятии, расписанием, спикерами, формой регистрации и картой расположения. Полностью адаптивный с анимацией переходов.",
    },
    {
      title: "Сайт-квиз с формой захвата лидов",
      description:
        "Интерактивный квиз (опросник) с несколькими шагами и логикой переходов. Завершение квиза отправляет данные пользователя на сервер для генерации лида.",
    },
  ],
  faqs: [
    {
      question: "Нужны ли предварительные знания?",
      answer:
        "Курс подходит для новичков, но базовое понимание HTML и CSS поможет быстрее освоить материал.",
    },
    {
      question: "Какой график занятий?",
      answer:
        "Вы можете учиться в удобном темпе, но рекомендуется уделять не менее 10 часов в неделю.",
    },
    {
      question: "Сколько времени занимает обучение?",
      answer:
        "Курс рассчитан на 4 месяца обучения. Вы можете проходить материал быстрее или медленнее в зависимости от ваших целей.",
    },
    {
      question: "Могу ли я получить помощь от преподавателя?",
      answer:
        "Да, у вас будет доступ к ментору, который поможет разобраться с заданиями и ответит на все вопросы.",
    },
    {
      question: "Нужно ли устанавливать дополнительные программы?",
      answer:
        "Для обучения потребуется редактор кода (рекомендуем VS Code) и браузер. Все необходимые инструкции будут предоставлены в курсе.",
    },
    {
      question: "Предоставляются ли макеты для верстки?",
      answer:
        "Да, в курсе предусмотрены макеты в Figma, по которым вы будете практиковаться в создании сайтов.",
    },
    {
      question: "Есть ли финальный проект в курсе?",
      answer:
        "Да, в конце курса вы реализуете полноценный проект, который можно добавить в портфолио.",
    },
    {
      question: "Можно ли обучаться с мобильного устройства?",
      answer:
        "Для просмотра материалов — да. Но для полноценной работы с кодом и проектами рекомендуется использовать ноутбук или компьютер.",
    },
    {
      question: "Как я буду отслеживать свой прогресс?",
      answer:
        "На платформе есть специальный раздел, где отображаются пройденные модули, тесты и выполненные практические задания.",
    },
    {
      question: "Получаю ли я сертификат по завершению курса?",
      answer:
        "Да, после успешного завершения всех модулей и финального проекта вы получите сертификат, подтверждающий ваши навыки вёрстки.",
    },
  ],
  learningProcess: learningProcess,
  skills: [
    "Создание адаптивных веб-сайтов и интерфейсов",
    "Понимание принципов HTML и CSS",
    "Работа с препроцессорами: SASS, SCSS, LESS",
    "Оптимизация кода и стилей для быстрой загрузки",
    "Использование Flexbox и Grid для построения сложных макетов",
    "Подключение и работа со шрифтами, иконками и SVG",
    "Кросс-браузерная вёрстка и тестирование в разных окружениях",
    "Мобильная адаптация веб-страниц (mobile-first, responsive design)",
    "Работа с медиазапросами для различных разрешений экрана",
    "Настройка анимаций и переходов (CSS animations, transitions)",
    "Понимание принципов семантической разметки",
    "Интеграция сторонних библиотек (например, Bootstrap, Tailwind)",
    "Подключение шрифтов с Google Fonts и настройка веб-шрифтов",
    "Подготовка сайта к публикации (минификация, оптимизация)",
  ],
  targetAudience: [
    {
      title: "Новичкам в IT",
      description:
        "Кто хочет с нуля освоить веб-разработку и получить первую профессию в IT",
    },
    {
      title: "Дизайнерам",
      description:
        "Кто хочет научиться самостоятельно верстать свои макеты и расширить профессиональные возможности",
    },
    {
      title: "Контент-менеджерам",
      description:
        "Кто работает с CMS и хочет глубже понимать структуру веб-страниц",
    },
    {
      title: "Маркетологам",
      description:
        "Кто хочет самостоятельно вносить правки на лендингах и понимать технические ограничения",
    },
    {
      title: "Фрилансерам",
      description:
        "Кто хочет освоить востребованный навык для расширения спектра услуг",
    },
    {
      title: "Школьникам/студентам",
      description: "Кто ищет перспективное направление для будущей профессии",
    },
  ],
  descriptionInfo: {
    profession: "Верстальщик / Frontend-разработчик",
    about:
      "Вёрстка - это создание визуальной части сайтов с помощью HTML и CSS, превращение дизайн-макетов в рабочие веб-страницы. Это фундаментальный навык для любого веб-разработчика.",
    demand:
      "Специалисты по вёрстке востребованы в IT-компаниях, веб-студиях, digital-агентствах и фрилансе. Каждый сайт или веб-приложение начинается с качественной вёрстки.",
    activities: [
      "Создание адаптивных и кросс-браузерных интерфейсов",
      "Вёрстка по макетам из Figma/Photoshop",
      "Оптимизация скорости загрузки страниц",
      "Работа с препроцессорами (SASS/LESS)",
      "Взаимодействие с дизайнерами и backend-разработчиками",
    ],
    prospects: [
      "Стартовая зарплата верстальщика: от 50 000 руб.",
      "Возможность роста до Frontend-разработчика (100 000+ руб.)",
      "Работа в международных компаниях и удалённый формат",
      "Фриланс-проекты и создание собственных продуктов",
      "Основа для изучения JavaScript и современных фреймворков",
    ],
  },
  infoStats: [
    { label: "месяца обучения", count: 4 },
    { label: "практических модулей", count: 39 },
    { label: "проектов для портфолио", count: 7 },
    { label: "практических работ", count: 3 },
    { label: "тестов", count: 12 },
    { label: "практичеких задач", count: 120 },
  ],
  image:
    "https://static20.tgcnt.ru/posts/_0/5e/5e9acfc3acdd21208d213172dff47739.jpg",
};
