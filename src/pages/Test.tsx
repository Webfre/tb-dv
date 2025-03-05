import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { testData } from "../data/testData";
import {
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import HistoryBlock from "./HistoryBlock";
import { sendToTelegram } from "./sendBot";

interface LocationState {
  name: string;
  selectedTest: keyof typeof testData;
}

const MAX_ATTEMPTS = 2; // Максимальное количество попыток

const Test: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, selectedTest } = (location.state as LocationState) || {};

  const [answers, setAnswers] = useState<{ [key: number]: number[] }>({});
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState(2);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [highlightAnswers, setHighlightAnswers] = useState<{
    [key: number]: number[];
  }>({});

  useEffect(() => {
    const storedAttempts = localStorage.getItem(`attempts_${selectedTest}`);
    if (storedAttempts) {
      setAttemptsUsed(parseInt(storedAttempts, 10));
    }
  }, [selectedTest]);

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
    if (percentage < 60) return 2;
    if (percentage >= 60 && percentage < 80) return 3;
    if (percentage >= 80 && percentage < 90) return 4;
    return 5;
  };

  const handleSubmit = () => {
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

    setScore(percentage);
    setGrade(newGrade);
    setHighlightAnswers(newHighlight);
    setShowResults(true);

    // Обновление количества попыток
    const newAttemptsUsed = attemptsUsed + 1;
    setAttemptsUsed(newAttemptsUsed);

    const testResult = {
      attempts: newAttemptsUsed,
      correctAnswers,
      percentage,
      grade: newGrade,
      selectedAnswers: answers,
    };

    localStorage.setItem(
      `attempts_${selectedTest}`,
      newAttemptsUsed.toString()
    );

    const storedHistory = localStorage.getItem(`history_${selectedTest}`);
    const history = storedHistory ? JSON.parse(storedHistory) : [];
    history.push(testResult);
    localStorage.setItem(`history_${selectedTest}`, JSON.stringify(history));

    setOpen(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResults(false);
    setHighlightAnswers({});
    setOpen(false);
  };

  const handleNavigate = (testName: keyof typeof testData) => {
    navigate("/test", { state: { name, selectedTest: testName } });
    setAnswers({});
    setShowResults(false);
    setHighlightAnswers({});
    setAttemptsUsed(0);
  };

  if (!selectedTest || !testData[selectedTest]) {
    return <Typography>Ошибка: Тест не найден.</Typography>;
  }

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 40,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 10,
        }}
      >
        Другие тесты:
        {Object.keys(testData)
          .filter((test) => test !== selectedTest)
          .map((test) => (
            <Card
              key={test}
              sx={{
                minWidth: 120,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "#f1f1f1",
              }}
            >
              <CardActionArea
                onClick={() => handleNavigate(test as keyof typeof testData)}
              >
                <CardContent>
                  <Typography variant="body1" align="center">
                    {test}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>

      <Container maxWidth="sm" sx={{ mt: 5, position: "relative" }}>
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Тест по {testData[selectedTest].name}
        </Typography>
        <Typography variant="subtitle1">
          Попыток {attemptsUsed} из {MAX_ATTEMPTS}
        </Typography>
        <Box>
          <HistoryBlock selectedTest={String(selectedTest)} />
        </Box>

        {testData[selectedTest].ques.map((q) => (
          <Box
            key={q.id}
            sx={{ mb: 2, p: 2, borderRadius: 2, bgcolor: "#f9f9f9" }}
          >
            <Typography variant="h6">{q.name}</Typography>
            <FormGroup>
              {q.variants.map((option, idx) => {
                const isCorrect = highlightAnswers[q.id]?.includes(idx);
                const isChecked = (answers[q.id] || []).includes(idx);

                return (
                  <FormControlLabel
                    key={idx}
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={() => handleChange(q.id, idx)}
                        disabled={showResults} // Блокируем чекбоксы после проверки
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: showResults
                            ? isCorrect
                              ? "green"
                              : isChecked
                              ? "red"
                              : "inherit"
                            : "inherit",
                        }}
                      >
                        {option}
                      </Typography>
                    }
                  />
                );
              })}
            </FormGroup>
          </Box>
        ))}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, mb: 4 }}
          onClick={handleSubmit}
          disabled={attemptsUsed >= MAX_ATTEMPTS || showResults} // Блокируем кнопку после 2 попыток
        >
          Проверить
        </Button>

        {showResults && attemptsUsed < MAX_ATTEMPTS && (
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRetry}
          >
            Пройти заново
          </Button>
        )}

        {/* Модальное окно результата */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Результат теста</DialogTitle>
          <DialogContent>
            <Typography>
              {name}, вы прошли тест по <b>{selectedTest}</b>.
            </Typography>
            <Typography>
              Ваш результат: <b>{score}%</b>
            </Typography>
            <Typography>
              Оценка: <b>{grade}</b>
            </Typography>
            {grade === 2 ? (
              <Typography color="error">Вы не сдали тест!</Typography>
            ) : (
              <Typography color="success">Вы успешно сдали тест!</Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="secondary">
              Закрыть
            </Button>
            <Button
              onClick={() =>
                sendToTelegram(name, testData[selectedTest].name, score, grade)
              }
              color="primary"
            >
              Отправить руководителю
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default Test;
