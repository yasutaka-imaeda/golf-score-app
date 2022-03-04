import React, {
  useEffect,
  // , useState
} from "react";
import styles from "./AllScore.module.scss";
import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";
import { getCourse, scoreByUser } from "../../graphql/queries";
import { selectScoreList, setRegisterScoreList } from "../../app/scoreSlice";
import {
  selectSettedCoursenamelist,
  setCourseNameList,
} from "../../app/courseSlice";

const AllScore: React.FC = () => {
  // const [courseName, setCourseName] = useState<any>();
  const dispatch = useAppDispatch();
  const setedScoreList = useAppSelector(selectScoreList);
  const userInfo: any = useAppSelector(selectUser);
  const settedCourseNameList = useAppSelector(selectSettedCoursenamelist);
  const constGetScoreList = async () => {
    const scoreList: any = await API.graphql(
      graphqlOperation(scoreByUser, {
        userId: userInfo.user.id,
        sortDirection: "DESC",
      })
    );
    dispatch(setRegisterScoreList(scoreList.data.scoreByUser.items));
  };
  const getCourseInfo = async (courseId: any) => {
    const course: any = await API.graphql(
      graphqlOperation(getCourse, { id: courseId })
    );
    dispatch(setCourseNameList(course.data.getCourse.courseName));
  };

  const viwScorelist: any = settedCourseNameList.map((item: any) => {
    return <div>{item}</div>;
  });

  useEffect(() => {
    setedScoreList.map((item: any) => {
      getCourseInfo(item.courseScoreId);
    });
  }, []);

  useEffect(() => {
    constGetScoreList();
  }, []);

  return (
    <div className={styles.root}>
      <div>AllScore</div>
      <div>{viwScorelist}</div>
    </div>
  );
};

export default AllScore;
