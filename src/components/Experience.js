import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";

import sanityClient from "../client.js";

import SingleExperience from "./SingleExperience.js";

import Fade from "react-reveal/Fade";

export default function Experience() {
  const [experienceData, setExperience] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="experience"]{title,
          _id,
          slug,
          mainImage{ 
              asset->{
                  _id,
                  url
                }
            },
          place,
          jobDescription,
          startDate,
          endDate,
          "name": author->name,
          "authorImage": author->image }`
      )
      .then((data) => setExperience(data))
      .catch(console.error);
  }, []);

  return (
    <main className=" bg-gray-900 bg-opacity-100 blur2 m-0 min-h-screen">
      <Fade>
        <section className="container relative  mx-auto  p-5 lg:p-10">
          <h1 className="text-2xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
            Experience
            <strong className="pl-2 text-teal-500 font-bold">
              {" "}
              & Education
            </strong>
          </h1>
          <h2 className=" text-sm text-center sm:text-lg text-gray-400 flex justify-center lg:justify-start mb-6 sm:mb-12 italic ">
            Welcome to my page of professional Experiences!
          </h2>
          <BrowserRouter>
            <div className="flex flex-col md:flex-row transition-all items-center md:items-start duration-500">
              <div className="flex flex-row inline-flex md:flex-col flex-none overflow-x-auto  ">
                {experienceData &&
                  experienceData
                    .slice(0)
                    .reverse()
                    .map((experience) => (
                      <NavLink
                        to={"/" + experience.slug.current}
                        key={experience.slug.current}
                        activeClassName="text-teal-400 border-teal-400 bg-opacity-40 blur bg-teal-900"
                        className="flex-shrink-0 inline-flex items-center border-b-4 md:border-b-0 md:border-l-4 border-gray-800 justify-center transition-all  duration-700  py-3 px-3  text-teal-100 hover:bg-opacity-40 hover:blur hover:bg-teal-900 hover:text-teal-400 font-bold text-xs md:text-sm "
                      >
                        <Redirect from="/" to={"/" + experience.slug.current} />
                        {experience.place}
                      </NavLink>
                    ))}
              </div>

              <Switch>
                <Route component={SingleExperience} path="/:slug" />
              </Switch>
            </div>
          </BrowserRouter>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData &&
            experienceData
              .slice(0)
              .reverse()
              .map((experience, index) => (
                <article>
                  <Link
                    to={"/experience/" + experience.slug.current}
                    key={experience.slug.current}
                  >
                    <span
                      className="hover:shadow-2xl block h-64 relative rounded shadow-xl leading-snug bg-white border-l-8 border-teal-400  transition-all duration-500 "
                      key={index}
                    >
                      <img
                        src={experience.mainImage.asset.url}
                        alt={experience.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                          {experience.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
        </div> */}
        </section>
      </Fade>
    </main>
  );
}
