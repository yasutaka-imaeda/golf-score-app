import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState, AppThunk } from "../app/store";

export interface TaskState {
  post: [
    {
      title: string;
      bodyText: string;
      bodyTextHtml: string;
      createAt: string;
      like: number;
      id: number;
    }
  ];
  selectPost: {
    title: string;
    bodyText: string;
    bodyTextHtml: string;
    createAt: string;
    like: number;
    id: number;
  };
  test: any;
  afterTemp: [
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number },
    { time: string; temp: number }
  ];
}

const initialState: TaskState = {
  post: [
    { title: "", bodyText: "", bodyTextHtml: "", createAt: "", like: 0, id: 0 },
  ],
  selectPost: {
    title: "",
    bodyText: "",
    bodyTextHtml: "",
    createAt: "",
    like: 0,
    id: 0,
  },
  test: [],
  afterTemp: [
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
    { time: "", temp: 0 },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    registerPost: (state, action) => {
      state.post = action.payload;
    },
    registerSelectPost: (state, action) => {
      state.selectPost = action.payload;
    },
    registerTest: (state, action) => {
      state.test = action.payload;
    },
    registerAfterTemp: (state, action) => {
      state.afterTemp = action.payload;
    },
  },
});

export const {
  registerPost,
  registerSelectPost,
  registerAfterTemp,
  registerTest,
} = taskSlice.actions;

export const selectPost = (state: RootState): TaskState["post"] =>
  state.task.post;
export const selectSelectPost = (state: RootState): TaskState["selectPost"] =>
  state.task.selectPost;
export const selectTest = (state: RootState): TaskState["test"] =>
  state.task.test;
export const selectAfterTemp = (state: RootState): TaskState["afterTemp"] =>
  state.task.afterTemp;

export default taskSlice.reducer;
