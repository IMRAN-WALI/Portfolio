import React from "react";
import avatarImg from "../../assets/3.jpg";
import TextChange from "../../TextChange";

function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          similique dolore illum, tempore dolorem nobis accusamus quae dolor ad
          molestias praesentium dolores aspernatur reiciendis beatae voluptatem
          velit libero laborum officiis.
        </p>
        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 md:py-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-500">
          Contact me
        </button>
      </div>
      <div className="flex justify-end items-end w-full md:w-1/2">
        <img className="w-2/5 md:w-2/3" src={avatarImg} alt="Home" />
      </div>
    </div>
  );
}

export default Home;
