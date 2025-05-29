import { useState } from "react";
import { courseList } from "../../../DB";
import sectionStyles from "../Home.module.scss";
import styles from "./AboutModule.module.scss";
import classNames from "classnames";

export const categories = [
  { id: 1, title: "Профессии" },
  { id: 2, title: "Технологии" },
  { id: 3, title: "Бесплатно" },
  { id: 4, title: "Практика" },
];

const AboutModule = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const filteredCourses = courseList.filter((item) => item.typeId === activeId);

  return (
    <div className={sectionStyles.section}>
      <div className={sectionStyles.sectionInner_main}>
        <h2 className={styles.title}>Обучение</h2>

        <p className={styles.subtitle}>
          Более 20 программ обучения на нашей платформе
        </p>

        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={classNames(styles.tabButton, {
                [styles.active]: cat.id === activeId,
              })}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className={styles.cardsGrid}>
          {filteredCourses.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.cardOverlay}>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardInfo}>{item.description}</div>
                <div className={styles.cardAbout}>
                  {item.descriptionInfo.about}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutModule;
