import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { prDataList } from "../../DB/prDataList";
import { Progress } from "../../api/progressApi";
import { getPrWorksProgress } from "../../lib/getPrWorksProgress";

interface ProgressRingProps {
  progressData: Progress;
}

const PracticalWorksProgressRing: React.FC<ProgressRingProps> = ({
  progressData,
}) => {
  const totalPracticalWorks = prDataList.length;

  const completedPracticalWorks = prDataList.reduce((acc, pr) => {
    const { completedPrWorksCount } = getPrWorksProgress(
      pr.moduleId,
      progressData?.taskTopics
    );
    return acc + completedPrWorksCount;
  }, 0);

  const practicalProgress =
    (completedPracticalWorks / totalPracticalWorks) * 100;

  return (
    <Box textAlign="center">
      <Box
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          border: "6px solid #e0e0e0",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={practicalProgress}
          size={100}
          thickness={5}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" component="div" color="textSecondary">
            {`${Math.round(practicalProgress)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" mt={2}>
        Выполнено работ: {completedPracticalWorks} из {totalPracticalWorks}
      </Typography>
    </Box>
  );
};

export default PracticalWorksProgressRing;
