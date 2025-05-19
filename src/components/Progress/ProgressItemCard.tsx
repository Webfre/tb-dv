import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";

interface ProgressHistoryEntry {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: Record<string, number[]>;
}

interface ProgressItemCardProps {
  testKey: string;
  testId: number;
  testName: string;
  courseId: string;
  history?: ProgressHistoryEntry[];
}

const ProgressItemCard: React.FC<ProgressItemCardProps> = ({
  testKey,
  testId,
  testName,
  courseId,
  history = [],
}) => {
  const navigate = useNavigate();
  const attempts = history.length;
  const bestPercentage =
    attempts > 0 ? Math.max(...history.map((h) => h.percentage)) : 0;

  const isFailedTwice = attempts === 2 && bestPercentage === 0;
  const progressColor: "primary" | "error" = isFailedTwice
    ? "error"
    : "primary";

  const handleTestClick = (
    e: React.MouseEvent,
    testKey?: string,
    chapterTitle?: string
  ) => {
    e.stopPropagation();
    if (testKey && chapterTitle) {
      navigate("/test", {
        state: {
          name: chapterTitle,
          selectedTest: testKey,
          courseId: courseId,
        },
      });
    }
  };

  return (
    <ListItem
      key={testId}
      disablePadding
      sx={{ mb: 1, border: "1px solid #ccc", borderRadius: 2 }}
    >
      <ListItemButton
        onClick={(e) => handleTestClick(e, testKey, testName)}
        sx={{ px: 2, py: 1.5 }}
      >
        <ListItemIcon>
          <QuizIcon color="primary" />
        </ListItemIcon>

        <ListItemText primary={testName} secondary={`Попыток: ${attempts}`} />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          minWidth={100}
        >
          <Typography variant="body2" color="textSecondary" mb={0.5}>
            {attempts > 0 ? `${Math.round(bestPercentage)}%` : "—"}
          </Typography>

          {attempts > 0 && (
            <LinearProgress
              variant="determinate"
              value={bestPercentage}
              sx={{ width: 80, height: 6, borderRadius: 5 }}
              color={progressColor}
            />
          )}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default ProgressItemCard;
