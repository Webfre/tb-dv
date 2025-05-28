import React from "react";
import { Select, SelectProps } from "@mui/material";
import { select_sx } from "../styles/global";

export const PurpleSelect: React.FC<SelectProps> = (props) => {
  return (
    <Select
      {...props}
      sx={{
        ...select_sx,
        ...props.sx,
      }}
    />
  );
};
