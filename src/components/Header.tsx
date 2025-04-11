import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
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
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // ~ <960px
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Тестирование", path: "/" },
    { label: "Режим задач", path: "/live" },
    { label: "Справочник", path: "/cheatsheet" },
    { label: "Собеседование", path: "/interview" },
    { label: "Проекты", path: "/projects" },
    { label: "Роадмап", path: "/roadmap" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
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
            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Button>
              ))}
              <Tooltip title="Мой прогресс">
                <IconButton color="inherit" onClick={() => navigate("/tests")}>
                  <InfoIcon />
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
              <ListItemButton onClick={() => handleNavigate(item.path)}>
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
