import ViewStreamIcon from "@mui/icons-material/ViewStream";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import CodeIcon from "@mui/icons-material/Code";
import AttachmentIcon from "@mui/icons-material/Attachment";
import QuizIcon from "@mui/icons-material/Quiz";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ReplayIcon from "@mui/icons-material/Replay";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import GroupIcon from "@mui/icons-material/Group";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
  breadcrumbs?: Array<{ label: string; path: string }>;
  nested?: boolean;
  requiresAccess?: boolean;
}

export const menuItemsSideBar: MenuItem[] = [
  {
    id: 100,
    title: "Курс",
    url: "/panel/course",
    icon: ImportContactsIcon,
    breadcrumbs: [{ label: "Курсы", path: "/panel/course" }],
    requiresAccess: false,
  },
  {
    id: 1,
    title: "Задачник",
    url: "/panel/taskbook",
    icon: ViewStreamIcon,
    requiresAccess: false,
  },
  {
    id: 9,
    title: "Тесты",
    url: "/panel/test",
    icon: DoneAllIcon,
    requiresAccess: true,
  },
  {
    id: 2,
    title: "Навыки",
    url: "/panel/roadmap",
    icon: PsychologyAltIcon,
    requiresAccess: false,
  },
  // {
  //   id: 3,
  //   title: "Кодинг",
  //   url: "/panel/livecode",
  //   icon: CodeIcon,
  // },
  {
    id: 4,
    title: "Материалы",
    url: "/panel/cheatsheet",
    icon: AttachmentIcon,
    requiresAccess: false,
  },
  // {
  //   id: 5,
  //   title: "Cобеседование",
  //   url: "/panel/interview",
  //   icon: QuizIcon,
  // },
  // {
  //   id: 6,
  //   title: "Портфолио",
  //   url: "/panel/projects",
  //   icon: FolderSharedIcon,
  // },
  {
    id: 7,
    title: "Флешбэк",
    url: "/panel/flashback",
    icon: ReplayIcon,
    requiresAccess: true,
  },
  {
    id: 8,
    title: "Менторы",
    url: "/panel/mentorlist",
    icon: GroupIcon,
    nested: true,
    requiresAccess: false,
  },
];
