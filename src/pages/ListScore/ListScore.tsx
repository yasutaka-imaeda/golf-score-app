import React from "react";
import Header from "../../component/Header/Header";
import styles from "./ListScore.module.scss";
// import { useAppSelector } from "../../app/hooks";
// import { selectUser } from "../../app/userSlice";
import AllScore from "../../component/AllScore/AllScore";

const ListScore: React.FC = () => {
  // const [username, setUserName] = useState<any>("");
  // const userInfo: any = useAppSelector(selectUser);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.allScore}>
          <AllScore />
        </div>
      </div>
    </div>
  );
};

export default ListScore;
