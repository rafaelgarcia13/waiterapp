import path from 'node:path';
import express from 'express';
import { routes } from './routes';

const app = express();

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);

export { app };
