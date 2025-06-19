import CssIcon from "@mui/icons-material/Css";
import { portfolioChapters } from "./portfolioChapters";

export const portfolio = {
  id: "portfolio",
  title: "Портфолио",
  img: CssIcon,
  description:
    "Портфолио — это коллекция ваших проектов, навыков и достижений в веб-разработке, оформленная в виде современной и информативной страницы для работодателей и заказчиков.",
  estimatedHours: 80,
  chapters: portfolioChapters,
  mentors: {
    id: 2,
    name: "Митин Олег",
  },
};
