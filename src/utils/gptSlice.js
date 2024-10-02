import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggleState: false,
  },
  reducers: {
    gptToggle: (state) => {
      state.gptToggleState = !state.gptToggleState;
    },
  },
});

export const { gptToggle } = gptSlice.actions;
export default gptSlice.reducer;
