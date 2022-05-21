import { useState } from "react";

import { designs } from "../../helper/data";
import DesignCard from "./DesignCard";

import { motion } from "framer-motion";
import useScrollReveal from "../../config/useScrollReveal";
import {
  fadeUp,
  cardsStagger,
  fadeLeftHeading,
  stagger,
} from "../../config/animation";

const Design = () => {
  const [modal, setModal] = useState(null);
  const { ref, animation } = useScrollReveal();

  return (
    <>
      <motion.section
        id="designs"
        className="w-full text-dark dark:text-light"
        variants={stagger}
        animate={animation}
      >
        {/* headings */}
        <motion.div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          ref={ref}
          variants={fadeLeftHeading}
        >
          Designs<span className="text-accent">.</span>
        </motion.div>
        {/* grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          ref={ref}
          variants={fadeUp}
          // variants={cardsStagger}
          // animate={animation}
        >
          {designs.map((design) => (
            <div
              key={design.id}
              //  variants={fadeInUp}
            >
              <DesignCard
                key={design.id}
                design={design}
                modal={modal}
                setModal={setModal}
                designs={designs}
              />
            </div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Design;
