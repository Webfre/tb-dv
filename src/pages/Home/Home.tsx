import React from "react";
import { Box } from "@mui/material";
import { ProjectSection } from "./Section/ProjectSection";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Home.module.scss";
import IntroSection from "./Section/IntroSection";
import AboutSection from "./Section/AboutSection";
import AboutModule from "./Section/AboutModule";
import StartSection from "./Section/StartSection";
import LikeSection from "./Section/LikeSection";
import StackSection from "./Section/StackSection";

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
        <ProjectSection />
        <StackSection />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
