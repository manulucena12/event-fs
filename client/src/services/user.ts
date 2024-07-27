import { CreateUser, UserToken, UserToLog } from "../types/user";
import axios, { isAxiosError } from "axios";

export const loginService = async (
  user: UserToLog,
): Promise<UserToken | string> => {
  try {
    const res = await axios.post(
      "https://event-fs.onrender.com/api/login",
      user,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw new Error();
    }
  }
};

export const signinService = async (
  user: UserToLog,
): Promise<CreateUser | string> => {
  try {
    const res = await axios.post(
      "https://event-fs.onrender.com/api/users",
      user,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw new Error();
    }
  }
};
