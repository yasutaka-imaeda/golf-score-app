import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import InputScore from "./pages/InputScore/InputScore";
import ListScore from "./pages/ListScore/ListScore";
import ViewScore from "./pages/ViewScore/ViewScore";

export const Path = {
  home: "/",
  inputScore: "/inputScore",
  listScore: "/listScore",
  viewScore: "/viewScore",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<MainPage />} />
        <Route path={Path.inputScore} element={<InputScore />} />
        <Route path={Path.listScore} element={<ListScore />} />
        <Route path={Path.viewScore} element={<ViewScore />} />
      </Routes>
    </div>
  );
};

export default Routess;
