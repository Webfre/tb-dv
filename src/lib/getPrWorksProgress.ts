import { prDataList } from "../DB/prDataList";

export interface TaskTopic {
  id: string;
  resolved: boolean;
  moduleId: string;
  title: string;
}

interface PrWorksProgress {
  totalPrWorks: number;
  completedPrWorksCount: number;
}

export const getPrWorksProgress = (
  topicId: string,
  taskTopics?: TaskTopic[]
): PrWorksProgress => {
  const prWorks = prDataList.filter((pr) => pr.moduleId === topicId);
  const totalPrWorks = prWorks.length;

  const completedPrWorksCount =
    taskTopics?.filter((task) => task.moduleId === topicId && task.resolved)
      .length || 0;

  return { totalPrWorks, completedPrWorksCount };
};

export const isTaskCompleted = (
  taskId: string,
  taskTopics?: TaskTopic[]
): boolean => {
  if (!taskTopics) return false;
  const task = taskTopics.find((task) => task.id === taskId);
  return !!task?.resolved;
};
