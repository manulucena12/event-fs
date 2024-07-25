import mongoose from "mongoose";
import { UserType } from "../types/users";
import { Ticket } from "../types/events";

const ticketSchema = new mongoose.Schema<Ticket>({
  username: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: String, required: true },
  eventId: { type: String, required: true },
  type: { type: String, required: true },
  artist: { type: String, required: true },
});

const userSchema = new mongoose.Schema<UserType>({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  tickets: [{ type: ticketSchema }],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

export const User = mongoose.model("User", userSchema);
