import React, { useState } from "react";
import styles from "./Calender.module.scss";
import { useAppDispatch } from "../../app/hooks";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";

const Calender: React.FC = () => {
  const dispatch = useAppDispatch();
  registerLocale("ja", ja);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.root}>
      <div className={styles.title}>プレー日</div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
        locale="ja"
      />
    </div>
  );
};

export default Calender;
