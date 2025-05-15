import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Paper,
  Alert,
  AlertTitle,
} from "@mui/material";
import { courseList } from "../../DB";
import VerifiedIcon from "@mui/icons-material/Verified";
import BtnCustom from "../../ui/BtnCustom";
import styles from "./CoursesPageList.module.scss";
import CourseDetailsDrawer from "./CourseDetailsDrawer";
import CourseEnrollmentModal from "./CourseEnrollmentModal";

const CoursesPageList: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number>();

  const handleOpenModal = (courseId: number) => {
    setSelectedCourseId(courseId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDrawer = (course: any) => {
    setSelectedCourse(course);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setSelectedCourse(null);
    setIsDrawerOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper
        elevation={3}
        sx={{ p: 3, mb: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Курсы Frontarium
          <VerifiedIcon className={styles.verified} color="primary" />
        </Typography>

        <Typography variant="body1" gutterBottom>
          Вы можете выбрать курс по интересующему направлению и ознакомиться с
          его содержанием, требованиями и рекомендациями. Каждый курс включает
          подробное описание программы, список тем, а также примеры заданий,
          которые помогут вам освоить нужные навыки.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Для более детальной информации нажмите на карточке "О курсе". Если
          хотите записаться или получить консультацию, воспользуйтесь кнопкой
          "Записаться".
        </Typography>
      </Paper>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Для начинающих и продолжающих обучение</AlertTitle>
        Все наши курсы рассчитаны как на тех, кто только начинает свой путь в
        Frontend-разработке и верстке сайтов, так и на тех, кто хочет изучить
        новые технологии веб-разработки и повысить свой уровень знаний. —
        <strong>
          {" "}
          С нами вы освоите современные инструменты и получите практические
          навыки для уверенного старта в IT!
        </strong>
      </Alert>

      <Grid container spacing={4}>
        {courseList.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Card elevation={3} className={styles.cardInfo}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box className={styles.cardDescr}>{course.description}</Box>

                <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>
                  {course.title}
                </Typography>

                <CardMedia
                  component="img"
                  height="160"
                  image={course.image}
                  alt={course.title}
                  sx={{ borderRadius: "20px", objectFit: "cover", mb: 2 }}
                />
              </CardContent>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography className={styles.priceInfo}>
                    {course.totalPrice.toLocaleString()} ₽
                  </Typography>
                  <Box>
                    <Typography
                      className={styles.totalPrice}
                      variant="h6"
                      sx={{ fontWeight: "bold" }}
                    >
                      {(
                        course.totalPrice / course.paymentMonths
                      ).toLocaleString()}{" "}
                      ₽/мес.
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        borderRadius: "4px",
                        px: 0.5,
                      }}
                    >
                      Рассрочка на {course.paymentMonths} мес.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <BtnCustom
                    text="О курсе"
                    variant="outlined"
                    fullWidth
                    onClick={() => handleOpenDrawer(course)}
                  ></BtnCustom>

                  <BtnCustom
                    text="Записаться"
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenModal(course.id)}
                    fullWidth
                  ></BtnCustom>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <CourseDetailsDrawer
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        handleOpenModal={handleOpenModal}
        course={selectedCourse}
      />

      {selectedCourseId && (
        <CourseEnrollmentModal
          open={isModalOpen}
          onClose={handleCloseModal}
          courseId={selectedCourseId}
        />
      )}
    </Container>
  );
};

export default CoursesPageList;
