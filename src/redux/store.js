import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import coinSlice from "./coinSlice";
import taskSlice from "./taskSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    coin: coinSlice,
    task: taskSlice,
  },
});

export default store;
