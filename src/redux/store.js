import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import coinSlice from "./coinSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    coin: coinSlice,
  },
});
