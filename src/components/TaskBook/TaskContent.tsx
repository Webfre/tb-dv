import React, { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import TaskSolutions from "./TaskSolutions";
import TaskResources from "./TaskResources";
import TaskAttachments from "./TaskAttachments";
import styles from "./TaskDrawer.module.scss";
import TaskCompletionToggle from "./TaskCompletionToggle";
import { PracticeTask } from "../../DB/index_type";

interface TaskContentProps {
  task: PracticeTask;
  hasAccess: boolean | undefined;
}

const TaskContent: React.FC<TaskContentProps> = ({ task, hasAccess }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Box className={styles.topTask} mt={2}>
      <Box className={styles.togleBox}>
        <Typography mt={2} variant="subtitle1" fontWeight={500}>
          Описание
        </Typography>
        {hasAccess && (
          <TaskCompletionToggle taskId={task.id} module={task.module} />
        )}
      </Box>
      <Typography color="text.secondary">{task.description}</Typography>

      <Typography mt={2} variant="subtitle1" fontWeight={500}>
        Техническое задание
      </Typography>

      <ol>
        {task.steps.map((step, index) => (
          <li key={index}>
            <Typography>{step}</Typography>
          </li>
        ))}
      </ol>

      {(task.solution || task.codeExampleCSS || task.codeExampleJS) && (
        <Box className={styles.solutionContainer}>
          <Chip
            label={showSolution ? "Скрыть решение" : "Показать решение"}
            onClick={() => setShowSolution((prev) => !prev)}
            clickable
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {showSolution && <TaskSolutions task={task} />}
        </Box>
      )}

      {Array.isArray(task.resources) && task.resources.length > 0 && (
        <TaskResources resources={task.resources} />
      )}

      {Array.isArray(task.attachments) && task.attachments.length > 0 && (
        <TaskAttachments attachments={task.attachments} />
      )}
    </Box>
  );
};

export default TaskContent;
