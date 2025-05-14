import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Stack,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { modules } from "./modules";

const TaskBook: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useCheckCourseAccessQuery();
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const hasAccess = data?.hasAccess;

  const handleClick = (id: string) => {
    navigate(`/tasks/${id}`);
  };

  const getModuleProgress = (moduleId: string, taskCount: number) => {
    const solvedCount = solvedTasks.filter(
      (solved) => solved.module === moduleId
    ).length;

    const percent =
      taskCount > 0 ? Math.round((solvedCount / taskCount) * 100) : 0;

    return { solvedCount, totalCount: taskCount, percent };
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Электронный задачник
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Практикуй навыки frontend-разработки с помощью интерактивных задач по
        HTML, CSS, JavaScript и др. Выбирай модуль, решай задания и повышай свой
        уровень!
      </Typography>

      <Grid container spacing={3}>
        {modules.map((item) => {
          const { solvedCount, totalCount, percent } = getModuleProgress(
            item.id,
            item.taskCount
          );

          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                onClick={() => handleClick(item.id)}
                sx={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  transition: "0.2s",
                  "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {item.icon}
                    <Box>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography color="text.secondary">
                        {item.taskCount} задач
                      </Typography>
                    </Box>
                  </Stack>

                  {hasAccess && (
                    <Box mt={2}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        Пройдено: {solvedCount} из {totalCount}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={percent}
                        sx={{ height: 8, borderRadius: 5 }}
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TaskBook;
