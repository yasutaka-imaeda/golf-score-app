import React from "react";
import styles from "./InputCourse.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  registerCourseName,
  selectSettedCoursenamelist,
} from "../../app/courseSlice";

const InputCourse: React.FC = () => {
  const dispatch = useAppDispatch();
  const settedCourseNameList = useAppSelector(selectSettedCoursenamelist);
  const course = settedCourseNameList.map((item: any) => {
    return { label: item.courseName };
  });

  return (
    <div className={styles.root}>
      <div className={styles.title}>コースの入力</div>
      <div className={styles.container}>
        <div className={styles.alreadyCourse}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={course}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="既存のコース" />
            )}
          />
        </div>
        <div className={styles.newCourse}>
          <TextField
            label="新たなコースの入力"
            onChange={(e: any) => dispatch(registerCourseName(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default InputCourse;
