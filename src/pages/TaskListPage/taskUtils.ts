import { PracticeTask } from "../../DB/index_type";

export const getAllTopics = (
  tasks: PracticeTask[],
  moduleId: string
): string[] => {
  return Array.from(
    new Set(
      tasks
        .filter((task) => task.module.toLowerCase() === moduleId)
        .map((task) => task.topic || "")
        .filter(Boolean)
    )
  );
};

export const filterTasks = (
  tasks: PracticeTask[],
  moduleId: string,
  difficultyLevel: number | null,
  topicFilter: string | null
): PracticeTask[] => {
  return tasks.filter((task) => {
    const moduleMatch = task.module.toLowerCase() === moduleId;
    const difficultyMatch =
      difficultyLevel === null || task.difficulty === difficultyLevel;
    const topicMatch =
      topicFilter === null ||
      task.topic === topicFilter ||
      task.topicId === topicFilter;

    return moduleMatch && difficultyMatch && topicMatch;
  });
};
