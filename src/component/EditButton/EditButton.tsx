import React, { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./EditButton.module.scss";
import Button from "@mui/material/Button";
import {
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
import {
  selectIsDeleteModalOpen,
  selectIsEditModalOpen,
  setIsDeleteModalOpen,
  setIsEditModalOpen,
} from "../../app/modalSlice";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";

const EditButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const createScoreDate: any = useAppSelector(selectCreateScoreDate);
  const sumData: any = useAppSelector(selectScoreStatistics);
  const scoreId: any = useAppSelector(selectSelectScoreId);
  const editModalOpen = useAppSelector(selectIsEditModalOpen);
  const deleteModalOpen = useAppSelector(selectIsDeleteModalOpen);
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
  }, [dispatch, sumPat, sumScore, avePat]);

  const onDeleteScore = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteScore, { input: { id: scoreId } })
      );
      dispatch(setRegisterScore(resetData));
      dispatch(setParNumber(resetParNumberData));
      dispatch(setScoreCreateDate(""));
      dispatch(setIsDeleteModalOpen(true));
    } catch {
      window.alert("削除に失敗しました。");
    }
  };

  const onEditScore = async () => {
    try {
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
      dispatch(setIsEditModalOpen(true));
    } catch {
      window.alert("更新に失敗しました。");
    }
  };

  return (
    <div className={styles.root}>
      <EditModal isModalOpen={editModalOpen} />
      <DeleteModal isModalOpen={deleteModalOpen} />
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
