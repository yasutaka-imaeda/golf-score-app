import React, { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./EditButton.module.scss";
import Button from "@mui/material/Button";
import {
  registerScore,
  selectCreateScoreDate,
  selectScore,
  selectScoreStatistics,
  selectSelectScoreId,
  setRegisterScore,
  setScoreCreateDate,
  setSumData,
} from "../../app/scoreSlice";
import { deleteScore, updateScore } from "../../graphql/mutations";
import { setParNumber } from "../../app/courseSlice";

const EditButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const createScoreDate: any = useAppSelector(selectCreateScoreDate);
  const sumData: any = useAppSelector(selectScoreStatistics);
  const scoreId: any = useAppSelector(selectSelectScoreId);
  const sumScore = holeScore.reduce((sum: any, hole: any) => {
    return sum + hole.score;
  }, 0);
  const sumPat = holeScore.reduce((sum: any, hole: any) => {
    return sum + hole.pat;
  }, 0);
  const avePat = Math.round((sumPat / 18) * Math.pow(10, 2)) / Math.pow(10, 2);

  const resetData = [
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
  ];
  const resetParNumberData = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  useEffect(() => {
    dispatch(
      setSumData({ sumScore: sumScore, sumPat: sumPat, avePat: avePat })
    );
  }, [dispatch, sumPat, sumScore]);

  const onDeleteScore = async () => {
    await API.graphql(
      graphqlOperation(deleteScore, { input: { id: scoreId } })
    );
    dispatch(setRegisterScore(resetData));
    dispatch(setParNumber(resetParNumberData));
    dispatch(setScoreCreateDate(""));
  };

  const onEditScore = async () => {
    await API.graphql(
      graphqlOperation(updateScore, {
        input: {
          id: scoreId,
          score: JSON.stringify(holeScore),
          sumScore: sumData.sumScore,
          sumPat: sumData.sumPat,
          scoreDate: createScoreDate,
        },
      })
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.sum}>スコア: {sumScore}</div>
      <div className={styles.sum}>パット平均: {avePat}</div>
      <div className={styles.button}>
        <div className={styles.edit}>
          <Button
            variant="contained"
            disableElevation
            color="success"
            size="large"
            onClick={onEditScore}
          >
            更新
          </Button>
        </div>
        <div className={styles.delete}>
          <Button
            variant="contained"
            disableElevation
            color="success"
            size="large"
            onClick={onDeleteScore}
          >
            削除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditButton;
