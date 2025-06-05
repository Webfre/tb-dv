import styles from "./LearningProcessSection.module.scss";
import sectionStyles from "../MainLayout.module.scss";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaTasks,
  FaVial,
  FaRegFileCode,
  FaUserCheck,
} from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const LearningProcessSection = () => {
  return (
    <div
      className={`${sectionStyles.section} ${sectionStyles.withBackgroundBlobs}`}
    >
      <div className={sectionStyles.sectionInner_main}>
        <h2 className={styles.title}>Как проходит обучение</h2>
        <div className={styles.grid}>
          <div className={styles.step}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <h3>Погружение в профессию</h3>
            <p>
              Вы выбираете профессию или технологию и начинаете с самого начала.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <FaChalkboardTeacher />
            </div>
            <h3>Лекции и теоретическая база</h3>
            <p>К каждой главе прилагаются конспекты и ссылки на материалы.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <BsCameraVideo />
            </div>
            <h3>Видео-объяснения</h3>
            <p>
              Видео сопровождают каждый модуль и помогают лучше понять материал.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <FaTasks />
            </div>
            <h3>Практика на каждый день</h3>
            <p>Решаете задачи по каждой теме, применяя знания на практике.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <MdAssignmentTurnedIn />
            </div>
            <h3>Тесты после каждой главы</h3>
            <p>
              Проверяете себя с помощью интерактивных тестов и отслеживаете
              прогресс.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <FaVial />
            </div>
            <h3>Финальные задания</h3>
            <p>
              Решаете задачи по ТЗ и отправляете ментору на проверку и ревью.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <FaRegFileCode />
            </div>
            <h3>Формирование портфолио</h3>
            <p>
              Собираете реальные проекты в своё портфолио для успешного старта
              карьеры.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <FaUserCheck />
            </div>
            <h3>Подготовка к трудоустройству</h3>
            <p>
              Индивидуальные консультации и советы по выходу на рынок труда.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <PiStudentBold />
            </div>
            <h3>Повторение и развитие</h3>
            <p>
              Возвращаетесь к материалам, разбираете новые кейсы и продолжаете
              обучение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningProcessSection;
