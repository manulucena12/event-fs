import { Event, Ticket } from "./events";

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

export type BookEventRB =
  | "This event does not exist"
  | "Internal server error"
  | Ticket
  | "Sold out"
  | "You have already booked a ticket";

export type CancelTicketRB =
  | "This event does not exist"
  | "Missing parameters"
  | "Ticket canceled successfully"
  | "Internal server error"
  | "User not listed";
