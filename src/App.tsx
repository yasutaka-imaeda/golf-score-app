import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Routess from "./Routes";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.component}>
        <BrowserRouter>
          <Routess />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
