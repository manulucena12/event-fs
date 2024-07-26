import supertest from "supertest";
import { app } from "../src";
import { Event, Ticket } from "../src/types/events";
import { Events } from "../src/schemas/events";

export const testingEvents = () => {
  describe("Testing events", () => {
    const api = supertest(app);
    beforeAll(async () => {
      await api.post("/api/users").send({
        username: "user-example",
        password: "password-example",
      });
    });
    it("Retrieving events works properly", async () => {
      await api
        .get("/api/events")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((response) => {
          expect(Array.isArray(response.body)).toBeTruthy();
        });
    });
    it("POST works", async () => {
      const testEvent: Event = {
        artist: "The Weeknd",
        city: "Seville",
        date: "July 12, 2025",
        sites: [
          {
            type: "vip",
            available: 30,
            price: 250,
            persons: [],
          },
          {
            type: "gold",
            available: 100,
            price: 175,
            persons: [],
          },
          {
            type: "general",
            available: 1000,
            price: 100,
            persons: [],
          },
        ],
      };
      await api
        .post("/api/events")
        .send(testEvent)
        .expect(201)
        .then((response) => {
          expect(typeof response.body.id === "string").toBeTruthy();
        });
    });
    it("Posting an incomplete event causes error", async () => {
      const testEvent = {
        artist: "The Weeknd",
        city: "Seville",
        sites: [],
      };
      await api.post("/api/events").send(testEvent).expect(400);
    });
    it("Booking a site works", async () => {
      const event = await Events.findOne({ date: "July 12, 2025" });
      await api
        .put("/api/events/book")
        .send({
          username: "user-example",
          type: "vip",
          id: event?.id,
        })
        .expect(200)
        .then((response) => {
          expect(typeof response.body === "object").toBeTruthy();
        });
    });
    it("Booking a site without username/login causes error", async () => {
      const event = await Events.findOne({ date: "July 12, 2025" });
      await api
        .put("/api/events/book")
        .send({
          type: "vip",
          id: event?.id,
        })
        .expect(400)
        .then((response) => {
          expect(response.body).toBe("This user does not exist");
        });
    });
    it("Cancelling a reservation works", async () => {
      const event = await Events.findOne({ date: "July 12, 2025" });
      const ticket: Omit<Ticket, "artist" | "date" | "place"> = {
        username: "user-example",
        type: "vip",
        eventId: event?.id,
      };
      await api
        .put("/api/events/cancel")
        .send(ticket)
        .expect(200)
        .then((response) => {
          expect(response.body).toBe("Ticket canceled successfully");
        });
    });
    it("DELETE works", async () => {
      const event = await Events.findOne({ date: "July 12, 2025" });
      await api.delete("/api/events").send({ id: event?.id }).expect(200);
    });
  });
};
