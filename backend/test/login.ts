import supertest from "supertest";
import { app } from "../src";

export const testingLogin = () => {
  const api = supertest(app);
  beforeEach(async () => {});
  describe("Testing login", () => {
    it("Loging works properly", async () => {
      const userToLog = {
        username: "user-example",
        password: "password-example",
      };
      await api
        .post("/api/login")
        .send(userToLog)
        .expect(200)
        .then((response) => {
          expect(response.body.username).toBe(userToLog.username);
        });
    });
    it("Loging without incorrect data causes error", async () => {
      const userToLog = {
        username: "user-example2",
        password: "password-example",
      };
      await api
        .post("/api/login")
        .send(userToLog)
        .expect(400)
        .then((response) => {
          expect(response.body).toBe("Username or/and password incorrect");
        });
    });
  });
};
