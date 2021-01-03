import React from "react";

import BlockContent from "@sanity/block-content-to-react";

import Fade from "react-reveal/Fade";

const SingleExperience = (props) => {
  return (
    <div className=" md:m-0 md:ml-10 mt-5 ">
      <Fade>
        <h1 className=" text-lg text-teal-400 font-bold p-1">
          {props.singleExperience.title}
        </h1>
        <h2 className="text-md text-gray-500  italic p-1">
          {new Date(props.singleExperience.startDate).toLocaleDateString(
            undefined,
            {
              year: "numeric",
              month: "long",
            }
          )}
          {" - "}
          {new Date(props.singleExperience.endDate).toLocaleDateString(
            undefined,
            {
              year: "numeric",
              month: "long",
            }
          )}
        </h2>
        <div className=" prose text-gray-200 prose-sm lg:prose-lg max-w-full p-1 ">
          <BlockContent
            blocks={props.singleExperience.jobDescription}
            projectId="0rdpl6dw"
            dataset="production"
          />
        </div>
      </Fade>
    </div>
  );
};

export default SingleExperience;
