import React from "react";
import { Container, Typography } from "@mui/material";
import { useTestLogic } from "./useTestLogic";
import { useNavigate } from "react-router-dom";
import { Fab, Zoom } from "@mui/material";
import { testData } from "../../DB/testData";
import QuestionBlock from "./QuestionBlock";
import ResultDialog from "./ResultDialog";
import HistoryBlock from "./HistoryBlock";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BtnCustom from "../../ui/BtnCustom";

const TestСourse: React.FC = () => {
  const {
    selectedTest,
    answers,
    handleChange,
    handleSubmit,
    handleRetry,
    highlightAnswers,
    showScrollTop,
    scrollToTop,
    showResults,
    score,
    grade,
    attemptsUsed,
    open,
    setOpen,
    MAX_ATTEMPTS,
  } = useTestLogic();

  const navigate = useNavigate();

  if (!selectedTest || !testData[selectedTest]) {
    return <Typography>Ошибка: Тест не найден.</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, position: "relative" }}>
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />

      <Typography variant="h5" gutterBottom>
        Тест: {testData[selectedTest].name}
      </Typography>

      <HistoryBlock
        attemptsUsed={attemptsUsed}
        MAX_ATTEMPTS={MAX_ATTEMPTS}
        selectedTest={String(selectedTest)}
      />

      {showResults && attemptsUsed < MAX_ATTEMPTS && (
        <BtnCustom
          variant="outlined"
          color="secondary"
          text="Пройти заново"
          fullWidth
          sx={{ marginBottom: "20px" }}
          onClick={handleRetry}
        />
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

      <BtnCustom
        sx={{ mt: 3, mb: 4, width: "100%" }}
        onClick={handleSubmit}
        text="Проверить"
        variant="contained"
        disabled={attemptsUsed >= MAX_ATTEMPTS || showResults}
      />

      <ResultDialog
        open={open}
        onClose={() => setOpen(false)}
        testKey={selectedTest}
        onRetry={handleRetry}
        scrollToTop={scrollToTop}
        score={score}
        grade={grade}
      />

      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1300,
          }}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Container>
  );
};

export default TestСourse;
