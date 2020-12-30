import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import image from "../Assets/Headshott.jpg";
import { Transition, animated } from "react-spring/renderprops";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header className="w-0 h-0">
        <div
          className="absolute top-5 right-5 cursor-pointer z-50 "
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
              ? "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full z-40"
              : "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full z-0"
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
                    activeClassName="text-teal-400 "
                    className="inline-flex items-center transition-all  duration-500 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-2xl"
                    onClick={this.handleClick}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    activeClassName="text-teal-400  "
                    className="inline-flex items-center transition-all  duration-500 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-2xl"
                    onClick={this.handleClick}
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to="/experience"
                    activeClassName="text-teal-400  "
                    className="inline-flex items-center transition-all  duration-500 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-2xl"
                    onClick={this.handleClick}
                  >
                    Experiences
                  </NavLink>
                  <NavLink
                    to="/project"
                    activeClassName="text-teal-400 "
                    className="inline-flex items-center transition-all  duration-500 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-2xl"
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
