import { mockTopics } from "../DB";
import { practiceMock } from "../DB/taskData";

/**
 * Найти все задачи из practiceMock, которые совпадают с practiceIds в mockTopics.
 * @param topicTitle - название темы (например, "HTML")
 * @returns массив задач, соответствующих practiceIds из chapters
 */
export const findPracticeTasksForTopic = (topicTitle: string) => {
  // Найти нужный объект в mockTopics
  const targetTopic = mockTopics.find((topic) => topic.title === topicTitle);

  if (!targetTopic) {
    return [];
  }

  // Собираем все practiceIds из всех глав (chapters)
  const allPracticeIds = targetTopic.chapters.flatMap(
    (chapter) => chapter.practiceIds
  );

  // Фильтруем practiceMock, чтобы оставить только совпадающие practiceIds
  const filteredTasks = practiceMock.filter((task) =>
    allPracticeIds.includes(task.id)
  );

  return filteredTasks;
};
