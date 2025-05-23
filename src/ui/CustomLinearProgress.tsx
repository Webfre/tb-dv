import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

interface CustomLinearProgressProps {
  value: number;
  backgroundColorPercent?: string;
  backgroundColor?: string;
}

export const CustomLinearProgress: React.FC<CustomLinearProgressProps> = ({
  value,
  backgroundColorPercent = "#1976d2",
  backgroundColor = "#eee",
}) => {
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 8,
        borderRadius: 5,
        backgroundColor,
        "& .MuiLinearProgress-bar": {
          backgroundColor: backgroundColorPercent,
        },
      }}
    />
  );
};
