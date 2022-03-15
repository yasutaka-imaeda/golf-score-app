import React from "react";
import Graph from "../../component/Graph/Graph";
import Header from "../../component/Header/Header";
import styles from "./Analysis.module.scss";

const Analysis: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.graph}>
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
