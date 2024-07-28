import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket, UserToken } from "../../types/user";

export const userSlice = createSlice({
  name: "User",
  initialState: null as UserToken | null,
  reducers: {
    setUser(state, action: PayloadAction<UserToken>) {
      return action.payload;
    },
    addTicket(state, action: PayloadAction<Ticket>) {
      state?.tickets.push(action.payload);
    },
  },
});

export const { setUser, addTicket } = userSlice.actions;
