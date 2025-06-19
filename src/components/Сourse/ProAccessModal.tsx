import React from "react";
import { Modal, Box, Typography, Alert, AlertTitle } from "@mui/material";
import BtnCustom from "../../ui/BtnCustom";

interface ProAccessModalProps {
  open: boolean;
  onClose: () => void;
  isProChapter?: string | undefined;
}

export const ProAccessModal: React.FC<ProAccessModalProps> = ({
  open,
  onClose,
  isProChapter,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="pro-access-modal-title"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 560,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="pro-access-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          {isProChapter}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          С PRO вы получаете:
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>доступ к эксклюзивным материалам и видеоурокам</li>
            <li>дополнительные темы и углублённое изучение</li>
            <li>больше проектов и практических задач</li>
            <li>менторскую поддержку и сопровождение</li>
            <li>подготовку к техническим собеседованиям</li>
          </ul>
        </Typography>

        <Alert severity="info" sx={{ mt: 4 }}>
          <AlertTitle>
            Дополнительные материалы доступны в рамках <br /> PRO-доступа
          </AlertTitle>
          Вы прошли базовый курс. Если вы хотите продолжить обучение по
          продвинутой программе, открытие PRO-доступа позволит вам получить
          доступ к расширенным темам, задачам и видеоурокам из продвинутого
          курса **без необходимости покупать его полностью**. Это выгодный
          способ перейти к следующему уровню, сохранив доступ ко всем знакомым
          материалам и дополнив их новыми.
        </Alert>

        <Box sx={{ mt: 3, gap: 2, display: "flex", justifyContent: "center" }}>
          <BtnCustom
            text="Закрыть"
            variant="outlined"
            customColor="#846ee6"
            onClick={onClose}
          />
          <BtnCustom
            text="Открыть доступ"
            variant="contained"
            customColor="#846ee6"
            onClick={onClose}
          />
        </Box>
      </Box>
    </Modal>
  );
};
