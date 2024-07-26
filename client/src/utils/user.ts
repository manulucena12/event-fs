import { loginService } from "../services/user";
import { UserToLog } from "../types/user";

export const handleLogin = async (
  event: React.SyntheticEvent,
  username: string,
  password: string,
) => {
  event.preventDefault();
  const userToLog: UserToLog = {
    username,
    password,
  };
  await loginService(userToLog);
};
