import React from "react";
import { Chip } from "@mui/material";
import { isTaskCompleted } from "../../lib/getPrWorksProgress";

interface TaskStatusChipProps {
  sectionId: string;
  taskTopics?: Array<{
    id: string;
    resolved: boolean;
    moduleId: string;
    title: string;
  }>;
}

const TaskStatusChip: React.FC<TaskStatusChipProps> = ({
  sectionId,
  taskTopics,
}) => {
  const isCompleted = isTaskCompleted(sectionId, taskTopics);

  return (
    <Chip
      label={isCompleted ? "Выполнена" : "Не выполнена"}
      color={isCompleted ? "success" : "default"}
      variant={isCompleted ? "filled" : "outlined"}
      size="small"
    />
  );
};

export default TaskStatusChip;
