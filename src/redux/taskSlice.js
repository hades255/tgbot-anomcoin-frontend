import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    reactTwitter: false,
    reactTelegram: false,
    reactDiscord: false,
  },
  reducers: {
    initTask: (state, payload) => {
      state.reactTwitter = payload.payload.reactTwitter;
      state.reactTelegram = payload.payload.reactTelegram;
      state.reactDiscord = payload.payload.reactDiscord;
    },
    updateTask: (state, payload) => {
      payload.payload.forEach((item) => {
        state[item.key] = item.value;
      });
    },
  },
});

export const { initTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
