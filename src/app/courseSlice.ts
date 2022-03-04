import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export interface CourseState {
  course: {
    courseName: string;
    parNumber: Array<Number>;
  };
  settedCourseNamelist: Array<string>;
}

const initialState: CourseState = {
  course: {
    courseName: "",
    parNumber: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  settedCourseNamelist: [],
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
    setCourseNameList: (state, action) => {
      state.settedCourseNamelist = [
        ...state.settedCourseNamelist,
        action.payload,
      ];
    },
  },
});

export const {
  registerCourse,
  registerCourseName,
  registerParNumber,
  setCourseNameList,
} = courseSlice.actions;

export const selectCourse = (state: RootState): CourseState["course"] =>
  state.course.course;
export const selectSettedCoursenamelist = (
  state: RootState
): CourseState["settedCourseNamelist"] => state.course.settedCourseNamelist;

export default courseSlice.reducer;
