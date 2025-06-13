import { scssSections } from "./scssSections";

export const scssChapters = [
  {
    id: "scss_intro",
    title: "Введение и настройка окружения",
    sections: scssSections.css_intro,
    testKeys: ["scss_intro_test"],
    practiceIds: [],
  },
  {
    id: "scss_basics",
    title: "Основы SCSS",
    sections: scssSections.scss_basics,
    testKeys: ["scss_basics_test"],
    practiceIds: [
      "scss_basics_task_1",
      "scss_basics_task_2",
      "scss_basics_task_3",
      "scss_basics_task_4",
      "scss_basics_task_5",
      "scss_basics_task_6",
      "scss_basics_task_7",
      "scss_basics_task_8",
    ],
  },
  // {
  //   id: "scss_possibilities",
  //   title: "Продвинутые возможности",
  //   sections: scssSections.scss_possibilities,
  //   testKeys: [],
  //   practiceIds: [],
  // },
];
