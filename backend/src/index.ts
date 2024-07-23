import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

export const app = express();
const { MONGO_DB_URI, MONGO_DB_URI_TEST, MONGO_DB_URI_DEV, NODE_ENV } =
  process.env;
const uri =
  NODE_ENV === "test"
    ? MONGO_DB_URI_TEST
    : NODE_ENV === "dev"
      ? MONGO_DB_URI_DEV
      : MONGO_DB_URI;

app.use(express.json());

mongoose.connect(uri).then(() => {
  console.log(`Mongo DB connected successfully on mode ${NODE_ENV}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3002, () => {
  console.log(`Server running on port http://localhost:3002`);
});
