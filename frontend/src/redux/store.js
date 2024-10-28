import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { initializeAuth } from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

store.dispatch(initializeAuth());

export default store;