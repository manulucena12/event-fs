/// <reference types="cypress" />

import { eventsTest } from "./handlers/testingEvents";
import { loginTest } from "./handlers/testingLogin";
import { registerTest } from "./handlers/testingRegister";

describe("Testing app", () => {
  registerTest();
  loginTest();
  eventsTest();
});
