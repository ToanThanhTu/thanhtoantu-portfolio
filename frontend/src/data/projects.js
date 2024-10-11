import projectService from '../services/project'

export const getProjects = async () => {
  const projects = await projectService.getProjects();
  return projects;
}