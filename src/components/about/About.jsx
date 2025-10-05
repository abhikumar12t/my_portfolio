import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-20 mb-20"
    >
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="mt-8  md:w-1/2 md:text-left md:mt-0">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl text-center md:text-left">
            Hi, I am
          </h1>

          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl text-center md:text-left">
  Abhishek Kumar
</h2>


          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8245ec] mb-4">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Front-end Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              cursor={true}
              repeat={Infinity}
              wrapper="span"
            />
          </h3>

          <p className="mt-8 mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-lg">
            Web Developer with 6+ Months of Internship experience, having good
            knowledge of application development and worked on different
            technologies. Good understanding of programming, functional
            requirements, hardworking and confident. Able to submit desired work
            within stipulated time.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1hPuJf8H3HFD63u--Rn1_JnloklClE5Qx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mt-5 text-lg font-bold text-white transition duration-300 transform rounded-full hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-2 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="./images/myImg.png" // <-- Yahan apni image ka path do
              alt="Abhishek Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
