import React, { Component } from "react";
// react  reveal and scroll
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";
//import images and pdf
// import resume from "../Assets/Resume_AhmedHassan.pdf";
import logo from "../Assets/AH-logo.png";

const navButton =
  "inline-flex items-center cursor-pointer justify-center transition-all w-full duration-300 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-xl";

class NavBar extends Component {
  state = { clicked: false };
  state = {
    auth: false,
    slide: 0, // How much should the Navbar slide up or down
    initpos: false,
    lastScrollY: 0, // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-58px" });
      if (lastScrollY < 0) {
        this.setState({ slide: "0px", initpos: true });
      }
    } else if (currentScrollY <= 90) {
      this.setState({ slide: "0px", initpos: true });
    } else {
      this.setState({ slide: "0px", initpos: false });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleClickIcon = () => {
    this.setState({ clicked: this.state.clicked });
  };

  render() {
    return (
      <header className="w-0 h-0 md:w-full">
        <div
          className={
            !this.state.clicked
              ? this.state.initpos
                ? "fixed w-full mx-auto z-50  block bg-gray-900 bg-opacity-10 "
                : "fixed w-full mx-auto z-50  block bg-gray-900 bg-opacity-70 blur shadow-xl "
              : "fixed w-full mx-auto z-50  block bg-gray-900 bg-opacity-0 "
          }
          style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: "transform 90ms linear",
          }}
        >
          <HashLink
            smooth
            to="/#Home-section"
            className="cursor-pointer"
            onClick={
              this.state.clicked ? this.handleClick : this.handleClickIcon
            }
          >
            <img
              src={logo}
              alt="logo"
              className="h-8 w-8 ml-10 my-3 float-left transition-all duration-300 hover:opacity-100 opacity-80 rounded"
            />
          </HashLink>

          <nav className="  p-0 justify-end items-center  flex-row mr-10 ml-10 hidden md:flex ">
            <HashLink
              smooth
              to="/#Home-section"
              activeClassName="text-teal-400  "
              className="inline-flex items-center cursor-pointer transition-all duration-300 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="/#about-section"
              className="inline-flex items-center cursor-pointer transition-all  duration-300 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
              activeClassName="text-teal-400 "
            >
              About Me
            </HashLink>

            <HashLink
              smooth
              to="/#Experience-section"
              activeClassName="text-teal-400 "
              className="inline-flex items-center cursor-pointer transition-all  duration-300 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Experiences
            </HashLink>

            <HashLink
              smooth
              to="/#Project-section"
              activeClassName="text-teal-400 "
              className="inline-flex items-center cursor-pointer transition-all  duration-300 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Projects
            </HashLink>

            <Link
              className="transition-all inline-flex items-center  duration-300 justify-center rounded  py-1 px-3 ml-4 my-2 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-30 font-bold hover:text-teal-400"
              to="/resume"
            >
              Resume
            </Link>
          </nav>
          <button
            className=" p-0 float-right transition-all duration-300 items-center mr-10 my-3  md:hidden cursor-pointer z-50 "
            onClick={this.handleClick}
          >
            <i
              className={
                this.state.clicked
                  ? "fas fa-times text-3xl text-teal-500 opacity-80 hover:opacity-100 "
                  : "fas fa-bars text-3xl text-teal-500 opacity-80 hover:opacity-100 "
              }
            ></i>
          </button>
        </div>

        <div
          className={
            this.state.clicked
              ? "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full md:hidden z-40 blur"
              : "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full hidden  "
          }
        >
          <nav className="flex inline-flex justify-center items-center flex-col  w-full h-full  bg-gray-900 opacity-90">
            <HashLink
              smooth
              to="/#Home-section"
              activeClassName="text-teal-400 bg-teal-100"
              className={navButton}
              onClick={this.handleClick}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#about-section"
              activeClassName="text-teal-400  bg-teal-100"
              className={navButton}
              onClick={this.handleClick}
            >
              About Me
            </HashLink>
            <HashLink
              smooth
              to="/#Experience-section"
              activeClassName="text-teal-400  bg-teal-100"
              className={navButton}
              onClick={this.handleClick}
            >
              Experiences
            </HashLink>
            <HashLink
              smooth
              to="/#Project-section"
              activeClassName="text-teal-400 bg-teal-100"
              className={navButton}
              onClick={this.handleClick}
            >
              Projects
            </HashLink>
            <Link
              className=" inline-flex transition-all duration-300 justify-center rounded  py-1 px-3 mx-auto my-4 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-20 text-xl"
              to="/resume"
              onClick={this.handleClick}
            >
              Resume
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
