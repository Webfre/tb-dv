import { useState } from "react";
import { FlashbackQuestion } from "../../dataFlashback/flashbackData";

export interface Stats {
  byModules: Record<string, { correct: number; incorrect: number }>;
  bySections: Record<string, { correct: number; incorrect: number }>;
  byTopics: Record<string, string>;
}

export const useTestStatistics = () => {
  const [stats, setStats] = useState<Stats>({
    byModules: {},
    bySections: {},
    byTopics: {},
  });

  const updateStats = (question: FlashbackQuestion, isCorrect: boolean) => {
    setStats((prev) => {
      const updatedStats = { ...prev };

      // Обновляем статистику по модулям
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

      // Обновляем статистику по разделам
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

      // Добавляем топик в список
      if (question.sectionTitle && question.topic) {
        updatedStats.byTopics[question.sectionTitle] = question.topic;
      }

      return updatedStats;
    });
  };

  return {
    stats,
    updateStats,
  };
};
