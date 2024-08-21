import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
  FaPhp,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";

function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaHtml5 color="#E34F26" size={40} />
            </span>
            <h1 className="text-white font-bold">HTML5</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaCss3 color="#1572b6" size={40} />
            </span>
            <h1 className="text-white font-bold">CSS3</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaReact color="#61DAFB" size={40} />
            </span>
            <h1 className="text-white font-bold">React</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaJs color="#F7DF1E" size={40} />
            </span>
            <h1 className="text-white font-bold">JavaScript</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaFigma color="#F24E1E" size={40} />
            </span>
            <h1 className="text-white font-bold">Figma</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <SiMongodb color="#47A248" size={40} />
            </span>
            <h1 className="text-white font-bold">MongoDB</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaPhp color="#787CB5" size={40} />
            </span>
            <h1 className="text-white font-bold">PHP</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaPython color="#306998" size={40} />
            </span>
            <h1 className="text-white font-bold">Python</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-800 flex items-center rounded-2xl mb-2">
              <FaJava color="#E34F26" size={40} />
            </span>
            <h1 className="text-white font-bold">JAVA</h1>
          </div>
        </div>
        <section className="flex flex-col gap-4 mt-4 md:mt-10 md:w-3/5">
          <div className="flex flex-col items-center bg-blue-600 rounded-lg p-2">
            <FaGoogle color="#FFFFFF" size={30} />
            <div className="text-white text-center mt-2">
              <h2 className="leading-tight font-bold text-sm">
                SOFTWARE ENGINEER, GOOGLE
              </h2>
              <p className="text-xs leading-tight font-thin">19-AUGUST-2024</p>
              <ul className="text-xs p-2">
                <li>SENIOR SOFTWARE DEVELOPER</li>
                <li>MOBILE APPLICATION DEVELOPER</li>
                <li>SENIOR SDE DEVELOPER</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center bg-red-600 rounded-lg p-2">
            <RiNetflixFill color="#FFFFFF" size={30} />
            <div className="text-white text-center mt-2">
              <h2 className="leading-tight font-bold text-sm">
                SOFTWARE ENGINEER, NETFLIX
              </h2>
              <p className="text-xs leading-tight font-thin">19-AUGUST-2024</p>
              <ul className="text-xs p-2">
                <li>SENIOR WEBSITE DEVELOPER</li>
                <li>SENIOR MOBILE APPLICATION DEVELOPER</li>
                <li>SDE DEVELOPER</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center bg-yellow-600 rounded-lg p-2">
            <FaAmazon color="#FFFFFF" size={30} />
            <div className="text-white text-center mt-2">
              <h2 className="leading-tight font-bold text-sm">
                SOFTWARE ENGINEER, AMAZON
              </h2>
              <p className="text-xs leading-tight font-thin">19-AUGUST-2024</p>
              <ul className="text-xs p-2">
                <li>SOFTWARE DEVELOPER</li>
                <li>SENIOR MOBILE APPLICATION DEVELOPER</li>
                <li>SENIOR WEBSITE DEVELOPER</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;
