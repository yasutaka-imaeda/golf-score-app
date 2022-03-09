import React from "react";
import styles from "./AllScore.module.scss";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSettedCoursenamelist } from "../../app/courseSlice";
import { selectScoreList } from "../../app/scoreSlice";

const AllScore: React.FC = () => {
  const settedCourseNameList = useAppSelector(selectSettedCoursenamelist);
  const settedScoreList = useAppSelector(selectScoreList);

  const viewScorelist: any = settedScoreList.map((item: any) => {
    const createDate: any = item.createdAt.substring(0, 10);
    const sumScore: any = item.sumScore;
    const courseId: any = item.courseScoreId;
    const courseName: any = settedCourseNameList.filter(
      (item: any) => item.id === courseId
    );
    return (
      <tr>
        <td>{createDate}</td>
        <td>{courseName[0].courseName}</td>
        <td>{sumScore}</td>
        <td>リンク</td>
      </tr>
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.title}>スコア一覧</div>
      <table className={styles.table}>
        <tr>
          <th>日時</th>
          <th>コース名</th>
          <th>スコア</th>
          <th>リンク</th>
        </tr>
        {viewScorelist}
      </table>
    </div>
  );
};

export default AllScore;
