import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface ProAccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const ProAccessModal: React.FC<ProAccessModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="pro-access-modal-title"
    >
      <Box sx={style}>
        <Typography
          id="pro-access-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Открыть PRO доступ
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Для доступа к этому контенту требуется PRO подписка.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} sx={{ mr: 2 }}>
            Закрыть
          </Button>
          <Button variant="contained" color="primary">
            Оформить подписку
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
