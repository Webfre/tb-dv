import { Progress } from "../api/progressApi";
import { testData } from "../DB/testData";

export const getTestAttemptsCount = (
  progressData: Progress | undefined,
  testKey?: string
): number => {
  if (!testKey || !progressData?.history?.[testKey]) return 0;

  return progressData.history[testKey].length;
};

export const getTestTitle = (testKey: string): string => {
  const test = testData[testKey];
  return test ? test.name : "Неизвестный тест";
};
