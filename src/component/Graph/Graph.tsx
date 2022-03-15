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
  const scoreList = setScoreList.map((item: any) => {
    if (item.id !== undefined) {
      return {
        scoreData: JSON.parse(item.score),
        sumScore: item.sumScore,
        sumPat: item.sumPat,
        scoreCreatedAt: item.createdAt.substring(5, 10),
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
      {data !== null ? (
        <LineChart
          width={900}
          height={600}
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
  );
};

export default Graph;
