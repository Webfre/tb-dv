import React from "react";
import { Select, SelectProps } from "@mui/material";

export const label_sx = {
  color: "#846ee6",
  "&.Mui-focused": {
    color: "#846ee6",
  },
  "&.MuiInputLabel-shrink": {
    color: "#846ee6",
  },
};

export const menu_item_sx = {
  // color: "#846ee6",
  "&.Mui-selected": {
    backgroundColor: "#ede6ff",
    color: "#5d4db2",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#dcd0ff",
  },
};

export const select_sx = {
  borderRadius: "20px",
  color: "#846ee6",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#846ee6",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#a18dff",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#846ee6",
  },
  "& .MuiSvgIcon-root": {
    color: "#846ee6",
  },
};

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
