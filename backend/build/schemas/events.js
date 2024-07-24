"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const personSchema = new mongoose_1.default.Schema({
    username: { type: String },
});
const siteSchema = new mongoose_1.default.Schema({
    type: { type: String, required: true, enum: ["general", "vip", "gold"] },
    available: { type: Number, required: true },
    price: { type: Number, required: true },
    persons: [{ type: personSchema }],
});
const eventSchema = new mongoose_1.default.Schema({
    artist: { type: String, required: true },
    date: { type: String, required: true },
    city: { type: String, required: true },
    sites: [{ type: siteSchema, required: true }],
});
eventSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
siteSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
personSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
exports.Events = mongoose_1.default.model("Event", eventSchema);
