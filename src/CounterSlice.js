import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: () => {
      return 0;
    },
    incrementbyamount: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, reset, incrementbyamount } =
  counterSlice.actions;
export default counterSlice.reducer;
