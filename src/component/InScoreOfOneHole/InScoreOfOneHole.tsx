import React from "react";
import styles from "./InScoreOfOneHole.module.scss";

const InScoreOfOneHole: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          スコア
        </div>
      </div>
    </div>
  );
};

export default InScoreOfOneHole;
