import React, { useMemo, useState } from "react";
import { filterTasks, getAllTopics } from "./taskUtils";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { practiceMock } from "../../DB/taskData";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { Box } from "@mui/material";
import { hasAccessToCourses } from "../../lib/hasAccessToCourses";
import TaskDrawer from "../../components/TaskBook/TaskDrawer";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import TaskListHeader from "./TaskListHeader";
import styles from "./TaskList.module.scss";

interface TaskListPageProps {
  moduleId: string;
  filters: {
    difficultyLevel: number | null;
    setDifficultyLevel: (value: number | null) => void;
    topicFilter: string | null;
    setTopicFilter: (value: string | null) => void;
    showUnsolved: boolean;
    setShowUnsolved: (value: boolean) => void;
    currentPage: number;
    setCurrentPage: (value: number) => void;
  };
}

const TaskListPage: React.FC<TaskListPageProps> = ({ moduleId, filters }) => {
  const {
    difficultyLevel,
    setDifficultyLevel,
    topicFilter,
    setTopicFilter,
    showUnsolved,
    setShowUnsolved,
    currentPage,
    setCurrentPage,
  } = filters;
  const { data } = useCheckCourseAccessQuery();
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const hasAccess = hasAccessToCourses(data?.accessCourse || []);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const allTopics = getAllTopics(practiceMock, moduleId);
  const tasksPerPage = 10;

  const selectedTask = useMemo(() => {
    return practiceMock.find((t) => t.id === selectedTaskId) || null;
  }, [selectedTaskId]);

  const filteredTasks = useMemo(() => {
    return filterTasks(
      practiceMock,
      moduleId,
      difficultyLevel,
      topicFilter
    ).filter(
      (task) =>
        !showUnsolved || !solvedTasks.some((solved) => solved.id === task.id)
    );
  }, [moduleId, difficultyLevel, topicFilter, showUnsolved, solvedTasks]);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const currentTasks = useMemo(() => {
    const start = (currentPage - 1) * tasksPerPage;
    return filteredTasks.slice(start, start + tasksPerPage);
  }, [filteredTasks, currentPage]);

  const resetFilters = () => {
    setDifficultyLevel(null);
    setTopicFilter(null);
    setShowUnsolved(false);
    setCurrentPage(1);
  };

  return (
    <Box className={styles.taskListPage}>
      <TaskListHeader moduleId={moduleId} />

      <TaskFilters
        difficulty={difficultyLevel}
        onDifficultyChange={(value) => {
          setDifficultyLevel(value);
          setCurrentPage(1);
        }}
        topic={topicFilter}
        onTopicChange={(value) => {
          setTopicFilter(value);
          setCurrentPage(1);
        }}
        allTopics={allTopics}
        onReset={resetFilters}
        showUnsolved={showUnsolved}
        onShowUnsolvedChange={(value) => {
          setShowUnsolved(value);
          setCurrentPage(1);
        }}
        hasAccess={hasAccess}
      />

      <TaskList
        hasAccess={hasAccess}
        tasks={currentTasks}
        onSelect={(task) => setSelectedTaskId(task.id)}
      />

      {totalPages > 1 && (
        <Box className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1 ? styles.activePage : undefined
              }
            >
              {index + 1}
            </button>
          ))}
        </Box>
      )}

      <TaskDrawer
        hasAccess={hasAccess}
        open={!!selectedTask}
        task={selectedTask}
        onClose={() => setSelectedTaskId(null)}
      />
    </Box>
  );
};

export default TaskListPage;
