import React from "react";
import { Box, Typography } from "@mui/material";
import { Progress } from "../../api/progressApi";
import { TestDataCollection } from "../../DB/index_type";
import TestProgressRing from "./TestProgressRing";
import TaskProgressRing from "./TaskProgressRing";
import PracticalWorksProgressRing from "./PracticalWorksProgressRing";

interface ProgressRingProps {
  courseId: string;
  progressData: Progress;
  tests: TestDataCollection;
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  progressData,
  tests,
  courseId,
}) => {
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
        mt={2}
      >
        <PracticalWorksProgressRing progressData={progressData} />
        <TestProgressRing tests={tests} progressData={progressData} />
        <TaskProgressRing courseId={courseId} />
      </Box>
    </>
  );
};

export default ProgressRing;
