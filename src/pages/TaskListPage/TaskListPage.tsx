import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  Tooltip,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { practiceMock } from "../../data/taskData";
import { PracticeTask } from "../../components/Сourse/CourseTopic";
import TaskDrawer from "../../components/TaskBook/TaskDrawer";
import BtnCustom from "../../ui/BtnCustom";

const TaskListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTask, setSelectedTask] = useState<PracticeTask | null>(null);
  const [difficultyLevel, setDifficultyLevel] = useState<number | null>(null);
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const moduleId = id?.toLowerCase() || "";
  const navigate = useNavigate();

  const allTopics = Array.from(
    new Set(
      practiceMock
        .filter((task) => task.module.toLowerCase() === moduleId)
        .map((task) => task.topic || "")
        .filter(Boolean)
    )
  );

  const filteredTasks = practiceMock.filter((task) => {
    const moduleMatch = task.module.toLowerCase() === moduleId;
    const difficultyMatch =
      difficultyLevel === null || task.difficulty === difficultyLevel;
    const topicMatch =
      topicFilter === null ||
      task.topic === topicFilter ||
      task.topicId === topicFilter;

    return moduleMatch && difficultyMatch && topicMatch;
  });

  const handleTopicChange = (event: SelectChangeEvent<string>) => {
    setTopicFilter(event.target.value || null);
  };

  const resetFilters = () => {
    setDifficultyLevel(null);
    setTopicFilter(null);
  };

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
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />
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

      {/* Фильтры */}
      <Box
        mb={4}
        p={2}
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ display: "flex", alignItems: "center" }}
        >
          <FilterAltIcon sx={{ mr: 1 }} /> Фильтры задач
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          {/* Звёздочки сложности */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Уровень сложности:
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {Array.from({ length: 5 }, (_, index) => {
                const value = index + 1;
                const isSelected = difficultyLevel === value;
                return (
                  <IconButton
                    key={index}
                    size="small"
                    onClick={() =>
                      setDifficultyLevel(isSelected ? null : value)
                    }
                    sx={{ p: 0.5 }}
                  >
                    {value <= (difficultyLevel ?? 0) ? (
                      <StarIcon sx={{ color: "#000" }} />
                    ) : (
                      <StarBorderIcon sx={{ color: "#ccc" }} />
                    )}
                  </IconButton>
                );
              })}
            </Stack>
          </Box>

          {/* Селект темы */}
          <Box display="flex" gap={2}>
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Тема</InputLabel>
                <Select
                  value={topicFilter || ""}
                  onChange={handleTopicChange}
                  label="Тема"
                  sx={{ borderRadius: "20px" }}
                >
                  <MenuItem value="">Все темы</MenuItem>
                  {allTopics.map((topic) => (
                    <MenuItem key={topic} value={topic}>
                      {topic}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <BtnCustom
              variant="outlined"
              onClick={resetFilters}
              text="Сбросить"
            />
          </Box>
        </Box>
      </Box>

      {/* Список задач */}
      <Stack spacing={2}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
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
          ))
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            py={4}
          >
            Задачи с выбранными фильтрами не найдены
          </Typography>
        )}
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
