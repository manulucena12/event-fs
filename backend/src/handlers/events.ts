import { Request, Response } from "express-serve-static-core";
import { CreateEventResB, GetEventsRB } from "../types/responses";
import { Events } from "../schemas/events";
import { Event } from "../types/events";

export const getEvents = async (req: Request, res: Response<GetEventsRB>) => {
  try {
    const events: Event[] = await Events.find({});
    res.status(200).json(events);
  } catch {
    res.status(500).json("Internal server error");
  }
};

export const createEvents = async (
  req: Request<NonNullable<unknown>, NonNullable<unknown>, Event>,
  res: Response<CreateEventResB>,
) => {
  const { artist, date, sites, city } = req.body;
  if (!artist || !date || !sites || !city) {
    res.status(400).json("Missing parameters");
  }
  if (typeof artist !== "string") {
    res.status(400).json("Type error");
  }
  if (typeof city !== "string") {
    res.status(400).json("Type error");
  }
  if (typeof date !== "string") {
    res.status(400).json("Type error");
  }
  if (!Array.isArray(sites)) {
    res.status(400).json("Type error");
  }
  try {
    const newEvent = new Events({
      artist,
      date,
      sites,
      city,
    });
    const response: Event = await newEvent.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json("Internal server error");
    console.log(error);
  }
};
