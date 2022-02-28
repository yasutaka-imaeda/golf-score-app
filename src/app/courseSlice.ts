import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export interface CourseState {
  course: {
    courseName: string;
    parNumber: Array<Number>;
  };
}

const initialState: CourseState = {
  course: {
    courseName: "",
    parNumber: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    registerCourse: (state, action) => {
      state.course = action.payload;
    },
    registerCourseName: (state, action) => {
      state.course.courseName = action.payload;
    },
    registerParNumber: (state, action) => {
      const i = action.payload.holeNumber - 1;
      state.course.parNumber[i] = action.payload.parNumber;
    },
  },
});

export const { registerCourse, registerCourseName, registerParNumber } = courseSlice.actions;

export const selectCourse = (state: RootState): CourseState["course"] =>
  state.course.course;

export default courseSlice.reducer;
