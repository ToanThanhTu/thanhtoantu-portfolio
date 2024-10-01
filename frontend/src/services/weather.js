import axios from "axios";

const baseUrl = "/api/weather";

const getWeather = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getWeather };
