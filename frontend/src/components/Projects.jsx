import { useEffect, useState } from "react";
import { getProjects } from "../data/projects";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  if (!projects) {
    return <p>Loading projects...</p>;
  }

  return (
    <div className="m-auto max-w-screen-2xl text-center pb-20 px-12">
      <hr className="pb-20 border-t-2 border-primary-grey" />
      <h2 className="font-semibold">Selected Projects</h2>
      <ul className="flex flex-wrap gap-4 sm:grid-cols-2 mt-10 justify-center">
        {projects.map(({ name, description, url, imageUrl }) => {
          return (
            <li
              key={name}
              className="text-left space-y-4 p-4 pb-20 max-w-96 relative rounded-lg bg-primary-white"
            >
              <img src={imageUrl} alt={name} className="w-full rounded-lg" />
              <h4>{name}</h4>
              <p>{description}</p>
              <a href={url} className="btn absolute bottom-4" target="_blank">
                View this project
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
