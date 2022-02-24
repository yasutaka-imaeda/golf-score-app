import React from "react";
import Header from "../../component/Header/Header";
import InputCourse from "../../component/InputCourse/InputCourse";
import InScoreOfOneHole from "../../component/InScoreOfOneHole/InScoreOfOneHole";
import styles from "./InputScore.module.scss";

const InputScore: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <InputCourse />
        <InScoreOfOneHole />
      </div>
    </div>
  );
};

export default InputScore;
