import React from "react";
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Progress } from "../../../api/userApi";

interface UserProgressCardProps {
  progress: Progress;
  courseId: number | undefined;
}

const UserProgressCard: React.FC<UserProgressCardProps> = ({
  progress,
  courseId,
}) => {
  const courseIdStr = String(courseId);
  const courseProgress = courseIdStr ? progress.courses[courseIdStr] : null;
  const coursePractical = courseIdStr ? progress.practical[courseIdStr] : null;

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Решенные задачи (задачник)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {progress.solvedTasks?.length ? (
            <List dense>
              {progress.solvedTasks.map((task, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${task.module}: ${task.id}`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1">Нет решенных задач</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Практические работы по курсу</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {coursePractical?.taskTopics?.length ? (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {coursePractical.taskTopics.map((topic, index) => (
                <Chip
                  key={index}
                  label={`${topic.moduleId}: ${topic.title}`}
                  color={topic.resolved ? "success" : "default"}
                  variant={topic.resolved ? "filled" : "outlined"}
                />
              ))}
            </Box>
          ) : (
            <Typography variant="body1">Нет данных по темам</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Тесты по курсу</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {courseProgress?.history &&
          Object.keys(courseProgress.history).length ? (
            <Box>
              {Object.entries(courseProgress.history).map(
                ([testName, attempts]) => (
                  <Paper key={testName} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testName}
                    </Typography>
                    {Array.isArray(attempts) ? (
                      attempts.map((attempt, index) => (
                        <Box key={index} sx={{ mt: 1, pl: 2 }}>
                          <Typography variant="body2">
                            <strong>Попытка {index + 1}:</strong>
                          </Typography>
                          <Typography variant="body2">
                            Правильных ответов: {attempt.correctAnswers}
                          </Typography>
                          <Typography variant="body2">
                            Процент выполнения: {attempt.percentage}%
                          </Typography>
                          <Typography variant="body2">
                            Оценка: {attempt.grade}
                          </Typography>
                        </Box>
                      ))
                    ) : (
                      <Typography variant="body2" sx={{ pl: 2 }}>
                        Неверный формат данных по попыткам
                      </Typography>
                    )}
                  </Paper>
                )
              )}
            </Box>
          ) : (
            <Typography variant="body1">Нет данных о тестах</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default UserProgressCard;
