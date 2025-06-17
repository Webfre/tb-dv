import React from "react";
import { Box, Typography, Link } from "@mui/material";
import styles from "./Footer.module.scss";
import { FaTelegramPlane, FaGithub, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.footer}>
      <Box className={styles.inner}>
        <Box className={styles.top}>
          <Typography onClick={() => navigate("/")} className={styles.logo}>
            Frontarium
          </Typography>

          <ul className={styles.contactList}>
            <li>
              Почта:{" "}
              <a href="mailto:support@frontarium.ru">support@frontarium.ru</a>
            </li>
            <li>
              Связаться: <a href="tel:+79998887766">+7 (999) 888-77-66</a>
            </li>
          </ul>

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
            <Link href="/about#about">О платформе</Link>
            <Link href="/about#contacts">Контакты</Link>
            <Link href="/feedback">Отзывы</Link>
          </Box>

          <Box className={styles.column}>
            <Typography variant="h6">Обучение</Typography>
            <Link href="/training#free">Бесплатно</Link>
            <Link href="/training#professions">Профессии</Link>
            <Link href="/training#practice">Практика</Link>
            <Link href="/training#technologies">Технологии</Link>
          </Box>

          <Box className={styles.column}>
            <Typography variant="h6">Материалы</Typography>
            <Link href="/materials">Блог</Link>
            <Link href="/materials">Справочник</Link>
            <Link href="/materials">Проекты</Link>
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
