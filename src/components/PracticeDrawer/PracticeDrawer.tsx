import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import { renderDifficulty } from "../TaskBook/renderDifficulty";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { CopyBlock, dracula } from "react-code-blocks";
import { PracticeTask } from "../../dataCourse/CourseTopic";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";
import LinkIcon from "@mui/icons-material/Link";
import HtmlDrawer from "../Сourse/HtmlDrawer";
import CloseIcon from "@mui/icons-material/Close";
import TaskCompletionToggle from "../TaskBook/TaskCompletionToggle";
import styles from "./PracticeDrawer.module.scss";

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
  const { data } = useCheckCourseAccessQuery();
  const hasAccess = data?.hasAccess;

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
            <Typography variant="h6" color="primary">
              Практические задачи
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid container spacing={2}>
            {tasks.map((task) => (
              <Grid item key={task.id}>
                <Chip
                  label={task.title}
                  onClick={() => setSelectedTask(task)}
                  clickable
                  variant={selectedTask?.id === task.id ? "filled" : "outlined"}
                  color={selectedTask?.id === task.id ? "primary" : "default"}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {selectedTask ? (
          <Box className={styles.selectedTask}>
            <Box mt={1}>{renderDifficulty(selectedTask.difficulty)}</Box>

            {hasAccess && (
              <TaskCompletionToggle
                taskId={selectedTask.id}
                module={selectedTask.module}
              />
            )}

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

            {(selectedTask.solution || selectedTask.codeExampleCSS) && (
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
                  <Grid sx={{ marginBottom: "40px" }} container spacing={2}>
                    {selectedTask.solution && (
                      <Grid
                        item
                        xs={
                          selectedTask.codeExampleCSS ||
                          selectedTask.codeExampleJS
                            ? 6
                            : 12
                        }
                      >
                        <Typography variant="subtitle2" gutterBottom>
                          HTML решение:
                        </Typography>
                        <CopyBlock
                          text={selectedTask.solution}
                          language="html"
                          showLineNumbers
                          theme={dracula}
                          customStyle={styleCodeBlock}
                          codeBlock
                        />
                      </Grid>
                    )}

                    {selectedTask.codeExampleJS && (
                      <Grid item xs={selectedTask.solution ? 6 : 12}>
                        <Typography variant="subtitle2" gutterBottom>
                          JavaScript решение:
                        </Typography>
                        <CopyBlock
                          text={selectedTask.codeExampleJS}
                          language="js"
                          showLineNumbers
                          theme={dracula}
                          customStyle={styleCodeBlock}
                          codeBlock
                        />
                      </Grid>
                    )}

                    {selectedTask.codeExampleCSS && (
                      <Grid item xs={selectedTask.solution ? 6 : 12}>
                        <Typography variant="subtitle2" gutterBottom>
                          CSS решение:
                        </Typography>
                        <CopyBlock
                          text={selectedTask.codeExampleCSS}
                          language="css"
                          showLineNumbers
                          theme={dracula}
                          customStyle={styleCodeBlock}
                          codeBlock
                        />
                      </Grid>
                    )}
                  </Grid>
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
                <Box>
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
    </Drawer>
  );
};

export default PracticeDrawer;
