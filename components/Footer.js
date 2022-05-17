import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      id: 1,
      link: "https://www.facebook.com/joma.ipio.7/",
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/jomaipio/",
      icon: <RiInstagramFill />,
    },
    {
      id: 3,
      link: "https://github.com/Imjoma",
      icon: <BsGithub />,
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/jose-maria-ipio-910a711b1/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <>
      <footer className="px-5 pt-16 mx-auto md:px-20 dark:text-light text-dark">
        <div className="py-8 border-t border-dark-500">
          <div className="flex items-center justify-between h-10">
            {/* name */}
            <div className="text-lg font-bold">
              Jose Maria Ip<span className="text-accent">.io</span>
            </div>
            {/* socials */}
            <div className="flex flex-row space-x-2 text-xl ">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-2 rounded-full text-light bg-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

{
  /* <a
href="https://www.facebook.com/joma.ipio.7/"
target="_blank"
rel="noreferrer"
className="flex items-center justify-center p-2 rounded-full text-light bg-accent"
>
<FaFacebookF />
</a> */
}
