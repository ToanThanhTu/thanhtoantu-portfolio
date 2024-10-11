const projectsRouter = require("express").Router();
const Project = require("../models/project");

projectsRouter.get("/", async (request, response) => {
  const projects = await Project.find({});
  response.json(projects);
});

projectsRouter.post("/", async (request, response) => {
  const body = request.body;

  const project = new Project({
    name: body.name,
    description: body.description,
    url: body.url,
    imageUrl: body.imageUrl,
  });

  const savedProject = await project.save();

  response.status(201).json(savedProject);
});

module.exports = projectsRouter;
