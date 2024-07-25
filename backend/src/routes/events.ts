import express from "express";
import {
  bookASite,
  cancelTicket,
  createEvents,
  deleteEvent,
  getEvents,
} from "../handlers/events";

export const eventsRouter = express.Router();

eventsRouter.get("/", getEvents);

eventsRouter.post("/", createEvents);

eventsRouter.delete("/", deleteEvent);

eventsRouter.put("/book", bookASite);

eventsRouter.put("/cancel", cancelTicket);
