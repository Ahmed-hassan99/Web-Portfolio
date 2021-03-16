import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleProject() {
  const [projectData, setProjectData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,           
            place,
            description,
            projectType,
            logoImage{ 
              asset->{
                  _id,
                  url
                }
            },
            projectDescription,
            comingSoon,
            link,
            tags
          }`
      )
      .then((data) => setProjectData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!projectData)
    return (
      <div className="bg-gray-900 h-screen flex justify-center items-center text-gray-400">
        Loading...<i class="fas fa-spinner animate-spin"></i>
      </div>
    );

  if (projectData.comingSoon)
    return (
      <div className="bg-gray-900 h-screen flex justify-center items-center text-gray-400">
        Coming Soon...🚧
      </div>
    );
  else
    return (
      <main className="bg-gray-900 bg-opacity-100  blur2  md:w-4/5 md:mx-auto">
        <div className="bg-gray-900 min-h-screen  pt-20">
          <div className="container shadow-lg  bg-blue-900 bg-opacity-20 rounded-lg">
            <div className="  justify-start p-8">
              <h2 className=" text-teal-400 text-3xl lg:text-6xl mb-4 uppercase">
                {!projectData.logoImage && projectData.title}
                {projectData.logoImage && (
                  <img
                    src={urlFor(projectData.logoImage).url()}
                    className=" rounded w-72 md:w-96 "
                    alt={projectData.title}
                  />
                )}
              </h2>

              <div>
                <h3 className=" text-teal-600 text-2xl lg:text-4xl my-4">
                  Overview:
                </h3>
                <p className="mb-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed ">
                  {projectData.description}
                </p>
              </div>

              <div className="prose prose lg:prose-lg  text-gray-300 max-w-full">
                <BlockContent
                  blocks={projectData.projectDescription}
                  projectId="0rdpl6dw"
                  dataset="production"
                />
              </div>
              {/* <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full ">
            <BlockContent
              blocks={projectData.description}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div> */}
            </div>
          </div>
        </div>
      </main>
    );
}
