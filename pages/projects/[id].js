import { BiChevronRight } from "react-icons/bi";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Features from "../../components/Features";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.LOCAL_URL}/api/projects`);
  const data = await res.json();

  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const projectId = context.params.id;
  const res = await fetch(`${process.env.LOCAL_URL}/api/projects/` + projectId);
  const data = await res.json();

  return {
    props: { data },
  };
};

const ProjectDetails = ({
  data: { name, image_path, description, key_techs, version, features },
}) => {
  return (
    <>
      <Head>
        <title>Project - {name} </title>
        <meta
          name="Frontend Developer Project"
          content="Wondering if my portfolio is marketable. Anyway, this is the type of person I am outside coding/programming."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="max-w-screen-lg mx-auto text-light"
        //   for the nav
        style={{ paddingTop: "96px" }}
      >
        {/* back */}
        <Link href="/projects" passHref>
          <a className="flex flex-row items-center text-lg font-medium text-accent">
            Projects <BiChevronRight />
          </a>
        </Link>
        {/* headings: project name */}
        <div className="pb-8 text-5xl font-bold dark:text-light text-dark">
          {name}
        </div>
        {/* header */}
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-8">
          {/* header:left */}
          <div className="pb-24 basis-2/5 lg:pb-0">
            {/* project description */}
            <div className="text-lg text-dark dark:text-light">
              {description}
            </div>
            {/* smaller heading */}
            <div className="hidden lg:block w-80">
              <div className="pt-16 pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
                Stack
              </div>
              <div className="space-y-4 overflow-y-auto h-60 text-dark dark:text-light">
                {key_techs.map((tech) => (
                  <div
                    key={tech}
                    className="py-2 text-base text-center border rounded-sm dark:border-light border-dark text-dark dark:text-light"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* header:right ...project and features */}
          <div
            className="relative flex flex-col gap-2 pt-12 lg:pb-4 lg:pl-4 lg:pt-0 lg:border-b lg:border-l basis-3/5"
            // style={{ height: "450px" }}
          >
            {/* Image */}
            <div className="relative -translate-y-12 lg:ml-auto">
              {/* shadow */}
              <div className="absolute top-0 hidden -translate-x-12 translate-y-12 opacity-50 lg:block w-96 h-60 bg-gradient-to-t from-transparent to-accent"></div>
              <div className="relative lg:w-96 lg:h-60">
                <Image
                  src={image_path}
                  className="absolute"
                  alt={`${name} image`}
                  width="300"
                  height="180"
                  layout="responsive"
                  objectFit="cover"
                />
                {/* version */}
                <div className="absolute px-2 py-1 rounded-sm -top-4 right-4 text-light bg-dark-500">
                  version {version}
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="relative basis-1/2">
              {/* smaller heading */}
              <div className="pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
                Features
              </div>
              <div>
                {features.map((feature) => (
                  <Features key={feature} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
