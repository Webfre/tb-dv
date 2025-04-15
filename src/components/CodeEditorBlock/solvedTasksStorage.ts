import { Level } from "./data";

export interface SolvedTask {
  level: Level;
  id: string;
  title: string;
}

const STORAGE_KEY = "solved_tasks";

// Получить все решённые задачи
export const getSolvedTasks = (): SolvedTask[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Сохранить новую решённую задачу (если ещё не сохранена)
export const saveSolvedTask = (task: SolvedTask): void => {
  const existing = getSolvedTasks();

  const alreadyExists = existing.some(
    (t) => t.level === task.level && t.id === task.id
  );

  if (!alreadyExists) {
    const updated = [...existing, task];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
};
