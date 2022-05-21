import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  stagger,
  slowFadeUp,
  fadeUp,
  delaySlowFadeUp,
} from "../config/animation";

const Header = () => {
  return (
    <>
      {/* bg-light dark:bg-dark" */}
      <div className="flex flex-col items-center h-full md:items-start justify-evenly md:justify-center text-dark-500 dark:text-light">
        <motion.div
          className="flex flex-col items-center md:items-start "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* greetings */}
          <motion.div className="greetings" variants={slowFadeUp}>
            Hi, my name is Joma!
          </motion.div>
          {/* brand name || name */}
          <motion.div className="brandName" variants={slowFadeUp}>
            Jose Maria Ip<span className="text-accent">.io</span>
          </motion.div>
          {/* short description || info */}
          <motion.div className="info" variants={slowFadeUp}>
            22 | Developer and Designer | Philippines
          </motion.div>
        </motion.div>
        {/* cta */}
        <motion.div
          className="flex flex-col space-y-4 md:mt-20 w-60 md:w-full md:space-y-0 md:space-x-4 md:flex-row"
          variants={delaySlowFadeUp}
          initial="initial"
          animate="animate"
        >
          <Link href="#contact" passHref>
            <a href={"get in touch"} className="headerButton">
              get in touch
            </a>
          </Link>
          <a
            href="/src/assets/cv/JoseMariaIpio-resume2021.pdf"
            target="_blank"
            rel="noreferrer"
            className="headerButton"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
