import { mockTopics } from "../DB";

export interface IFlashbackModule {
  id: string;
  title: string;
  chapters: {
    id: string;
    title: string;
  }[];
}

export interface FlashbackQuestion {
  id: string;
  title: string;
  options: string[];
  correctAnswers: number[];
  descriptions: string[];
  moduleId: string;
  sectionTitle: string;
  topic?: string;
}

interface FlashbackSettings {
  modules: string[];
  sections: { title: string; group: string }[];
  count: number;
}

export const questionCounts = [10, 15, 20, 25];

// Список исключаемых модулей
const EXCLUDED_MODULES = ["intro", "ide"]; // TODO

export const flashbackModules: IFlashbackModule[] = mockTopics
  .filter((topic) => !EXCLUDED_MODULES.includes(topic.id))
  .map(
    (topic): IFlashbackModule => ({
      id: topic.id,
      title: topic.title,
      chapters: topic.chapters.map((chapter) => ({
        id: chapter.id,
        title: chapter.title,
      })),
    })
  );

export const filterFlashbackQuestions = (
  settings: FlashbackSettings,
  allQuestions: FlashbackQuestion[]
): FlashbackQuestion[] => {
  const { modules, sections, count } = settings;

  // 1. Отбор по модулям и разделам
  const filtered = allQuestions.filter(
    (q) =>
      modules.includes(q.moduleId) &&
      sections.some(
        (s) =>
          s.title === q.sectionTitle &&
          s.group.toLowerCase() === q.moduleId.toLowerCase()
      )
  );

  // 2. Перемешивание (Fisher–Yates Shuffle)
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  // 3. Вернуть нужное количество
  return shuffled.slice(0, count);
};
