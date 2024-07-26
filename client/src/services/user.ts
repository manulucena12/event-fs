import { Token, UserToLog } from "../types/user";
import axios from "axios";

export const loginService = async (user: UserToLog): Promise<Token> => {
  const res = await axios.post("https://event-fs.onrender.com/api/login", user);
  return res.data;
};
