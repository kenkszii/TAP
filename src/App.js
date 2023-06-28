import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SocialMedia from "./components/socialMedias/SocialMedia";

function App() {
return(
  <>
  <NavBar/>
  <Hero/>
  <SocialMedia/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </>
  ); 
}

export default App;
