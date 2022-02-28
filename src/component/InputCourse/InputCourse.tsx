import React from "react";
import styles from "./InputCourse.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppDispatch } from "../../app/hooks";
import { registerCourseName } from "../../app/courseSlice";

const InputCourse: React.FC = () => {
  const dispatch = useAppDispatch();
  const course: any = [
    { label: "ゴルフ場A" },
    { label: "ゴルフ場B" },
    { label: "ゴルフ場C" },
    { label: "ゴルフ場D" },
    { label: "ゴルフ場E" },
    { label: "ゴルフ場F" },
    { label: "ゴルフ場G" },
  ];
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
