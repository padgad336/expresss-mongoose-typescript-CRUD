"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const BookSchema = new Schema({
    title: { type: String },
    author: { type: String },
    description: { type: String }
}, { timestamps: true });
exports.BookModel = mongoose_1.default.model("Book", BookSchema);
exports.default = exports.BookModel;
