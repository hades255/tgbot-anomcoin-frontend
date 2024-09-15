import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userId: "",
    name: "",
    username: "",
    point: 0,
  },
  reducers: {
    login: (state, payload) => {
      state.isAuthenticated = true;
      state.userId = payload.payload.userId;
      state.name = payload.payload.name;
      state.username = payload.payload.username;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setScore: (state, payload) => {
      state.point = Math.round(payload.payload);
    },
    upgradeUser: (state, payload) => {
      payload.payload.forEach((item) => {
        state[item.key] = item.value;
      });
    },
  },
});

export const { login, logout, setScore, upgradeUser } = authSlice.actions;
export default authSlice.reducer;
