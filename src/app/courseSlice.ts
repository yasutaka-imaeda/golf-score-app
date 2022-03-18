import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export interface CourseState {
  course: {
    courseName: string;
    parNumber: Array<Number>;
  };
  settedCourseNamelist: Array<string>;
  viewFlag: boolean;
}

const initialState: CourseState = {
  course: {
    courseName: "",
    parNumber: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  settedCourseNamelist: [],
  viewFlag: false,
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
    setParNumber: (state, action) => {
      state.course.parNumber = action.payload;
    },
    registerParNumber: (state, action) => {
      const i = action.payload.holeNumber - 1;
      state.course.parNumber[i] = action.payload.parNumber;
    },
    setCourseNameList: (state, action) => {
      state.settedCourseNamelist = action.payload;
    },
    setViewFlag: (state, action) => {
      state.viewFlag = action.payload;
    },
  },
});

export const {
  registerCourse,
  registerCourseName,
  registerParNumber,
  setCourseNameList,
  setParNumber,
  setViewFlag,
} = courseSlice.actions;

export const selectCourse = (state: RootState): CourseState["course"] =>
  state.course.course;
export const selectSettedCoursenamelist = (
  state: RootState
): CourseState["settedCourseNamelist"] => state.course.settedCourseNamelist;
export const selectViewFlag = (state: RootState): CourseState["viewFlag"] =>
  state.course.viewFlag;

export default courseSlice.reducer;
