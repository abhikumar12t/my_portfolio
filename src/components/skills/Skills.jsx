import React from "react";
import { SkillsInfo } from "../Constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 px-[7vw] lg:px-[10vw] bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]"
    >
      {SkillsInfo.map((section) => (
        <div key={section.title} className="mb-10">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-center text-white sm:text-4xl">
            {section.title}
          </h1>
          <div className="w-22 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="mt-3 text-center text-white sm:text-lg lg:text-xl">
            {section.title === "Skills"
              ? "A collection of my technical skills and expertise honed through various projects and experiences"
              : "Tools I frequently use to develop and deploy projects efficiently"}
          </p>

          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {section.items.map((skill) => (
              <div
                key={skill.name}
                className="relative flex flex-col items-center w-[45%] sm:w-40 lg:w-40 h-34 p-4 overflow-hidden rounded-lg cursor-pointer group
                           shadow-[rgba(0,0,0,0.17)_-8px_-8px_15px_2px_inset] 
                           hover:shadow-[rgba(0,0,0,0.17)_8px_8px_15px_2px_inset] 
                           transition-all duration-500 transform hover:scale-105 bg-gray-800"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="object-contain w-16 h-16"
                />
                <h1 className="absolute font-semibold text-white transition-opacity duration-300 -translate-x-1/2 opacity-100 bottom-3 left-1/2">
                  {skill.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
