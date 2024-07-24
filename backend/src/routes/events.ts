import express from "express";
import { createEvents, deleteEvent, getEvents } from "../handlers/events";

export const eventsRouter = express.Router();

eventsRouter.get("/", getEvents);

eventsRouter.post("/", createEvents);

eventsRouter.delete("/", deleteEvent);
