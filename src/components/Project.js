import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <main className="bg-gray-900 bg-opacity-100  blur2 md:w-4/5 md:mx-auto">
      <section className="container mx-auto p-5  ">
        <section className="container mx-auto">
          <Fade>
            <h1 className=" text-2xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-10">
              <strong className=" flex-none  font-bold">Some of </strong>
              <strong className=" pl-4 flex-none text-teal-500 font-bold pr-4">
                My Work
              </strong>
              <div className="relative w-full ">
                <div className="absolute w-full border-gray-500 border-t-2 inset-y-1/2 opacity-50"></div>
              </div>
            </h1>
          </Fade>

          <Fade cascade>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
              {props.projectData &&
                props.projectData.map((project, index) => (
                  <div className="relative ">
                    <Link
                      to={"/" + project.slug.current}
                      key={project.slug.current}
                    >
                      <article className="relative text-gray-100 hover:text-teal-500 rounded-lg shadow-xl bg-blue-900 bg-opacity-30 p-8  h-full transition duration-150 ease-in-out transform translate-y-0 hover:-translate-y-2">
                        <h3 className=" text-2xl  font-bold mb-2  ">
                          {project.title}
                        </h3>

                        <p className="mb-5 text-sm sm:text-base text-gray-300 leading-relaxed ">
                          {project.description}
                        </p>
                        <br></br>
                        <div className="absolute bottom-0 left-0 p-8 text-gray-600 text-xs">
                          <div className="flex flex-row flex-wrap">
                            {project.tags.map((tags) => (
                              <div className="inline-flex text-gray-500 px-1 capitalize">
                                {tags}
                              </div>
                            ))}
                          </div>
                        </div>
                      </article>
                    </Link>
                    <div className="absolute top-8 right-4 ">
                      <a
                        href={project.gitLink}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 mr-4 font-bold hover:text-teal-700 transition-all duration-300 z-50"
                      >
                        <i class="fab fa-github text-lg"></i>
                      </a>
                      <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 mr-4 font-bold hover:text-teal-700 transition-all duration-300 "
                      >
                        <i class="fas fa-external-link-alt text-lg"></i>
                      </a>
                    </div>
                  </div>
                ))}
            </section>
          </Fade>
        </section>
      </section>
    </main>
  );
};
export default Project;
