import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { prDataList } from "../../DB/prDataList";
import { Progress } from "../../api/progressApi";
import { getPrWorksProgress } from "../../lib/getPrWorksProgress";
import styles from "./PracticalWorksProgressRing.module.scss";

interface ProgressRingProps {
  progressData: Progress;
}

const PracticalWorksProgressRing: React.FC<ProgressRingProps> = ({
  progressData,
}) => {
  const totalPracticalWorks = prDataList.length;
  const completedWorkIds = new Set<string>();

  prDataList.forEach((pr) => {
    const { completedPrWorksCount } = getPrWorksProgress(
      pr.moduleId,
      progressData?.taskTopics
    );

    if (completedPrWorksCount > 0) {
      const isCompleted = progressData.taskTopics.some(
        (task) => task.id === pr.id && task.resolved
      );

      if (isCompleted) {
        completedWorkIds.add(pr.id);
      }
    }
  });

  const completedPracticalWorks = completedWorkIds.size;

  const practicalProgress =
    (completedPracticalWorks / totalPracticalWorks) * 100;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.round(practicalProgress);
    if (start === end) return;

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= end) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [practicalProgress]);

  return (
    <Box className={styles.progressRingContainer}>
      <Box className={styles.progressWrapper}>
        <CircularProgress
          variant="determinate"
          value={practicalProgress}
          size={120}
          thickness={5}
          sx={{ color: "#947ef6" }}
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
        Выполнено работ: {completedPracticalWorks} из {totalPracticalWorks}
      </Typography>
    </Box>
  );
};

export default PracticalWorksProgressRing;
