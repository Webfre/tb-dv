import { ironTasks } from "./tasks/iron";
import { Task } from "./tasks/types";

export const LEVELS = [
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Master",
  "Grandmaster",
] as const;

export type Level = (typeof LEVELS)[number];

export const levelColors: Record<Level, string> = {
  Iron: "#a9a9a9", // Серый
  Bronze: "#cd7f32", // Бронза
  Silver: "#c0c0c0", // Серебро
  Gold: "#ffd700", // Золото
  Platinum: "#e5e4e2", // Платина
  Diamond: "#b9f2ff", // Алмаз
  Master: "#8a2be2", // Фиолетовый
  Grandmaster: "#ff4500", // Красный
};

export const mockTasks: Record<Level, Task[]> = {
  Iron: [...ironTasks],
  Bronze: [],
  Silver: [],
  Gold: [],
  Platinum: [],
  Diamond: [],
  Master: [],
  Grandmaster: [],
};
