import {
  bookASiteService,
  cancelTicketService,
  getEventsService,
} from "../../services/events";
import { BookSite } from "../../types/events";
import { Ticket } from "../../types/user";
import { bookASite, cancelASite, setEvents } from "../reducers/events";
import { setNotification } from "../reducers/notification";
import { addTicket, cancelTicket } from "../reducers/user";
import { AppDispatch } from "../store";

export const getEventsAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const events = await getEventsService();
      if (typeof events !== "undefined") {
        return dispatch(setEvents(events));
      }
    } catch {
      dispatch(
        setNotification(
          "We could have not retrieved the data, please try again later",
        ),
      );
    }
  };
};

export const bookASiteAction = (book: BookSite) => {
  return async (dispatch: AppDispatch) => {
    const reservation = await bookASiteService(book);
    if (typeof reservation !== "string") {
      dispatch(
        setNotification(
          "Your ticket has been booked successfully, go to my tickets to see it",
        ),
      );
      dispatch(addTicket(reservation));
      return dispatch(bookASite(reservation));
    }
    return dispatch(setNotification(reservation));
  };
};

export const cancelTicketAction = (ticket: Ticket) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await cancelTicketService(ticket);
      dispatch(setNotification(response));
      dispatch(cancelTicket(ticket));
      dispatch(cancelASite(ticket));
    } catch {
      dispatch(
        setNotification(
          "We could not have proceed with your request, please, try again later",
        ),
      );
    }
  };
};
