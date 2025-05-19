interface TestDataItem {
  id: number;
  name: string;
  category?: string;
  [key: string]: any;
}

export interface GroupedTests {
  [category: string]: (TestDataItem & { key: string })[];
}

export interface TestHistoryEntry {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: Record<string, number[]>;
}

export interface ProgressData {
  history?: Record<string, TestHistoryEntry[]>;
}

/**
 * Группирует тесты по категориям
 */
export const groupTestsByCategory = (
  testData: Record<string, TestDataItem>
): GroupedTests => {
  return Object.entries(testData).reduce<GroupedTests>((acc, [key, test]) => {
    const category = test.category || "Без категории";
    if (!acc[category]) acc[category] = [];
    acc[category].push({ key, ...test });
    return acc;
  }, {});
};

/**
 * Вычисляет прогресс по категории
 */
export const calculateCategoryProgress = (
  tests: { key: string }[],
  progressData?: ProgressData
): number => {
  const total = tests.length;

  if (total === 0 || !progressData) return 0;

  let passed = 0;

  for (const test of tests) {
    const history = progressData.history?.[test.key];

    if (history && history.length > 0) {
      const best = Math.max(...history.map((h) => h.percentage));
      if (best >= 50) passed++;
    }
  }

  return Math.round((passed / total) * 100);
};
