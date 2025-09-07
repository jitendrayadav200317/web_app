import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loding: false,
};

const lodingSlice = createSlice({
  name: "loding",
  initialState,
  reduear: {
    setLoading: function (state) {
       state.loading = true
    }
  },
});

export default lodingSlice.reduear;
export const { setLoading } = lodingSlice.action;
