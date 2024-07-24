"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const events_1 = require("../handlers/events");
exports.eventsRouter = express_1.default.Router();
exports.eventsRouter.get("/", events_1.getEvents);
exports.eventsRouter.post("/", events_1.createEvents);
