import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Box, Stack } from "@mui/material";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { hasAccessToCourses } from "../../lib/hasAccessToCourses";
import { CustomLinearProgress } from "../../ui/CustomLinearProgress";
import { HintBlock } from "../../ui/HintBlock";
import { modules } from "./modules";
import TaskListPage from "../../pages/TaskListPage/TaskListPage";
import styles from "./TaskBook.module.scss";
import classNames from "classnames";

const TaskBook: React.FC = () => {
  const { data } = useCheckCourseAccessQuery();
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const hasAccess = hasAccessToCourses(data?.accessCourse || []);

  const handleClick = (id: string) => {
    setSelectedModuleId(id);
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
    <Box p={2}>
      <HintBlock
        text="Электронный задачник — это интерактивный инструмент для практики веб-разработки. 
        Выберите модуль (HTML, CSS, JavaScript и др.), определите тему и уровень сложности, 
        решайте задачи с чёткими условиями и при необходимости — изучайте готовые решения для закрепления материала."
      />

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
                className={classNames(styles.card, {
                  [styles.selected]: item.id === selectedModuleId,
                })}
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

                      <CustomLinearProgress
                        value={percent}
                        backgroundColor="#f0f0f0"
                        backgroundColorPercent="#846ee6"
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {selectedModuleId && <TaskListPage moduleId={selectedModuleId} />}
    </Box>
  );
};

export default TaskBook;
