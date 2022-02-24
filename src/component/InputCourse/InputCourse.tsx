import React from "react";
import styles from "./InputCourse.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const InputCourse: React.FC = () => {
  const course: any = [
    { label: "ゴルフ場A", Country: "Japan" },
    { label: "ゴルフ場B", Country: "Japan" },
    { label: "ゴルフ場C", Country: "Japan" },
    { label: "ゴルフ場D", Country: "Japan" },
    { label: "ゴルフ場E", Country: "Japan" },
    { label: "ゴルフ場F", Country: "Japan" },
    { label: "ゴルフ場G", Country: "Japan" },
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
          <TextField label="新たなコースの入力" />
        </div>
      </div>
    </div>
  );
};

export default InputCourse;
