import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectScoreList } from "../../app/scoreSlice";
import styles from "./Graph.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

const Graph: React.FC = () => {
  const setScoreList = useAppSelector(selectScoreList);
  let data: any;
  const checkForOneLetter = (data: string) => {
    if (data.length === 1) {
      return `0${data}`;
    } else {
      return data;
    }
  };
  const scoreList = setScoreList.map((item: any) => {
    if (item.id !== undefined) {
      const japanTime = new Date(item.createdAt);
      const getFullYear = String(japanTime.getFullYear());
      const getMonth = checkForOneLetter(String(japanTime.getMonth() + 1));
      const getDate = checkForOneLetter(String(japanTime.getDate()));
      const createJapanTime = `${getFullYear}/${getMonth}/${getDate}`;
      return {
        scoreData: JSON.parse(item.score),
        sumScore: item.sumScore,
        sumPat: item.sumPat,
        scoreCreatedAt: createJapanTime,
      };
    } else {
      return {};
    }
  });
  data = scoreList.map((item: any) => {
    return { create: item.scoreCreatedAt, score: item.sumScore };
  });

  return (
    <div className={styles.root}>
      <div className={styles.graphWrapper}>
        {data !== null ? (
          <LineChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, bottom: 24, left: 20 }}
          >
            <Line type="monotone" dataKey="score" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="create">
              <Label value="日付" offset={0} position="bottom" />
            </XAxis>
            <YAxis
              label={{ value: "スコア", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
          </LineChart>
        ) : (
          <div>データがありません</div>
        )}
      </div>
      <div className={styles.editWrapper}>編集ボタン</div>
    </div>
  );
};

export default Graph;
