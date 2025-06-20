import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { testData } from "../../DB/testData";
import {
  useGetUserProgressQuery,
  useUpdateProgressMutation,
} from "../../api/progressApi";

const MAX_ATTEMPTS = 2;

export interface LocationState {
  name: string;
  selectedTest: keyof typeof testData;
  courseId: string;
}

export const useTestLogic = () => {
  const location = useLocation();
  const { name, selectedTest, courseId } =
    (location.state as LocationState) || {};

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState(2);
  const [answers, setAnswers] = useState<{ [key: number]: number[] }>({});
  const [updateProgress] = useUpdateProgressMutation();
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [highlightAnswers, setHighlightAnswers] = useState<{
    [key: number]: number[];
  }>({});

  const { data: progressData, isSuccess } = useGetUserProgressQuery({
    courseId,
  });

  useEffect(() => {
    if (isSuccess && progressData?.attempts?.[selectedTest]) {
      setAttemptsUsed(progressData.attempts[selectedTest]);
    }
  }, [isSuccess, progressData, selectedTest]);

  const handleChange = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => {
      const selected = prev[questionId] || [];
      return {
        ...prev,
        [questionId]: selected.includes(optionIndex)
          ? selected.filter((idx) => idx !== optionIndex)
          : [...selected, optionIndex],
      };
    });
  };

  const calculateGrade = (percentage: number): number => {
    if (percentage < 50) return 2;
    if (percentage >= 50 && percentage < 65) return 3;
    if (percentage >= 65 && percentage < 85) return 4;
    return 5;
  };

  const handleSubmit = async () => {
    if (attemptsUsed >= MAX_ATTEMPTS) return;
    const test = testData[selectedTest];
    if (!test) return;

    let correctAnswers = 0;
    let newHighlight: { [key: number]: number[] } = {};

    test.ques.forEach((q) => {
      const correct = q.correct.sort().join(",");
      const userAnswer = (answers[q.id] || []).sort().join(",");

      if (correct === userAnswer) {
        correctAnswers++;
      }

      newHighlight[q.id] = q.correct;
    });

    const percentage = Math.round((correctAnswers / test.ques.length) * 100);
    const newGrade = calculateGrade(percentage);
    const newAttemptsUsed = attemptsUsed + 1;

    const testResult = {
      attempts: newAttemptsUsed,
      correctAnswers,
      percentage,
      grade: newGrade,
      selectedAnswers: answers,
    };

    try {
      let currentHistory = progressData?.history?.[selectedTest];

      if (
        !Array.isArray(currentHistory) &&
        typeof currentHistory === "object"
      ) {
        const values = Object.values(currentHistory);
        if (values.every((v) => typeof v === "object")) {
          currentHistory = values;
        } else {
          currentHistory = [];
        }
      } else if (!Array.isArray(currentHistory)) {
        currentHistory = [];
      }

      const updatedHistory = [...currentHistory, testResult];

      await updateProgress({
        courseId,
        attempts: {
          [selectedTest]: newAttemptsUsed,
        },
        history: {
          [selectedTest]: updatedHistory,
        },
      }).unwrap();
    } catch (e) {
      console.error("Ошибка отправки прогресса", e);
    }

    setScore(percentage);
    setGrade(newGrade);
    setHighlightAnswers(newHighlight);
    setShowResults(true);
    setAttemptsUsed(newAttemptsUsed);
    setOpen(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResults(false);
    setHighlightAnswers({});
    setOpen(false);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    name,
    selectedTest,
    answers,
    handleChange,
    showScrollTop,
    setShowScrollTop,
    scrollToTop,
    handleSubmit,
    handleRetry,
    highlightAnswers,
    showResults,
    score,
    grade,
    attemptsUsed,
    open,
    setOpen,
    MAX_ATTEMPTS,
  };
};
