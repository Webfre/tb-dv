import React from "react";
import styles from "./LikeSection.module.scss";

import {
  FaUserCheck,
  FaInfinity,
  FaUserCog,
  FaTools,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaUserCheck />,
    title: "Постоянная поддержка менторов",
  },
  {
    icon: <FaInfinity />,
    title: "Доступ к платформе без ограничений",
  },
  {
    icon: <FaUserCog />,
    title: "Индивидуальный подход",
  },
  {
    icon: <FaTools />,
    title: "Больше практик и реальных кейсов",
  },
  {
    icon: <FaSearch />,
    title: "Поиск слабых мест",
  },
  {
    icon: <FaRocket />,
    title: "Современные инструменты и технологии",
  },
];

const LikeSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Почему нас выбирают?</h2>
      <p className={styles.description}>
        Поддержка менторов, свободный темп и индивидуальный подход — всё для
        вашего развития.
      </p>

      <section className={styles.listCard}>
        <div className={styles.cards}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.text}>{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LikeSection;
