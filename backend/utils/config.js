require("dotenv").config();

const PORT = process.env.PORT || 3001;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MONGODB_URI = process.env.MONGODB_URI || "undefined url";

module.exports = {
  PORT,
  WEATHER_API_KEY,
  MONGODB_URI,
};
