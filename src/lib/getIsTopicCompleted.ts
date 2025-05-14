import { CourseTopic } from "../dataCourse/CourseTopic";
import { ProgressData } from "../components/Progress/ProgressUtils";
import { getTotalTests } from "./topicMetrics";

export interface TaskTopic {
  id: string;
  resolved: boolean;
}

export const getIsTopicCompleted = (
  topic: CourseTopic,
  progressData: ProgressData | undefined,
  taskTopics: TaskTopic[] | undefined
): boolean => {
  if (!topic) return false;

  const totalTests = getTotalTests(topic);

  const testKeysInTopic = [
    ...(topic.testKeys || []),
    ...topic.chapters.flatMap((ch) => ch.testKeys || []),
  ];

  const passedTestsCount = testKeysInTopic.filter((key) => {
    const history = progressData?.history?.[key];
    if (!history || !Array.isArray(history)) return false;

    return history.some((attempt) => attempt.grade >= 3);
  }).length;

  // Найдём id финальной практики, если она указана в topic
  const finalPracticeId = topic.chapters
    .flatMap(
      (ch) => ch.practiceIds?.map((pid) => ({ pid, final: ch.final })) || []
    )
    .find((p) => p.final)?.pid;

  // Проверка на то, выполнена ли именно финальная практика
  const isPracticePassed = finalPracticeId
    ? taskTopics?.some((t) => t.id === finalPracticeId && t.resolved === true)
    : undefined;

  // Если практика предусмотрена — учитывать её
  if (finalPracticeId) {
    return totalTests > 0
      ? passedTestsCount === totalTests && !!isPracticePassed
      : !!isPracticePassed;
  }

  // Если практика не предусмотрена в topic — ориентируемся только на тесты
  return totalTests > 0 ? passedTestsCount === totalTests : false;
};
