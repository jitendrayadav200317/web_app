import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const countrSlice = createSlice({
  name: "connter",
  initialState,
  reduear: {
    increment: function (state) {
      state.count += 1;
    },
    decrement: function (state) {
      state.count -= 1;
    },
  },
});

export default countrSlice.reduear;
export const { increment, decrement } = countrSlice.action;
