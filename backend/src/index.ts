import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { eventsRouter } from "./routes/events";

export const app = express();
const { MONGO_DB_URI, MONGO_DB_URI_TEST, MONGO_DB_URI_DEV, NODE_ENV } =
  process.env;

if (!MONGO_DB_URI && !MONGO_DB_URI_TEST && !MONGO_DB_URI_DEV) {
  throw new Error(
    "At least one MongoDB URI must be defined in environment variables",
  );
}
const uri: string =
  NODE_ENV === "test"
    ? MONGO_DB_URI_TEST!
    : NODE_ENV === "dev"
      ? MONGO_DB_URI_DEV!
      : MONGO_DB_URI!;

app.use(express.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Mongo DB connected successfully on mode ${NODE_ENV}`);
  })
  .catch((err) => {
    console.error(`Mongo DB connection error: ${err}`);
  });

app.use("/api/events", eventsRouter);

app.listen(3002, () => {
  console.log(`Server running on port http://localhost:3002`);
});
