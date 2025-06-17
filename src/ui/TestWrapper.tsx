import React from "react";
import { useLocation } from "react-router-dom";
import TestСourse from "../components/TestСourse/TestСourse";
import TestList from "../components/TestСourse/TestList";
import TestCourseAccess from "../components/TestСourse/TestCourseAccess";
import { useCheckCourseAccessQuery } from "../api/userApi";
import Promo from "./Promo";

const TestWrapper: React.FC = () => {
  const location = useLocation();
  const state = location.state as
    | { selectedTest: string; name: string; courseId: string }
    | undefined;

  const { data } = useCheckCourseAccessQuery();
  const accessCourses = data?.accessCourse || [];
  const hasAccess = accessCourses.length > 0;

  if (!hasAccess) {
    return (
      <Promo
        title="Система тестирования на курсе"
        subtitle="Система тестирования предназначена для закрепления пройденного материала после прохождения каждого модуля в процессе обучения. Она влияет на ваш прогресс и помогает выявить пробелы, которые можно проработать с ментором в рамках обучения."
        videoSrc="/media/test_promo.mp4"
        posterSrc="/media/test_promo_preview.jpg"
      />
    );
  }

  if (state?.selectedTest && state?.courseId) {
    return <TestСourse />;
  }

  return (
    <TestCourseAccess
      render={(selectedCourseId) => <TestList courseId={selectedCourseId} />}
    />
  );
};

export default TestWrapper;
