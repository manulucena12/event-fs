import mongoose from "mongoose";
import { Event, Site, Person } from "../types/events";

const personSchema = new mongoose.Schema<Person>({
  username: { type: String },
});

const siteSchema = new mongoose.Schema<Site>({
  type: { type: String, required: true, enum: ["general", "vip", "gold"] },
  available: { type: Number, required: true },
  price: { type: Number, required: true },
  persons: [{ type: personSchema }],
});

const eventSchema = new mongoose.Schema<Event>({
  artist: { type: String, required: true },
  date: { type: String, required: true },
  city: { type: String, required: true },
  img: { type: String, required: true },
  sites: [{ type: siteSchema, required: true }],
});

eventSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

siteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Events = mongoose.model("Event", eventSchema);
