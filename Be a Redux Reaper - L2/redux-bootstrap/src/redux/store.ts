import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"; // counterReducer can be named anything as it is exported as default
import logger from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  // middleware maintain a chaining so we will merge our logger middleware with redux default middlewares
  
});

//solve 'state' is of type 'unknown' error

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
