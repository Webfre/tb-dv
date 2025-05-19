import { CourseTopic } from "../DB/index_type";

// Подсчет общего количества тестов в теме
export const getTotalTests = (topic: CourseTopic): number => {
  return (
    (topic.testKeys?.length || 0) +
    topic.chapters.reduce((acc, ch) => acc + (ch.testKeys?.length || 0), 0)
  );
};

// Подсчет общего количества практик в теме
export const getTotalPractice = (topic: CourseTopic): number => {
  return (
    (topic.practiceIds?.length || 0) +
    topic.chapters.reduce((acc, ch) => acc + (ch.practiceIds?.length || 0), 0)
  );
};

// Подсчет общего количества разделов (sections) в теме
export const getTotalSections = (topic: CourseTopic): number => {
  return topic.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
};
