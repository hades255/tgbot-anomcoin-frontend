import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    reactTwitter: { start: false, check: false, claim: false }, //  daily
    reactTelegram: { start: false, check: false, claim: false }, //  daily
    reactDiscord: { start: false, check: false, claim: false }, //  daily
    dailyClaim: false, //  daily
    boostChest: 3,
    boostRecovery: 3,
    taskAnnouncementRTPost: { start: false, check: false, claim: false },
    taskYesKeeper: { start: false, check: false, claim: false },
    taskYesUniverseRTPost: { start: false, check: false, claim: false },
    taskYesUniverseRTPost_: { start: false, check: false, claim: false },
    taskClaim: false,
    specialClaim: false,
  },
  reducers: {
    initTask: (state, payload) => {
      state.reactTwitter.claim = payload.payload.reactTwitter;
      state.reactTelegram.claim = payload.payload.reactTelegram;
      state.reactDiscord.claim = payload.payload.reactDiscord;
      state.dailyClaim = payload.payload.dailyClaim;
      state.boostChest = payload.payload.boostChest;
      state.boostRecovery = payload.payload.boostRecovery;
    },
    initOTTask: (state, payload) => {
      state.taskAnnouncementRTPost.claim =
        payload.payload.taskAnnouncementRTPost;
      state.taskYesKeeper.claim = payload.payload.taskYesKeeper;
      state.taskYesUniverseRTPost.claim = payload.payload.taskYesUniverseRTPost;
      state.taskYesUniverseRTPost_.claim =
        payload.payload.taskYesUniverseRTPost_;
      state.taskClaim = payload.payload.taskClaim;
      state.specialClaim = payload.payload.specialClaim;
    },
    updateTask: (state, payload) => {
      state[payload.payload.key][payload.payload.subkey] =
        payload.payload.value;
    },
    updateBoost: (state, payload) => {
      state[payload.payload.key] = payload.payload.value;
    },
  },
});

export const { initTask, initOTTask, updateTask, updateBoost } =
  taskSlice.actions;
export default taskSlice.reducer;
