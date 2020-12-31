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
    };
  }

  componentDidMount() {
    setTimeout(() => {
      sanityClient
        .fetch(
          `*[_type=="experience"]{title,
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
          "name": author->name,
          "authorImage": author->image }`
        )

        .then((data) => this.setState({ done: true }));
    }, 2000);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="bg-gray-900 h-screen flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className=" rounded p-0 animate-pulse h-20 w-20 "
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
              <Experience />
            </Element>
            <Element id="Project-section" name="Project-section">
              <Project />
            </Element>
          </>
        )}
      </div>
    );
  }
}
