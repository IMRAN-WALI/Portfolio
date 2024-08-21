import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio"
          main="THIS IS MY PORTFOLIO MADE THROUGH USING JAVASCRIPT"
        />
        <ProjectCard
          title="Youtube Clone"
          main="THIS IS MY PORTFOLIO MADE THROUGH USING JAVASCRIPT"
        />
        <ProjectCard
          title="Netflix Clone"
          main="THIS IS MY PORTFOLIO MADE THROUGH USING JAVASCRIPT"
        />
      </div>
    </div>
  );
}

export default Projects;
