const TechsList = ({ tech_stacks }) => {
  return (
    <>
      {tech_stacks.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-4">
          {tech_stacks.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center justify-center px-6 py-2 space-x-2 border rounded-sm border-dark dark:border-light dark:text-light text-dark"
            >
              <tech.Icon />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-6 py-2 ">
          <span>No Data</span>
        </div>
      )}
    </>
  );
};

export default TechsList;
