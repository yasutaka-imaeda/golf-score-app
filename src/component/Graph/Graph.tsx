import React, { useEffect, useState } from "react";
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
import { Button } from "@mui/material";

const Graph: React.FC = () => {
  const setScoreList = useAppSelector(selectScoreList);
  const [data, setData] = useState([]);
  const [label, setLabel] = useState("スコア");
  let setFirstData: any;
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
  const reverseScoreList = scoreList.reverse();
  setFirstData = reverseScoreList.map((item: any) => {
    return { create: item.scoreCreatedAt, score: item.sumScore };
  });

  useEffect(() => {
    setData(setFirstData);
  }, []);

  const setGraphParAve = () => {
    const setEditData: any = reverseScoreList.map((item: any) => {
      const avePat =
        Math.round((item.sumPat / 18) * Math.pow(10, 2)) / Math.pow(10, 2);
      return { create: item.scoreCreatedAt, score: avePat };
    });
    setData(setEditData);
    setLabel("パット平均");
  };
  const setGraphSumScore = () => {
    const setEditData: any = reverseScoreList.map((item: any) => {
      return { create: item.scoreCreatedAt, score: item.sumScore };
    });
    setData(setEditData);
    setLabel("スコア");
  };

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
              label={{ value: label, angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
          </LineChart>
        ) : (
          <div>データがありません</div>
        )}
      </div>
      <div className={styles.editWrapper}>
        <div className={styles.button}>
          <div className={styles.edit}>
            <Button
              variant="contained"
              disableElevation
              color="success"
              size="large"
              onClick={setGraphSumScore}
            >
              スコア
            </Button>
          </div>
          <div className={styles.delete}>
            <Button
              variant="contained"
              disableElevation
              color="success"
              size="large"
              onClick={setGraphParAve}
            >
              パット平均
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
