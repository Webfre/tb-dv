import { cssSections } from "./cssSections";

export const cssChapters = [
  {
    id: "css_intro",
    title: "Основы CSS и синтаксис",
    sections: cssSections.css_intro,
    testKeys: ["css_intro_test"],
    practiceIds: ["css_intro_task_1"],
  },
  {
    id: "css_selectors",
    title: "Стилизация текста",
    sections: cssSections.css_selectors,
    testKeys: ["css_selectors_test"],
    practiceIds: ["css_selectors_task_1", "css_selectors_task_2"],
  },
  {
    id: "css_box_model",
    title: "Блочная модель и позиционирование элементов",
    sections: cssSections.css_box_model,
    testKeys: ["css_box_model_test"],
    practiceIds: ["css_box_model_task"],
  },
  {
    id: "css_block",
    title: "Стилизация  блоков",
    sections: cssSections.css_block_model,
    testKeys: ["css_selectors_test"],
    practiceIds: ["css_selectors_task_1", "css_selectors_task_2"],
  },
  {
    id: "css_pseudo",
    title: "Псевдоклассы и псеводо элемены ",
    sections: cssSections.css_pseudo,
    testKeys: ["css_selectors_test"],
    practiceIds: ["css_selectors_task_1", "css_selectors_task_2"],
  },
  {
    id: "css_methodologies",
    title: "Методологии (BEM)",
    sections: cssSections.css_methodologies,
    testKeys: ["css_methodologies_test"],
    practiceIds: ["css_methodologies_task"],
  },

  {
    id: "css_flexbox",
    title: "Flexbox",
    sections: cssSections.css_flexbox,
    testKeys: ["css_flexbox_test"],
    practiceIds: [
      "css_flexbox_task_1",
      "css_flexbox_task_2",
      "css_flexbox_task_3",
    ],
  },
  {
    id: "css_grid",
    title: "Grid Layout",
    sections: cssSections.css_grid,
    testKeys: ["css_grid_test"],
    practiceIds: ["css_grid_task_1", "css_grid_task_2"],
  },
  {
    id: "css_layout",
    title: "Макеты и позиционирование",
    sections: cssSections.css_layout,
    testKeys: ["css_layout_test"],
    practiceIds: ["css_layout_task_1", "css_layout_task_2"],
  },
  {
    id: "css_images",
    title: "Работа с изображениями и фоном",
    sections: cssSections.css_images,
    testKeys: ["css_images_test"],
    practiceIds: ["css_images_task_1", "css_images_task_2"],
  },
  {
    id: "css_responsive",
    title: "Адаптивный дизайн",
    sections: cssSections.css_responsive,
    testKeys: ["css_responsive_test"],
    practiceIds: ["css_responsive_task"],
  },
  {
    id: "css_animations",
    title: "Анимации и переходы",
    sections: cssSections.css_animations,
    testKeys: ["css_animations_test"],
    practiceIds: ["css_animations_task_1", "css_animations_task_2"],
  },
  {
    id: "css_preprocessors",
    title: "Препроцессоры (Sass/Less)",
    sections: cssSections.css_preprocessors,
    testKeys: ["css_preprocessors_test"],
    practiceIds: ["css_preprocessors_task"],
  },

  {
    id: "css_final",
    title: "Финальный проект",
    sections: cssSections.css_final,
    testKeys: ["css_final_test"],
    practiceIds: ["css_final_project"],
    final: true,
  },
];
