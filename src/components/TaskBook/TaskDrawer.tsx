import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { renderDifficulty } from "./renderDifficulty";
import { PracticeTask } from "../../DB/index_type";
import TaskContent from "./TaskContent";
import CloseIcon from "@mui/icons-material/Close";
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
            <Typography sx={{ color: "#333" }} variant="h6">
              {task.title}
            </Typography>
          </Box>
        </Box>

        <TaskContent hasAccess={hasAccess} task={task} />
      </Box>
    </Drawer>
  );
};

export default TaskDrawer;
