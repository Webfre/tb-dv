import React from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

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

  const isAnyPassed = Array.isArray(history)
    ? history.some((h) => h.grade > 2)
    : false;

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
        <ListItemText primary={testName} />

        <Box display="flex" alignItems="center" gap={1} minWidth={100}>
          {attempts > 0 ? (
            isAnyPassed ? (
              <CiCircleCheck
                size={24}
                color="#4caf50"
                style={{ marginRight: 8 }}
              />
            ) : (
              <CiCircleCheck
                size={24}
                color="#a71e34"
                style={{ marginRight: 8 }}
              />
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
