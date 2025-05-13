import { useState } from "react";
import { FlashbackQuestion } from "../../dataFlashback/flashbackData";

interface Stats {
  byModules: Record<string, { correct: number; incorrect: number }>;
  bySections: Record<string, { correct: number; incorrect: number }>;
}

export const useTestStatistics = () => {
  const [stats, setStats] = useState<Stats>({
    byModules: {},
    bySections: {},
  });

  const updateStats = (question: FlashbackQuestion, isCorrect: boolean) => {
    setStats((prev) => {
      const updatedStats = { ...prev };

      if (question.moduleId) {
        if (!updatedStats.byModules[question.moduleId]) {
          updatedStats.byModules[question.moduleId] = {
            correct: 0,
            incorrect: 0,
          };
        }
        if (isCorrect) {
          updatedStats.byModules[question.moduleId].correct += 1;
        } else {
          updatedStats.byModules[question.moduleId].incorrect += 1;
        }
      }

      if (question.sectionTitle) {
        if (!updatedStats.bySections[question.sectionTitle]) {
          updatedStats.bySections[question.sectionTitle] = {
            correct: 0,
            incorrect: 0,
          };
        }
        if (isCorrect) {
          updatedStats.bySections[question.sectionTitle].correct += 1;
        } else {
          updatedStats.bySections[question.sectionTitle].incorrect += 1;
        }
      }

      return updatedStats;
    });
  };

  return {
    stats,
    updateStats,
  };
};
