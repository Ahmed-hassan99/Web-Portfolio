import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Badge from "react-bootstrap/Badge";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{ title, date, place, description, projectType, link, tags}`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-gray-900 bg-opacity-95 min-h-screen p-12">
      <section className="container mx-aut mt-10">
        <h1 className="text-2xl sm:text-5xl flex justify-center lg:justify-start nameFont text-teal-100 mb-5">
          My <strong className="pl-2 text-teal-500 font-bold">Projects</strong>
        </h1>
        <h2 className=" text-md sm:text-lg text-gray-400 flex justify-center lg:justify-start mb-12 italic">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-teal-100 bg-opacity-90 p-8 sm:p-12">
                <h3 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-2 transition-all duration-500 hover:text-teal-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="text-gray-600 text-xs">
                  <span>
                    <strong className="font-bold"> Finished on</strong>:{"  "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold"> Company</strong>:
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold"> Type</strong>:{"  "}
                    {project.projectType}
                  </span>

                  <div>
                    {project.tags.map((tags) => (
                      <Badge className=" mr-1" variant="dark">
                        {tags}
                      </Badge>
                    ))}
                  </div>
                  <p className="my-3 text-md sm:text-lg text-gray-800 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 font-bold hover:underline hover:text-teal-700 transition-all duration-500"
                    >
                      View The Project{"  "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
