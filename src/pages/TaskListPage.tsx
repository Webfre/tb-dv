import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, Stack, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Tooltip, IconButton } from "@mui/material";
import { practiceMock } from "../data/taskData";
import { PracticeTask } from "../components/Сourse/CourseTopic";
import TaskDrawer from "../components/TaskBook/TaskDrawer";

const TaskListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTask, setSelectedTask] = useState<PracticeTask | null>(null);

  const filteredTasks = practiceMock.filter(
    (task) => task.module.toLowerCase() === id?.toLowerCase()
  );

  const renderDifficultyStars = (level: number) => (
    <Stack direction="row" spacing={0.5}>
      {Array.from({ length: 5 }, (_, i) =>
        i < level ? (
          <StarIcon key={i} fontSize="small" sx={{ color: "#000" }} />
        ) : (
          <StarBorderIcon key={i} fontSize="small" sx={{ color: "#000" }} />
        )
      )}
    </Stack>
  );

  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Typography variant="h4">Задачи по {id?.toUpperCase()}</Typography>

        <Tooltip
          title={
            <Box>
              <Box display="flex" gap={1} alignItems="center">
                <StarBorderIcon fontSize="small" sx={{ color: "#000" }} />
                <Box>— уровень сложности:</Box>
              </Box>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>1–2 — легко</li>
                <li>3 — средне</li>
                <li>4–5 — сложно</li>
              </ul>
            </Box>
          }
          arrow
          placement="right"
        >
          <IconButton size="small" sx={{ p: 0.5 }}>
            <HelpOutlineIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <Stack spacing={2}>
        {filteredTasks.map((task) => (
          <Card
            onClick={() => setSelectedTask(task)}
            key={task.id}
            sx={{
              borderRadius: "20px",
              boxShadow: 3,
              transition: "0.2s",
              cursor: "pointer",
              "&:hover": { boxShadow: 6 },
            }}
          >
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h6">{task.title}</Typography>
                <Typography color="text.secondary">
                  {task.description}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>{renderDifficultyStars(task.difficulty)}</Box>
                  {task.topic && (
                    <Chip
                      label={task.topic}
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: "0.75rem" }}
                    />
                  )}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <TaskDrawer
        open={!!selectedTask}
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
      />
    </Box>
  );
};

export default TaskListPage;
