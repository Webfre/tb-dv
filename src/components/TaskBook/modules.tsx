import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Language";
import CssIcon from "@mui/icons-material/Style";
import { practiceMock } from "../../data/taskData";

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
    icon: <HtmlIcon color="primary" />,
  },
  {
    id: "CSS",
    title: "CSS",
    taskCount: practiceMock.filter((task) => task.module === "CSS").length,
    icon: <CssIcon color="primary" />,
  },
  {
    id: "JavaScript",
    title: "JavaScript",
    taskCount: practiceMock.filter((task) => task.module === "JavaScript")
      .length,
    icon: <CodeIcon color="primary" />,
  },
];
