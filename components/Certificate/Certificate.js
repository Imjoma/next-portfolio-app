import { certificates } from "../../helper/data";
import { FaFilePdf } from "react-icons/fa";

const Certificate = () => {
  return (
    <>
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="flex flex-row justify-between gap-2 p-4 capitalize border rounded-lg select-none bg-light dark:bg-dark border-dark-500 dark:text-light md:p-6"
        >
          {/* left */}
          <div className="flex flex-col basis-full">
            <div className="pb-1 text-xl font-medium ">{cert.name}</div>
            <div className="pb-8 text-base italic font-light ">
              {cert.where}
            </div>
            {/* use moment api to format the date */}
            <div className="text-sm italic font-light opacity-80">
              {cert.date}
            </div>
          </div>
          {/* right */}
          <div className="flex items-end justify-end md:items-center ">
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="p-3 text-xl duration-100 ease-out rounded-lg dark:bg-dark-200 hover:dark:bg-dark-400 bg-light-100 active:scale-95 hover:bg-light-200"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Certificate;
