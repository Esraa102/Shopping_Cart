import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/slice";
const store = configureStore({
  reducer: cartSlice,
});
export default store;
