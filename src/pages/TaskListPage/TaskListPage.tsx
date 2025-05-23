import React, { useState } from "react";
import { filterTasks, getAllTopics } from "./taskUtils";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { practiceMock } from "../../DB/taskData";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { Box } from "@mui/material";
import { hasAccessToCourses } from "../../lib/hasAccessToCourses";
import { PracticeTask } from "../../DB/index_type";
import TaskDrawer from "../../components/TaskBook/TaskDrawer";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import TaskListHeader from "./TaskListHeader";
import styles from "./TaskList.module.scss";

interface TaskListPageProps {
  moduleId: string;
}

const TaskListPage: React.FC<TaskListPageProps> = ({ moduleId }) => {
  const { data } = useCheckCourseAccessQuery();
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const hasAccess = hasAccessToCourses(data?.accessCourse || []);
  const [selectedTask, setSelectedTask] = useState<PracticeTask | null>(null);
  const [difficultyLevel, setDifficultyLevel] = useState<number | null>(null);
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [showUnsolved, setShowUnsolved] = useState(false);
  const allTopics = getAllTopics(practiceMock, moduleId);

  const filteredTasks = filterTasks(
    practiceMock,
    moduleId,
    difficultyLevel,
    topicFilter
  ).filter((task) => {
    if (showUnsolved) {
      return !solvedTasks.some((solved) => solved.id === task.id);
    }

    return true;
  });

  const resetFilters = () => {
    setDifficultyLevel(null);
    setTopicFilter(null);
    setShowUnsolved(false);
  };

  return (
    <Box className={styles.taskListPage}>
      <TaskListHeader moduleId={moduleId} />

      <TaskFilters
        difficulty={difficultyLevel}
        onDifficultyChange={setDifficultyLevel}
        topic={topicFilter}
        onTopicChange={setTopicFilter}
        allTopics={allTopics}
        onReset={resetFilters}
        showUnsolved={showUnsolved}
        onShowUnsolvedChange={setShowUnsolved}
        hasAccess={hasAccess}
      />

      <TaskList
        hasAccess={hasAccess}
        tasks={filteredTasks}
        onSelect={setSelectedTask}
      />

      <TaskDrawer
        hasAccess={hasAccess}
        open={!!selectedTask}
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
      />
    </Box>
  );
};

export default TaskListPage;
