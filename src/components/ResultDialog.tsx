import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { testData } from "../data/testData";

interface ResultDialogProps {
  open: boolean;
  onClose: () => void;
  onSend: () => void;
  name: string;
  testKey: keyof typeof testData;
  score: number;
  grade: number;
}

const ResultDialog: React.FC<ResultDialogProps> = ({
  open,
  onClose,
  onSend,
  name,
  testKey,
  score,
  grade,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Результат теста</DialogTitle>
      <DialogContent>
        <Typography>
          {name}, вы прошли тест по <b>{testData[testKey].name}</b>.
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
        <Button onClick={onClose} color="secondary">
          Закрыть
        </Button>
        <Button onClick={onSend} color="primary">
          Отправить руководителю
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultDialog;
