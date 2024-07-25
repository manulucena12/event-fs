import { Request, Response } from "express-serve-static-core";
import {
  BookEventRB,
  CancelTicketRB,
  CreateEventResB,
  DeleteEventRB,
  GetEventsRB,
} from "../types/responses";
import { Events } from "../schemas/events";
import { Event, Ticket } from "../types/events";
import { User } from "../schemas/users";

export const getEvents = async (req: Request, res: Response<GetEventsRB>) => {
  try {
    const events: Event[] = await Events.find({});
    return res.status(200).json(events);
  } catch {
    return res.status(500).json("Internal server error");
  }
};

export const createEvents = async (
  req: Request<NonNullable<unknown>, NonNullable<unknown>, Event>,
  res: Response<CreateEventResB>,
) => {
  const { artist, date, sites, city } = req.body;
  if (!artist || !date || !sites || !city) {
    return res.status(400).json("Missing parameters");
  }
  if (typeof artist !== "string") {
    return res.status(400).json("Type error");
  }
  if (typeof city !== "string") {
    return res.status(400).json("Type error");
  }
  if (typeof date !== "string") {
    return res.status(400).json("Type error");
  }
  if (!Array.isArray(sites)) {
    return res.status(400).json("Type error");
  }
  try {
    const newEvent = new Events({
      artist,
      date,
      sites,
      city,
    });
    const response: Event = await newEvent.save();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json("Internal server error");
    console.log(error);
  }
};

export const deleteEvent = async (
  req: Request<
    NonNullable<unknown>,
    NonNullable<unknown>,
    Omit<Event, "sites" | "city" | "artist" | "date">
  >,
  res: Response<DeleteEventRB>,
) => {
  const { id } = req.body;
  const exists = await Events.findById(id);
  if (!exists) {
    return res.status(400).json("This event does not exist");
  }
  try {
    await Events.findByIdAndDelete(id);
    return res.status(200).json("Deleted");
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

export const bookASite = async (
  req: Request<
    NonNullable<unknown>,
    NonNullable<unknown>,
    { id: string; type: string; username: string }
  >,
  res: Response<BookEventRB>,
) => {
  const { id, type, username } = req.body;
  const event = await Events.findById(id);
  const user = await User.findOne({ username });
  if (!event) {
    return res.status(400).json("This event does not exist");
  }
  if (!user) {
    return res.status(400).json("This user does not exist");
  }
  const vip = event.sites.find((s) => s.type === "vip");
  const general = event.sites.find((s) => s.type === "general");
  const gold = event.sites.find((s) => s.type === "gold");
  const isBookedVip = vip?.persons.some((p) => p.username === username);
  const isBookedGold = gold?.persons.some((p) => p.username === username);
  const isBookedGeneral = general?.persons.some((p) => p.username === username);
  if (isBookedGeneral || isBookedGold || isBookedVip) {
    return res.status(400).json("You have already booked a ticket");
  }
  const siteToBook = event.sites.find((s) => s.type === type);
  if (siteToBook?.available === 0) {
    return res.status(400).json("Sold out");
  }
  event.sites = event.sites.map((s) =>
    s.type === type
      ? {
          ...s,
          available: s.available - 1,
          persons: [...s.persons, { username }],
        }
      : s,
  );
  const ticket: Ticket = {
    username,
    type,
    artist: event.artist,
    eventId: event.id,
    place: event.city,
    date: event.date,
  };
  user.tickets = [...user.tickets, ticket];
  try {
    await event.save();
    await user.save();
    return res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

export const cancelTicket = async (
  req: Request<NonNullable<unknown>, NonNullable<unknown>, Ticket>,
  res: Response<CancelTicketRB>,
) => {
  const { username, type, eventId } = req.body;
  if (!username || !type || !eventId) {
    return res.status(400).json("Missing parameters");
  }
  const event = await Events.findById(eventId);
  if (!event) {
    return res.status(400).json("This event does not exist");
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json("This user does not exist");
  }
  const site = event.sites.find((s) => s.type === type);
  const exist = site?.persons.some((p) => p.username === username);
  if (!exist) {
    return res.status(400).json("User not listed");
  }
  event.sites = event.sites.map((s) =>
    s.type === type
      ? {
          ...s,
          available: s.available + 1,
          persons: s.persons.filter((p) => p.username !== username),
        }
      : s,
  );
  user.tickets = user.tickets.filter((t) => t.eventId !== eventId);
  try {
    await user.save();
    await event.save();
    return res.status(200).json("Ticket canceled successfully");
  } catch {
    return res.status(500).json("Internal server error");
  }
};
