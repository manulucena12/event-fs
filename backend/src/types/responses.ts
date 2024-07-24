import { Event } from "./events";

export type GetEventsRB = Event[] | "Internal server error";

export type CreateEventResB =
  | "Missing parameters"
  | Event
  | "Internal server error"
  | "Type error";

export type DeleteEventRB =
  | "Deleted"
  | "Internal server error"
  | "This event does not exist";
