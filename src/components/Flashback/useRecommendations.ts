import { useMemo } from "react";
import { Stats } from "./useTestStatistics";

export const useRecommendations = (stats: Stats) => {
  const recommendationsModules: { name: string; id: string }[] = [];
  const recommendationsSections: {
    name: string;
    moduleId: string;
    topicId: string;
  }[] = [];

  const checkRecommendation = (
    name: string,
    correct: number,
    total: number,
    isModule: boolean = false,
    moduleId?: string,
    topicId?: string
  ) => {
    const percent = total ? (correct / total) * 100 : 0;
    if (percent < 55) {
      if (isModule) {
        recommendationsModules.push({ name, id: moduleId ?? "" });
      } else {
        recommendationsSections.push({
          name,
          moduleId: moduleId ?? "",
          topicId: topicId ?? "",
        });
      }
    }
  };

  useMemo(() => {
    Object.entries(stats.byModules).forEach(([moduleId, data]) => {
      const total = data.correct + data.incorrect;
      checkRecommendation(moduleId, data.correct, total, true, moduleId);
    });

    Object.entries(stats.bySections).forEach(([section, data]) => {
      const total = data.correct + data.incorrect;
      const topicId = stats.byTopics[section];

      const moduleId = Object.keys(stats.byModules).find((id) =>
        topicId.startsWith(id)
      );

      if (!moduleId) {
        return;
      }

      checkRecommendation(
        section,
        data.correct,
        total,
        false,
        moduleId,
        topicId
      );
    });
  }, [stats]);

  return { recommendationsModules, recommendationsSections };
};
