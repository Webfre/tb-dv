import React from "react";
import { Chip } from "@mui/material";
import { toast } from "react-toastify";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  useToggleSolvedTaskMutation,
  useGetSolvedTasksQuery,
} from "../../api/progressApi";
import CustomToast from "../../ui/CustomToast";

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

      toast(
        <CustomToast
          message={
            !isCompleted
              ? "Задача добавлена в решённые"
              : "Задача удалена из решённых"
          }
          icon={
            !isCompleted ? (
              <ThumbUpAltIcon sx={{ color: "white" }} />
            ) : (
              <EmojiEmotionsIcon sx={{ color: "white" }} />
            )
          }
        />
      );
      refetch();
    } catch (error) {
      toast.error("Ошибка при обновлении статуса задачи");
    }
  };

  return (
    <Chip
      label={isCompleted ? "Решено" : "Не решено"}
      icon={
        isCompleted ? (
          <ThumbUpAltIcon sx={{ color: "rgb(149, 180, 103) !important" }} />
        ) : (
          <ThumbDownAltIcon sx={{ color: "rgb(210, 210, 210) !important" }} />
        )
      }
      onClick={handleToggle}
      clickable
      sx={{
        border: `1px solid ${isCompleted ? "#4caf50" : "#9e9e9e"}`,
        color: isCompleted ? "#4caf50" : "#9e9e9e",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    />
  );
};

export default TaskCompletionToggle;
