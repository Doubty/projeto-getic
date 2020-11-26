import express, { json, urlencoded } from 'express';
import authController from './controllers/AuthController';
import pingController from './controllers/PingController';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(authController);
app.use(pingController);

app.listen(3000);
