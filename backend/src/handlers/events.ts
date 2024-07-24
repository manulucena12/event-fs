import { Request, Response } from "express-serve-static-core";
import {
  CreateEventResB,
  DeleteEventRB,
  GetEventsRB,
} from "../types/responses";
import { Events } from "../schemas/events";
import { Event } from "../types/events";

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
    console.log(error);
  }
};
