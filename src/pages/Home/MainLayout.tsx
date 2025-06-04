import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box className={styles.page}>
      <Header />
      <Box className={styles.main}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
