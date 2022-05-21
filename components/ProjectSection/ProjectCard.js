import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  project: {
    // category,
    // deployed_url,
    // description,
    // duration,
    // features,
    // figma_url,
    // github_url,
    id,
    image_path,
    // key_techs,
    // name,
    // version,
  },
}) => {
  return (
    <>
      <Link href={"/projects/" + id} passHref>
        <div className="duration-300 ease-out active:scale-98">
          <Image
            src={image_path}
            className="cursor-pointer "
            alt="Design Image"
            width="300"
            height="180"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
