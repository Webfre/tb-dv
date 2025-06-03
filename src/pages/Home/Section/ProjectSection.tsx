import React, { useState } from "react";
import styles from "./ProjectSection.module.scss";

const projects = [
  {
    img: "https://cdn.skillbox.pro/landgen/blocks/universal-diploma-projects/183045/xl/dca921a9-6176-43b4-bd20-161cfc25697a.webp",
    author: "Елизавета Мелкова",
    counter: "1 / 3",
    title: "Макет лендинга и лонгрида для бюро путешествий",
    description:
      "Создайте дизайн лендинга с адаптивными версиями для компьютера, планшета и смартфона, а также лонгрид для сайта заказчика и карту маршрута.",
  },
  {
    img: "https://cdn.skillbox.pro/landgen/blocks/universal-diploma-projects/146055/xl/fc1d7828-f72f-4ab9-8e63-cf92424f1379.webp",
    author: "Алексей Иванов",
    counter: "2 / 3",
    title: "Редизайн сайта интернет-магазина",
    description:
      "Проект включает адаптивный UI, переработку каталога и оформление карточек товара для улучшения пользовательского опыта.",
  },
  {
    img: "https://cdn.skillbox.pro/landgen/blocks/universal-diploma-projects/182703/xl/f3520713-0302-4be0-8f52-ec4cfb6a3d2b.webp",
    author: "Дарья Смирнова",
    counter: "3 / 3",
    title: "Платформа онлайн-обучения",
    description:
      "Интерфейс для образовательной платформы с личным кабинетом, отслеживанием прогресса и системой уведомлений.",
  },
];

export const ProjectSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Проекты наших пользователей</h2>
      <div className={styles.grid}>
        <div className={styles.block}>
          <img src={current.img} alt={current.title} className={styles.image} />
          <div className={styles.author}>{current.author}</div>
        </div>
        <div className={styles.textBlock}>
          <span className={styles.counter}>{current.counter}</span>
          <h3 className={styles.subtitle}>{current.title}</h3>
          <p className={styles.description}>{current.description}</p>
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={handlePrev}>
              ←
            </button>
            <button className={styles.navBtn} onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
