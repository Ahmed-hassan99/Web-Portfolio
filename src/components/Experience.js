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
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center nameFont">
          Experiences Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 ">
          Welcome to my page of Experiences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {experienceData &&
            experienceData.map((experience, index) => (
              <article>
                <Link
                  to={"/experience/" + experience.slug.current}
                  key={experience.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
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