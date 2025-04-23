import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  helpOpen: boolean;
}

const initialState: UIState = {
  helpOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openHelp: (state) => {
      state.helpOpen = true;
    },
    closeHelp: (state) => {
      state.helpOpen = false;
    },
    toggleHelp: (state) => {
      state.helpOpen = !state.helpOpen;
    },
  },
});

export const { openHelp, closeHelp, toggleHelp } = uiSlice.actions;
export default uiSlice.reducer;
