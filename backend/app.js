const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");

const middleware = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");

const weatherRouter = require("./controllers/weather");
const projectsRouter = require("./controllers/project");
const mongoose = require("mongoose");

const mongoUrl = config.MONGODB_URI;
logger.info("Connecting to", mongoUrl);

mongoose
  .connect(mongoUrl)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.use("/api/weather", weatherRouter);
app.use("/api/projects", projectsRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;
