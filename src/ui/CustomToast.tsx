import React from "react";
import { Box, Typography } from "@mui/material";

interface CustomToastProps {
  message: string;
  icon?: React.ReactNode;
}

const CustomToast: React.FC<CustomToastProps> = ({ message, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        color: "white",
        borderRadius: "12px",
        fontWeight: 500,
        fontSize: "15px",
      }}
    >
      {icon && <Box sx={{ display: "flex", alignItems: "center" }}>{icon}</Box>}
      <Typography>{message}</Typography>
    </Box>
  );
};

export default CustomToast;
