import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import styles from "./InputCourse.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  registerCourseName,
  selectSettedCoursenamelist,
  setParNumber,
} from "../../app/courseSlice";
import { listCourses } from "../../graphql/queries";

const InputCourse: React.FC = () => {
  const dispatch = useAppDispatch();
  const settedCourseNameList = useAppSelector(selectSettedCoursenamelist);
  const course = settedCourseNameList.map((item: any) => {
    return { label: item.courseName };
  });
  const setInputCourse: any = async (Inputcourse: any) => {
    const filter = {
      courseName: {
        eq: Inputcourse.label,
      },
    };
    const listCourse: any = await API.graphql(
      graphqlOperation(listCourses, { filter: filter })
    );
    dispatch(setParNumber(listCourse.data.listCourses.items[0].parNumber));
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>コースの入力</div>
      <div className={styles.container}>
        <div className={styles.alreadyCourse}>
          <Autocomplete
            disablePortal
            id="selectCourseInput"
            options={course}
            sx={{ width: 300 }}
            onChange={(event, value) => setInputCourse(value)}
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
