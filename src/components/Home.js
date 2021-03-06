//import react libraries
import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import Fade from "react-reveal/Fade";
//import images and pdf
import image from "../Assets/tealBackground2.jpg";
import { Link, useLocation } from "react-router-dom";
const email = "mailto:ahmed@ahmedahassan.com";

const Home = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <main className="relative h-screen bg-gray-900">
      <img
        src={image}
        alt="Abstract Biomedical Engineering"
        className="absolute object-cover w-full h-full"
      />
      <div className="absolute bg-gray-900 bg-opacity-90 h-full w-full fixed top-0 z-0 blur2 "></div>
      <div className=" absolute inset-y-1/4 inset-x-0 ">
        <Fade top cascade>
          <div className=" container mx-auto md:w-4/5">
            <section className="relative flex flex-col px-8  justify-center lg:justify-start">
              <h1 className="transition-all  duration-300 inline-flex justify-center lg:justify-start  text-4xl sm:text-6xl md:text-7xl sm:pt-30 lg:text-8xl text-gray-300 font-bold nameFont leading-none lg:leading-snug  z-30">
                Ahmed
                <strong className="text-teal-500 font-bold pl-2">Hassan</strong>
              </h1>
              <h2 className="transition-all  duration-300 inline-flex justify-center text-center md:text-left lg:justify-start p-1 text-lg bg-gray-900 bg-opacity-40  md:text-xl sm:pt-30 lg:text-2xl text-gray-200  opacity-75 leading-none lg:leading-snug mt-4 z-30">
                Engineer, Web developer, Designer, Programmer
              </h2>
            </section>
            <section className="relative flex px-4 mt-2 justify-center lg:justify-start">
              <div className=" inline-flex  py-3 px-4 my-2 ">
                <SocialIcon
                  url="https://github.com/Ahmed-hassan99"
                  className="mr-4 rounded-full  transition-all  duration-300 hover:bg-teal-500"
                  target="_blank"
                  fgColor="#fff"
                  bgColor="#ffffff00"
                  style={{ height: 50, width: 50 }}
                />

                <SocialIcon
                  url="https://www.linkedin.com/in/ahmedhassan-ah/"
                  className="mr-4  rounded-full  transition-all  duration-300 hover:bg-teal-500"
                  target="_blank"
                  fgColor="#fff"
                  bgColor="#ffffff00"
                  style={{ height: 50, width: 50 }}
                />

                <SocialIcon
                  url="https://twitter.com/Ahmeddodo99_"
                  className="mr-4  rounded-full  transition-all  duration-300 hover:bg-teal-500"
                  target="_blank"
                  fgColor="#fff"
                  bgColor="#ffffff00"
                  style={{ height: 50, width: 50 }}
                />
              </div>
              <div className="inline-flex hidden md:block">
                <a
                  className="  transition-all text-2xl text-gray-300 duration-300 justify-center font-bold  rounded flex inline-flex md:mx-1 py-3 px-3 my-4 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-20"
                  href={email}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in touch
                </a>
              </div>
            </section>

            <section className="transition-all md:hidden duration-300 relative text-lg sm:text-2xl flex px-8 text-teal-500 flex-col md:flex-row  leading-none lg:leading-snug">
              <a
                className="  transition-all  duration-300 justify-center font-bold  rounded flex inline-flex mx-auto md:mx-2 py-3 px-3 my-2 border-solid border-2 border-teal-500  hover:bg-teal-500 hover:bg-opacity-20"
                href={email}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>

              <Link
                className="transition-all  duration-300 justify-center font-bold  rounded flex inline-flex mx-auto md:mx-2 py-3 px-3 my-2 border-solid border-2 border-teal-500  hover:bg-teal-500 hover:bg-opacity-20 "
                to="/resume"
              >
                Resume
              </Link>
            </section>
          </div>
        </Fade>
      </div>
    </main>
  );
};

export default Home;
