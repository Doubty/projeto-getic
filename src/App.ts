import express from 'express';
import bodyParser from 'body-parser';
import authController from './controllers/AuthController';
import pingController from './controllers/PingController';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(authController);
app.use(pingController);

app.listen(3000);
