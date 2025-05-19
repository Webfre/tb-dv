import { SvgIconComponent } from "@mui/icons-material";
import { Mentor } from "../components/MentorProfilePage/mentorsData";

export interface CourseTopic {
  id: string; // Уникальный идентификатор темы
  title: string; // Название темы
  description?: string; // Описание темы
  chapters: CourseChapter[]; // Массив глав темы
  testKeys?: string[]; // Ключи тестов для темы
  practiceIds?: string[]; // ID практических заданий
  estimatedHours: number; // Оценочное время изучения (часы)
  mentors: MentorCourseTopic; // Информация о менторе
}

export interface CourseChapter {
  id: string; // Уникальный идентификатор главы
  title: string; // Название главы
  sections: CourseSection[]; // Массив разделов главы
  testKeys?: string[]; // Ключи тестов для главы (если есть)
  final?: boolean; // Является ли глава финальной (если true)
  practiceIds?: string[]; // ID практических заданий (если есть) тут нужно указать ID задач которые ты хочешь взять из задачника для Практики в Курсе
}

export interface CourseSection {
  id: string; // Уникальный идентификатор раздела
  title: string; // Заголовок раздела
  content?: string; // Текстовое содержимое раздела (может быть markdown)
  codeExample?: string; // Пример кода для раздела
  resources?: string[]; // Дополнительные материалы (ссылки)
  attachments?: string[]; // Файлы для скачивания
  show?: string; // Условное отображение (если есть)
  showCode?: string; // Условное отображение кода (если есть)
  postMentor?: number; // ID ментора для поста (если есть)
  moduleId?: string; // ID модуля (если есть)
  codeExampleCSS?: string; // CSS код для примера (если есть)
  type?: string; // Тип раздела (если есть)
}

export interface MentorCourseTopic {
  id: number; // ID ментора
  name: string; // Имя ментора
}

export interface PracticeTask {
  id: string; // Уникальный идентификатор задания
  module: string; // Название модуля (например "HTML")
  title: string; // Название задания
  description: string; // Описание задания
  steps: string[]; // Шаги выполнения
  difficulty: number; // Сложность (0-5)
  topic?: string; // Тема задания (если есть) нужно указать для фильтра темы в задачнике
  topicId?: string; // Ссылка на раздел курса (если есть) Его можно не указывать он не нужен уже
  solution?: string; // Пример решения HTML (если есть)
  show?: string; // Условное отображение (если есть)
  resources?: string[]; // Дополнительные материалы
  attachments?: string[]; // Файлы для скачивания
  codeExampleCSS?: string; // CSS код решения
  codeExampleJS?: string; // JS код решения
  sectionId?: string; // ID раздела (если есть) Это нужно указывать чтобы повесить задачи Практики на раздел связать раздел с задачами из задачника
}

export interface InfroStatsCourse {
  label: string;
  count: number;
}

interface TechnologiesCourse {
  title: string;
  icon: SvgIconComponent;
  titleTooltip: string;
}

interface ProjectsCourse {
  title: string;
  description: string;
}

interface TargetAudienceCourse {
  title: string;
  description: string;
}

interface DescriptionInfoCourse {
  profession: string;
  about: string;
  demand: string;
  activities: string[];
  prospects: string[];
}

interface CourseFeature {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

interface FaqsCourse {
  question: string;
  answer: string;
}

export interface InfoCourse {
  id: number;
  courseId: string[];
  title: string;
  description: string;
  price: number;
  duration: string;
  totalPrice: number;
  paymentMonths: number;
  image: string;
  skills: string[];
  mentors: Mentor[];
  courseType: string; // "Basic" | "Pro"
  infoStats: InfroStatsCourse[];
  descriptionInfo: DescriptionInfoCourse;
  targetAudience: TargetAudienceCourse[];
  learningProcess: CourseFeature[];
  technologies: TechnologiesCourse[];
  projects: ProjectsCourse[];
  faqs: FaqsCourse[];
}

export interface Question {
  id: number;
  name: string;
  variants: string[];
  correct: number[];
}

export interface TestData {
  id: number;
  name: string;
  ques: Question[];
  category: string;
}

export interface TestDataCollection {
  [key: string]: TestData;
}
