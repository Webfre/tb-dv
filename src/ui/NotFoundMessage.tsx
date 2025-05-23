import React from "react";
import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface NotFoundMessageProps {
  icon?: ReactNode;
  text: string;
}

export const NotFoundMessage: React.FC<NotFoundMessageProps> = ({
  icon,
  text,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={4}>
      {icon && <Box mb={1}>{icon}</Box>}
      <Typography variant="body1" color="text.secondary" textAlign="center">
        {text}
      </Typography>
    </Box>
  );
};
