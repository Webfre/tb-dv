import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { dataHome } from "./dataHome";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <Container className={styles.home}>
      <Box className={styles.intro} mb={4} mt={4}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Добро пожаловать на Frontarium
        </Typography>

        <Typography variant="body1" paragraph>
          Мы — образовательная платформа, ориентированная на подготовку
          frontend-специалистов. Здесь вы найдете систематизированный подход к
          обучению, охватывающий как базовый, так и продвинутый уровни. Подходит
          для подготовки к позициям Junior и Middle разработчиков.
        </Typography>

        <Typography variant="body1" paragraph>
          В нашем приложении реализована единая система отслеживания прогресса
          по темам и задачам. Это ваш личный трекер развития в профессии
          frontend-разработчика.
        </Typography>
      </Box>

      {dataHome.map((feature, index) => (
        <Box key={index} className={styles.feature} mb={4}>
          <Typography
            sx={{ color: "rgb(42, 108, 178)" }}
            variant="h5"
            gutterBottom
          >
            {feature.title}
          </Typography>
          <Typography variant="body1">{feature.desc}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
