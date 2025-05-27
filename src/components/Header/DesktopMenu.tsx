import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { hasAccessToCourses } from "../../lib/hasAccessToCourses";
import { ButtonCustom } from "../../ui/ButtonCustom";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { useNavigate, useLocation } from "react-router-dom";
import { getMenuItems } from "./menuItems";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const MenuCenter: React.FC = () => {
  const { data } = useCheckCourseAccessQuery();
  const hasAccess = hasAccessToCourses(data?.accessCourse || []);
  const menuItems = getMenuItems(hasAccess);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {menuItems.map((item) => (
        <ButtonCustom
          key={item.path}
          label={item.label}
          onClick={() => navigate(item.path)}
          isActive={
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path)
          }
        />
      ))}
    </Box>
  );
};

const MenuRight: React.FC<{ isAdmin: boolean | undefined }> = ({ isAdmin }) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {isAdmin && (
        <Tooltip title="Панель администратора">
          <IconButton
            color="inherit"
            onClick={() => navigate("/admin-dashboard")}
          >
            <AdminPanelSettingsIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export const DesktopMenu = {
  Center: MenuCenter,
  Right: MenuRight,
};
