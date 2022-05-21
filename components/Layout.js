import React from "react";
import Navbar from "./Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { slowFadeUp, introDelay, intro } from "../config/animation";

const Layout = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(1);
  const [curScrollPos, setCurScrollPos] = useState(0);

  useEffect(() => {
    // set current scroll position with the value of pageYOffset
    setCurScrollPos(window.pageYOffset);
    // onscroll function:
    window.onscroll = () => {
      // set the current scroll position with the new value of pageYOffset
      const event = window.pageYOffset;
      setCurScrollPos(event);
      // set the previous scroll with the current value
      setPrevScrollPos(curScrollPos);
    };
  }, [curScrollPos]);

  return (
    <>
      {/* must be the same as darkMode in tailwind.config.js  */}
      <ThemeProvider attribute="class">
        {/* -translate-y-full toggle this with useeffect */}
        <motion.div
          variants={intro}
          initial="initial"
          animate="animate"
          // ${prevScrollPos <= curScrollPos && "-translate-y-full"}
          className={`transition fixed z-50 w-full ${
            prevScrollPos <= curScrollPos && "-translate-y-full"
          }`}
        >
          <Navbar />
        </motion.div>
        {/* max-w-screen-lg */}
        <motion.div
          variants={introDelay}
          initial="initial"
          animate="animate"
          className="px-5 mx-auto md:px-20"
        >
          {children}
        </motion.div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
