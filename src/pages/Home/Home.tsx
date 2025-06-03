import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Home.module.scss";
import IntroSection from "./Section/IntroSection";
import AboutSection from "./Section/AboutSection";
import AboutModule from "./Section/AboutModule";
import StartSection from "./Section/StartSection";
import LikeSection from "./Section/LikeSection";

const Home: React.FC = () => {
  return (
    <Box className={styles.page}>
      <Header />

      <Box className={styles.main}>
        <IntroSection />
        <AboutModule />
        <AboutSection />
        <StartSection />
        <LikeSection />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
