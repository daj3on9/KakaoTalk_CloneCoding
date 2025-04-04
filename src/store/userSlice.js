import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
