import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserState {
  user: {
    id: string;
    userName: string;
  };
}

const initialState: UserState = {
  user: { id: "", userName: "" },
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
