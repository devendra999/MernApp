import express from "express";
import bodyParser from "body-parser"; // for getting data in req.body
import dotenv from "dotenv"; // .env file
import cors from "cors"; // when use two server data connected used cors

import Routes from "./routes/userRoutes.js";
import Connection from "./database/db.js";

const app = express();

dotenv.config();

// To handle HTTP POST requests in Express.js version 4 and above,
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // when use two server data connected used cors initialise here

app.use("/api/users", Routes);

const USERNAME = process.env.DB_USERNAME; // from .env file
const PASSWORD = process.env.DB_PASSWORD; // from .env file

const PORT = "8000";

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server PORT is ${PORT}`));
