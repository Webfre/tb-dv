import React, { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleMode } from "../../store/themeSlice";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import classNames from "classnames";
import styles from "./Header.module.scss";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Обучение", path: "/info" },
  { label: "Курсы", path: "/courses" },
  { label: "О нас", path: "/about" },
  { label: "Контакты", path: "/contacts" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const burgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className={classNames(styles.header, { [styles.scrolled]: isScrolled })}
    >
      <div className={styles.toolbar}>
        <Typography variant="h6" className={styles.logo}>
          Frontarium
        </Typography>

        <Box className={styles.nav}>
          {navItems.map((item) => (
            <Box
              component={Link}
              to={item.path}
              key={item.path}
              className={classNames(styles.navItem, {
                [styles.active]: location.pathname === item.path,
              })}
            >
              {item.label}
            </Box>
          ))}
        </Box>

        <div
          className={styles.burger}
          ref={burgerRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <div className={styles.auth}>
          <button
            onClick={() => navigate("/login")}
            className={styles.authButton}
          >
            Войти
          </button>
          <button
            onClick={() => navigate("/register")}
            className={styles.authButton}
          >
            Регистрация
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={classNames(styles.mobileNavItem, {
                [styles.active]: location.pathname === item.path,
              })}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className={styles.mobileAuthButtons}>
            <button
              onClick={() => navigate("/login")}
              className={styles.authButton}
            >
              Войти
            </button>
            <button
              onClick={() => navigate("/register")}
              className={styles.authButton}
            >
              Регистрация
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
