import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeInUp, cardsStagger } from "../../config/animation";

const ProjectCard = ({
  project: { id, name, field, description, key_techs, image_path },
}) => {
  return (
    <>
      <Link href={"/projects/" + id} passHref>
        <motion.div
          className="relative flex flex-col gap-6 p-4 overflow-hidden duration-300 ease-out border rounded-lg cursor-pointer select-none active:scale-98 bg-light dark:bg-dark lg:gap-12 group lg:flex-row border-light hover:border-dark dark:border-dark-500 dark:hover:border-light dark:text-light "
          variants={cardsStagger}
          initial="initial"
          animate="animate"
        >
          {/* project Iamge */}
          <motion.div
            className="relative w-full h-full mx-auto md:w-100 "
            variants={fadeInUp}
          >
            <Image
              src={image_path}
              className="rounded-sm "
              alt="Project Image"
              width="300"
              height="180"
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full group-hover:flex bg-dark/70 ">
              View Project
            </div>
          </motion.div>
          {/* project Info */}
          <motion.div className="flex flex-col space-y-4 " variants={fadeInUp}>
            <div className="text-4xl font-bold text-dark dark:text-light">
              {name}
            </div>
            <div className="text-lg indent-8 text-dark dark:text-light">
              {description}
            </div>
            <div className="flex flex-row flex-wrap gap-3 pt-4">
              <span className="text-dark/80 dark:text-light/80">
                Key Techs :
              </span>
              <KeyTechs key_techs={key_techs} />
            </div>
          </motion.div>
          {/* project overflow */}
          <div className="absolute top-0 right-0 w-20 h-full lg:bg-gradient-to-r from-transparent to-light dark:to-dark "></div>
        </motion.div>
      </Link>
    </>
  );
};

export default ProjectCard;

const KeyTechs = ({ key_techs }) => {
  return (
    <>
      {key_techs.map((tech, idx) => (
        <div
          className="space-x-4 dark:text-light text-dark bg-light-100 dark:bg-dark-300 "
          key={idx}
        >
          {tech}
        </div>
      ))}
    </>
  );
};
