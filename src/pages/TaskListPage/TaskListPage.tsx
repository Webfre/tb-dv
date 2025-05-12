import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filterTasks, getAllTopics } from "./taskUtils";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { practiceMock } from "../../data/taskData";
import { PracticeTask } from "../../dataCourse/CourseTopic";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import TaskDrawer from "../../components/TaskBook/TaskDrawer";
import BtnCustom from "../../ui/BtnCustom";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import TaskListHeader from "./TaskListHeader";

const TaskListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useCheckCourseAccessQuery();
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const hasAccess = data?.hasAccess;

  const [selectedTask, setSelectedTask] = useState<PracticeTask | null>(null);
  const [difficultyLevel, setDifficultyLevel] = useState<number | null>(null);
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [showUnsolved, setShowUnsolved] = useState(false);

  const moduleId = id?.toLowerCase() || "";
  const navigate = useNavigate();

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
    <Box p={4}>
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />

      <TaskListHeader moduleId={id} />

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
