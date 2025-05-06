import React from "react";
import {
  Popover,
  IconButton,
  Avatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Header.module.scss";

interface UserMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onOpen,
}) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    onClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    onClose();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <IconButton color="inherit" onClick={onOpen}>
        <Avatar className={styles.avatar}>
          <AccountCircleIcon color="primary" />
        </Avatar>
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            mt: 1,
            minWidth: 240,
            p: 1,
            backgroundColor: "#1976d2",
            color: "#fff",
          },
        }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <PersonIcon fontSize="small" sx={{ color: "#ccc" }} />
          </ListItemIcon>
          <ListItemText>Мой профиль</ListItemText>
        </MenuItem>

        <Divider sx={{ my: 1, borderColor: "#444" }} />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" sx={{ color: "#ccc" }} />
          </ListItemIcon>
          <ListItemText>Выйти</ListItemText>
        </MenuItem>
      </Popover>
    </>
  );
};
