import styles from "./AboutSection.module.scss";
import sectionStyles from "../Home.module.scss";
import { FaLaptopCode } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { PiGameControllerDuotone } from "react-icons/pi";

const AboutSection = () => {
  return (
    <div className={sectionStyles.section}>
      <div className={sectionStyles.sectionInner_main}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>О платформе</h2>
          <button className={styles.pulseButton} aria-label="Смотреть видео">
            <FaPlay />
          </button>
        </div>

        <div className={styles.grid}>
          <div className={styles.block1}>
            <div className={styles.blockContent}>
              <h3>Доступ в любое время</h3>
              <ul className={styles.customList}>
                <li>Учитесь где угодно: все материалы доступны онлайн</li>
                <li>Просмотр лекций с любого устройства</li>
              </ul>
            </div>
            <div className={styles.blockIcon}>
              <FaLaptopCode className={styles.icon} />
            </div>
          </div>

          <div className={styles.block2}>
            <div className={styles.blockContent}>
              <h3>Система тестирования</h3>
              <ul className={styles.customList}>
                <li>После каждого модуля — интерактивные тесты</li>
                <li>Отслеживание прогресса в личном кабинете</li>
              </ul>
            </div>
            <div className={styles.blockIcon}>
              <FaCheckCircle className={styles.icon} />
            </div>
          </div>

          <div className={styles.rowBlocks}>
            <div className={styles.block3}>
              <div className={styles.blockContent}>
                <h3>Флэшбек</h3>
                <ul className={styles.customList}>
                  <li>Повторение пройденных тем</li>
                  <li>Определить пробелы в знаниях</li>
                </ul>
              </div>
              <div className={styles.blockIcon}>
                <FaHistory className={styles.icon} />
              </div>
            </div>

            <div className={styles.block4}>
              <div className={styles.blockContent}>
                <h3>Лекции</h3>
                <ul className={styles.customList}>
                  <li>Конспекты каждой лекции</li>
                  <li>Ссылки на материалы</li>
                </ul>
              </div>
              <div className={styles.blockIcon}>
                <FaBookOpen className={styles.icon} />
              </div>
            </div>

            <div className={styles.block5}>
              <div className={styles.blockContent}>
                <h3>Задачник</h3>
                <ul className={styles.customList}>
                  <li>Задачи по каждой теме</li>
                  <li>Примеры решений</li>
                </ul>
              </div>
              <div className={styles.blockIcon}>
                <FaClipboardList className={styles.icon} />
              </div>
            </div>
          </div>

          <div className={styles.block1}>
            <div className={styles.blockContent}>
              <h3>Работа с реальными кейсами</h3>
              <ul className={styles.customList}>
                <li>Проекты, приближённые к боевым условиям</li>
                <li>Разбор best practices и code review</li>
              </ul>
            </div>
            <div className={styles.blockIcon}>
              <BsCodeSlash className={styles.icon} />
            </div>
          </div>

          <div className={styles.block2}>
            <div className={styles.blockContent}>
              <h3>Игры</h3>
              <ul className={styles.customList}>
                <li>Тематические игры для закрепления знаний</li>
                <li>Интерактивные задачи в игровом формате</li>
              </ul>
            </div>
            <div className={styles.blockIcon}>
              <PiGameControllerDuotone className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
