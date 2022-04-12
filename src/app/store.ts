import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";
import scoreReducer from "./scoreSlice";
import courseReducer from "./courseSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
    score: scoreReducer,
    course: courseReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
