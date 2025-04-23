import { cssTopic } from "./dataCourse/css/css";
import { htmlTopic } from "./dataCourse/html/html";
import { jsTopic } from "./dataCourse/js/js";
import { ideTopic } from "./dataCourse/vscode/vscode";
import { browserTopic } from "./dataCourse/www/www";

export interface CourseSection {
  id: string;
  title: string;
  content?: string;
  codeExample?: string; // Пример кода
  resources?: string[]; // Ссылки на материалы
  attachments?: string[]; // Пути к файлам или ссылки для скачивания
  show?: string;
  showCode?: string;
  codeExampleCSS?: string;
  type?: string;
}

export interface CourseChapter {
  id: string;
  title: string;
  sections: CourseSection[];
  testKeys?: string[];
  final?: boolean;
  practiceIds?: string[];
}

export interface CourseTopic {
  id: string;
  title: string;
  description?: string;
  chapters: CourseChapter[];
  testKeys?: string[];
  practiceIds?: string[];
  estimatedHours: number;
}

export interface PracticeTask {
  id: string;
  module: string; // модуль HTML
  title: string;
  description: string;
  steps: string[];
  difficulty: number; // 0–5
  topic?: string; // тема к пример в модуле HTML тема атрибуты или теги
  topicId?: string; // ссылка на раздел в Курсе
  solution?: string; // пример решения
  show?: string;
  resources?: string[]; // ссылки на материалы
  attachments?: string[]; // файлы для скачивания
  codeExampleCSS?: string; // css код решение
  codeExampleJS?: string; // js код решение
}

const topics = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "RTK Query",
  "React",
  "Основы браузера",
  "Работа с IDE",
  "Git",
  "Пет-проекты",
  "Собеседования",
  "Резюме",
];

export const mockTopics: CourseTopic[] = [browserTopic, ideTopic, htmlTopic, cssTopic, jsTopic];
