import React from "react";
import styles from "./AllScore.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Path } from "../../Routes";
import { Link } from "react-router-dom";
import {
  registerCourse,
  selectSettedCoursenamelist,
} from "../../app/courseSlice";
import {
  selectScoreList,
  setRegisterScore,
  setSelectScoreId,
} from "../../app/scoreSlice";

const AllScore: React.FC = () => {
  const dispatch = useAppDispatch();
  const settedCourseNameList = useAppSelector(selectSettedCoursenamelist);
  const settedScoreList = useAppSelector(selectScoreList);

  const setScore = (data: any) => {
    const scoreData = JSON.parse(data[0].score);
    dispatch(setRegisterScore(scoreData));
    dispatch(
      registerCourse({
        courseName: data[1].courseName,
        parNumber: data[1].parNumber,
      })
    );
    dispatch(setSelectScoreId(data[0].id));
  };

  const checkForOneLetter = (data: string) => {
    if (data.length === 1) {
      return `0${data}`;
    } else {
      return data;
    }
  };

  const viewScorelist: any = settedScoreList.map((item: any) => {
    if (item.id !== undefined) {
      const japanTime = new Date(item.createdAt);
      const getFullYear = String(japanTime.getFullYear());
      const getMonth = checkForOneLetter(String(japanTime.getMonth() + 1));
      const getDate = checkForOneLetter(String(japanTime.getDate()));
      const createJapanTime = `${getFullYear}/${getMonth}/${getDate}`;

      const createDate: any = createJapanTime;
      const sumScore: any = item.sumScore;
      const courseId: any = item.courseScoreId;
      const courseName: any = settedCourseNameList.filter(
        (courseItem: any) => courseItem.id === courseId
      );
      return (
        <tr>
          <td>{createDate}</td>
          <td>{courseName[0].courseName}</td>
          <td>{sumScore}</td>
          <td
            onClick={() => {
              const data = item;
              const courseinfo = courseName[0];
              setScore([data, courseinfo]);
            }}
          >
            <Link to={Path.viewScore}>リンク</Link>
          </td>
        </tr>
      );
    } else {
      return <div></div>;
    }
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
