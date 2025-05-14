export const getMenuItems = (hasAccess: boolean | undefined) => {
  return [
    { label: "Главная", path: "/" },
    { label: "Курсы", path: "/listcourse" },
    { label: "Курс", path: "/course" },
    ...(hasAccess ? [{ label: "Флешбек", path: "/flashback" }] : []),
    // { label: "Челлендж", path: "/live" },
    { label: "Справочник", path: "/cheatsheet" },
    // { label: "Собеседование", path: "/interview" },
    // { label: "Проекты", path: "/projects" },
    { label: "Задачник", path: "/taskbook" },
    { label: "Roadmap", path: "/roadmap" },
  ];
};
