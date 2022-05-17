import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/src/assets/photo.webp";

const Contact = () => {
  const classFirstMessage =
    "px-6 py-4 bg-light dark:bg-dark-500 w-fit rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-md";
  const classDefaultMessage =
    "px-6 py-4  bg-light dark:bg-dark-500 w-fit rounded-tr-3xl rounded-br-3xl rounded-tl-md rounded-bl-md";
  const classLastMessage =
    "px-6 py-4  bg-light dark:bg-dark-500 w-fit rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-md";

  return (
    <>
      {/* not a good practice, 12rem... consider the footer and the nav */}
      <div
      // style={{ height: "calc(100vh - 12.5rem" }}
      >
        {/* headings */}
        <div
          id="contact"
          className="pb-8 text-6xl font-bold pb dark:text-light text-dark"
        >
          Contact<span className="text-accent">.</span>
        </div>
        <div className="flex flex-col w-full px-4 text-center sm:w-3/5">
          <div className="flex flex-row items-end gap-4 pb-4 border-b border-dark-500">
            {/* avatar images */}
            <div className="relative w-16 h-16 ">
              <Image
                src={avatar}
                className="absolute rounded-full"
                alt="contact avatar"
                objectFit="cover"
                layout="fill"
              />
            </div>
            {/* messages */}
            <div className="flex flex-col space-y-2 text-lg text-left dark:text-light text-dark">
              <div className={classFirstMessage}>Have a question?</div>
              <div className={classDefaultMessage}>want to say hi?</div>
              <div className={classLastMessage}>...</div>
            </div>
          </div>
          {/* reply button */}
          <a
            href="mailto:jomaipio@gmail.com"
            className="px-10 hover:bg-dark-200 py-4 my-4 ml-auto text-base uppercase w-fit md:text-lg text-light bg-dark-100"
          >
            Send
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
