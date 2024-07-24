"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const events_1 = require("./routes/events");
exports.app = (0, express_1.default)();
const { MONGO_DB_URI, MONGO_DB_URI_TEST, MONGO_DB_URI_DEV, NODE_ENV } = process.env;
const uri = NODE_ENV === "test"
    ? MONGO_DB_URI_TEST
    : NODE_ENV === "dev"
        ? MONGO_DB_URI_DEV
        : MONGO_DB_URI;
mongoose_1.default.connect(uri).then(() => {
    console.log(`Mongo DB connected successfully on mode ${NODE_ENV}`);
});
exports.app.use(express_1.default.json());
exports.app.use("/api/events", events_1.eventsRouter);
exports.app.listen(3002, () => {
    console.log(`Server running on port http://localhost:3002`);
});
