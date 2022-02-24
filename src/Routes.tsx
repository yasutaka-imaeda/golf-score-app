import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import InputScore from "./pages/InputScore/InputScore";

export const Path = {
  home: "/",
  inputScore: "/inputScore",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<MainPage />} />
        <Route path={Path.inputScore} element={<InputScore />} />
      </Routes>
    </div>
  );
};

export default Routess;
