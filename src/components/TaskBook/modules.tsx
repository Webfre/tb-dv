import CodeIcon from "@mui/icons-material/Code"; // JS
import HtmlIcon from "@mui/icons-material/Language"; // HTML
import CssIcon from "@mui/icons-material/Style"; // CSS
import ReactIcon from "@mui/icons-material/IntegrationInstructions"; // React

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
    taskCount: 12,
    icon: <HtmlIcon color="primary" />,
  },
  // { id: "css", title: "CSS", taskCount: 8, icon: <CssIcon color="primary" /> },
  // {
  //   id: "js",
  //   title: "JavaScript",
  //   taskCount: 20,
  //   icon: <CodeIcon color="primary" />,
  // },
  // {
  //   id: "react",
  //   title: "React",
  //   taskCount: 15,
  //   icon: <ReactIcon color="primary" />,
  // },
];
