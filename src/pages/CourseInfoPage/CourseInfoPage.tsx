import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BtnCustom from "../../ui/BtnCustom";

const CourseInfoModal: React.FC<{ open: boolean }> = ({ open }) => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsRegistered(!!token);
  }, []);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Доступ к курсу пока не получен</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {isRegistered
            ? "Вы успешно зарегистрировались, но пока не получили доступ к курсу."
            : "Вы не зарегистрированы. Пожалуйста, войдите или зарегистрируйтесь."}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Чтобы получить доступ, обратитесь к администратору.
        </Typography>

        <Link
          href="https://t.me/romanwebfree"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <BtnCustom
            text="Написать в Telegram"
            variant="outlined"
            customColor="#846ee6"
            fullWidth
            sx={{ mt: 3 }}
          />
        </Link>

        {!isRegistered && (
          <BtnCustom
            fullWidth
            customColor="#846ee6"
            text="Зарегистрироваться"
            variant="text"
            sx={{ mt: 2 }}
            onClick={() => navigate("/register")}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CourseInfoModal;
