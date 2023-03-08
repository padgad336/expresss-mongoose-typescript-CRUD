"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import fs from 'fs'
const cors_1 = __importDefault(require("cors"));
// import path from 'path'
const config_1 = __importDefault(require("config"));
// import { v1 as uuid } from 'uuid'
const http_1 = require("http");
require("./db-config/mongoDB");
const router_1 = __importDefault(require("./router/v1/router"));
const app = (0, express_1.default)();
const port = config_1.default.get('app.port');
const host = config_1.default.get('app.host');
//
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.json({ limit: '50mb' }));
/**
 * Router API V.1.
 * @remarks
 *  API Version 1
 */
app.use('/api/v1/', router_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const httpServer = (0, http_1.createServer)(app);
httpServer.listen(port, () => {
    console.log(`Rest API is now running on http://localhost:${port}/api/v1`);
});
