import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { testData } from "../data/testData";

const ProgressRing: React.FC = () => {
  const totalTests = Object.keys(testData).length;

  const successfulTests = Object.entries(testData).filter(([key]) => {
    const historyKey = `history_${key}`;
    const historyRaw = localStorage.getItem(historyKey);
    if (!historyRaw) return false;

    try {
      const history = JSON.parse(historyRaw);
      const best = Math.max(...history.map((h: any) => h.percentage));
      return best >= 60; // Пройдено, если результат >= 60%
    } catch {
      return false;
    }
  }).length;

  const progress = (successfulTests / totalTests) * 100;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
      <Box
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          border: "6px solid #e0e0e0", // внешний бордер (серый)
        }}
      >
        <CircularProgress
          variant="determinate"
          value={progress}
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
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body1" mt={2}>
        Пройдено тестов: {successfulTests} из {totalTests}
      </Typography>
    </Box>
  );
};

export default ProgressRing;
