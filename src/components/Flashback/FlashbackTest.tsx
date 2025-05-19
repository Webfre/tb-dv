import {
  Box,
  Card,
  Typography,
  Chip,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FC, useRef, useState } from "react";
import { FlashbackQuestion } from "../../dataFlashback/flashbackData";
import { useTestStatistics } from "./useTestStatistics";
import BtnCustom from "../../ui/BtnCustom";
import FlashbackTestResult from "./FlashbackTestResult";

interface FlashbackTestProps {
  questions: FlashbackQuestion[];
  onFinish: () => void;
}

export const FlashbackTest: FC<FlashbackTestProps> = ({
  questions,
  onFinish,
}) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const descriptionsRef = useRef<HTMLDivElement | null>(null);

  const { stats, updateStats } = useTestStatistics();

  if (!questions.length) {
    return (
      <Typography variant="body1" color="error" mt={4}>
        Нет подходящих вопросов для выбранных настроек.
      </Typography>
    );
  }

  const current = questions[index];

  const handleNext = () => {
    const isCorrect =
      selected.length === current.correctAnswers.length &&
      selected.every((idx) => current.correctAnswers.includes(idx));

    setResults((prev) => [...prev, isCorrect]);
    updateStats(current, isCorrect);

    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
      setSelected([]);
      setChecked(false);
    } else {
      setShowResult(true);
    }
  };

  const handleToggle = (idx: number) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleCheck = () => {
    setChecked(true);

    setTimeout(() => {
      descriptionsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const isCorrect =
    selected.length === current.correctAnswers.length &&
    selected.every((idx) => current.correctAnswers.includes(idx));

  const correctCount = results.filter(Boolean).length;
  const percent = Math.round((correctCount / results.length) * 100 || 0);

  const topics = Array.from(new Set(questions.map((q) => q.sectionTitle))).join(
    ", "
  );

  return (
    <>
      <Card
        sx={{
          p: 3,
          mt: 4,
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <Box position="absolute" top={16} right={16}>
          <Chip
            label={`Вопрос ${index + 1} из ${questions.length}`}
            color="primary"
          />
        </Box>

        <Typography variant="h6" mb={2} sx={{ maxWidth: "850px" }}>
          {current.title}
        </Typography>

        <FormGroup>
          {current.options.map((option, idx) => {
            const isSelected = selected.includes(idx);
            const isCorrectAnswer = current.correctAnswers.includes(idx);

            let borderColor = "grey.300";
            if (checked) {
              if (isCorrectAnswer && isSelected) borderColor = "success.main";
              else if (!isCorrectAnswer && isSelected)
                borderColor = "error.main";
            } else {
              if (isSelected) borderColor = "primary.main";
            }

            return (
              <Box
                key={option}
                sx={{
                  border: "2px solid",
                  borderColor,
                  borderRadius: "20px",
                  p: 1.5,
                  mb: 1.5,
                  transition: "0.3s",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleToggle(idx)}
                      disabled={checked}
                    />
                  }
                  label={option}
                  sx={{ width: "100%", m: 0 }}
                />
              </Box>
            );
          })}
        </FormGroup>

        {checked && (
          <Box mt={3} ref={descriptionsRef}>
            <Typography
              variant="subtitle1"
              color={isCorrect ? "success.main" : "error.main"}
              gutterBottom
            >
              {isCorrect ? "Верно!" : "Неверно!"}
            </Typography>

            <Box>
              {current.descriptions.map((desc, idx) => (
                <Box
                  key={idx}
                  sx={{
                    border: "2px solid",
                    borderColor: current.correctAnswers.includes(idx)
                      ? "success.main"
                      : "grey.300",
                    borderRadius: "20px",
                    p: 1.5,
                    mb: 1.5,
                    backgroundColor: current.correctAnswers.includes(idx)
                      ? "#e8f5e9"
                      : "#f5f5f5",
                    transition: "0.3s",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
          {!checked ? (
            <BtnCustom
              variant="contained"
              onClick={handleCheck}
              text="Проверить"
              disabled={selected.length === 0}
            />
          ) : (
            <BtnCustom
              text={index < questions.length - 1 ? "Следующий" : "Завершить"}
              variant="contained"
              onClick={handleNext}
            />
          )}
        </Box>
      </Card>

      <FlashbackTestResult
        open={showResult}
        percent={percent}
        correctCount={correctCount}
        totalQuestions={results.length}
        topics={topics}
        stats={stats}
        onClose={() => {
          setShowResult(false);
          onFinish();
        }}
      />
    </>
  );
};
