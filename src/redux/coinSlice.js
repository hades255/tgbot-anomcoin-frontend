import { createSlice } from "@reduxjs/toolkit";
import { newCoin } from "../helper/func";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    coins: [],
    width: 0,
    height: 0,
    progress: 1000,
    totalprogress: 1000,
  },
  reducers: {
    initSize: (state, payload) => {
      state.width = payload.payload.width;
      state.height = payload.payload.height;
    },
    coincounter: (state, payload) => {
      if (state.coins.length <= 100 && state.coins.length < state.progress)
        state.coins = [...state.coins, newCoin(state.width, state.height, 7)];
    },
    earnCoin: (state, payload) => {
      state.progress -= payload.payload.diff;
      state.coins = payload.payload.remaining;
    },
    progresscounter: (state, payload) => {
      if (state.progress < 1000) state.progress++;
    },
  },
});

export const { initSize, coincounter, progresscounter, earnCoin } =
  coinSlice.actions;

export default coinSlice.reducer;
