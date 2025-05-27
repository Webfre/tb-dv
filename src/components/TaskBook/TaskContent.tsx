import React, { useState } from "react";
import { chip_sx_light } from "../../styles/global";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { PracticeTask } from "../../DB/index_type";
import TaskSolutions from "./TaskSolutions";
import TaskResources from "./TaskResources";
import TaskAttachments from "./TaskAttachments";
import styles from "./TaskDrawer.module.scss";
import TaskCompletionToggle from "./TaskCompletionToggle";
import HtmlDrawer from "../Сourse/HtmlDrawer";

interface TaskContentProps {
  task: PracticeTask;
  hasAccess: boolean | undefined;
}

const TaskContent: React.FC<TaskContentProps> = ({ task, hasAccess }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);

  return (
    <Box className={styles.topTask} mt={2}>
      <Box className={styles.actionBtn}>
        {task?.show && (
          <Box display="flex" gap={2}>
            <Stack direction="row">
              <Chip
                sx={chip_sx_light}
                label="Показать пример"
                onClick={() => setHtmlDrawerOpen(true)}
                clickable
              />
            </Stack>
          </Box>
        )}

        {(task.solution || task.codeExampleCSS || task.codeExampleJS) && (
          <Box className={styles.solutionContainer}>
            <Chip
              label={showSolution ? "Скрыть решение" : "Показать решение"}
              onClick={() => setShowSolution((prev) => !prev)}
              clickable
              sx={chip_sx_light}
            />
          </Box>
        )}

        {hasAccess && (
          <TaskCompletionToggle taskId={task.id} module={task.module} />
        )}
      </Box>

      <Box className={styles.togleBox}>
        <Typography mt={2} variant="subtitle1" fontWeight={500}>
          Описание
        </Typography>
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

      {showSolution && <TaskSolutions task={task} />}

      {Array.isArray(task.resources) && task.resources.length > 0 && (
        <TaskResources resources={task.resources} />
      )}

      {Array.isArray(task.attachments) && task.attachments.length > 0 && (
        <TaskAttachments attachments={task.attachments} />
      )}

      <HtmlDrawer
        html={htmlDrawerOpen ? task?.show || null : null}
        onClose={() => setHtmlDrawerOpen(false)}
      />
    </Box>
  );
};

export default TaskContent;
