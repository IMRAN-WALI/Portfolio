import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avatarImg from "../../assets/1.jpg";

function About() {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gray-500 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="w-full h-96 md:w-2/5 flex justify-center mb-8 md:mb-0">
        <img className="rounded-lg w-80" src={avatarImg} alt="About" />
      </div>
      <div className="w-full md:w-3/5">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About</h2>
        <ul>
          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                FRONTEND DEVELOPER
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repudiandae modi sed reiciendis sunt rem mollitia perspiciatis
                error nobis? Quibusdam debitis, maxime placeat incidunt
                provident temporibus suscipit dolor perferendis facilis?
              </p>
            </span>
          </li>

          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                BACKEND DEVELOPER
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repudiandae modi sed reiciendis sunt rem mollitia perspiciatis
                error nobis? Quibusdam debitis, maxime placeat incidunt
                provident temporibus suscipit dolor perferendis facilis?
              </p>
            </span>
          </li>

          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                FULLSTACK DEVELOPER
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repudiandae modi sed reiciendis sunt rem mollitia perspiciatis
                error nobis? Quibusdam debitis, maxime placeat incidunt
                provident temporibus suscipit dolor perferendis facilis?
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
