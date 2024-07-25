import express from "express";
import { createUser, deleteUser, getAllUsers } from "../handlers/users";

export const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/", createUser);

userRouter.delete("/", deleteUser);
