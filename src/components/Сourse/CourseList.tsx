import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { getAccessibleCourses } from "../../lib/hasAccessToCourses";
import { courseList } from "../../DB";
import Confetti from "react-confetti";
import styles from "./Course.module.scss";

const CourseList: React.FC = () => {
  const { data } = useCheckCourseAccessQuery();
  const accessCourses = data?.accessCourse || [];
  const filteredCourses = getAccessibleCourses(courseList, accessCourses);
  const navigate = useNavigate();

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("first_visit_course");

    if (!isFirstVisit) {
      setShowConfetti(true);
      localStorage.setItem("first_visit_course", "true");

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, []);

  const handleNavigate = (id: number) => {
    navigate(`/course-access/${id}`);
  };

  return (
    <Box p={2}>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <Paper elevation={3} className={styles.headerCard}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Добро пожаловать на курс Frontarium!
        </Typography>
        <Typography variant="body1">
          Образовательная платформа, ориентированная на подготовку
          frontend-специалистов. Выберите свой путь и начните обучение с лучших
          курсов прямо сейчас!
        </Typography>
      </Paper>

      {filteredCourses.map((course) => (
        <Paper
          onClick={() => handleNavigate(course.id)}
          key={course.id}
          elevation={3}
          className={styles.courseCard}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              {course.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {course.description}
            </Typography>
          </Box>

          <Box className={styles.progressCircle}>40%</Box>
        </Paper>
      ))}
    </Box>
  );
};

export default CourseList;
