import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Language";
import CssIcon from "@mui/icons-material/Style";
import ReactIcon from "@mui/icons-material/IntegrationInstructions";
import { testData } from "../../data/testData";

export interface TaskModule {
  id: string;
  title: string;
  taskCount: number;
  icon: React.ReactElement;
}

// Шаг 1: Группировка количества по category
const moduleCounts: Record<string, number> = {};

Object.values(testData).forEach((test) => {
  const category = test.category || "Без категории";
  moduleCounts[category] = (moduleCounts[category] || 0) + 1;
});

// Шаг 2: Список модулей с автоматическим taskCount
export const modules: TaskModule[] = [
  {
    id: "HTML",
    title: "HTML",
    taskCount: moduleCounts["HTML"] || 0,
    icon: <HtmlIcon color="primary" />,
  },
  {
    id: "CSS",
    title: "CSS",
    taskCount: moduleCounts["CSS"] || 0,
    icon: <CssIcon color="primary" />,
  },
  // {
  //   id: "JavaScript",
  //   title: "JavaScript",
  //   taskCount: moduleCounts["JavaScript"] || 0,
  //   icon: <CodeIcon color="primary" />,
  // },
  // {
  //   id: "React",
  //   title: "React",
  //   taskCount: moduleCounts["React"] || 0,
  //   icon: <ReactIcon color="primary" />,
  // },
];
