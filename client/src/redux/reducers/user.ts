import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserToken } from "../../types/user";

export const userSlice = createSlice({
  name: "User",
  initialState: null as UserToken | null,
  reducers: {
    setUser(state, action: PayloadAction<UserToken>) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
