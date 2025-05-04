import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface AdminConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isAdmin?: boolean;
}

const AdminConfirmDialog: React.FC<AdminConfirmDialogProps> = ({
  open,
  onClose,
  onConfirm,
  isAdmin = false,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Изменение прав администратора</DialogTitle>
      <DialogContent>
        <Typography>
          {isAdmin
            ? "Вы уверены, что хотите снять права администратора?"
            : "Вы уверены, что хотите назначить пользователя админом?"}
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

export default AdminConfirmDialog;
