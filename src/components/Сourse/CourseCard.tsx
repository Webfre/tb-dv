import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courseList, mockTopics } from "../../DB";
import { calculateTopicProgress } from "../../lib/calculateTopicProgress";
import { useGetUserProgressQuery } from "../../api/progressApi";
import styles from "./Course.module.scss";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
}) => {
  const navigate = useNavigate();
  const [filteredTopics, setFilteredTopics] = useState<typeof mockTopics>([]);
  const { data: progressData } = useGetUserProgressQuery({
    courseId: String(id),
  });

  const handleNavigate = () => {
    navigate(`/course-access/${id}`);
  };

  const isTestPassed = (key: string): boolean => {
    if (!progressData?.history?.[key]) return false;
    const history = progressData.history[key];
    const best = Math.max(...history.map((h: any) => h.percentage));
    return best >= 50;
  };

  const averageProgress = useMemo(() => {
    if (!progressData || filteredTopics.length === 0) return 0;

    const totalProgress = filteredTopics.reduce((acc, topic) => {
      const { progress } = calculateTopicProgress(
        topic,
        progressData,
        isTestPassed
      );
      return acc + progress;
    }, 0);

    return Math.round(totalProgress / filteredTopics.length);
  }, [filteredTopics, progressData]);

  useEffect(() => {
    if (id) {
      const foundCourse = courseList.find((course) => course.id === Number(id));

      if (foundCourse?.courseId) {
        const topics = mockTopics.filter((topic) =>
          foundCourse.courseId.includes(topic.id)
        );

        setFilteredTopics(topics);
      }
    }
  }, [id]);

  return (
    <Paper onClick={handleNavigate} elevation={3} className={styles.courseCard}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </Box>

      <Box className={styles.progressCircle}>{averageProgress}%</Box>
    </Paper>
  );
};
