import React from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

import Fade from "react-reveal/Fade";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = (props) => {
  return (
    <main className=" relative bg-gray-900 blur2 md:w-4/5 md:mx-auto">
      <div className="p-5  container mx-auto relative">
        <Fade>
          <h1 className="text-2xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
            About
            <strong className="pl-2 text-teal-500 font-bold pr-4"> Me</strong>
            <div className=" relative w-full  ">
              <div className="absolute w-full border-gray-500 border-t-2 inset-y-1/2 opacity-50"></div>
            </div>
          </h1>
        </Fade>
        <Fade>
          <section className="bg-teal-800 bg-opacity-75 rounded-lg shadow-2xl flex flex-col p-4 lg:px-10 ">
            <div className=" inline-flex flex-col  lg:justify-between xl:flex-row items-center justify-center transition-all duration-300">
              <div className="prose md:prose-lg lg:prose-xl inline-flex flex-col text-white items-center  text-center md:text-left ">
                <BlockContent
                  blocks={props.author.bio}
                  projectId="0rdpl6dw"
                  dataset="production"
                />
              </div>

              <div className=" inline-flex flex-none  items-center justify-center m-5 ">
                <img
                  src={urlFor(props.author.authorImage).url()}
                  className=" rounded max-h-96 border-solid border-teal-500 border-2 "
                  alt={props.author.name}
                />
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </main>
  );
};
export default About;
