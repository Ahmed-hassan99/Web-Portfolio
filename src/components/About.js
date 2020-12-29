import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import image from "../Assets/Biomedical-Eng-background1.jpg";
import imageUrlBuilder from "@sanity/image-url";

import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="relative min-h-screen bg-gray-900 bg-opacity-90">
        <div className="absolute inset-1/2 text-gray-100 text-xl">
          Loading...
        </div>
      </div>
    );

  return (
    <main>
      <img
        src={image}
        alt="Abstract Biomedical Engineering"
        className="absolute object-cover w-full h-full"
      />
      <div className="fixed bg-gray-800 bg-opacity-50 h-full w-full fixed top-0 z-0"></div>
      <div className="p-5 pt-20 lg:p-10 lg:pt-48  container mx-auto relative">
        <section className="bg-gray-900 rounded-lg shadow-2xl flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex inline-flex justify-center m-5 ">
            <img
              src={urlFor(author.authorImage).url()}
              className=" rounded w-32 h-32  sm:w-48 sm:h-48 lg:w-64 lg:h-64 border-solid border-teal-500 border-2 "
              alt={author.name}
            />
          </div>
          <div className="text-lg inline-flex flex-col justify-center ">
            <h1 className="nameFont text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-teal-100 mb-2 lg:mb-4 ">
              {" "}
              Hey there. I'm{" "}
              <span className="text-teal-400">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl inline-flex flex-col text-white">
              <BlockContent
                blocks={author.bio}
                projectId="0rdpl6dw"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
