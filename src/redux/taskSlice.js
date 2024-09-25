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
      state = { ...state, ...payload.payload };
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
