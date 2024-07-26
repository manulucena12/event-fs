import mongoose from "mongoose";
import { server } from "../src";
import { User } from "../src/schemas/users";
import { Events } from "../src/schemas/events";
import { testingUsers } from "./users";
import { testingEvents } from "./events";
import { testingLogin } from "./login";

describe("Testing app", () => {
  testingEvents();
  testingUsers();
  testingLogin();
});

afterAll(async () => {
  await User.deleteMany({});
  await Events.deleteMany({});
  console.log("Database dropped");
  await mongoose.connection.close();
  server.close();
});
