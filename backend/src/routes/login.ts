import express from "express";
import { loginHandler } from "../handlers/login";

export const loginRouter = express.Router();

loginRouter.post("/", loginHandler);
