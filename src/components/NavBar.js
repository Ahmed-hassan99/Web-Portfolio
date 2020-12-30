import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import image from "../Assets/Headshott.jpg";
import logo from "../Assets/AH-logo.png";
import { Transition, animated } from "react-spring/renderprops";

import resume from "../Assets/Resume.pdf";
const navButton =
  "inline-flex items-center justify-center transition-all w-full duration-500 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-2xl";
class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header className="w-0 h-0 md:w-full ">
        <div className="relative mx-auto z-50 hidden md:block bg-gray-900 bg-opacity-80 blur">
          <NavLink to="/" exact>
            <img
              src={logo}
              alt="logo"
              className="h-7 w-7 ml-10 mt-3 float-left transition-all duration-500 hover:opacity-100 opacity-50 rounded"
            />
          </NavLink>
          <nav className=" flex p-0 justify-end items-center flex-row mr-20 ml-10  ">
            <NavLink
              to="/"
              exact
              activeClassName="text-teal-400  "
              className="inline-flex items-center   transition-all duration-500 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-teal-400 "
              className="inline-flex items-center transition-all  duration-500 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              About Me
            </NavLink>
            <NavLink
              to="/experience"
              activeClassName="text-teal-400 "
              className="inline-flex items-center transition-all  duration-500 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Experiences
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-teal-400 "
              className="inline-flex items-center transition-all  duration-500 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Projects
            </NavLink>
            <a
              className="transition-all float-right  duration-500 justify-center rounded  py-1 px-3 mx-4 my-2 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-20"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
        <div
          className="absolute top-5 right-5 block md:hidden cursor-pointer z-50 "
          onClick={this.handleClick}
        >
          <i
            className={
              this.state.clicked
                ? "fas fa-times text-xl text-gray-100 hover:text-gray-300"
                : "fas fa-bars text-xl text-gray-100 hover:text-gray-300"
            }
          ></i>
        </div>

        <div
          className={
            this.state.clicked
              ? "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full md:hidden z-40"
              : "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full md:hidden z-0"
          }
        >
          <Transition
            items={this.state.clicked}
            from={{ transform: "translate3d(0,-1000px,0)" }}
            enter={{ transform: "translate3d(0,0px,0)" }}
            leave={{ transform: "translate3d(0,-1000px,0)" }}
          >
            {(clicked) =>
              clicked &&
              ((props) => (
                <animated.div
                  className="flex inline-flex w-full justify-center items-center h-1/3 bg-gray-800 bg-opacity-75 sm:h-full sm:w-1/2 "
                  style={props}
                >
                  <img
                    src={image}
                    className=" rounded-full w-48 h-48 lg:w-64 lg:h-64  border-solid border-teal-500 border-2 lg:border-4"
                    alt="Ahmed Hassan"
                  />
                </animated.div>
              ))
            }
          </Transition>
          <Transition
            items={this.state.clicked}
            from={{ transform: "translate3d(0,1000px,0)" }}
            enter={{ transform: "translate3d(0,0px,0)" }}
            leave={{ transform: "translate3d(0,1000px,0)" }}
          >
            {(show) =>
              show &&
              ((props) => (
                <animated.nav
                  style={props}
                  className="flex inline-flex justify-center items-center flex-col  sm:w-1/2 w-full sm:h-full h-2/3 bg-gray-900 opacity-90"
                >
                  <NavLink
                    to="/"
                    exact
                    activeClassName="text-teal-400 bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    activeClassName="text-teal-400  bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to="/experience"
                    activeClassName="text-teal-400  bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    Experiences
                  </NavLink>
                  <NavLink
                    to="/project"
                    activeClassName="text-teal-400 bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    Projects
                  </NavLink>
                </animated.nav>
              ))
            }
          </Transition>
        </div>
      </header>
    );
  }
}

export default NavBar;
