import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetUserProgressQuery } from "../../api/api";
import { testData } from "../../data/testData";

const TestProgressRing: React.FC = () => {
  const totalTests = Object.keys(testData).length;
  const { data: progressData } = useGetUserProgressQuery();

  const successfulTests = Object.entries(progressData?.history || {}).filter(
    ([_, history]) => {
      const best = Math.max(...history.map((h: any) => h.percentage));
      return best >= 60;
    }
  ).length;

  const testProgress = (successfulTests / totalTests) * 100;

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
          value={testProgress}
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
            {`${Math.round(testProgress)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" mt={2}>
        Пройдено тестов: {successfulTests} из {totalTests}
      </Typography>
    </Box>
  );
};

export default TestProgressRing;
