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
    cancelTicket(state, action: PayloadAction<Ticket>) {
      if (state && state.tickets) {
        state.tickets = state.tickets.filter(
          (t) => t.eventId !== action.payload.eventId,
        );
      }
    },
  },
});

export const { setUser, addTicket, cancelTicket } = userSlice.actions;
