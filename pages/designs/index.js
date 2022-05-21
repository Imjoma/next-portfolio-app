import Head from "next/head";

import DesignCard from "../../components/DesignSection/DesignCard";
import { useState } from "react";
import { designs } from "../../helper/data";
import { motion } from "framer-motion";
import { fadeInUp, cardsStagger, routeAnimation } from "../../config/animation";

export const getStaticProps = async () => {
  // // get the response from api
  // const res = await fetch(`${process.env.LOCAL_URL}/api/designs`);
  // // convert the res to json
  // const data = await res.json();
  // // return the json data
  const data = designs;

  return {
    props: { data },
  };
};
const DesignIndex = ({ data: designs }) => {
  // FILTER:
  // put the data inside an useState to make the designs dynamic
  const [modal, setModal] = useState(null);

  return (
    <>
      <Head>
        <title>Designs - Jose Maria Ipio </title>
        <meta name="description" content="Design, Develop and Deploy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="relative max-w-screen-lg mx-auto overflow-hidden dark:text-light"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* headings */}
        <div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          //   for the nav
          style={{ paddingTop: "96px" }}
        >
          Designs
        </div>
        {/* header */}
        <div className="">
          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={cardsStagger}
            initial="initial"
            animate="animate"
          >
            {designs.map((design) => (
              <motion.div
                className="relative"
                key={design.id}
                variants={fadeInUp}
              >
                <DesignCard
                  designs={designs}
                  design={design}
                  modal={modal}
                  setModal={setModal}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default DesignIndex;
//   const [designs, setDesigns] = useState([]);

//   const fetchDesigns = async () => {
//     const res = await fetch("/api/designs");
//     const data = await res.json();

//     setDesigns(data);
//   };
