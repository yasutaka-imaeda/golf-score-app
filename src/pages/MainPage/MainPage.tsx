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
        <div>メインページ</div>
        {username !== "" ? (
          <div>ようこそ {username} さん!!</div>
        ) : (
          <div>ようこそ!!</div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
