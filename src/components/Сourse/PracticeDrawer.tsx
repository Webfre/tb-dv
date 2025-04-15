import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { renderDifficulty } from "../TaskBook/renderDifficulty";
import LinkIcon from "@mui/icons-material/Link";
import HtmlDrawer from "./HtmlDrawer";
import { PracticeTask } from "./CourseTopic";
import { CopyBlock, dracula } from "react-code-blocks";

interface PracticeDrawerProps {
  open: boolean;
  onClose: () => void;
  tasks: PracticeTask[];
}

const PracticeDrawer: React.FC<PracticeDrawerProps> = ({
  open,
  onClose,
  tasks,
}) => {
  const [selectedTask, setSelectedTask] = useState<PracticeTask | null>(null);
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    setShowSolution(false);
  }, [selectedTask]);

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { height: "100vh" } }}
    >
      <Box px={4} py={3} sx={{ height: "100%", overflowY: "auto" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="primary">
            Практические задачи
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack direction="row" spacing={2} flexWrap="wrap" mt={2} mb={2}>
          {tasks.map((task) => (
            <Chip
              key={task.id}
              label={task.title}
              onClick={() => setSelectedTask(task)}
              clickable
              variant={selectedTask?.id === task.id ? "filled" : "outlined"}
              color={selectedTask?.id === task.id ? "primary" : "default"}
            />
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {selectedTask && (
          <Box>
            <Box mt={1}>{renderDifficulty(selectedTask.difficulty)}</Box>

            <Box display="flex" gap={2} alignItems="center">
              <Typography variant="h6">{selectedTask.title}</Typography>

              {selectedTask?.show && (
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

            <Typography mt={2} variant="subtitle1" fontWeight={500}>
              Описание
            </Typography>

            <Typography color="text.secondary">
              {selectedTask.description}
            </Typography>

            <Typography mt={2} variant="subtitle1" fontWeight={500}>
              Техническое задание
            </Typography>

            <ol>
              {selectedTask.steps.map((step, index) => (
                <li key={index}>
                  <Typography>{step}</Typography>
                </li>
              ))}
            </ol>

            {selectedTask.solution && (
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
                    text={selectedTask.solution}
                    language="html"
                    showLineNumbers
                    theme={dracula}
                    codeBlock
                  />
                )}
              </Box>
            )}

            {Array.isArray(selectedTask.resources) &&
              selectedTask.resources.length > 0 && (
                <Box mb={2}>
                  <Typography variant="subtitle1" gutterBottom>
                    Полезные ссылки
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {selectedTask.resources.map((url, index) => (
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

            {Array.isArray(selectedTask.attachments) &&
              selectedTask.attachments.length > 0 && (
                <>
                  <Typography mt={2} variant="subtitle1" fontWeight={500}>
                    Файлы для скачивания
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                    {selectedTask.attachments.map((file, index) => (
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
          </Box>
        )}
      </Box>

      <HtmlDrawer
        html={htmlDrawerOpen ? selectedTask?.show || null : null}
        onClose={() => setHtmlDrawerOpen(false)}
      />
    </Drawer>
  );
};

export default PracticeDrawer;
