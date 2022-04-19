import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import commentsSlice from "./CommentsSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, comments: commentsSlice.reducer },
});

export default store;
