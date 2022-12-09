import path from 'path';
import express, { Application } from 'express';
import { notfound } from './middleware/notfound';
import { routes } from './routes';

const app:Application = express();

// Middleware

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// 404
app.use(notfound);

// Static file
app.use('/static', express.static(path.resolve('static')));

export {
  app,
};
