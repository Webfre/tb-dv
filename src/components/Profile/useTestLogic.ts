import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { testData } from "../../data/testData";
import {
  useGetUserProgressQuery,
  useUpdateProgressMutation,
} from "../../api/api";
import jwtDecode from "jwt-decode";

const MAX_ATTEMPTS = 2;

interface LocationState {
  name: string;
  selectedTest: keyof typeof testData;
}

interface DecodedToken {
  sub: number;
  email: string;
  isAdmin: boolean;
  isAccessKey: boolean;
  accessKey?: string;
  exp: number;
  iat: number;
}

export const useTestLogic = () => {
  const location = useLocation();
  const { name, selectedTest } = (location.state as LocationState) || {};

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

  const token = localStorage.getItem("token");
  const decoded: DecodedToken | null = token ? jwtDecode(token) : null;
  const userId = decoded?.sub;

  const { data: progressData, isSuccess } = useGetUserProgressQuery(userId!, {
    skip: !userId,
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
      const currentHistory = progressData?.history?.[selectedTest] || [];
      const updatedHistory = [...currentHistory, testResult];

      await updateProgress({
        testKey: String(selectedTest),
        attempts: newAttemptsUsed,
        result: testResult,
        fullHistory: updatedHistory,
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
