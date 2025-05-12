import { SvgIconComponent } from "@mui/icons-material";
import { cssTopic } from "./css/css";
import { htmlTopic } from "./html/html";
import { jsTopic } from "./js/js";
import { introTopic } from "./start/start";
import { ideTopic } from "./vscode/vscode";
import { browserTopic } from "./www/www";

export interface CourseSection {
  id: string;
  title: string;
  content?: string;
  codeExample?: string; // Пример кода
  resources?: string[]; // Ссылки на материалы
  attachments?: string[]; // Пути к файлам или ссылки для скачивания
  show?: string;
  showCode?: string;
  postMentor?: number;
  moduleId?: string;
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

export interface MentorCourseTopic {
  id: number;
  name: string;
}

export interface CourseTopic {
  id: string;
  title: string;
  description?: string;
  chapters: CourseChapter[];
  testKeys?: string[];
  practiceIds?: string[];
  estimatedHours: number;
  mentors: MentorCourseTopic;
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
  sectionId?: string; // раздел
}

export const mockTopics: CourseTopic[] = [
  introTopic,
  browserTopic,
  ideTopic,
  htmlTopic,
  cssTopic,
  jsTopic,
];
