import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useIsUserAdmin } from "../../lib/useIsUserAdmin";
import { useAuthTokenCheck } from "../../lib/useAuthTokenCheck";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "./UserMenu";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import BtnCustom from "../../ui/BtnCustom";

const Header: React.FC = () => {
  const { isAdmin } = useIsUserAdmin();
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(menuAnchorEl);

  const { token, valid, isLoading } = useAuthTokenCheck();
  const isAuthenticated = token && valid;

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" className={styles.header}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            className={styles.logo}
            onClick={() => navigate("/")}
          >
            Frontarium
          </Typography>

          {!isMobile && (
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              <DesktopMenu.Center />
            </Box>
          )}

          <Box display="flex" alignItems="center" gap={1}>
            {!isMobile && <DesktopMenu.Right isAdmin={isAdmin} />}

            {!isLoading &&
              (isAuthenticated ? (
                <UserMenu
                  anchorEl={menuAnchorEl}
                  open={openMenu}
                  onOpen={handleOpenUserMenu}
                  onClose={handleCloseUserMenu}
                />
              ) : (
                <>
                  <BtnCustom
                    text="Войти"
                    variant="contained"
                    onClick={() => navigate("/login")}
                    white
                  />
                  <BtnCustom
                    text="Регистрация"
                    variant="text"
                    onClick={() => navigate("/register")}
                    white
                  />
                </>
              ))}

            {isMobile && (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <MobileMenu
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        isAdmin={isAdmin}
      />
    </>
  );
};

export default Header;
