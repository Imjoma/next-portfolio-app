import { BiChevronRight } from "react-icons/bi";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Features from "../../components/Features";

import { projects } from "../../helper/data";
import DataLinks from "../../components/DataLinks";

import { motion } from "framer-motion";
import { routeAnimation, fadeLeft, fadeRight } from "../../config/animation";

export const getStaticPaths = async () => {
  const data = projects;

  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const projectId = context.params.id;

  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );

  return {
    props: { data: project },
  };
};

const ProjectDetails = ({
  data: {
    name,
    figma_url,
    deployed_url,
    github_url,
    image_path,
    description,
    key_techs,
    version,
    features,
  },
}) => {
  const ReusableLinks = () => {
    return (
      <>
        <div className="pt-16 pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
          Links
        </div>
        <div className="flex flex-col space-y-2">
          <DataLinks
            deployed_url={deployed_url}
            github_url={github_url}
            figma_url={figma_url}
          />
        </div>
      </>
    );
  };

  // make an array of links that will use as a context for links js
  return (
    <>
      <Head>
        <title>Project - {name} </title>
        <meta
          name="Frontend Developer Project"
          content="Some projects of a web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className="max-w-screen-lg mx-auto text-light"
        //   for the nav
        style={{ paddingTop: "96px" }}
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* back */}
        <Link href="/projects" passHref>
          <a className="flex flex-row items-center text-lg font-medium duration-100 ease-out select-none active:scale-95 w-fit text-accent">
            Projects <BiChevronRight />
          </a>
        </Link>
        {/* headings: project name */}
        <div className="pb-8 text-5xl font-bold dark:text-light text-dark">
          {name}
        </div>
        {/* header */}
        <motion.div className="flex flex-col gap-0 lg:flex-row lg:gap-8">
          {/* header:left */}
          <motion.div
            className="pb-24 basis-2/5 lg:pb-0"
            variants={fadeLeft}
            initial="initial"
            animate="animate"
          >
            {/* project description */}
            <div className="text-lg text-dark dark:text-light">
              {description}
            </div>
            <div className="hidden lg:block w-80">
              <ReusableLinks />
            </div>
            {/* smaller heading */}
            <div className="hidden lg:block w-80">
              <div className="pt-16 pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
                Stack
              </div>
              <div className="space-y-4 overflow-y-auto h-60 text-dark dark:text-light">
                {key_techs.map((tech) => (
                  <div
                    key={tech}
                    className="py-2 text-base text-center border rounded-sm dark:border-light border-dark text-dark dark:text-light"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* header:right ...project and features */}
          <motion.div
            className="relative flex flex-col gap-2 pt-12 h-fit lg:pb-4 lg:pl-4 lg:pt-0 lg:border-b lg:border-l border-dark dark:border-light basis-3/5"
            variants={fadeRight}
            initial="initial"
            animate="animate"
          >
            {/* Image */}
            <div className="relative -translate-y-12 lg:ml-auto">
              {/* shadow */}
              <div className="absolute top-0 hidden -translate-x-12 translate-y-12 opacity-50 lg:block w-96 h-60 bg-gradient-to-t from-transparent to-accent"></div>
              <div className="relative lg:w-96 lg:h-60">
                <Image
                  src={image_path}
                  className="absolute "
                  alt={`${name} image`}
                  width="300"
                  height="180"
                  layout="responsive"
                  objectFit="cover"
                />

                {/* version */}
                <div className="absolute px-2 py-1 rounded-sm -top-4 right-4 text-light bg-dark-500">
                  version {version}
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="relative basis-1/2">
              {/* smaller heading */}
              <div className="pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
                Features
              </div>
              <div>
                {features.map((feature) => (
                  <Features key={feature} feature={feature} />
                ))}
              </div>
            </div>
            <div className="block lg:hidden w-80">
              <ReusableLinks />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectDetails;
