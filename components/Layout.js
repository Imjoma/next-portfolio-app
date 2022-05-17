import React from "react";
import Navbar from "./Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {});

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
        <div
          // ${prevScrollPos <= curScrollPos && "-translate-y-full"}
          className={`transition fixed z-50 w-full ${
            prevScrollPos <= curScrollPos && "-translate-y-full"
          }`}
        >
          <Navbar />
        </div>
        {/* max-w-screen-lg */}
        <div className="px-5 mx-auto md:px-20">{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
