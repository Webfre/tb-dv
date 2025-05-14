import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface AccessConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AccessConfirmDialog: React.FC<AccessConfirmDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Подтверждение доступа</DialogTitle>
      <DialogContent>
        <Typography>
          Вы уверены, что хотите обновить доступ к курсу для пользователя?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccessConfirmDialog;
