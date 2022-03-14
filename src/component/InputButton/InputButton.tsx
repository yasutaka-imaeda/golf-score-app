import React, { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./InputButton.module.scss";
import Button from "@mui/material/Button";
import { selectCourse, setParNumber } from "../../app/courseSlice";
import {
  selectScore,
  selectScoreStatistics,
  setRegisterScore,
  setSumData,
} from "../../app/scoreSlice";
import { selectUser } from "../../app/userSlice";
import { createCourse, createScore } from "../../graphql/mutations";
import { listCourses } from "../../graphql/queries";

const InputButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const courseInfo: any = useAppSelector(selectCourse);
  const userInfo: any = useAppSelector(selectUser);
  const sumData: any = useAppSelector(selectScoreStatistics);
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

  const submitScore = async () => {
    const filter = {
      and: [
        {
          courseName: {
            eq: courseInfo.courseName,
          },
        },
        {
          userId: {
            eq: userInfo.user.id,
          },
        },
      ],
    };
    const listCourse: any = await API.graphql(
      graphqlOperation(listCourses, { filter: filter })
    );
    let courseId;
    if (listCourse.data.listCourses.items.length === 0) {
      await API.graphql(
        graphqlOperation(createCourse, {
          input: {
            userId: userInfo.user.id,
            courseName: courseInfo.courseName,
            parNumber: courseInfo.parNumber,
          },
        })
      );
      const newCourse: any = await API.graphql(
        graphqlOperation(listCourses, { filter: filter })
      );
      courseId = newCourse.data.listCourses.items[0].id;
    } else {
      courseId = listCourse.data.listCourses.items[0].id;
    }
    await API.graphql(
      graphqlOperation(createScore, {
        input: {
          userId: userInfo.user.id,
          score: JSON.stringify(holeScore),
          courseScoreId: courseId,
          sumScore: sumData.sumScore,
          sumPat: sumData.sumPat,
        },
      })
    );
    dispatch(setRegisterScore(resetData));
    dispatch(setParNumber(resetParNumberData));
  };

  return (
    <div className={styles.root}>
      <div className={styles.sum}>スコア: {sumScore}</div>
      <div className={styles.sum}>パット合計: {sumPat}</div>
      <Button
        variant="contained"
        disableElevation
        color="success"
        size="large"
        onClick={submitScore}
      >
        登録
      </Button>
    </div>
  );
};

export default InputButton;
