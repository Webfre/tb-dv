import React from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

interface ProgressHistoryEntry {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: Record<string, number[]>;
}

interface TestItemCardProps {
  testKey: string;
  testId: number;
  testName: string;
  courseId: string;
  history?: ProgressHistoryEntry[];
}

const TestItemCard: React.FC<TestItemCardProps> = ({
  testKey,
  testId,
  testName,
  courseId,
  history = [],
}) => {
  const navigate = useNavigate();
  const attempts = history.length;
  const isAnyPassed = history.some((h) => h.grade > 2);

  const handleTestClick = (
    e: React.MouseEvent,
    testKey?: string,
    chapterTitle?: string
  ) => {
    e.stopPropagation();
    if (testKey && chapterTitle) {
      navigate("/panel/test", {
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
      sx={{ mb: 1, border: "1px solid #ccc", borderRadius: 4 }}
    >
      <ListItemButton
        onClick={(e) => handleTestClick(e, testKey, testName)}
        sx={{ px: 2, py: 1.5 }}
      >
        <ListItemIcon>
          <QuizIcon sx={{ color: "#846ee6" }} />
        </ListItemIcon>

        <ListItemText primary={testName} secondary={`Попыток: ${attempts}`} />

        <Box display="flex" alignItems="center" gap={1} minWidth={100}>
          {attempts > 0 ? (
            isAnyPassed ? (
              <DoneAllIcon sx={{ color: "#846ee6" }} />
            ) : (
              <RemoveDoneIcon color="error" />
            )
          ) : (
            <Typography variant="body2" color="textSecondary">
              —
            </Typography>
          )}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default TestItemCard;
