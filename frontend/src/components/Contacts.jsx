import contactMethods from "../data/contactMethods.json";

import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const iconMap = {
  Email: <EmailIcon sx={{ fontSize: 35, marginRight: 1 }} />,
  Phone: <SmartphoneIcon sx={{ fontSize: 35, marginRight: 1 }} />,
  LinkedIn: <LinkedInIcon sx={{ fontSize: 35, marginRight: 1 }} />,
  GitHub: <GitHubIcon sx={{ fontSize: 35, marginRight: 1 }} />,
};

function Contacts() {
  return (
    <>
      <p className="italic text-center">Let&apos;s work together!</p>
      <h2 className="font-semibold text-center">Contact Me</h2>
      <ul className="sm:flex sm:justify-center sm:space-x-4 mt-10 grid grid-cols-2 gap-4 m-auto w-fit">
        {contactMethods.map(({ name, icon, url }) => {
          return (
            <li key={name} className="text-xl transition ease-in-out duration-300 hover:-translate-y-2 hover:scale-110">
              <a href={url} target="_blank" rel="noreferrer" className="">
                <p>
                  {iconMap[icon]}
                  {name}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Contacts;
