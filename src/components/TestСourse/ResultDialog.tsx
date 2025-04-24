import React from "react";
import { testData } from "../../data/testData";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GradeIcon from "@mui/icons-material/Grade";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BtnCustom from "../../ui/BtnCustom";

interface ResultDialogProps {
  open: boolean;
  onClose: () => void;
  onSend: () => void;
  onRetry: () => void;
  testKey: keyof typeof testData;
  score: number;
  grade: number;
}

const ResultDialog: React.FC<ResultDialogProps> = ({
  open,
  onClose,
  onRetry,
  onSend,
  testKey,
  score,
  grade,
}) => {
  const isPassed = grade > 2;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ position: "relative", pr: 6 }}>
        Результат теста
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Typography gutterBottom>
          Тест по: <b>{testData[testKey].name}</b>
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={2}>
          <EmojiEventsIcon color="primary" />
          <Typography>
            Ваш результат: <b>{score}%</b>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <GradeIcon color="action" />
          <Typography>
            Оценка: <b>{grade}</b>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mt={2}>
          {isPassed ? (
            <>
              <CheckCircleOutlineIcon color="success" />
              <Typography color="success.main">
                Вы успешно сдали тест!
              </Typography>
            </>
          ) : (
            <>
              <ErrorOutlineIcon color="error" />
              <Typography color="error">Вы не сдали тест!</Typography>
            </>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ marginTop: "20px", flexWrap: "wrap", gap: 1 }}>
        <BtnCustom
          text="Пройти заново"
          variant="outlined"
          onClick={() => {
            onClose();
            onRetry();
          }}
        />
        <BtnCustom
          text="Отправить руководителю"
          onClick={onSend}
          variant="contained"
        />
      </DialogActions>
    </Dialog>
  );
};

export default ResultDialog;
