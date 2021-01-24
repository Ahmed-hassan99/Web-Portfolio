import React from "react";
import BlockContent from "@sanity/block-content-to-react";

const SingleExperience = (props) => {
  // const Today = new Date();
  const experienceEndDate = new Date(props.singleExperience.endDate);

  return (
    <div className=" md:m-0 md:ml-10 mt-5 ">
      <h1 className=" text-lg text-teal-400 font-bold p-1">
        {props.singleExperience.title}{" "}
        <span className=" italic font-normal text-base text-gray-100">
          @ {props.singleExperience.place}{" "}
        </span>
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
        {props.singleExperience.ended
          ? experienceEndDate.toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
            })
          : "Present"}
      </h2>
      <div className=" prose text-gray-200 prose-sm lg:prose-lg max-w-full p-1 ">
        <BlockContent
          blocks={props.singleExperience.jobDescription}
          projectId="0rdpl6dw"
          dataset="production"
        />
      </div>
    </div>
  );
};

export default SingleExperience;
