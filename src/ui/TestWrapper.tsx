import React from "react";
import { useLocation } from "react-router-dom";
import TestСourse from "../components/TestСourse/TestСourse";
import TestList from "../components/TestСourse/TestList";

const TestWrapper: React.FC = () => {
  const location = useLocation();
  const state = location.state as
    | { selectedTest: string; name: string; courseId: string }
    | undefined;

  if (state?.selectedTest && state?.courseId) {
    return <TestСourse />;
  }

  // Можно прокинуть courseId по умолчанию или из query, если нужно
  return <TestList courseId="1" />;
};

export default TestWrapper;
