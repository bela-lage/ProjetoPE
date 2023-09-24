// Aqui ficam as informações principais contidas na minha API

import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js"
db.connect();

export default app;