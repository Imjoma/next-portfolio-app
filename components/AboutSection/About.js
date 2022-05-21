import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../public/src/assets/porfolio-logo.png";

import { motion } from "framer-motion";
import useScrollReveal from "../../config/useScrollReveal";
import {
  fadeInUp,
  fadeLeft,
  fadeRight,
  fadeUp,
  fadeLeftHeading,
  stagger,
} from "../../config/animation";
import AboutTechandCert from "./AboutTechandCert";

const About = () => {
  const { ref, animation } = useScrollReveal();
  return (
    <>
      <motion.section
        id="about"
        className="w-full text-dark dark:text-light"
        variants={stagger}
        animate={animation}
        ref={ref}
      >
        {/* headings */}
        <motion.div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          variants={fadeLeftHeading}
        >
          About<span className="text-accent">.</span>
        </motion.div>
        {/* grid: grid grid-cols-2 || flex ... h-96*/}
        <motion.div
          className="relative sm:h-96 h-screen-custom "
          variants={fadeUp}
        >
          <div className="flex flex-row">
            {/* info : row-span-1 */}
            <div className="z-20 w-full text-lg leading-8 indent-8 justify-self-start">
              Hi! my name is Jose Maria Ipio, a 22 year old Front-End Developer
              based in the Philippines. I graduated at ICCT Colleges with a
              Bachelor&apos;s Degree in Information Technology.Still continue my
              journey in the line of Web Development and trying to learn other
              techologies while preparing my self to the new world.
            </div>
            {/* branding : row-span-2 */}
            <div className="z-10 hidden w-full scale-110 translate-x-10 -translate-y-20 lg:flex md:w-auto">
              <Image
                src={aboutImage}
                alt="About Image"
                width="500"
                height="500"
                objectFit="cover"
                layout="fixed"
              />
            </div>
          </div>
          {/* cta : view more */}
          <div className="flex justify-center ">
            <Link href={"/about"}>
              <a className="absolute bottom-0 z-20 py-4 text-base text-center uppercase duration-100 ease-out active:scale-98 w-60 md:text-lg md:px-10 text-light hover:bg-dark-200 bg-dark-100">
                View More
              </a>
            </Link>
          </div>
        </motion.div>
        {/* additional: mighgt hide on mobile */}
        <div className="flex flex-col mt-36 md:flex-row">
          <AboutTechandCert />
        </div>
      </motion.section>
    </>
  );
};

export default About;
