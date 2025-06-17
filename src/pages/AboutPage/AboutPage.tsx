import React from "react";
import styles from "./AboutPage.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  FaCode,
  FaQuestionCircle,
  FaUndo,
  FaCheckCircle,
  FaHandsHelping,
  FaTasks,
  FaUserFriends,
  FaVideo,
  FaBook,
  FaInfinity,
  FaLaptopCode,
  FaSearch,
  FaBrain,
  FaBriefcase,
  FaComments,
  FaGamepad,
  FaProjectDiagram,
  FaClipboardCheck,
} from "react-icons/fa";
import ReviewBannerSection from "../Home/Section/ReviewBannerSection";

const features = [
  { icon: <FaCode />, label: "Работа с кодом" },
  { icon: <FaQuestionCircle />, label: "Тестирование" },
  { icon: <FaUndo />, label: "Флэшбек (повторение)" },
  { icon: <FaCheckCircle />, label: "Код ревью" },
  { icon: <FaHandsHelping />, label: "Помощь менторов" },
  { icon: <FaTasks />, label: "Свой задачник с решениями" },
  { icon: <FaUserFriends />, label: "Индивидуальные встречи и вебинары" },
  { icon: <FaVideo />, label: "Видео и текстовые лекции" },
  { icon: <FaBook />, label: "Материалы" },
  { icon: <FaInfinity />, label: "Безграничный доступ" },
  { icon: <FaLaptopCode />, label: "Онлайн-собеседования" },
  { icon: <FaSearch />, label: "Ассистент слабых мест" },
  { icon: <FaBrain />, label: "Развитие навыков и карта роста" },
  { icon: <FaBriefcase />, label: "Портфолио" },
  { icon: <FaComments />, label: "Подготовка к собеседованиям" },
  { icon: <FaGamepad />, label: "Игры для изучения" },
  { icon: <FaProjectDiagram />, label: "Видео проекты" },
  { icon: <FaClipboardCheck />, label: "Практические работы" },
];

const AboutPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location);
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.page}>
      <section className={styles.section} id="about">
        <h2 className={styles.title}>О платформе</h2>
        <p className={styles.text}>
          <strong>Frontarium</strong> — это обучающая платформа для
          frontend-разработчиков. Мы объединяем практику, теорию и
          наставничество, чтобы помочь вам освоить современные веб-технологии.
          Наша цель — не просто обучать, а готовить специалистов, готовых к
          реальной работе.
        </p>

        <p className={styles.subtext}>
          Если вы хотите узнать подробнее о платформе и как проходит обучение —
          свяжитесь с нами любым удобным для вас способом. Мы с радостью ответим
          на все ваши вопросы и организуем встречу с нашими преподавателями,
          которые расскажут всё в деталях.
        </p>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{feature.icon}</div>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="contacts">
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.text}>
          По всем вопросам вы можете связаться с нами:
        </p>
        <ul className={styles.contactList}>
          <li>
            Email:{" "}
            <a href="mailto:support@frontarium.ru">support@frontarium.ru</a>
          </li>
          <li>
            Телефон: <a href="tel:+79998887766">+7 (999) 888-77-66</a>
          </li>
          <li>
            Telegram (канал):{" "}
            <a href="https://t.me/frontarium" target="_blank" rel="noreferrer">
              @frontarium
            </a>
          </li>
          <li>
            Telegram (тех. поддержка):{" "}
            <a href="https://t.me/frontarium" target="_blank" rel="noreferrer">
              @frontarium
            </a>
          </li>
        </ul>
      </section>

      <ReviewBannerSection />
    </div>
  );
};

export default AboutPage;
