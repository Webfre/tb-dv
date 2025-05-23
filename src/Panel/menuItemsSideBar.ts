import ViewStreamIcon from "@mui/icons-material/ViewStream";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import CodeIcon from "@mui/icons-material/Code";
import AttachmentIcon from "@mui/icons-material/Attachment";
import QuizIcon from "@mui/icons-material/Quiz";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ReplayIcon from "@mui/icons-material/Replay";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
}

export const menuItemsSideBar: MenuItem[] = [
  {
    id: 100,
    title: "Курс",
    url: "/panel/course",
    icon: ImportContactsIcon,
  },
  {
    id: 1,
    title: "Задачник",
    url: "/panel/taskbook",
    icon: ViewStreamIcon,
  },
  {
    id: 2,
    title: "Навыки",
    url: "/panel/roadmap",
    icon: PsychologyAltIcon,
  },
  {
    id: 3,
    title: "Кодинг",
    url: "/panel/livecode",
    icon: CodeIcon,
  },
  {
    id: 4,
    title: "Шпаргалка",
    url: "/panel/cheatsheet",
    icon: AttachmentIcon,
  },
  {
    id: 5,
    title: "Cобеседование",
    url: "/panel/interview",
    icon: QuizIcon,
  },
  {
    id: 6,
    title: "Портфолио",
    url: "/panel/projects",
    icon: FolderSharedIcon,
  },
  {
    id: 7,
    title: "Флешбэк",
    url: "/panel/flashback",
    icon: ReplayIcon,
  },
];
