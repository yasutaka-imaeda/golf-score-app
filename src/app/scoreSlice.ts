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
  },
});

export const {
  registerScore,
  addOneScore,
  rdOneScore,
  addOnePat,
  rdOnePat,
  setRegisterScoreList,
} = scoreSlice.actions;

export const selectScore = (state: RootState): ScoreState["score"] =>
  state.score.score;
export const selectScoreList = (state: RootState): ScoreState["scorelist"] =>
  state.score.scorelist;

export default scoreSlice.reducer;
