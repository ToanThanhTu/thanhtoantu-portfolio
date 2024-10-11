import axios from "axios";

const baseUrl = "/api/projects";

const getProjects = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getProjects };