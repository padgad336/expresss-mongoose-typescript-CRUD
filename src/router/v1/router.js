"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller/book/controller");
const validate_1 = require("./controller/book/validate");
const router = (0, express_1.Router)();
router.route('/book')
    .get(controller_1.getAllBook)
    .post(validate_1.validationPost, controller_1.createBook);
router.route('/book/:bookId')
    .delete(controller_1.deleteBook)
    .put(validate_1.validationPost, controller_1.updateBook);
exports.default = router;
