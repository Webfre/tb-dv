import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControlLabel,
  Switch,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BtnCustom from "../../ui/BtnCustom";
import styles from "./TaskList.module.scss";

interface TaskFiltersProps {
  difficulty: number | null;
  onDifficultyChange: (value: number | null) => void;
  topic: string | null;
  onTopicChange: (value: string | null) => void;
  allTopics: string[];
  onReset: () => void;
  showUnsolved: boolean;
  onShowUnsolvedChange: (value: boolean) => void;
  hasAccess: boolean | undefined;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({
  difficulty,
  onDifficultyChange,
  topic,
  onTopicChange,
  allTopics,
  onReset,
  showUnsolved,
  onShowUnsolvedChange,
  hasAccess,
}) => {
  const handleTopicChange = (event: SelectChangeEvent<string>) => {
    onTopicChange(event.target.value || null);
  };

  return (
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
        <FilterAltIcon sx={{ mr: 1 }} /> Фильтры задач:
      </Typography>

      {hasAccess && (
        <Box className={styles.filterSolved}>
          <FormControlLabel
            label="Показать нерешённые"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "0.895rem",
                color: "#000000",
              },
            }}
            control={
              <Switch
                checked={showUnsolved}
                onChange={(e) => onShowUnsolvedChange(e.target.checked)}
              />
            }
          />
        </Box>
      )}

      <Box className={styles.filterBlock}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Уровень сложности:
          </Typography>
          <Stack direction="row" spacing={0.5}>
            {Array.from({ length: 5 }, (_, index) => {
              const value = index + 1;
              const isSelected = difficulty === value;
              return (
                <IconButton
                  key={index}
                  size="small"
                  onClick={() => onDifficultyChange(isSelected ? null : value)}
                  sx={{ p: 0.5 }}
                >
                  {value <= (difficulty ?? 0) ? (
                    <StarIcon sx={{ color: "#000" }} />
                  ) : (
                    <StarBorderIcon sx={{ color: "#ccc" }} />
                  )}
                </IconButton>
              );
            })}
          </Stack>
        </Box>

        <Box display="flex" gap={2}>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Тема</InputLabel>
              <Select
                value={topic || ""}
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

          <BtnCustom variant="outlined" onClick={onReset} text="Сбросить" />
        </Box>
      </Box>
    </Box>
  );
};

export default TaskFilters;
