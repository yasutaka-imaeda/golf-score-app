import React, { useState } from "react";
import styles from "./Calender.module.scss";
import { useAppDispatch } from "../../app/hooks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender: React.FC = () => {
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.root}>
      <div className={styles.title}>コースを回った日付</div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
};

export default Calender;
