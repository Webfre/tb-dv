import React from "react";
import { NotFoundMessage } from "../../ui/NotFoundMessage";
import { FaRegSadTear } from "react-icons/fa";
import { Stack, Card, CardContent, Typography, Box } from "@mui/material";
import { PracticeTask } from "../../DB/index_type";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { renderDifficultyStars } from "./renderDifficultyStars";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: PracticeTask[];
  onSelect: (task: PracticeTask) => void;
  hasAccess: boolean | undefined;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onSelect, hasAccess }) => {
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();

  if (tasks.length === 0) {
    return (
      <NotFoundMessage
        icon={<FaRegSadTear size={32} color="#999" />}
        text="Задачи с выбранными фильтрами не найдены"
      />
    );
  }

  return (
    <Stack spacing={2}>
      {tasks.map((task) => {
        const isSolved = solvedTasks.some(
          (item) => item.id === task.id && item.module === task.module
        );

        return (
          <Card
            onClick={() => onSelect(task)}
            className={styles.taskCard}
            key={task.id}
          >
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h6">{task.title}</Typography>
                <Typography color="text.secondary">
                  {task.description}
                </Typography>

                {hasAccess && isSolved && (
                  <EditAttributesIcon
                    className={styles.iconAccess}
                    sx={{ mr: 1, fontSize: "40px" }}
                    color="success"
                    titleAccess="Задача решена"
                  />
                )}

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>{renderDifficultyStars(task.difficulty)}</Box>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default TaskList;
