import axios from "axios";
import { Event } from "../types/events";

export const getEventsService = async (): Promise<Event[] | undefined> => {
  try {
    const res = await axios.get("https://event-fs.onrender.com/api/events");
    return res.data;
  } catch {
    throw new Error();
  }
};
