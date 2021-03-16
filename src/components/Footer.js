//import react libraries
import React from "react";
import { SocialIcon } from "react-social-icons";

const email = "mailto:ahmed@ahmedahassan.com";

export default function Contact() {
  return (
    <main className=" bg-teal-900 bg-opacity-50 blur2 m-0 md:w-full md:mx-auto">
      <footer className="mx-auto  flex flex-col justify-center  md:mt-5 pt-5 pb-8 bg-gray-800 bg-opacity-25 ">
        <div className=" inline-flex flex  py-1 px-4 my-1 justify-center ">
          <SocialIcon
            url="https://github.com/Ahmed-hassan99"
            className="mr-4 rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 40, width: 40 }}
          />

          <SocialIcon
            url={email}
            className="mr-4 rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 40, width: 40 }}
          />

          <SocialIcon
            url="https://www.linkedin.com/in/ahmedhassan-ah/"
            className="mr-4  rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 40, width: 40 }}
          />

          <SocialIcon
            url="https://twitter.com/Ahmeddodo99_"
            className="mr-4 rounded-full  transition-all  duration-300 hover:bg-gray-900"
            target="_blank"
            fgColor="#cbd5e0"
            bgColor="#ffffff00"
            style={{ height: 40, width: 40 }}
          />
        </div>

        <div className=" text-gray-400 opacity-60 text-center  text-xs">
          Designed & Built by Ahmed Hassan
        </div>
        <small className=" text-gray-400 opacity-60 text-center text-xs">
          &copy; Copyright 2021
        </small>
      </footer>
    </main>
  );
}
