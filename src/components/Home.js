import React from "react";
import image from "../Assets/Biomedical-Eng-background1.jpg";
import resume from "../Assets/Resume.pdf";
import { SocialIcon } from "react-social-icons";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const Animate = useSpring({
    from: { opacity: 0, marginTop: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 0, duration: 500 },
  });

  return (
    <main className="relative w-screen h-screen">
      <img
        src={image}
        alt="Abstract Biomedical Engineering"
        className="absolute object-cover w-full h-full"
      />
      <div className="fixed bg-gray-800 bg-opacity-70 h-full w-full fixed top-0 z-0"></div>

      <animated.div
        style={Animate}
        className=" absolute inset-y-1/4 inset-x-0  bg-red-900 mx-auto z-10"
      >
        <section className="relative flex flex-col px-8  justify-cener md:justify-start">
          <h1 className="transition-all  duration-500 inline-flex justify-center md:justify-start  text-4xl sm:text-6xl md:text-7xl sm:pt-30 lg:text-8xl text-gray-300 font-bold nameFont leading-none lg:leading-snug  z-30">
            Ahmed
            <strong className="text-teal-500 font-bold pl-2">Hassan</strong>
          </h1>
          <h2 className="transition-all  duration-500 inline-flex justify-center text-center md:text-left md:justify-start p-1 text-lg bg-gray-900 bg-opacity-30  md:text-xl sm:pt-30 lg:text-2xl text-gray-200  opacity-75 leading-none lg:leading-snug mt-4 z-30">
            Engineer, Web developer, Designer, Programmer
          </h2>
        </section>
        <section className="relative flex px-4 mt-2 justify-center md:justify-start">
          <div className=" inline-flex  py-3 px-4 my-2 ">
            <SocialIcon
              url="https://github.com/Ahmed-hassan99"
              className="mr-4 rounded-full  transition-all  duration-500 hover:bg-teal-500"
              target="_blank"
              fgColor="#fff"
              bgColor="#ffffff00"
              style={{ height: 50, width: 50 }}
            />

            <SocialIcon
              url="https://www.linkedin.com/in/ahmed-hassan-ca/"
              className="mr-4  rounded-full  transition-all  duration-500 hover:bg-teal-500"
              target="_blank"
              fgColor="#fff"
              bgColor="#ffffff00"
              style={{ height: 50, width: 50 }}
            />

            <SocialIcon
              url="https://twitter.com/Ahmeddodo99_"
              className="mr-4  rounded-full  transition-all  duration-500 hover:bg-teal-500"
              target="_blank"
              fgColor="#fff"
              bgColor="#ffffff00"
              style={{ height: 50, width: 50 }}
            />
          </div>
          <div className="inline-flex hidden md:block">
            <a
              className="  transition-all text-2xl text-gray-300 duration-500 justify-center font-bold  rounded flex inline-flex md:mx-1 py-3 px-3 my-4 border-solid border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-20"
              href="mailto:ahmed99dodo1999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch!
            </a>
          </div>
        </section>

        <section className="transition-all md:hidden duration-500 relative text-lg sm:text-2xl flex px-8 text-teal-500 flex-col md:flex-row  leading-none lg:leading-snug">
          <a
            className="  transition-all  duration-500 justify-center font-bold  rounded flex inline-flex mx-auto md:mx-2 py-3 px-3 my-2 border-solid border-2 border-teal-500  hover:bg-teal-500 hover:bg-opacity-20"
            href="mailto:ahmed99dodo1999@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch!
          </a>

          <a
            className="transition-all  duration-500 justify-center font-bold  rounded flex inline-flex mx-auto md:mx-2 py-3 px-3 my-2 border-solid border-2 border-teal-500  hover:bg-teal-500 hover:bg-opacity-20 "
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </section>
      </animated.div>
    </main>
  );
}
