import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userId: "",
    name: "",
    username: "",
    avatar: "",
    point: 0,
  },
  reducers: {
    login: (state, payload) => {
      state.userId = payload.payload.userId;
      state.name = payload.payload.name;
      state.username = payload.payload.username;
      state.avatar = payload.payload.avatar;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setScore: (state, payload) => {
      state.point = Math.round(payload.payload);
    },
    addScore: (state, payload) => {
      state.point += Math.round(payload.payload);
    },
    upgradeUser: (state, payload) => {
      payload.payload.forEach((item) => {
        state[item.key] = item.value;
      });
    },
  },
});

export const { login, logout, setScore, addScore, upgradeUser } =
  authSlice.actions;
export default authSlice.reducer;
