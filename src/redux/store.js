import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import coinSlice from "./coinSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    coin: coinSlice,
  },
});

export default store;
