import React from "react";
import Fade from "react-reveal/Fade";

const Project = (props) => {
  return (
    <main className="bg-gray-900 bg-opacity-100 min-h-screen blur2">
      <section className="container mx-auto p-5 lg:p-10">
        <section className="container mx-auto">
          <Fade>
            <h1 className="text-2xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
              My{" "}
              <strong className="pl-2 text-teal-500 font-bold">Projects</strong>
            </h1>
          </Fade>
          <h2 className=" text-md sm:text-lg text-gray-400 flex justify-center lg:justify-start mb-12 italic">
            Welcome to my projects page!
          </h2>
          <Fade top cascade>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {props.projectData &&
                props.projectData.map((project, index) => (
                  <article className="relative h-80 rounded-lg shadow-xl bg-blue-900 bg-opacity-30 p-8 sm:p-12 ">
                    <h3 className="text-gray-100 text-2xl sm:text-3xl font-bold mb-2 transition-all duration-500 hover:text-teal-700 ">
                      {project.title}
                    </h3>

                    <p className="my-3 text-md sm:text-lg text-gray-300 leading-relaxed ">
                      {project.description}
                    </p>
                    <div className="absolute bottom-0 left-0  p-5 lg:p-10 text-gray-600 text-xs">
                      <div className="flex flex-row flex-wrap">
                        {project.tags.map((tags) => (
                          <div className="inline-flex text-gray-500 px-1 ">
                            {tags}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 p-5 lg:p-10">
                      <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 font-bold hover:text-teal-700 transition-all duration-500 "
                      >
                        <i class="fas fa-external-link-alt text-lg"></i>
                      </a>
                    </div>
                  </article>
                ))}
            </section>
          </Fade>
        </section>
      </section>
    </main>
  );
};
export default Project;
