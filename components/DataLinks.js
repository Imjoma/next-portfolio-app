import { BsGlobe } from "react-icons/bs";
import { SiFigma } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const DataLinks = ({ deployed_url, figma_url, github_url }) => {
  const UrlExist = () => {
    //   check if the url is legit
    return (
      <>
        {figma_url ? (
          <a
            href={figma_url}
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {figma_url}{" "}
          </a>
        ) : (
          <p className="capitalize text-dark opacity-70 dark:text-light">
            no data
          </p>
        )}
      </>
    );
  };

  return (
    <>
      {/* deployed url */}
      <div className="flex flex-row items-start space-x-2 text-base text-dark dark:text-light">
        <span className="translate-y-1">
          <BsGlobe />
        </span>
        <a
          href={deployed_url}
          className="text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {deployed_url}{" "}
        </a>
      </div>
      {/* figma url */}
      <div className="flex flex-row items-start space-x-2 text-base text-dark dark:text-light">
        <span className="translate-y-1">
          <SiFigma />
        </span>
        <UrlExist />
      </div>
      {/* github url */}
      <div className="flex flex-row items-start space-x-2 text-base text-dark dark:text-light">
        <span className="translate-y-1">
          <BsGithub />
        </span>
        <a
          href={github_url}
          className="text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {github_url}{" "}
        </a>
      </div>
    </>
  );
};

export default DataLinks;
