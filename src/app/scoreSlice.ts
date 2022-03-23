import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState } from "./store";

export interface ScoreState {
  scorelist: [any];
  score: [
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    },
    {
      score: number;
      pat: number;
    }
  ];
  scoreStatistics: { sumScore: number; sumPat: number; avePat: number };
  selectScoreId: string;
  createScoreDate: string;
}

const initialState: ScoreState = {
  scorelist: [{}],
  score: [
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
    {
      score: 0,
      pat: 0,
    },
  ],
  scoreStatistics: { sumScore: 0, sumPat: 0, avePat: 0 },
  selectScoreId: "",
  createScoreDate: "",
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    registerScore: (state, action) => {
      const i = action.payload.holeNumber - 1;
      state.score[i].score = action.payload.score;
      state.score[i].pat = action.payload.pat;
    },
    setRegisterScore: (state, action) => {
      state.score = action.payload;
    },
    addOneScore: (state, action) => {
      const i = action.payload - 1;
      state.score[i].score = state.score[i].score + 1;
    },
    rdOneScore: (state, action) => {
      const i = action.payload - 1;
      state.score[i].score = state.score[i].score - 1;
    },
    addOnePat: (state, action) => {
      const i = action.payload - 1;
      state.score[i].pat = state.score[i].pat + 1;
    },
    rdOnePat: (state, action) => {
      const i = action.payload - 1;
      state.score[i].pat = state.score[i].pat - 1;
    },
    setRegisterScoreList: (state, action) => {
      state.scorelist = action.payload;
    },
    setSumData: (state, action) => {
      state.scoreStatistics = action.payload;
    },
    setSelectScoreId: (state, action) => {
      state.selectScoreId = action.payload;
    },
    setScoreCreateDate: (state, action) => {
      state.createScoreDate = action.payload;
    },
  },
});

export const {
  registerScore,
  setRegisterScore,
  addOneScore,
  rdOneScore,
  addOnePat,
  rdOnePat,
  setRegisterScoreList,
  setSumData,
  setSelectScoreId,
  setScoreCreateDate,
} = scoreSlice.actions;

export const selectScore = (state: RootState): ScoreState["score"] =>
  state.score.score;
export const selectScoreList = (state: RootState): ScoreState["scorelist"] =>
  state.score.scorelist;
export const selectScoreStatistics = (
  state: RootState
): ScoreState["scoreStatistics"] => state.score.scoreStatistics;
export const selectSelectScoreId = (
  state: RootState
): ScoreState["selectScoreId"] => state.score.selectScoreId;
export const selectCreateScoreDate = (
  state: RootState
): ScoreState["createScoreDate"] => state.score.createScoreDate;

export default scoreSlice.reducer;
