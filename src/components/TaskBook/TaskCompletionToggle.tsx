import React from "react";
import { Box, Switch } from "@mui/material";
import { toast } from "react-toastify";
import {
  useToggleSolvedTaskMutation,
  useGetSolvedTasksQuery,
} from "../../api/progressApi";
import styles from "./TaskDrawer.module.scss";

interface TaskCompletionToggleProps {
  taskId: string;
  module: string;
}

const TaskCompletionToggle: React.FC<TaskCompletionToggleProps> = ({
  taskId,
  module,
}) => {
  const { data: solvedTasks = [], refetch } = useGetSolvedTasksQuery();
  const [toggleSolvedTask] = useToggleSolvedTaskMutation();

  const isCompleted = solvedTasks.some(
    (item) => item.id === taskId && item.module === module
  );

  const handleToggle = async () => {
    try {
      await toggleSolvedTask({
        id: taskId,
        module,
        solved: !isCompleted,
      }).unwrap();

      toast.success(
        !isCompleted
          ? "Задача добавлена в решённые"
          : "Задача удалена из решённых"
      );
      refetch();
    } catch (error) {
      toast.error("Ошибка при обновлении статуса задачи");
    }
  };

  return (
    <Box
      className={styles.isCompleted}
      sx={{
        borderColor: isCompleted ? "green" : "rgb(164, 164, 164)",
        cursor: "pointer",
      }}
      onClick={handleToggle}
    >
      <Box>
        {isCompleted ? "Отметить как нерешённое" : "Пометить как решённое"}
      </Box>
      <Switch
        color="success"
        checked={isCompleted}
        readOnly
        sx={{ pointerEvents: "none" }}
      />
    </Box>
  );
};

export default TaskCompletionToggle;
