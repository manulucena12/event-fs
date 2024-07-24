"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvents = exports.getEvents = void 0;
const events_1 = require("../schemas/events");
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield events_1.Events.find({});
        res.status(200).json(events);
    }
    catch (_a) {
        res.status(500).json("Internal server error");
    }
});
exports.getEvents = getEvents;
const createEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { artist, date, sites, city } = req.body;
    if (!artist || !date || !sites || !city) {
        res.status(400).json("Missing parameters");
    }
    if (typeof artist !== "string") {
        res.status(400).json("Type error");
    }
    if (typeof city !== "string") {
        res.status(400).json("Type error");
    }
    if (typeof date !== "string") {
        res.status(400).json("Type error");
    }
    if (!Array.isArray(sites)) {
        res.status(400).json("Type error");
    }
    try {
        const newEvent = new events_1.Events({
            artist,
            date,
            sites,
            city,
        });
        const response = yield newEvent.save();
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json("Internal server error");
        console.log(error);
    }
});
exports.createEvents = createEvents;
