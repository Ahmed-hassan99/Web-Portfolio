import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import SingleExperience from "./SingleExperience.js";

import Fade from "react-reveal/Fade";

const Experience = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <main className=" bg-gray-900 bg-opacity-100 blur2 m-0 min-h-screen">
      <Fade>
        <section className="container relative  mx-auto  p-5 lg:p-10">
          <h1 className="text-2xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
            Experience
            <strong className="pl-2 text-teal-500 font-bold">
              {" "}
              & Education
            </strong>
          </h1>
          <h2 className=" text-sm text-center sm:text-lg text-gray-400 flex justify-center lg:justify-start mb-6 sm:mb-12 italic ">
            Welcome to my page of professional Experiences!
          </h2>
          {/* <BrowserRouter> */}
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="flex flex-col md:flex-row transition-all items-center md:items-start duration-500"
          >
            <TabList className="flex flex-row inline-flex md:flex-col flex-none overflow-x-auto  ">
              {props.experienceData &&
                props.experienceData.map((experience) => (
                  <Tab
                    selectedClassName="text-teal-400 border-teal-400 bg-opacity-40 blur bg-teal-900"
                    className="cursor-pointer flex-shrink-0 inline-flex items-center border-b-4 md:border-b-0 md:border-l-4 border-gray-800 justify-center transition-all  duration-700  py-3 px-3  text-teal-100 hover:bg-opacity-40 hover:blur hover:bg-teal-900 hover:text-teal-400 font-bold text-xs md:text-sm "
                  >
                    {experience.place}{" "}
                  </Tab>
                ))}
            </TabList>

            {props.experienceData &&
              props.experienceData.map((experience) => (
                <TabPanel>
                  <>
                    <SingleExperience singleExperience={experience} />
                  </>
                </TabPanel>
              ))}
          </Tabs>
        </section>
      </Fade>
    </main>
  );
};
export default Experience;
