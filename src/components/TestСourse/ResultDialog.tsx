import React from "react";
import { testData } from "../../DB/testData";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BtnCustom from "../../ui/BtnCustom";

interface ResultDialogProps {
  open: boolean;
  onClose: () => void;
  onRetry: () => void;
  testKey: keyof typeof testData;
  score: number;
  grade: number;
  scrollToTop: () => void;
}

const ResultDialog: React.FC<ResultDialogProps> = ({
  open,
  onClose,
  onRetry,
  testKey,
  score,
  grade,
  scrollToTop,
}) => {
  const isPassed = grade > 2;
  const [openCriteria, setOpenCriteria] = React.useState(false);

  return (
    <>
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
        <DialogTitle
          sx={{
            position: "relative",
            pr: 6,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          Результат
          <Tooltip title="Критерии оценки">
            <IconButton size="small" onClick={() => setOpenCriteria(true)}>
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
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
          <Typography sx={{ fontSize: "20px" }} gutterBottom>
            Тест: <b>{testData[testKey].name}</b>
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mt={2}>
            <EmojiEventsIcon sx={{ color: "#947ef6" }} />
            <Typography sx={{ color: "#333" }}>
              Ваш результат: <b>{score}%</b>
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
                <NewReleasesIcon sx={{ color: "#846ee6" }} />
                <Typography sx={{ color: "#846ee6" }}>
                  Вы не сдали тест! Попробуйте еще раз.
                </Typography>
              </>
            )}
          </Box>

          {openCriteria && (
            <Box mt={3}>
              <Typography variant="subtitle2" color="text.secondary">
                <b>Критерии оценки:</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Менее 50% — тест <b>не сдан</b>,<br />
                50% и выше — тест <b>считается сданным</b>.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ marginTop: "20px", flexWrap: "wrap", gap: 1 }}>
          <BtnCustom
            text="Пройти заново"
            variant="outlined"
            customColor="#846ee6"
            onClick={() => {
              onClose();
              onRetry();
            }}
          />
          <BtnCustom
            text="Просмотреть ошибки"
            variant="contained"
            customColor="#846ee6"
            onClick={() => {
              onClose();
              scrollToTop();
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ResultDialog;
