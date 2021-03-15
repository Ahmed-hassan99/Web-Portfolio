import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

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
            link,
            tags
          }`
      )
      .then((data) => setProjectData(data[0]))
      .catch(console.error);
  }, [slug]);

  //   if (!projectData)
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center text-gray-400">
      Coming Soon...
    </div>
  );
  // eslint-disable-next-line
  return (
    <div className="bg-gray-900 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {projectData.title}
              </h2>
            </div>
          </div>
          {/* <img
            className="w-full object-cover rounded-t"
            src={urlFor(projectData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          /> */}
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full ">
          {/* <BlockContent
            blocks={projectData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          /> */}
        </div>
      </div>
    </div>
  );
}
