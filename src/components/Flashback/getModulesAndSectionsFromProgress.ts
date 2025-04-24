import { Progress } from "../../api/progressApi";
import { flashbackModules } from "./data/flashbackData";

export const getModulesAndSectionsFromProgress = (progressData?: Progress) => {
  if (!progressData) return { modules: [], sections: [] };

  const passedTests = Object.entries(progressData.history).filter(
    ([_, attempts]) => attempts.some((a: any) => a.grade >= 3)
  );

  const matchedSections: { title: string; group: string }[] = [];
  const matchedModules: Set<string> = new Set();

  for (const [testKey] of passedTests) {
    if (!testKey.endsWith("_test")) continue;

    const baseId = testKey.replace("_test", "");

    for (const module of flashbackModules) {
      const matchedChapter = module.chapters.find(
        (chapter) => chapter.id === baseId
      );
      if (matchedChapter) {
        matchedModules.add(module.id);
        matchedSections.push({
          title: matchedChapter.title,
          group: module.id,
        });
        break;
      }
    }
  }

  return {
    modules: Array.from(matchedModules),
    sections: matchedSections,
  };
};
