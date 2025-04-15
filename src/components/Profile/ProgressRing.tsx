import React from "react";
import { Box } from "@mui/material";
import TestProgressRing from "./TestProgressRing";
import TaskProgressRing from "./TaskProgressRing";

const ProgressRing: React.FC = () => {
  return (
    <Box display="flex" gap={5} justifyContent="center" flexWrap="wrap" mb={4}>
      <TestProgressRing />
      <TaskProgressRing />
    </Box>
  );
};

export default ProgressRing;
