import { createSlice } from "@reduxjs/toolkit";
import { newCoin } from "../helper/func";
import { sendPoint } from "../helper/apis";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    point: 0,
    coins: [],
    erased: [],
    width: 0,
    height: 0,
    progress: 500,
    totalprogress: 500,
    countperpage: 100,
    unclicked: true,
  },
  reducers: {
    initCoin: (state, payload) => {
      state.progress = payload.payload.progress;
      state.totalprogress = payload.payload.totalprogress;
      state.countperpage = payload.payload.countperpage;
    },
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
    coincounter: (state) => {
      if (state.width === 0 || state.height === 0) return;
      if (
        state.coins.length <= state.countperpage &&
        state.coins.length < state.progress
      )
        state.coins = [...state.coins, newCoin(state.width, state.height, 7)];
    },
    earnCoin: (state, payload) => {
      if (state.unclicked) return;
      let remaining = [];
      let diff = [];
      for (let item of state.coins) {
        if (
          Math.abs(payload.payload.x - 42 - item.x) > 50 ||
          Math.abs(payload.payload.y - 32 - item.y) > 40
        )
          remaining.push(item);
        else diff.push(item);
      }
      const earned = diff.length;
      if (earned) {
        state.coins = remaining;
        state.erased = [...state.erased, ...diff];
        state.progress -= earned;
        state.point += earned;
      }
    },
    progresscounter: (state) => {
      if (state.progress < state.totalprogress) state.progress++;
    },
    onMouseDown: (state, payload) => {
      state.unclicked = false;
      let remaining = [];
      let diff = [];
      for (let item of state.coins) {
        if (
          Math.abs(payload.payload.x - 42 - item.x) > 50 ||
          Math.abs(payload.payload.y - 32 - item.y) > 40
        )
          remaining.push(item);
        else diff.push(item);
      }
      const earned = diff.length;
      if (earned) {
        state.coins = remaining;
        state.erased = [...state.erased, ...diff];
        state.progress -= earned;
        state.point += earned;
      }
    },
    onMouseUp: (state) => {
      state.unclicked = true;
    },
    removeErasedItem: (state, payload) => {
      state.erased = state.erased.filter(
        (item) => item.key !== payload.payload
      );
    },
    pointSender: (state, payload) => {
      sendPoint(state.point, state.progress, payload.payload);
    },
  },
});

export const {
  initCoin,
  setScore,
  addScore,
  initSize,
  coincounter,
  progresscounter,
  earnCoin,
  onMouseDown,
  onMouseUp,
  removeErasedItem,
  pointSender,
} = coinSlice.actions;

export default coinSlice.reducer;
