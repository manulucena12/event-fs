import { getEventsService } from "../../services/events";
import { setEvents } from "../reducers/events";
import { setNotification } from "../reducers/notification";
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
