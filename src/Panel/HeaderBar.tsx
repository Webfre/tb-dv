import React, { useState } from "react";
import styles from "./HeaderBar.module.scss";
import {
  Avatar,
  Popover,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { courseList } from "../DB";
import { Breadcrumbs } from "./Breadcrumbs";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

interface HeaderBarProps {
  title: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  const { id } = useParams<{ id: string }>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const courseTitle =
    courseList.find((course) => course.id === Number(id))?.title ?? "";

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleProfile = () => {
    handleClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    handleClose();
    localStorage.clear();
    navigate("/login");
  };

  const handleFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const open = Boolean(anchorEl);

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>{title || courseTitle}</h1>
        <Breadcrumbs />
      </div>

      <div className={styles.userMenu}>
        <Tooltip title="Полноэкранный режим">
          <FullscreenIcon
            onClick={handleFullscreen}
            className={styles.handleFullscreen}
          />
        </Tooltip>

        <IconButton onClick={handleOpen} className={styles.avatarButton}>
          <Avatar className={styles.avatar}>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>

        <Popover
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            className: styles.popover,
          }}
        >
          <MenuItem onClick={handleProfile}>
            <ListItemIcon>
              <PersonIcon className={styles.icon} />
            </ListItemIcon>
            <ListItemText>Мой профиль</ListItemText>
          </MenuItem>

          <Divider className={styles.divider} />

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon className={styles.icon} />
            </ListItemIcon>
            <ListItemText>Выйти</ListItemText>
          </MenuItem>
        </Popover>
      </div>
    </header>
  );
};
