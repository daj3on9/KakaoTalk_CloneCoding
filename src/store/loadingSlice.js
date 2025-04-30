import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: () => true,
    endLoading: () => false,
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
