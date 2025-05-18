export const getMenuItems = (hasAccess: boolean | undefined) => {
  return [
    { label: "Главная", path: "/" },
    { label: "Курсы", path: "/listcourse" },
    ...(hasAccess ? [{ label: "Флешбек", path: "/flashback" }] : []),
    ...(hasAccess ? [{ label: "Доступные курсы", path: "/course" }] : []),
    // { label: "Челлендж", path: "/live" },
    { label: "Справочник", path: "/cheatsheet" },
    // { label: "Собеседование", path: "/interview" },
    // { label: "Проекты", path: "/projects" },
    { label: "Задачник", path: "/taskbook" },
    { label: "Roadmap", path: "/roadmap" },
  ];
};
