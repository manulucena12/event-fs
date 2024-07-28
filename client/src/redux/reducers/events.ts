import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookSite, Event } from "../../types/events";

export const eventsSlice = createSlice({
  name: "Events",
  initialState: [] as Event[],
  reducers: {
    setEvents(state, action: PayloadAction<Event[]>) {
      return action.payload;
    },
    bookASite(state, action: PayloadAction<BookSite>) {
      return state.map((e) =>
        e.id === action.payload.eventId
          ? {
              ...e,
              sites: e.sites.map((s) =>
                s.type === action.payload.type
                  ? { ...s, available: s.available - 1 }
                  : s,
              ),
            }
          : e,
      );
    },
    cancelASite(state, action: PayloadAction<BookSite>) {
      return state.map((e) =>
        e.id === action.payload.eventId
          ? {
              ...e,
              sites: e.sites.map((s) =>
                s.type === action.payload.type
                  ? { ...s, available: s.available + 1 }
                  : s,
              ),
            }
          : e,
      );
    },
  },
});

export const { setEvents, bookASite, cancelASite } = eventsSlice.actions;
