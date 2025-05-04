import React from "react";
import { Button } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface BtnCustomProps {
  icon?: ReactNode;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  fullWidth?: boolean;
}

const BtnCustom: React.FC<BtnCustomProps> = ({
  icon,
  text,
  onClick,
  sx,
  disabled,
  type,
  color,
  fullWidth,
  variant = "outlined",
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
      color={color}
      fullWidth={fullWidth}
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
