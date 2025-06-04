import React from "react";
import styles from "./StackSection.module.scss";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaVuejs,
  FaAngular,
  FaGitAlt,
  FaNodeJs,
  FaNpm,
  FaYarn,
  FaGithub,
  FaDocker,
  FaJenkins,
  FaFigma,
  FaJira,
  FaSlack,
  FaJsSquare,
  FaJava,
  FaPython,
  FaWindows,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMui,
  SiAntdesign,
  SiVite,
  SiWebpack,
  SiRedux,
  SiJest,
  SiPostman,
  SiTailwindcss,
  SiStorybook,
} from "react-icons/si";

const icons = [
  <FaJsSquare style={{ color: "#f7df1e" }} />, // JavaScript
  <FaHtml5 style={{ color: "#e34f26" }} />, // HTML5
  <FaCss3Alt style={{ color: "#1572b6" }} />, // CSS3
  <FaSass style={{ color: "#cc6699" }} />, // Sass
  <SiMui style={{ color: "#007fff" }} />, // MUI (Material UI)
  <SiAntdesign style={{ color: "#1677ff" }} />, // Ant Design
  <FaReact style={{ color: "#61dafb" }} />, // React
  <FaGitAlt style={{ color: "#f1502f" }} />, // Git
  <FaAngular style={{ color: "#dd0031" }} />, // Angular
  <SiJest style={{ color: "#c21325" }} />, // Jest
  <FaNodeJs style={{ color: "#339933" }} />, // Node.js
  <FaVuejs style={{ color: "#42b883" }} />, // Vue.js
  <FaNpm style={{ color: "#cb3837" }} />, // npm
  <FaYarn style={{ color: "#2c8ebb" }} />, // Yarn
  <FaGithub style={{ color: "#181717" }} />, // GitHub
  <FaDocker style={{ color: "#2496ed" }} />, // Docker
  <FaJenkins style={{ color: "#d33833" }} />, // Jenkins
  <SiTypescript style={{ color: "#3178c6" }} />, // TypeScript
  <FaFigma style={{ color: "#f24e1e" }} />, // Figma
  <FaJira style={{ color: "#0052cc" }} />, // Jira
  <FaSlack style={{ color: "#4a154b" }} />, // Slack
  <FaJava style={{ color: "#007396" }} />, // Java
  <FaPython style={{ color: "#3776ab" }} />, // Python
  <FaWindows style={{ color: "#0078d6" }} />, // Windows
  <SiVite style={{ color: "#646cff" }} />, // Vite
  <SiWebpack style={{ color: "#8ed6fb" }} />, // Webpack
  <SiRedux style={{ color: "#764abc" }} />, // Redux
  <SiPostman style={{ color: "#ff6c37" }} />, // Postman
  <SiTailwindcss style={{ color: "#38bdf8" }} />, // Tailwind
  <SiStorybook style={{ color: "#ff4785" }} />, // Storybook
];

const StackSection: React.FC = () => {
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const iconsRow1 = [...shuffleArray(icons), ...shuffleArray(icons)];
  const iconsRow2 = [...shuffleArray(icons), ...shuffleArray(icons)];
  const iconsRow3 = [...shuffleArray(icons), ...shuffleArray(icons)];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Актуальные технологии</h2>
        <div className={styles.iconRows}>
          <div className={styles.mask}>
            <div className={`${styles.row} ${styles.left}`}>
              {iconsRow1.map((icon, idx) => (
                <div key={`r1-${idx}`} className={styles.icon}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mask}>
            <div className={`${styles.row} ${styles.right}`}>
              {iconsRow2.map((icon, idx) => (
                <div key={`r2-${idx}`} className={styles.icon}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mask}>
            <div className={`${styles.row} ${styles.left}`}>
              {iconsRow3.map((icon, idx) => (
                <div key={`r3-${idx}`} className={styles.icon}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
