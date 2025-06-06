import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { FaGraduationCap, FaComments } from "react-icons/fa";
import styles from "./NoCoursesAvailable.module.scss";
import { useNavigate } from "react-router-dom";
import BtnCustom from "../../ui/BtnCustom";

const NoCoursesAvailable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Paper className={styles.wrapper} elevation={2}>
      <Typography variant="h5" className={styles.title}>
        У вас ещё нет доступных курсов для обучения
      </Typography>

      <Typography variant="body1" className={styles.subtitle}>
        Если вы не уверены с чего начать — мы поможем вам выбрать подходящее
        направление и технологию для обучения.
      </Typography>

      <Box className={styles.buttons}>
        <BtnCustom
          text="Приобрести курс"
          icon={<FaGraduationCap />}
          customColor="#846ee6"
          variant="contained"
          onClick={() => navigate("/training")}
        />

        <BtnCustom
          text="Записаться на консультацию"
          icon={<FaComments />}
          variant="outlined"
          customColor="#846ee6"
          onClick={() => navigate("/about#contacts")}
        />
      </Box>

      <Typography variant="h5" className={styles.title}>
        Можете начать Бесплатно
      </Typography>

      <Typography variant="body1" className={styles.subtitle}>
        Мы предоставляем широкий спектр бесплатных материалов и инструментов,
        чтобы каждый мог начать обучение без финансовых барьеров. Вы получаете
        доступ к:
      </Typography>

      <ul className={styles.benefitsList}>
        <li>
          <strong>Базовым обучающим материалам</strong> статьи, видеолекции и
          интерактивные заметки по ключевым темам frontend-разработки.
        </li>
        <li>
          <strong>Задачнику</strong> практические задания с возможностью
          посмотреть решения.
        </li>
        <li>
          <strong>Тестированию</strong> тематические тесты по каждому модулю для
          самопроверки и закрепления знаний.
        </li>
        <li>
          <strong>Проектным работам</strong> доступ к реальным учебным проектам,
          которые можно добавить в портфолио.
        </li>
        <li>
          <strong>Играм</strong> интерактивные задания и мини-игры, которые
          помогают изучать код весело и эффективно.
        </li>
        <li>
          <strong>Виртуальному собеседованию</strong> система анализирует ваши
          действия и помогает определить темы для повторения и ваш текущий
          грейд.
        </li>
      </ul>
    </Paper>
  );
};

export default NoCoursesAvailable;
