import React from "react";
import { projects } from "../../helper/data";
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";
import useScrollReveal from "../../config/useScrollReveal";
import { fadeUp, fadeLeftHeading, stagger } from "../../config/animation";

const Project = () => {
  const { ref, animation } = useScrollReveal();
  return (
    <>
      <motion.section
        id="projects"
        className="w-full text-dark dark:text-light"
        variants={stagger}
        animate={animation}
      >
        {/* headings */}
        <motion.div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          ref={ref}
          variants={fadeLeftHeading}
        >
          Projects<span className="text-accent">.</span>
        </motion.div>
        {/* grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          ref={ref}
          variants={fadeUp}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Project;
