import React from "react";
import { Box, Typography } from "@mui/material";
import { HintBlock } from "../../ui/HintBlock";
import { useTestLogic } from "./useTestLogic";
import { useNavigate } from "react-router-dom";
import { testData } from "../../DB/testData";
import QuestionBlock from "./QuestionBlock";
import ResultDialog from "./ResultDialog";
import HistoryBlock from "./HistoryBlock";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BtnCustom from "../../ui/BtnCustom";

const TestСourse: React.FC = () => {
  const {
    selectedTest,
    answers,
    handleChange,
    handleSubmit,
    handleRetry,
    highlightAnswers,
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

  const questions = testData[selectedTest].ques;
  const isAllAnswered = questions.every((q) => answers[q.id]?.length > 0);

  if (!selectedTest || !testData[selectedTest]) {
    return <Typography>Ошибка: Тест не найден.</Typography>;
  }

  return (
    <Box p={2} sx={{ position: "relative" }}>
      <BtnCustom
        sx={{ mb: 2 }}
        customColor="#846ee6"
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
          variant="contained"
          color="secondary"
          customColor="#846ee6"
          text="Повторить попытку"
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

      {(attemptsUsed >= MAX_ATTEMPTS || !isAllAnswered) && !showResults && (
        <HintBlock
          title="Уведомление"
          text={
            attemptsUsed >= MAX_ATTEMPTS
              ? "Вы израсходовали все попытки. Результаты сохранены."
              : "Пожалуйста, ответьте на все вопросы, чтобы проверить тест."
          }
        />
      )}

      <Box display="flex" justifyContent="center">
        <BtnCustom
          sx={{ mt: 3, mb: 4, width: "40%" }}
          onClick={handleSubmit}
          text="Проверить"
          customColor="#846ee6"
          variant="contained"
          disabled={
            attemptsUsed >= MAX_ATTEMPTS || !isAllAnswered || showResults
          }
        />
      </Box>

      <ResultDialog
        open={open}
        onClose={() => setOpen(false)}
        testKey={selectedTest}
        onRetry={handleRetry}
        scrollToTop={scrollToTop}
        score={score}
        grade={grade}
      />
    </Box>
  );
};

export default TestСourse;
