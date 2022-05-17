import React from "react";
import { projects } from "../../helper/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <>
      <section id="projects" className="w-full text-dark dark:text-light">
        {/* headings */}
        <div className="pb-8 text-6xl font-bold dark:text-light text-dark">
          Projects<span className="text-accent">.</span>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              //   showDetail={showDetail}
              //   setShowDetail={setShowDetail}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
