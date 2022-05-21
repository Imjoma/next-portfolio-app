import Head from "next/head";
import Image from "next/image";
import myImage from "../public/src/assets/DSC02160.JPG";
import TechCategory from "../components/TechStack/TechCategory";
import Certificate from "../components/Certificate/Certificate";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  routeAnimation,
} from "../config/animation";

const about = () => {
  return (
    <>
      <Head>
        <title>About - Jose Maria Ipio </title>
        <meta
          name="Frontend Developer Profile"
          content="Wondering if my portfolio is marketable. Anyway, this is the type of person I am outside coding/programming."
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
          About
        </div>
        {/* header */}
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-8">
          {/* header:left */}
          <motion.div
            className="pb-24 basis-2/5 lg:pb-0"
            variants={fadeLeft}
            initial="initial"
            animate="animate"
          >
            {/* smaller heading */}
            <div className="pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
              motto
            </div>
            {/* paragraph */}
            <div className="text-lg italic text-dark dark:text-light">
              “<span className="font-semibold opacity-100">Mind </span>
              <span className=" opacity-80">to visualize,</span>{" "}
              <span className="font-semibold opacity-100"> Dreams </span>{" "}
              <span className=" opacity-80">to initiate,</span>
              <span className="font-semibold opacity-100"> Self </span>{" "}
              <span className=" opacity-80">to keep going,</span>{" "}
              <span className="font-semibold opacity-100">Body </span>
              <span className=" opacity-80">as a figure and</span>
              <span className="font-semibold opacity-100">
                {" "}
                Everything
              </span>{" "}
              <span className=" opacity-80">will follow</span>”
            </div>
          </motion.div>
          {/* header:right ...info and image */}
          <motion.div
            className="relative flex flex-col-reverse gap-2 pb-4 pl-4 border-dark dark:border-light lg:border-b lg:border-l lg:flex-row basis-3/5"
            variants={fadeRight}
            initial="initial"
            animate="animate"
          >
            {/* Bio */}
            <div className="relative basis-1/2">
              {/* smaller heading */}
              <div className="pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
                Bio
              </div>
              {/* info */}
              {/* more info */}
              <div className="relative pr-4 space-y-4 overflow-auto h-80 ">
                <div className="flex justify-start pr-4 text-2xl capitalize lg:justify-end dark:text-light text-dark">
                  <div>Jose Maria Ipio</div>
                </div>
                <p className="text-justify indent-8 text-dark dark:text-light opacity-80">
                  In 2022, I graduated at ICCT Colleges equipped with a
                  Bachelor&apos;s Degree in Information Technology.
                </p>
                <p className="text-justify indent-8 text-dark dark:text-light opacity-80 ">
                  My main focus these days is to design and develop web
                  applications.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from:light dark:from-dark to-transparent"></div>
              {/* resume */}
              <a
                href="/src/assets/cv/JoseMariaIpio-resume2021.pdf"
                target="_blank"
                className="absolute bottom-0 left-0 flex flex-row pt-16 space-x-2 uppercase duration-100 ease-out origin-bottom-left active:scale-98 hover:opacity-70 dark:text-light text-dark pointer"
              >
                <span>resume</span>
                <span className="text-md">
                  <BsArrowUpRight />
                </span>
              </a>
            </div>
            {/* Image */}
            <div className="relative mx-auto basis-1/2">
              {/* shadow */}
              <div className="absolute top-0 left-0 hidden translate-x-8 opacity-50 lg:block w-60 h-96 bg-gradient-to-t from-transparent to-accent"></div>
              {/* image */}
              <div className="relative -translate-y-8 w-60 h-96 bg-dark-500">
                <Image
                  src={myImage}
                  className="scale-125 -translate-x-2 "
                  alt="profile image"
                  objectFit="cover"
                  layout="fill"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* tech stack */}
        <div className="pt-24 dark:text-light text-dark">
          {/* smaller heading */}
          <div className="pb-8 text-3xl font-bold capitalize ">tech stack</div>
          {/* MAKE THIS DYNAMIC BY FILTERING THE TECH WITH CATEGORY */}
          <div className="flex flex-col space-y-8">
            {/* list of tech stack */}
            <TechCategory />
          </div>
        </div>
        {/* certificate */}
        <div className="pt-24 dark:text-light text-dark">
          {/* smaller heading */}
          <div className="pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
            Certificate
          </div>
          {/* MAKE THIS DYNAMIC BY FILTERING THE TECH WITH CATEGORY */}
          <div className="flex flex-col space-y-4 md:space-y-8">
            {/* list of tech certificates */}
            <Certificate />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default about;
