import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonCustom } from "../ui/ButtonCustom";
import { useTheme } from "@mui/material/styles";
import { isUserAdmin } from "../api/auth";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const menuItems = [
  { label: "Курс", path: "/course" },
  { label: "Тестирование", path: "/" },
  { label: "Челлендж", path: "/live" },
  { label: "Справочник", path: "/cheatsheet" },
  { label: "Собеседование", path: "/interview" },
  { label: "Проекты", path: "/projects" },
  { label: "Задачник", path: "/taskbook" },
  { label: "Роадмап", path: "/roadmap" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const isAdmin = isUserAdmin();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    localStorage.removeItem("token");
    localStorage.removeItem("isAccessKey");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate("/profile");
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
          >
            devcourse.ru
          </Typography>

          {isMobile ? (
            <Box display="flex" alignItems="center">
              {isAdmin && (
                <Tooltip title="Панель администратора">
                  <IconButton
                    color="inherit"
                    onClick={() => navigate("/admin-dashboard")}
                    sx={{ mr: 1 }}
                  >
                    <AdminPanelSettingsIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Меню пользователя">
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
                    <AccountCircleIcon color="primary" />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleProfile}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Профиль
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Выйти
                </MenuItem>
              </Menu>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexGrow={1}
              gap={1}
            >
              {menuItems.map((item) => (
                <ButtonCustom
                  key={item.path}
                  label={item.label}
                  onClick={() => navigate(item.path)}
                  isActive={isActive(item.path)}
                />
              ))}
            </Box>
          )}

          {!isMobile && (
            <Box display="flex" alignItems="center">
              {isAdmin && (
                <Tooltip title="Панель администратора">
                  <IconButton
                    color="inherit"
                    onClick={() => navigate("/admin-dashboard")}
                    sx={{ mr: 1 }}
                  >
                    <AdminPanelSettingsIcon />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title="Меню пользователя">
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
                    <AccountCircleIcon color="primary" />
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  sx: {
                    transform: "translateX(-30px)",
                  },
                }}
              >
                <MenuItem onClick={handleProfile}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Профиль
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Выйти
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => handleNavigate(item.path)}
                selected={isActive(item.path)}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}

          {isAdmin && (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigate("/admin-dashboard")}
              >
                <ListItemText primary="Панель администратора" />
              </ListItemButton>
            </ListItem>
          )}

          <ListItem disablePadding>
            <ListItemButton onClick={handleProfile}>
              <ListItemText primary="Профиль" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Выйти" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
