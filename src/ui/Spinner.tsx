import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Spinner: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <CircularProgress size={40} thickness={4} />
    </Box>
  );
};

export default Spinner;
