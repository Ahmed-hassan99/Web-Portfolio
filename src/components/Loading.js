import React from "react";
import Home from "./Home.js";
import About from "./About.js";
import Project from "./Project.js";
import Experience from "./Experience.js";
import Navbar from "./NavBar";
import { Element } from "react-scroll";
import sanityClient from "../client.js";
import logo from "../Assets/AH-logo.png";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
      experienceData: undefined,
      projectData: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      //fetching experiences
      sanityClient
        .fetch(
          `*[_type=="experience"]
          {title,
          _id,
          slug,
          mainImage{ 
              asset->{
                  _id,
                  url
                }
            },
          place,
          jobDescription,
          startDate,
          endDate,
          ended,
           }`
        )
        .then((data) => {
          this.setState({ experienceData: data });
        });
      //fetching projects
      sanityClient
        .fetch(
          `*[_type == "project"]{ 
                title,
                date,
                place,
                description,
                projectType,
                link,
                tags}`
        )
        .then((data) => {
          this.setState({ done: true, projectData: data });
        });
    }, 1500);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="bg-gray-900 h-screen flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className=" rounded p-0 animate-pulse duration-200 h-20 w-20 "
            />
          </div>
        ) : (
          <>
            <Navbar />
            <Element id="Home-section" name="Home-section">
              <Home />
            </Element>
            <Element id="about-section" name="about-section">
              <About />
            </Element>
            <Element id="Experience-section" name="Experience-section">
              <Experience experienceData={this.state.experienceData} />
            </Element>
            <Element id="Project-section" name="Project-section">
              <Project projectData={this.state.projectData} />
            </Element>
          </>
        )}
      </div>
    );
  }
}
