import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { RootState, AppThunk } from "./store";

export interface ScoreState {
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
  },
});

export const { registerScore } = scoreSlice.actions;

export const selectScore = (state: RootState): ScoreState["score"] =>
  state.score.score;

export default scoreSlice.reducer;
