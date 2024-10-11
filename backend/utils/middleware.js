const logger = require("./logger");

const errorHandler = (error, request, response, next) => {
  if (error.name === "ValidationError") {
    return response.status(400).json({
      error: error.message,
    });
  } else if (error.name === "MongoServerError") {
    return response.status(400).json({ error: "Mongo Server Error" });
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

module.exports = {
  errorHandler,
  unknownEndpoint,
  requestLogger,
};
