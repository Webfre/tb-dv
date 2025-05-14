import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { getMenuItems } from "./menuItems";
import styles from "./Header.module.scss";

export const MobileMenu: React.FC<{
  open: boolean;
  onClose: () => void;
  isAdmin: boolean;
}> = ({ open, onClose, isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useCheckCourseAccessQuery();
  const hasAccess = data?.hasAccess;
  const menuItems = getMenuItems(hasAccess);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === path
      : location.pathname.startsWith(path);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List className={styles.drawer}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              selected={isActive(item.path)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {isAdmin && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/admin-dashboard")}>
              <ListItemText primary="Панель администратора" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};
