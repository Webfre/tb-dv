import styles from "./IntroSection.module.scss";
import sectionStyles from "../Home.module.scss";

const IntroSection = () => {
  return (
    <div
      className={`${sectionStyles.section} ${sectionStyles.withBackgroundBlobs}`}
    >
      <div className={sectionStyles.sectionInner}>
        <h1 className={styles.title}>
          <span className={styles.accent1}>Фронтенд</span> — это не только{" "}
          <span className={styles.accent2}>код</span> <br />
          Это магия, которая оживляет{" "}
          <span className={styles.accent1}>идеи</span>
        </h1>

        <p className={styles.subtitle}>
          <strong>Frontarium</strong> — платформа, где учат создавать <br />
          современные веб-приложения.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primary}>Давайте начнём</button>
          <button className={styles.secondary}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
