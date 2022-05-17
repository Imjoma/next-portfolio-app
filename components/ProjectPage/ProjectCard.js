import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project: { id, name, field, description, key_techs, image_path },
}) => {
  return (
    <>
      <Link href={"/projects/" + id} passHref>
        <div className="relative flex flex-col gap-6 p-4 overflow-hidden border rounded-lg cursor-pointer lg:gap-12 group lg:flex-row  border-light hover:border-dark dark:border-dark-500  dark:hover:border-light dark:text-light ">
          {/* project Iamge */}
          <div className="relative w-full mx-auto md:w-96 ">
            <Image
              src={image_path}
              className=" rounded-sm "
              alt="Project Image"
              width="300"
              height="180"
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full group-hover:flex bg-dark/70 ">
              View Project
            </div>
          </div>
          {/* project Info */}
          <div className="flex flex-col space-y-4">
            <div className="text-4xl font-bold text-dark dark:text-light">
              {name}
            </div>
            <div className="text-base indent-4 text-dark dark:text-light">
              {description}
            </div>
            <div className="flex flex-row flex-wrap gap-3 pt-4">
              <span className="text-dark/80 dark:text-light/80">
                Key Techs :
              </span>
              <KeyTechs key_techs={key_techs} />
            </div>
          </div>
          {/* project overflow */}
          <div className="absolute top-0 right-0 w-20 h-full lg:bg-gradient-to-r from-transparent to-light-500 dark:to-dark "></div>
        </div>
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
          className="space-x-4 dark:text-light text-dark bg-light-300 dark:bg-dark-300 "
          key={idx}
        >
          {tech}
        </div>
      ))}
    </>
  );
};
