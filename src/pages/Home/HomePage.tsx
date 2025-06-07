import { useRef } from "react";
import { ProjectSection } from "./Section/ProjectSection";
import IntroSection from "./Section/IntroSection";
import AboutSection from "./Section/AboutSection";
import AboutModule from "./Section/AboutModule";
import StartSection from "./Section/StartSection";
import LikeSection from "./Section/LikeSection";
import StackSection from "./Section/StackSection";
import FaqSection from "./Section/FaqSection";
import ConsultationForm from "./Section/ConsultationForm";

const HomePage = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <IntroSection onStartClick={handleScrollToForm} />
      <AboutModule />
      <AboutSection />
      <StartSection />
      <LikeSection />
      <ProjectSection />
      <StackSection />
      <FaqSection />
      <ConsultationForm reflink={formRef} />
    </>
  );
};

export default HomePage;
