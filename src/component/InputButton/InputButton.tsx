import React, { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./InputButton.module.scss";
import Button from "@mui/material/Button";
import {
  selectCourse,
  setCourseNameList,
  setParNumber,
} from "../../app/courseSlice";
import {
  selectCreateScoreDate,
  selectScore,
  selectScoreStatistics,
  setRegisterScore,
  setRegisterScoreList,
  setScoreCreateDate,
  setSumData,
} from "../../app/scoreSlice";
import { selectUser } from "../../app/userSlice";
import { createCourse, createScore } from "../../graphql/mutations";
import { listCourses, scoreByUserByScoreDate } from "../../graphql/queries";
import {
  selectIsCreateModalOpen,
  setIsCreateModalOpen,
} from "../../app/modalSlice";
import CreateModal from "../Modal/CreateModal";

const InputButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const courseInfo: any = useAppSelector(selectCourse);
  const userInfo: any = useAppSelector(selectUser);
  const sumData: any = useAppSelector(selectScoreStatistics);
  const createScoreDate: any = useAppSelector(selectCreateScoreDate);
  const isModalOpen = useAppSelector(selectIsCreateModalOpen);
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

  const submitScore = async () => {
    try {
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
            scoreDate: createScoreDate,
          },
        })
      );
      dispatch(setRegisterScore(resetData));
      dispatch(setParNumber(resetParNumberData));
      dispatch(setScoreCreateDate(""));
      const scoreList: any = await API.graphql(
        graphqlOperation(scoreByUserByScoreDate, {
          userId: userInfo.user.id,
          sortDirection: "DESC",
        })
      );
      dispatch(
        setRegisterScoreList(scoreList.data.scoreByUserByScoreDate.items)
      );
      const filterdata = {
        userId: {
          eq: userInfo.user.id,
        },
      };
      const course: any = await API.graphql(
        graphqlOperation(listCourses, { filter: filterdata })
      );
      dispatch(setCourseNameList(course.data.listCourses.items));
      dispatch(setIsCreateModalOpen(true));
    } catch {
      window.alert("??????????????????????????????????????????");
    }
  };

  return (
    <div className={styles.root}>
      <CreateModal isModalOpen={isModalOpen} />
      <div className={styles.sum}>?????????: {sumScore}</div>
      <div className={styles.sum}>???????????????: {avePat}</div>
      <Button
        variant="contained"
        disableElevation
        color="success"
        size="large"
        onClick={submitScore}
      >
        ??????
      </Button>
    </div>
  );
};

export default InputButton;
