import React, { Component } from "react";
import image from "../Assets/Headshott.jpg";
import logo from "../Assets/AH-logo.png";
import { Transition, animated } from "react-spring/renderprops";
import { Link } from "react-scroll";
import resume from "../Assets/Resume.pdf";

const navButton =
  "inline-flex items-center cursor-pointer justify-center transition-all w-full duration-500 py-3 px-3 my-4 rounded text-teal-100 hover:text-teal-400 font-bold text-xl";

class NavBar extends Component {
  state = { clicked: false };
  state = {
    auth: false,
    slide: 0, // How much should the Navbar slide up or down
    initpos: true,
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
    console.log(currentScrollY <= 90);
    console.log(lastScrollY);

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
      <header className="w-0 h-0 md:w-full ">
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
          <Link
            to="Home-section"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={
              this.state.clicked ? this.handleClick : this.handleClickIcon
            }
          >
            <img
              src={logo}
              alt="logo"
              className="h-8 w-8 ml-10 my-3 float-left transition-all duration-500 hover:opacity-100 opacity-80 rounded"
            />
          </Link>

          <nav className="  p-0 justify-end items-center  flex-row mr-20 ml-10 hidden md:flex ">
            <Link
              to="Home-section"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-teal-400  "
              className="inline-flex items-center cursor-pointer transition-all duration-500 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Home
            </Link>

            <Link
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-flex items-center cursor-pointer transition-all  duration-500 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
              activeClass="text-teal-400 "
            >
              About Me
            </Link>

            <Link
              to="Experience-section"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-teal-400 "
              className="inline-flex items-center cursor-pointer transition-all  duration-500 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Experiences
            </Link>
            <Link
              to="Project-section"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-teal-400 "
              className="inline-flex items-center cursor-pointer transition-all  duration-500 py-3 px-3  rounded text-teal-100 hover:text-teal-400 font-bold text-1xl"
            >
              Projects
            </Link>
            <a
              className="transition-all float-right  duration-500 justify-center rounded  py-1 px-3 mx-4 my-2 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-20"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
          <button
            className=" p-0 float-right transition-all duration-500 items-center mr-10 my-3  md:hidden cursor-pointer z-50 "
            onClick={this.handleClick}
          >
            <i
              className={
                this.state.clicked
                  ? "fas fa-times text-3xl text-teal-500 opacity-80 hover:opacity-100"
                  : "fas fa-bars text-3xl text-teal-500 opacity-80 hover:opacity-100"
              }
            ></i>
          </button>
        </div>

        <div
          className={
            this.state.clicked
              ? "mx-auto flex flex-col sm:flex-row justify-between justify-center fixed top-0 w-full h-full md:hidden z-40 blur"
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
                  <Link
                    to="Home-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="text-teal-400 bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    Home
                  </Link>
                  <Link
                    to="about-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="text-teal-400  bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    About Me
                  </Link>
                  <Link
                    to="Experience-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="text-teal-400  bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    Experiences
                  </Link>
                  <Link
                    to="Project-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="text-teal-400 bg-teal-100"
                    className={navButton}
                    onClick={this.handleClick}
                  >
                    Projects
                  </Link>
                  <a
                    className=" inline-flextransition-all duration-500 justify-center rounded  py-1 px-3 mx-auto my-4 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-20 text-xl"
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
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
