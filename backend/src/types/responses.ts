import { Event, Ticket } from "./events";
import { UserType } from "./users";

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
  | "You have already booked a ticket"
  | "This user does not exist";

export type CancelTicketRB =
  | "This event does not exist"
  | "Missing parameters"
  | "Ticket canceled successfully"
  | "Internal server error"
  | "User not listed"
  | "This user does not exist";

export type CreateUserRB =
  | "Missing parameters"
  | Omit<UserType, "passwordHash">
  | "Internal server error"
  | "User already exists";

export type DeleteUserRB =
  | "This user does not exist"
  | "Missing parameters"
  | "Malformatted parameters"
  | "User eliminated"
  | "Internal server error";
