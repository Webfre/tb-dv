import React from "react";
import { Alert, AlertTitle, Paper, Stack, Typography } from "@mui/material";
import { FaGraduationCap, FaComments } from "react-icons/fa";
import styles from "./NoCoursesAvailable.module.scss";
import { useNavigate } from "react-router-dom";
import { FcLock } from "react-icons/fc";
import BtnCustom from "../../ui/BtnCustom";

const NoCoursesAvailable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Alert
        icon={<FcLock size={24} />}
        sx={{
          mb: 4,
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
          color: "#111",
          fontSize: "15px",
          lineHeight: 1.6,
        }}
      >
        <AlertTitle>У вас ещё нет доступных курсов для обучения.</AlertTitle>
        Если вы не уверены с чего начать — мы поможем вам выбрать подходящее
        направление и технологию для обучения.
        <Stack direction="row" spacing={2} mt={2}>
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
        </Stack>
      </Alert>

      <Paper className={styles.wrapper} elevation={2}>
        <Typography variant="h5" className={styles.title}>
          Можете начать Бесплатно
        </Typography>

        <Typography variant="body1" className={styles.subtitle}>
          Мы предоставляем широкий спектр бесплатных материалов и инструментов,
          чтобы каждый мог начать обучение без финансовых барьеров. Вы получаете
          доступ к:
        </Typography>

        <ul className={styles.benefitsList}>
          <li onClick={() => navigate("/panel/cheatsheet")}>
            <strong>Материалам</strong> статьи и интерактивные заметки по
            ключевым темам frontend-разработки
          </li>
          <li onClick={() => navigate("/panel/taskbook")}>
            <strong>Задачнику</strong> практические задания с возможностью
            посмотреть решения
          </li>
          <li>
            <strong>Тестированию</strong> тематические тесты для самопроверки и
            закрепления знаний
          </li>
          <li>
            <strong>Проектным работам</strong> доступ к реальным учебным
            проектам, которые можно добавить в портфолио
          </li>
          <li>
            <strong>Играм</strong> интерактивные задания и мини-игры, которые
            помогают изучать код весело и эффективно
          </li>
          <li>
            <strong>Виртуальному собеседованию</strong> помогает выявить пробелы
            и уровень подготовки (грейд)
          </li>
        </ul>
      </Paper>
    </>
  );
};

export default NoCoursesAvailable;
