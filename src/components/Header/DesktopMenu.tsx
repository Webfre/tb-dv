import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { hasAccessToCourses } from "../../lib/hasAccessToCourses";
import { ButtonCustom } from "../../ui/ButtonCustom";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMenuItems } from "./menuItems";
import { openHelp } from "../../store/uiSlice";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
  const dispatch = useDispatch();

  const handleFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Tooltip title="Полноэкранный режим">
        <IconButton color="inherit" onClick={handleFullscreen}>
          <FullscreenIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Справка">
        <IconButton color="inherit" onClick={() => dispatch(openHelp())}>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>

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
