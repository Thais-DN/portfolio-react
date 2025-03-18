import { About } from "../components/About/About.js";
import { Contact } from "../components/Contact/Contact.js";
import { Experience } from "../components/Experience/Experience.js";
import { Hero } from "../components/Hero/Hero.js";
import { Navbar } from "../components/Navbar/Navbar.js";
import { Projects } from "../components/Projects/Projects.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
