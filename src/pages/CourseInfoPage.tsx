import React from "react";
import { Box, Typography, Container, Paper, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BtnCustom from "../ui/BtnCustom";

const CourseInfoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 4, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Доступ к курсу пока не получен
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            Вы успешно зарегистрировались, но пока не получили ключ доступа к
            курсу.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Чтобы получить доступ, обратитесь к администратору.
          </Typography>

          <Link
            href="https://t.me/romanwebfree"
            target="_blank"
            rel="noopener"
            underline="none"
          >
            <BtnCustom
              text="Написать в Telegram — Мухаметшин Роман (руководитель учебного
              направления)"
              variant="outlined"
              sx={{ mt: 3 }}
            />
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default CourseInfoPage;
