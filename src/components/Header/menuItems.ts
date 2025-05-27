export const getMenuItems = (hasAccess: boolean | undefined) => {
  return [
    { label: "Главная", path: "/" },
    ...(hasAccess ? [{ label: "Мои курсы", path: "/course" }] : []),
    { label: "Курсы", path: "/listcourse" },
    ...(hasAccess ? [{ label: "Флешбек", path: "/flashback" }] : []),
    // { label: "Челлендж", path: "/live" },
    { label: "Справочник", path: "/cheatsheet" },
    // { label: "Собеседование", path: "/interview" },
    // { label: "Проекты", path: "/projects" },
    { label: "Roadmap", path: "/roadmap" },
  ];
};
