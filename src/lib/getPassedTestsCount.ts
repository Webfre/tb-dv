import { ProgressData } from "../components/Progress/ProgressUtils";
import { CourseTopic } from "../dataCourse/CourseTopic";

export const getPassedTestsCount = (
  topic: CourseTopic,
  progressData?: ProgressData
): number => {
  if (!progressData || !progressData.history) return 0;

  const history = progressData.history;

  const testKeysInTopic = [
    ...(topic.testKeys || []),
    ...topic.chapters.flatMap((ch) => ch.testKeys || []),
  ];

  return testKeysInTopic.filter((key) => {
    const testAttempts = history[key];
    if (!testAttempts || !Array.isArray(testAttempts)) return false;

    return testAttempts.some((attempt) => attempt.grade >= 3);
  }).length;
};
