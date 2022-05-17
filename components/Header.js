import React from "react";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <>
      {/* bg-light dark:bg-dark" */}
      <div className="flex flex-col items-center h-full md:items-start justify-evenly md:justify-center text-dark-500 dark:text-light">
        <div className="flex flex-col items-center md:items-start ">
          {/* greetings */}
          <div className="p-3 text-base rounded-lg text-light bg-dark-500 md:text-lg w-fit">
            Hi, my name is Joma!
          </div>
          {/* brand name || name */}
          <div className="mt-6 text-4xl font-extrabold text-center dark:text-light text-dark-500 md:text-7xl md:text-left">
            Jose Maria Ip<span className="text-accent">.io</span>
          </div>
          {/* short description || info */}
          <div className="mt-5 text-base font-medium md:text-lg">
            22 | Developer and Designer | Philippines
          </div>
        </div>
        {/* cta */}
        <div className="flex flex-col space-y-4 md:mt-20 w-60 md:w-full md:space-y-0 md:space-x-4 md:flex-row">
          <Link href="#contact" passHref>
            <Button buttonText="get in touch" />
          </Link>
          <Button
            href="/src/assets/cv/JoseMariaIpio-resume2021.pdf"
            target="_blank"
            buttonText="Resume"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <div className="flex flex-col space-y-4 md:mt-20 w-60 md:w-full md:space-y-0 md:space-x-4 md:flex-row">
          <Link href="#contact">
            <a className="py-4 text-base text-center uppercase md:text-lg md:px-10 text-light bg-dark-100">
              get in touch
            </a>
          </Link>
          <a
            href="/src/assets/cv/JoseMariaIpio-resume2021.pdf"
            download="JoseMariaIpio-resume2021.pdf"
            className="py-4 text-base text-center uppercase md:text-lg md:px-10 text-light bg-dark-100"
          >
            resume
          </a>
        </div> */
}
