import React from "react";
import Home from "./Home.js";
import About from "./About.js";
import Project from "./Project.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";

const Main = (props) => {
  return (
    <>
      <div className="bg-gray-900">
        <div id="Home-section">
          <Home resume={props.resume} />
        </div>

        <div id="About-section">
          <About author={props.authorData} />
        </div>
        <div id="Experience-section">
          <Experience experienceData={props.experienceData} />
        </div>

        <div id="Project-section">
          <Project projectData={props.projectData} />
        </div>

        <div id="Contact-section">
          <Contact />
        </div>
      </div>
    </>
  );
};
export default Main;
