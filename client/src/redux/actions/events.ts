import { bookASiteService, getEventsService } from "../../services/events";
import { BookSite } from "../../types/events";
import { bookASite, setEvents } from "../reducers/events";
import { setNotification } from "../reducers/notification";
import { addTicket } from "../reducers/user";
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
