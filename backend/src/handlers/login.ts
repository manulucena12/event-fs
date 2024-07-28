import { Request, Response } from "express-serve-static-core";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Token, UserType } from "../types/users";
import { LoginRB } from "../types/responses";
import { User } from "../schemas/users";

export const loginHandler = async (
  req: Request<NonNullable<unknown>, NonNullable<unknown>, UserType>,
  res: Response<LoginRB>,
) => {
  const { MY_SECRET_PASSWORD } = process.env;
  if (!MY_SECRET_PASSWORD) {
    return res.status(500).json("Internal server error");
  }
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json("Missing parameters");
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json("Username or/and password incorrect");
  }
  const isCorrect = await bcrypt.compare(password, user.passwordHash);
  if (!isCorrect) {
    return res.status(400).json("Username or/and password incorrect");
  }
  const token = jwt.sign(username, MY_SECRET_PASSWORD);
  const data: Token = {
    username,
    token,
    tickets: user.tickets,
  };
  try {
    return res.status(200).json(data);
  } catch {
    return res.status(500).json("Internal server error");
  }
};
