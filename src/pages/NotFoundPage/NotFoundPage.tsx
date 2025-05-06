import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BtnCustom from "../../ui/BtnCustom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      textAlign="center"
    >
      <Typography variant="h3" gutterBottom>
        404 — Страница не найдена
      </Typography>
      <Typography mb={2} variant="body1" gutterBottom>
        Возможно, вы перешли по неправильной ссылке.
      </Typography>
      <BtnCustom
        text="На главную"
        variant="contained"
        onClick={() => navigate("/")}
      />
    </Box>
  );
};

export default NotFoundPage;
