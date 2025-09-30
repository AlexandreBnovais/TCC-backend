import express, { urlencoded } from 'express';

export const app = express();

app.use(express.json());
app.use(urlencoded());



