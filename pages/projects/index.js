import Head from "next/head";
import ProjectCard from "../../components/ProjectPage/ProjectCard";

export const getStaticProps = async () => {
  // get the response from api
  const res = await fetch(`${process.env.LOCAL_URL}/api/projects`);
  // convert the res to json
  const data = await res.json();
  // return the json data
  return {
    props: { projects: data },
  };
};

const ProjectIndex = ({ projects }) => {
  //if toggle or view more
  // const [projects, setProjects] = useState([]);

  // const fetchProjects = async () => {
  //   const res = await fetch("/api/projects");
  //   const data = await res.json();

  //   setProjects(data);
  // };

  return (
    <>
      <Head>
        <title>Projects - Jose Maria Ipio </title>
        <meta
          name="Frontend Developer Projects"
          content="Some of my web application projects that shows my development skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-lg mx-auto text-light">
        {/* headings */}
        <div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          //   for the nav
          style={{ paddingTop: "96px" }}
        >
          Projects
        </div>
        {/* list of projects */}

        <div className="flex flex-col space-y-8">
          {/* list of tech certificates */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectIndex;

// {/* header */}
// <div className="flex flex-col gap-0 lg:flex-row lg:gap-8">
// {/* header:left */}
// <div className="pb-24 basis-2/5 lg:pb-0">
//   {/* smaller heading */}
//   <div className="pb-8 text-3xl font-bold capitalize dark:text-light text-dark">
//     Dependencies
//   </div>
//   {/* tech for the projects */}
//   <div className="text-lg italic text-dark dark:text-light"></div>
// </div>
// {/* header:right ... devDependencies */}
// <div className="flex flex-col pb-4 pl-4 only:border-l-none lg:border-b lg:border-l lg:flex-row basis-3/5"></div>
// </div>
