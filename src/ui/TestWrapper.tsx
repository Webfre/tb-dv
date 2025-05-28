import React from "react";
import { useLocation } from "react-router-dom";
import TestСourse from "../components/TestСourse/TestСourse";
import TestList from "../components/TestСourse/TestList";
import TestCourseAccess from "../components/TestСourse/TestCourseAccess";

const TestWrapper: React.FC = () => {
  const location = useLocation();
  const state = location.state as
    | { selectedTest: string; name: string; courseId: string }
    | undefined;

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
