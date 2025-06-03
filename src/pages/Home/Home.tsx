import React, { useRef } from "react";
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
import FaqSection from "./Section/FaqSection";
import ConsultationForm from "./Section/ConsultationForm";

const Home: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={styles.page}>
      <Header />

      <Box className={styles.main}>
        <IntroSection onStartClick={handleScrollToForm} />
        <AboutModule />
        <AboutSection />
        <StartSection />
        <LikeSection />
        <ProjectSection />
        <StackSection />
        <FaqSection />
        <ConsultationForm reflink={formRef} />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
