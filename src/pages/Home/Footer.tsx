import React from "react";
import { Box, Typography, Link } from "@mui/material";
import styles from "./Footer.module.scss";
import { FaTelegramPlane, FaGithub, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.inner}>
        <Box className={styles.top}>
          <Typography className={styles.logo}>Frontarium</Typography>
          <Box className={styles.socials}>
            <Link href="#" target="_blank" className={styles.socialIcon}>
              <FaTelegramPlane />
            </Link>
            <Link href="#" target="_blank" className={styles.socialIcon}>
              <FaGithub />
            </Link>
            <Link href="#" target="_blank" className={styles.socialIcon}>
              <FaYoutube />
            </Link>
          </Box>
        </Box>

        <Box className={styles.nav}>
          <Box className={styles.column}>
            <Typography variant="h6">О нас</Typography>
            <Link href="#">О платформе</Link>
            <Link href="#">Контакты</Link>
            <Link href="#">Отзывы</Link>
          </Box>

          <Box className={styles.column}>
            <Typography variant="h6">Обучение</Typography>
            <Link href="#">Бесплатно</Link>
            <Link href="#">Профессии</Link>
            <Link href="#">Практика</Link>
            <Link href="#">Технологии</Link>
          </Box>

          <Box className={styles.column}>
            <Typography variant="h6">Материалы</Typography>
            <Link href="#">Блог</Link>
            <Link href="#">Справочник</Link>
            <Link href="#">Проекты</Link>
          </Box>

          <Box className={styles.column}>
            <Typography variant="h6">Информация</Typography>
            <Link href="#">Оплата</Link>
            <Link href="#">Как проходит обучение</Link>
            <Link href="#">Сертификаты</Link>
          </Box>

          <Box className={styles.column}>
            <Typography variant="h6">Документы</Typography>
            <Link href="#">Договор оферта</Link>
            <Link href="#">Политика конфиденциальности</Link>
            <Link href="#">Реквизиты</Link>
          </Box>
        </Box>

        <Typography variant="body2" align="center" className={styles.copy}>
          Frontarium © 2024 – {new Date().getFullYear()}. Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
