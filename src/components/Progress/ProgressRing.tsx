import React from "react";
import { Box, Typography } from "@mui/material";
import { Progress } from "../../api/progressApi";
import TestProgressRing from "./TestProgressRing";
import TaskProgressRing from "./TaskProgressRing";
import PracticalWorksProgressRing from "./PracticalWorksProgressRing";

interface ProgressRingProps {
  progressData: Progress;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ progressData }) => {
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
        <PracticalWorksProgressRing progressData={progressData} />
        <TestProgressRing progressData={progressData} />
        <TaskProgressRing />
      </Box>
    </>
  );
};

export default ProgressRing;
