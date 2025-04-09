import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    // token 저장
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    // toekn 삭제
    delToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setToken, delToken } = tokenSlice.actions;
export default tokenSlice.reducer;
