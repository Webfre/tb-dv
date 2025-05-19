import { Progress } from "../api/progressApi";
import { CourseTopic } from "../DB/index_type";
import { getPrWorksProgress } from "./getPrWorksProgress";

export const calculateTopicProgress = (
  topic: CourseTopic,
  progressData: Progress | undefined,
  isTestPassed: (key: string) => boolean
) => {
  // Общее количество разделов
  const totalSections = topic.chapters.reduce(
    (acc: number, ch: any) => acc + ch.sections.length,
    0
  );

  // Все ключи тестов
  const allTestKeys = [
    ...(topic.testKeys || []),
    ...topic.chapters.flatMap((ch: any) => ch.testKeys || []),
  ];

  // Общее количество тестов
  const totalTests = allTestKeys.length;

  // Получение данных о прогрессе по практическим работам
  const { totalPrWorks, completedPrWorksCount } = getPrWorksProgress(
    topic.id,
    progressData?.taskTopics
  );

  // Количество пройденных тестов
  const passedTests = allTestKeys.filter((key) => isTestPassed(key)).length;

  // Общая сумма тестов и практических работ
  const totalTasksCount = totalTests + totalPrWorks;
  const completedTasksCount = passedTests + completedPrWorksCount;

  // Процент выполнения
  const progress = totalTasksCount
    ? Math.round((completedTasksCount / totalTasksCount) * 100)
    : 0;

  // Общее количество практик
  const totalPractice =
    (topic.practiceIds?.length || 0) +
    topic.chapters.reduce(
      (acc: number, ch: any) => acc + (ch.practiceIds?.length || 0),
      0
    );

  return {
    totalSections,
    totalTests,
    totalPrWorks,
    completedPrWorksCount,
    passedTests,
    totalTasksCount,
    completedTasksCount,
    progress,
    totalPractice,
  };
};
