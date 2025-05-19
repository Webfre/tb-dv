import { getTotalTests } from "./topicMetrics";
import { prDataList } from "../DB/prDataList";
import { Progress } from "../api/progressApi";
import { CourseTopic } from "../DB/index_type";

export interface TaskTopic {
  id: string;
  resolved: boolean;
  moduleId: string;
  title: string;
}

export const getIsTopicCompleted = (
  topic: CourseTopic,
  progressData: Progress | undefined
): boolean => {
  if (!topic || !progressData) return false;

  // Проверка тестов
  const totalTests = getTotalTests(topic);

  const testKeysInTopic = [
    ...(topic.testKeys || []),
    ...topic.chapters.flatMap((ch) => ch.testKeys || []),
  ];

  const passedTestsCount = testKeysInTopic.filter((key) => {
    const history = progressData.history?.[key];
    if (!history || !Array.isArray(history)) return false;
    return history.some((attempt) => attempt.grade >= 3);
  }).length;

  const allTestsPassed = totalTests === passedTestsCount;

  // Проверка практических работ
  const totalPrWorks = prDataList.filter(
    (pr) => pr.moduleId === topic.id
  ).length;

  const completedPrWorks = progressData?.taskTopics?.filter(
    (task) => task.moduleId === topic.id && task.resolved
  ).length;

  const allPrWorksPassed = totalPrWorks === completedPrWorks;

  // Финальная проверка — пройдены и все тесты, и все практические работы
  return allTestsPassed && allPrWorksPassed;
};
