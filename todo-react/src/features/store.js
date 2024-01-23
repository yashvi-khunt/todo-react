import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
