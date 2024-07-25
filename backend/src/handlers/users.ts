import { Request, Response } from "express-serve-static-core";
import { User } from "../schemas/users";
import { UserType } from "../types/users";
import bcrypt from "bcryptjs";
import { CreateUserRB, DeleteUserRB } from "../types/responses";

export const getAllUsers = async (
  req: Request,
  res: Response<UserType[] | "Internal server error">,
) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch {
    return res.status(500).json("Internal server error");
  }
};

export const createUser = async (
  req: Request<NonNullable<unknown>, NonNullable<unknown>, UserType>,
  res: Response<CreateUserRB>,
) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json("Missing parameters");
  }
  const added = await User.findOne({ username });
  if (added) {
    return res.status(400).json("User already exists");
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    passwordHash,
    tickets: [],
  });
  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch {
    return res.status(500).json("Internal server error");
  }
};

export const deleteUser = async (
  req: Request<NonNullable<unknown>, NonNullable<unknown>, UserType>,
  res: Response<DeleteUserRB>,
) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json("Missing parameters");
  }
  const added = await User.findOne({ username });
  if (!added) {
    return res.status(400).json("This user does not exist");
  }
  const isCorrect = await bcrypt.compare(password, added.passwordHash);
  if (!isCorrect) {
    return res.status(400).json("Malformatted parameters");
  }
  try {
    await User.findOneAndDelete({ username });
    return res.status(200).json("User eliminated");
  } catch {
    return res.status(500).json("Internal server error");
  }
};
