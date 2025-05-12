import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  CircularProgress,
  Box,
  List,
  ListItem,
  ListItemText,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUserInfoForAdminQuery } from "../../api/userApi";
import { useUpdateTaskTopicMutation } from "../../api/progressApi";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BtnCustom from "../../ui/BtnCustom";
import UserTaskForm from "./UserTaskForm";
import { toast } from "react-toastify";

const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    data: user,
    isLoading,
    error,
  } = useGetUserInfoForAdminQuery(Number(id));
  const [updateTaskTopic] = useUpdateTaskTopicMutation();

  const handleSubmitTask = async (data: {
    moduleId: string;
    taskId: string;
    resolved: boolean;
    title: string;
  }) => {
    try {
      if (!id) return;

      await updateTaskTopic({
        userId: Number(id),
        data: {
          taskId: data.taskId,
          resolved: data.resolved,
          moduleId: data.moduleId,
          title: data.title,
        },
      }).unwrap();

      toast.success("Практическая работа успешно добавлена");
    } catch (error) {
      toast.error("Ошибка при добавлении практической работы");
    }
  };

  if (isLoading) {
    return (
      <Box mt={6} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={6} textAlign="center">
        <Typography color="error">
          Ошибка загрузки данных пользователя
        </Typography>
      </Box>
    );
  }

  if (!user) return null;

  return (
    <Container>
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />

      <Paper sx={{ mt: 2, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Информация о пользователе
        </Typography>

        <Typography variant="body1">
          <strong>ФИО:</strong> {user.lastName} {user.firstName}{" "}
          {user.middleName}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1">
          <strong>Телефон:</strong> {user.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Telegram:</strong> {user.telegram || "Не указан"}
        </Typography>
        <Typography variant="body1">
          <strong>Ключ доступа:</strong> {user.accessKey || "не выдан"}
        </Typography>
        <Typography variant="body1">
          <strong>Права администратора:</strong> {user.isAdmin ? "Да" : "Нет"}
        </Typography>
      </Paper>

      <Paper sx={{ mt: 2, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Прогресс пользователя
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Решенные задачи (задачник)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {user.progress?.solvedTasks?.length ? (
              <List dense>
                {user.progress.solvedTasks.map((task, index) => (
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
            {user.progress?.taskTopics?.length ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {user.progress.taskTopics.map((topic, index) => (
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
            {user.progress?.history &&
            Object.keys(user.progress.history).length ? (
              <Box>
                {Object.entries(user.progress.history).map(
                  ([testName, attempts]) => (
                    <Paper key={testName} sx={{ p: 2, mb: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testName}
                      </Typography>
                      {attempts.map((attempt, index) => (
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
                      ))}
                    </Paper>
                  )
                )}
              </Box>
            ) : (
              <Typography variant="body1">Нет данных о тестах</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      </Paper>

      <Paper sx={{ mt: 3, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Добавить практическую работу
        </Typography>

        <UserTaskForm onSubmit={handleSubmitTask} />
      </Paper>
    </Container>
  );
};

export default UserDetails;
