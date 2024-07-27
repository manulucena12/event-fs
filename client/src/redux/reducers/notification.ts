import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "Notification",
  initialState: null as string | null,
  reducers: {
    setNotification(state, action: PayloadAction<null | string>) {
      return action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
