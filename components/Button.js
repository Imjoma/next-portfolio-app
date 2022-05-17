import React from "react";

const Button = ({ buttonText, href, target }) => {
  return (
    <>
      <a
        href={href}
        target={target}
        className="relative hover:bg-dark-200  py-4 text-base text-center  uppercase md:text-lg md:px-10 text-light bg-dark-100"
      >
        {buttonText}
      </a>
    </>
  );
};

export default Button;
