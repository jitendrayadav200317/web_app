import { configureStore } from '@reduxjs/toolkit'
import contReucer from './slice/couterslice.js';
import lodingReducer from './slice/lodingslice.js'

export const store = configureStore({
  reducer: {
    conut : contReucer,
    loding : lodingReducer
  },
})

export default store;