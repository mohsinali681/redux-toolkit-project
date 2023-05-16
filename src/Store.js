import { configureStore } from "@reduxjs/toolkit";
import countreducer from "./CounterSlice";
const store = configureStore({
  reducer: {
    counter: countreducer,
  },
});

export default store;
