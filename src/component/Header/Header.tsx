import React from "react";
import styles from "./Header.module.scss";
import { Path } from "../../Routes";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import {
  setRegisterScore,
  setRegisterScoreList,
  setScoreCreateDate,
} from "../../app/scoreSlice";
import { setCourseNameList, setParNumber } from "../../app/courseSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";
import { API, graphqlOperation } from "aws-amplify";
import { listCourses, scoreByUserByScoreDate } from "../../graphql/queries";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const userInfo: any = useAppSelector(selectUser);
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

  const reset = async () => {
    dispatch(setRegisterScore(resetData));
    dispatch(setParNumber(resetParNumberData));
    dispatch(setScoreCreateDate(""));
    const scoreList: any = await API.graphql(
      graphqlOperation(scoreByUserByScoreDate, {
        userId: userInfo.user.id,
        sortDirection: "DESC",
      })
    );
    dispatch(setRegisterScoreList(scoreList.data.scoreByUserByScoreDate.items));
    const filter = {
      userId: {
        eq: userInfo.user.id,
      },
    };
    const course: any = await API.graphql(
      graphqlOperation(listCourses, { filter: filter })
    );
    dispatch(setCourseNameList(course.data.listCourses.items));
  };
  return (
    <div className={styles.root} onClick={reset}>
      <div>
        <Link to={Path.home} className={styles.appHead}>
          <div className={styles.appLogo}></div>
          <div className={styles.appTitle}>????????????G SCORE</div>
        </Link>
      </div>
      <Button component={Link} to={Path.home}>
        ?????????
      </Button>
      <Button component={Link} to={Path.inputScore}>
        ???????????????
      </Button>
      <Button component={Link} to={Path.listScore}>
        ???????????????
      </Button>
      <Button component={Link} to={Path.analysis}>
        ???????????????
      </Button>
      <div className={styles.signOut}>
        <AmplifySignOut
          buttonText="???????????????"
          style={{ width: "50px", margin: "auto" }}
        />
      </div>
    </div>
  );
};

export default Header;
