import React, { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./EditButton.module.scss";
import Button from "@mui/material/Button";
import {
  registerScore,
  selectScore,
  selectScoreStatistics,
  selectSelectScoreId,
  setRegisterScore,
  setSumData,
} from "../../app/scoreSlice";
import { deleteScore, updateScore } from "../../graphql/mutations";
import { setParNumber } from "../../app/courseSlice";

const EditButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const sumData: any = useAppSelector(selectScoreStatistics);
  const scoreId: any = useAppSelector(selectSelectScoreId);
  const sumScore = holeScore.reduce((sum: any, hole: any) => {
    return sum + hole.score;
  }, 0);
  const sumPat = holeScore.reduce((sum: any, hole: any) => {
    return sum + hole.pat;
  }, 0);

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
    dispatch(setSumData({ sumScore: sumScore, sumPat: sumPat }));
  }, [dispatch, sumPat, sumScore]);

  const onDeleteScore = async () => {
    await API.graphql(
      graphqlOperation(deleteScore, { input: { id: scoreId } })
    );
    dispatch(setRegisterScore(resetData));
    dispatch(setParNumber(resetParNumberData));
  };

  const onEditScore = async () => {
    await API.graphql(
      graphqlOperation(updateScore, {
        input: {
          id: scoreId,
          score: JSON.stringify(holeScore),
          sumScore: sumData.sumScore,
          sumPat: sumData.sumPat,
        },
      })
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.sum}>スコア: {sumScore}</div>
      <div className={styles.sum}>パット合計: {sumPat}</div>
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
