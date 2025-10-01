import React, { useState } from "react";
import { projects } from "../Constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="work"
        className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
        style={{
          background: `linear-gradient(135deg,
            rgba(78, 55, 119, 0.6),
            rgba(59, 14, 163, 0.6),
            rgba(16, 5, 44, 0.8))`,
          clipPath: "polygon(0 0%, 100% 5%, 100% 100%, 0 100%)",
        }}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 rounded-xl"
                />
              </div>
              <div className="p-6 pt-1">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition  cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]">
          {/* Popup box */}
          <div className="relative text-gray-300 border-1 rounded-xl w-[900px] max-w-[95%] p-6 flex flex-col md:flex-row gap-6 animate-zoomIn shadow-xl bg-[rgba(22, 8, 42, 0.9)]">
            {/* Close button */}
             <div className="absolute top-0 right-0 p-1 font-bold text-gray-200 text-sm   bg-gray-800 cursor-pointer hover:bg-gray-700  rounded-bl-lg rounded-tr-xl  ">
                   <button className="cursor-pointer" onClick={() => setSelectedProject(null)}>✖</button>
             </div>


            {/* Left Side Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-60 w-auto rounded-lg object-contain"
              />
            </div>

            {/* Right Side Content */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-200 mb-3">{selectedProject.description}</p>

              {/* Technologies as badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-zoomIn {
            animation: zoomIn 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default Work;
