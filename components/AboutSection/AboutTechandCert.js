import Certificates from "./Certificates";
import TechStack from "./TechStack";

import { tech_stacks, certificates } from "../../helper/data";

// import { motion } from "framer-motion";
// import useScrollReveal from "../../config/useScrollReveal";
// import { fadeLeft, fadeRight } from "../../config/animation";

const AboutTechandCert = () => {
  // const { ref, animation } = useScrollReveal();
  return (
    <>
      {/* tech stack */}
      <div
        className="relative z-20 basis-full "
        // variants={fadeLeft}
        // ref={ref}
        // animate={animation}
      >
        <div className="text-3xl font-bold ">Tech Stack</div>
        <div className="pb-8 opacity-80">
          Basic to moderate understanding in
        </div>
        <div className="z-20 overflow-hidden h-100 ">
          <div className="absolute z-30 w-full h-20 to-light-500 bg-gradient-to-t from-transparent dark:to-dark"></div>
          {/* animate-infiniteScroll */}
          <div className=" animate-infiniteScroll">
            {tech_stacks.map((stack) => (
              <TechStack key={stack.id} stack={stack} />
            ))}
          </div>
          {/* animate-infiniteScroll  */}
          <div className=" animate-infiniteScroll">
            {tech_stacks.map((stack) => (
              <TechStack key={stack.id} stack={stack} />
            ))}
          </div>

          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t dark:from-dark from-light-500 to-transparent"></div>
        </div>
      </div>
      {/* cert: grid ? col-start-2, row-span-1 */}
      <div
        className="z-20 basis-full mt-14 md:mt-0 md:translate-y-20 justify-self-start "
        // variants={fadeRight}
        // ref={ref}
        // animate={animation}
      >
        <div className="text-3xl font-bold ">Certificates</div>
        <div className="pb-8 opacity-80">Attended some webinar about</div>
        <div className="h-auto">
          {certificates.map((certificate) => (
            <Certificates certificate={certificate} key={certificate.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutTechandCert;
