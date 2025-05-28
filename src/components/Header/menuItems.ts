export const getMenuItems = (hasAccess: boolean | undefined) => {
  return [
    { label: "Главная", path: "/" },
    { label: "Курсы", path: "/listcourse" },
  ];
};
