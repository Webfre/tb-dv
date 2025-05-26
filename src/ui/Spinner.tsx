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
      <CircularProgress sx={{ color: "#947ef6" }} size={60} thickness={4} />
    </Box>
  );
};

export default Spinner;
