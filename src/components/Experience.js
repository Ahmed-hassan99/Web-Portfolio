import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Experience() {
  const [experienceData, setExperience] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="experience"]{ title, slug, mainImage{ asset->{_id, url}, alt }}`
      )
      .then((data) => setExperience(data))
      .catch(console.error);
  }, []);

  return (
    <main className=" bg-gray-900 bg-opacity-90 min-h-screen p-10">
      <section className="container relative  mx-auto mt-10">
        <h1 className="text-3xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
          Experience
          <strong className="pl-2 text-teal-500 font-bold"> & Education</strong>
        </h1>
        <h2 className=" text-md text-center sm:text-lg text-gray-400 flex justify-center lg:justify-start mb-6 sm:mb-12 italic ">
          Welcome to my page of professional Experiences!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>
    </main>
  );
}
