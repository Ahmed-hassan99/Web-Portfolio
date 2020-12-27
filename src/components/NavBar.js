import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-indigo-700">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-teal-100 nameFont hover:text-teal-400 text-4xl font-bold tracking-widest"
          >
            Ahmed Hassan
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white  bg-purple-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-teal-100 hover:text-teal-400 font-bold"
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            activeClassName="text-white  bg-purple-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-teal-100 hover:text-teal-400 font-bold"
          >
            Experiences
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white  bg-teal-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-teal-100 hover:text-teal-400 font-bold"
          >
            Projects
          </NavLink>
        </nav>
        <div className="inline-flex  py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/Ahmed-hassan99"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#ffffff00"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ahmed-hassan-ca/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#ffffff00"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
