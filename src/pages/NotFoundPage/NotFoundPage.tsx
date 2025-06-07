import React from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BtnCustom from "../../ui/BtnCustom";

const fall = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(100vh);
    opacity: 1;
  }
`;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const getRandomStyle = () => ({
    position: "absolute",
    top: "-100px",
    left: `${Math.random() * 100}%`,
    fontSize: `${Math.random() * 30 + 20}px`,
    opacity: Math.random(),
    animation: `${fall} ${Math.random() * 4 + 3}s linear infinite`,
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        overflow: "hidden",
        background: "linear-gradient(135deg, #8a54e0, #664fd9)",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <Typography key={i} sx={getRandomStyle()}>
          404
        </Typography>
      ))}

      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "28px",
              sm: "32px",
              md: "48px",
            },
          }}
        >
          Упс! Страница не найдена
        </Typography>

        <Typography variant="body1" mb={3}>
          Похоже, вы заблудились. Давайте вернемся на главную!
        </Typography>
        <BtnCustom
          text="На главную"
          sx={{ fontSize: "16px" }}
          variant="outlined"
          customColor="white"
          onClick={() => navigate("/")}
        ></BtnCustom>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
