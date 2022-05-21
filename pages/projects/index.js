import Head from "next/head";
import ProjectCard from "../../components/ProjectPage/ProjectCard";
import { projects } from "../../helper/data";

import { motion } from "framer-motion";
import { routeAnimation } from "../../config/animation";

export const getStaticProps = async () => {
  const data = projects;

  return {
    props: { data },
  };
};

const ProjectIndex = ({ data: projects }) => {
  return (
    <>
      <Head>
        <title>Projects - Jose Maria Ipio </title>
        <meta
          name="Frontend Developer Projects"
          content="Some of my web application projects that shows my development skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="max-w-screen-lg mx-auto text-light"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* headings */}
        <div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          //   for the nav
          style={{ paddingTop: "96px" }}
        >
          Projects
        </div>
        {/* list of projects */}

        <div className="flex flex-col space-y-8">
          {/* list of tech certificates */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectIndex;
