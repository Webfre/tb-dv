import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { SxProps, Theme } from "@mui/material";

interface CustomLinearProgressProps {
  value: number;
  backgroundColorPercent?: string;
  backgroundColor?: string;
  sx?: SxProps<Theme>;
}

export const CustomLinearProgress: React.FC<CustomLinearProgressProps> = ({
  value,
  backgroundColorPercent = "#1976d2",
  backgroundColor = "#eee",
  sx = {},
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
        ...sx,
      }}
    />
  );
};
