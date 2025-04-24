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
import { useNavigate } from "react-router-dom";
import { renderDifficulty } from "./renderDifficulty";
import TaskContent from "./TaskContent";
import styles from "./TaskDrawer.module.scss";

interface TaskDrawerProps {
  open: boolean;
  onClose: () => void;
  task: PracticeTask | null;
}

const TaskDrawer: React.FC<TaskDrawerProps> = ({ open, onClose, task }) => {
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleTopicClick = () => {
    if (task?.topicId) {
      navigate(`/course/${task.module?.toLocaleLowerCase()}`, {
        state: {
          scrollToChapterId: task.topicId,
        },
      });
    }
  };

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
            {task.topic && (
              <Chip
                label={task.topic}
                onClick={handleTopicClick}
                variant="outlined"
              />
            )}

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

        <TaskContent task={task} />

        <HtmlDrawer
          html={htmlDrawerOpen ? task?.show || null : null}
          onClose={() => setHtmlDrawerOpen(false)}
        />
      </Box>
    </Drawer>
  );
};

export default TaskDrawer;
