import { createSlice } from "@reduxjs/toolkit";
import { newCoin } from "../helper/func";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    point: 0,
    diff: 0,
    coins: [],
    width: 0,
    height: 0,
    progress: 500,
    totalprogress: 500,
    countperpage: 100,
  },
  reducers: {
    setScore: (state, payload) => {
      state.point = Math.round(payload.payload);
    },
    addScore: (state, payload) => {
      state.point += Math.round(payload.payload);
    },
    initSize: (state, payload) => {
      state.width = payload.payload.width;
      state.height = payload.payload.height;
    },
    coincounter: (state, payload) => {
      if (
        state.coins.length <= state.countperpage &&
        state.coins.length < state.progress
      )
        state.coins = [...state.coins, newCoin(state.width, state.height, 7)];
    },
    earnCoin: (state, payload) => {
      const remaining = state.coins.filter(
        (item) =>
          Math.abs(payload.payload.x - 42 - item.x) > 50 ||
          Math.abs(payload.payload.y - 32 - item.y) > 40
      );
      const diff = state.coins.length - remaining.length;
      if (diff) {
        state.diff = diff;
        state.progress -= diff;
        state.coins = remaining;
        state.point += diff;
      }
    },
    progresscounter: (state, payload) => {
      if (state.progress < 1000) state.progress++;
    },
  },
});

export const {
  setScore,
  addScore,
  initSize,
  coincounter,
  progresscounter,
  earnCoin,
} = coinSlice.actions;

export default coinSlice.reducer;
