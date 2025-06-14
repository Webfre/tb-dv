export const chip_sx = {
  backgroundColor: "#846ee6",
  color: "white",
  "&:hover": {
    backgroundColor: "#6e5aca",
  },
};

export const chip_sx_light = {
  backgroundColor: "rgba(132, 110, 230, 0.1)",
  color: "#846ee6",
  "&:hover": {
    backgroundColor: "rgba(132, 110, 230, 0.2)",
  },
};

export const chip_sx_success = {
  backgroundColor: "rgba(76, 175, 80, 0.1)",
  color: "#4caf50",
  "&:hover": {
    backgroundColor: "rgba(76, 175, 80, 0.2)",
  },
};

export const chip_sx_light_border = {
  backgroundColor: "rgba(132, 110, 230, 0.1)",
  border: "1px solid rgba(132, 110, 230, 0.3)",
  color: "#846ee6",
  "&:hover": {
    backgroundColor: "rgba(132, 110, 230, 0.2)",
  },
};

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

export const checkbox_sx = {
  color: "#c3b5fa", // начальный (не выбранный) цвет
  "&.Mui-checked": {
    color: "#947ef6", // выбранный цвет
  },
  "&.MuiCheckbox-root:hover": {
    backgroundColor: "rgba(148, 126, 246, 0.08)",
    borderRadius: "4px",
  },
  "&.Mui-disabled": {
    color: "#d3ccf5", // цвет в состоянии disabled
  },
  "&.Mui-focusVisible": {
    outline: "2px solid #b7a7fb",
    outlineOffset: 2,
    borderRadius: "4px",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
};

export const textField_input_sx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& fieldset": {
      borderColor: "#947ef6",
    },
    "&:hover fieldset": {
      borderColor: "#7a62e1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#947ef6",
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#947ef6",
    "&.Mui-focused": {
      color: "#947ef6",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "#947ef6",
  },
};
