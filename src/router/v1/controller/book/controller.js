"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.createBook = exports.getAllBook = void 0;
const book_1 = __importDefault(require("../../../../models/book"));
const responseError_1 = __importDefault(require("../../components/responseError"));
const getAllBook = async (req, res, next) => {
    try {
        const response = await book_1.default.find();
        if (response) {
            res.status(200).json(response);
        }
    }
    catch (e) {
        (0, responseError_1.default)(e, res);
    }
};
exports.getAllBook = getAllBook;
const createBook = async (req, res, next) => {
    try {
        const { title, author, description } = req.body;
        const bookData = {
            title,
            author,
            description,
        };
        const response = await book_1.default.create(bookData);
        console.log(response);
        if (response) {
            res.status(200).json({
                status: 200,
                code: 'SUCCESS_Collector_CREATE',
                message: 'Created Collector Success.',
            });
        }
    }
    catch (e) {
        (0, responseError_1.default)(e, res);
    }
};
exports.createBook = createBook;
const deleteBook = async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const response = await book_1.default.findByIdAndRemove({ _id: bookId });
        console.log(response);
        if (response) {
            res.status(200).json({
                status: 200,
                code: 'SUCCESS_BOOK_REMOVE',
                message: 'Removed Book Success.',
            });
        }
    }
    catch (e) {
        (0, responseError_1.default)(e, res);
    }
};
exports.deleteBook = deleteBook;
const updateBook = async (req, res, next) => {
    try {
        const { LecturerId } = req.params;
        const { title, author, description } = req.body;
        const bookData = {
            title,
            author,
            description,
        };
        const response = await book_1.default.findByIdAndUpdate({
            _id: LecturerId,
        }, bookData);
        console.log(response);
        if (response) {
            res.status(200).json({
                status: 200,
                code: 'SUCCESS_LECTURER_CREATE',
                message: 'Updated Lecturer Success.',
            });
        }
    }
    catch (e) {
        (0, responseError_1.default)(e, res);
    }
};
exports.updateBook = updateBook;
