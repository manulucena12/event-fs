import { bookASiteAction, cancelTicketAction } from "../redux/actions/events";
import { AppDispatch, store } from "../redux/store";
import { BookSite } from "../types/events";
import { Ticket } from "../types/user";

export const handleBooking = async (
  event: React.SyntheticEvent,
  book: BookSite,
) => {
  event.preventDefault();
  const dispatch: AppDispatch = store.dispatch;
  if (window.confirm(`Do you want to book a ${book.type} site?`)) {
    dispatch(bookASiteAction(book));
  }
};

export const handleCancelation = async (
  event: React.SyntheticEvent,
  ticket: Ticket,
) => {
  event.preventDefault();
  const dispatch: AppDispatch = store.dispatch;
  if (
    window.confirm(
      `Are you sure you want to cancel your ticket for ${ticket.artist} event?`,
    )
  ) {
    dispatch(cancelTicketAction(ticket));
  }
};
