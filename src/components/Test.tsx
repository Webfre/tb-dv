import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import { testData } from "../data/testData";
import { sendToTelegram } from "../components/sendBot";
import { useTestLogic } from "./useTestLogic";
import HistoryBlock from "../components/HistoryBlock";
import QuestionBlock from "../components/QuestionBlock";
import ResultDialog from "../components/ResultDialog";

const Test: React.FC = () => {
  const {
    name,
    selectedTest,
    answers,
    handleChange,
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
  } = useTestLogic();

  if (!selectedTest || !testData[selectedTest]) {
    return <Typography>Ошибка: Тест не найден.</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, position: "relative" }}>
      <Typography variant="h5" gutterBottom>
        Тест по {testData[selectedTest].name}
      </Typography>
      <Typography variant="subtitle1">
        Попыток {attemptsUsed} из {MAX_ATTEMPTS}
      </Typography>

      <Box>
        <HistoryBlock selectedTest={String(selectedTest)} />
      </Box>

      {showResults && attemptsUsed < MAX_ATTEMPTS && (
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ marginBottom: "20px" }}
          onClick={handleRetry}
        >
          Пройти заново
        </Button>
      )}

      {testData[selectedTest].ques.map((q) => (
        <QuestionBlock
          key={q.id}
          id={q.id}
          name={q.name}
          variants={q.variants}
          selectedAnswers={answers[q.id] || []}
          correctAnswers={highlightAnswers[q.id]}
          onChange={handleChange}
          disabled={showResults}
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3, mb: 4 }}
        onClick={handleSubmit}
        disabled={attemptsUsed >= MAX_ATTEMPTS || showResults}
      >
        Проверить
      </Button>

      <ResultDialog
        open={open}
        onClose={() => setOpen(false)}
        onSend={() =>
          sendToTelegram(name, testData[selectedTest].name, score, grade)
        }
        name={name}
        testKey={selectedTest}
        score={score}
        grade={grade}
      />
    </Container>
  );
};

export default Test;
