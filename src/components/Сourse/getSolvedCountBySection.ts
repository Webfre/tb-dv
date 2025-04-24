import { PracticeTask } from "../../dataCourse/CourseTopic";

interface SolvedTask {
  id: string;
  module: string;
  solved: boolean;
}

export const getSolvedCountBySection = (
  solvedTasks: SolvedTask[],
  allTasks: PracticeTask[]
): Record<string, number> => {
  return solvedTasks.reduce((acc, solvedTask) => {
    const fullTask = allTasks.find(
      (task) => task.id === solvedTask.id && task.module === solvedTask.module
    );

    if (fullTask?.sectionId) {
      acc[fullTask.sectionId] = (acc[fullTask.sectionId] || 0) + 1;
    }

    return acc;
  }, {} as Record<string, number>);
};
