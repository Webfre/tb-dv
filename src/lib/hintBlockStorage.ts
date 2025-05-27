const STORAGE_KEY = "hintBlockStates";

export const getHintBlockState = (title: string): boolean => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed[title] ?? true;
  } catch {
    return true;
  }
};

export const setHintBlockState = (title: string, expanded: boolean) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    parsed[title] = expanded;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  } catch {
    // ничего
  }
};
