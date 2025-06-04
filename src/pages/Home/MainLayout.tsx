import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <Box className={styles.page}>
      <Header />
      <Box className={styles.main}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
