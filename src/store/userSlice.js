import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 사용자 이름 설정
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    // 사용자 이름 삭제
    delUserName: (state) => {
      state.userName = null;
    },
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
