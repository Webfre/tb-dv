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
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ButtonCustom } from "../ui/ButtonCustom";

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

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  // Проверяем, является ли текущий путь активным
  const isActive = (path: string) => {
    // Для главной страницы делаем точное сравнение
    if (path === "/") return location.pathname === path;
    // Для остальных проверяем, начинается ли путь с указанного
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
              <Tooltip title="Мой прогресс">
                <IconButton color="inherit" onClick={() => navigate("/tests")}>
                  <InfoIcon />
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
            <Tooltip title="Мой прогресс">
              <IconButton color="inherit" onClick={() => navigate("/tests")}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
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
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate("/tests")}>
              <ListItemText primary="Мой прогресс" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
