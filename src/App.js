// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
// import SingleExperience from "./components/SingleExperience";
import Navbar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.css";
import { Element } from "react-scroll";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Switch>
    //     <Route component={Home} path="/" exact />
    //     <Route component={About} path="/about" />
    //     <Route component={SingleExperience} path="/experience/:slug" />
    //     <Route component={Experience} path="/experience" />
    //     <Route component={Project} path="/project" />
    //   </Switch>
    // </BrowserRouter>
    <>
      <Navbar />

      <Element id="Home-section" name="Home-section">
        <Home />
      </Element>
      <Element id="about-section" name="about-section">
        <About />
      </Element>
      <Element id="Experience-section" name="Experience-section">
        <Experience />
      </Element>
      <Element id="Project-section" name="Project-section">
        <Project />
      </Element>
    </>
  );
}

export default App;
