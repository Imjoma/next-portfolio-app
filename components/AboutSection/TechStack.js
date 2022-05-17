import React from "react";

const TechStack = ({ stack: { id, name } }) => {
  return (
    <>
      <div className="">
        {/* each stack */}
        <div className="w-full p-4 text-center border dark:border-light border-dark md:w-60">
          {name}
        </div>
      </div>
    </>
  );
};

export default TechStack;
