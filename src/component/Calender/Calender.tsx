import React, { useEffect, useState } from "react";
import styles from "./Calender.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import {
  selectCreateScoreDate,
  setScoreCreateDate,
} from "../../app/scoreSlice";

const Calender: React.FC = () => {
  const dispatch = useAppDispatch();
  registerLocale("ja", ja);
  const initialDate = useAppSelector(selectCreateScoreDate);
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    if (initialDate !== "") {
      const y = Number(initialDate.slice(0, 4));
      const m = Number(initialDate.slice(5, 7)) - 1;
      const d = Number(initialDate.slice(8, 10));
      const scoreDate = new Date(y, m, d);
      setStartDate(scoreDate);
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.title}>プレー日</div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          const y = date.getFullYear();
          const m = ("00" + (date.getMonth() + 1)).slice(-2);
          const d = ("00" + date.getDate()).slice(-2);
          const dateData = y + "-" + m + "-" + d;
          dispatch(setScoreCreateDate(dateData));
        }}
        dateFormat="yyyy/MM/dd"
        locale="ja"
      />
    </div>
  );
};

export default Calender;
