import React, { useState } from "react";
import styles from "./FaqSection.module.scss";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Кто проверяет мои задания?",
    answer:
      "За вами будет закреплён ментор — практикующий разработчик, который проверяет ваши задания и помогает с любыми вопросами по обучению.",
  },
  {
    question: "Выдаёте ли вы сертификаты или дипломы?",
    answer:
      "Да, мы выдаём сертификат о прохождении курса при успешной сдаче всех практических работ и прохождении тестов.",
  },
  {
    question: "На сколько рассчитаны курсы по времени?",
    answer:
      "Продолжительность обучения ориентировочная. Вы проходите курс в удобном темпе, исходя из своих целей и времени.",
  },
  {
    question: "Нужны ли начальные знания?",
    answer:
      "Нет. Курс рассчитан на новичков без опыта. Всему научим с нуля шаг за шагом.",
  },
  {
    question: "Как проходит обучение?",
    answer:
      "Обучение проходит онлайн. Также возможны индивидуальные сессии с ментором для разбора практики и получения рекомендаций.",
  },
  {
    question: "Как часто мне будут помогать?",
    answer:
      "Ментор будет сопровождать вас в процессе обучения, а также вы всегда можете обратиться в техподдержку прямо на платформе.",
  },
  {
    question: "Будет ли доступ к платформе после окончания курса?",
    answer:
      "Да. Вы сохраняете доступ к материалам, новым темам, играм, лайв-кодингу, подготовке к собеседованиям и вебинарам.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Вопросы и ответы</h2>
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.question}
              onClick={() => toggleIndex(index)}
            >
              <div className={styles.questionTitle}>{item.question}</div>
              <FaChevronDown className={styles.icon} />
            </button>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
