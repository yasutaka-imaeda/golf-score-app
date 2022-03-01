import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./InputButton.module.scss";
import Button from "@mui/material/Button";
import { registerParNumber, selectCourse } from "../../app/courseSlice";
import { registerScore, selectScore } from "../../app/scoreSlice";
import { selectUser } from "../../app/userSlice";
import { createScore } from "../../graphql/mutations";

const InputButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const holeScore: any = useAppSelector(selectScore);
  const courseInfo: any = useAppSelector(selectCourse);
  const userInfo: any = useAppSelector(selectUser);

  const submitScore = async () => {
    console.log("submitScore");
    console.log(holeScore);
    console.log(courseInfo);
    console.log(userInfo);
    // await API.graphql(graphqlOperation( createScore, {input: {}}}))
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
