import { loginService, signinService } from "../../services/user";
import { UserToLog } from "../../types/user";
import { setNotification } from "../reducers/notification";
import { setUser } from "../reducers/user";
import { AppDispatch } from "../store";

export const loginAction = (user: UserToLog) => {
  return async (dispatch: AppDispatch) => {
    const userToken = await loginService(user);
    if (typeof userToken !== "string") {
      window.localStorage.setItem("User", JSON.stringify(userToken));
      return dispatch(setUser(userToken));
    }
    return dispatch(setNotification(userToken));
  };
};

export const siginAction = (user: UserToLog) => {
  return async (dispatch: AppDispatch) => {
    const result = await signinService(user);
    if (typeof result !== "string") {
      return dispatch(
        setNotification(
          "Your new user has been created successfully, please now log in with it",
        ),
      );
    }
    return dispatch(setNotification(result));
  };
};
