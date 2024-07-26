import supertest from "supertest";
import { app } from "../src";

export const testingUsers = () => {
  const api = supertest(app);
  describe("Testing users", () => {
    it("Creating a user works", async () => {
      const newUser = {
        username: "user-example2",
        password: "password-example2",
      };
      await api
        .post("/api/users")
        .send(newUser)
        .expect(201)
        .then((response) => {
          expect(typeof response.body === "object").toBeTruthy();
        });
    });
    it("Creating a user that already exists causes error", async () => {
      const newUser = {
        username: "user-example2",
        password: "password-example2",
      };
      await api
        .post("/api/users")
        .send(newUser)
        .expect(400)
        .then((response) => {
          expect(response.body === "User already exists").toBeTruthy();
        });
    });
    it("Creating a user without enough parameters causes error", async () => {
        const newUser = {
          username: "user-example2"
        };
        await api
          .post("/api/users")
          .send(newUser)
          .expect(400)
          .then((response) => {
            expect(response.body === "Missing parameters").toBeTruthy();
          });
      });
      it("Deleting with wrong parameters causes error", async () => {
        const newUser = {
          username: "user-example2",
          password: "password-example3",
        };
        await api
          .delete("/api/users")
          .send(newUser)
          .expect(400)
          .then((response) => {
            expect(response.body === "Malformatted parameters").toBeTruthy();
          });
      });
      it("Deleting a user works", async () => {
        const newUser = {
          username: "user-example2",
          password: "password-example2",
        };
        await api
          .delete("/api/users")
          .send(newUser)
          .expect(200)
          .then((response) => {
            expect(response.body === "User eliminated").toBeTruthy();
          });
      });
  });
};
