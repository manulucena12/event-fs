import { AppDispatch, store } from "../redux/store";
import { UserToLog } from "../types/user";
import { loginAction, siginAction } from "../redux/actions/user";

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
