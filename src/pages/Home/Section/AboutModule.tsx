import { useEffect, useState } from "react";
import { courseList } from "../../../DB";
import sectionStyles from "../MainLayout.module.scss";
import styles from "./AboutModule.module.scss";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

export const categories = [
  { id: "professions", title: "Профессии" },
  { id: "technologies", title: "Технологии" },
  { id: "free", title: "Бесплатно" },
  { id: "practice", title: "Практика" },
];

interface AboutModuleProps {
  title?: string;
}

const AboutModule: React.FC<AboutModuleProps> = ({ title }) => {
  const [activeId, setActiveId] = useState<string>("professions");
  const filteredCourses = courseList.filter((item) => item.type === activeId);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const categoryExists = categories.some((cat) => cat.id === id);
      if (categoryExists) {
        setActiveId(id);
      }
    }
  }, [location]);

  return (
    <div className={sectionStyles.section}>
      <div
        className={classNames(sectionStyles.sectionInner_main, {
          [sectionStyles.noPadding]: title,
        })}
      >
        <h2 className={styles.title}>{title || "Обучение"}</h2>

        <p className={styles.subtitle}>
          Более 30 программ обучения на нашей платформе.
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
