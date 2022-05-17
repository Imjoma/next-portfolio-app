import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tech_stacks, certificates } from "../../helper/data";
import aboutImage from "../../public/src/assets/porfolio-logo.png";
import TechStack from "./TechStack";
import Certificates from "./Certificates";

import styles from "../../styles/Global.module.css";
import Button from "../Button";

const About = () => {
  return (
    <>
      <section id="about" className="w-full text-dark dark:text-light">
        {/* headings */}
        <div className="pb-8 text-6xl font-bold dark:text-light text-dark">
          About<span className="text-accent">.</span>
        </div>
        {/* grid: grid grid-cols-2 || flex ... h-96*/}
        <div className="relative sm:h-96 h-screen-custom ">
          <div className="flex flex-row">
            {/* info : row-span-1 */}
            <div className="indent-8 z-20  text-lg w-full leading-8  justify-self-start">
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
              <a className="absolute bottom-0 z-20 py-4 text-base text-center uppercase w-60 md:text-lg md:px-10 text-light hover:bg-dark-200 bg-dark-100">
                View More
              </a>
            </Link>
          </div>
        </div>
        {/* additional: mighgt hide on mobile */}
        <div className="flex flex-col mt-36 md:flex-row">
          {/* tech stack */}
          <div className="relative z-20 basis-full ">
            <div className="text-3xl font-bold ">Tech Stack</div>
            <div className="pb-8  opacity-80">
              Basic to moderate understanding in
            </div>
            <div className="z-20 overflow-hidden h-100 ">
              <div className="absolute z-30 w-full h-20 to-light-500 bg-gradient-to-t from-transparent dark:to-dark"></div>
              {/* animate-infiniteScroll */}
              <div className=" animate-infiniteScroll">
                {tech_stacks.map((stack) => (
                  <TechStack key={stack.id} stack={stack} />
                ))}
              </div>
              {/* animate-infiniteScroll  */}
              <div className=" animate-infiniteScroll">
                {tech_stacks.map((stack) => (
                  <TechStack key={stack.id} stack={stack} />
                ))}
              </div>

              <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t dark:from-dark from-light-500 to-transparent"></div>
            </div>
          </div>
          {/* cert: grid ? col-start-2, row-span-1 */}
          <div className="z-20 basis-full mt-14 md:mt-0 md:translate-y-20 justify-self-start ">
            <div className="text-3xl font-bold ">Certificates</div>
            <div className="pb-8 opacity-80">Attended some webinar about</div>
            <div className="h-auto">
              {certificates.map((certificate) => (
                <Certificates certificate={certificate} key={certificate.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
