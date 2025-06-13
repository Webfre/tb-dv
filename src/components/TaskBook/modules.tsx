import { practiceMock } from "../../DB/taskData";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import styles from "./TaskBook.module.scss";
import { SiSass } from "react-icons/si";

export interface TaskModule {
  id: string;
  title: string;
  taskCount: number;
  icon: React.ReactElement;
}

export const modules: TaskModule[] = [
  {
    id: "HTML",
    title: "HTML",
    taskCount: practiceMock.filter((task) => task.module === "HTML").length,
    icon: <DiHtml5 className={styles.iconTop} />,
  },
  {
    id: "CSS",
    title: "CSS",
    taskCount: practiceMock.filter((task) => task.module === "CSS").length,
    icon: <IoLogoCss3 className={styles.iconTop} />,
  },
  {
    id: "SCSS",
    title: "SCSS",
    taskCount: practiceMock.filter((task) => task.module === "SCSS").length,
    icon: <SiSass className={styles.iconTop} />,
  },
  {
    id: "JavaScript",
    title: "JavaScript",
    taskCount: practiceMock.filter((task) => task.module === "JavaScript")
      .length,
    icon: <IoLogoJavascript className={styles.iconTop} />,
  },
];
