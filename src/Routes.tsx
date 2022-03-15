import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import InputScore from "./pages/InputScore/InputScore";
import ListScore from "./pages/ListScore/ListScore";
import ViewScore from "./pages/ViewScore/ViewScore";
import Analysis from "./pages/Analysis/Analysis";

export const Path = {
  home: "/",
  inputScore: "/inputScore",
  listScore: "/listScore",
  viewScore: "/viewScore",
  analysis: "/analysis",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<MainPage />} />
        <Route path={Path.inputScore} element={<InputScore />} />
        <Route path={Path.listScore} element={<ListScore />} />
        <Route path={Path.viewScore} element={<ViewScore />} />
        <Route path={Path.analysis} element={<Analysis />} />
      </Routes>
    </div>
  );
};

export default Routess;
