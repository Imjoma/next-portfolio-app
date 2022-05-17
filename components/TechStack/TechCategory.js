import { tech_stacks } from "../../helper/data";
import TechList from "./TechList";

const TechCategory = () => {
  const categories = [
    "version control",
    "frontend",
    "backend",
    "database",
    "mobile development",
    "programming language",
  ];

  return (
    <>
      {/* category */}
      {categories.map((category) => (
        <div key={category} className="capitalize ">
          <div className="pb-4 text-xl opacity-80">{category}</div>
          {/* techs for the category */}
          <TechList
            tech_stacks={tech_stacks.filter(
              (tech) => tech.category === category
            )}
          />
        </div>
      ))}
    </>
  );
};

export default TechCategory;

{
  /* <div className="flex flex-row space-x-2">
  <div className="flex flex-row items-center justify-center px-6 py-2 space-x-2 border rounded-md">
    <BsGithub />
    <span>git</span>
  </div>
</div> */
}
