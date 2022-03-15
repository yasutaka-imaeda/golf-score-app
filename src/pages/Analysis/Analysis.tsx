import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectScoreList } from "../../app/scoreSlice";
import Header from "../../component/Header/Header";
import styles from "./Analysis.module.scss";

const Analysis: React.FC = () => {
  const setScoreList = useAppSelector(selectScoreList);
  const scoreList = setScoreList.map((item: any) => {
    return {
      scoreData: JSON.parse(item.score),
      sumScore: item.sumScore,
      sumPat: item.sumPat,
      scoreCreatedAt: item.createdAt.substring(5, 10),
    };
  });
  console.log(scoreList);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
