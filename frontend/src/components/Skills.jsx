// Import icons from Material-UI
import CodeIcon from "@mui/icons-material/Code";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

// Import profile picture, skills and professional development data
import skills from "../data/skills.json";
import developments from "../data/professional-dev.json";

function Skills() {
  return (
    <section className="bg-primary-background">
      <section className="xl:flex xl:justify-between xl:space-x-12 xl:space-y-0 space-y-8 portfolio-width py-20">
        {/* Skills Summary section */}

        <div className="xl:w-1/2">
          <h3>Skills Summary</h3>
          <ul>
            {skills.map(({ name, content }) => {
              return (
                <li key={name} className="flex mt-6">
                  <CodeIcon className="mr-2" />
                  <div>
                    <h4>{name}</h4>
                    <p>{content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Professional Development section */}

        <div className="xl:w-1/2">
          <h3>Professional Development</h3>
          <ul>
            {developments.map(({ name, origin }) => {
              return (
                <li key={name} className="flex mt-6">
                  <KeyboardDoubleArrowRightIcon className="mr-2" />
                  <div>
                    <h4>{name}</h4>
                    <p>{origin}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Skills;
