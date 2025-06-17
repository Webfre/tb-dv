import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { CourseCard } from "./CourseCard";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { getAccessibleCourses } from "../../lib/hasAccessToCourses";
import { courseList } from "../../DB";
import Confetti from "react-confetti";
import styles from "./Course.module.scss";
import NoCoursesAvailable from "./NoCoursesAvailable";

const CourseList: React.FC = () => {
  const { data } = useCheckCourseAccessQuery();
  const accessCourses = data?.accessCourse || [];
  const filteredCourses = getAccessibleCourses(courseList, accessCourses);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const firstVisitFlag = localStorage.getItem("first_visit_course");

    if (!firstVisitFlag) {
      setShowConfetti(true);
      setIsFirstVisit(true);
      localStorage.setItem("first_visit_course", "true");

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, []);

  return (
    <Box p={2}>
      {showConfetti && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
          }}
        >
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </Box>
      )}

      {isFirstVisit && (
        <Paper elevation={3} className={styles.headerCard}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Добро пожаловать во Frontarium!
          </Typography>
          <Typography variant="body1">
            Образовательная платформа, ориентированная на подготовку
            frontend-специалистов. Выберите свой путь и начните обучение с
            лучших курсов прямо сейчас!
          </Typography>
        </Paper>
      )}

      {filteredCourses.length === 0 ? (
        <NoCoursesAvailable />
      ) : (
        filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
          />
        ))
      )}
    </Box>
  );
};

export default CourseList;
