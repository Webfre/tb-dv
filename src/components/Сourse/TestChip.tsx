import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import styles from "./TestChip.module.scss";

interface TestChipProps {
  testTitle: string;
  attempts: number;
  maxAttempts: number;
  onClick?: (e: React.MouseEvent) => void;
}

const TestChip: React.FC<TestChipProps> = ({
  testTitle,
  attempts,
  maxAttempts,
  onClick,
}) => {
  return (
    <Box className={styles.testChip} onClick={onClick}>
      <QuizIcon fontSize="small" className={styles.icon} />
      <Typography variant="body2" className={styles.title}>
        {testTitle}
      </Typography>
      <Tooltip title="Количество попыток пройденного теста">
        <Box className={styles.attempts}>
          {attempts} / {maxAttempts}
        </Box>
      </Tooltip>
    </Box>
  );
};

export default TestChip;
