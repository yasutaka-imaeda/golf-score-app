import React from "react";
import styles from "./AllScore.module.scss";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSettedCoursenamelist } from "../../app/courseSlice";

const AllScore: React.FC = () => {
  const settedCourseNameList = useAppSelector(selectSettedCoursenamelist);

  const viwScorelist: any = settedCourseNameList.map((item: any) => {
    return <div>{item.courseName}</div>;
  });

  return (
    <div className={styles.root}>
      <div>AllScore</div>
      <div>{viwScorelist}</div>
    </div>
  );
};

export default AllScore;
