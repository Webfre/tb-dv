import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { practiceMock } from "../../DB/taskData";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import styles from "./PracticalWorksProgressRing.module.scss";

const TaskProgressRing: React.FC = () => {
  const totalTasks = practiceMock.length;
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const solvedCount = solvedTasks.length;
  const taskProgress = totalTasks === 0 ? 0 : (solvedCount / totalTasks) * 100;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.round(taskProgress);
    if (start === end) return;

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= end) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [taskProgress]);

  return (
    <Box className={styles.progressRingContainer}>
      <Box className={styles.progressWrapper}>
        <CircularProgress
          variant="determinate"
          value={taskProgress}
          size={120}
          thickness={5}
          sx={{ color: "#3f51b5" }}
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
        Решено задач: {solvedCount} из {totalTasks}
      </Typography>
    </Box>
  );
};

export default TaskProgressRing;
