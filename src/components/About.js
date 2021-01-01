import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
// import image from "../Assets/Biomedical-Eng-background1.jpg";
import imageUrlBuilder from "@sanity/image-url";

import Fade from "react-reveal/Fade";
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
                degree,
                bio,
                "authorImage": image.asset->url
            }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="relative min-h-screen bg-gray-900 bg-opacity-100">
        <div className="absolute inset-1/2 text-gray-100 text-xl">
          Loading...
        </div>
      </div>
    );

  return (
    <main className=" relative bg-gray-900 blur2">
      <div className="p-5  lg:p-10  container mx-auto relative">
        <Fade>
          <h1 className="text-3xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
            About
            <strong className="pl-2 text-teal-500 font-bold"> Me</strong>
          </h1>
        </Fade>
        <Fade>
          <section className="bg-teal-800 rounded-lg shadow-2xl flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 ">
            <div>
              <h1 className="nameFont inline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-teal-100   ">
                {" "}
                Hey there. I'm{" "}
                <span className="text-teal-400">
                  {author.name}
                  {", "}
                </span>
              </h1>
              <h2 className="text-md inline sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-teal-100 ">
                {" "}
                an {author.degree}{" "}
              </h2>
            </div>

            <div className="text-lg inline-flex flex-col  justify-between md:flex-row ">
              <div className="prose-lg lg:prose-2xl inline-flex flex-col text-white items-center">
                <BlockContent
                  blocks={author.bio}
                  projectId="0rdpl6dw"
                  dataset="production"
                />
              </div>

              <div className=" inline-flex flex-none  items-center justify-center m-5 ">
                <img
                  src={urlFor(author.authorImage).url()}
                  className=" rounded max-w-80 max-h-80 border-solid border-teal-500 border-2 "
                  alt={author.name}
                />
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </main>
  );
}
