import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, visible: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.visible = !state.visible;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
