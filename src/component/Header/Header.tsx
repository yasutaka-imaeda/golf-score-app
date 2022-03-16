import React from "react";
import styles from "./Header.module.scss";
import { Path } from "../../Routes";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { setRegisterScore } from "../../app/scoreSlice";
import { setParNumber } from "../../app/courseSlice";
import { useAppDispatch } from "../../app/hooks";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
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
  };
  return (
    <div className={styles.root} onClick={reset}>
      <div>
        <Link to={Path.home} className={styles.appHead}>
          <div className={styles.appLogo}></div>
          <div className={styles.appTitle}>みんなのG SCORE</div>
        </Link>
      </div>
      <Button component={Link} to={Path.home}>
        ホーム
      </Button>
      <Button component={Link} to={Path.inputScore}>
        スコア入力
      </Button>
      <Button component={Link} to={Path.listScore}>
        スコア一覧
      </Button>
      <Button component={Link} to={Path.analysis}>
        スコア分析
      </Button>
      <div className={styles.signOut}>
        <AmplifySignOut
          buttonText="ログアウト"
          style={{ width: "50px", margin: "auto" }}
        />
      </div>
    </div>
  );
};

export default Header;
