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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ButtonCustom } from "../ui/ButtonCustom";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { isUserAdmin } from "../api/auth";

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

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
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
              <Tooltip title="Мой профиль">
                <IconButton color="inherit" onClick={() => navigate("/tests")}>
                  <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
                    <AccountCircleIcon color="primary" />
                  </Avatar>
                </IconButton>
              </Tooltip>
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

              <Tooltip title="Мой профиль">
                <IconButton color="inherit" onClick={() => navigate("/tests")}>
                  <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
                    <AccountCircleIcon color="primary" />
                  </Avatar>
                </IconButton>
              </Tooltip>
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
            <ListItemButton onClick={() => handleNavigate("/tests")}>
              <ListItemText primary="Мой профиль" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
