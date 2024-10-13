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
    unclicked: true,
    /** receive from the server */
    progress: 500,
    totalprogress: 500,
    countperpage: 60,
    multiValue: 0,
    coinLimit: 0,
    fillRate: 0,
    yesPac: 0,
    /** */
  },
  reducers: {
    initCoin: (state, payload) => {
      state.progress = payload.payload.progress;
      state.totalprogress = payload.payload.totalprogress;
      state.countperpage = payload.payload.countperpage;
      state.multiValue = payload.payload.multiValue;
      state.coinLimit = payload.payload.coinLimit;
      state.fillRate = payload.payload.fillRate;
      state.yesPac = payload.payload.yesPac;
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
        state.coins.length * (1 + state.multiValue) < state.progress
      )
        state.coins = [...state.coins, newCoin(state.width, state.height, 7)];
    },
    earnCoin: (state, payload) => {
      // if (state.unclicked) return;
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
      const earned = diff.length * (1 + state.multiValue);
      if (earned) {
        state.coins = remaining;
        state.erased = [...state.erased, ...diff];
        state.progress -= earned;
        state.point += earned;
      }
    },
    autoCatcherMove: (state, payload) => {
      // if (state.unclicked) return;
      let remaining = [];
      let diff = [];
      for (let item of state.coins) {
        if (
          Math.abs(payload.payload.x - 50 - item.x) > 60 ||
          Math.abs(payload.payload.y - 40 - item.y) > 60
        )
          remaining.push(item);
        else diff.push(item);
      }
      const earned = diff.length * (1 + state.multiValue);
      if (earned) {
        state.coins = remaining;
        state.erased = [...state.erased, ...diff];
        state.progress -= earned;
        state.point += earned;
      }
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
      const earned = diff.length * (1 + state.multiValue);
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
    fullRecovery: (state) => {
      state.progress = state.totalprogress;
    },
    progresscounter: (state) => {
      if (state.progress < state.totalprogress)
        state.progress += 1 + state.fillRate;
    },
    pointSender: (state, payload) => {
      sendPoint(state.point, state.progress, payload.payload);
    },
    upgradeBooster: (state, payload) => {
      state[payload.payload.boosterKey] = payload.payload.boost;
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
  autoCatcherMove,
  fullRecovery,
  upgradeBooster,
} = coinSlice.actions;

export default coinSlice.reducer;
