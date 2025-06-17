import React from "react";
import { Select, SelectProps } from "@mui/material";
import { select_sx, select_sx_light } from "../styles/global";

type StyleVariant = "default" | "light";

type PurpleSelectProps = SelectProps & {
  styleVariant?: StyleVariant;
};

export const PurpleSelect: React.FC<PurpleSelectProps> = ({
  styleVariant = "default",
  sx,
  ...props
}) => {
  const baseStyle = styleVariant === "light" ? select_sx_light : select_sx;

  return (
    <Select
      {...props}
      sx={{
        ...baseStyle,
        ...sx,
      }}
    />
  );
};
