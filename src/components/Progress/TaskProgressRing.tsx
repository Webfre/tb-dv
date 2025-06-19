import React, { useEffect, useState, useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { getFilteredTopics } from "../../lib/getFilteredTopics";
import { useGetSolvedTasksQuery } from "../../api/progressApi";
import { courseList, mockTopics } from "../../DB";
import styles from "./PracticalWorksProgressRing.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectIsProByCourseId } from "../../store/accessSlice";

interface TaskProgressRingProps {
  courseId: string;
}

const TaskProgressRing: React.FC<TaskProgressRingProps> = ({ courseId }) => {
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const [progress, setProgress] = useState(0);

  const includePro = useSelector((state: RootState) =>
    selectIsProByCourseId(state, Number(courseId))
  );

  const { totalTasks, solvedCount, taskProgress } = useMemo(() => {
    const course = courseList.find((c) => c.id.toString() === courseId);
    if (!course) return { totalTasks: 0, solvedCount: 0, taskProgress: 0 };

    const topicIds = course.courseId;

    const topicsIsPro = getFilteredTopics(mockTopics, {
      courseIds: topicIds,
      includePro,
    });

    const topics = topicsIsPro.filter((topic) => topicIds.includes(topic.id));
    const allPracticeIdSet = new Set<string>();

    topics.forEach((topic) => {
      topic.chapters.forEach((chapter) => {
        chapter.practiceIds?.forEach((id) => allPracticeIdSet.add(id));
      });
    });

    const allPracticeIds = Array.from(allPracticeIdSet);
    const total = allPracticeIds.length;
    const solved = allPracticeIds.filter((id) =>
      solvedTasks.some((task) => task.id === id)
    ).length;

    const progress = total > 0 ? (solved / total) * 100 : 0;

    return {
      totalTasks: total,
      solvedCount: solved,
      taskProgress: progress,
    };
  }, [solvedTasks]);

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
        Решено задач: {solvedCount} из {totalTasks}
      </Typography>
    </Box>
  );
};

export default TaskProgressRing;
