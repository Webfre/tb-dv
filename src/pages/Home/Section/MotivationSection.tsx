import styles from "./MotivationSection.module.scss";
import sectionStyles from "../MainLayout.module.scss";
import { FaRocket, FaCubes, FaBrain } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";

const MotivationSection = () => {
  return (
    <div className={sectionStyles.section}>
      <div className={sectionStyles.sectionInner_main}>
        <h2 className={styles.title}>О важном</h2>

        <p className={styles.subtitle}>
          Мы — платформа, ориентированная исключительно <br /> на{" "}
          <strong>Frontend-разработку</strong>. Мы не распыляемся. Мы копаем
          вглубь.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaCubes className={styles.icon} />
            <h3>Сначала *как*, потом *что*</h3>
            <p>
              Вы научитесь не просто писать код — вы поймёте <em>зачем</em> вы
              его пишете и какую пользу он приносит продукту.
            </p>
          </div>

          <div className={styles.card}>
            <FaBrain className={styles.icon} />
            <h3>От базы — к бою</h3>
            <p>
              Начинаем с простого — как сверстать одностраничник и покрасить
              кнопку. А заканчиваем сложными интерфейсами, архитектурой, и
              бизнес-логикой.
            </p>
          </div>

          <div className={styles.card}>
            <FaRocket className={styles.icon} />
            <h3>Реальные перспективы</h3>
            <p>
              Проекты, портфолио, подготовка к собеседованиям и выход на рынок —
              мы с вами до конца.
            </p>
          </div>
        </div>

        <div className={styles.motivationBox}>
          <GiLaptop className={styles.emoji} />
          <blockquote>
            <p>
              <strong>Письмо от платформы разработчику:</strong>
              <br />
              «Ты не просто выучишь React — ты сможешь объяснить его бабушке. А
              значит, справишься с любым техническим собеседованием. Мы верим в
              тебя. Ну, почти. Остальное зависит от VS Code и кофе.»
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default MotivationSection;
