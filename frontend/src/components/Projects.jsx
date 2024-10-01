import selectedProjects from "../data/selectedProjects.json";
import drumMachineImage from "../assets/drum-machine.png";
import markdownPreviewerImage from "../assets/markdown-previewer.png";
import pokemonSearchAppImage from "../assets/pokemon-search-app.png";
import todoAppImage from "../assets/todo-app.png";

const imageMap = {
  "Drum Machine": drumMachineImage,
  "Markdown Previewer": markdownPreviewerImage,
  "Pokemon Search App": pokemonSearchAppImage,
  "ToDo App": todoAppImage,
};

function Projects() {
  return (
    <div className="m-auto max-w-3xl min-w-64 text-center pb-20 px-4">
      <hr className="pb-20 border-t-2 border-primary-grey" />
      <h2 className="font-semibold">Selected Projects</h2>
      <ul className="grid gap-4 sm:grid-cols-2 mt-10 justify-center">
        {selectedProjects.map(({ name, description, url }) => {
          return (
            <li
              key={name}
              className="text-left space-y-4 p-4 pb-20 max-w-96 relative rounded-lg bg-primary-white"
            >
              <img
                src={imageMap[name]}
                alt={name}
                className="w-full rounded-lg"
              />
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
