import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
  },
});

export const { dispatch, getState } = store;
export default store;
