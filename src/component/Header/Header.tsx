import React from "react";
import styles from "./Header.module.scss";
import { Path } from "../../Routes";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <Button component={Link} to={Path.home}>
        ホームへページ遷移
      </Button>
      <Button component={Link} to={Path.inputScore}>
        スコア入力ページ遷移
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
