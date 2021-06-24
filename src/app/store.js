import { configureStore } from "@reduxjs/toolkit";
import { taskReducer  } from "../modules/task";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  }
})