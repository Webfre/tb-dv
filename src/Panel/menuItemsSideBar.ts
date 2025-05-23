import ViewStreamIcon from "@mui/icons-material/ViewStream";

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
}

export const menuItemsSideBar: MenuItem[] = [
  {
    id: 1,
    title: "Задачник",
    url: "/panel/taskbook",
    icon: ViewStreamIcon,
  },
  {
    id: 1,
    title: "Задачник",
    url: "/taskbook",
    icon: ViewStreamIcon,
  },
  {
    id: 1,
    title: "Задачник",
    url: "/taskbook",
    icon: ViewStreamIcon,
  },
  {
    id: 1,
    title: "Задачник",
    url: "/taskbook",
    icon: ViewStreamIcon,
  },
  {
    id: 1,
    title: "Задачник",
    url: "/taskbook",
    icon: ViewStreamIcon,
  },
];
