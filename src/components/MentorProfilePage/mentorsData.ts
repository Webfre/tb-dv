export interface Mentor {
  id: number;
  name: string;
  avatarUrl: string;
  specialization: string;
  fullName: string;
  telegram: string;
  phone: string;
  email: string;
  topics: string[];
  about: string;
  helpWith: string[];
  grade: string;
}

export const mentors: Mentor[] = [
  // {
  //   id: 2,
  //   name: "Митин Олег",
  //   specialization: "HTML, CSS, SCSS",
  //   avatarUrl: "https://i.pravatar.cc/150?img=3",
  // },
  // {
  //   id: 3,
  //   name: "Митина Ксения",
  //   specialization: "JavaScript, TypeScript",
  //   avatarUrl: "https://i.pravatar.cc/150?img=4",
  // },
  {
    id: 1,
    name: "Мухаметшин Роман",
    fullName: "Мухаметшин Роман Мансурович",
    telegram: "https://t.me/romanwebfree",
    phone: "8 999 979 71 38",
    email: "romain.muhametschin@yandex.ru",
    specialization: "React, Vue",
    grade: "Ментор: React, Vue",
    avatarUrl:
      "https://avatars.mds.yandex.net/i?id=9d5451345975d5729838093b1ea2d04c_l-5460185-images-thumbs&n=13",
    about:
      "Являюсь руководителем направления frontend-разработки и ментором курса. Занимаюсь построением архитектуры современных веб-приложений, развитием команд, внедрением эффективных подходов к разработке и обеспечением качества кода. В рамках образовательных проектов курирую обучение студентов, провожу технические консультации, ревью кода и сопровождаю рост разработчиков от начального до продвинутого уровня. Особое внимание уделяю структурному мышлению, best practices и реальным задачам, с которыми сталкиваются frontend-инженеры в коммерческой разработке.",
    topics: [
      "React",
      "Vue",
      "Git",
      "RTK Query (Redux Toolkit Query)",
      "MobX",
      "MUI (Material UI)",
      "Ant Design (AntD)",
      "FSD (Feature-Sliced Design)",
      "Продвинутый TypeScript",
      "Архитектура веб-приложений",
      "Тестирование (Jest, React Testing Library, Cypress)",
      "Webpack",
      "Vite",
      "Code Review и best practices",
      "Собеседования и карьерный рост",
      "Работа с REST API",
      "Состояние и кэширование в SPA",
      "Интернационализация (i18n)",
      "SSR и SSG в React (Next.js)",
      "CI/CD (GitHub Actions, GitLab CI)",
    ],
    helpWith: [
      "Объяснение ключевых концепций и практическая помощь в изучении React и Vue",
      "Наставничество в проектировании архитектуры веб-приложений (в том числе по FSD)",
      "Изучение и применение принципов DRY, KISS, SOLID на практике",
      "Проведение технического ревью и помощь в написании чистого, поддерживаемого кода",
      "Подготовка к собеседованиям: разбор типичных вопросов, алгоритмы, архитектурные задачи",
      "Навигация в командной разработке: работа с Git, Git Flow, Code Review процессы",
      "Работа в связке дизайнер–разработчик и взаимодействие с backend-командой",
      "Участие в совместных проектах и помощь в построении MVP / pet-проектов",
      "Оптимизация производительности приложений (бандл, lazy-loading, memo, etc.)",
      "Настройка и поддержка UI-библиотек: MUI, Ant Design, кастомизация компонентов",
      "Введение в тестирование: Unit-тесты (Jest), E2E (Playwright, Cypress)",
      "Работа с современными сборщиками: Webpack, Vite — конфигурация, оптимизация",
      "Помощь в формировании личного карьерного плана и выборе специализации",
    ],
  },
];
