import React, { useState } from "react";
import Header from "../../component/Header/Header";
import styles from "./MainPage.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";

const MainPage: React.FC = () => {
  const [username, setUserName] = useState<any>("");
  const userInfo: any = useAppSelector(selectUser);
  window.setTimeout(() => {
    setUserName(userInfo.user.userName);
  }, 100);
  // const userName = userInfo.user.userName;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        {username !== "" ? (
          <div className={styles.intro}>ようこそ {username} さん!!</div>
        ) : (
          <div className={styles.intro}>ようこそ!!</div>
        )}
        <div className={styles.info}>
          このアプリは簡単にゴルフのスコアの管理・分析ができるアプリです
        </div>
        <div className={styles.functionWrapper}>
          <div className={styles.functionTitle}>このアプリでできること</div>
          <div className={styles.function}>
            <div className={styles.functionItem}>
              <div className={styles.functionImg}></div>
              <div className={styles.functionName}>スコア入力</div>
            </div>
            <div className={styles.functionItem}>
              <div className={styles.functionImg}></div>
              <div className={styles.functionName}>スコア確認・編集</div>
            </div>
            <div className={styles.functionItem}>
              <div className={styles.functionImg}></div>
              <div className={styles.functionName}>スコア分析</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
