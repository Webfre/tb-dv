import React from "react";
import { Box, Typography } from "@mui/material";
import TestProgressRing from "./TestProgressRing";
import TaskProgressRing from "./TaskProgressRing";
import PracticalWorksProgressRing from "./PracticalWorksProgressRing";

const ProgressRing: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Прогресс
      </Typography>

      <Box
        display="flex"
        gap={5}
        justifyContent="center"
        flexWrap="wrap"
        mb={4}
      >
        <PracticalWorksProgressRing />
        <TestProgressRing />
        <TaskProgressRing />
      </Box>
    </>
  );
};

export default ProgressRing;
