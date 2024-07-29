import { AppDispatch, store } from "../redux/store";
import { UserToLog } from "../types/user";
import { loginAction, siginAction } from "../redux/actions/user";
import { deleteUserservice } from "../services/user";
import { setNotification } from "../redux/reducers/notification";

export const handleLogin = async (
  event: React.SyntheticEvent,
  username: string,
  password: string,
) => {
  event.preventDefault();
  const dispatch: AppDispatch = store.dispatch;
  const userToLog: UserToLog = {
    username,
    password,
  };
  await dispatch(loginAction(userToLog));
};

export const handleSigin = async (
  event: React.SyntheticEvent,
  username: string,
  password: string,
) => {
  event.preventDefault();
  const dispatch: AppDispatch = store.dispatch;
  const userToLog: UserToLog = {
    username,
    password,
  };
  await dispatch(siginAction(userToLog));
};

export const handleDelete = async (
  event: React.SyntheticEvent,
  user: UserToLog,
) => {
  event.preventDefault();
  const dispatch: AppDispatch = store.dispatch;
  const res = await deleteUserservice(user);
  window.localStorage.clear();
  window.location.reload();
  dispatch(setNotification(res));
};
