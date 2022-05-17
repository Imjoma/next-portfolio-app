import { useState } from "react";

import { designs } from "../../helper/data";
import DesignCard from "./DesignCard";

const Design = () => {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section id="designs" className="w-full text-dark dark:text-light">
        {/* headings */}
        <div className="pb-8 text-6xl font-bold dark:text-light text-dark">
          Designs<span className="text-accent">.</span>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <DesignCard
              key={design.id}
              design={design}
              modal={modal}
              setModal={setModal}
              designs={designs}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Design;
