const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");

const middleware = require("./utils/middleware");

const weatherRouter = require("./controllers/weather");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.use("/api/weather", weatherRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);

module.exports = app;
