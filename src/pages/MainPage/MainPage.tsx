import React from "react";
import Header from "../../component/Header/Header";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>メインページ</div>
      </div>
    </div>
  );
};

export default MainPage;
