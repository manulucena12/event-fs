import axios, { isAxiosError } from "axios";
import { BookSite, Event } from "../types/events";
import { Ticket } from "../types/user";

export const getEventsService = async (): Promise<Event[] | undefined> => {
  try {
    const res = await axios.get("https://event-fs.onrender.com/api/events");
    return res.data;
  } catch {
    throw new Error();
  }
};

export const bookASiteService = async (
  book: BookSite,
): Promise<Ticket | string> => {
  try {
    const res = await axios.put(
      "https://event-fs.onrender.com/api/events/book",
      book,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw new Error();
  }
};
