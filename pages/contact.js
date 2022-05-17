import Head from "next/head";
import Image from "next/image";
import avatar from "../public/src/assets/photo.webp";

const ContactPage = () => {
  const classFirstMessage =
    "px-6 py-4 bg-light dark:bg-dark-500 w-fit rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-md";
  const classDefaultMessage =
    "px-6 py-4  bg-light dark:bg-dark-500 w-fit rounded-tr-3xl rounded-br-3xl rounded-tl-md rounded-bl-md";
  const classLastMessage =
    "px-6 py-4  bg-light dark:bg-dark-500 w-fit rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-md";

  return (
    <>
      <Head>
        <title>Contact - Jose Maria Ipio </title>
        <meta name="Frontend Developer Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-lg mx-auto text-light">
        {/* headings */}
        <div
          className="pb-8 text-6xl font-bold dark:text-light text-dark"
          //   for the nav
          style={{ paddingTop: "96px" }}
        >
          Contact
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
            className="px-10 py-4 my-4 ml-auto hover:bg-dark-200 text-base uppercase w-fit md:text-lg text-light bg-dark-100"
          >
            Send
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
