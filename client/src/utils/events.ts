import { bookASiteAction } from "../redux/actions/events";
import { AppDispatch, store } from "../redux/store";
import { BookSite } from "../types/events";

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
