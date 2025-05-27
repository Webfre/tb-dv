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
  customColor?: string;
  fullWidth?: boolean;
  white?: boolean;
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
  customColor,
  variant = "outlined",
  white = false,
}) => {
  const whiteStyles: SxProps<Theme> = white
    ? {
        backgroundColor: "#fff",
        color: "#000",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }
    : {};

  const customColorStyles: SxProps<Theme> = customColor
    ? {
        backgroundColor: variant === "contained" ? customColor : "transparent",
        color: variant === "contained" ? "#fff" : customColor,
        borderColor: customColor,
        "&:hover": {
          backgroundColor:
            variant === "contained" ? `${customColor}cc` : `${customColor}1A`,
        },
      }
    : {};

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
        ...whiteStyles,
        ...customColorStyles,
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

export default BtnCustom;
