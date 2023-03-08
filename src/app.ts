import express, { Application, Request, Response, NextFunction } from 'express';
// import fs from 'fs'
import cors from 'cors';
// import path from 'path'
import config from 'config';
// import { v1 as uuid } from 'uuid'
import { createServer, Server } from 'http';

import './db-config/mongoDB';
import routerv1 from './router/v1/router';

const app: Application = express();
const port = config.get('app.port');
const host = config.get('app.host');
//
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
/**
 * Router API V.1.
 * @remarks
 *  API Version 1
 */
app.use('/api/v1/', routerv1);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
const httpServer: Server = createServer(app);

httpServer.listen(port, () => {
  console.log(`Rest API is now running on http://localhost:${port}/api/v1`);
});
