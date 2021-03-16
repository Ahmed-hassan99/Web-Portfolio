import React from "react";
import Home from "./Home.js";
import About from "./About.js";
import Project from "./Project.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import { Element } from "react-scroll";

const Main = (props) => {
  return (
    <>
      <div className="bg-gray-900">
        <Element id="Home-section" name="Home-section">
          <Home resume={props.resume} />
        </Element>

        <Element id="about-section" name="about-section">
          <About author={props.authorData} />
        </Element>
        <Element id="Experience-section" name="Experience-section">
          <Experience experienceData={props.experienceData} />
        </Element>

        <Element id="Project-section" name="Project-section">
          <Project projectData={props.projectData} />
        </Element>

        <Element id="Contact-section" name="Contact-section">
          <Contact />
        </Element>
      </div>
    </>
  );
};
export default Main;
