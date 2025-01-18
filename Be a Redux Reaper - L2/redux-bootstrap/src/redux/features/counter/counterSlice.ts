import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //   state.count = state.count + 1;
      state.count = state.count + action.payload; // if we want to add with a dynamic value
    },
    decrement: (state) => {
      //   state.count = state.count - 1;
      //   state.count--;
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // used as dispatch where this business logics are required
export default counterSlice.reducer; // imported in store
