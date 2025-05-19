import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import HtmlDrawer from "../Сourse/HtmlDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { PracticeTask } from "../../dataCourse/CourseTopic";
import { renderDifficulty } from "./renderDifficulty";
import TaskContent from "./TaskContent";
import styles from "./TaskDrawer.module.scss";

interface TaskDrawerProps {
  open: boolean;
  onClose: () => void;
  task: PracticeTask | null;
  hasAccess: boolean | undefined;
}

const TaskDrawer: React.FC<TaskDrawerProps> = ({
  open,
  onClose,
  task,
  hasAccess,
}) => {
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);

  if (!task) return null;

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <Box p={3}>
        <Box className={styles.topTask}>
          <Box position="absolute" right={10} top={10}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mt={1}>{renderDifficulty(task.difficulty)}</Box>
          <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h6">{task.title}</Typography>

            {task?.show && (
              <Box display="flex" gap={2}>
                <Stack direction="row">
                  <Chip
                    label="Показать пример"
                    color="primary"
                    onClick={() => setHtmlDrawerOpen(true)}
                    clickable
                  />
                </Stack>
              </Box>
            )}
          </Box>
        </Box>

        <TaskContent hasAccess={hasAccess} task={task} />

        <HtmlDrawer
          html={htmlDrawerOpen ? task?.show || null : null}
          onClose={() => setHtmlDrawerOpen(false)}
        />
      </Box>
    </Drawer>
  );
};

export default TaskDrawer;
