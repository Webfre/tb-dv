import React, { useState, useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import { PracticeTask } from "../Сourse/CourseTopic";
import { useNavigate } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import HtmlDrawer from "../Сourse/HtmlDrawer";
import { renderDifficulty } from "./renderDifficulty";

interface TaskDrawerProps {
  open: boolean;
  onClose: () => void;
  task: PracticeTask | null;
}

const TaskDrawer: React.FC<TaskDrawerProps> = ({ open, onClose, task }) => {
  const [showSolution, setShowSolution] = useState(false);
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

  useEffect(() => {
    setShowSolution(false);
  }, [task]);

  if (!task) return null;

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <Box p={3}>
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

        <Divider sx={{ my: 2 }} />

        <Typography mt={2} variant="subtitle1" fontWeight={500}>
          Описание
        </Typography>
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

        {task.solution && (
          <Box mt={3}>
            <Chip
              label={showSolution ? "Скрыть решение" : "Показать решение"}
              onClick={() => setShowSolution((prev) => !prev)}
              clickable
              color="primary"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            {showSolution && (
              <CopyBlock
                text={task.solution}
                language="html"
                showLineNumbers
                theme={dracula}
                codeBlock
              />
            )}
          </Box>
        )}

        {Array.isArray(task.resources) && task.resources.length > 0 && (
          <Box mb={2}>
            <Typography variant="subtitle1" gutterBottom>
              Полезные ссылки
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {task.resources.map((url, index) => (
                <Chip
                  key={index}
                  icon={<LinkIcon />}
                  label={new URL(url).hostname}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener"
                  clickable
                  color="info"
                />
              ))}
            </Stack>
          </Box>
        )}

        {Array.isArray(task.attachments) && task.attachments.length > 0 && (
          <>
            <Typography mt={2} variant="subtitle1" fontWeight={500}>
              Файлы для скачивания
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
              {task.attachments.map((file, index) => (
                <Chip
                  key={index}
                  label={`Файл ${index + 1}`}
                  component="a"
                  href={file}
                  download
                  clickable
                  variant="outlined"
                />
              ))}
            </Stack>
          </>
        )}

        <HtmlDrawer
          html={htmlDrawerOpen ? task?.show || null : null}
          onClose={() => setHtmlDrawerOpen(false)}
        />
      </Box>
    </Drawer>
  );
};

export default TaskDrawer;
