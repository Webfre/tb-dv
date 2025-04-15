import React from "react";
import { Button } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface BtnCustomProps {
  icon?: ReactNode;
  text: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
}

const BtnCustom: React.FC<BtnCustomProps> = ({
  icon,
  text,
  onClick,
  sx,
  disabled,
  variant = "outlined",
}) => {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        px: 3,
        fontWeight: 500,
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

export default BtnCustom;
