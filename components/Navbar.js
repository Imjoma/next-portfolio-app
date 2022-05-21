import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import logo from "../public/src/assets/ioLogo.png";
import Image from "next/image";

import { useTheme } from "next-themes";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../config/animation";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const { theme, setTheme } = useTheme();
  // const [themeIcon, setThemeIcon] = useState(null);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     setThemeIcon(<BsFillSunFill />);
  //   } else {
  //     setThemeIcon(<BsFillMoonFill />);
  //   }
  // }, [theme]);

  const toggleTheme = () => {
    // if light? change to dark else light
    setTheme(theme === "light" ? "dark" : "light");
  };

  const Menu = () => {
    const className =
      "block px-4 py-2 text-sm hover:opacity-70 md:rounded-md hover:bg-light-500 md:hover:dark:bg-transparent hover:dark:bg-dark-400 dark:text-light ";

    return (
      <>
        <Link href="/">
          <a className={className} onClick={() => setMenu(!menu)}>
            Home
          </a>
        </Link>
        <Link href="/designs">
          <a className={className} onClick={() => setMenu(!menu)}>
            Designs
          </a>
        </Link>
        <Link href="/projects">
          <a className={className} onClick={() => setMenu(!menu)}>
            Projects
          </a>
        </Link>
        <Link href="/about">
          <a className={className} onClick={() => setMenu(!menu)}>
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className={className} onClick={() => setMenu(!menu)}>
            Contact
          </a>
        </Link>
      </>
    );
  };

  return (
    <>
      {/* original: 1195px */}
      {/* available tw-class: max-w-screen-xl === max-width: 1280px; */}
      <nav className="flex items-center justify-between h-24 px-5 mx-auto font-medium backdrop-blur-lg bg-light-500/80 dark:bg-dark/90 md:px-20">
        {/* Left: Logo */}
        <motion.div
          className=""
          variants={fadeLeft}
          initial="initial"
          animate="animate"
        >
          <Link href="/">
            <a>
              <Image
                className=""
                src={logo}
                alt="website logo"
                width="56"
                height="56"
                layout="intrinsic"
              />
            </a>
          </Link>
        </motion.div>
        {/* Right: NavLinks */}
        <motion.div
          className="items-center hidden space-x-2 text-sm md:flex text-dark dark:text-light"
          variants={fadeRight}
          initial="initial"
          animate="animate"
        >
          <Menu />
          <button
            aria-label="Theme Button"
            className="p-3 text-lg duration-100 ease-out border rounded-lg active:scale-95 border-dark dark:border-light "
            onClick={() => toggleTheme()}
          >
            {/* error: always render moon icon every reload */}
            {/* {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />} */}
            {/* {themeIcon} */}
            <CgDarkMode />
          </button>
        </motion.div>
        {/* Right: Dark Mode and Menu */}
        <motion.div
          className="flex space-x-2 md:hidden text-dark dark:text-light"
          variants={fadeRight}
          initial="initial"
          animate="animate"
        >
          <button
            aria-label="Theme Button"
            className="p-3 text-lg duration-100 ease-out border rounded-lg active:scale-95 border-dark dark:border-light "
            onClick={() => toggleTheme()}
          >
            {/* error: always render moon icon every reload */}
            {/* {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />} */}
            {/* {themeIcon} */}
            <CgDarkMode />
          </button>
          <button
            aria-label="Menu Button"
            className="relative p-2 text-2xl duration-100 ease-out border rounded-lg active:scale-95 border-dark dark:border-light"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoMenu /> : <IoClose />}
          </button>
          {/* Right: Drop down menu */}
          {!menu && (
            <div className="absolute flex flex-col w-48 py-1 origin-top-right border rounded-lg border-light drop-shadow-md bg-light-200 dark:bg-dark-300 right-5 mt-14">
              <Menu />
            </div>
          )}
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
