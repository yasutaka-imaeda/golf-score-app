import React, { useState } from "react";
import styles from "./AllScore.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";

const AllScore: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>AllScore</div>
    </div>
  );
};

export default AllScore;
