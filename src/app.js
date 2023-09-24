// Aqui ficam as informações principais contidas na minha API

import express from "express";

const app = express();

import db from "./config/database.js"
db.connect();

export default app;