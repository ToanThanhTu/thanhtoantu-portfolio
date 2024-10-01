import Skills from "./components/Skills";
import Greetings from "./components/Greetings";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

import weatherService from "./services/weather";
import { WeatherContext } from "./context/WeatherContext";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService.getWeather().then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <main>
      <WeatherContext.Provider value={weather}>
        <NavBar />
      </WeatherContext.Provider>

      <section
        id="about-section"
        className="flex-col justify-between items-center"
      >
        <Greetings />
        <Skills />
      </section>

      <section id="projects-section" className="bg-primary-background">
        <Projects />
      </section>

      <section id="contacts-section" className="portfolio-width md:py-96 py-40">
        <Contacts />
      </section>

      <ScrollTopButton />

      <Footer />
    </main>
  );
}

export default App;
