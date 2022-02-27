import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState, AppThunk } from "../app/store";

export interface UserState {
  user: {
    userName: string;
  };
}

const initialState: UserState = {
  user: { userName: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser } = userSlice.actions;

export const selectUser = (state: RootState): UserState["user"] =>
  state.user.user;

export default userSlice.reducer;
