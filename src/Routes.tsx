import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import InputScore from "./pages/InputScore/InputScore";
import ListScore from "./pages/ListScore/ListScore";

export const Path = {
  home: "/",
  inputScore: "/inputScore",
  listScore: "/listScore"
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<MainPage />} />
        <Route path={Path.inputScore} element={<InputScore />} />
        <Route path={Path.listScore} element={<ListScore />} />
      </Routes>
    </div>
  );
};

export default Routess;
