import { cssTopic } from "./CSS/DATA_COURSE/css";
import { browserTopic } from "./WWW/DATA_COURSE/www";
import { htmlTopic } from "./HTML/DATA_COURSE/html";
import { CourseChapter, CourseTopic, InfoCourse } from "./index_type";
import { introTopic } from "./START/DATA_COURSE/start";
import { ideTopic } from "./IDE/DATA_COURSE/vscode";
import { jsTopic } from "./JAVASCRIPT/DATA_COURSE/js";
import { introHtml } from "./HTML_INTRO/introHtml";
import { scssTopic } from "./SCSS/scss";
import { verstka_final } from "./VERSKA_FINAL/verstka_final";
import { web_layout_info_course } from "./СOURSE_DATA/WEB_LAYOUT/web_layout_info_course";
import { portfolio } from "./SCSS copy/portfolio";

export const courseList: InfoCourse[] = [
  web_layout_info_course,
  // javascript_info_course,
  // typescript_info_course,
  // react_basic_info_course,
  // react_advanced_info_course,
];

// Это вся база ТЕМ
export const mockTopics: CourseTopic[] = [
  introHtml,
  introTopic,
  browserTopic,
  ideTopic,
  htmlTopic,
  cssTopic,
  jsTopic,
  scssTopic,
  portfolio,
  verstka_final,
];

// Для информации о курсе Программа блок
export const chaptersMap: Record<string, CourseChapter[]> = {
  // introJavaScript: introTopicJavaScript, // TODO нужно будет создать и заполнить для курса JavaScript (идут как дополнительные)
  // introTypeScript: introTopicTypeScript, // TODO нужно будет создать и заполнить для курса TypeScript (идут как дополнительные)
  portfolio: portfolio.chapters,
  introHtml: introHtml.chapters, // TODO нужно будет создать и заполнить для курса Верстка HTML CSS (идут как дополнительные)
  verstka_final: verstka_final.chapters, // финал верстка
  intro: introTopic.chapters, // ДЛЯ КУРСА REACT (базовый)
  html: htmlTopic.chapters, // HTML курс
  css: cssTopic.chapters, // CSS курс
  scss: cssTopic.chapters, // CSS курс
  js: jsTopic.chapters, // JS курс
  ide: ideTopic.chapters, // дополнение к какждому курсу
  browser: browserTopic.chapters, // дополнение к какждому курсу

  // typeScript: topicTypeScript, // TODO нужно будет создать и заполнить для курса TypeScript (идет как КУРС)
  // reactBasic: topicReactBasic, // TODO нужно будет создать и заполнить для курса React (базовый) (идет как КУРС)
  // reactPro: topicReactPro, // TODO нужно будет создать и заполнить для курса React (продвинутый) (идет как КУРС)
};
