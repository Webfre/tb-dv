import { browserChapters } from "./browserChaptersData";

export const browserTopic = {
  id: "browser",
  title: "Работа браузера",
  description:
    "В этой теме рассматривается, как работает браузер: от ввода URL до отображения страницы. Вы узнаете о внутреннем устройстве браузеров, жизненном цикле загрузки страницы, рендеринг-движке, DOM, CSSOM, дереве рендеринга, процессе компоновки и отрисовки, оптимизации производительности и кэшировании.",
  estimatedHours: 6,
  practiceIds: [],
  chapters: browserChapters,
  mentors: {
    id: 2,
    name: "Митин Олег",
  },
};
