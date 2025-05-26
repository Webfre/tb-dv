import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  Grid,
  Dialog,
  DialogContent,
} from "@mui/material";
import { renderDifficulty } from "../TaskBook/renderDifficulty";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { ToggleSolvedTaskDto } from "../../api/progressApi";
import { hasAccessToCourses } from "../../lib/hasAccessToCourses";
import { CopyBlock, dracula } from "react-code-blocks";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";
import LinkIcon from "@mui/icons-material/Link";
import HtmlDrawer from "../Сourse/HtmlDrawer";
import CloseIcon from "@mui/icons-material/Close";
import TaskCompletionToggle from "../TaskBook/TaskCompletionToggle";
import styles from "./PracticeDrawer.module.scss";
import { PracticeTask } from "../../DB/index_type";
import { renderCodeBlocks } from "./renderCodeBlocks";
import { chip_sx, chip_sx_light, chip_sx_success } from "../../styles/global";

interface PracticeDrawerProps {
  open: boolean;
  onClose: () => void;
  tasks: PracticeTask[];
  solvedTasks: ToggleSolvedTaskDto[];
}

const PracticeDrawer: React.FC<PracticeDrawerProps> = ({
  open,
  onClose,
  tasks,
  solvedTasks,
}) => {
  const [selectedTask, setSelectedTask] = useState<PracticeTask | null>(null);
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const { data } = useCheckCourseAccessQuery();
  const hasAccess = hasAccessToCourses(data?.accessCourse || []);

  useEffect(() => {
    setShowSolution(false);
  }, [selectedTask]);

  useEffect(() => {
    if (!open) {
      setSelectedTask(null);
      setShowSolution(false);
      setHtmlDrawerOpen(false);
    }
  }, [open]);

  const [fullCode, setFullCode] = useState<null | {
    title: string;
    code: string;
    language: string;
  }>(null);

  const handleOpen = (title: string, code: string, language: string) => {
    setFullCode({ title, code, language });
  };

  const handleClose = () => setFullCode(null);

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { height: "100vh" } }}
    >
      <Box px={4} py={3} sx={{ height: "100%", overflowY: "auto" }}>
        <Box className={styles.titlePR}>
          <Box className={styles.titleTask}>
            <Typography variant="h5" mb={2}>
              Практические задачи
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid container spacing={2}>
            {tasks.map((task) => {
              const isSolved = solvedTasks.some(
                (solved) => solved.id === task.id && solved.solved
              );

              return (
                <Grid item key={task.id}>
                  <Chip
                    label={task.title}
                    onClick={() => setSelectedTask(task)}
                    clickable
                    sx={
                      isSolved
                        ? chip_sx_success
                        : selectedTask?.id === task.id
                        ? chip_sx
                        : chip_sx_light
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {selectedTask ? (
          <Box className={styles.selectedTask}>
            <Box className={styles.selectedTaskTop}>
              {selectedTask?.show && (
                <Box display="flex" gap={2}>
                  <Stack direction="row">
                    <Chip
                      label="Показать пример"
                      sx={chip_sx}
                      onClick={() => setHtmlDrawerOpen(true)}
                      clickable
                    />
                  </Stack>
                </Box>
              )}

              <Chip
                label={showSolution ? "Скрыть решение" : "Показать решение"}
                onClick={() => setShowSolution((prev) => !prev)}
                clickable
                sx={chip_sx_light}
              />

              {hasAccess && (
                <TaskCompletionToggle
                  taskId={selectedTask.id}
                  module={selectedTask.module}
                />
              )}
            </Box>

            <Box mt={1}>{renderDifficulty(selectedTask.difficulty)}</Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">{selectedTask.title}</Typography>
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

            {(selectedTask.solution ||
              selectedTask.codeExampleCSS ||
              selectedTask.codeExampleJS) && (
              <Box mt={3} mb={6}>
                {showSolution && (
                  <Box>{renderCodeBlocks(selectedTask, handleOpen)}</Box>
                )}
              </Box>
            )}

            {Array.isArray(selectedTask.resources) &&
              selectedTask.resources.length > 0 && (
                <Box mb={2}>
                  <Typography variant="subtitle1" gutterBottom>
                    Полезные ссылки:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {selectedTask.resources.map((url, index) => (
                      <Chip
                        key={index}
                        icon={<LinkIcon />}
                        label={new URL(url).hostname}
                        component="a"
                        href={url}
                        sx={chip_sx}
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
                <Box>
                  <Typography mt={2} variant="subtitle1" fontWeight={500}>
                    Файлы для скачивания:
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                    {selectedTask.attachments.map((file, index) => (
                      <Chip
                        key={index}
                        label={`Файл ${index + 1}`}
                        component="a"
                        sx={chip_sx}
                        href={file}
                        download
                        clickable
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
              )}
          </Box>
        ) : (
          <Box className={styles.emptyTask}>
            <Typography variant="h6" color="text.secondary">
              Выберите одну из задач, и попробуйте решить ее. Удачи!
            </Typography>
          </Box>
        )}
      </Box>

      <HtmlDrawer
        html={htmlDrawerOpen ? selectedTask?.show || null : null}
        onClose={() => setHtmlDrawerOpen(false)}
      />

      <Dialog open={!!fullCode} onClose={handleClose} fullScreen>
        <DialogContent
          sx={{
            backgroundColor: "#282c34",
            padding: 4,
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Заголовок */}
          <Typography variant="h6" color="white" gutterBottom>
            {fullCode?.title}
          </Typography>

          {/* Блок с кодом */}
          {fullCode && (
            <CopyBlock
              text={fullCode.code}
              language={fullCode.language}
              showLineNumbers
              theme={dracula}
              customStyle={{
                ...styleCodeBlock,
                maxHeight: "85vh",
                overflow: "auto",

                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "#444 transparent", // Firefox

                /* WebKit (Chrome, Edge, Safari) */
                WebkitScrollbarWidth: "thin", // не обязателен, но для совместимости
                WebkitOverflowScrolling: "touch",
              }}
              codeBlock
            />
          )}
        </DialogContent>
      </Dialog>
    </Drawer>
  );
};

export default PracticeDrawer;
