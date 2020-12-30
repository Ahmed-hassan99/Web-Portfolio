import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import { NavLink } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SingleExperience() {
  const [singleExperience, setSingleExperience] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
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
          "authorImage": author->image
        } `
      )
      .then((data) => setSingleExperience(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleExperience)
    return (
      <div className="relative min-h-screen bg-gray-900 bg-opacity-90">
        <div className="absolute inset-1/2 text-gray-100 text-xl">
          Loading...
        </div>
      </div>
    );

  return (
    <main className=" bg-gray-900 bg-opacity-90 min-h-screen p-5 pt-5 sm:p-10 sm:p-12 relative">
      <div className="absolute top-5 left-5 cursor-pointer z-50">
        <NavLink to="/experience">
          <i className="fas fa-chevron-left text-xl text-white hover:text-gray-300"></i>
        </NavLink>
      </div>
      <article className=" container shadow-lg mx-auto bg-teal-100 rounded-lg mt-10">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="relative bg-white bg-opacity-75 blur rounded p-6 md:p-12">
              <h1 className="  text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-4 font-bold text-center ">
                {singleExperience.title}
              </h1>
              <div className="flex justify-center text-gray-900 ">
                <p className=" flex items-center pl-2 pb-2 text-sm sm:text-lg md:text-xl lg:text-2xl">
                  {singleExperience.place}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 text-gray-800">
                <p className=" text-right p-2 text-xs sm:text-sm md:text-md lg:text-lg">
                  {new Date(singleExperience.startDate).toLocaleDateString(
                    undefined,
                    {
                      year: "numeric",
                      month: "long",
                    }
                  )}
                  {"-"}
                  {new Date(singleExperience.endDate).toLocaleDateString(
                    undefined,
                    {
                      year: "numeric",
                      month: "long",
                    }
                  )}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singleExperience.mainImage.asset.url}
            alt={singleExperience.title}
            className="w-full object-cover rounded-t mainImagesm md:mainImage"
            // style={{ height: "400px" }}
          />
        </header>

        <div className="px-6 md:px-16 lg:px-48 py-4 md:py-12  lg:py-20 prose-sm lg:prose-xl max-w-full">
          <BlockContent
            blocks={singleExperience.jobDescription}
            projectId="0rdpl6dw"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
