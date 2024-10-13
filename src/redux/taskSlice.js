import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    reactTwitter: { start: false, check: false, claim: false }, //  daily
    reactTelegram: { start: false, check: false, claim: false }, //  daily
    reactDiscord: { start: false, check: false, claim: false }, //  daily
    dailyClaim: { start: false, check: false, claim: false }, //  daily
    taskAnnouncementRTPost: { start: false, check: false, claim: false },
    taskYesKeeper: { start: false, check: false, claim: false },
    taskYesUniverseRTPost: { start: false, check: false, claim: false },
    taskYesUniverseRTPost_: { start: false, check: false, claim: false },
    taskClaim: { start: false, check: false, claim: false },
  },
  reducers: {
    initTask: (state, payload) => {
      state.reactTwitter.claim = payload.payload.reactTwitter;
      state.reactTelegram.claim = payload.payload.reactTelegram;
      state.reactDiscord.claim = payload.payload.reactDiscord;
      state.dailyClaim = payload.payload.dailyClaim;
    },
    initOTTask: (state, payload) => {
      state.taskAnnouncementRTPost.claim =
        payload.payload.taskAnnouncementRTPost;
      state.taskYesKeeper.claim = payload.payload.taskYesKeeper;
      state.taskYesUniverseRTPost.claim = payload.payload.taskYesUniverseRTPost;
      state.taskYesUniverseRTPost_.claim =
        payload.payload.taskYesUniverseRTPost_;
      state.taskClaim = payload.payload.taskClaim;
    },
    updateTask: (state, payload) => {
      state[payload.payload.key][payload.payload.subkey] =
        payload.payload.value;
    },
  },
});

export const { initTask, initOTTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
