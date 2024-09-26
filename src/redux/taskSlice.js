import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    reactTwitter: false, //  daily
    reactTelegram: false, //  daily
    reactDiscord: false, //  daily
    taskAnnouncementRTPost: false,
    taskYesKeeper: false,
    taskYesUniverseRTPost: false,
    taskYesUniverseRTPost_: false,
  },
  reducers: {
    initTask: (state, payload) => {
      state.reactTwitter = payload.payload.reactTwitter;
      state.reactTelegram = payload.payload.reactTelegram;
      state.reactDiscord = payload.payload.reactDiscord;
    },
    initOTTask: (state, payload) => {
      state.taskAnnouncementRTPost = payload.payload.taskAnnouncementRTPost;
      state.taskYesKeeper = payload.payload.taskYesKeeper;
      state.taskYesUniverseRTPost = payload.payload.taskYesUniverseRTPost;
      state.taskYesUniverseRTPost_ = payload.payload.taskYesUniverseRTPost_;
    },
    updateTask: (state, payload) => {
      payload.payload.forEach((item) => {
        state[item.key] = item.value;
      });
    },
  },
});

export const { initTask, initOTTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
