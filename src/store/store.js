import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/usersSlice";

const store = configureStore({
  reducer: {
    user: userSlice
  },
})

export default store