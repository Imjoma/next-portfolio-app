import React from "react";

const Certificates = ({ certificate: { id, name } }) => {
  return (
    <>
      <div>
        <div className="px-8 py-4 mb-4 border rounded-md dark:border-light border-dark text-start ">
          {name}
        </div>
      </div>
    </>
  );
};

export default Certificates;
