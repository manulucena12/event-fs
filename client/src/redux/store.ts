import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/user";
import { notificationSlice } from "./reducers/notification";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
