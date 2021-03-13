//import react libraries
import React from "react";
import { SocialIcon } from "react-social-icons";
import Fade from "react-reveal/Fade";

const email = "mailto:ahmed@ahmedahassan.com";

export default function Contact() {
  return (
    <main className=" bg-teal-900 bg-opacity-50 blur2 m-0 md:w-4/5 md:mx-auto">
      <footer className="mx-auto  flex flex-col justif-center  mt-5 py-16 bg-gray-800 bg-opacity-25 ">
        <div className=" inline-flex flex  py-3 px-4 my-2 justify-center ">
          <SocialIcon
            url="https://github.com/Ahmed-hassan99"
            className="mr-4 rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 50, width: 50 }}
          />

          <SocialIcon
            url="https://www.linkedin.com/in/ahmedhassan-ah/"
            className="mr-4  rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 50, width: 50 }}
          />

          <SocialIcon
            url="https://twitter.com/Ahmeddodo99_"
            className="mr-4  rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 50, width: 50 }}
          />
        </div>

        <div className=" text-gray-400 opacity-75 text-center  ">
          Designed & Built by Ahmed Hassan
        </div>
        <small className=" text-gray-400 opacity-75 text-center  ">
          &copy; Copyright 2021
        </small>
      </footer>
    </main>
  );
}
