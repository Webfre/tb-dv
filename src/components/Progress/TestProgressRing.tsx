import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Progress } from "../../api/progressApi";
import { TestDataCollection } from "../../DB/index_type";
import styles from "./PracticalWorksProgressRing.module.scss";

interface ProgressRingProps {
  progressData: Progress;
  tests: TestDataCollection;
}

const TestProgressRing: React.FC<ProgressRingProps> = ({
  progressData,
  tests,
}) => {
  const testList = Object.values(tests);
  const totalTests = testList.length;

  const successfulTests = Object.entries(progressData?.history || {}).filter(
    ([_, history]) => {
      const best = Math.max(...history.map((h: any) => h.percentage));
      return best >= 50;
    }
  ).length;

  const testProgress =
    totalTests > 0 ? (successfulTests / totalTests) * 100 : 0;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.round(testProgress);
    if (start === end) return;

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= end) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [testProgress]);

  return (
    <Box className={styles.progressRingContainer}>
      <Box className={styles.progressWrapper}>
        <CircularProgress
          variant="determinate"
          value={testProgress}
          size={120}
          thickness={5}
          sx={{ color: "#3498db" }}
        />
        <Box className={styles.progressValue}>
          <Typography
            variant="h5"
            component="div"
            className={styles.progressText}
          >
            {`${progress}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" className={styles.progressInfo}>
        Пройдено тестов: {successfulTests} из {totalTests}
      </Typography>
    </Box>
  );
};

export default TestProgressRing;
