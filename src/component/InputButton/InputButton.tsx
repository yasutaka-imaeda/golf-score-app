import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./InputButton.module.scss";
import Button from "@mui/material/Button";
import { registerParNumber, selectCourse } from "../../app/courseSlice";
import { registerScore, selectScore } from "../../app/scoreSlice";
import { selectUser } from "../../app/userSlice";
import { createCourse, createScore } from "../../graphql/mutations";
import { listCourses } from "../../graphql/queries";

const InputButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const courseInfo: any = useAppSelector(selectCourse);
  const userInfo: any = useAppSelector(selectUser);

  const submitScore = async () => {
    console.log("submitScore");
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
    console.log(listCourse);
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
        },
      })
    );
  };

  return (
    <div className={styles.root}>
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
