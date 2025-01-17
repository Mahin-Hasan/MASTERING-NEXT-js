import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"; // counterReducer can be named anything as it is exported as default

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
