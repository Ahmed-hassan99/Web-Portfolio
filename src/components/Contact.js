//import react libraries
import React from "react";
import Fade from "react-reveal/Fade";

const email = "mailto:ahmed@ahmedahassan.com";

export default function Contact() {
  return (
    <main className=" bg-gray-900 bg-opacity-100 blur2 m-0 md:w-4/5 md:mx-auto">
      <div className="  inset-y-1/4 inset-x-0 ">
        <Fade>
          <section className="container relative  mx-auto  p-5 lg:p-10">
            <h1 className="text-2xl sm:text-5xl flex justify-center  nameFont text-teal-100 mb-5">
              <div className="relative w-full ">
                <div className="absolute w-full border-gray-500 border-t-2 inset-y-1/2 opacity-50"></div>
              </div>
              <div className="flex-none p-4">
                Get In
                <strong className=" text-teal-500 font-bold"> Touch</strong>
              </div>
              <div className="relative w-full ">
                <div className="absolute w-full border-gray-500 border-t-2 inset-y-1/2 opacity-50"></div>
              </div>
            </h1>
            <h2 className=" text-sm text-center sm:text-lg text-gray-400 flex justify-center   italic mx-auto w-4/5">
              I'm currently open for any new opportunities, to expand my
              experiences post graduation this April. My inbox is always open,
              if you have any questions or just want to chat. I'll try my best
              to get back to you!
            </h2>
          </section>
        </Fade>
        <section className="transition-all duration-300 relative text-lg sm:text-2xl flex px-8 text-teal-500 justify-center  leading-none lg:leading-snug">
          <a
            className="  transition-all  duration-300 justify-center  rounded flex inline-flex mx-auto md:mx-2 py-3 px-3 mb-6 border-solid border-2 border-teal-500  hover:bg-teal-500 hover:bg-opacity-20"
            href={email}
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello
          </a>
        </section>
      </div>
    </main>
  );
}
